// Fix duplicate emojis across all HTML files
const fs = require('fs');
const path = require('path');

const sopsDir = 'c:/Users/reals/.gemini/antigravity/playground/shimmering-einstein/sops';

// Common duplicate patterns to fix
const duplicatePatterns = [
    { pattern: /🏆 🏆/g, replacement: '🏆' },
    { pattern: /📝 📝/g, replacement: '📝' },
    { pattern: /📖 📖/g, replacement: '📖' },
    { pattern: /🎯 🎯/g, replacement: '🎯' },
    { pattern: /📊 📊/g, replacement: '📊' },
    { pattern: /📋 📋/g, replacement: '📋' },
    { pattern: /🚀 🚀/g, replacement: '🚀' },
    { pattern: /📚 📚/g, replacement: '📚' },
    { pattern: /🖨️ 🖨️/g, replacement: '🖨️' },
    { pattern: /➕ ➕/g, replacement: '➕' },
    { pattern: /⬅️ ⬅️/g, replacement: '⬅️' },
    { pattern: /👤 👤/g, replacement: '👤' },
    { pattern: /💰 💰/g, replacement: '💰' },
    { pattern: /🔧 🔧/g, replacement: '🔧' },
    { pattern: /⚡ ⚡/g, replacement: '⚡' },
    { pattern: /🌟 🌟/g, replacement: '🌟' },
    { pattern: /✅ ✅/g, replacement: '✅' },
    { pattern: /❌ ❌/g, replacement: '❌' },
    { pattern: /⚠️ ⚠️/g, replacement: '⚠️' },
    { pattern: /💡 💡/g, replacement: '💡' },
    { pattern: /🔥 🔥/g, replacement: '🔥' },
    { pattern: /📌 📌/g, replacement: '📌' },
    { pattern: /👥 👥/g, replacement: '👥' },
    { pattern: /🎨 🎨/g, replacement: '🎨' },
    { pattern: /💻 💻/g, replacement: '💻' },
    { pattern: /📈 📈/g, replacement: '📈' },
    { pattern: /🌱 🌱/g, replacement: '🌱' },
];

let fixed = 0;
let totalReplacements = 0;

function processFile(filePath) {
    const fileName = path.basename(filePath);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    let fileReplacements = 0;

    duplicatePatterns.forEach(({ pattern, replacement }) => {
        const matches = content.match(pattern);
        if (matches) {
            content = content.replace(pattern, replacement);
            fileReplacements += matches.length;
            modified = true;
        }
    });

    if (modified) {
        fs.writeFileSync(filePath, content);
        fixed++;
        totalReplacements += fileReplacements;
        console.log(`✅ Fixed ${fileReplacements} duplicate(s): ${fileName}`);
    }
}

function processDirectory(dir) {
    const items = fs.readdirSync(dir);

    items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            if (['training', 'hr-docs-editor', 'assets', 'node_modules'].includes(item)) return;
            processDirectory(fullPath);
        } else if (item.endsWith('.html')) {
            processFile(fullPath);
        }
    });
}

console.log('🔧 Fixing duplicate emojis...\n');
processDirectory(sopsDir);
console.log(`\n✅ Done! Fixed ${totalReplacements} duplicates across ${fixed} files.`);
