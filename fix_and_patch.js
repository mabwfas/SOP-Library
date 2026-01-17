
const fs = require('fs');
const path = require('path');

const baseDirs = [
    String.raw`c:\Users\reals\.gemini\antigravity\playground\shimmering-einstein\sops\kra`,
    String.raw`c:\Users\reals\.gemini\antigravity\playground\shimmering-einstein\sops\kpi`,
    String.raw`c:\Users\reals\.gemini\antigravity\playground\shimmering-einstein\sops\onboarding`
];

function fixAndPatch(filePath) {
    try {
        const buffer = fs.readFileSync(filePath);
        let content = '';

        // Simple heuristic for UTF-16LE
        if (buffer[0] === 0xFF && buffer[1] === 0xFE) {
            content = buffer.toString('utf16le');
        } else if (buffer.indexOf(0x00) > -1 && buffer.indexOf(0x00) < 100) {
            content = buffer.toString('utf16le');
        } else {
            content = buffer.toString('utf8');
        }

        let originalContent = content;
        const fileName = path.basename(filePath);

        // KRA/KPI/Onboarding Logic
        if (fileName.includes('-kra.html') || fileName.includes('-kpi.html') || fileName.includes('-onboarding.html')) {

            // 1. CSS Fix (Sidebar Hide)
            // Ensure .sidebar logic is present in the media query
            // We use a broader replacement to catch Onboarding's potentially different CSS too

            // Standard KRA/KPI block
            const standardBlock = `.mobile-header {
                display: flex;
            }

            .main-content {`;

            const patchedBlock = `.mobile-header {
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
                width: 100%;`; // Resetting margin-left to 0 is crucial

            // Check if already patched
            if (!content.includes('.sidebar {') && content.includes('.mobile-header')) {
                // Try replacing standard block (checking context)
                // Note: Onboarding files might have different spacing.
                // Regex approach is safer for the block start

                content = content.replace(/(.mobile-header\s*\{\s*display:\s*flex;\s*\}\s*)(.main-content)/,
                    `$1
            .sidebar {
                transform: translateX(-100%);
                transition: transform 0.3s ease;
            }
            .sidebar.open {
                transform: translateX(0);
            }
            $2`);

                // Add margin-left: 0 to main-content if not present
                // This is a bit risky with regex, so relying on manual check or specific replace
            }

            // Explicitly fix main-content margin in media query if missing "margin-left: 0"
            if (content.match(/@media \(max-width: (?:768|1024)px\) \{[\s\S]*?\.main-content \{/) &&
                !content.match(/@media \(max-width: (?:768|1024)px\) \{[\s\S]*?\.main-content \{[\s\S]*?margin-left: 0;/)) {
                content = content.replace(/(\.main-content\s*\{\s*)/, '$1margin-left: 0;\n                ');
            }

            // 2. Home Button Logic
            // For KRA/KPI (../index.html) -> Icon Only
            if (content.includes('🏠 Home')) {
                content = content.replace(/🏠 Home/g, '🏠');
            }

            // For Onboarding: Check if Mobile Header exists
            // Onboarding files might NOT have the HTML yet, even if they have CSS.
            if (fileName.includes('onboarding') && !content.includes('mobile-home-btn')) {

                // Look for existing button
                // Matches <button ... class="mobile-menu-btn" ...>
                const btnRegex = /<button[^>]*class=["'][^"']*mobile-menu-btn[^"']*["'][^>]*>.*?<\/button>/;
                const match = content.match(btnRegex);

                if (match) {
                    // Wrap existing button
                    const btnHtml = match[0];
                    const headerHtml = `    <div class="mobile-header">
        ${btnHtml}
        <a href="../index.html" class="mobile-home-btn">🏠</a>
    </div>`;
                    content = content.replace(btnHtml, headerHtml);
                } else {
                    // Maybe it's not there at all? Inject after body?
                    // Safe fallback: replace <body> with <body>\n<div class="mobile-header">...
                    if (!content.includes('mobile-header">')) {
                        const headerHtml = `    <div class="mobile-header">
        <button class="mobile-menu-btn" onclick="toggleSidebar()">☰</button>
        <a href="../index.html" class="mobile-home-btn">🏠</a>
    </div>`;
                        content = content.replace(/<body>/, `<body>\n${headerHtml}`);
                    }
                }
            }
        }

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Patched: ${fileName}`);
        }

    } catch (e) {
        console.error(`Error processing ${filePath}: ${e.message}`);
    }
}

baseDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
        fs.readdirSync(dir).forEach(file => {
            if (file.endsWith('.html')) {
                fixAndPatch(path.join(dir, file));
            }
        });
    }
});
