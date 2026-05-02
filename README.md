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

### Quick start (macOS)

```sh
brew install ruby@3.3
cd FormingWorlds.github.io
bin/dev
```

`bin/dev` is a small wrapper that picks the right Ruby, runs `bundle install` on first use, and starts Jekyll at [http://127.0.0.1:4001](http://127.0.0.1:4001). Override the port with `PORT=4002 bin/dev`, or pass extra flags through to `jekyll serve` (e.g. `bin/dev --no-watch`).

The site rebuilds automatically when you save changes to most files (except `_config.yml`, which requires restarting the server).

### Why Ruby 3.3?

The `github-pages` gem (version 232, pinned by GitHub Pages) requires Ruby `>= 2.6, < 4.0`. The default `brew install ruby` formula now installs Ruby 4.x and will fail dependency resolution. Use `ruby@3.3` (or any 3.x) instead. `bin/dev` picks `/opt/homebrew/opt/ruby@3.3/bin` automatically when present, and falls back to whatever `ruby` is on `PATH` for non-macOS contributors using rbenv, asdf, etc.

### Manual setup (without bin/dev)

```sh
gem install bundler
bundle config set --local path 'vendor/bundle'
bundle install
bundle exec jekyll serve
```

### Troubleshooting

- **`bundle install` fails with a Ruby version error**: You are likely on Ruby 4.x. Install `ruby@3.3` (see above) or use `bin/dev`, which prefers it automatically.
- **Styles not updating**: SCSS changes require Jekyll to recompile. If live reload is not picking them up, restart the server.
- **`_config.yml` changes not showing**: This file is only read at startup. Stop the server (Ctrl+C) and run `bin/dev` again.

## Technical notes

- **Theme**: Based on Argon Design System (Bootstrap 4, Creative Tim). Heavily customised.
- **Dark/light mode**: Dark is the default. Toggle via the sun/moon button in the navbar. Preference is stored in `localStorage` and respects `prefers-color-scheme` when no preference is set.
- **Images**: Team photos are in AVIF format for smaller file sizes. If adding new photos, convert to AVIF at 600x600 and use `object-position: top` in the card CSS so faces are not cropped.
- **Publications**: Maintained as a static list in `_pages/publications.md`. No build-time data fetching.
- **Redirects**: Some legacy paths (`/papers/`, `/blog/`, `/contact/`) redirect to current pages via front matter redirects in `_pages/`.
