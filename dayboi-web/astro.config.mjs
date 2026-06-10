// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://dayboi.vip',
  redirects: {
    '/dia-diem/ha-noi': '/hoc-boi-ha-noi',
    '/dia-diem/tphcm': '/hoc-boi-tphcm',
    '/blog': '/tin-tuc',
  },
  integrations: [
    sitemap({
       changefreq: 'weekly',
       priority: 0.7,
       lastmod: new Date(),
       filter: (page) => !page.includes('/the/') && !page.includes('/en/blog/the/'),
     }),
   ],
  build: {
    assets: '_assets',
  },
  image: {
    domains: [],
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
