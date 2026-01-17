// Comprehensive fix for mobile header - adds CSS and ensures proper display: flex
const fs = require('fs');
const path = require('path');

const sopsDir = 'c:/Users/reals/.gemini/antigravity/playground/shimmering-einstein/sops';

const mobileHeaderCSS = `
        /* Mobile Header - Hamburger + Home */
        .mobile-header {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 56px;
            background: linear-gradient(135deg, #1E3A5F 0%, #0F2439 100%);
            z-index: 3000;
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
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: white;
            border-radius: 10px;
            font-size: 1.4rem;
            cursor: pointer;
            flex-shrink: 0;
        }

        .mobile-home-btn {
            display: flex;
            align-items: center;
            gap: 6px;
            color: #10B981;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.9rem;
            padding: 10px 16px;
            background: rgba(16, 185, 129, 0.15);
            border-radius: 10px;
            border: 1px solid rgba(16, 185, 129, 0.3);
            white-space: nowrap;
        }

        @media (max-width: 768px) {
            .mobile-header {
                display: flex;
            }
            .sidebar {
                transform: translateX(-100%);
                transition: transform 0.3s ease;
            }
            .sidebar.active, .sidebar.open {
                transform: translateX(0);
            }
            .main-content {
                margin-left: 0;
                padding-top: 70px !important;
                width: 100%;
            }
            .header {
                margin-top: 56px;
            }
        }
`;

let fixed = 0;
let skipped = 0;
let alreadyHas = 0;

function processFile(filePath) {
    const fileName = path.basename(filePath);
    let content = fs.readFileSync(filePath, 'utf8');

    // Check if file has mobile-header HTML
    if (!content.includes('mobile-header')) {
        return; // Skip files without mobile header
    }

    // Check if CSS is already properly defined
    if (content.includes('.mobile-header {') && content.includes('display: flex') && content.includes('display: none')) {
        alreadyHas++;
        return;
    }

    // Need to add or fix CSS
    // Strategy: Find </style> (last one) and add CSS before it
    const styleCloseIndex = content.lastIndexOf('</style>');
    if (styleCloseIndex === -1) {
        console.log(`⚠️ No </style> found: ${fileName}`);
        return;
    }

    // Check if there's already some mobile-header CSS (partial)
    if (content.includes('.mobile-header')) {
        // Already has partial CSS, might need to be fixed
        // Skip for now, just add the complete CSS
    }

    // Insert CSS before </style>
    content = content.slice(0, styleCloseIndex) + mobileHeaderCSS + '\n    ' + content.slice(styleCloseIndex);

    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed CSS: ${fileName}`);
    fixed++;
}

function processDirectory(dir) {
    const items = fs.readdirSync(dir);

    items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            // Skip training and hr-docs-editor
            if (item === 'training' || item === 'hr-docs-editor') return;
            processDirectory(fullPath);
        } else if (item.endsWith('.html') && item !== 'index.html') {
            processFile(fullPath);
        }
    });
}

console.log('🔧 Fixing mobile header CSS across all SOPs...\n');
processDirectory(sopsDir);
console.log(`\n🎉 Done!`);
console.log(`   Fixed: ${fixed}`);
console.log(`   Already correct: ${alreadyHas}`);
console.log(`   Skipped: ${skipped}`);
