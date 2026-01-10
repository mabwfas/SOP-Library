const fs = require('fs');
const path = require('path');

const trainingDir = __dirname;
const htmlFiles = fs.readdirSync(trainingDir).filter(file => file.endsWith('-training.html'));
const jsFiles = fs.readdirSync(trainingDir).filter(file => file.endsWith('-training-app.js'));

// 1. Update HTML files to include custom scrollbar and confetti script
htmlFiles.forEach(file => {
    const filePath = path.join(trainingDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Add confetti script if missing
    if (!content.includes('confetti.js')) {
        content = content.replace('</body>', '    <!-- Confetti FX -->\n    <script src="../assets/js/confetti.js"></script>\n</body>');
        console.log(`Updated HTML: ${file}`);
    }

    // Update style reference (ensure it points to assets/css if it was pointing to outdated location)
    // Note: We already fixed the CSS structure in previous steps, but let's double check
    if (content.includes('href="../assets/css/sop-styles.css"')) {
        // Already correct
    } else if (content.includes('href="sop-styles.css"')) {
        content = content.replace('href="sop-styles.css"', 'href="../assets/css/sop-styles.css"');
        console.log(`Fixed CSS path in: ${file}`);
    }

    fs.writeFileSync(filePath, content);
});

// 2. Update JS files to trigger confetti on win
jsFiles.forEach(file => {
    const filePath = path.join(trainingDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Add confetti trigger to showResults()
    // Look for: const passed = correct === totalQuestions;
    const passedRegex = /(const passed = correct === totalQuestions;)/;

    if (passedRegex.test(content) && !content.includes('window.confetti.burst')) {
        const replacement = `$1
    
    if (passed && window.confetti) {
        window.confetti.burst(window.innerWidth / 2, window.innerHeight / 2);
    }`;
        content = content.replace(passedRegex, replacement);
        console.log(`Updated JS: ${file}`);
    }

    // Add confetti trigger to showCertificate()
    const certRegex = /(function showCertificate\(\) \{)/;
    if (certRegex.test(content) && !content.includes('window.confetti.burst', content.indexOf('showCertificate'))) {
        const replacement = `$1
    if (window.confetti) {
        window.confetti.burst(window.innerWidth / 2, window.innerHeight / 2);
        setTimeout(() => window.confetti.burst(window.innerWidth / 4, window.innerHeight / 2), 500);
        setTimeout(() => window.confetti.burst(3 * window.innerWidth / 4, window.innerHeight / 2), 1000);
    }`;
        content = content.replace(certRegex, replacement);
        console.log(`Updated JS (Certificate): ${file}`);
    }

    fs.writeFileSync(filePath, content);
});
