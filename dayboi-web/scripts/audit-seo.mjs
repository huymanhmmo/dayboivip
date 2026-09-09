import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const distRoot = 'dist';
const aiPhrases = [
  'cổng chất lượng',
  'ý định tìm kiếm',
  'landing page',
  'hub →',
  'tầng thông tin',
  'uy tín nhất',
  'uy tín số 1',
  'hiện đại số 1',
  'an toàn số 1',
  'địa điểm bơi lội số 1',
  'an toàn tuyệt đối',
  'cam kết 100%',
  'hoàn hảo nhất',
];

if (!existsSync(distRoot)) {
  throw new Error('Chưa có thư mục dist. Hãy chạy npm run build trước.');
}

const collectHtmlFiles = (directory) => readdirSync(directory).flatMap((entry) => {
  const path = join(directory, entry);
  return statSync(path).isDirectory() ? collectHtmlFiles(path) : (entry.endsWith('.html') ? [path] : []);
});

const decodeHtml = (value = '') => value
  .replaceAll('&amp;', '&')
  .replaceAll('&quot;', '"')
  .replaceAll('&#39;', "'")
  .replaceAll('&lt;', '<')
  .replaceAll('&gt;', '>')
  .replaceAll('&nbsp;', ' ');

const outputUrl = (file) => {
  const path = relative(distRoot, file).split(sep).join('/');
  if (path === 'index.html') return '/';
  if (path.endsWith('/index.html')) return `/${path.slice(0, -'index.html'.length)}`;
  return `/${path}`;
};

const getAttribute = (tag, name) => decodeHtml(
  tag.match(new RegExp(`\\s${name}=(?:"([^"]*)"|'([^']*)')`, 'i'))?.slice(1).find(Boolean) || '',
);

const visibleText = (html) => decodeHtml(html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
  .replace(/<svg\b[^>]*>[\s\S]*?<\/svg>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/\s+/g, ' ')
  .trim());

const reports = collectHtmlFiles(distRoot).map((file) => {
  const html = readFileSync(file, 'utf8');
  const url = outputUrl(file);
  const title = decodeHtml(html.match(/<title>(.*?)<\/title>/i)?.[1] || '');
  const description = decodeHtml(html.match(/<meta\s+name="description"\s+content="(.*?)"/i)?.[1] || '');
  const canonical = decodeHtml(html.match(/<link\s+rel="canonical"\s+href="(.*?)"/i)?.[1] || '');
  const robots = decodeHtml(html.match(/<meta\s+name="robots"\s+content="(.*?)"/i)?.[1] || '');
  const isRedirect = /http-equiv="refresh"/i.test(html);
  const isVerificationFile = /^\/google[^/]*\.html$/i.test(url);
  const isIndexable = !isRedirect && !isVerificationFile && !/noindex/i.test(robots) && url !== '/404.html';
  const h1Count = (html.match(/<h1(?:\s|>)/gi) || []).length;
  const headings = [...html.matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi)]
    .map((match) => ({ level: Number(match[1]), text: visibleText(match[2]) }));
  const skippedHeadingIndex = headings.findIndex((heading, index) => index > 0 && heading.level > headings[index - 1].level + 1);
  const skippedHeading = skippedHeadingIndex > -1;
  const skippedHeadingPair = skippedHeading
    ? `${headings[skippedHeadingIndex - 1].level}:${headings[skippedHeadingIndex - 1].text} -> ${headings[skippedHeadingIndex].level}:${headings[skippedHeadingIndex].text}`
    : '';
  const images = [...html.matchAll(/<img\b[^>]*>/gi)].map((match) => {
    const tag = match[0];
    return {
      src: getAttribute(tag, 'src'),
      alt: getAttribute(tag, 'alt'),
      width: getAttribute(tag, 'width'),
      height: getAttribute(tag, 'height'),
    };
  });
  const text = visibleText(html);
  const lowerText = text.toLocaleLowerCase('vi');

  return {
    file,
    url,
    title,
    description,
    canonical,
    isRedirect,
    isIndexable,
    h1Count,
    skippedHeading,
    skippedHeadingPair,
    wordCount: text.split(/\s+/).filter(Boolean).length,
    imageCount: images.length,
    missingAlt: images.filter((image) => !image.alt).map((image) => image.src),
    missingDimensions: images.filter((image) => !image.width || !image.height).map((image) => image.src),
    aiPhrases: aiPhrases.filter((phrase) => lowerText.includes(phrase)),
  };
});

