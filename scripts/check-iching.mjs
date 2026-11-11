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

  // Load metadata and toc
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
  } else if (ch4Meta.startPage !== 16 || ch4Meta.endPage !== 23) {
    error(`Chapter 4 in ChaptersMetaData has range ${ch4Meta.startPage}-${ch4Meta.endPage}, expected 16-23`);
  } else {
    success(`ChaptersMetaData Chapter 4 range verified (${ch4Meta.startPage}-${ch4Meta.endPage})`);
  }

  // 3. Frozen lines and block in ebookContent.ts
  const ebookContent = fs.readFileSync(EBOOK_CONTENT_PATH, 'utf8');
  const lines = ebookContent.split('\n');

  const expectedHashes = {
    l1: {
      prefix: "      'Para Jung, el I Ching opera",
      expected: '3401b8b5c725f78b',
      label: "Folio 16 paragraph 2 ('Para Jung, el I Ching opera...)",
    },
    l2: {
      prefix: "      'Esta conexión descansa",
      expected: '50b4190d777709da',
      label: "Folio 16 paragraph 4 ('Esta conexión descansa...)",
    },
    l3: {
      prefix: "      text: 'El I Ching no predice desenlaces fijos",
      expected: '632a99b7118b0fa3',
      label: "Folio 16 callout text ('El I Ching no predice desenlaces fijos...)",
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

  // Frozen folio block hash (located by title: La estructura de la lectura: juicio, imagen y mutaciones)
  const frozenTitle = 'La estructura de la lectura: juicio, imagen y mutaciones';
  const frozenTitleIdx = lines.findIndex((l) => l.includes(`pageTitle: '${frozenTitle}'`));
  let startIdxFrozen = -1;
  let endIdxFrozen = -1;

  if (frozenTitleIdx === -1) {
    error(`Could not locate frozen folio with title "${frozenTitle}" in ebookContent.ts`);
  } else {
    // Walk backward to find pageNumber
    for (let i = frozenTitleIdx; i >= 0; i--) {
      if (/^\s*pageNumber:\s*\d+,/.test(lines[i])) {
        startIdxFrozen = i + 1; // line after pageNumber
        break;
      }
    }
    // Walk forward to find next pageNumber
    for (let i = frozenTitleIdx; i < lines.length; i++) {
      if (/^\s*pageNumber:\s*\d+,/.test(lines[i])) {
        endIdxFrozen = i; // line before next pageNumber
        break;
      }
    }
  }

  if (startIdxFrozen === -1 || endIdxFrozen === -1) {
    error('Could not locate boundaries for frozen folio block in ebookContent.ts');
  } else {
    const blockFrozen = lines.slice(startIdxFrozen, endIdxFrozen).join('\n');
    const hFrozen = sha256_16(blockFrozen);
    if (hFrozen !== '7c1f62ff4c2817a7') {
      error(`Frozen folio block hash is ${hFrozen}, expected 7c1f62ff4c2817a7`);
    } else {
      success(`Frozen folio block hash verified (${hFrozen})`);
    }
  }

  // 4. Forbidden strings check in Chapter 4 folios (excluding frozen folio block)
  const ch4StartPage = ch4Meta ? ch4Meta.startPage : 16;
  const ch4EndPage = ch4Meta ? ch4Meta.endPage : 23;

  const startIdxCh4 = lines.findIndex((l) => l.trim() === `pageNumber: ${ch4StartPage},`);
  const endIdxCh4 = lines.findIndex((l) => l.trim() === `pageNumber: ${ch4EndPage + 1},`);
  if (startIdxCh4 === -1 || endIdxCh4 === -1) {
    error(`Could not locate boundaries for Chapter 4 (folios ${ch4StartPage} to ${ch4EndPage})`);
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
      if (i >= startIdxFrozen && i < endIdxFrozen) continue; // Exclude frozen folio block
      const line = lines[i];

      for (const f of forbiddenStrings) {
        if (f === 'desenlace') {
          // Exclude the preserved frozen callout in Folio 16 containing 'desenlaces fijos'
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
    success(`No forbidden strings found in Chapter 4 (folios ${ch4StartPage}-${ch4EndPage}, excluding frozen folio)`);
  }

  // 5. Word count checks (paragraphs <= 90 words, callouts <= 45 words, secondary callout <= 80 words)
  const pageBlocks = ebookContent.split(/\{\s*pageNumber:\s*/).slice(1);
  for (const block of pageBlocks) {
    const pageNumMatch = block.match(/^(\d+)/);
    if (!pageNumMatch) continue;
    const pageNum = parseInt(pageNumMatch[1], 10);
    if (pageNum < ch4StartPage || pageNum > ch4EndPage) continue;
    if (block.includes(frozenTitle)) continue; // Frozen folio is preserved

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
      const maxWords = 80;
      if (count > maxWords) {
        error(`Folio ${pageNum} secondaryCallout exceeds ${maxWords} words (${count} words)`);
      }
    }
  }
  success('Paragraphs (<= 90 words) and callouts (<= 45 words / <= 80 words) verified');

  // Check consecutive folios for Chapter 4
  for (let p = ch4StartPage; p <= ch4EndPage; p++) {
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
  success(`Folios ${ch4StartPage}-${ch4EndPage} are consecutive and match INDICE_TITULOS and ChaptersMetaData`);

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
