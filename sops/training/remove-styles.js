const fs = require('fs');
const path = require('path');

const trainingDir = __dirname;
const htmlFiles = fs.readdirSync(trainingDir).filter(file => file.endsWith('-training.html'));

htmlFiles.forEach(file => {
    const filePath = path.join(trainingDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Remove the <style>...</style> block
    // The pattern matches <style> followed by anything until </style>
    const styleRegex = /<style>[\s\S]*?<\/style>/;

    if (content.match(styleRegex)) {
        content = content.replace(styleRegex, '');
        console.log(`Removed inline styles from: ${file}`);
        fs.writeFileSync(filePath, content);
    } else {
        console.log(`No inline styles found in: ${file}`);
    }
});
