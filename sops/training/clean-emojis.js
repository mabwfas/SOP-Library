const fs = require('fs');
const path = require('path');

const trainingDir = __dirname;
const htmlFiles = fs.readdirSync(trainingDir).filter(file => file.endsWith('-training.html'));

htmlFiles.forEach(file => {
    const filePath = path.join(trainingDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Remove the graduation cap emoji from H1 tags to prevent duplication (since we handle it via CSS)
    if (content.includes('🎓')) {
        content = content.replace(/🎓\s*/g, '');
        console.log(`Removed emoji from: ${file}`);
        fs.writeFileSync(filePath, content);
    } else {
        console.log(`No emoji found in: ${file}`);
    }
});
