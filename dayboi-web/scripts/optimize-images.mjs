import { readdir, rename, rm, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const imageRoot = path.resolve('public/images');
const dryRun = process.argv.includes('--dry-run');
const thresholdBytes = 350 * 1024;
const maxDimension = 1920;
const minimumSaving = 0.05;

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(entryPath) : [entryPath];
  }));
  return files.flat();
}

const files = (await walk(imageRoot)).filter((file) => /\.jpe?g$/i.test(file));
let originalBytes = 0;
let optimizedBytes = 0;
let optimizedCount = 0;

for (const file of files) {
  const before = await stat(file);
  originalBytes += before.size;
  optimizedBytes += before.size;
  if (before.size < thresholdBytes) continue;

  if (dryRun) {
    optimizedCount += 1;
    continue;
  }

  const tempFile = `${file}.optimized.jpg`;
  await sharp(file)
    .rotate()
    .resize({ width: maxDimension, height: maxDimension, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 82, progressive: true, mozjpeg: true, chromaSubsampling: '4:2:0' })
    .toFile(tempFile);

  const after = await stat(tempFile);
  if (after.size <= before.size * (1 - minimumSaving)) {
    await rename(tempFile, file);
    optimizedBytes += after.size - before.size;
    optimizedCount += 1;
  } else {
    await rm(tempFile);
  }
}

const mb = (bytes) => (bytes / 1024 / 1024).toFixed(1);
console.log(dryRun
  ? `${optimizedCount} JPEG files exceed ${(thresholdBytes / 1024).toFixed(0)} KB.`
  : `Optimized ${optimizedCount} JPEG files: ${mb(originalBytes)} MB -> ${mb(optimizedBytes)} MB.`);
