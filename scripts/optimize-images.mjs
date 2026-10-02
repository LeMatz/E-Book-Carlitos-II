import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const imagesDir = path.resolve('src/assets/images');

async function optimizeImages() {
  if (!fs.existsSync(imagesDir)) {
    console.error(`Directory not found: ${imagesDir}`);
    return;
  }

  const files = fs.readdirSync(imagesDir).filter(file => /\.(jpe?g|png)$/i.test(file));
  console.log(`Found ${files.length} images to optimize in ${imagesDir}...`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const filePath = path.join(imagesDir, file);
    const statBefore = fs.statSync(filePath);
    totalBefore += statBefore.size;

    const buffer = fs.readFileSync(filePath);
    const optimized = await sharp(buffer)
      .resize({ width: 1400, withoutEnlargement: true })
      .jpeg({ quality: 80, mozjpeg: true })
      .toBuffer();

    fs.writeFileSync(filePath, optimized);
    const statAfter = fs.statSync(filePath);
    totalAfter += statAfter.size;

    console.log(
      `✓ ${file}: ${(statBefore.size / 1024).toFixed(1)} KB -> ${(statAfter.size / 1024).toFixed(1)} KB (-${(
        (1 - statAfter.size / statBefore.size) *
        100
      ).toFixed(1)}%)`
    );
  }

  console.log(
    `\nTotal size reduced from ${(totalBefore / (1024 * 1024)).toFixed(2)} MB to ${(
      totalAfter /
      (1024 * 1024)
    ).toFixed(2)} MB (-${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%)`
  );
}

optimizeImages().catch(err => {
  console.error('Error optimizing images:', err);
  process.exit(1);
});
