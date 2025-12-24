# PROTEUS Framework Website - AI Coding Instructions

## Project Overview
Jekyll-based static website for the PROTEUS planetary evolution framework, deployed via GitHub Pages at proteus-framework.org. Uses Argon Design System (Bootstrap-based) for styling and components.

## Architecture

### Core Configuration Pattern
All site-wide settings centralized in [`_data/settings.yml`](_data/settings.yml):
- Navigation menus, social links, blog themes
- Authors metadata for posts
- Feature flags (e.g., `read_more`, `allow_transparent`)
- Site variables referenced as `site.data.settings.*` in templates

Jekyll config ([`_config.yml`](_config.yml)) handles:
- Collections: `_pages` → `/name`, `_posts` → `/papers/slug`
- Custom permalink structure (posts become "papers")
- Plugin declarations: paginate, sitemap, redirect-from, seo-tag

### Layout Hierarchy
1. [`_layouts/default.html`](_layouts/default.html) - Base template with header/footer includes
2. [`_layouts/post.html`](_layouts/post.html) - Blog posts with full-width header image and optional "You might also like..." section

### Content Structure
- **Pages** (`_pages/`): Frontmatter + component includes. Example: [`people.md`](_pages/people.md) includes `team-carousel-2.html`
- **Posts** (`_posts/`): Dated markdown files (YYYY-MM-DD-slug.md), displayed as "Publications" with academic paper styling
- **Components** (`_includes/components/`): Reusable HTML blocks organized by category (teams, headers, features, pricing, testimonials)

## Development Workflow

### Local Testing
```bash
# First time setup (macOS-specific)
# Install Ruby via Homebrew if system version conflicts
brew install ruby
# Add to .zshrc: export PATH="/usr/local/opt/ruby/bin:$PATH"

gem install bundler jekyll github-pages
cd FormingWorlds.github.io
bundle install
bundle exec jekyll serve
# Visit http://localhost:4000
```

### Deployment
Automatic deployment on merge to `main` branch via GitHub Pages (no custom workflow required).

## Project-Specific Conventions

### Terminology Quirks
- **"Papers"** not "blog posts" - academic context, see [`_config.yml`](_config.yml) permalink `/papers/:slug`
- **"Publications"** in navigation for external SciXplorer link ([`_data/settings.yml`](_data/settings.yml))

### Image Paths
Always use Jekyll `relative_url` filter:
```liquid
{{ '/assets/img/faces/example.avif' | relative_url }}
```
Images organized by type: `assets/img/{brand,faces,illustrations,pages}/`

### Component Inclusion Pattern
Pages are thin wrappers around reusable components:
```markdown
---
title: Meet the team
featured_image: /assets/img/illustrations/two_face_planet.jpg
---
{% include components/teams/team-carousel-2.html %}
```

### Home Page Theme Switching
[`index.html`](index.html) conditionally loads different layouts based on `site.data.settings.home_settings.theme`:
- `landing` → custom hero with demo button
- `blog` → blog listing (with sub-themes: basic/narrow/grid)

### Team Member Cards
HTML-heavy structure in [`_includes/components/teams/team-carousel-2.html`](_includes/components/teams/team-carousel-2.html). Each member requires:
- Profile image in `assets/img/faces/` (preferably .avif format)
- Badge-circle icons from Nucleo icon set (e.g., `ni-atom`, `ni-planet`)
- External profile link in card header

### Post Frontmatter Requirements
```yaml
title: Paper Title
date: YYYY-MM-DD HH:MM:SS
description: Brief summary for cards
featured_image: /assets/img/pages/example.png
author: nicholls  # Must match key in settings.yml
redirect_from:    # Optional, for maintaining old URLs
  - /blog/old-slug
```

## Key Dependencies
- `github-pages` gem (~232) - locks Jekyll/plugin versions
- Argon Design System CSS/JS in `assets/`
- Nucleo Icons for UI elements
- Font Awesome for additional icons

## Common Tasks

### Add New Team Member
1. Place image in `assets/img/faces/`
2. Edit [`_includes/components/teams/team-carousel-2.html`](_includes/components/teams/team-carousel-2.html)
3. Clone existing card structure, update image path, name, badges

### Add New Publication
1. Create `_posts/YYYY-MM-DD-slug.md` with required frontmatter
2. Add featured image to `assets/img/pages/`
3. Content appears automatically in `/papers/` listing

### Modify Navigation
Edit `menu_settings` in [`_data/settings.yml`](_data/settings.yml). External links require full URL; internal pages use relative paths with trailing slashes.

## Files to Never Edit Directly
- `_site/` - Generated output, git-ignored
- Argon Design System files in `assets/` unless absolutely necessary (maintained by Creative Tim)
