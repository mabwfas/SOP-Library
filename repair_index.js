
const fs = require('fs');
const path = require('path');

const filePath = String.raw`c:\Users\reals\.gemini\antigravity\playground\shimmering-einstein\sops\index.html`;

function repairIndex() {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;

        // 1. Fix Collapsed Comments: // text 🔹 code -> // text \n code
        // We capture the // and text up to 🔹, then add newline
        content = content.replace(/(\/\/.*?)🔹/g, '$1\n');

        // 2. Remove hero-cursor.css link (conflicts with fire animation)
        // <link rel="stylesheet" href="assets/css/hero-cursor.css">
        // It might have different indentation or newlines
        content = content.replace(/<link rel="stylesheet" href="assets\/css\/hero-cursor\.css">/g, '');

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Repaired index.html`);
        } else {
            console.log(`No changes needed for index.html`);
        }

    } catch (e) {
        console.error(`Error processing ${filePath}: ${e.message}`);
    }
}

repairIndex();
