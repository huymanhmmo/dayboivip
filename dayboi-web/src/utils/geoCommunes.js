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
    // Clean slug without xa- or phuong- prefix (timeless URL design)
    const baseSlug = slugify(c.name);
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

export function getCommuneSeoMeta(c, currentYear = 2026) {
  const isSouth = c.parentSlug === 'hoc-boi-tphcm';
  const city = isSouth ? 'TP.HCM' : (c.parentName || 'Hà Nội');
  const poolWord = isSouth ? 'Hồ Bơi' : 'Bể Bơi';
  const poolWordLower = isSouth ? 'hồ bơi' : 'bể bơi';
  
  // Deterministic seed
  const seed = (c.slug || c.id || '').split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const angle = seed % 6;
  
  // 1. DIVERSIFIED TITLE (All front-load high search volume queries, 45-60 chars strict)
  let candidates = [];
  if (angle === 0) {
    candidates = [
      `Học Bơi Tại ${c.fullName}, ${city}: Lớp Kèm Riêng 1-1`,
      `Học Bơi Tại ${c.fullName}, ${city}: Trẻ Em & Người Lớn`,
      `Học Bơi Tại ${c.fullName}, ${city}: ${poolWord} & Học Phí`,
      `Học Bơi Tại ${c.fullName}, ${city}: Lớp Kèm Riêng Uy Tín`,
      `Học Bơi Tại ${c.fullName}, ${city}: Lớp Kèm Riêng`,
      `Học Bơi Tại ${c.fullName}, ${city}: Lớp Kèm 1-1`,
      `Học Bơi Tại ${c.name}, ${city}: Lớp Kèm Riêng 1-1 Cho Trẻ & Lớn`,
      `Học Bơi Tại ${c.name}, ${city}: Lớp Kèm Riêng Trẻ Em & Người Lớn`,
      `Học Bơi Tại ${c.name}, ${city}: Danh Sách ${poolWord} & Lớp Kèm Riêng`,
      `Học Bơi Tại ${c.name}, ${city}: Lớp Kèm Riêng 1-1`,
      `Học Bơi Tại ${c.name}, ${city}: Lớp Kèm Riêng`,
      `Học Bơi Tại ${c.name}, ${city}: ${poolWord} & Học Phí`,
      `Học Bơi Tại ${c.name}, ${city}: Lớp Kèm 1-1`,
    ];
  } else if (angle === 1) {
    candidates = [
      `Dạy Bơi Tại ${c.fullName}, ${city}: Lớp Kèm Riêng 1-1`,
      `Dạy Bơi Tại ${c.fullName}, ${city}: HLV Kèm Riêng Uy Tín`,
      `Dạy Bơi Tại ${c.fullName}, ${city}: Trẻ Em & Người Lớn`,
      `Dạy Bơi Tại ${c.fullName}, ${city}: ${poolWord} & Học Phí`,
      `Dạy Bơi Tại ${c.fullName}, ${city}: Lớp Kèm Riêng`,
      `Dạy Bơi Tại ${c.fullName}, ${city}: Lớp Kèm 1-1`,
      `Dạy Bơi Tại ${c.name}, ${city}: Lớp Kèm Riêng Cho Trẻ & Người Lớn`,
      `Dạy Bơi Tại ${c.name}, ${city}: HLV Kèm Riêng 1-1 Cho Trẻ & Lớn`,
      `Dạy Bơi Tại ${c.name}, ${city}: HLV Kèm Riêng Uy Tín`,
      `Dạy Bơi Tại ${c.name}, ${city}: Lớp Kèm Riêng 1-1`,
      `Dạy Bơi Tại ${c.name}, ${city}: Lớp Kèm Riêng`,
      `Dạy Bơi Tại ${c.name}, ${city}: ${poolWord} & Học Phí`,
      `Dạy Bơi Tại ${c.name}, ${city}: Lớp Kèm 1-1`,
    ];
  } else if (angle === 2) {
    candidates = [
      `Lớp Học Bơi Tại ${c.fullName}, ${city}: Kèm Riêng 1-1`,
      `Lớp Học Bơi Tại ${c.fullName}, ${city}: Cho Trẻ & Người Lớn`,
      `Lớp Học Bơi Tại ${c.fullName}, ${city}: ${poolWord} & Học Phí`,
      `Lớp Học Bơi Tại ${c.fullName}, ${city}: Lớp Kèm Uy Tín`,
      `Lớp Học Bơi Tại ${c.fullName}, ${city}: Học Phí Chi Tiết`,
      `Lớp Học Bơi Tại ${c.fullName}, ${city}: Lớp Kèm Riêng`,
      `Lớp Học Bơi Tại ${c.name}, ${city}: Kèm Riêng Cho Trẻ & Người Lớn`,
      `Lớp Học Bơi Tại ${c.name}, ${city}: Kèm Riêng 1-1 Cho Trẻ & Lớn`,
      `Lớp Học Bơi Tại ${c.name}, ${city}: ${poolWord} & Học Phí Lớp Kèm`,
      `Lớp Học Bơi Tại ${c.name}, ${city}: Kèm Riêng 1-1`,
      `Lớp Học Bơi Tại ${c.name}, ${city}: Cho Trẻ & Người Lớn`,
      `Lớp Học Bơi ${c.name}, ${city}: Kèm Riêng 1-1`,
      `Lớp Học Bơi ${c.name}, ${city}: Kèm Riêng`,
    ];
  } else if (angle === 3) {
    candidates = [
      `Khóa Học Bơi Tại ${c.fullName}, ${city}: Kèm Riêng 1-1`,
      `Khóa Học Bơi Tại ${c.fullName}, ${city}: Trẻ Em & Người Lớn`,
      `Khóa Học Bơi Tại ${c.fullName}, ${city}: ${poolWord} & Học Phí`,
      `Khóa Học Bơi Tại ${c.fullName}, ${city}: Lớp Kèm Uy Tín`,
      `Khóa Học Bơi Tại ${c.fullName}, ${city}: Học Phí Chi Tiết`,
      `Khóa Học Bơi Tại ${c.fullName}, ${city}: Lớp Kèm Riêng`,
      `Khóa Học Bơi Tại ${c.name}, ${city}: Kèm Riêng Cho Trẻ & Người Lớn`,
      `Khóa Học Bơi Tại ${c.name}, ${city}: Kèm Riêng 1-1 Cho Trẻ & Lớn`,
      `Khóa Học Bơi Tại ${c.name}, ${city}: ${poolWord} & Học Phí Lớp Kèm`,
      `Khóa Học Bơi Tại ${c.name}, ${city}: Kèm Riêng 1-1`,
      `Khóa Học Bơi Tại ${c.name}, ${city}: Trẻ Em & Người Lớn`,
      `Khóa Học Bơi ${c.name}, ${city}: Kèm Riêng 1-1`,
      `Khóa Học Bơi ${c.name}, ${city}: Kèm Riêng`,
    ];
  } else if (angle === 4) {
    candidates = [
      `Dạy Bơi Kèm Riêng Tại ${c.fullName}, ${city}: Trẻ & Lớn`,
      `Dạy Bơi Kèm Riêng Tại ${c.fullName}, ${city}: HLV Uy Tín`,
      `Dạy Bơi Kèm Riêng Tại ${c.fullName}, ${city}: ${poolWord} Đạt Chuẩn`,
      `Dạy Bơi Kèm Riêng Tại ${c.fullName}, ${city}: Học Phí Mới`,
      `Dạy Bơi Kèm Riêng ${c.fullName}, ${city}: Trẻ & Lớn`,
      `Dạy Bơi Kèm Riêng ${c.fullName}, ${city}: HLV Uy Tín`,
      `Dạy Bơi Kèm Riêng Tại ${c.name}, ${city}: Cho Trẻ Em & Người Lớn`,
      `Dạy Bơi Kèm Riêng Tại ${c.name}, ${city}: HLV Giàu Kinh Nghiệm`,
      `Dạy Bơi Kèm Riêng Tại ${c.name}, ${city}: Danh Sách ${poolWord} Đạt Chuẩn`,
      `Dạy Bơi Kèm Riêng Tại ${c.name}, ${city}: HLV Uy Tín`,
      `Dạy Bơi Kèm Riêng Tại ${c.name}, ${city}: Trẻ & Lớn`,
      `Dạy Bơi Kèm Riêng ${c.name}, ${city}: HLV Uy Tín`,
      `Dạy Bơi Kèm Riêng ${c.name}, ${city}: Trẻ & Lớn`,
    ];
  } else {
    candidates = [
      `Học Bơi, Dạy Bơi Tại ${c.fullName}, ${city}: Lớp Kèm Riêng`,
      `Học Bơi, Dạy Bơi Tại ${c.fullName}, ${city}: Lớp Kèm 1-1`,
      `Học Bơi, Dạy Bơi Tại ${c.fullName}, ${city}: ${poolWord} & Học Phí`,
      `Học Bơi, Dạy Bơi Tại ${c.fullName}, ${city}: Lớp Kèm`,
      `Học Bơi, Dạy Bơi ${c.fullName}, ${city}: Lớp Kèm`,
      `Học Bơi, Dạy Bơi Tại ${c.name}, ${city}: Lớp Kèm Riêng 1-1`,
      `Học Bơi, Dạy Bơi Tại ${c.name}, ${city}: Cho Trẻ Em & Người Lớn`,
      `Học Bơi, Dạy Bơi Tại ${c.name}, ${city}: Lớp Kèm Riêng`,
      `Học Bơi, Dạy Bơi Tại ${c.name}, ${city}: Lớp Kèm`,
      `Học Bơi, Dạy Bơi ${c.name}, ${city}: Lớp Kèm Riêng`,
      `Học Bơi, Dạy Bơi ${c.name}, ${city}: Lớp Kèm`,
    ];
  }
  
  let title = candidates.find((t) => t.length >= 45 && t.length <= 60);
  if (!title) {
    for (const t of candidates) {
      if (t.length >= 45 && t.length <= 60) { title = t; break; }
    }
  }
  if (!title) {
    title = `Học Bơi, Dạy Bơi Tại ${c.name}, ${city}: Lớp Kèm`;
    if (title.length > 60) title = `Học Bơi Tại ${c.name}, ${city}: Lớp Kèm`;
    if (title.length < 45) title = `Học Bơi Tại ${c.fullName}, ${city}: Lớp Kèm Riêng 1-1`;
  }

  // 2. DIVERSIFIED H1 (Congruent with Title angle)
  let h1Prefix = 'Học bơi & dạy bơi tại';
  let h1Suffix = ': địa điểm và lớp học phù hợp';
  if (angle === 0) {
    h1Prefix = 'Học bơi tại';
    h1Suffix = ': địa điểm và lớp học phù hợp';
  } else if (angle === 1) {
    h1Prefix = 'Dạy bơi tại';
    h1Suffix = ': huấn luyện viên và khóa học phù hợp';
  } else if (angle === 2) {
    h1Prefix = 'Lớp học bơi tại';
    h1Suffix = ': địa điểm và học phí mới';
  } else if (angle === 3) {
    h1Prefix = 'Khóa học bơi ở';
    h1Suffix = `: lịch học và ${poolWordLower} uy tín`;
  } else if (angle === 4) {
    h1Prefix = 'Dạy bơi kèm riêng tại';
    h1Suffix = ': 1 kèm 1 cho trẻ em & người lớn';
  }
  let h1 = `${h1Prefix} ${c.fullName}, ${c.parentName}${h1Suffix}`;

  // 3. DIVERSIFIED META DESCRIPTION (145-165 chars strict)
  const prevSummary = (c.previous || [])
    .map(p => p.replace(/^(phường|xã|thị trấn)\s+/i, '').replace(/\s*\(.*?\)/g, '').trim())
    .slice(0, 3)
    .join(', ');

  let descLead = '';
  if (angle === 0) {
    descLead = `Lớp học bơi kèm riêng chất lượng tại ${c.fullName}${prevSummary ? ` (gồm ${prevSummary})` : ''} ${c.parentName}.`;
  } else if (angle === 1) {
    descLead = `Khóa dạy bơi kèm riêng uy tín tại ${c.fullName}${prevSummary ? ` (gồm ${prevSummary})` : ''} ${c.parentName}.`;
  } else if (angle === 2) {
    descLead = `Tuyển sinh lớp học bơi tại ${c.fullName}${prevSummary ? ` (gồm ${prevSummary})` : ''} ${c.parentName}.`;
  } else if (angle === 3) {
    descLead = `Khóa học bơi cho trẻ em và người lớn tại ${c.fullName}${prevSummary ? ` (gồm ${prevSummary})` : ''} ${c.parentName}.`;
  } else if (angle === 4) {
    descLead = `Dịch vụ dạy bơi 1 kèm 1 chuyên nghiệp tại ${c.fullName}${prevSummary ? ` (gồm ${prevSummary})` : ''} ${c.parentName}.`;
  } else {
    descLead = `Khóa học bơi, dạy bơi kèm riêng tại ${c.fullName}${prevSummary ? ` (gồm ${prevSummary})` : ''} ${c.parentName}.`;
  }

  let descTail = c.hasVenues
    ? ` Danh sách ${c.directVenues.length} ${poolWordLower}, HLV dạy bơi giàu kinh nghiệm, học phí trọn gói rõ ràng.`
    : ` Tra cứu ${poolWordLower} và lớp dạy bơi, gợi ý 3 cơ sở lân cận gần nhất kèm học phí HLV.`;

  let description = `${descLead}${descTail}`;

  if (description.length > 165) {
    const shortPrev = (c.previous || [])
      .map(p => p.replace(/^(phường|xã|thị trấn)\s+/i, '').replace(/\s*\(.*?\)/g, '').trim())
      .slice(0, 2)
      .join(', ');
    descLead = `Lớp học bơi, dạy bơi kèm riêng tại ${c.fullName}${shortPrev ? ` (gồm ${shortPrev})` : ''} ${c.parentName}.`;
    description = `${descLead}${descTail}`;
  }
  if (description.length > 165) {
    const minPrev = (c.previous || [])
      .map(p => p.replace(/^(phường|xã|thị trấn)\s+/i, '').replace(/\s*\(.*?\)/g, '').trim())
      .slice(0, 1)
      .join(', ');
    descLead = `Học bơi, dạy bơi kèm riêng tại ${c.fullName}${minPrev ? ` (gồm ${minPrev})` : ''} ${c.parentName}.`;
    description = `${descLead}${descTail}`;
  }
  if (description.length > 165) {
    descLead = `Lớp học bơi, dạy bơi tại ${c.fullName}, ${c.parentName}.`;
    description = `${descLead}${descTail}`;
  }
  if (description.length < 145) {
    description += ` Cập nhật thông tin mới nhất năm ${currentYear}.`;
  }
  if (description.length > 165) {
    description = description.slice(0, 162).trim() + '...';
  }

  return { title, h1, h1Prefix, h1Suffix, description, angle };
}
