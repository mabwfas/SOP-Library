// Ensure sidebar is closed by default on mobile
// The sidebar should start hidden and only open when user clicks hamburger
const fs = require('fs');
const path = require('path');

const sopsDir = 'c:/Users/reals/.gemini/antigravity/playground/shimmering-einstein/sops';

// CSS to ensure sidebar is closed by default on mobile
const sidebarClosedCSS = `
        /* ===== SIDEBAR CLOSED BY DEFAULT ON MOBILE ===== */
        @media (max-width: 768px) {
            .sidebar {
                transform: translateX(-100%) !important;
                transition: transform 0.3s ease !important;
            }
            .sidebar.active, .sidebar.open {
                transform: translateX(0) !important;
            }
        }
        /* ===== END SIDEBAR CLOSED ===== */
`;

let fixed = 0;

function processFile(filePath) {
    const fileName = path.basename(filePath);
    let content = fs.readFileSync(filePath, 'utf8');

    // Check if already has this fix
    if (content.includes('SIDEBAR CLOSED BY DEFAULT ON MOBILE')) {
        return;
    }

    // Find the last </style> tag and insert before it
    const styleCloseIndex = content.lastIndexOf('</style>');
    if (styleCloseIndex === -1) {
        console.log(`⚠️ No </style> found: ${fileName}`);
        return;
    }

    content = content.slice(0, styleCloseIndex) + sidebarClosedCSS + '\n    ' + content.slice(styleCloseIndex);

    fs.writeFileSync(filePath, content);
    fixed++;
    console.log(`✅ Fixed: ${fileName}`);
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

console.log('🔧 Making sidebar closed by default on mobile...\n');
processDirectory(sopsDir);
console.log(`\n✅ Done! Fixed ${fixed} files.`);
