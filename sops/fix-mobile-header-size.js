// Make headers smaller on mobile across all documents
const fs = require('fs');
const path = require('path');

const sopsDir = 'c:/Users/reals/.gemini/antigravity/playground/shimmering-einstein/sops';

// Mobile-optimized header CSS
const mobileHeaderCSS = `
        /* ===== MOBILE HEADER SIZE OPTIMIZATION ===== */
        @media (max-width: 768px) {
            .header {
                padding: 25px 20px !important;
                margin-bottom: 20px !important;
                border-radius: 0 0 15px 15px !important;
            }
            .header h1 {
                font-size: 1.5em !important;
                margin-bottom: 5px !important;
            }
            .header .subtitle {
                font-size: 0.9em !important;
                margin-bottom: 10px !important;
            }
            .badge-row {
                gap: 8px !important;
                margin-top: 12px !important;
            }
            .badge {
                padding: 5px 12px !important;
                font-size: 0.75em !important;
            }
            .container {
                padding: 10px !important;
            }
            .section {
                padding: 15px !important;
                margin-bottom: 15px !important;
            }
            .section h2 {
                font-size: 1.2em !important;
            }
        }
        /* ===== END MOBILE HEADER SIZE ===== */
`;

let fixed = 0;

function processFile(filePath) {
    const fileName = path.basename(filePath);
    let content = fs.readFileSync(filePath, 'utf8');

    // Check if already has our optimization
    if (content.includes('MOBILE HEADER SIZE OPTIMIZATION')) {
        return;
    }

    // Find the last </style> tag and insert before it
    const styleCloseIndex = content.lastIndexOf('</style>');
    if (styleCloseIndex === -1) {
        console.log(`⚠️ No </style> found: ${fileName}`);
        return;
    }

    content = content.slice(0, styleCloseIndex) + mobileHeaderCSS + '\n    ' + content.slice(styleCloseIndex);

    fs.writeFileSync(filePath, content);
    fixed++;
    console.log(`✅ Added mobile header CSS: ${fileName}`);
}

function processDirectory(dir) {
    const items = fs.readdirSync(dir);

    items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            if (['training', 'hr-docs-editor', 'assets', 'node_modules'].includes(item)) return;
            processDirectory(fullPath);
        } else if (item.endsWith('.html') && item !== 'index.html') {
            processFile(fullPath);
        }
    });
}

console.log('📱 Adding mobile-optimized header CSS...\n');
processDirectory(sopsDir);
console.log(`\n✅ Done! Added to ${fixed} files.`);
