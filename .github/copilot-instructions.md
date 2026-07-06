# PROTEUS Framework Website

Guidance for editing the umbrella website at [proteus-framework.org](https://proteus-framework.org). This file is the single shared source of instructions; `CLAUDE.md` and `GEMINI.md` at the repository root are symlinks to it, so every assistant and contributor works from the same guide.

## Overview

Static site built with [Astro](https://astro.build/) and published to GitHub Pages. It introduces the PROTEUS coupled planet evolution framework and links its documentation, modules, publications, and team together. Styling comes from the Argon Design System (Bootstrap 4), shipped as a compiled stylesheet.

## Layout

- `src/pages/` one `.astro` file per page: `index` (home), `modules`, `demos`, `testing`, `publications`, `people`, `license`, and `404`.
- `src/layouts/Base.astro` the shared HTML shell: `<head>` metadata, theme detection, fonts, the compiled stylesheet, analytics, and SEO. Every page imports it and fills its slot.
- `src/components/` reusable pieces: `Header.astro` (navbar), `Footer.astro`, `Socials.astro`.
- `src/data/settings.js` central configuration: site title, navigation menu, footer links, social links, favicons, and SEO defaults. Change navigation, footer, and social links here, not in the components.
- `public/assets/` static assets served verbatim: `styles/styles.css` (compiled stylesheet), `js/` (vendor scripts for the navbar, dropdowns, and tooltips), `img/` (images), and `img/faces/` (team photos).
- `data/test_counts.yml` module test-count and badge data used by the coverage workflow.
- `.github/workflows/deploy.yml` builds and publishes the site; `.github/workflows/refresh-coverage-badges.yml` refreshes the testing-page coverage badges.

## Local development

Requires Node 20 or newer.

```bash
npm install     # first time only
npm run dev     # dev server at http://localhost:4321, with live reload
npm run build   # production build into dist/
npm run preview # serve the built site locally
```

## Deployment

Every push to `main` triggers the build-and-deploy workflow, which publishes `dist/` to GitHub Pages. The custom domain is set by `public/CNAME`. There is no manual publish step.

## Adding a publication

Publications are a static list in `src/pages/publications.astro`, newest first. Add a new entry at the top of the list using this structure:

```html
<div class="pub-entry">
  <p class="pub-title"><a href="https://doi.org/...">Full paper title</a></p>
  <p class="pub-authors">Last, First; Last, First; Last, First</p>
  <p class="pub-venue">Journal Name, volume, page (year)</p>
  <p class="pub-summary">One short plain-language paragraph on what the paper found.</p>
  <details class="pub-abstract">
    <summary>Abstract</summary>
    <p>The paper's abstract.</p>
  </details>
  <div class="pub-links">
    <a href="https://scixplorer.org/abs/...">SciX</a>
    <a href="https://arxiv.org/abs/...">arXiv</a>
    <a href="https://doi.org/...">DOI</a>
  </div>
</div>
```

Conventions:

- The title links to the DOI, or the best canonical URL when no DOI exists yet.
- Authors are `Last, First` separated by semicolons, in publication order.
- Venue is the full journal name, then volume, page, and year, for example `The Planetary Science Journal, 7, 94 (2026)`.
- The link row is always ordered SciX, arXiv, DOI. Omit a link only when it genuinely does not exist.
- Use HTML entities or `<sub>`/`<sup>` for formulae, for example `SO<sub>2</sub>` and `H₂O`.

Before committing, confirm the entry renders (`npm run dev`), the three links resolve, and the ordering and author formatting match the surrounding entries.

## Adding or updating a team member

Team cards live in `src/pages/people.astro`, split into current members and past contributors. Copy an existing card and update the photo path, name, role, profile link, and research-topic badges.

- Photos go in `public/assets/img/faces/` as JPG, ideally 600x600, cropped so the face sits near the top of the frame.
- Badge icons come from the Nucleo set already loaded on the page, for example `ni-atom` or `ni-planet`.

## Testing page and coverage badges

The testing table is static HTML in `src/pages/testing.astro`; edit that file to add or change a module row. The coverage figures come from shields.io endpoint files on the `badges` branch: `refresh-coverage-badges.yml` reads `data/test_counts.yml`, queries Codecov once a day, and writes one `coverage-<repo>.json` per module. The page renders those by URL, so a badge never depends on Codecov being reachable at page load. To add a coverage badge for a new module, add it to `data/test_counts.yml`, run the "Refresh coverage badges" workflow once so its endpoint exists, then reference that endpoint from the module's row in `testing.astro`.

## Conventions

- **Dark and light mode**: dark is the default; the navbar toggle stores the choice in `localStorage` and falls back to `prefers-color-scheme`. Both themes are driven by CSS custom properties in the compiled stylesheet.
- **Do not hand-edit**: `dist/` (build output), the vendor files under `public/assets/` (Argon Design System, maintained upstream), and the `badges` branch (generated by the coverage workflow).
