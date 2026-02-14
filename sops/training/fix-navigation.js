const fs = require('fs');
const path = require('path');

const trainingDir = __dirname;

// All training HTML files
const trainingFiles = [
    'client-chat-training.html',
    'content-training.html',
    'cs-training.html',
    'designer-training.html',
    'developer-training.html',
    'finance-training.html',
    'fullstack-training.html',
    'hr-training.html',
    'operations-training.html',
    'pm-training.html',
    'sales-training.html',
    'social-media-training.html',
    'wordpress-training.html'
];

let totalFixes = 0;

trainingFiles.forEach(file => {
    const filePath = path.join(trainingDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;
    let fixes = [];

    // === FIX 1: Header home-link should go to training-hub.html, not index.html ===
    // Match the home-link in the header
    if (content.includes('class="home-link"') && content.includes('../index.html')) {
        content = content.replace(
            /<a href="\.\.\/index\.html" class="home-link"><span>🏠<\/span><span>SOP<\/span><\/a>/g,
            '<a href="../training-hub.html" class="home-link"><span>📚</span><span>Training</span></a>'
        );
        fixes.push('Fixed header home-link: index.html → training-hub.html');
    }

    // === FIX 2: Sidebar button should link to training-hub.html, not index.html ===
    if (content.includes('<a href="../index.html" style=')) {
        content = content.replace(
            /<a href="\.\.\/index\.html" style="/g,
            '<a href="../training-hub.html" style="'
        );
        fixes.push('Fixed sidebar link: index.html → training-hub.html');
    }

    // === FIX 3: Sidebar button text should say "All Trainings" not "Back to SOP" ===
    if (content.includes('Back to SOP')) {
        content = content.replace('Back to SOP', 'All Trainings');
        fixes.push('Fixed sidebar text: "Back to SOP" → "All Trainings"');
    }

    // === FIX 4: Fix corrupted sidebar emoji (the "All Trainings" button icon) ===
    // Replace corrupted emojis with 📚
    const sidebarEmojiRegex = /<span style="font-size: 1\.2em;">(?:🏠|"š|"–|📖)<\/span>/g;
    if (sidebarEmojiRegex.test(content)) {
        content = content.replace(sidebarEmojiRegex, '<span style="font-size: 1.2em;">📚</span>');
        fixes.push('Fixed corrupted sidebar button emoji → 📚');
    }

    // === FIX 5: Fix corrupted welcome-icon emojis ===
    const welcomeEmojiMap = {
        'pm-training.html': '📋',        // was corrupted "Š
        'hr-training.html': '👥',         // was corrupted '¥
        'finance-training.html': '💰',    // was corrupted '°
        'designer-training.html': '🎨',   // was corrupted ¨
        'content-training.html': '✏️',    // was garbled
    };
    if (welcomeEmojiMap[file]) {
        const welcomeRegex = /<div class="welcome-icon">([^<]*)<\/div>/;
        const match = content.match(welcomeRegex);
        if (match && !['🚀', '👈', '🤝', '💼'].includes(match[1])) {
            content = content.replace(welcomeRegex, `<div class="welcome-icon">${welcomeEmojiMap[file]}</div>`);
            fixes.push(`Fixed corrupted welcome icon → ${welcomeEmojiMap[file]}`);
        }
    }

    // === FIX 6: Fix corrupted certificate button emoji ===
    // Some have corrupted chars like † where 🎓 should be
    const certEmojiRegex = /<span style="font-size: 1\.5em;">([^<]*)<\/span>/;
    const certMatch = content.match(certEmojiRegex);
    if (certMatch && certMatch[1] !== '🎓' && certMatch[1] !== '') {
        content = content.replace(certEmojiRegex, '<span style="font-size: 1.5em;">🎓</span>');
        fixes.push('Fixed corrupted certificate button emoji → 🎓');
    } else if (certMatch && certMatch[1] === '') {
        content = content.replace(certEmojiRegex, '<span style="font-size: 1.5em;">🎓</span>');
        fixes.push('Added certificate button emoji 🎓');
    }

    // === FIX 7: Remove DEV skip button from fullstack-training.html ===
    if (file === 'fullstack-training.html') {
        const devBtnRegex = /\s*<!-- DEV: Skip to Task 10 Button \(TEMPORARY\) -->[\s\S]*?<\/div>\s*(?=\s*<\/aside>)/;
        if (devBtnRegex.test(content)) {
            content = content.replace(devBtnRegex, '\n');
            fixes.push('Removed DEV Skip button');
        }
    }

    // === FIX 8: Fix corrupted backtick-n script tags in developer-training.html ===
    if (content.includes('`n<script')) {
        content = content.replace(/`n<script/g, '\n<script');
        content = content.replace(/`n<\/body>/g, '\n</body>');
        fixes.push('Fixed corrupted backtick-n in script tags');
    }

    // === FIX 9: Ensure all welcome screens have heading and description ===
    const welcomeScreenNoText = /<div class="welcome-screen" id="welcomeScreen">\s*<div class="welcome-icon">[^<]*<\/div>\s*\s*<\/div>/;
    if (welcomeScreenNoText.test(content)) {
        // Extract the training name from the h1 tag
        const h1Match = content.match(/<h1>([^<]+)<\/h1>/);
        const trainingName = h1Match ? h1Match[1] : 'Your Training';
        const welcomeIcon = content.match(/<div class="welcome-icon">([^<]*)<\/div>/);
        const icon = welcomeIcon ? welcomeIcon[1] : '🚀';

        content = content.replace(
            welcomeScreenNoText,
            `<div class="welcome-screen" id="welcomeScreen">
                    <div class="welcome-icon">${icon}</div>
                    <h2>Welcome to ${trainingName}</h2>
                    <p>Select Task 1 from the sidebar to begin your training.</p>
                </div>`
        );
        fixes.push('Added missing welcome screen text');
    }

    // Write if changed
    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        totalFixes += fixes.length;
        console.log(`✅ ${file}: ${fixes.length} fixes`);
        fixes.forEach(f => console.log(`   - ${f}`));
    } else {
        console.log(`⏭️ ${file}: No changes needed`);
    }
});

console.log(`\n🎯 Total fixes applied: ${totalFixes}`);
