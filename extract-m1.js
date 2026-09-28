const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

async function extractAll() {
  const pdfPath = path.resolve(__dirname, 'assets/م1 لغة 1.pdf');
  const parser = new PDFParse({ data: fs.readFileSync(pdfPath) });
  const result = await parser.getText();
  
  console.log(`Total Pages: ${result.total}`);
  console.log(`Extracted Pages Count: ${result.pages ? result.pages.length : 'none'}`);
  
  // Save full text
  fs.writeFileSync(path.resolve(__dirname, 'output/m1-full-text.txt'), result.text, 'utf8');
  
  // If pages array exists, save each page
  if (result.pages) {
    const pagesData = result.pages.map((p, idx) => ({
      pageNumber: idx + 1,
      text: p.text || (typeof p === 'string' ? p : JSON.stringify(p))
    }));
    fs.writeFileSync(
      path.resolve(__dirname, 'output/m1-pages.json'),
      JSON.stringify(pagesData, null, 2),
      'utf8'
    );
  }
  
  console.log('Saved output/m1-full-text.txt and output/m1-pages.json successfully!');
}

extractAll().catch(console.error);
