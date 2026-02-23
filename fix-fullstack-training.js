// Fix Full-Stack Developer Training Bug
// Root cause: const allQuizzes defined in BOTH fullstack-training-data.js AND fullstack-training-data-part2.js
// The const redeclaration causes a JS error that silently breaks the entire training page.
// Fix: Remove allQuizzes from main file, add task0Quiz to part2's allQuizzes

const fs = require('fs');

// Step 1: Fix main data file — remove allQuizzes (keep task0Quiz, it's referenced by part2)
const mainFp = './sops/training/fullstack-training-data.js';
let mainFile = fs.readFileSync(mainFp, 'utf8');

// Remove the allQuizzes block from main file
mainFile = mainFile.replace(/\n*const allQuizzes\s*=\s*\[[\s\S]*?\];\s*/, '\n');
fs.writeFileSync(mainFp, mainFile);
console.log('✅ Removed allQuizzes from main data file');

// Step 2: Fix part2 — add task0Quiz at the beginning of its allQuizzes
const part2Fp = './sops/training/fullstack-training-data-part2.js';
let part2File = fs.readFileSync(part2Fp, 'utf8');

// Replace allQuizzes to include task0Quiz at index 0
part2File = part2File.replace(
    /const allQuizzes\s*=\s*\[/,
    'const allQuizzes = [\n    task0Quiz,'
);
fs.writeFileSync(part2Fp, part2File);
console.log('✅ Added task0Quiz to part2 allQuizzes');

// Step 3: Verify — combine files and test syntax
const combined = mainFile + '\n' + part2File;
try {
    new Function(combined);
    console.log('✅ Combined syntax valid');
} catch (e) {
    console.log('❌ Syntax error:', e.message);
}

// Check allQuizzes structure
const aqMatch = part2File.match(/allQuizzes\s*=\s*\[([\s\S]*?)\]/);
if (aqMatch) {
    const entries = aqMatch[1].trim().split(',').map(s => s.trim()).filter(Boolean);
    console.log('allQuizzes entries (' + entries.length + '): ' + entries.join(', '));
}

// Step 4: Check if part1 should also be loaded
const part1Fp = './sops/training/fullstack-training-data-part1.js';
const part1File = fs.readFileSync(part1Fp, 'utf8');
const part1Vars = [...part1File.matchAll(/(?:const|let|var)\s+(\w+)\s*=/g)].map(x => x[1]);
const mainVars = [...mainFile.matchAll(/(?:const|let|var)\s+(\w+)\s*=/g)].map(x => x[1]);

// Check for overlapping vars
const overlap = part1Vars.filter(v => mainVars.includes(v));
console.log('\nPart1 vars: ' + part1Vars.join(', '));
console.log('Overlapping with main: ' + (overlap.length ? overlap.join(', ') : 'NONE'));
