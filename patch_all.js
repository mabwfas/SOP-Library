
const fs = require('fs');
const path = require('path');

const baseDir = String.raw`c:\Users\reals\.gemini\antigravity\playground\shimmering-einstein\sops`;

function patchFile(filePath, type) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;

        if (type === 'kra_kpi') {
            // Fix CSS
            const cssSearch = `        @media (max-width: 768px) {
            .mobile-header {
                display: flex;
            }

            .main-content {
                padding-top: 70px !important;
            }

            .header {
                margin-top: 56px;
            }
        }`;

            const cssReplace = `        @media (max-width: 768px) {
            .mobile-header {
                display: flex;
            }
            .sidebar {
                transform: translateX(-100%);
                transition: transform 0.3s ease;
            }
            .sidebar.open {
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
        }`;

            if (content.includes(cssSearch)) {
                content = content.replace(cssSearch, cssReplace);
                console.log(`Patched CSS in ${path.basename(filePath)}`);
            }

            // Fix Home Button text
            if (content.includes('🏠 Home')) {
                content = content.replace('🏠 Home', '🏠');
                console.log(`Fixed Home Button in ${path.basename(filePath)}`);
            }
        }
        else if (type === 'sop') {
            // Fix Header
            const toggleSearch = '<button class="mobile-toggle" onclick="toggleSidebar()">☰ Menu</button>';
            const headerReplace = `    <div class="mobile-header">
        <button class="mobile-menu-btn" onclick="toggleSidebar()">☰</button>
        <a href="index.html" class="mobile-home-btn">🏠</a>
    </div>`;

            if (content.includes(toggleSearch)) {
                content = content.replace(toggleSearch, headerReplace);
                console.log(`Patched Header in ${path.basename(filePath)}`);
            }
        }

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
        }
    } catch (err) {
        console.error(`Error processing ${filePath}: ${err.message}`);
    }
}

function processDirectory(dir, type) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (file.endsWith('.html')) {
            patchFile(path.join(dir, file), type);
        }
    }
}

// Main execution
console.log('Starting patch process...');
processDirectory(path.join(baseDir, 'kra'), 'kra_kpi');
processDirectory(path.join(baseDir, 'kpi'), 'kra_kpi');
processDirectory(baseDir, 'sop'); // Handles SOPs in root sops/ dir
console.log('Patch process complete.');
