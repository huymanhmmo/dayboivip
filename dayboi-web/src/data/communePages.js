import { getProvinces, getCommunesByProvinceId, getNearbyVenues, PROVINCE_ID_TO_SLUG, SLUG_TO_PROVINCE_ID } from '../utils/geoCommunes.js';
import { getLocationResearch } from './locationResearch.js';
import { locations } from './locations.js';

// Phase 1 active locations (Pilot: Hanoi 126 wards + HCM 168 wards = 294 wards)
// Set to null or [] to enable all 34 provinces
export const ACTIVE_LOCATIONS = ['hoc-boi-ha-noi', 'hoc-boi-tphcm'];

let cachedCommunePages = null;

export function getAllCommunePages() {
  if (cachedCommunePages) return cachedCommunePages;

  const provinces = getProvinces();
  const pages = [];

  for (const p of provinces) {
    const locSlug = PROVINCE_ID_TO_SLUG[p.id];
    if (!locSlug) continue;

    // Filter by active locations if configured
    if (ACTIVE_LOCATIONS && ACTIVE_LOCATIONS.length > 0 && !ACTIVE_LOCATIONS.includes(locSlug)) {
      continue;
    }

    const locMeta = locations.find((l) => l.slug === locSlug);
    const research = getLocationResearch(locSlug);
    const venues = research && research.categories ? research.categories.flatMap((c) => c.venues) : [];
    const communes = getCommunesByProvinceId(p.id);

    // Enrich venues with matched commune coordinates
    const enrichedVenues = venues.map((v) => {
      let matched = null;
      const text = `${v.address || ''} ${v.area || ''} ${v.name || ''}`.toLowerCase();

      for (const c of communes) {
        for (const prev of (c.previous || [])) {
          const cleanPrev = prev.replace(/^(phường|xã|thị trấn)\s+/i, '').replace(/\s*\(.*?\)/g, '').trim().toLowerCase();
          if (cleanPrev.length >= 2 && text.includes(cleanPrev)) {
            matched = c;
            break;
          }
        }
        if (matched) break;
      }
      if (!matched) {
        for (const c of communes) {
          if (text.includes(c.name.toLowerCase())) {
            matched = c;
            break;
          }
        }
      }

      return {
        ...v,
        matchedCommune: matched ? { id: matched.id, name: matched.name, type: matched.type, slug: matched.slug } : null,
        latitude: matched ? matched.latitude : (communes[0] ? communes[0].latitude : null),
        longitude: matched ? matched.longitude : (communes[0] ? communes[0].longitude : null),
      };
    });

    for (const c of communes) {
      const direct = enrichedVenues.filter((v) => v.matchedCommune && v.matchedCommune.id === c.id);
      const nearby = direct.length === 0 ? getNearbyVenues(c, enrichedVenues, 3) : [];

      pages.push({
        id: c.id,
        code: c.communeCode,
        name: c.name,
        type: c.type,
        fullName: `${c.type === 'xã' ? 'Xã' : (c.type === 'phường' ? 'Phường' : 'Đặc khu')} ${c.name}`,
        slug: c.slug,
        parentSlug: locSlug,
        parentName: locMeta ? locMeta.name : p.provinceName,
        areaKm2: c.areaKm2,
        population: c.population,
        administrativeCenter: c.administrativeCenter,
        latitude: c.latitude,
        longitude: c.longitude,
        previous: c.previous || [],
        directVenues: direct,
        nearbyVenues: nearby,
        hasVenues: direct.length > 0,
        reviewedAt: '12/09/2026',
      });
    }
  }

  cachedCommunePages = pages;
  return pages;
}

export function getCommunesForLocation(locationSlug) {
  const all = getAllCommunePages();
  return all.filter((p) => p.parentSlug === locationSlug);
}
