// DEFINITIVE FIX - Remove bad nested CSS and add correct top-level mobile CSS
// This is the FINAL fix for mobile header issues
const fs = require('fs');
const path = require('path');

const sopsDir = 'c:/Users/reals/.gemini/antigravity/playground/shimmering-einstein/sops';

// The COMPLETE correct mobile CSS that goes at the ROOT LEVEL (not nested)
const correctMobileCSS = `
    /* ========== DEFINITIVE MOBILE FIX - ROOT LEVEL ========== */
    .mobile-header {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 56px;
        background: linear-gradient(135deg, #1E3A5F 0%, #0F2439 100%);
        z-index: 9999;
        padding: 0 12px;
        align-items: center;
        justify-content: flex-start;
        gap: 12px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }

    .mobile-menu-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.25);
        color: white;
        border-radius: 10px;
        font-size: 1.5rem;
        cursor: pointer;
        flex-shrink: 0;
    }

    .mobile-menu-btn:hover {
        background: rgba(255, 255, 255, 0.25);
    }

    .mobile-home-btn {
        display: flex;
        align-items: center;
        gap: 6px;
        color: #10B981;
        text-decoration: none;
        font-weight: 600;
        font-size: 1rem;
        padding: 10px 16px;
        background: rgba(16, 185, 129, 0.15);
        border-radius: 10px;
        border: 1px solid rgba(16, 185, 129, 0.3);
        white-space: nowrap;
    }

    .sidebar-overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 9998;
    }

    .sidebar-overlay.active {
        display: block;
    }

    @media (max-width: 768px) {
        .mobile-header {
            display: flex !important;
        }
        .sidebar {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            height: 100vh !important;
            width: 280px !important;
            z-index: 9999 !important;
            transform: translateX(-100%) !important;
            transition: transform 0.3s ease !important;
        }
        .sidebar.active, .sidebar.open {
            transform: translateX(0) !important;
        }
        .main-content {
            margin-left: 0 !important;
            padding-top: 70px !important;
            width: 100% !important;
        }
    }
    /* ========== END DEFINITIVE MOBILE FIX ========== */
`;

let fixed = 0;

function processFile(filePath) {
    const fileName = path.basename(filePath);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Step 1: Remove any old "DEFINITIVE MOBILE FIX" blocks
    const oldBlockRegex = /\/\*\s*=+\s*DEFINITIVE MOBILE FIX[\s\S]*?END DEFINITIVE MOBILE FIX\s*=+\s*\*\//g;
    if (oldBlockRegex.test(content)) {
        content = content.replace(oldBlockRegex, '');
        modified = true;
    }

    // Step 2: Remove nested .main-content .mobile-header patterns
    // This removes CSS that's incorrectly trying to target mobile-header inside main-content
    const nestedPatterns = [
        /\.main-content\s+\.mobile-header\s*\{[^}]*\}/gs,
        /\.main-content\s+\.mobile-menu-btn\s*\{[^}]*\}/gs,
        /\.main-content\s+\.mobile-home-btn\s*\{[^}]*\}/gs,
    ];

    nestedPatterns.forEach(pattern => {
        if (pattern.test(content)) {
            content = content.replace(pattern, '/* removed nested selector */');
            modified = true;
        }
    });

    // Step 3: Check if the definitive fix is already present
    if (!content.includes('DEFINITIVE MOBILE FIX - ROOT LEVEL')) {
        // Find first </style> and insert BEFORE the closing tag, at root level
        const firstStyleClose = content.indexOf('</style>');
        if (firstStyleClose !== -1) {
            content = content.slice(0, firstStyleClose) + correctMobileCSS + '\n    ' + content.slice(firstStyleClose);
            modified = true;
        }
    }

    if (modified) {
        fs.writeFileSync(filePath, content);
        fixed++;
        console.log(`✅ Fixed: ${fileName}`);
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
        } else if (item.endsWith('.html') && item !== 'index.html') {
            processFile(fullPath);
        }
    });
}

console.log('╔═══════════════════════════════════════════════════════════╗');
console.log('║          DEFINITIVE MOBILE FIX - ONCE AND FOR ALL         ║');
console.log('╚═══════════════════════════════════════════════════════════╝\n');
console.log('This fix:');
console.log('  1. Removes incorrectly nested CSS selectors');
console.log('  2. Adds ROOT-LEVEL mobile CSS with !important overrides');
console.log('  3. Uses z-index 9999 to ensure mobile header is always on top\n');

processDirectory(sopsDir);

console.log(`\n✅ DONE! Fixed ${fixed} files.`);
console.log('\n⚠️  Please HARD REFRESH (Ctrl+Shift+R) to clear browser cache!');
