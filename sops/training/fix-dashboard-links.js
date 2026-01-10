const fs = require('fs');
const path = require('path');

const trainingDir = 'c:/Users/reals/.gemini/antigravity/playground/shimmering-einstein/sops/training';

// Mapping of training files to their corresponding SOP files
const sopMapping = {
    'sales-training.html': '../sales-sop.html',
    'pm-training.html': '../pm-sop.html',
    'developer-training.html': '../developer-sop.html',
    'designer-training.html': '../designer-sop.html',
    'content-training.html': '../content-sop.html',
    'social-media-training.html': '../social-media-sop.html',
    'hr-training.html': '../hr-sop.html',
    'finance-training.html': '../finance-sop.html',
    'cs-training.html': '../cs-sop.html',
    'client-chat-training.html': '../client-chat-sop.html',
    'fullstack-training.html': '../fullstack-sop.html'
};

const htmlFiles = fs.readdirSync(trainingDir).filter(file => file.endsWith('-training.html'));

htmlFiles.forEach(file => {
    const filePath = path.join(trainingDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    const sopUrl = sopMapping[file];
    if (!sopUrl) {
        console.log(`No SOP mapping for: ${file}`);
        return;
    }

    // Replace "Back to Dashboard" link that goes to ../index.html
    // Pattern: href="../index.html" ... Back to Dashboard
    const dashboardLinkPattern = /<a href="\.\.\/index\.html"[^>]*>[\s\S]*?Back to Dashboard[\s\S]*?<\/a>/g;

    if (content.match(dashboardLinkPattern)) {
        content = content.replace(dashboardLinkPattern, (match) => {
            // Replace ../index.html with the SOP URL
            return match.replace('../index.html', sopUrl).replace('Back to Dashboard', 'Back to SOP');
        });
        changed = true;
        console.log(`Updated Back to Dashboard -> SOP in: ${file}`);
    }

    // Also update any other sidebar home links
    const homeButtonPattern = /<a href="\.\.\/index\.html" class="home-link">/g;
    if (content.match(homeButtonPattern)) {
        content = content.replace(homeButtonPattern, `<a href="${sopUrl}" class="home-link">`);
        changed = true;
        console.log(`Updated home-link -> SOP in: ${file}`);
    }

    // Update the header "Home" text to "SOP"
    if (content.includes('>Home</span>')) {
        content = content.replace('>Home</span>', '>SOP</span>');
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(filePath, content);
    }
});

console.log('Done fixing Back to Dashboard links!');
