# PROTEUS Framework Website

Source for [proteus-framework.org](https://proteus-framework.org), the landing site for the PROTEUS coupled planet evolution framework. It introduces the project and links its documentation, modules, publications, and team together.

Built with [Astro](https://astro.build/) and published to GitHub Pages.

## Site structure

| Path | What it does |
|------|-------------|
| `src/pages/` | One `.astro` file per page (home, modules, demos, testing, publications, people, license, 404) |
| `src/layouts/Base.astro` | Shared HTML shell: head metadata, theme detection, fonts, stylesheet, analytics, SEO |
| `src/components/` | Reusable pieces: `Header.astro` (navbar), `Footer.astro`, `Socials.astro` |
| `src/data/settings.js` | Central config: site title, navigation menu, footer links, social links, favicons, SEO defaults |
| `public/assets/img/faces/` | Team photos (JPG, 600x600) |
| `public/assets/img/` | Other images (hero, logos, illustrations, icons) |
| `public/assets/styles/styles.css` | Compiled stylesheet (Argon Design System plus the custom theme) |
| `public/assets/js/` | Vendor JavaScript for the navbar, dropdowns, and tooltips |
| `data/test_counts.yml` | Module test-count and badge data used by the coverage-badge workflow |
| `.github/workflows/deploy.yml` | Builds the site and publishes it to GitHub Pages |
| `.github/workflows/refresh-coverage-badges.yml` | Refreshes the coverage badges shown on the testing page |

Editing guidance for contributors and coding assistants lives in [`.github/copilot-instructions.md`](.github/copilot-instructions.md) (with `CLAUDE.md` and `GEMINI.md` as symlinks to it).

## Editing the website

### Workflow

1. Create a branch from `main`.
2. Make your changes.
3. Preview locally (see below).
4. Open a pull request.
5. Once merged into `main`, GitHub Actions rebuilds and publishes the site automatically.

### Common tasks

**Edit page text**: open the relevant file in `src/pages/` (for example `publications.astro` or `modules.astro`) and edit the HTML content.

**Add or update a team member**: edit `src/pages/people.astro`. Copy an existing card block and update the name, role, photo path, links, and research topics. Photos go in `public/assets/img/faces/` as JPG, ideally 600x600, cropped so the face sits near the top.

**Change navigation, footer, or social links**: edit `src/data/settings.js`.

**Change styling**: the site serves the compiled stylesheet `public/assets/styles/styles.css`, which defines the dark and light themes through CSS custom properties (for example `var(--accent)`).

**Add a publication**: edit `src/pages/publications.astro`; the entry template and link ordering are documented in `.github/copilot-instructions.md`.

**Update the testing table's coverage data**: edit `data/test_counts.yml`, then run the "Refresh coverage badges" workflow once so the badge endpoints exist.

## Local development

Requires [Node](https://nodejs.org/) 20 or newer.

```sh
npm install        # first time only
npm run dev        # start the dev server at http://localhost:4321
```

The dev server reloads automatically as you edit. To reproduce the production build:

```sh
npm run build      # output written to dist/
npm run preview    # serve the built site locally
```

## Deployment

Every push to `main` triggers the `Build and deploy site` workflow, which builds the site with Node and publishes `dist/` to GitHub Pages. The custom domain is set by `public/CNAME`.

## Technical notes

- **Theme**: Argon Design System (Bootstrap 4, Creative Tim), customised. The compiled stylesheet and vendor scripts are served as static assets under `public/assets/`.
- **Dark and light mode**: dark is the default. The sun/moon button in the navbar toggles it; the preference is stored in `localStorage` and falls back to `prefers-color-scheme`.
- **Images**: team photos are JPG for broad browser support. New photos should be 600x600 with the face near the top so the card crop keeps it in frame.
- **Publications**: maintained as a static list in `src/pages/publications.astro`.
- **Coverage badges**: `refresh-coverage-badges.yml` reads `data/test_counts.yml`, queries Codecov once a day, and publishes shields.io endpoint files to the `badges` branch. The testing page renders those by URL, so a badge never depends on Codecov being reachable at page load.

## License

The site content and configuration are released under the MIT License (`LICENSE`). The Argon Design System theme is used under its own license (`THEME-LICENSE.md`).
