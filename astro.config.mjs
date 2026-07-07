// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Public site served at the apex domain (CNAME -> proteus-framework.org).
// No base path: the site lives at the domain root.
export default defineConfig({
  site: 'https://proteus-framework.org',
  trailingSlash: 'ignore',
  // Keep the former /testing address working after the page moved to /validation.
  redirects: {
    '/testing': '/validation',
  },
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
