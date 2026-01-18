import os
import glob

# Mojibake to proper emoji mapping
replacements = {
    'ðŸš€': '🚀',  # rocket
    'ðŸš¨': '🚨',  # warning light
    'ðŸ"': '🔍',   # magnifying glass
    'ðŸ'¥': '👥',  # people
    'ðŸ–ï¸': '🏖️', # beach
    'ðŸ'°': '💰',  # money bag
    'ðŸ'¬': '💬',  # speech bubble
    'ðŸ'»': '💻',  # laptop
    'ðŸšª': '🚪',  # door
    'ðŸ§ ': '🧠',  # brain
    'ðŸ›¡ï¸': '🛡️', # shield
    'ðŸ'¼': '💼',  # briefcase
    'ðŸ"˜': '📘',  # blue book
    'ðŸ"¢': '📢',  # megaphone
    'ðŸ"'': '🔒',  # lock
    'ðŸŽ‚': '🎂',  # birthday cake
    'ðŸ¤': '🤝',   # handshake
    'ðŸŒ±': '🌱',  # seedling
    'ðŸ"§': '📧',  # email
    'ðŸŽ‰': '🎉',  # party
    'ðŸ ': '🏠',   # house
    'ðŸŽ¯': '🎯',  # target
    'ðŸ"Š': '📊',  # chart
    'ðŸ"ˆ': '📈',  # chart up
    'ðŸ"‹': '📋',  # clipboard
    'ðŸ"¹': '📹',  # video
    'ðŸ"': '📝',   # memo
    'ðŸ"Œ': '📌',  # pushpin
    'ðŸ'¡': '💡',  # lightbulb
    'ðŸ"¥': '🔥',  # fire
    'ðŸ'ª': '💪',  # muscle
    'ðŸ†': '🏆',   # trophy
    'âœ…': '✅',   # check mark
    'âš ': '⚠️',   # warning
    'â„¹': '⚠️',   # warning
    'âš¡': '⚡',   # lightning
    'â­': '⭐',   # star
    'ðŸ'': '👍',   # thumbs up
    'ðŸ''': '💎',  # gem
    'ðŸŽ"': '🎓',  # graduation cap
    'ðŸ"±': '📱',  # phone
    'ðŸŒ': '🌐',   # globe
    'ðŸ"—': '🔗',  # link
    'ðŸ—‚': '🗂️',  # folder
    'ðŸ"': '🔐',   # locked
    'ðŸ–¥': '🖥️',  # desktop
    'ðŸ–±': '🖱️',  # mouse
    'âŒ': '❌',   # x mark
    'ðŸ"´': '🔴',  # red circle
    'ðŸŸ¢': '🟢',  # green circle
    'ðŸŸ¡': '🟡',  # yellow circle
    'ðŸ"µ': '🔵',  # blue circle
}

# Find all HTML files
html_files = glob.glob('**/*.html', recursive=True)
html_files += glob.glob('**/*.js', recursive=True)

fixed_count = 0
for filepath in html_files:
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original = content
        for mojibake, emoji in replacements.items():
            content = content.replace(mojibake, emoji)
        
        if content != original:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            fixed_count += 1
            print(f'Fixed: {filepath}')
    except Exception as e:
        print(f'Error processing {filepath}: {e}')

print(f'\nTotal files fixed: {fixed_count}')
