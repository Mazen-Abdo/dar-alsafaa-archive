const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const srcDir = __dirname;
const destDir = path.join(__dirname, 'frontend', 'src', 'pages');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function parseStyle(styleStr) {
  if (!styleStr) return '{}';
  const styleObj = {};
  styleStr.split(';').forEach(rule => {
    if (!rule.trim()) return;
    const [key, value] = rule.split(':');
    if (key && value) {
      const camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
      styleObj[camelKey] = value.trim();
    }
  });
  return JSON.stringify(styleObj);
}

function convertHtmlToJsx($el) {
  $el.find('*').each((i, el) => {
    const node = $(el);
    if (node.attr('class')) {
      node.attr('className', node.attr('class'));
      node.removeAttr('class');
    }
    if (node.attr('for')) {
      node.attr('htmlFor', node.attr('for'));
      node.removeAttr('for');
    }
    if (node.attr('style')) {
      const styleStr = node.attr('style');
      node.removeAttr('style');
      node.attr('data-style', parseStyle(styleStr));
    }
    const camelCaseAttributes = ['stroke-width', 'stroke-linecap', 'stroke-linejoin', 'fill-rule', 'clip-rule', 'stroke-dasharray', 'stroke-miterlimit'];
    camelCaseAttributes.forEach(attr => {
      if (node.attr(attr)) {
        const camelAttr = attr.replace(/-([a-z])/g, g => g[1].toUpperCase());
        node.attr(camelAttr, node.attr(attr));
        node.removeAttr(attr);
      }
    });
  });
}

const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.html') && f !== 'index.html');
const routes = [];

files.forEach((file, index) => {
  const filePath = path.join(srcDir, file);
  const htmlContent = fs.readFileSync(filePath, 'utf8');
  
  global.$ = cheerio.load(htmlContent, { xmlMode: false, decodeEntities: false });
  const body = $('body');
  convertHtmlToJsx(body);
  
  let jsxContent = body.html();
  const bodyClasses = body.attr('className') || '';
  const bodyStyle = body.attr('data-style');

  jsxContent = jsxContent.replace(/data-style="([^"]+)"/g, (match, p1) => {
    const jsonStr = p1.replace(/&quot;/g, '"');
    return "style={" + jsonStr + "}";
  });

  const selfClosingTags = ['img', 'input', 'br', 'hr', 'meta', 'link'];
  selfClosingTags.forEach(tag => {
    const regex = new RegExp("<" + tag + "([^>]*?)(?<!/)>", 'g');
    jsxContent = jsxContent.replace(regex, "<" + tag + "$1 />");
  });

  const placeholders = {};
  let counter = 0;

  jsxContent = jsxContent.replace(/<style[^>]*>(.*?)<\/style>/gs, (match, p1) => {
    const key = "__STYLE_" + (counter++) + "__";
    placeholders[key] = "<style dangerouslySetInnerHTML={{ __html: " + JSON.stringify(p1) + " }} />";
    return key;
  });

  jsxContent = jsxContent.replace(/<script[^>]*>(.*?)<\/script>/gs, (match, p1) => {
    if (!p1.trim()) return match;
    const key = "__SCRIPT_" + (counter++) + "__";
    placeholders[key] = "<script dangerouslySetInnerHTML={{ __html: " + JSON.stringify(p1) + " }} />";
    return key;
  });

  jsxContent = jsxContent.replace(/(^|>)([^<]+)(?=<|$)/g, (match, p1, p2) => {
    return p1 + p2.replace(/\{/g, '&#123;').replace(/\}/g, '&#125;');
  });

  for (const [key, value] of Object.entries(placeholders)) {
    jsxContent = jsxContent.replace(key, value);
  }

  jsxContent = jsxContent.replace(/<!--(.*?)-->/gs, '{/* $1 */}');

  let wrapperDiv = `<div className="${bodyClasses}"`;
  if (bodyStyle) wrapperDiv += ` data-style="${bodyStyle}"`;
  wrapperDiv += `>\n${jsxContent}\n</div>`;
  jsxContent = wrapperDiv;

  // Now replace the data-style on the wrapper itself if any
  jsxContent = jsxContent.replace(/data-style="([^"]+)"/g, (match, p1) => {
    const jsonStr = p1.replace(/&quot;/g, '"');
    return "style={" + jsonStr + "}";
  });

  const fileNumMatch = file.match(/^(\d+)_/);
  const fileNum = fileNumMatch ? fileNumMatch[1] : (index + 1);
  const finalComponentName = "Screen" + fileNum;
  
  const componentCode = "import React from 'react';\n\nconst " + finalComponentName + " = () => {\n  return (\n    <>\n      " + jsxContent + "\n    </>\n  );\n};\n\nexport default " + finalComponentName + ";\n";

  const destFilePath = path.join(destDir, finalComponentName + '.jsx');
  fs.writeFileSync(destFilePath, componentCode);
  console.log('Converted ' + file + ' to ' + finalComponentName + '.jsx');
  
  routes.push({
    path: "/" + finalComponentName.toLowerCase(),
    name: finalComponentName,
    arabicName: file.replace(/^\d+_/, '').replace('.html', '').replace(/_/g, ' ')
  });
});

let imports = routes.map(r => "import " + r.name + " from './pages/" + r.name + "';").join('\n');
let routeComponents = routes.map(r => "<Route path=\"" + r.path + "\" element={<" + r.name + " />} />").join('\n        ');
let links = routes.map(r => "<li className=\"hover:bg-surface-container-high transition-colors\"><Link to=\"" + r.path + "\" className=\"block p-4 text-primary font-medium flex items-center gap-2\"><span className=\"material-symbols-outlined text-sm\">web</span>" + r.arabicName + "</Link></li>").join('\n          ');

const appCode = "import React from 'react';\nimport { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';\n" + imports + "\n\nfunction Home() {\n  return (\n    <div className=\"min-h-screen bg-surface flex flex-col items-center justify-center p-8 font-title-md text-on-surface\">\n      <h1 className=\"text-headline-lg font-bold text-primary mb-8 text-center\">واجهات مشروع الأرشيف - دار الصفاء</h1>\n      <div className=\"w-full max-w-4xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 rounded-xl overflow-hidden\">\n        <ul className=\"divide-y divide-outline-variant/20\">\n          " + links + "\n        </ul>\n      </div>\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    <Router>\n      <Routes>\n        <Route path=\"/\" element={<Home />} />\n        " + routeComponents + "\n      </Routes>\n    </Router>\n  );\n}\n\nexport default App;\n";

fs.writeFileSync(path.join(__dirname, 'frontend', 'src', 'App.jsx'), appCode);
console.log('Successfully converted all screens and generated App.jsx');
