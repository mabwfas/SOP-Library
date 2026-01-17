
const fs = require('fs');
const path = require('path');

const baseDirs = [
    String.raw`c:\Users\reals\.gemini\antigravity\playground\shimmering-einstein\sops\kra`,
    String.raw`c:\Users\reals\.gemini\antigravity\playground\shimmering-einstein\sops\kpi`,
    String.raw`c:\Users\reals\.gemini\antigravity\playground\shimmering-einstein\sops` // For employee-handbook
];

// Keyword Mapping for Contextual Repair
const keywordMapping = {
    // KPI Specific
    'First-Pass': '⚡',
    'Revision': '🔄',
    'Turnaround': '⏱️',
    'SEO': '🔎',
    'Rating': '⭐',
    'Repeat': '🔁',
    'Refund': '💸',
    'Conversion': '💰',
    'Traffic': '🚦',
    'Engagement': '❤️',
    'Response': '↩️',
    'Resolution': '✅',
    'Uptime': '🟢',
    'Bug': '🐛',
    'Design': '🎨',
    'Sprint': '🏃',
    'Velocity': '📈',
    'Deployment': '🚀',
    'Overview': '📝',
    'Key Metrics': '📊',
    'Key Performance': '🎯',
    'Tracking': '🛤️',
    'Success': '🏆',
    'Role': '📝',
    'Issue': '⚠️',
    // Generic Fallbacks
    '1.': '📌', '2.': '📌', '3.': '📌', '4.': '📌', '5.': '📌', '6.': '📌'
};

function inferEmoji(text) {
    for (const [key, emoji] of Object.entries(keywordMapping)) {
        if (text.includes(key)) return emoji;
    }
    return '📌';
}

function deepClean(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;
        const filename = path.basename(filePath);

        // --- 1. Aggressive ?? / ? Cleaning ---

        // Headers: <h1>?? Text</h1>, <h2>? Text</h2>, <h3>?? Text</h3>
        content = content.replace(
            /(<h[1-6][^>]*>)\s*(\?\?|\?|ï¿½|)\s*(.*?)(<\/h[1-6]>)/gi,
            (match, openTag, junk, text, closeTag) => {
                // If we already fixed it (contains emoji), ignore. But regex consumes ??
                // Infer emoji from text
                const emoji = inferEmoji(text);
                return `${openTag}${emoji} ${text}${closeTag}`;
            }
        );

        // Sidebar Links: <a>?? Text</a>
        content = content.replace(
            /(<a[^>]*>)\s*(\?\?|\?|ï¿½|)\s*(.*?)(<\/a>)/gi,
            (match, openTag, junk, text, closeTag) => {
                let emoji = inferEmoji(text);
                // Special case: Back buttons
                if (text.includes('Back')) emoji = '⬅️';
                return `${openTag}${emoji} ${text}${closeTag}`;
            }
        );

        // Badges: <span class="badge">?? Text</span>
        content = content.replace(
            /(<span class="badge">)\s*(\?\?|\?|ï¿½|)\s*(.*?)(<\/span>)/gi,
            (match, openTag, junk, text, closeTag) => {
                const emoji = inferEmoji(text);
                return `${openTag}${emoji} ${text}${closeTag}`;
            }
        );

        // Subtitle Separator: "Text  Text" or "Text ? Text"
        // Targeted replace to avoid messing up normal question marks
        content = content.replace(
            /([a-zA-Z])\s+(\?|)\s+([a-zA-Z])/g,
            '$1 🔹 $3'
        );

        // --- 2. Employee Handbook Fix ---
        if (filename === 'employee-handbook.html') {
            if (!content.includes('class="mobile-header"')) {
                const headerHtml = `    <div class="mobile-header">
        <button class="mobile-menu-btn" onclick="toggleSidebar()">&#9776;</button>
        <a href="index.html" class="mobile-home-btn">&#127968;</a>
    </div>`;
                content = content.replace(/<body>/, `<body>\n${headerHtml}`);
                console.log("Injected mobile-header into employee-handbook.html");
            }
            // Also fix sidebar css if needed (it wasn't in KRA/KPI folder, might have missed CSS fix)
            if (!content.includes('.sidebar {') && content.includes('@media (max-width: 768px)')) {
                // Add robust CSS fix if missing
                const cssFix = `        @media (max-width: 768px) {
            .mobile-header { display: flex; }
            .sidebar { transform: translateX(-100%); transition: transform 0.3s ease; }
            .sidebar.open { transform: translateX(0); }
            .main-content { margin-left: 0; width: 100%; padding-top: 70px !important; }
            .header { margin-top: 56px; }
        }`;
                // Try replacing existing media query block or appending
                // Simple regex replace of the main media query block
                content = content.replace(/@media \(max-width: 768px\) \{[\s\S]*?\.header \{[\s\S]*?\}[\s\S]*?\}/, cssFix);
            }
        }

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Cleaned: ${filename}`);
        }

    } catch (e) {
        console.error(`Error processing ${filePath}: ${e.message}`);
    }
}

baseDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
        fs.readdirSync(dir).forEach(file => {
            if (file.endsWith('.html')) {
                deepClean(path.join(dir, file));
            }
        });
    }
});
