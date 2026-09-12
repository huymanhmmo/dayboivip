import { getAllCommunePages } from '../src/data/communePages.js';

const pages = getAllCommunePages();
const currentYear = 2026;
let outOfBounds = 0;

for (const c of pages) {
  const city = c.parentSlug === 'hoc-boi-tphcm' ? 'TP.HCM' : (c.parentName || 'Hà Nội');
  
  // Format with commune name and province/city name
  let title = `Học Bơi, Dạy Bơi Tại ${c.fullName}, ${city}: Lớp Kèm Riêng`;
  if (title.length > 60) {
    title = `Học Bơi, Dạy Bơi Tại ${c.fullName}, ${city}: Lớp Kèm`;
  }
  if (title.length > 60) {
    title = `Học Bơi, Dạy Bơi ${c.fullName}, ${city}: Lớp Kèm`;
  }
  if (title.length > 60) {
    title = `Học Bơi, Dạy Bơi Tại ${c.name}, ${city}: Lớp Kèm Riêng`;
  }
  if (title.length > 60) {
    title = `Học Bơi, Dạy Bơi Tại ${c.name}, ${city}: Lớp Kèm`;
  }
  if (title.length > 60) {
    title = `Học Bơi, Dạy Bơi ${c.name}, ${city}: Lớp Kèm`;
  }
  if (title.length < 45) {
    title = `Học Bơi, Dạy Bơi Tại ${c.fullName}, ${city}: Lớp Kèm Riêng`;
  }
  if (title.length < 45) {
    title = `Học Bơi, Dạy Bơi Tại ${c.fullName}, ${city}: Lớp Kèm Gần Bạn`;
  }
  if (title.length < 45) {
    title = `Học Bơi, Dạy Bơi Ở ${c.fullName}, ${city}: Lớp Kèm Riêng Gần Bạn`;
  }

  const prevSummary = (c.previous || [])
    .map(p => p.replace(/^(phường|xã|thị trấn)\s+/i, '').replace(/\s*\(.*?\)/g, '').trim())
    .slice(0, 3)
    .join(', ');
  let descLead = `Khóa học bơi, dạy bơi kèm riêng tại ${c.fullName}${prevSummary ? ` (gồm ${prevSummary})` : ''} ${c.parentName}.`;
  let descTail = c.hasVenues
    ? ` Danh sách ${c.directVenues.length} bể bơi, HLV dạy bơi giàu kinh nghiệm, học phí trọn gói rõ ràng.`
    : ` Tra cứu bể bơi và lớp dạy bơi, gợi ý 3 cơ sở lân cận gần nhất kèm học phí HLV.`;
  let description = `${descLead}${descTail}`;

  if (description.length > 165) {
    const shortPrev = (c.previous || [])
      .map(p => p.replace(/^(phường|xã|thị trấn)\s+/i, '').replace(/\s*\(.*?\)/g, '').trim())
      .slice(0, 2)
      .join(', ');
    descLead = `Khóa học bơi, dạy bơi kèm riêng tại ${c.fullName}${shortPrev ? ` (gồm ${shortPrev})` : ''} ${c.parentName}.`;
    description = `${descLead}${descTail}`;
  }
  if (description.length > 165) {
    const minPrev = (c.previous || [])
      .map(p => p.replace(/^(phường|xã|thị trấn)\s+/i, '').replace(/\s*\(.*?\)/g, '').trim())
      .slice(0, 1)
      .join(', ');
    descLead = `Khóa học bơi, dạy bơi kèm riêng tại ${c.fullName}${minPrev ? ` (gồm ${minPrev})` : ''} ${c.parentName}.`;
    description = `${descLead}${descTail}`;
  }
  if (description.length > 165) {
    descLead = `Khóa học bơi, dạy bơi kèm riêng tại ${c.fullName}, ${c.parentName}.`;
    description = `${descLead}${descTail}`;
  }
  if (description.length < 145) {
    description += ` Cập nhật thông tin mới nhất năm ${currentYear}.`;
  }
  if (description.length > 165) {
    description = description.slice(0, 162).trim() + '...';
  }

  if (title.length < 45 || title.length > 60) {
    console.log('Title error:', title.length, title);
    outOfBounds++;
  }
  if (description.length < 145 || description.length > 165) {
    console.log('Desc error:', description.length, description);
    outOfBounds++;
  }
}

