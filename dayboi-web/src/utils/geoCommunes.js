import fs from 'node:fs';
import path from 'node:path';

export function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

export function getDistanceKm(lat1, lon1, lat2, lon2) {
  if (!lat1 || !lon1 || !lat2 || !lon2) return 999;
  const R = 6371; // Radius of the Earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export function slugify(text = '') {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export const PROVINCE_ID_TO_SLUG = {
  1: 'hoc-boi-ha-noi',
  2: 'hoc-boi-cao-bang',
  3: 'hoc-boi-tuyen-quang',
  4: 'hoc-boi-lao-cai',
  5: 'hoc-boi-dien-bien',
  6: 'hoc-boi-lai-chau',
  7: 'hoc-boi-son-la',
  8: 'hoc-boi-thai-nguyen',
  9: 'hoc-boi-lang-son',
  10: 'hoc-boi-quang-ninh',
  11: 'hoc-boi-phu-tho',
  12: 'hoc-boi-bac-ninh',
  13: 'hoc-boi-hai-phong',
  14: 'hoc-boi-hung-yen',
  15: 'hoc-boi-ninh-binh',
  16: 'hoc-boi-thanh-hoa',
  17: 'hoc-boi-nghe-an',
  18: 'hoc-boi-ha-tinh',
  19: 'hoc-boi-quang-binh',
  20: 'hoc-boi-hue',
  21: 'hoc-boi-da-nang',
  22: 'hoc-boi-quang-ngai',
  23: 'hoc-boi-khanh-hoa',
  24: 'hoc-boi-binh-dinh',
  25: 'hoc-boi-dak-lak',
  26: 'hoc-boi-lam-dong',
  27: 'hoc-boi-tay-ninh',
  28: 'hoc-boi-dong-nai',
  29: 'hoc-boi-tphcm',
  30: 'hoc-boi-vinh-long',
  31: 'hoc-boi-dong-thap',
  32: 'hoc-boi-an-giang',
  33: 'hoc-boi-can-tho',
  34: 'hoc-boi-ca-mau'
};

export const SLUG_TO_PROVINCE_ID = Object.fromEntries(
  Object.entries(PROVINCE_ID_TO_SLUG).map(([id, slug]) => [slug, Number(id)])
);

let cachedProvinces = null;
const cachedCommunes = new Map();

export function getProvinces() {
  if (cachedProvinces) return cachedProvinces;
  const filePath = path.resolve(process.cwd(), 'src/data/geo/provinces.json');
  if (!fs.existsSync(filePath)) return [];
  cachedProvinces = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  return cachedProvinces;
}

export function getCommunesByProvinceId(provinceId) {
  if (cachedCommunes.has(provinceId)) return cachedCommunes.get(provinceId);
  const filePath = path.resolve(process.cwd(), `src/data/geo/communes/${provinceId}.json`);
  if (!fs.existsSync(filePath)) return [];
  const communes = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  const slugCounts = new Map();
  for (const c of communes) {
    const rawType = c.type === 'đặc khu' ? 'dac-khu' : (c.type === 'phường' ? 'phuong' : 'xa');
    const baseSlug = `${rawType}-${slugify(c.name)}`;
    const count = (slugCounts.get(baseSlug) || 0) + 1;
    slugCounts.set(baseSlug, count);
    c.slug = count > 1 ? `${baseSlug}-${c.communeCode || c.id}` : baseSlug;
  }
  
  cachedCommunes.set(provinceId, communes);
  return communes;
}

export function getCommunesByLocationSlug(locationSlug) {
  const provinceId = SLUG_TO_PROVINCE_ID[locationSlug];
  if (!provinceId) return [];
  return getCommunesByProvinceId(provinceId);
}

export function matchVenuesToCommune(commune, allVenuesInProvince) {
  if (!commune || !allVenuesInProvince || allVenuesInProvince.length === 0) return [];
  
  const matched = [];
  const cleanCommuneName = commune.name.toLowerCase();
  const prevNames = (commune.previous || []).map((p) =>
    p.replace(/^(phường|xã|thị trấn)\s+/i, '').replace(/\s*\(.*?\)/g, '').trim().toLowerCase()
  ).filter((p) => p.length >= 2);

  for (const venue of allVenuesInProvince) {
    const textToSearch = `${venue.address || ''} ${venue.area || ''} ${venue.name || ''}`.toLowerCase();
    
    let hasMatch = false;
    for (const prev of prevNames) {
      if (textToSearch.includes(prev)) {
        hasMatch = true;
        break;
      }
    }
    
    if (!hasMatch && textToSearch.includes(cleanCommuneName)) {
      hasMatch = true;
    }

    if (hasMatch && !matched.some((m) => m.name === venue.name)) {
      matched.push(venue);
    }
  }

  return matched;
}

export function getNearbyVenues(commune, allVenuesWithCoords, maxCount = 4) {
  if (!commune || !allVenuesWithCoords || allVenuesWithCoords.length === 0) return [];
  
  const results = allVenuesWithCoords
    .filter((v) => v.latitude && v.longitude)
    .map((venue) => {
      const distanceKm = getDistanceKm(
        commune.latitude,
        commune.longitude,
        venue.latitude,
        venue.longitude
      );
      return {
        ...venue,
        distanceKm: Math.round(distanceKm * 10) / 10
      };
    })
    .sort((a, b) => a.distanceKm - b.distanceKm);

  return results.slice(0, maxCount);
}
