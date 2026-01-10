const fs = require('fs');
const path = require('path');

const kraDir = 'c:/Users/reals/.gemini/antigravity/playground/shimmering-einstein/sops/kra';
const kpiDir = 'c:/Users/reals/.gemini/antigravity/playground/shimmering-einstein/sops/kpi';

// Mobile header HTML to inject
const mobileHeaderHtml = `
    <!-- Mobile Header -->
    <div class="mobile-header">
        <button class="mobile-menu-btn" onclick="toggleSidebar()">☰</button>
        <a href="../index.html" class="mobile-home-btn">🏠 Home</a>
    </div>
`;

// CSS to inject
const mobileCss = `
        /* Mobile Header */
        .mobile-header {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 50px;
            background: linear-gradient(135deg, #1E3A5F 0%, #0F2439 100%);
            z-index: 1002;
            padding: 0 15px;
            align-items: center;
            gap: 15px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }
        
        .mobile-menu-btn {
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.2);
            color: white;
            padding: 8px 12px;
            border-radius: 8px;
            font-size: 1.2rem;
            cursor: pointer;
        }
        
        .mobile-home-btn {
            color: #10B981;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.95rem;
            padding: 8px 14px;
            background: rgba(16, 185, 129, 0.15);
            border-radius: 8px;
            border: 1px solid rgba(16, 185, 129, 0.3);
        }
        
        @media (max-width: 768px) {
            .mobile-header {
                display: flex;
            }
            
            .main-content {
                padding-top: 60px !important;
            }
            
            .header {
                margin-top: 50px;
            }
        }
`;

const toggleScript = `
    <script>
        function toggleSidebar() {
            document.querySelector('.sidebar').classList.toggle('open');
        }
    </script>
</body>`;

function processFiles(dir) {
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

    files.forEach(file => {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let changed = false;

        // 1. Add mobile header HTML
        if (!content.includes('mobile-header')) {
            content = content.replace('<body>', '<body>' + mobileHeaderHtml);
            changed = true;
            console.log(`Added mobile header to: ${file}`);
        }

        // 2. Add mobile CSS
        if (!content.includes('.mobile-header {')) {
            content = content.replace('</style>', mobileCss + '\n    </style>');
            changed = true;
            console.log(`Added mobile CSS to: ${file}`);
        }

        // 3. Add toggleSidebar function
        if (!content.includes('function toggleSidebar()')) {
            content = content.replace('</body>', toggleScript);
            changed = true;
            console.log(`Added toggleSidebar to: ${file}`);
        }

        if (changed) {
            fs.writeFileSync(filePath, content);
        }
    });
}

console.log('Processing KRA files...');
processFiles(kraDir);

console.log('Processing KPI files...');
processFiles(kpiDir);

console.log('Done!');
