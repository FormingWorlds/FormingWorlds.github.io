// Render the testing-page status badges to static SVG files at build time.
//
// The page shows one row per module with test-count, marker, coverage, and CI
// badges. Those figures live as small shields.io endpoint JSON files (test
// counts on each module's `badges` branch, coverage on this site's `badges`
// branch) and as GitHub Actions run results. Asking shields.io to render them
// at page load is unreliable: shields.io fetches the JSON from shared server
// IPs that GitHub rate-limits, so badges intermittently read "rate limited by
// upstream service". This script fetches the same data once at build time and
// renders the badges locally, so the page serves plain same-origin SVGs and
// never depends on shields.io being reachable.
//
// Output: one SVG per badge in public/assets/badges/, named by a stable
// convention the testing page references directly:
//   ci-<slug>.svg  tests-total-<slug>.svg  tests-<marker>-<slug>.svg
//   coverage-<slug>.svg        (slug = repo name, lower-cased)
//
// Every badge always yields a file. When a fetch fails the script keeps an
// existing file if one is present, otherwise writes a neutral placeholder, and
// it always exits 0 so a transient network problem degrades one badge rather
// than failing the whole build. The daily and on-push rebuilds then self-heal.

import { makeBadge } from 'badge-maker';
import * as simpleIcons from 'simple-icons';
import { readFileSync, mkdirSync, existsSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse as parseYaml } from 'yaml';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..');
const DATA_FILE = join(ROOT, 'data', 'test_counts.yml');
const OUT_DIR = join(ROOT, 'public', 'assets', 'badges');
const SITE_REPO = 'FormingWorlds/FormingWorlds.github.io';

const RAW = 'https://raw.githubusercontent.com';
const API = 'https://api.github.com';
const TIMEOUT_MS = 12000;
const RETRIES = 3;

/** White simple-icon as a data URI, ready for badge-maker's logoBase64. */
function logoDataUri(icon) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="whitesmoke"><path d="${icon.path}"/></svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}
const LOGO_GITHUB = logoDataUri(simpleIcons.siGithub);
const LOGO_CODECOV = logoDataUri(simpleIcons.siCodecov);

/** Lower-cased repo name used as the file-name slug for a module. */
const slugOf = (mod) => mod.repo.toLowerCase();

/** Fetch a URL with a timeout and a few retries; returns the Response or null. */
async function fetchWithRetry(url, headers = {}) {
  for (let attempt = 1; attempt <= RETRIES; attempt++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    try {
      const res = await fetch(url, { headers, signal: controller.signal });
      clearTimeout(timer);
      if (res.ok) return res;
      // 4xx other than rate limiting will not fix themselves on retry.
      if (res.status >= 400 && res.status < 500 && res.status !== 403 && res.status !== 429) {
        return null;
      }
    } catch {
      clearTimeout(timer);
    }
    if (attempt < RETRIES) await new Promise((r) => setTimeout(r, 400 * attempt));
  }
  return null;
}

/** Read a shields.io endpoint JSON ({label, message, color}) from a raw URL. */
async function fetchEndpoint(url) {
  const res = await fetchWithRetry(url, { 'User-Agent': 'proteus-badge-build' });
  if (!res) return null;
  try {
    const data = await res.json();
    if (typeof data.message === 'undefined') return null;
    return {
      label: data.label ?? '',
      message: String(data.message),
      color: data.color ?? 'lightgrey',
    };
  } catch {
    return null;
  }
}

/** Read the latest completed main-branch run conclusion for a workflow. */
async function fetchCiStatus(mod) {
  const headers = { 'User-Agent': 'proteus-badge-build', Accept: 'application/vnd.github+json' };
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;
  const url = `${API}/repos/${mod.owner}/${mod.repo}/actions/workflows/${mod.workflow}/runs?branch=main&per_page=1&status=completed`;
  const res = await fetchWithRetry(url, headers);
  if (!res) return null;
  try {
    const data = await res.json();
    const run = data.workflow_runs?.[0];
    if (!run) return null;
    return run.conclusion; // "success", "failure", ...
  } catch {
    return null;
  }
}

/** Render an SVG string for a {label, message, color} triple. */
function render({ label, message, color }, logoBase64) {
  const spec = { label, message, color, style: 'flat' };
  if (logoBase64) spec.logoBase64 = logoBase64;
  return makeBadge(spec);
}

/** Write an SVG, or keep an existing file / write a placeholder on failure. */
function writeBadge(name, svg, placeholderLabel) {
  const path = join(OUT_DIR, `${name}.svg`);
  if (svg) {
    writeFileSync(path, svg);
    return 'ok';
  }
  if (existsSync(path)) return 'kept';
  writeFileSync(path, render({ label: placeholderLabel, message: 'n/a', color: 'lightgrey' }));
  return 'placeholder';
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  const doc = parseYaml(readFileSync(DATA_FILE, 'utf8'));
  const modules = [...(doc.mature ?? []), ...(doc.in_development ?? [])];

  const jobs = [];
  for (const mod of modules) {
    const slug = slugOf(mod);
    const branch = mod.badge_branch || 'main';

    if (mod.workflow && mod.ci_label) {
      jobs.push(
        fetchCiStatus(mod).then((conclusion) => {
          const data =
            conclusion === 'success'
              ? { label: mod.ci_label, message: 'passing', color: 'brightgreen' }
              : conclusion
                ? { label: mod.ci_label, message: 'failing', color: 'red' }
                : null;
          return writeBadge(`ci-${slug}`, data && render(data, LOGO_GITHUB), mod.ci_label);
        }),
      );
    }

    if (mod.total_endpoint) {
      const url = `${RAW}/${mod.owner}/${mod.repo}/${branch}/${mod.total_endpoint}`;
      jobs.push(
        fetchEndpoint(url).then((d) => writeBadge(`tests-total-${slug}`, d && render(d), 'tests')),
      );
    }

    for (const [marker, file] of Object.entries(mod.markers ?? {})) {
      const url = `${RAW}/${mod.owner}/${mod.repo}/${branch}/${file}`;
      jobs.push(
        fetchEndpoint(url).then((d) => writeBadge(`tests-${marker}-${slug}`, d && render(d), marker)),
      );
    }

    if (mod.has_codecov) {
      const url = `${RAW}/${SITE_REPO}/badges/coverage-${slug}.json`;
      jobs.push(
        fetchEndpoint(url).then((d) => writeBadge(`coverage-${slug}`, d && render(d, LOGO_CODECOV), 'coverage')),
      );
    }
  }

  const results = await Promise.all(jobs);
  const tally = results.reduce((acc, r) => ((acc[r] = (acc[r] ?? 0) + 1), acc), {});
  console.log(`Badges written to ${OUT_DIR}:`, JSON.stringify(tally));
}

main().catch((err) => {
  // Never fail the build over badges; the next scheduled run recovers.
  console.warn('Badge generation problem:', err?.message ?? err);
  process.exit(0);
});
