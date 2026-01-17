
const fs = require('fs');
const path = require('path');

const baseDirs = [
    String.raw`c:\Users\reals\.gemini\antigravity\playground\shimmering-einstein\sops`, // Root SOPs
    String.raw`c:\Users\reals\.gemini\antigravity\playground\shimmering-einstein\sops\kra`, // Subfolder
    String.raw`c:\Users\reals\.gemini\antigravity\playground\shimmering-einstein\sops\kpi`, // Subfolder
    String.raw`c:\Users\reals\.gemini\antigravity\playground\shimmering-einstein\sops\onboarding` // Subfolder
];

function injectCursor(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;
        const filename = path.basename(filePath);

        // Determine relative path to assets
        // If file is in sops/ -> assets/css/hero-cursor.css
        // If file is in sops/kra/ -> ../assets/css/hero-cursor.css

        let cssPath = 'assets/css/hero-cursor.css';
        if (filePath.includes(String.raw`\sops\kra`) ||
            filePath.includes(String.raw`\sops\kpi`) ||
            filePath.includes(String.raw`\sops\onboarding`)) {
            cssPath = '../assets/css/hero-cursor.css';
        }

        const linkTag = `<link rel="stylesheet" href="${cssPath}">`;

        // Check if already exists
        if (!content.includes('hero-cursor.css')) {
            // Inject before </head>
            if (content.includes('</head>')) {
                content = content.replace('</head>', `    ${linkTag}\n</head>`);
            } else {
                console.log(`Warning: No </head> in ${filename}`);
            }
        }

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Restored cursor in: ${filename}`);
        }

    } catch (e) {
        console.error(`Error processing ${filePath}: ${e.message}`);
    }
}

baseDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
        fs.readdirSync(dir).forEach(file => {
            if (file.endsWith('.html')) {
                injectCursor(path.join(dir, file));
            }
        });
    }
});
