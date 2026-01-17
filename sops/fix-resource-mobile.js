// Add mobile header to all resource pages
const fs = require('fs');
const path = require('path');

const resourcesDir = 'c:/Users/reals/.gemini/antigravity/playground/shimmering-einstein/sops/resources';

const mobileHeaderStyles = `
        /* Mobile Header - Fixed Collision */
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
            .sidebar.open {
                transform: translateX(0);
            }
            .main-content {
                margin-left: 0;
                padding-top: 70px !important;
                width: 100%;
            }
        }
`;

const mobileHeaderHTML = `
    <!-- Mobile Header -->
    <div class="mobile-header">
        <button class="mobile-menu-btn" onclick="toggleSidebar()">&#9776;</button>
        <a href="../index.html" class="mobile-home-btn">&#127968; Home</a>
    </div>
`;

const toggleScript = `
    <script>
        function toggleSidebar() {
            const sidebar = document.querySelector('.sidebar');
            const isNowOpen = sidebar.classList.toggle('open');
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
                document.removeEventListener('click', closeSidebarOutside);
            }
        }
    </script>
`;

let fixed = 0;
let skipped = 0;

const files = fs.readdirSync(resourcesDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(resourcesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Check if already has mobile header
    if (content.includes('mobile-header')) {
        console.log(`✓ ${file} - Already has mobile header`);
        skipped++;
        return;
    }

    // Add styles before </style>
    if (content.includes('</style>')) {
        content = content.replace('</style>', mobileHeaderStyles + '\n    </style>');
    }

    // Add HTML after <body>
    if (content.includes('<body>')) {
        content = content.replace('<body>', '<body>' + mobileHeaderHTML);
    }

    // Add script before </body>
    if (content.includes('</body>') && !content.includes('toggleSidebar')) {
        content = content.replace('</body>', toggleScript + '\n</body>');
    }

    fs.writeFileSync(filePath, content);
    console.log(`✅ ${file} - Mobile header added`);
    fixed++;
});

console.log(`\n🎉 Done! Fixed: ${fixed}, Skipped: ${skipped}`);
