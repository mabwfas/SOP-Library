
const fs = require('fs');
const path = require('path');

const baseDirs = [
    String.raw`c:\Users\reals\.gemini\antigravity\playground\shimmering-einstein\sops`,
    String.raw`c:\Users\reals\.gemini\antigravity\playground\shimmering-einstein\sops\kra`,
    String.raw`c:\Users\reals\.gemini\antigravity\playground\shimmering-einstein\sops\kpi`,
    String.raw`c:\Users\reals\.gemini\antigravity\playground\shimmering-einstein\sops\onboarding`
];

function fixFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;
        const filename = path.basename(filePath);

        // 1. Remove Excessive Pins (📌) from Titles/Links
        // Pattern: <h2>📌 Text</h2> -> <h2>Text</h2> (unless it's a list item)
        // Pattern: >📌 Text</a> -> >Text</a>
        // We carefully remove 📌 if it appears before common words or specific contexts we messed up

        // Remove "📌 " from Header H1/H2
        content = content.replace(/(<h[1-2][^>]*>)\s*📌\s*/gi, '$1');

        // Remove "📌 " from SOP/KRA/KPI Links
        content = content.replace(/(class="[^"]*")>\s*📌\s*(.*?)(<\/a>)/gi, '$1>$2$3');

        // Remove "📌 " from Mobile Home Btn (which has 📌 🏠)
        content = content.replace(/📌\s*(&#127968;|🏠)/gi, '$1');

        // 2. Fix/Inject </head> and Cursor Link
        let cssPath = 'assets/css/hero-cursor.css';
        if (filePath.includes(String.raw`\sops\kra`) ||
            filePath.includes(String.raw`\sops\kpi`) ||
            filePath.includes(String.raw`\sops\onboarding`)) {
            cssPath = '../assets/css/hero-cursor.css';
        }

        const linkTag = `<link rel="stylesheet" href="${cssPath}">`;

        // If missing </head> before <body>, insert it
        if (!content.includes('</head>') && content.includes('<body>')) {
            content = content.replace('<body>', '</head>\n<body>');
        }

        // If missing cursor link, insert before </head>
        if (!content.includes('hero-cursor.css') && content.includes('</head>')) {
            content = content.replace('</head>', `    ${linkTag}\n</head>`);
        } else if (!content.includes('hero-cursor.css')) {
            // Fallback if no head tag found even after fix attempt (rare)
            // Insert after last <link> or <style>
            content = content.replace(/(<\/style>)/i, `$1\n    ${linkTag}`);
        }

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Fixed: ${filename}`);
        }

    } catch (e) {
        console.error(`Error processing ${filePath}: ${e.message}`);
    }
}

baseDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
        fs.readdirSync(dir).forEach(file => {
            if (file.endsWith('.html')) {
                fixFile(path.join(dir, file));
            }
        });
    }
});
