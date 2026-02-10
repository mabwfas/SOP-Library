/**
 * Fix emoji corruption (?? and ?) across all training app JS files.
 * Reference: developer-training-app.js (has correct emojis)
 * 
 * Run: node fix-emoji-corruption.js
 */
const fs = require('fs');
const path = require('path');

const trainingDir = __dirname;

// Files to fix (all except developer-training-app.js which is the reference)
const filesToFix = fs.readdirSync(trainingDir)
    .filter(f => f.endsWith('-training-app.js') && f !== 'developer-training-app.js');

console.log(`Found ${filesToFix.length} training app files to check:\n`);

// Define all replacement patterns
// Order matters: longer patterns first to avoid partial replacement
const replacements = [
    // === Triple ?? patterns ===
    // Print certificate button text
    { from: '??? Print Certificate', to: '🖨️ Print Certificate' },

    // === Double ?? patterns (context-specific) ===
    // Before You Begin heading
    { from: '>?? Before You Begin<', to: '>📚 Before You Begin<' },
    // Task heading with ??
    { from: '>?? Task ${task.id}', to: '>📝 Task ${task.id}' },
    // Error/Warning content
    { from: '>?? Content Coming Soon<', to: '>⚠️ Content Coming Soon<' },
    { from: '>?? Error Loading Content<', to: '>⚠️ Error Loading Content<' },
    // Congratulations
    { from: "'?? Congratulations! You passed!'", to: "'🎉 Congratulations! You passed!'" },
    // CERTIFIED
    { from: '>?? CERTIFIED<', to: '>🏆 CERTIFIED<' },
    // View Certificate button
    { from: '>?? View Certificate<', to: '>🎓 View Certificate<' },
    // Start Quiz button
    { from: '>?? Start Quiz', to: '>📝 Start Quiz' },
    // Take Quiz button (if exists in some files)
    { from: '>?? Take Quiz', to: '>📝 Take Quiz' },
    // Retry Quiz button
    { from: '>?? Retry Quiz<', to: '>🔄 Retry Quiz<' },
    // Review Material button
    { from: '>?? Review Material<', to: '>📖 Review Material<' },
    // Certificate header icon (standalone ?? in a div)
    // This pattern: <div style="font-size: 3em; margin-bottom: 10px;">??</div>
    { from: '10px;">??</div>', to: '10px;">🎓</div>' },
    // Certificate seal icon (standalone ?? in a div, 2.5em size)
    // This pattern: ">??</div>" within certificate footer area
    { from: '">??</div>', to: '">🏆</div>' },
    // Name prompt welcome icon (standalone ??, 4em size)
    { from: '20px;">??</div>', to: '20px;">🎓</div>' },

    // === Single ? patterns (context-specific) ===
    // Close button (✕)
    { from: '" class="no-print">?</button>', to: '" class="no-print">✕</button>' },
    // Exit Quiz button
    { from: '>? Exit Quiz<', to: '>← Exit Quiz<' },
    { from: ">? content<", to: ">← Back to Content<" },
    // Previous button
    { from: '>? Previous<', to: '>← Previous<' },
    // Next button
    { from: '>Next ?<', to: '>Next →<' },
    // Moving to Task
    { from: '>? Moving to Task', to: '>✅ Moving to Task' },
    // Failed message
    { from: "'? You need", to: "'❌ You need" },
    // Task status emojis (empty strings where emojis should be)
    { from: "${isCompleted ? '' : task.id}", to: "${isCompleted ? '✓' : task.id}" },
    { from: "${isCompleted ? '' : isLocked ? '' : ''}", to: "${isCompleted ? '✅' : isLocked ? '🔒' : '→'}" },
];

let totalFixCount = 0;

filesToFix.forEach(file => {
    const filePath = path.join(trainingDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let fileFixCount = 0;

    replacements.forEach(({ from, to }) => {
        if (content.includes(from)) {
            const count = content.split(from).length - 1;
            content = content.split(from).join(to);
            fileFixCount += count;
        }
    });

    if (fileFixCount > 0) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ ${file}: ${fileFixCount} emoji fixes applied`);
        totalFixCount += fileFixCount;
    } else {
        console.log(`⏭️  ${file}: No fixes needed`);
    }
});

console.log(`\n🎉 Done! Total fixes: ${totalFixCount} across ${filesToFix.length} files.`);
