import { locations } from '../data/locations.js';

export const VALID_PROVINCE_SLUGS = new Set(locations.map((loc) => loc.slug));

export const PRIMARY_MAPPING_VI_TO_EN = {
  // Core pages
  '/': '/en/',
  '/gioi-thieu/': '/en/about/',
  '/doi-ngu-hlv/': '/en/coaches/',
  '/bang-gia/': '/en/pricing/',
  '/lien-he/': '/en/contact/',
  '/lo-trinh-hoc-boi/': '/en/swim-journey/',
  '/tin-tuc/': '/en/blog/',

  // Courses
  '/khoa-hoc-boi/': '/en/courses/',
  '/khoa-hoc-boi/tre-em/': '/en/courses/kids/',
  '/khoa-hoc-boi/nguoi-lon/': '/en/courses/adults/',
  '/khoa-hoc-boi/1-kem-1/': '/en/courses/1-on-1/',
  '/khoa-hoc-boi/nhom/': '/en/courses/group/',
  '/khoa-hoc-boi/nguoi-so-nuoc/': '/en/courses/fear-of-water/',
  '/khoa-hoc-boi/nguoi-cao-tuoi/': '/en/courses/seniors/',
  '/khoa-hoc-boi/doanh-nghiep/': '/en/courses/corporate/',

  // Techniques
  '/ky-thuat-boi/': '/en/swimming-techniques/',
  '/ky-thuat-boi/hoc-boi-ech/': '/en/swimming-techniques/breaststroke/',
  '/ky-thuat-boi/hoc-boi-sai/': '/en/swimming-techniques/front-crawl/',
  '/ky-thuat-boi/hoc-boi-ngua/': '/en/swimming-techniques/backstroke/',
  '/ky-thuat-boi/hoc-boi-buom/': '/en/swimming-techniques/butterfly/',
  '/ky-thuat-boi/ky-nang-dung-nuoc/': '/en/swimming-techniques/treading-water/',

  // Guides
  '/huong-dan-hoc-boi/': '/en/guides/',
  '/cach-hoc-boi/': '/en/guides/how-to-swim/',
  '/tu-hoc-boi/': '/en/guides/self-taught-swimming/',
  '/phong-chong-duoi-nuoc-tre-em/': '/en/guides/survival-swimming/',

  // Directory Hub
  '/hoc-boi-o-dau/': '/en/swimming-locations/',
};

// Secondary VI to EN mappings (e.g. blog posts or alias landing pages)
export const SECONDARY_MAPPING_VI_TO_EN = {
  '/hoc-boi-gia-re/': '/en/pricing/',
  '/hoc-boi-nguoi-lon/': '/en/courses/adults/',
  '/hoc-boi-tre-em/': '/en/courses/kids/',
  '/hoc-boi-tang-bat-ho/': '/en/swimming-lessons-ha-noi/',
  '/lop-hoc-boi/': '/en/courses/',
  '/lop-hoc-boi-cho-be/': '/en/courses/kids/',
  '/lop-hoc-boi-cho-nguoi-lon/': '/en/courses/adults/',
};

export const URL_MAPPING_VI_TO_EN = {
  ...PRIMARY_MAPPING_VI_TO_EN,
  ...SECONDARY_MAPPING_VI_TO_EN,
};

// Build reverse map (EN to VI) strictly based on primary mapping
export const URL_MAPPING_EN_TO_VI = Object.entries(PRIMARY_MAPPING_VI_TO_EN).reduce((acc, [vi, en]) => {
  acc[en] = vi;
  return acc;
}, {});

// Helper to normalize path with leading and trailing slash
export const normalizePath = (path = '/') => {
  if (!path) return '/';
  let p = path.trim();
  if (!p.startsWith('/')) p = `/${p}`;
  if (!p.endsWith('/')) p = `${p}/`;
  return p;
};

