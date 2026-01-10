const fs = require('fs');
const path = require('path');

const trainingDir = 'c:/Users/reals/.gemini/antigravity/playground/shimmering-einstein/sops/training';

const appFiles = fs.readdirSync(trainingDir).filter(file => file.endsWith('-training-app.js'));

appFiles.forEach(file => {
    const filePath = path.join(trainingDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // 1. Fix: Auto-advance to next task after passing quiz (replace button with auto-call)
    // Look for the pattern: html += `<button class="nav-btn" onclick="openTask(${task.id})...Continue to Task...
    const buttonPattern = /html \+= `<button class="nav-btn" onclick="openTask\(\$\{task\.id\}\);[^`]*Continue to Task[^`]*<\/button>`;/;
    const autoAdvanceCode = `// Auto-advance to next task after 1.5 seconds
            html += \`<div style="text-align: center; margin-top: 30px;">
                <p style="color: #10B981; font-size: 1.2em; margin-bottom: 15px;">✅ Moving to Task \${task.id + 1}...</p>
                <div style="width: 200px; height: 4px; background: rgba(255,255,255,0.1); border-radius: 10px; margin: 0 auto; overflow: hidden;">
                    <div style="height: 100%; background: linear-gradient(90deg, #10B981, #06B6D4); animation: progressAnim 1.5s ease forwards;"></div>
                </div>
            </div>\`;
            setTimeout(() => {
                openTask(task.id);
                renderTasksList();
                updateProgressBar();
            }, 1500);`;

    if (content.match(buttonPattern)) {
        content = content.replace(buttonPattern, autoAdvanceCode);
        changed = true;
        console.log(`Fixed auto-advance in: ${file}`);
    }

    // 2. Hide welcome screen immediately on page load
    // Find the DOMContentLoaded handler and ensure welcomeScreen is hidden first
    const domContentPattern = /document\.addEventListener\('DOMContentLoaded', \(\) => \{[\s\S]*?renderTasksList\(\);[\s\S]*?updateProgressBar\(\);/;

    if (content.match(domContentPattern) && !content.includes("// Hide welcome screen immediately")) {
        content = content.replace(
            domContentPattern,
            `document.addEventListener('DOMContentLoaded', () => {
    // Hide welcome screen immediately
    const welcomeScreen = document.getElementById('welcomeScreen');
    if (welcomeScreen) welcomeScreen.style.display = 'none';
    
    renderTasksList();
    updateProgressBar();`
        );
        changed = true;
        console.log(`Fixed welcome screen in: ${file}`);
    }

    // 3. Update the auto-load logic to ensure it always opens a task
    // Replace the auto-load section to be more robust
    const autoLoadPattern = /\/\/ Auto-load current task[\s\S]*?if \(typeof progress !== 'undefined'[\s\S]*?openTask\(progress\.currentTask - 1\);[\s\S]*?\}\s*\}/;
    const newAutoLoad = `// Auto-load: Always open first incomplete task (never show welcome screen)
    const firstIncompleteIndex = trainingTasks.findIndex(t => !progress.completedTasks.includes(t.id));
    const taskToOpen = firstIncompleteIndex >= 0 ? firstIncompleteIndex : 0;
    if (typeof openTask === 'function') {
        setTimeout(() => openTask(taskToOpen), 50);
    }`;

    if (content.match(autoLoadPattern)) {
        content = content.replace(autoLoadPattern, newAutoLoad);
        changed = true;
        console.log(`Fixed auto-load logic in: ${file}`);
    }

    if (changed) {
        fs.writeFileSync(filePath, content);
    }
});

console.log('Done!');
