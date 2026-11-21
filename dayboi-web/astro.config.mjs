// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { publishedLocationAreas } from './src/data/locationAreas.js';
import { getAllCommunePages } from './src/data/communePages.js';
import { viProvinceToEn } from './src/utils/i18nRouting.js';
import { laiThieuVenueCatalog } from './src/data/laiThieuVenueCatalog.js';
import {newVenuePages} from './src/data/venues/catalog.js';

const EN_INDEXABLE_PROVINCES = new Set([
  'hoc-boi-ha-noi',
  'hoc-boi-tphcm',
  'hoc-boi-da-nang',
  'hoc-boi-khanh-hoa',
  'hoc-boi-hai-phong',
  'hoc-boi-hue',
  'hoc-boi-can-tho',
]);

const areaSlugSet = new Set(publishedLocationAreas.map((area) => `${area.parentSlug}/${area.slug}`));
const noIndexUrlPaths = new Set();
for (const venue of newVenuePages) if (!venue.indexable) noIndexUrlPaths.add(venue.detailHref);
// New venue previews stay out of the sitemap until their local evidence is approved.
for (const venue of laiThieuVenueCatalog) {
  if (!venue.indexable) noIndexUrlPaths.add(venue.detailHref);
}

for (const commune of getAllCommunePages()) {
  const key = `${commune.parentSlug}/${commune.slug}`;
  if (areaSlugSet.has(key)) continue;

  if (!commune.hasVenues) {
    noIndexUrlPaths.add(`/${commune.parentSlug}/${commune.slug}/`);
  }

  if (!commune.hasVenues || !EN_INDEXABLE_PROVINCES.has(commune.parentSlug)) {
    const enLoc = viProvinceToEn(commune.parentSlug);
    noIndexUrlPaths.add(`/en/${enLoc}/${commune.slug}/`);
  }
}

// https://astro.build/config
export default defineConfig({
  site: 'https://dayboi.vip',
  integrations: [
    sitemap({
       changefreq: 'weekly',
       priority: 0.7,
       lastmod: new Date(),
       filter: (page) => {
         if (page.includes('/the/') || page.includes('/en/blog/the/') || page.includes('/dia-diem/')) {
           return false;
         }
         const pathname = new URL(page).pathname;
         return !noIndexUrlPaths.has(pathname);
       },
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