/**
 * Converts a Vietnamese province slug to an English location slug
 * e.g. 'hoc-boi-tphcm' -> 'swimming-lessons-ho-chi-minh'
 * e.g. 'hoc-boi-ha-noi' -> 'swimming-lessons-ha-noi'
 */
export const viProvinceToEn = (viSlug = '') => {
  if (viSlug === 'hoc-boi-tphcm') return 'swimming-lessons-ho-chi-minh';
  return viSlug.replace(/^hoc-boi-/, 'swimming-lessons-');
};

/**
 * Converts an English location slug to a Vietnamese province slug
 * e.g. 'swimming-lessons-ho-chi-minh' -> 'hoc-boi-tphcm'
 * e.g. 'swimming-lessons-ha-noi' -> 'hoc-boi-ha-noi'
 */
export const enProvinceToVi = (enSlug = '') => {
  if (enSlug === 'swimming-lessons-ho-chi-minh') return 'hoc-boi-tphcm';
  return enSlug.replace(/^swimming-lessons-/, 'hoc-boi-');
};

export const VALID_EN_PROVINCE_SLUGS = new Set(locations.map((loc) => viProvinceToEn(loc.slug)));

/**
 * Given the current path and current language, returns the corresponding URL in the alternate language.
 * @param {string} currentPath 
 * @param {'vi' | 'en'} currentLang 
 * @returns {string} alternate URL
 */
export const getAlternateUrl = (currentPath = '/', currentLang = 'vi') => {
  const norm = normalizePath(currentPath);

  if (currentLang === 'vi') {
    // 1. Direct dictionary lookup
    if (URL_MAPPING_VI_TO_EN[norm]) {
      return URL_MAPPING_VI_TO_EN[norm];
    }

    // 2. Province hub: /hoc-boi-[province]/ (must be a valid province)
    const provinceMatch = norm.match(/^\/(hoc-boi-[a-z0-9-]+)\/$/);
    if (provinceMatch && VALID_PROVINCE_SLUGS.has(provinceMatch[1])) {
      const enSlug = viProvinceToEn(provinceMatch[1]);
      return `/en/${enSlug}/`;
    }

    // 3. Commune/Area: /hoc-boi-[province]/[area]/ (must be a valid province)
    const areaMatch = norm.match(/^\/(hoc-boi-[a-z0-9-]+)\/([a-z0-9-]+)\/$/);
    if (areaMatch && VALID_PROVINCE_SLUGS.has(areaMatch[1])) {
      const enSlug = viProvinceToEn(areaMatch[1]);
      const area = areaMatch[2];
      return `/en/${enSlug}/${area}/`;
    }

    // Default fallback
    return '/en/';
  } else {
    // Current is 'en'
    // 1. Direct reverse dictionary lookup
    if (URL_MAPPING_EN_TO_VI[norm]) {
      return URL_MAPPING_EN_TO_VI[norm];
    }

    // 2. English province hub: /en/swimming-lessons-[province]/ (must be a valid province)
    const enProvinceMatch = norm.match(/^\/en\/(swimming-lessons-[a-z0-9-]+)\/$/);
    if (enProvinceMatch && VALID_EN_PROVINCE_SLUGS.has(enProvinceMatch[1])) {
      const viSlug = enProvinceToVi(enProvinceMatch[1]);
      return `/${viSlug}/`;
    }

    // 3. English Commune/Area: /en/swimming-lessons-[province]/[area]/ (must be a valid province)
    const enAreaMatch = norm.match(/^\/en\/(swimming-lessons-[a-z0-9-]+)\/([a-z0-9-]+)\/$/);
    if (enAreaMatch && VALID_EN_PROVINCE_SLUGS.has(enAreaMatch[1])) {
      const viSlug = enProvinceToVi(enAreaMatch[1]);
      const area = enAreaMatch[2];
      return `/${viSlug}/${area}/`;
    }

    // Default fallback
    return '/';
  }
};
