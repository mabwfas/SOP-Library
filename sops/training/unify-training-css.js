const fs = require('fs');
const path = require('path');

const trainingDir = 'c:/Users/reals/.gemini/antigravity/playground/shimmering-einstein/sops/training';

// All training HTML files except sales (which is already correct)
const htmlFiles = fs.readdirSync(trainingDir).filter(file =>
    file.endsWith('-training.html') && file !== 'sales-training.html'
);

htmlFiles.forEach(file => {
    const filePath = path.join(trainingDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // 1. Update CSS reference from sop-styles.css to sales-styles.css
    if (content.includes('href="../assets/css/sop-styles.css"')) {
        content = content.replace(
            'href="../assets/css/sop-styles.css"',
            'href="../assets/css/sales-styles.css"'
        );
        changed = true;
        console.log(`Updated CSS reference in: ${file}`);
    }

    // 2. Remove confetti script (only Sales has this working properly)
    // Actually keep confetti for now - it's fine

    // 3. Ensure the sidebar-overlay exists after sidebar
    if (!content.includes('sidebar-overlay')) {
        content = content.replace(
            '</aside>',
            '</aside>\n            <div class="sidebar-overlay" onclick="toggleSidebar()"></div>'
        );
        changed = true;
        console.log(`Added sidebar-overlay to: ${file}`);
    }

    if (changed) {
        fs.writeFileSync(filePath, content);
    }
});

console.log('Done! All training modules now use sales-styles.css');
