const fs = require('fs');
const path = require('path');

const trainingDir = __dirname;
const htmlFiles = fs.readdirSync(trainingDir).filter(file => file.endsWith('-training.html'));

htmlFiles.forEach(file => {
    const filePath = path.join(trainingDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Inject Menu Button and Logo into Header
    // Look for <div class="training-header">
    const headerRegex = /(<div class="training-header">)(\s*<h1>.*?<\/h1>)(\s*<p>.*?<\/p>\s*<\/div>)/s;

    if (content.match(headerRegex)) {
        // Construct new header
        const newHeader = `$1
            <div class="header-left">
                <button class="mobile-menu-btn" onclick="toggleSidebar()">☰</button>
                <a href="../index.html" class="brand-logo">
                    <img src="../assets/images/logo.png" alt="Digital Heroes">
                </a>
                $2
            </div>
            $3`;

        // Note: The original header had <h1> and <p> inside. The regex captures them.
        // We want to wrap h1 in header-left? Or just put logo before h1.
        // Let's assume h1 stays. <p> might be right aligned or just below?
        // Actually, the CSS flexible layout separates children.
        // Premium CSS: .training-header { justify-content: space-between }
        // We want: Left[Menu, Logo, H1] Right[P]

        // Let's rewrite the replacement to be safer
        // Find the inner content of training-header
        const startTag = '<div class="training-header">';
        const endTag = '</div>';
        const startIdx = content.indexOf(startTag);
        const endIdx = content.indexOf(endTag, startIdx);

        if (startIdx !== -1 && endIdx !== -1) {
            const originalHeaderContent = content.substring(startIdx + startTag.length, endIdx);

            // Extract H1 text (approximate)
            const h1Match = originalHeaderContent.match(/<h1>(.*?)<\/h1>/);
            const h1Text = h1Match ? h1Match[1] : 'Training';

            // Extract P text
            const pMatch = originalHeaderContent.match(/<p>(.*?)<\/p>/);
            const pText = pMatch ? pMatch[1] : '';

            const newHeaderContent = `
            <div class="header-left">
                <button class="mobile-menu-btn" onclick="toggleSidebar()">☰</button>
                <a href="../index.html" class="brand-logo">
                    <img src="../assets/images/logo.png" alt="Digital Heroes">
                </a>
                <h1>${h1Text}</h1>
            </div>
            <div class="header-right">
                <p>${pText}</p>
            </div>`;

            content = content.replace(startTag + originalHeaderContent + endTag, startTag + newHeaderContent + endTag);
            console.log(`Updated Header in: ${file}`);
        }
    }

    // 2. Inject Sidebar Overlay (needed for mobile click-to-close)
    if (!content.includes('sidebar-overlay')) {
        const sidebarRegex = /(<aside class="sidebar">[\s\S]*?<\/aside>)/;
        content = content.replace(sidebarRegex, '$1\n            <div class="sidebar-overlay" onclick="toggleSidebar()"></div>');
        console.log(`Added Overlay in: ${file}`);
    }

    // 3. Inject Toggle Script
    if (!content.includes('function toggleSidebar()')) {
        const script = `
    <script>
        function toggleSidebar() {
            document.querySelector('.sidebar').classList.toggle('active');
        }
    </script>
</body>`;
        content = content.replace('</body>', script);
        console.log(`Added Script in: ${file}`);
    }

    fs.writeFileSync(filePath, content);
});
