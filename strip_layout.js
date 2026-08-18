/**
 * strip_layout.js
 * 
 * This script reads all ScreenN.jsx files in src/pages/ and strips any
 * embedded <nav>, <aside>, and <header> elements so that only the main
 * content remains, ready to be rendered inside the unified MainLayout.
 */

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const pagesDir = path.join(__dirname, 'frontend', 'src', 'pages');

const screenFiles = fs.readdirSync(pagesDir).filter(f =>
  f.match(/^Screen\d+\.jsx$/)
);

let fixed = 0;
let skipped = 0;

screenFiles.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let code = fs.readFileSync(filePath, 'utf8');

  // ---- Step 1: Extract the JSX content from the wrapper divs ----
  // We use a regex approach to remove outermost structure and parse the HTML portion

  // Find the main JSX body between return ( <> ... </> ) or return ( ... )
  const returnMatch = code.match(/return\s*\(\s*<>([\s\S]*?)<\/>\s*\)\s*;/);
  if (!returnMatch) {
    console.log(`[SKIP] ${file} - Could not find fragment wrapper`);
    skipped++;
    return;
  }

  let jsxBody = returnMatch[1];

  // ---- Step 2: Use regex to strip common layout patterns ----
  // Remove <aside ...>...</aside> (Sidebar / metadata panels in nav position)
  // Remove <nav ...>...</nav> (Sidebar nav elements)
  // Remove <header ...>...</header> (Top navigation bars)
  
  // We need to handle nested tags carefully - use a stack-based approach
  const tagsToRemove = ['aside', 'nav', 'header'];

  tagsToRemove.forEach(tag => {
    // Remove all instances of the tag (including nested content)
    let result = '';
    let searchStr = jsxBody;
    let startIdx;

    while ((startIdx = searchStr.indexOf(`<${tag}`)) !== -1) {
      // Keep everything before this tag
      result += searchStr.substring(0, startIdx);
      
      // Find the matching closing tag (handle nesting)
      let depth = 0;
      let i = startIdx;
      let found = false;
      
      while (i < searchStr.length) {
        // Check for opening tag
        if (searchStr.substring(i, i + tag.length + 1) === `<${tag}`) {
          const nextChar = searchStr[i + tag.length + 1];
          if (nextChar === ' ' || nextChar === '>') {
            depth++;
          }
        }
        // Check for self-closing (no content to skip)
        // Check for closing tag
        if (searchStr.substring(i, i + tag.length + 3) === `</${tag}>`) {
          depth--;
          if (depth === 0) {
            // Skip to after the closing tag
            searchStr = searchStr.substring(i + tag.length + 3);
            found = true;
            break;
          }
        }
        i++;
      }
      
      if (!found) {
        // No closing tag found, break to avoid infinite loop
        result += searchStr;
        searchStr = '';
        break;
      }
    }
    
    result += searchStr;
    jsxBody = result;
  });

  // ---- Step 3: Also remove JSX comments that mention SideNavBar / TopNavBar ----
  jsxBody = jsxBody.replace(/\{\/\*\s*(SideNavBar|TopNavBar|Side Nav|Top Nav|SideBar|Header).*?\*\/\}/gi, '');

  // ---- Step 4: Remove any wrapper div that gives margin for sidebar (mr-[280px]) ----
  // Replace `<div id="main-content" ...>` or `<div className="flex-1 flex flex-col md:mr-[280px] ...">`
  // with just the inner content
  jsxBody = jsxBody
    .replace(/className="[^"]*\bmd:mr-\[280px\][^"]*"/g, 'className=""')
    .replace(/className="[^"]*\bmr-\[280px\][^"]*"/g, 'className=""')
    .replace(/className="[^"]*\bmd:pr-\[280px\][^"]*"/g, 'className=""')
    .replace(/className="[^"]*\bpr-\[280px\][^"]*"/g, 'className=""');

  // ---- Step 5: Clean up extra blank lines ----
  jsxBody = jsxBody.replace(/\n\s*\n\s*\n/g, '\n\n');

  // ---- Step 6: Rebuild the component ----
  // Extract the component name from the file
  const componentName = file.replace('.jsx', '');
  
  const newCode = `import React from 'react';

const ${componentName} = () => {
  return (
    <>
      ${jsxBody.trim()}
    </>
  );
};

export default ${componentName};
`;

  fs.writeFileSync(filePath, newCode, 'utf8');
  console.log(`[OK] ${file} - Stripped layout elements`);
  fixed++;
});

console.log(`\nDone! Fixed: ${fixed}, Skipped: ${skipped}`);
