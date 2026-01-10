const fs = require('fs');
const path = require('path');

const trainingDir = __dirname;
const indexHtmlPath = '../index.html';

// Get all -training.html files
const files = fs.readdirSync(trainingDir).filter(f => f.endsWith('-training.html'));

const homeButtonHtml = `<a href="../index.html" title="Back to Dashboard" style="text-decoration: none; font-size: 1.2em; background: rgba(255,255,255,0.05); width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; border-radius: 50%; border: 1px solid rgba(255,255,255,0.1); transition: all 0.2s;" onmouseover="this.style.background='rgba(45, 212, 191, 0.1)'; this.style.borderColor='#2DD4BF'; this.style.transform='scale(1.05)';" onmouseout="this.style.background='rgba(255,255,255,0.05)'; this.style.borderColor='rgba(255,255,255,0.1)'; this.style.transform='scale(1)';">🏠</a>`;

files.forEach(file => {
    const filePath = path.join(trainingDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Check if already has home button
    if (content.includes('title="Back to Dashboard"')) {
        console.log(`ℹ️ ${file} already has home button.`);
        return;
    }

    // Pattern to match header
    // Use [\s\S]*? for multiline matching
    const headerRegex = /(<div class="training-header">\s*)(<h1>.*?<\/h1>)(\s*<p>.*?<\/p>\s*<\/div>)/i;

    if (headerRegex.test(content)) {
        content = content.replace(headerRegex, (match, divStart, h1, rest) => {
            return `${divStart}<div style="display:flex; align-items:center; gap:15px;">
                ${homeButtonHtml}
                ${h1}
            </div>${rest}`;
        });
        fs.writeFileSync(filePath, content);
        console.log(`✅ Added Home button to ${file}`);
    } else {
        console.log(`⚠️ Could not find header pattern in ${file}`);
    }
});
