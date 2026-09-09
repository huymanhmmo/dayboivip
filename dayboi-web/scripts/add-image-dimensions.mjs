import { readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const sourceRoot = path.resolve('src');
const publicRoot = path.resolve('public');
const dryRun = process.argv.includes('--dry-run');

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(entryPath) : [entryPath];
  }));
  return files.flat();
}

const files = (await walk(sourceRoot)).filter((file) => file.endsWith('.astro'));
const metadataCache = new Map();
let changedFiles = 0;
let changedImages = 0;

for (const file of files) {
  const source = await readFile(file, 'utf8');
  const tags = [...source.matchAll(/<img\b[^>]*>/gi)];
  let output = source;
  let offset = 0;

  for (const match of tags) {
    const tag = match[0];
    if (/\bwidth\s*=|\bheight\s*=/i.test(tag)) continue;
    const src = tag.match(/\bsrc\s*=\s*["'](\/images\/[^"']+)["']/i)?.[1];
    if (!src) continue;

    const diskPath = path.join(publicRoot, src.replace(/^\//, ''));
    let dimensions = metadataCache.get(diskPath);
    if (!dimensions) {
      const { width, height } = await sharp(diskPath).metadata();
      if (!width || !height) continue;
      dimensions = { width, height };
      metadataCache.set(diskPath, dimensions);
    }

    const replacement = tag.replace(/(\s*\/?>)$/, ` width="${dimensions.width}" height="${dimensions.height}"$1`);
    const start = match.index + offset;
    output = `${output.slice(0, start)}${replacement}${output.slice(start + tag.length)}`;
    offset += replacement.length - tag.length;
    changedImages += 1;
  }

  if (output !== source) {
    changedFiles += 1;
    if (!dryRun) await writeFile(file, output, 'utf8');
  }
}

console.log(`${dryRun ? 'Would update' : 'Updated'} ${changedImages} image tags in ${changedFiles} Astro files.`);
