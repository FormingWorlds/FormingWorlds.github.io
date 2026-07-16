# PROTEUS Framework Website

Guidance for editing the umbrella website at [proteus-framework.org](https://proteus-framework.org). This file is the single shared source of instructions; `CLAUDE.md` and `GEMINI.md` at the repository root are symlinks to it, so every assistant and contributor works from the same guide.

## Overview

Static site built with [Astro](https://astro.build/) and published to GitHub Pages. It introduces the PROTEUS coupled planet evolution framework and links its documentation, modules, publications, and team together. Styling implements the PROTEUS visual language (Thermocline): design tokens in `public/assets/styles/tokens.css`, shared web chrome in `public/assets/styles/site.css`, and self-hosted Sora / Instrument Sans / Spline Sans Mono fonts, all sourced from [FormingWorlds/proteus-visual-language](https://github.com/FormingWorlds/proteus-visual-language). Colours, spacing, and type reference the tokens; never hard-code a value that exists as a token.

## Layout

- `src/pages/` one `.astro` file per page: `index` (home), `modules`, `demos`, `validation`, `publications`, `people`, `license`, and `404`.
- `src/layouts/Base.astro` the shared HTML shell: `<head>` metadata, theme detection, fonts, tokens and chrome stylesheets, analytics, SEO, and the optional page hero. Every page imports it and fills its slot.
- `src/components/` reusable pieces: `Header.astro` (sticky navbar with theme toggle and mobile panel), `Footer.astro` (phase rule, lockup, link columns), `Socials.astro`.
- `src/data/settings.js` central configuration: site title, navigation menu, footer links, social links, favicons, and SEO defaults. Change navigation, footer, and social links here, not in the components.
- `public/assets/` static assets served verbatim: `styles/` (`tokens.css` design tokens, `site.css` shared chrome plus site extensions, `fonts.css` font faces), `fonts/` (woff2 files for the three families), `img/` (images, with the glyph, lockup, and favicon files under `img/brand/`), and `img/faces/` (team photos).
- `data/test_counts.yml` module test-count and badge data, read by the build-time badge generator and the coverage workflow.
- `.github/workflows/deploy.yml` builds and publishes the site; `.github/workflows/refresh-coverage-badges.yml` refreshes the validation-page coverage badges.

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
- Write the `pub-summary` in an accessible, plain-language voice for a non-specialist reader: say what the paper found in everyday terms, and do not copy the technical register of the abstract. The Reflation (Cesario et al.) entry is the reference for this voice.
- The `pub-summary` must be no longer than the Reflation (Cesario et al.) summary, which sets the absolute maximum (roughly 100 words in three sentences) and should not itself be lengthened. Shorter is better; longer is never acceptable.

Before committing, confirm the entry renders (`npm run dev`), the three links resolve, the ordering and author formatting match the surrounding entries, and the summary is within the length limit above.

## Adding or updating a team member

Team members live as data arrays (`currentDevelopers`, `pastContributors`) at the top of `src/pages/people.astro`; each entry carries the name, role, profile link, photo path, and three research-topic labels. Add or edit an entry there; the card markup renders from the array.

- Photos go in `public/assets/img/faces/` as JPG, ideally 600x600, cropped so the face sits near the top of the frame.
- The topic labels are kept in the page markup but not displayed on the cards.

## Validation page and coverage badges

The validation table is static HTML in `src/pages/validation.astro`; edit that file to add or change a module row.

The status badges are rendered to static SVG at build time, not fetched from shields.io at page load. `scripts/generate-badges.mjs` runs before every `astro build` and `astro dev` (wired as the `prebuild`/`predev`/`prestart` npm hooks). It reads `data/test_counts.yml`, pulls each figure from its source (test counts from each module's `badges` branch, coverage from this site's own `badges` branch, CI status from the GitHub Actions API), and writes one SVG per badge into `public/assets/badges/`. That directory is git-ignored and regenerated on each build. The page references the SVGs by path, so a visitor never contacts shields.io or GitHub and a badge cannot rate-limit. If a figure cannot be fetched, the script keeps any existing SVG or writes a neutral placeholder and always exits successfully, so a network hiccup never breaks the build. The deploy workflow also runs on a daily schedule so the counts stay current between pushes.

Coverage figures still come from `coverage-<repo>.json` on the `badges` branch, which `refresh-coverage-badges.yml` refreshes from Codecov once a day; the build reads that JSON to render the coverage badge.

To add a badge for a new module: add the module to `data/test_counts.yml` (`total_endpoint` and `markers` for counts, `has_codecov: true` for coverage, `workflow` and `ci_label` for CI), then point the module's row in `validation.astro` at the generated files. The naming convention is `tests-total-<slug>.svg`, `tests-<marker>-<slug>.svg`, `coverage-<slug>.svg`, and `ci-<slug>.svg`, where `<slug>` is the lower-cased repo name. For a new coverage badge, run the "Refresh coverage badges" workflow once so its JSON exists before the next build.

## Conventions

- **Dark and light mode**: dark is the default; the navbar toggle stores the choice in `localStorage` and falls back to `prefers-color-scheme`. `tokens.css` is dark-first and remaps its surface and text tokens under `[data-theme="light"]`, so any rule written against the tokens follows the theme automatically. Theme-swapped images (glyphs, plots) carry the `only-dark` / `only-light` classes; the home hero stays dark in both themes and uses dark assets directly. The behaviour is covered by `tests/theme.spec.js` (`npm test`).
- **Module domain colours**: whenever a module is named with a colour (home overview, module cards), use the `--pt-dom-*` tokens; the same colours identify the domains in docs badges and paper figures across the ecosystem.
- **Do not hand-edit**: `dist/` (build output), `public/assets/styles/tokens.css` and the font files under `public/assets/fonts/` (vendored from proteus-visual-language; change them there and re-copy), the generated badge SVGs under `public/assets/badges/` (rebuilt from `data/test_counts.yml` on every build), and the `badges` branch (generated by the coverage workflow). The chrome section at the top of `site.css` mirrors `templates/web/site.css` in proteus-visual-language; site-specific rules go below the marked divider.
