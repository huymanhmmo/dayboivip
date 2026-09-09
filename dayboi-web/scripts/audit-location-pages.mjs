import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { publishedLocationAreas } from '../src/data/locationAreas.js';

const decodeHtml = (value) => value
  .replaceAll('&amp;', '&')
  .replaceAll('&quot;', '"')
  .replaceAll('&#39;', "'");

const isSpecificExternalSource = (sourceUrl) => {
  const url = new URL(sourceUrl);
  return url.protocol === 'https:' && url.pathname !== '/' && url.hostname !== 'dayboi.vip';
};

assert(publishedLocationAreas.length > 0, 'Không có landing page địa phương nào qua cổng chất lượng.');
assert.equal(
  new Set(publishedLocationAreas.map((area) => area.url)).size,
  publishedLocationAreas.length,
  'Có URL landing page địa phương bị trùng.',
);

for (const area of publishedLocationAreas) {
  assert(area.category.venues.length >= 2, `${area.name}: cần ít nhất 2 địa điểm.`);

  for (const venue of area.category.venues) {
    assert(venue.venueContact, `${area.name} / ${venue.name}: thiếu liên hệ ban quản lý.`);
    assert(
      isSpecificExternalSource(venue.venueContact.exactSourceUrl),
      `${area.name} / ${venue.name}: nguồn bể bơi phải là URL chi tiết bên ngoài.`,
    );
    assert(venue.instructors?.length > 0, `${area.name} / ${venue.name}: thiếu đầu mối lớp học.`);
    for (const instructor of venue.instructors) {
      assert(
        isSpecificExternalSource(instructor.exactSourceUrl),
        `${area.name} / ${venue.name} / ${instructor.unitName}: nguồn lớp học không đạt chuẩn.`,
      );
    }
  }

  const outputFile = join('dist', ...area.url.split('/').filter(Boolean), 'index.html');
  assert(existsSync(outputFile), `${area.name}: chưa có HTML build tại ${outputFile}.`);
  const html = readFileSync(outputFile, 'utf8');
  const title = decodeHtml(html.match(/<title>(.*?)<\/title>/)?.[1] || '');
  const description = decodeHtml(html.match(/<meta name="description" content="(.*?)"/)?.[1] || '');
  const canonical = html.match(/<link rel="canonical" href="(.*?)"/)?.[1];
  const h1Count = (html.match(/<h1(?:\s|>)/g) || []).length;
  const schemaBlocks = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)]
    .map((match) => JSON.parse(match[1]));

  assert(title.length >= 45 && title.length <= 60, `${area.name}: title dài ${title.length} ký tự.`);
  assert(description.length >= 145 && description.length <= 165, `${area.name}: description dài ${description.length} ký tự.`);
  assert.equal(canonical, `https://dayboi.vip${area.url}`, `${area.name}: canonical không khớp.`);
  assert.equal(h1Count, 1, `${area.name}: cần đúng 1 H1, hiện có ${h1Count}.`);
  assert(schemaBlocks.some((block) => block['@graph']), `${area.name}: thiếu schema CollectionPage/ItemList/FAQPage.`);
}

console.log(`✓ ${publishedLocationAreas.length} landing page địa phương đạt cổng dữ liệu và SEO output.`);

