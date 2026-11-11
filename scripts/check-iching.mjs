#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import esbuild from 'esbuild';

const ROOT_DIR = process.cwd();
const EBOOK_CONTENT_PATH = path.join(ROOT_DIR, 'src/data/ebookContent.ts');
const HEXAGRAM_FIGURE_PATH = path.join(ROOT_DIR, 'src/utils/hexagramFigure.ts');
const TOC_PATH = path.join(ROOT_DIR, 'src/data/tableOfContents.ts');

let hasErrors = false;

function error(msg) {
  console.error(`❌ [check:iching] ${msg}`);
  hasErrors = true;
}

function success(msg) {
  console.log(`✅ [check:iching] ${msg}`);
}

function sha256_16(str) {
  return crypto.createHash('sha256').update(str).digest('hex').slice(0, 16);
}

async function loadTsModule(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  const transformed = esbuild.transformSync(code, {
    loader: 'ts',
    format: 'esm',
  }).code;
  return import(`data:text/javascript;base64,${Buffer.from(transformed).toString('base64')}`);
}

async function run() {
  console.log('Running I Ching canonical verification checks...\n');

  // 1. Check deriveHexagramLines
  const hexMod = await loadTsModule(HEXAGRAM_FIGURE_PATH);
  const { deriveHexagramLines, EIGHT_TRIGRAMS } = hexMod;

  const test1 = deriveHexagramLines([8, 9, 9, 7, 8, 7]);
  const expected1 = [8, 8, 8, 7, 8, 7];
  if (JSON.stringify(test1) !== JSON.stringify(expected1)) {
    error(`deriveHexagramLines([8,9,9,7,8,7]) returned [${test1}], expected [${expected1}]`);
  } else {
    success('deriveHexagramLines([8,9,9,7,8,7]) matches [8,8,8,7,8,7]');
  }

  const test2 = deriveHexagramLines([7, 6, 8, 9, 7, 8]);
  const expected2 = [7, 7, 8, 8, 7, 8];
  if (JSON.stringify(test2) !== JSON.stringify(expected2)) {
    error(`deriveHexagramLines([7,6,8,9,7,8]) returned [${test2}], expected [${expected2}]`);
  } else {
    success('deriveHexagramLines([7,6,8,9,7,8]) matches [7,7,8,8,7,8]');
  }

  // 2. Check EIGHT_TRIGRAMS bit patterns
  const expectedTrigrams = {
    'Qián': '111',
    'Kūn': '000',
    'Zhèn': '100',
    'Kǎn': '010',
    'Gèn': '001',
    'Xùn': '011',
    'Lí': '101',
    'Duì': '110',
  };

  for (const [name, expectedPattern] of Object.entries(expectedTrigrams)) {
    const trigram = EIGHT_TRIGRAMS.find((t) => t.pinyin === name);
    if (!trigram) {
      error(`Trigram ${name} not found in EIGHT_TRIGRAMS`);
      continue;
    }
    const pattern = trigram.lines.map((l) => (l === 'yang' ? '1' : '0')).join('');
    if (pattern !== expectedPattern) {
      error(`Trigram ${name} pattern is ${pattern}, expected ${expectedPattern}`);
    } else {
      success(`Trigram ${name} pattern matches ${expectedPattern}`);
    }
  }

  // 3. Frozen lines and block in ebookContent.ts
  const ebookContent = fs.readFileSync(EBOOK_CONTENT_PATH, 'utf8');
  const lines = ebookContent.split('\n');

  const expectedHashes = {
    l1: {
      prefix: "      'Para Jung, el I Ching opera",
      expected: '3401b8b5c725f78b',
      label: "Folio 18 paragraph 2 ('Para Jung, el I Ching opera...)",
    },
    l2: {
      prefix: "      'Esta conexión descansa",
      expected: '50b4190d777709da',
      label: "Folio 18 paragraph 4 ('Esta conexión descansa...)",
    },
    l3: {
      prefix: "      text: 'El I Ching no predice desenlaces fijos",
      expected: '632a99b7118b0fa3',
      label: "Folio 18 callout text ('El I Ching no predice desenlaces fijos...)",
    },
  };

  for (const [, item] of Object.entries(expectedHashes)) {
    const matchLine = lines.find((l) => l.startsWith(item.prefix));
    if (!matchLine) {
      error(`Frozen line not found starting with: ${item.prefix}`);
      continue;
    }
    const h = sha256_16(matchLine);
    if (h !== item.expected) {
      error(`${item.label} hash is ${h}, expected ${item.expected}`);
    } else {
      success(`${item.label} hash verified (${h})`);
    }
  }

  // Folio 22 block hash
  const startIdx22 = lines.findIndex((l) => l.trim() === 'pageNumber: 22,');
  const endIdx22 = lines.findIndex((l) => l.trim() === 'pageNumber: 23,');
  if (startIdx22 === -1 || endIdx22 === -1) {
    error('Could not locate start or end of Folio 22 in ebookContent.ts');
  } else {
    const block22 = lines.slice(startIdx22, endIdx22).join('\n');
    const h22 = sha256_16(block22);
    if (h22 !== '64c6ecde473edbd9') {
      error(`Folio 22 block hash is ${h22}, expected 64c6ecde473edbd9`);
    } else {
      success(`Folio 22 frozen block hash verified (${h22})`);
    }
  }

  // 4. Forbidden strings check in folios 18-25 (excluding folio 22 block)
  const startIdxCh4 = lines.findIndex((l) => l.trim() === 'pageNumber: 18,');
  const endIdxCh4 = lines.findIndex((l) => l.trim() === 'pageNumber: 26,');
  if (startIdxCh4 === -1 || endIdxCh4 === -1) {
    error('Could not locate boundaries for Chapter 4 (folios 18 to 25)');
  } else {
    const forbiddenStrings = [
      'Tirar monedas',
      'Nota personal',
      'Guardar consulta',
      'Proteger consulta',
      'Estructura de Trigramas',
      'Tus Líneas Mutantes',
      'Interpretación Rápida',
      'Encrucijadas',
      'Autoconocimiento y Procesos',
      'pantalla',
      'Fotografía de archivo',
      'cauce hacia donde gravitan',
      'Convención tradicional',
      'anuncia',
      'apaga el ardor',
      'respeto sagrado',
      'inviolable',
      'víctima pasiva',
      'sombra estoy proyectando',
      'siete estaciones',
      'Siete Estaciones',
      'río helado',
      'desenlace',
    ];

    for (let i = startIdxCh4; i < endIdxCh4; i++) {
      if (i >= startIdx22 && i < endIdx22) continue; // Exclude Folio 22 block
      const line = lines[i];

      for (const f of forbiddenStrings) {
        if (f === 'desenlace') {
          // Exclude the preserved frozen callout in Folio 18 containing 'desenlaces fijos'
          if (line.includes('desenlaces fijos')) continue;
          if (/\bdesenlace\b/i.test(line)) {
            error(`Forbidden string "${f}" found at line ${i + 1}: ${line.trim()}`);
          }
        } else {
          if (line.includes(f)) {
            error(`Forbidden string "${f}" found at line ${i + 1}: ${line.trim()}`);
          }
        }
      }
    }
    success('No forbidden strings found in Chapter 4 (folios 18-25, excluding folio 22)');
  }

  // 5. Word count checks (paragraphs <= 90 words, callouts <= 45 words, folio 24 secondary callout <= 80 words)
  const pageBlocks = ebookContent.split(/\{\s*pageNumber:\s*/).slice(1);
  for (const block of pageBlocks) {
    const pageNumMatch = block.match(/^(\d+)/);
    if (!pageNumMatch) continue;
    const pageNum = parseInt(pageNumMatch[1], 10);
    if (pageNum < 18 || pageNum > 25) continue;
    if (pageNum === 22) continue; // Folio 22 is frozen and preserved

    // Paragraphs
    const parasMatch = block.match(/paragraphs:\s*\[([\s\S]*?)\]/);
    if (parasMatch) {
      const pMatches = parasMatch[1].match(/(["'`])((?:\\.|[^\\])*?)\1/g) || [];
      pMatches.forEach((p, idx) => {
        const text = p.slice(1, -1).replace(/\\n/g, ' ').replace(/\\'/g, "'");
        const count = text.trim().split(/\s+/).filter(Boolean).length;
        if (count > 90) {
          error(`Folio ${pageNum} paragraph ${idx + 1} exceeds 90 words (${count} words)`);
        }
      });
    }

    // carlitosCallout
    const carlitosMatch = block.match(/carlitosCallout:\s*\{[\s\S]*?text:\s*(["'`])((?:\\.|[^\\])*?)\1[\s\S]*?\}/);
    if (carlitosMatch) {
      const text = carlitosMatch[2].replace(/\\n/g, ' ').replace(/\\'/g, "'");
      const count = text.trim().split(/\s+/).filter(Boolean).length;
      if (count > 45) {
        error(`Folio ${pageNum} carlitosCallout exceeds 45 words (${count} words)`);
      }
    }

    // secondaryCallout
    const secMatch = block.match(/secondaryCallout:\s*\{[\s\S]*?text:\s*(["'`])((?:\\.|[^\\])*?)\1[\s\S]*?\}/);
    if (secMatch) {
      const text = secMatch[2].replace(/\\n/g, ' ').replace(/\\'/g, "'");
      const count = text.trim().split(/\s+/).filter(Boolean).length;
      const maxWords = pageNum === 24 ? 80 : 45;
      if (count > maxWords) {
        error(`Folio ${pageNum} secondaryCallout exceeds ${maxWords} words (${count} words)`);
      }
    }
  }
  success('Paragraphs (<= 90 words) and callouts (<= 45 words / <= 80 words) verified');

  // 6. Consecutiveness, INDICE_TITULOS and ChaptersMetaData
  const bundleResult = esbuild.buildSync({
    entryPoints: [EBOOK_CONTENT_PATH],
    bundle: true,
    write: false,
    format: 'esm',
    packages: 'external',
    loader: { '.jpg': 'text', '.png': 'text', '.svg': 'text' },
  });
  const bundledCode = bundleResult.outputFiles[0].text;
  const ebookMod = await import(`data:text/javascript;base64,${Buffer.from(bundledCode).toString('base64')}`);
  const tocMod = await loadTsModule(TOC_PATH);

  const { ChaptersMetaData, EBOOK_PAGES } = ebookMod;
  const { INDICE_TITULOS } = tocMod;

  const ch4Meta = ChaptersMetaData.chapters.find((c) => c.chapterId === 4);
  if (!ch4Meta) {
    error('ChaptersMetaData does not contain chapter 4');
  } else if (ch4Meta.startPage !== 18 || ch4Meta.endPage !== 25) {
    error(`Chapter 4 in ChaptersMetaData has range ${ch4Meta.startPage}-${ch4Meta.endPage}, expected 18-25`);
  } else {
    success('ChaptersMetaData Chapter 4 range verified (18-25)');
  }

  // Check consecutive folios 18-25
  for (let p = 18; p <= 25; p++) {
    const pageData = EBOOK_PAGES.find((page) => page.pageNumber === p);
    if (!pageData) {
      error(`Folio ${p} is missing from EBOOK_PAGES`);
      continue;
    }
    const tocTitle = INDICE_TITULOS[p];
    if (!tocTitle) {
      error(`Folio ${p} title missing in INDICE_TITULOS`);
    } else if (tocTitle !== pageData.pageTitle) {
      error(`Folio ${p} title mismatch: EBOOK_PAGES has "${pageData.pageTitle}", INDICE_TITULOS has "${tocTitle}"`);
    }
  }
  success('Folios 18-25 are consecutive and match INDICE_TITULOS and ChaptersMetaData');

  if (hasErrors) {
    console.error('\n❌ check:iching FAILED. See errors above.');
    process.exit(1);
  } else {
    console.log('\n🎉 ALL canonical I Ching checks PASSED successfully!');
    process.exit(0);
  }
}

run().catch((err) => {
  console.error('Unexpected error during check:iching execution:', err);
  process.exit(1);
});
