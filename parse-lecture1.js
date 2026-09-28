const fs = require('fs');
const path = require('path');
const { PDFParser } = require('pdf-parse');

async function inspectPdf() {
  const pdfPath = path.resolve(__dirname, 'assets/م1 لغة 1.pdf');
  const dataBuffer = fs.readFileSync(pdfPath);
  
  // Try using pdf-parse
  try {
    const pdfParse = require('pdf-parse');
    // If pdf-parse is a function
    let data;
    if (typeof pdfParse === 'function') {
      data = await pdfParse(dataBuffer);
      console.log('--- PDF INFO ---');
      console.log('Pages:', data.numpages);
      console.log('Info:', data.info);
      console.log('Text length:', data.text.length);
      console.log('--- FIRST 2000 CHARACTERS ---');
      console.log(data.text.slice(0, 2000));
      fs.writeFileSync(path.resolve(__dirname, 'output/extracted-text-m1.txt'), data.text, 'utf8');
      console.log('Saved to output/extracted-text-m1.txt');
    } else {
      console.log('pdfParse exports:', Object.keys(pdfParse));
    }
  } catch (err) {
    console.error('Error:', err);
  }
}

inspectPdf();
