const fs = require('fs');
const https = require('https');
const path = require('path');

const jsonFilePath = "C:\\Users\\PC\\.gemini\\antigravity\\brain\\aed072c2-bc00-4ba6-8e59-f54579306c54\\.system_generated\\steps\\8\\output.txt";

// Helper to sanitize filenames
function sanitizeFileName(name) {
  return name.replace(/[^a-z0-9_\u0600-\u06FF-]/gi, '_').replace(/_+/g, '_');
}

async function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else {
        reject(`Server responded with ${response.statusCode}: ${response.statusMessage}`);
      }
    }).on('error', (err) => {
      reject(err.message);
    });
  });
}

async function main() {
  try {
    const data = fs.readFileSync(jsonFilePath, 'utf8');
    const project = JSON.parse(data);
    const screens = project.screens || [];

    console.log(`Found ${screens.length} screens.`);

    let indexHtmlContent = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>مشروع الأرشيف - الواجهات</title>
    <style>
        body { font-family: Tahoma, Arial, sans-serif; background: #f5f6fa; padding: 40px; margin: 0; }
        h1 { text-align: center; color: #2c3e50; margin-bottom: 40px; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
        .card { background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center; transition: transform 0.2s; }
        .card:hover { transform: translateY(-5px); }
        .card a { text-decoration: none; color: #3498db; font-size: 18px; font-weight: bold; }
        .card a:hover { color: #2980b9; }
    </style>
</head>
<body>
    <h1>واجهات مشروع الأرشيف (Stitch)</h1>
    <div class="grid">`;

    for (let i = 0; i < screens.length; i++) {
      const screen = screens[i];
      const title = screen.title || `Screen_${i + 1}`;
      const url = screen.htmlCode ? screen.htmlCode.downloadUrl : null;
      
      if (!url) {
        console.log(`Skipping ${title} - No HTML URL found.`);
        continue;
      }

      const fileName = `${i + 1}_${sanitizeFileName(title)}.html`;
      const filePath = path.join(__dirname, fileName);

      console.log(`Downloading: ${title} -> ${fileName}`);
      await downloadFile(url, filePath);

      indexHtmlContent += `
        <div class="card">
            <a href="${fileName}" target="_blank">${title}</a>
        </div>`;
    }

    indexHtmlContent += `
    </div>
</body>
</html>`;

    fs.writeFileSync(path.join(__dirname, 'index.html'), indexHtmlContent);
    console.log('Successfully created index.html and downloaded all screens.');

  } catch (error) {
    console.error('Error:', error);
  }
}

main();
