const fs = require('fs');
const path = require('path');

const sopsDir = 'c:/Users/reals/.gemini/antigravity/playground/shimmering-einstein/sops';

// SOP files to update
const sopFiles = [
    'sales-sop.html',
    'pm-sop.html',
    'developer-sop.html',
    'designer-sop.html',
    'content-sop.html',
    'social-media-sop.html',
    'hr-sop.html',
    'finance-sop.html',
    'cs-sop.html',
    'client-chat-sop.html',
    'fullstack-sop.html'
];

sopFiles.forEach(file => {
    const filePath = path.join(sopsDir, file);

    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${file}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // Check if mobile menu button already exists
    if (content.includes('mobile-menu-btn')) {
        console.log(`Already has mobile menu: ${file}`);
    } else {
        // Add mobile menu button right after <body>
        const bodyTag = '<body>';
        const mobileMenuHtml = `<body>
    <!-- Mobile Menu Button -->
    <button class="mobile-menu-btn" onclick="toggleSidebar()">☰ Menu</button>`;

        if (content.includes(bodyTag)) {
            content = content.replace(bodyTag, mobileMenuHtml);
            changed = true;
            console.log(`Added mobile menu button to: ${file}`);
        }
    }

    // Check if toggleSidebar function exists
    if (!content.includes('function toggleSidebar()')) {
        // Add toggle script before </body>
        const toggleScript = `
    <script>
        function toggleSidebar() {
            document.querySelector('.sidebar').classList.toggle('open');
        }
    </script>
</body>`;
        content = content.replace('</body>', toggleScript);
        changed = true;
        console.log(`Added toggleSidebar script to: ${file}`);
    }

    if (changed) {
        fs.writeFileSync(filePath, content);
    }
});

console.log('Done adding mobile menu to SOP files!');
