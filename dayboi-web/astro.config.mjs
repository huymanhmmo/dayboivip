// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { publishedLocationAreas } from './src/data/locationAreas.js';

const areaRedirects = Object.fromEntries(
  publishedLocationAreas.map((area) => [`/hoc-boi-${area.slug}`, area.url]),
);

// https://astro.build/config
export default defineConfig({
  site: 'https://dayboi.vip',
  redirects: {
    '/dia-diem/ha-noi': '/hoc-boi-ha-noi',
    '/dia-diem/tphcm': '/hoc-boi-tphcm',
    '/dia-diem/tphcm/hoc-boi-tan-binh': '/hoc-boi-tphcm/tan-binh',
    '/blog': '/tin-tuc',
    ...areaRedirects,
  },
  integrations: [
    sitemap({
       changefreq: 'weekly',
       priority: 0.7,
       lastmod: new Date(),
       filter: (page) => !page.includes('/the/') && !page.includes('/en/blog/the/') && !page.includes('/dia-diem/'),
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
