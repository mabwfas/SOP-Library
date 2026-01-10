const fs = require('fs');
const path = require('path');

const trainingDir = __dirname;

// Get all -training.html files
const files = fs.readdirSync(trainingDir).filter(f => f.endsWith('-training.html'));

const homeButtonHtml = `
            <!-- Home Button -->
            <a href="../index.html" style="
                display: flex; 
                align-items: center; 
                gap: 10px; 
                padding: 12px 20px; 
                background: rgba(255, 255, 255, 0.05); 
                margin-bottom: 20px; 
                border-radius: 10px; 
                text-decoration: none; 
                color: #F8FAFC; 
                border: 1px solid rgba(255, 255, 255, 0.1); 
                transition: all 0.2s;"
                onmouseover="this.style.background='rgba(255, 255, 255, 0.1)'; this.style.borderColor='rgba(255, 255, 255, 0.2)';"
                onmouseout="this.style.background='rgba(255, 255, 255, 0.05)'; this.style.borderColor='rgba(255, 255, 255, 0.1)';"
            >
                <span style="font-size: 1.2em;">🏠</span>
                <span style="font-weight: 600;">Back to Dashboard</span>
            </a>`;

files.forEach(file => {
    const filePath = path.join(trainingDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Remove from Header (cleanup previous attempt)
    // Looking for the specific injected code pattern
    content = content.replace(/<div style="display:flex; align-items:center; gap:15px;">\s*<a href="\.\.\/index\.html"[\s\S]*?<\/a>\s*(<h1>.*?<\/h1>)\s*<\/div>/, '$1');

    // 2. Add to Sidebar
    // Look for <aside class="sidebar"> and insert immediately after
    // But check if it already exists to avoid duplicates
    if (!content.includes('Back to Dashboard')) {
        const sidebarRegex = /(<aside class="sidebar">\s*)/;
        if (sidebarRegex.test(content)) {
            content = content.replace(sidebarRegex, `$1${homeButtonHtml}\n`);
            console.log(`✅ Moved Home button to sidebar in ${file}`);
        } else {
            console.log(`⚠️ Could not find sidebar in ${file}`);
        }
    } else {
        console.log(`ℹ️ Sidebar Home button likely already exists in ${file}`);
    }

    fs.writeFileSync(filePath, content);
});
