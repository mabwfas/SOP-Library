const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'employee-handbook.html');
let buffer = fs.readFileSync(filePath);
let content = buffer.toString('utf8');
let original = content;

// Extended hex patterns based on remaining patterns found
const hexPatterns = [
    // Basic emojis
    ['c3b0c5b8e2809cc29d', '\u{1F4DD}'],  // 📝 note
    ['c3b0c5b8e28099c2a5', '\u{1F465}'],  // 👥 people - NOT FOUND YET
    ['c3b0c5b8e28098c2a5', '\u{1F465}'],  // 👥 people alt
    ['c3b0c5b8c28fe28093', '\u{1F3D6}'],  // 🏖 beach partial
    ['c3b0c5b8c28fc2a0', '\u{1F3E0}'],  // 🏠 house
    ['c3b0c5b8c5bde280b0', '\u{1F389}'],  // 🎉 party
    ['c3b0c5b8c5bde2809a', '\u{1F382}'],  // 🎂 birthday
    ['c3b0c5b8e280bac2a1', '\u{1F6E1}'],  // 🛡 shield partial
    ['c3b0c5b8e2809de28099', '\u{1F511}'],  // 🔑 key
    ['c397', '\u00D7'],  // multiplication sign ×
];

let fixCount = 0;

for (const [hex, replacement] of hexPatterns) {
    const pattern = Buffer.from(hex, 'hex').toString('utf8');
    if (content.includes(pattern)) {
        const count = content.split(pattern).length - 1;
        content = content.split(pattern).join(replacement);
        fixCount += count;
        console.log('Fixed ' + count + 'x: ' + hex + ' -> ' + replacement);
    }
}

// Now reload to fix again since we got partials
buffer = Buffer.from(content, 'utf8');

// Final cleanup of any leftover fragments
const cleanups = [
    ['c3afc2b8', '\uFE0F'],  // variation selector
    ['8f', ''],  // stray byte
];

for (const [hex, replacement] of cleanups) {
    const pattern = Buffer.from(hex, 'hex').toString('utf8');
    // Only replace if followed by angle bracket (end of tag content)
    const regex = new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?=<)', 'g');
    const matches = content.match(regex);
    if (matches) {
        content = content.replace(regex, replacement);
        fixCount += matches.length;
        console.log('Cleaned ' + matches.length + 'x: fragment before <');
    }
}

if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('\nSaved. Total fixes: ' + fixCount);
} else {
    console.log('No new changes');
}

// Final check
const remaining = [];
buffer = fs.readFileSync(filePath);
let idx = 0;
while (true) {
    const start = buffer.indexOf(Buffer.from([0xc3, 0xb0]), idx);
    if (start === -1) break;
    remaining.push(buffer.slice(start, Math.min(start + 10, buffer.length)).toString('hex'));
    idx = start + 1;
}
if (remaining.length > 0) {
    console.log('\nStill remaining: ' + remaining.length + ' patterns');
} else {
    console.log('\nAll c3b0 patterns fixed!');
}
