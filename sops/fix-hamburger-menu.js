// Fix hamburger menu - add toggleSidebar function to all files missing it
const fs = require('fs');
const path = require('path');

const sopsDir = 'c:/Users/reals/.gemini/antigravity/playground/shimmering-einstein/sops';

const toggleScript = `
    <script>
        function toggleSidebar() {
            const sidebar = document.querySelector('.sidebar');
            const isNowOpen = sidebar.classList.toggle('open');
            // Also try 'active' class for compatibility
            sidebar.classList.toggle('active');
            
            if (isNowOpen) {
                setTimeout(() => {
                    document.addEventListener('click', closeSidebarOutside);
                }, 10);
            } else {
                document.removeEventListener('click', closeSidebarOutside);
            }
        }

        function closeSidebarOutside(event) {
            const sidebar = document.querySelector('.sidebar');
            const toggleBtn = document.querySelector('.mobile-menu-btn');
            if (sidebar && !sidebar.contains(event.target) && (!toggleBtn || !toggleBtn.contains(event.target))) {
                sidebar.classList.remove('open');
                sidebar.classList.remove('active');
                document.removeEventListener('click', closeSidebarOutside);
            }
        }
    </script>
`;

let fixed = 0;
let skipped = 0;

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
            let content = fs.readFileSync(fullPath, 'utf8');

            // Check if has mobile-menu-btn but missing toggleSidebar function
            if (content.includes('mobile-menu-btn') && !content.includes('function toggleSidebar')) {
                // Add script before </body>
                if (content.includes('</body>')) {
                    content = content.replace('</body>', toggleScript + '\n</body>');
                    fs.writeFileSync(fullPath, content);
                    console.log(`✅ Fixed: ${path.relative(sopsDir, fullPath)}`);
                    fixed++;
                } else {
                    console.log(`⚠️ No </body> tag: ${path.relative(sopsDir, fullPath)}`);
                }
            } else if (content.includes('function toggleSidebar')) {
                skipped++;
            }
        }
    });
}

processDirectory(sopsDir);
console.log(`\n🎉 Done! Fixed: ${fixed}, Already had function: ${skipped}`);
