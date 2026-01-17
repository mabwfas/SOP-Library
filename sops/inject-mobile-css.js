// Inject external mobile-override.css link into ALL HTML files
// This will override all inline CSS with proper mobile styles
const fs = require('fs');
const path = require('path');

const sopsDir = 'c:/Users/reals/.gemini/antigravity/playground/shimmering-einstein/sops';

let fixed = 0;

function getRelativePath(filePath) {
    // Calculate the relative path to assets/css/ from the file location
    const fileDir = path.dirname(filePath);
    const relativePath = path.relative(fileDir, path.join(sopsDir, 'assets', 'css'));
    return relativePath.replace(/\\/g, '/') + '/mobile-override.css';
}

function processFile(filePath) {
    const fileName = path.basename(filePath);
    let content = fs.readFileSync(filePath, 'utf8');

    // Check if already has the link
    if (content.includes('mobile-override.css')) {
        return;
    }

    // Get relative path to CSS file
    const cssPath = getRelativePath(filePath);

    // Add link BEFORE </head> tag - this ensures it loads LAST and overrides everything
    const linkTag = `    <link rel="stylesheet" href="${cssPath}">\n`;

    content = content.replace('</head>', linkTag + '</head>');

    fs.writeFileSync(filePath, content);
    fixed++;
    console.log(`✅ Added CSS link: ${fileName} -> ${cssPath}`);
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

console.log('╔═══════════════════════════════════════════════════════════╗');
console.log('║    INJECTING EXTERNAL MOBILE CSS OVERRIDE                  ║');
console.log('╚═══════════════════════════════════════════════════════════╝\n');

processDirectory(sopsDir);

console.log(`\n✅ DONE! Injected CSS link into ${fixed} files.`);
console.log('\n⚠️  Please HARD REFRESH (Ctrl+Shift+R) to see changes!');
