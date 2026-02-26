const fs = require('fs');
const path = require('path');

const dir = './sops/training';

// 1. Fix ALL training DATA files: id:0 → id:1, task0Content → task1Content, task0Quiz → task1Quiz
const dataFiles = fs.readdirSync(dir).filter(f => f.endsWith('-data.js'));
let fixedData = 0;

for (const file of dataFiles) {
    const fp = path.join(dir, file);
    let content = fs.readFileSync(fp, 'utf8');
    let changed = false;

    // Fix id: 0 → id: 1 (only the first occurrence in trainingTasks array)
    if (content.includes('{ id: 0,') || content.includes('id: 0,')) {
        // Replace id: 0 with id: 1 - be specific to only match in task definitions
        content = content.replace(/\{ id: 0,/g, '{ id: 1,');
        content = content.replace(/id: 0,\n/g, 'id: 1,\n');
        changed = true;
    }

    // Rename task0Content → task1Content
    if (content.includes('task0Content')) {
        content = content.replace(/task0Content/g, 'task1Content');
        changed = true;
    }

    // Rename task0Quiz → task1Quiz
    if (content.includes('task0Quiz')) {
        content = content.replace(/task0Quiz/g, 'task1Quiz');
        changed = true;
    }

    // Fix allQuizzes reference if present
    if (content.includes('allQuizzes')) {
        // Replace task0Quiz in allQuizzes array too (already handled above)
    }

    if (changed) {
        fs.writeFileSync(fp, content);
        fixedData++;
        console.log(`✅ Data: ${file}`);
    }
}

// 2. Fix ALL training APP files: task0Content reference → task1Content
const appFiles = fs.readdirSync(dir).filter(f => f.endsWith('-app.js'));
let fixedApp = 0;

for (const file of appFiles) {
    const fp = path.join(dir, file);
    let content = fs.readFileSync(fp, 'utf8');
    let changed = false;

    // Fix task0Content → task1Content reference
    if (content.includes('task0Content')) {
        content = content.replace(/task0Content/g, 'task1Content');
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(fp, content);
        fixedApp++;
        console.log(`✅ App:  ${file}`);
    }
}

// 3. Fix inject-pdps.js if it has task0 references
const injectFile = path.join(dir, 'inject-pdps.js');
if (fs.existsSync(injectFile)) {
    let content = fs.readFileSync(injectFile, 'utf8');
    if (content.includes('task0Content') || content.includes('task0Quiz')) {
        content = content.replace(/task0Content/g, 'task1Content');
        content = content.replace(/task0Quiz/g, 'task1Quiz');
        fs.writeFileSync(injectFile, content);
        console.log(`✅ Fixed: inject-pdps.js`);
    }
}

console.log(`\n✅ Fixed ${fixedData} data files and ${fixedApp} app files`);
console.log('Sidebar will now show: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11');
