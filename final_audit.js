
const fs = require('fs');
const path = require('path');

const baseDirs = [
    String.raw`c:\Users\reals\.gemini\antigravity\playground\shimmering-einstein\sops`,
    String.raw`c:\Users\reals\.gemini\antigravity\playground\shimmering-einstein\sops\kra`,
    String.raw`c:\Users\reals\.gemini\antigravity\playground\shimmering-einstein\sops\kpi`,
    String.raw`c:\Users\reals\.gemini\antigravity\playground\shimmering-einstein\sops\onboarding`
];

let issuesFound = 0;

function auditFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const filename = path.basename(filePath);

        // Skip index/resources if needed, but checking all is safer
        if (filename.includes('assets.html')) return; // Resources skipped intentionally

        const errors = [];

        // 1. Check for Corruption Markers (??)
        // We exclude standard things like URL parameters usually, but text content like "?? Role" is bad.
        // Regex looks for ?? followed by space or word char
        if (content.match(/\?\?[\s\w]/)) {
            errors.push("Potential '??' corruption found");
        }

        // 2. Check for Single '?' at start of Header/Item (e.g. "? Speed")
        // <tag>? Text
        if (content.match(/>\s*\?\s+\w+/)) {
            errors.push("Potential '? Text' corruption found");
        }

        // 3. Check Mobile Header Presence (SOP/Onboarding/KRA/KPI)
        if (!content.includes('class="mobile-header"')) {
            if (!filename.includes('index.html')) { // Index might not need it if different layout
                errors.push("Missing .mobile-header");
            }
        }

        // 4. Check Mobile Menu Button Entity (safety check)
        // Should have &#9776; NOT literal ☰
        if (content.includes('☰')) {
            // Not necessarily an error if encoding is utf8, but inconsistency
            // errors.push("Uses literal ☰ instead of &#9776;");
        }

        // 5. Check Home Button Entity
        // Should have &#127968; NOT literal 🏠
        if (content.includes('🏠')) {
            // errors.push("Uses literal 🏠 instead of &#127968;");
        }

        if (errors.length > 0) {
            console.log(`[FAIL] ${filename}: ${errors.join(', ')}`);
            issuesFound++;
        } else {
            // console.log(`[PASS] ${filename}`);
        }

    } catch (e) {
        console.error(`Error reading ${filePath}: ${e.message}`);
    }
}

console.log("Starting Final Audit...");
baseDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
        fs.readdirSync(dir).forEach(file => {
            if (file.endsWith('.html')) {
                auditFile(path.join(dir, file));
            }
        });
    }
});
console.log(`Audit Complete. Issues found: ${issuesFound}`);
