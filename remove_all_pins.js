
const fs = require('fs');
const path = require('path');

const baseDirs = [
    String.raw`c:\Users\reals\.gemini\antigravity\playground\shimmering-einstein\sops`,
    String.raw`c:\Users\reals\.gemini\antigravity\playground\shimmering-einstein\sops\kra`,
    String.raw`c:\Users\reals\.gemini\antigravity\playground\shimmering-einstein\sops\kpi`,
    String.raw`c:\Users\reals\.gemini\antigravity\playground\shimmering-einstein\sops\onboarding`
];

function cleanPins(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;

        // Remove 📌 and optional following space
        content = content.replace(/📌\s*/g, '');

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Cleaned pins in: ${path.basename(filePath)}`);
        }

    } catch (e) {
        console.error(`Error processing ${filePath}: ${e.message}`);
    }
}

baseDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
        fs.readdirSync(dir).forEach(file => {
            if (file.endsWith('.html')) {
                cleanPins(path.join(dir, file));
            }
        });
    }
});
