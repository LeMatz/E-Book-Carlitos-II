const fs = require('fs');

const content = fs.readFileSync('src/data/ebookContent.ts', 'utf8');

const pages = content.split(/\{\s*id:\s*'folio-/);

pages.slice(1).forEach((pageBlock) => {
  const numMatch = pageBlock.match(/pageNumber:\s*(\d+)/);
  if (!numMatch) return;
  const pageNum = parseInt(numMatch[1], 10);
  if (pageNum < 18 || pageNum > 26) return;

  const pBlockMatch = pageBlock.match(/paragraphs:\s*\[([\s\S]*?)\],/);
  if (!pBlockMatch) return;

  const rawP = pBlockMatch[1];
  // split paragraphs properly by backtick or string
  const pList = [];
  const regex = /`([\s\S]*?)`/g;
  let m;
  while ((m = regex.exec(rawP)) !== null) {
    pList.push(m[1]);
  }

  console.log(`Folio ${pageNum}: ${pList.length} paragraphs`);

  pList.forEach((pText, idx) => {
    const clean = pText.replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();
    const words = clean.split(/\s+/).filter(Boolean);
    if (words.length > 90) {
      console.warn(`  WARNING: Folio ${pageNum} p${idx + 1} has ${words.length} words: "${clean.slice(0, 40)}..."`);
    } else {
      console.log(`  Folio ${pageNum} p${idx + 1}: ${words.length} words [OK]`);
    }
  });
});
