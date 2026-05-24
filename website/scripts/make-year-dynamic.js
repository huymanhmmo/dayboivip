import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const files = [
  'src/pages/blog/cach-hoc-boi-nhanh-nhat.astro',
  'src/pages/blog/cach-hoc-boi.astro',
  'src/pages/blog/tre-may-tuoi-hoc-boi.astro',
  'src/pages/blog/tu-hoc-boi.astro',
  'src/pages/dia-diem/ha-noi.astro',
  'src/pages/dia-diem/tphcm.astro',
  'src/pages/khoa-hoc-boi/index.astro',
  'src/pages/khoa-hoc-boi/nguoi-lon.astro',
  'src/pages/khoa-hoc-boi/tre-em.astro',
  'src/pages/ky-thuat-boi/hoc-boi-buom.astro',
  'src/pages/ky-thuat-boi/hoc-boi-ech.astro',
  'src/pages/ky-thuat-boi/hoc-boi-ngua.astro',
  'src/pages/ky-thuat-boi/hoc-boi-sai.astro',
  'src/pages/ky-thuat-boi/ky-nang-dung-nuoc.astro',
  'src/pages/blog/index.astro'
];

const baseDir = path.resolve(__dirname, '..');

files.forEach(relativePath => {
  const filePath = path.join(baseDir, relativePath);
  if (!fs.existsSync(filePath)) {
    console.error(`File does not exist: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Inject currentYear definition in frontmatter if not present
  if (!content.includes('const currentYear =')) {
    content = content.replace(/^(---)(\r?\n)/, `$1$2const currentYear = new Date().getFullYear();$2`);
  }

  // 2. Replace title variables in frontmatter
  content = content.replace(
    /const title = '([^']*)\[2026\]([^']*)';/g,
    'const title = `$1[${currentYear}]$2`;'
  );
  content = content.replace(
    /const title = "([^"]*)\[2026\]([^"]*)";/g,
    'const title = `$1[${currentYear}]$2`;'
  );

  // 3. Replace title keys in objects (like blog posts)
  content = content.replace(
    /title: '([^']*)\[2026\]([^']*)',/g,
    'title: `$1[${currentYear}]$2`,'
  );
  content = content.replace(
    /title: "([^"]*)\[2026\]([^"]*)",/g,
    'title: `$1[${currentYear}]$2`,'
  );

  // 4. Replace title properties in components
  content = content.replace(
    /title="([^"]*)\[2026\]([^"]*)"/g,
    'title={`$1[${currentYear}]$2`}'
  );
  content = content.replace(
    /title='([^']*)\[2026\]([^']*)'/g,
    'title={`$1[${currentYear}]$2`}'
  );

  // 5. Replace "Cập nhật" dates
  content = content.replace(
    /Cập nhật: (\d{2})\/(\d{2})\/2026/g,
    'Cập nhật: $1/$2/<span class="current-year">{currentYear}</span>'
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${relativePath}`);
});
