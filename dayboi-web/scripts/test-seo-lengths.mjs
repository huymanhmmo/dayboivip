import { getAllCommunePages } from '../src/data/communePages.js';
import { getCommuneSeoMeta } from '../src/utils/geoCommunes.js';

const pages = getAllCommunePages();
const currentYear = 2026;
let outOfBounds = 0;

const titles = new Map();
const descs = new Map();
let dupTitles = 0;
let dupDescs = 0;

for (const c of pages) {
  const { title, description } = getCommuneSeoMeta(c, currentYear);

  if (title.length < 45 || title.length > 65) {
    console.log('Title length error:', title.length, title);
    outOfBounds++;
  }
  if (description.length < 145 || description.length > 165) {
    console.log('Desc length error:', description.length, description);
    outOfBounds++;
  }

  if (titles.has(title)) {
    console.log('Duplicate title:', title, '| Commune:', c.fullName, 'vs', titles.get(title));
    dupTitles++;
  } else {
    titles.set(title, c.fullName);
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


