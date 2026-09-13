import { getProvinces, getCommunesByProvinceId, getNearbyVenues, PROVINCE_ID_TO_SLUG, SLUG_TO_PROVINCE_ID } from '../utils/geoCommunes.js';
import { getLocationResearch } from './locationResearch.js';
import { locations } from './locations.js';
import { communePools } from './communePoolsData.js';

// Phase 1 active locations (Pilot: Hanoi 126 wards + HCM 168 wards = 294 wards)
// Set to null or [] to enable all 34 provinces
export const ACTIVE_LOCATIONS = null;

let cachedCommunePages = null;

function matchVenueToCommune(venue, commune) {
  if (venue.targetCommune && venue.targetCommune === commune.slug) {
    return true;
  }

  const text = `${venue.address || ''} ${venue.area || ''} ${venue.name || ''}`.toLowerCase();
  const cName = commune.name.toLowerCase();

  // Direct commune name match
  if (cName.length >= 3 && text.includes(cName)) {
    return true;
  }

  // Previous names match (including numbered wards like Phường 1..9)
  for (const prev of (commune.previous || [])) {
    const numMatch = prev.match(/(?:phường|p\.?)\s*(\d+)/i);
    if (numMatch) {
      const num = numMatch[1];
      const distMatch = prev.match(/\((quận\s*[^)]+|huyện\s*[^)]+|tp\s*[^)]+)\)/i);
      const numRegex = new RegExp(`(?:phường|p\\.?)\\s*0*${num}(?!\\d)`, 'i');
      if (numRegex.test(text)) {
        if (distMatch) {
          const dist = distMatch[1].toLowerCase();
          if (text.includes(dist) || (!text.includes('quận') && !text.includes('huyện') && !text.includes('tp.'))) {
            return true;
          }
        } else {
          return true;
        }
      }
    } else {
      const cleanPrev = prev.replace(/^(phường|xã|thị trấn)\s+/i, '').replace(/\s*\(.*?\)/g, '').trim().toLowerCase();
      if (cleanPrev.length >= 3 && text.includes(cleanPrev)) {
        return true;
      }
    }
  }

  return false;
}

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
    const rVenues = research && research.categories ? research.categories.flatMap((c) => c.venues) : [];
    const cPools = communePools.filter((cp) => cp.provinceSlug === locSlug);
    const locPools = (locMeta && locMeta.pools) ? locMeta.pools.map((pool) => ({
      name: pool.name,
      address: pool.address,
      area: pool.type || '',
      access: pool.type || 'Bể bơi tiêu chuẩn',
      entityType: 'Bể bơi thể thao & dịch vụ dạy bơi',
      environment: pool.type && (pool.type.toLowerCase().includes('nước ấm') || pool.type.toLowerCase().includes('trong nhà'))
        ? 'Trong nhà / Nước ấm bốn mùa / Lọc tuần hoàn tự động'
        : 'Bể bơi tiêu chuẩn ngoài trời / Nước sạch xử lý định kỳ',
      services: pool.pros || 'Làn bơi phân định rõ ràng, khu vực bơi trẻ em nông, cứu hộ chuyên trách thường trực.',
      detail: `Địa điểm tập luyện và học bơi chất lượng cho cư dân tại ${locMeta.name}.`,
      venueContact: {
        role: 'Ban quản lý & quầy vé bể bơi',
        name: pool.name,
        phone: '0979.121.097',
        note: 'Liên hệ mua vé bơi tự do hoặc đăng ký học bơi',
        exactSourceUrl: `https://dayboi.vip/${locSlug}/`,
        sourceTitle: `Thông tin chi tiết ${pool.name} tại ${locMeta.name}`,
      },
      instructors: [
        {
          unitName: `Trung tâm Dạy Bơi Swim For Life ${locMeta.name}`,
          contactPerson: 'Đội ngũ HLV Chuyên Nghiệp Swim For Life',
          phone: '0979.121.097',
          courseTypes: 'Lớp dạy bơi 1 kèm 1 cho trẻ em & người lớn; bơi ếch, bơi sải, bơi sinh tồn cam kết chuẩn kỹ thuật',
          exactSourceUrl: `https://dayboi.vip/${locSlug}/`,
          sourceTitle: `Lớp học bơi kèm riêng tại ${pool.name} - Swim For Life`,
        }
      ]
    })) : [];

    // Merge and deduplicate by normalized name
    const allVenues = [...cPools, ...rVenues];
    for (const lp of locPools) {
      if (!allVenues.some((v) => v.name.toLowerCase().trim() === lp.name.toLowerCase().trim())) {
        allVenues.push(lp);
      }
    }

    const communes = getCommunesByProvinceId(p.id);

    // Enrich venues with matched commune coordinates
    const enrichedVenues = allVenues.map((v) => {
      let matched = null;
      for (const c of communes) {
        if (matchVenueToCommune(v, c)) {
          matched = c;
          break;
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
      const direct = enrichedVenues.filter((v) => matchVenueToCommune(v, c));
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
