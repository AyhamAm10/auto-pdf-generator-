const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

async function renderPages() {
  const pdfPath = path.resolve(__dirname, 'assets/المحاضرة1 -مفاهيم أساسية.pdf');
  const pdfData = fs.readFileSync(pdfPath);
  const base64Pdf = pdfData.toString('base64');
  
  const outDir = path.resolve(__dirname, 'output/stat-pages');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 1600 });

  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
  </head>
  <body>
    <script>
      pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
      
      const rawPdf = atob("${base64Pdf}");
      
      function getPdfData() {
        const uint8Array = new Uint8Array(rawPdf.length);
        for (let i = 0; i < rawPdf.length; i++) {
          uint8Array[i] = rawPdf.charCodeAt(i);
        }
        return uint8Array;
      }

      window.initDoc = async function() {
        window.pdfDoc = await pdfjsLib.getDocument({ data: getPdfData() }).promise;
        return window.pdfDoc.numPages;
      };

      window.renderPageToDataUrl = async function(pageNum) {
        const page = await window.pdfDoc.getPage(pageNum);
        const viewport = page.getViewport({ scale: 2.0 });
        
        const canvas = document.createElement('canvas');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext('2d');
        
        await page.render({ canvasContext: ctx, viewport: viewport }).promise;
        return canvas.toDataURL('image/png');
      };
    </script>
  </body>
  </html>
  `;

  await page.setContent(html, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction('typeof window.initDoc === "function"');

  const numPages = await page.evaluate(async () => {
    return await window.initDoc();
  });
  console.log(`Total pages: ${numPages}`);

  for (let i = 1; i <= numPages; i++) {
    const dataUrl = await page.evaluate(async (p) => {
      return await window.renderPageToDataUrl(p);
    }, i);
    const buf = Buffer.from(dataUrl.split(',')[1], 'base64');
    const pStr = String(i).padStart(2, '0');
    fs.writeFileSync(path.join(outDir, `page-${pStr}.png`), buf);
    console.log(`Saved page-${pStr}.png`);
  }

  await browser.close();
  console.log('Successfully saved all pages to output/stat-pages!');
}

renderPages().catch(console.error);
