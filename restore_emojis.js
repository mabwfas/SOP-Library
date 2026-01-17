
const fs = require('fs');
const path = require('path');

const baseDirs = [
    String.raw`c:\Users\reals\.gemini\antigravity\playground\shimmering-einstein\sops\kra`,
    String.raw`c:\Users\reals\.gemini\antigravity\playground\shimmering-einstein\sops\kpi`
];

const roleEmojis = {
    'client-chat': '💬',
    'content': '✍️',
    'cs': '🎧',
    'daily': '📅',
    'designer': '🎨',
    'developer': '💻',
    'finance': '💵',
    'fullstack': '⚡',
    'hr': '👥',
    'pm': '👔',
    'sales': '💰',
    'social-media': '📱',
    'marketing': '📱',
    'employee-handbook': '📘'
};

const commonEmojis = {
    'sop': '📋',
    'kpi': '📊',
    'kra': '📋',
    'assets': '📚',
    'start': '🚀',
    'training': '🎓'
};

function getRoleEmoji(filename) {
    for (const [role, emoji] of Object.entries(roleEmojis)) {
        if (filename.includes(role)) return emoji;
    }
    return '📄'; // Default
}

function restoreEmojis(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;
        const filename = path.basename(filePath);

        // 1. Restore Sidebar Header Emoji
        // Pattern: <div class="emoji">??</div> or <span class="emoji">??</span>
        const roleEmoji = getRoleEmoji(filename);
        // We look for the class="emoji" followed by ?? or ? or empty
        content = content.replace(
            /(class=["']emoji["'][^>]*>)\s*(\?\?|\?)\s*(<\/(div|span)>)/gi,
            `$1${roleEmoji}$3`
        );

        // 2. Restore Navigation Links
        // Pattern: >?? SOP</a>
        // We iterate common link types
        for (const [type, emoji] of Object.entries(commonEmojis)) {
            const regex = new RegExp(`>\\s*(\\?\\?|\\?)\\s*${type.toUpperCase()}\\s*<\\/a>`, 'gi');
            content = content.replace(regex, `>${emoji} ${type.toUpperCase()}</a>`);

            // Handle variations like "Back to ?? SOP" if any exist (usually just "SOP" in these buttons)
            const regexBack = new RegExp(`>\\s*(\\?\\?|\\?)\\s*${type.charAt(0).toUpperCase() + type.slice(1)}\\s*<\\/a>`, 'g'); // Title Case check just in case
            content = content.replace(regexBack, `>${emoji} ${type.charAt(0).toUpperCase() + type.slice(1)}</a>`);
        }

        // 3. Catch-all for "Back to Library" or similar if they had emojis?
        // Usually those are hardcoded text, but let's check KRA specific "Back to Library"
        // In hr-kra.html it was just "← Back to Library" (text), which survives ANSI usually.

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Restored emojis in: ${filename}`);
        } else {
            // console.log(`No repair needed for: ${filename}`);
        }

    } catch (e) {
        console.error(`Error processing ${filePath}: ${e.message}`);
    }
}

baseDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
        fs.readdirSync(dir).forEach(file => {
            if (file.endsWith('.html')) {
                restoreEmojis(path.join(dir, file));
            }
        });
    }
});
