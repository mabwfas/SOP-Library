const fs = require('fs');
const file = 'C:/Users/reals/.gemini/antigravity/playground/shimmering-einstein/sops/employee-handbook.html';
let content = fs.readFileSync(file, 'utf8');

// Common mojibake patterns (UTF-8 bytes misinterpreted as Windows-1252)
const replacements = {
    'ðŸš€': '🚀',
    'ðŸš¨': '🚨',
    'ðŸ"': '📄',
    'ðŸ'¥': '👥',
    'ðŸ–ï¸': '🏖️',
    'ðŸ'°': '💰',
    'ðŸ'¬': '💬',
    'ðŸ ': '🏠',
    'ðŸŽ‰': '🎉',
    'ðŸ'»': '💻',
    'ðŸšª': '🚪',
    'ðŸ§ ': '🧠',
    'ðŸ›¡ï¸': '🛡️',
    'ðŸ'¼': '💼',
    'ðŸ"˜': '📘',
    'ðŸ"¢': '📢',
    'ðŸ"'': '🔒',
    'ðŸŽ‚': '🎂',
    'ðŸ¤': '🤝',
    'ðŸŒ±': '🌱',
    'ðŸ"§': '📧',
    'â °': '⏰',
    'ðŸ¦¸': '🦸'
};

for (const [old, newVal] of Object.entries(replacements)) {
    content = content.split(old).join(newVal);
}

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed emoji encoding in employee-handbook.html');
