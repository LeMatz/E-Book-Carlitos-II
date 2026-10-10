import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { chromium } from 'playwright';

const require = createRequire(import.meta.url);

async function exportPdf() {
  const distDir = path.resolve('dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  const outputPath = path.join(distDir, 'mi-amigo-carlitos-ii.pdf');
  const targetUrl = process.env.PDF_TARGET_URL || 'http://localhost:3000';

  console.log(`Launching Playwright to render PDF from ${targetUrl}...`);

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  try {
    const context = await browser.newContext({
      viewport: { width: 1200, height: 1600 },
      deviceScaleFactor: 2,
    });
    const page = await context.newPage();

    console.log(`Navigating to ${targetUrl}...`);
    await page.goto(targetUrl, { waitUntil: 'load', timeout: 30000 });

    // Wait for fonts and all images to load completely
    console.log('Waiting for fonts and images to settle...');
    await page.evaluate(async () => {
      if (document.fonts) {
        await document.fonts.ready;
      }
      const images = Array.from(document.images);
      await Promise.all(
        images.map(img => {
          if (img.complete) return Promise.resolve();
          return new Promise(resolve => {
            img.onload = resolve;
            img.onerror = resolve;
            setTimeout(resolve, 3000);
          });
        })
      );
    });

    // Small delay to ensure any layout transitions have finalized
    await page.waitForTimeout(500);

    // Set media to print to apply @media print styles
    await page.emulateMedia({ media: 'print' });

    console.log(`Generating Legal (8.5x14in) PDF to ${outputPath}...`);
    await page.pdf({
      path: outputPath,
      format: 'Legal',
      printBackground: true,
      preferCSSPageSize: true,
      margin: {
        top: '0mm',
        right: '0mm',
        bottom: '0mm',
        left: '0mm',
      },
    });

    const stats = fs.statSync(outputPath);
    console.log(`✓ PDF successfully generated: ${outputPath}`);
    console.log(`  File size: ${(stats.size / (1024 * 1024)).toFixed(2)} MB`);

    // Verify PDF with pdf-parse if available
    try {
      const pdfParseModule = require('pdf-parse');
      const pdfParser = typeof pdfParseModule === 'function' ? pdfParseModule : pdfParseModule.default || pdfParseModule.PDFParser;
      if (typeof pdfParser === 'function') {
        const dataBuffer = fs.readFileSync(outputPath);
        const data = await pdfParser(dataBuffer);
        console.log(`  Total pages parsed: ${data.numpages}`);
      }
    } catch (parseErr) {
      console.log('  PDF parse check note:', parseErr.message);
    }
  } finally {
    await browser.close();
  }
}

exportPdf().catch(err => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});
