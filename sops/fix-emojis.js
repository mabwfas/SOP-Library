const fs = require('fs');
const path = require('path');

// Get all HTML and JS files
function getAllFiles(dir, extensions) {
    let results = [];
    try {
        const list = fs.readdirSync(dir);
        list.forEach(file => {
            const filePath = path.join(dir, file);
            try {
                const stat = fs.statSync(filePath);
                if (stat && stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
                    results = results.concat(getAllFiles(filePath, extensions));
                } else {
                    const ext = path.extname(file).toLowerCase();
                    if (extensions.includes(ext)) {
                        results.push(filePath);
                    }
                }
            } catch (e) { }
        });
    } catch (e) { }
    return results;
}

// Mojibake bytes (read as latin1) to proper emoji
// Each entry is [fromBuffer, toEmoji]
const replacements = [
    // These are hex-encoded mojibake patterns
    [Buffer.from('c3b0c5b8c5a1e282ac', 'hex'), '\u{1F680}'], // rocket
    [Buffer.from('c3b0c5b8c5a1c2a8', 'hex'), '\u{1F6A8}'], // siren
    [Buffer.from('c3b0c5b8e28099c2a5', 'hex'), '\u{1F465}'], // people
    [Buffer.from('c3b0c5b8e28099c2b0', 'hex'), '\u{1F4B0}'], // money
    [Buffer.from('c3b0c5b8e28099c2ac', 'hex'), '\u{1F4AC}'], // speech
    [Buffer.from('c3b0c5b8e28099c2bb', 'hex'), '\u{1F4BB}'], // laptop
    [Buffer.from('c3b0c5b8c5a1c2aa', 'hex'), '\u{1F6AA}'], // door
    [Buffer.from('c3b0c5b8c2a720', 'hex'), '\u{1F9E0} '], // brain
    [Buffer.from('c3b0c5b8e28099c2bc', 'hex'), '\u{1F4BC}'], // briefcase
    [Buffer.from('c3b0c5b8c5bde280b0', 'hex'), '\u{1F389}'], // party
    [Buffer.from('c3b0c5b8c5bde28093', 'hex'), '\u{1F393}'], // graduation
    [Buffer.from('c3b0c5b8c2a0', 'hex'), '\u{1F3E0}'], // house
];

const files = getAllFiles('.', ['.html', '.js']);
console.log('Found', files.length, 'files to check');

let fixedCount = 0;
files.forEach(file => {
    try {
        // Read as buffer
        let buffer = fs.readFileSync(file);
        let content = buffer.toString('utf8');
        const original = content;

        // Direct character replacements (the actual corrupted text we see)
        const directReplacements = {
            '\u00f0\u0178\u0161\u20ac': '\u{1F680}', // rocket
            '\u00f0\u0178\u0161\u00a8': '\u{1F6A8}', // siren  
            '\u00f0\u0178\u2019\u00a5': '\u{1F465}', // people
            '\u00f0\u0178\u2019\u00b0': '\u{1F4B0}', // money
            '\u00f0\u0178\u2019\u00ac': '\u{1F4AC}', // speech
            '\u00f0\u0178\u2019\u00bb': '\u{1F4BB}', // laptop
            '\u00f0\u0178\u0161\u00aa': '\u{1F6AA}', // door
            '\u00f0\u0178\u00a7\u00a0': '\u{1F9E0}', // brain
            '\u00f0\u0178\u203a\u00a1\u00ef\u00b8\u0178': '\u{1F6A1}', // shield variant
            '\u00f0\u0178\u2019\u00bc': '\u{1F4BC}', // briefcase
            '\u00f0\u0178\u201c\u02dc': '\u{1F4D8}', // book
            '\u00f0\u0178\u201c\u00a2': '\u{1F4E2}', // megaphone
            '\u00f0\u0178\u201c\u2019': '\u{1F512}', // lock
            '\u00f0\u0178\u0178\u201a': '\u{1F382}', // cake
            '\u00f0\u0178\u00a4\u009d': '\u{1F91D}', // handshake
            '\u00f0\u0178\u0152\u00b1': '\u{1F331}', // seedling
            '\u00f0\u0178\u201c\u00a7': '\u{1F4E7}', // email
            '\u00f0\u0178\u0178\u2030': '\u{1F389}', // party
            '\u00f0\u0178\u00a0\u00a0': '\u{1F3E0}', // house
            '\u00e2\u0153\u201c': '\u2714', // checkmark
            '\u00e2\u0161\u00a0': '\u26A0', // warning
            '\u00e2\u0161\u00a1': '\u26A1', // lightning
            '\u00e2\u00ad\u0090': '\u2B50', // star
        };

        for (const [from, to] of Object.entries(directReplacements)) {
            content = content.split(from).join(to);
        }

        if (content !== original) {
            fs.writeFileSync(file, content, 'utf8');
            console.log('Fixed:', file);
            fixedCount++;
        }
    } catch (e) {
        console.error('Error:', file, e.message);
    }
});

console.log('Total files fixed:', fixedCount);
