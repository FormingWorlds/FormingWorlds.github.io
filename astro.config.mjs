// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Dev server only: Vite serves the project root statically, and on a
// case-insensitive filesystem a request for /license matches the repo-root
// LICENSE file before Astro's routing runs, so the raw MIT text renders
// instead of the license page. Redirect to the canonical trailing-slash URL
// ahead of the static middleware. Production is unaffected (only dist/ is
// deployed, and GitHub Pages already redirects /license to /license/).
const licenseRouteGuard = {
  name: 'license-route-guard',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (/^\/license$/i.test(req.url ?? '')) {
        res.statusCode = 301;
        res.setHeader('Location', '/license/');
        res.end();
        return;
      }
      next();
    });
  },
};

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
  vite: {
    plugins: [licenseRouteGuard],
  },
});
