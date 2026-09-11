import { getAllCommunePages } from '../src/data/communePages.js';

const pages = getAllCommunePages();
const currentYear = 2026;
let outOfBounds = 0;

for (const c of pages) {
  let title = `Học Bơi Tại ${c.fullName}: Lớp Kèm Riêng & Bể Bơi`;
  if (title.length > 65) {
    title = `Học Bơi ${c.fullName}: Lớp Kèm & Bể Bơi`;
  }
  if (title.length < 45) {
    title = `${title} Gần Bạn`;
  }

  const prevSummary = (c.previous || [])
    .map(p => p.replace(/^(phường|xã|thị trấn)\s+/i, '').replace(/\s*\(.*?\)/g, '').trim())
    .slice(0, 3)
    .join(', ');
  const descLead = `Tìm lớp học bơi tại ${c.fullName}${prevSummary ? ` (gồm ${prevSummary})` : ''} tại ${c.parentName}.`;
  const descTail = c.hasVenues
    ? ` Xem danh sách ${c.directVenues.length} bể bơi, học phí HLV kèm riêng và liên hệ trực tiếp.`
    : ` Tra cứu địa điểm học bơi, gợi ý 3 bể bơi lân cận gần nhất kèm khoảng cách chi tiết.`;
  let description = `${descLead}${descTail}`;
  if (description.length < 140) description += ` Cập nhật thông tin mới nhất năm ${currentYear}.`;
  if (description.length > 170) description = description.slice(0, 166).trim() + '...';

  if (title.length < 45 || title.length > 65) {
    console.log('Title error:', title.length, title);
    outOfBounds++;
  }
  if (description.length < 140 || description.length > 170) {
    console.log('Desc error:', description.length, description);
    outOfBounds++;
  }
}

const titles = new Map();
const descs = new Map();
let dupTitles = 0;
let dupDescs = 0;

for (const c of pages) {
  let title = `Học Bơi Tại ${c.fullName}: Lớp Kèm Riêng & Bể Bơi`;
  if (title.length > 65) {
    title = `Học Bơi ${c.fullName}: Lớp Kèm & Bể Bơi`;
  }
  if (title.length < 45) {
    title = `${title} Gần Bạn`;
  }

  const prevSummary = (c.previous || [])
    .map(p => p.replace(/^(phường|xã|thị trấn)\s+/i, '').replace(/\s*\(.*?\)/g, '').trim())
    .slice(0, 3)
    .join(', ');
  const descLead = `Tìm lớp học bơi tại ${c.fullName}${prevSummary ? ` (gồm ${prevSummary})` : ''} tại ${c.parentName}.`;
  const descTail = c.hasVenues
    ? ` Xem danh sách ${c.directVenues.length} bể bơi, học phí HLV kèm riêng và liên hệ trực tiếp.`
    : ` Tra cứu địa điểm học bơi, gợi ý 3 bể bơi lân cận gần nhất kèm khoảng cách chi tiết.`;
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

