
const fs = require('fs');
const path = require('path');

const baseDirs = [
    String.raw`c:\Users\reals\.gemini\antigravity\playground\shimmering-einstein\sops`, // SOPs
    String.raw`c:\Users\reals\.gemini\antigravity\playground\shimmering-einstein\sops\kra`, // KRAs
    String.raw`c:\Users\reals\.gemini\antigravity\playground\shimmering-einstein\sops\kpi`, // KPIs
    String.raw`c:\Users\reals\.gemini\antigravity\playground\shimmering-einstein\sops\onboarding` // Onboarding
];

function repairIcons(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;

        // Repair Menu Button: Replace content inside <button ... mobile-menu-btn ...>...</button>
        // We use a specific regex to capture the button with that class
        content = content.replace(
            /(<button[^>]*class=["'][^"']*mobile-menu-btn[^"']*["'][^>]*>)([\s\S]*?)(<\/button>)/gi,
            '$1&#9776;$3' // &#9776; is the hamburger icon entity
        );

        // Repair Home Button: Replace content inside <a ... mobile-home-btn ...>...</a>
        content = content.replace(
            /(<a[^>]*class=["'][^"']*mobile-home-btn[^"']*["'][^>]*>)([\s\S]*?)(<\/a>)/gi,
            '$1&#127968;$3' // &#127968; is the house icon entity
        );

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Repaired icons in: ${path.basename(filePath)}`);
        }

    } catch (e) {
        console.error(`Error processing ${filePath}: ${e.message}`);
    }
}

baseDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
        fs.readdirSync(dir).forEach(file => {
            if (file.endsWith('.html')) {
                repairIcons(path.join(dir, file));
            }
        });
    }
});
