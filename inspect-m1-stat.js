const fs = require('fs');
const path = require('path');

async function run() {
  const pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs');
  const pdfPath = path.resolve(__dirname, 'assets/المحاضرة1 -مفاهيم أساسية.pdf');
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const doc = await pdfjs.getDocument({ data, useSystemFonts: true }).promise;
  
  console.log('Doc numPages:', doc.numPages);
  const pagesSummary = [];
  
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const textContent = await page.getTextContent();
    const ops = await page.getOperatorList();
    const textStr = textContent.items.map(it => it.str).join(' ');
    
    console.log(`Page ${i}: text items = ${textContent.items.length}, total ops = ${ops.fnArray.length}, chars = ${textStr.length}`);
    pagesSummary.push({
      page: i,
      textItemsCount: textContent.items.length,
      opsCount: ops.fnArray.length,
      sampleText: textStr
    });
  }
  
  fs.writeFileSync('output/pdfjs-m1-summary.json', JSON.stringify(pagesSummary, null, 2), 'utf8');
  console.log('Saved output/pdfjs-m1-summary.json');
}

run().catch(console.error);
