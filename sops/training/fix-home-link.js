const fs = require('fs');
const path = require('path');

const trainingDir = __dirname;
const htmlFiles = fs.readdirSync(trainingDir).filter(file => file.endsWith('-training.html'));

htmlFiles.forEach(file => {
    const filePath = path.join(trainingDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // Replace logo image with "Home" text link
    const logoRegex = /<a href="\.\.\/index\.html" class="brand-logo">\s*<img[^>]*>\s*<\/a>/g;
    if (content.match(logoRegex)) {
        content = content.replace(logoRegex, '<a href="../index.html" class="home-link"><span>🏠</span><span>Home</span></a>');
        changed = true;
        console.log(`Replaced logo with Home link in: ${file}`);
    }

    // Also check for broken logo tags
    const altLogoRegex = /<a href="\.\.\/index\.html" class="brand-logo">[^<]*<\/a>/g;
    if (content.match(altLogoRegex)) {
        content = content.replace(altLogoRegex, '<a href="../index.html" class="home-link"><span>🏠</span><span>Home</span></a>');
        changed = true;
        console.log(`Fixed broken logo in: ${file}`);
    }

    if (changed) {
        fs.writeFileSync(filePath, content);
    }
});

console.log('Done!');