const indexable = reports.filter((report) => report.isIndexable);
const groupDuplicates = (field) => [...indexable.reduce((groups, report) => {
  const value = report[field];
  if (!value) return groups;
  const matches = groups.get(value) || [];
  matches.push(report.url);
  groups.set(value, matches);
  return groups;
}, new Map())].filter(([, urls]) => urls.length > 1);

const issues = {
  missingTitle: indexable.filter((report) => !report.title),
  titleLength: indexable.filter((report) => report.title.length < 45 || report.title.length > 65),
  missingDescription: indexable.filter((report) => !report.description),
  descriptionLength: indexable.filter((report) => report.description.length < 140 || report.description.length > 170),
  missingCanonical: indexable.filter((report) => !report.canonical),
  invalidH1: indexable.filter((report) => report.h1Count !== 1),
  skippedHeading: indexable.filter((report) => report.skippedHeading),
  thinContent: indexable.filter((report) => report.wordCount < 300),
  missingAlt: indexable.filter((report) => report.missingAlt.length > 0),
  missingDimensions: indexable.filter((report) => report.missingDimensions.length > 0),
  aiLanguage: indexable.filter((report) => report.aiPhrases.length > 0),
};

const printList = (label, items, detail) => {
  console.log(`\n${label}: ${items.length}`);
  for (const item of items.slice(0, 100)) console.log(`- ${item.url}${detail ? ` | ${detail(item)}` : ''}`);
  if (items.length > 100) console.log(`- ... còn ${items.length - 100} URL`);
};

console.log(`SEO AUDIT: ${reports.length} HTML, ${indexable.length} URL indexable, ${reports.filter((item) => item.isRedirect).length} redirect.`);
printList('Title ngoài ngưỡng 45-65', issues.titleLength, (item) => `${item.title.length} ký tự: ${item.title}`);
printList('Description ngoài ngưỡng 140-170', issues.descriptionLength, (item) => `${item.description.length} ký tự`);
printList('H1 thiếu hoặc trùng', issues.invalidH1, (item) => `${item.h1Count} H1`);
printList('Heading nhảy cấp', issues.skippedHeading, (item) => item.skippedHeadingPair);
printList('Nội dung dưới 300 từ', issues.thinContent, (item) => `${item.wordCount} từ`);
printList('Ảnh thiếu alt', issues.missingAlt, (item) => item.missingAlt.join(', '));
printList('Ảnh thiếu width/height', issues.missingDimensions, (item) => item.missingDimensions.join(', '));
printList('Cụm từ máy móc hoặc phóng đại', issues.aiLanguage, (item) => item.aiPhrases.join(', '));

const duplicateTitles = groupDuplicates('title');
const duplicateDescriptions = groupDuplicates('description');
console.log(`\nTitle trùng: ${duplicateTitles.length} nhóm.`);
for (const [title, urls] of duplicateTitles.slice(0, 10)) console.log(`- ${title}: ${urls.join(', ')}`);
console.log(`\nDescription trùng: ${duplicateDescriptions.length} nhóm.`);
for (const [description, urls] of duplicateDescriptions.slice(0, 10)) console.log(`- ${description.slice(0, 80)}...: ${urls.join(', ')}`);

if (process.argv.includes('--strict')) {
  const blocking = [
    ...issues.missingTitle,
    ...issues.titleLength,
    ...issues.missingDescription,
    ...issues.descriptionLength,
    ...issues.missingCanonical,
    ...issues.invalidH1,
    ...issues.skippedHeading,
    ...issues.missingAlt,
    ...issues.missingDimensions,
  ];
  if (blocking.length || duplicateTitles.length || duplicateDescriptions.length) process.exitCode = 1;
}
