// FINAL COMPREHENSIVE FIX for hamburger menu issues
// Issues identified:
// 1. CSS nesting error in some files (.main-content .mobile-header doesn't work)
// 2. Missing/incomplete toggleSidebar function
// 3. Missing click-outside-to-close functionality

const fs = require('fs');
const path = require('path');

const sopsDir = 'c:/Users/reals/.gemini/antigravity/playground/shimmering-einstein/sops';

// The correct mobile header CSS (NOT nested under any other selector)
const correctMobileCSS = `
        /* ===== MOBILE HEADER - HAMBURGER MENU ===== */
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

        .mobile-menu-btn:hover {
            background: rgba(255, 255, 255, 0.2);
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

        .sidebar-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 1999;
        }

        .sidebar-overlay.active {
            display: block;
        }

        @media (max-width: 768px) {
            .mobile-header {
                display: flex !important;
            }
            .sidebar {
                transform: translateX(-100%);
                transition: transform 0.3s ease;
            }
            .sidebar.active, .sidebar.open {
                transform: translateX(0);
            }
            .main-content {
                margin-left: 0 !important;
                padding-top: 70px !important;
            }
        }
        /* ===== END MOBILE HEADER ===== */
`;

// Complete JavaScript for sidebar toggle
const correctJS = `
    <script>
        // ===== SIDEBAR TOGGLE FUNCTIONS =====
        function toggleSidebar() {
            var sidebar = document.querySelector('.sidebar');
            var overlay = document.querySelector('.sidebar-overlay');
            if (sidebar) {
                sidebar.classList.toggle('active');
                sidebar.classList.toggle('open');
            }
            if (overlay) {
                overlay.classList.toggle('active');
            }
        }

        function closeSidebar() {
            var sidebar = document.querySelector('.sidebar');
            var overlay = document.querySelector('.sidebar-overlay');
            if (sidebar) {
                sidebar.classList.remove('active');
                sidebar.classList.remove('open');
            }
            if (overlay) {
                overlay.classList.remove('active');
            }
        }

        // Click outside to close sidebar
        document.addEventListener('click', function(event) {
            var sidebar = document.querySelector('.sidebar');
            var toggleBtn = document.querySelector('.mobile-menu-btn');
            var overlay = document.querySelector('.sidebar-overlay');
            
            if (!sidebar || !toggleBtn) return;
            
            var isOpen = sidebar.classList.contains('active') || sidebar.classList.contains('open');
            var clickedOnSidebar = sidebar.contains(event.target);
            var clickedOnToggle = toggleBtn.contains(event.target);
            
            if (isOpen && !clickedOnSidebar && !clickedOnToggle) {
                closeSidebar();
            }
        });
        // ===== END SIDEBAR TOGGLE =====
    </script>
`;

let fixed = 0;

function processFile(filePath) {
    const fileName = path.basename(filePath);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // ============================================
    // STEP 1: Remove any bad nested CSS patterns
    // ============================================
    // Remove .main-content .mobile-header nested patterns (they don't work)
    const nestedPattern = /\.main-content\s+\.mobile-header\s*\{[^}]*\}/gs;
    if (nestedPattern.test(content)) {
        content = content.replace(nestedPattern, '/* removed nested mobile-header */');
        modified = true;
        console.log(`  ⚠️  Removed nested CSS: ${fileName}`);
    }

    // ============================================
    // STEP 2: Check if proper mobile CSS exists
    // ============================================
    // Look for standalone .mobile-header with display: none (the correct pattern)
    const hasCorrectCSS = /\.mobile-header\s*\{[^}]*display:\s*none[^}]*\}/s.test(content);

    if (!hasCorrectCSS) {
        // Add correct CSS before the last </style> tag
        const styleCloseIndex = content.lastIndexOf('</style>');
        if (styleCloseIndex !== -1) {
            content = content.slice(0, styleCloseIndex) + correctMobileCSS + '\n    ' + content.slice(styleCloseIndex);
            modified = true;
            console.log(`  ✅ Added mobile CSS: ${fileName}`);
        }
    }

    // ============================================
    // STEP 3: Ensure overlay HTML exists
    // ============================================
    if (!content.includes('class="sidebar-overlay"')) {
        // Add overlay after <body> tag
        content = content.replace(/<body[^>]*>/i, '$&\n    <div class="sidebar-overlay" onclick="closeSidebar()"></div>');
        modified = true;
        console.log(`  ✅ Added overlay HTML: ${fileName}`);
    }

    // ============================================
    // STEP 4: Remove ALL existing toggleSidebar/closeSidebar functions
    // ============================================
    // Remove any existing function toggleSidebar blocks
    content = content.replace(/\s*function toggleSidebar\s*\(\s*\)\s*\{[\s\S]*?\n\s*\}/g, '');
    content = content.replace(/\s*function closeSidebar\s*\(\s*\)\s*\{[\s\S]*?\n\s*\}/g, '');
    content = content.replace(/\s*function closeSidebarOutside\s*\(\s*\)\s*\{[\s\S]*?\n\s*\}/g, '');

    // ============================================
    // STEP 5: Add correct JS before </body>
    // ============================================
    // First check if our correct marker exists
    if (!content.includes('// ===== SIDEBAR TOGGLE FUNCTIONS =====')) {
        // Add before </body>
        content = content.replace('</body>', correctJS + '\n</body>');
        modified = true;
        console.log(`  ✅ Added sidebar JS: ${fileName}`);
    }

    // ============================================
    // STEP 6: Ensure mobile-header HTML exists
    // ============================================
    if (!content.includes('class="mobile-header"')) {
        // Add mobile header after <body> and overlay
        const mobileHeaderHTML = `
    <div class="mobile-header">
        <button class="mobile-menu-btn" onclick="toggleSidebar()">&#9776;</button>
        <a href="index.html" class="mobile-home-btn">&#127968; Home</a>
    </div>
`;
        // Insert after overlay
        content = content.replace('class="sidebar-overlay"', 'class="sidebar-overlay">\n    </div>' + mobileHeaderHTML + '\n    <div style="display:none"');
        modified = true;
        console.log(`  ✅ Added mobile header HTML: ${fileName}`);
    }

    if (modified) {
        fs.writeFileSync(filePath, content);
        fixed++;
        console.log(`✅ Fixed: ${fileName}`);
    } else {
        console.log(`⏩ Skipped (already correct): ${fileName}`);
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

console.log('╔════════════════════════════════════════════════════════════════╗');
console.log('║     FINAL HAMBURGER MENU FIX - Complete Rewrite               ║');
console.log('╚════════════════════════════════════════════════════════════════╝\n');

console.log('Fixes applied:');
console.log('  1. Removes bad nested CSS (.main-content .mobile-header)');
console.log('  2. Adds correct standalone mobile CSS');
console.log('  3. Adds overlay HTML for click-outside');
console.log('  4. Replaces ALL toggleSidebar functions with correct version');
console.log('  5. Adds click-outside-to-close event listener\n');

processDirectory(sopsDir);

console.log(`\n✅ Done! Fixed ${fixed} files.`);
console.log('\nPlease refresh your browser to test the hamburger menu.');