const titles = new Map();
const descs = new Map();
let dupTitles = 0;
let dupDescs = 0;

for (const c of pages) {
  const city = c.parentSlug === 'hoc-boi-tphcm' ? 'TP.HCM' : (c.parentName || 'Hà Nội');
  let title = `Học Bơi, Dạy Bơi Tại ${c.fullName}, ${city}: Lớp Kèm Riêng`;
  if (title.length > 60) {
    title = `Học Bơi, Dạy Bơi Tại ${c.fullName}, ${city}: Lớp Kèm`;
  }
  if (title.length > 60) {
    title = `Học Bơi, Dạy Bơi ${c.fullName}, ${city}: Lớp Kèm`;
  }
  if (title.length > 60) {
    title = `Học Bơi, Dạy Bơi Tại ${c.name}, ${city}: Lớp Kèm Riêng`;
  }
  if (title.length > 60) {
    title = `Học Bơi, Dạy Bơi Tại ${c.name}, ${city}: Lớp Kèm`;
  }
  if (title.length > 60) {
    title = `Học Bơi, Dạy Bơi ${c.name}, ${city}: Lớp Kèm`;
  }
  if (title.length < 45) {
    title = `Học Bơi, Dạy Bơi Tại ${c.fullName}, ${city}: Lớp Kèm Riêng`;
  }
  if (title.length < 45) {
    title = `Học Bơi, Dạy Bơi Tại ${c.fullName}, ${city}: Lớp Kèm Gần Bạn`;
  }
  if (title.length < 45) {
    title = `Học Bơi, Dạy Bơi Ở ${c.fullName}, ${city}: Lớp Kèm Riêng Gần Bạn`;
  }

  const prevSummary = (c.previous || [])
    .map(p => p.replace(/^(phường|xã|thị trấn)\s+/i, '').replace(/\s*\(.*?\)/g, '').trim())
    .slice(0, 3)
    .join(', ');
  const descLead = `Khóa học bơi, dạy bơi kèm riêng tại ${c.fullName}${prevSummary ? ` (gồm ${prevSummary})` : ''} ${c.parentName}.`;
  const descTail = c.hasVenues
    ? ` Danh sách ${c.directVenues.length} bể bơi, HLV dạy bơi giàu kinh nghiệm, học phí trọn gói rõ ràng.`
    : ` Tra cứu bể bơi và lớp dạy bơi, gợi ý 3 cơ sở lân cận gần nhất kèm học phí HLV.`;
  let description = `${descLead}${descTail}`;
  if (description.length < 140) description += ` Cập nhật thông tin mới nhất năm ${currentYear}.`;
  if (description.length > 170) description = description.slice(0, 166).trim() + '...';

  if (titles.has(title)) {
    console.log('Duplicate title:', title, '| Location:', c.parentName, 'vs', titles.get(title));
    dupTitles++;
  } else {
    titles.set(title, c.parentName);
  }

  if (descs.has(description)) {
    console.log('Duplicate desc:', description, '| Commune:', c.fullName, 'vs', descs.get(description));
    dupDescs++;
  } else {
    descs.set(description, c.fullName);
  }
}

console.log('Total commune pages tested:', pages.length);
console.log('Total out of bounds errors:', outOfBounds);
console.log('Total duplicate titles:', dupTitles);
console.log('Total duplicate descriptions:', dupDescs);

if (outOfBounds > 0 || dupTitles > 0 || dupDescs > 0) {
  process.exit(1);
}


