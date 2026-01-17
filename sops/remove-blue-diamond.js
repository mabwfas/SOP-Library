// Remove  character from all HTML files
const fs = require('fs');
const path = require('path');

const sopsDir = 'c:/Users/reals/.gemini/antigravity/playground/shimmering-einstein/sops';

let totalRemoved = 0;
let filesFixed = 0;

function processFile(filePath) {
    const fileName = path.basename(filePath);
    let content = fs.readFileSync(filePath, 'utf8');

    // Count occurrences
    const matches = content.match(//g);
    if (!matches) return;

    const count = matches.length;

    // Remove all  characters
    content = content.replace(//g, '');

    fs.writeFileSync(filePath, content);
    totalRemoved += count;
    filesFixed++;
    console.log(`✅ Removed ${count} : ${fileName}`);
}

function processDirectory(dir) {
    const items = fs.readdirSync(dir);

    items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            if (['hr-docs-editor', 'assets', 'node_modules'].includes(item)) return;
            processDirectory(fullPath);
        } else if (item.endsWith('.html') || item.endsWith('.js')) {
            processFile(fullPath);
        }
    });
}

console.log('🔧 Removing  characters from all files...\n');
processDirectory(sopsDir);
console.log(`\n✅ DONE! Removed ${totalRemoved} instances from ${filesFixed} files.`);
