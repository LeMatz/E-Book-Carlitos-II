import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';

function parseArgs() {
  const args = process.argv.slice(2);
  let format = (process.env.EXPORT_FORMAT || 'png').toLowerCase();
  let outDir = process.env.EXPORT_IMAGES_DIR || 'dist/images';

  for (const arg of args) {
    if (arg.startsWith('--format=')) {
      format = arg.split('=')[1].toLowerCase();
    } else if (arg.startsWith('--out=')) {
      outDir = arg.split('=')[1];
    }
  }

  if (format !== 'png' && format !== 'jpg') {
    throw new Error(`Formato no soportado "${format}". Usa "png" o "jpg".`);
  }

  return { format, outDir: path.resolve(outDir) };
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function resolveExecutablePath() {
  const defaultPath = chromium.executablePath();
  if (defaultPath && fs.existsSync(defaultPath)) {
    return undefined;
  }

  const cacheDir = '/ms-playwright';
  if (fs.existsSync(cacheDir)) {
    const entries = fs.readdirSync(cacheDir).filter((d) => d.startsWith('chromium_headless_shell-'));
    for (const entry of entries) {
      const candidate = path.join(cacheDir, entry, 'chrome-headless-shell-linux64', 'chrome-headless-shell');
      if (fs.existsSync(candidate)) {
        return candidate;
      }
    }
  }

  return undefined;
}

async function exportImages() {
  const { format, outDir } = parseArgs();
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const targetUrl = process.env.IMAGES_TARGET_URL || process.env.PDF_TARGET_URL || 'http://localhost:3000';
  const executablePath = resolveExecutablePath();

  console.log(`Launching Playwright to capture master ${format.toUpperCase()} sheets from ${targetUrl}...`);

  const browser = await chromium.launch({
    headless: true,
    ...(executablePath ? { executablePath } : {}),
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  try {
    const context = await browser.newContext({
      viewport: { width: 1200, height: 1600 },
      deviceScaleFactor: 2,
    });
    const page = await context.newPage();

    console.log(`Navigating to ${targetUrl}...`);
    await page.goto(targetUrl, { waitUntil: 'networkidle', timeout: 45000 });

    console.log('Waiting for fonts and images to settle...');
    await page.evaluate(async () => {
      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }
      const images = Array.from(document.images);
      await Promise.all(
        images.map(async (img) => {
          if (!img.complete) {
            await new Promise((resolve) => {
              img.addEventListener('load', resolve, { once: true });
              img.addEventListener('error', resolve, { once: true });
              setTimeout(resolve, 4000);
            });
          }
          if (typeof img.decode === 'function') {
            await img.decode().catch(() => {});
          }
        })
      );
    });

    // Hide non-export UI chrome
    await page.addStyleTag({
      content: '.no-print, .export-exclude { display: none !important; }',
    });

    await page.waitForTimeout(300);

    const sections = await page.evaluate(() => {
      const nodes = Array.from(document.querySelectorAll('section[id^="folio-"]'));
      return nodes.map((sec) => {
        const id = sec.id;
        const h1 = sec.querySelector('h1')?.textContent?.trim() || '';
        return { id, h1 };
      });
    });

    const totalFolios = sections.filter((s) => /^folio-\d+$/.test(s.id)).length;
    console.log(`Found ${sections.length} pages (${totalFolios} folios). Capturing at 2x DPI...`);

    for (const sec of sections) {
      let filename;
      if (sec.id === 'folio-portada') {
        filename = `00-portada-monumental.${format}`;
      } else if (sec.id === 'folio-indice') {
        filename = `00-indice-de-contenidos.${format}`;
      } else if (sec.id === 'folio-contraportada') {
        const pad = String(totalFolios + 1).padStart(2, '0');
        filename = `${pad}-contraportada-de-archivo.${format}`;
      } else {
        const num = sec.id.replace('folio-', '');
        const pad = String(num).padStart(2, '0');
        const slug = slugify(sec.h1 || sec.id);
        filename = `${pad}-folio-${num}-${slug}.${format}`;
      }

      const sectionLocator = page.locator(`#${sec.id}`);
      const sheetCount = await sectionLocator.locator('.print-page-sheet').count();
      const targetLocator =
        sheetCount > 0 ? sectionLocator.locator('.print-page-sheet').first() : sectionLocator;

      await targetLocator.scrollIntoViewIfNeeded();
      const outPath = path.join(outDir, filename);

      await targetLocator.screenshot({
        path: outPath,
        type: format === 'jpg' ? 'jpeg' : 'png',
        ...(format === 'jpg' ? { quality: 95 } : {}),
        animations: 'disabled',
      });

      const stats = fs.statSync(outPath);
      console.log(`✓ ${filename} (${(stats.size / 1024).toFixed(0)} KB)`);
    }

    console.log(`\n✓ All ${sections.length} master ${format.toUpperCase()} images saved to ${outDir}`);
  } finally {
    await browser.close();
  }
}

exportImages().catch((err) => {
  console.error('Error exporting master images:', err);
  process.exit(1);
});
