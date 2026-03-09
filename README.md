# PROTEUS Framework Website

Source for [proteus-framework.org](https://proteus-framework.org), the website of the PROTEUS coupled planet evolution framework.

Built with [Jekyll](https://jekyllrb.com/) and hosted on GitHub Pages.

## Site structure

| Path | What it does |
|------|-------------|
| `_pages/` | Markdown pages: modules, demos, publications, people, etc. |
| `_includes/home.html` | Homepage content (hero + module overview) |
| `_includes/components/teams/team-carousel-2.html` | People cards and team listing |
| `_includes/header.html` | Navbar |
| `_includes/footer.html` | Footer |
| `_layouts/default.html` | Base HTML layout (head, scripts, theme detection) |
| `_data/settings.yml` | Central config: menu items, footer links, social links, SEO |
| `assets/styles/custom/_styles.scss` | All custom CSS (colours, dark/light mode, layout) |
| `assets/img/faces/` | Team photos (AVIF format, 600x600) |
| `assets/img/` | Other images (hero, logos, icons) |

## How to edit the website

### Workflow

1. Create a new branch from `main`
2. Make your changes
3. Test locally (see below)
4. Open a pull request
5. Once merged into `main`, the website updates automatically via GitHub Pages

### Common tasks

**Edit page text**: Open the relevant file in `_pages/` (e.g. `publications.md`, `modules.md`) and edit the markdown/HTML content.

**Add or update a team member**: Edit `_includes/components/teams/team-carousel-2.html`. Copy an existing card block and update the name, role, photo path, links, and research topics. Photos go in `assets/img/faces/` as AVIF, ideally 600x600.

**Change navigation or footer links**: Edit `_data/settings.yml`.

**Change colours or styling**: Edit `assets/styles/custom/_styles.scss`. The site uses CSS custom properties (e.g. `var(--accent)`) defined at the top of that file for both dark and light themes.

## Local development

### Prerequisites

You need Ruby and Bundler. On macOS, the system Ruby is outdated, so install a current version first:

```sh
brew install ruby
```

After installation, follow the instructions Homebrew prints to add the new Ruby to your `PATH` (typically adding a line to `~/.zshrc`). Then restart your terminal and install Bundler:

```sh
gem install bundler
```

### Running the site locally

```sh
cd FormingWorlds.github.io
bundle install        # install dependencies (first time only)
bundle exec jekyll serve
```

Open [http://localhost:4000](http://localhost:4000) in your browser. The site rebuilds automatically when you save changes to most files (except `_config.yml`, which requires restarting the server).

### Troubleshooting

- **`bundle install` fails**: Make sure you are using the Homebrew Ruby, not the macOS system Ruby. Run `which ruby` to check.
- **Styles not updating**: SCSS changes require Jekyll to recompile. If live reload is not picking them up, restart the server.
- **`_config.yml` changes not showing**: This file is only read at startup. Stop the server (Ctrl+C) and run `bundle exec jekyll serve` again.

## Technical notes

- **Theme**: Based on Argon Design System (Bootstrap 4, Creative Tim). Heavily customised.
- **Dark/light mode**: Dark is the default. Toggle via the sun/moon button in the navbar. Preference is stored in `localStorage` and respects `prefers-color-scheme` when no preference is set.
- **Images**: Team photos are in AVIF format for smaller file sizes. If adding new photos, convert to AVIF at 600x600 and use `object-position: top` in the card CSS so faces are not cropped.
- **Publications**: Maintained as a static list in `_pages/publications.md`. No build-time data fetching.
- **Redirects**: Some legacy paths (`/papers/`, `/blog/`, `/contact/`) redirect to current pages via front matter redirects in `_pages/`.
