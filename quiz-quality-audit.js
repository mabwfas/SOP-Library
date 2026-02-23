// Comprehensive quiz quality audit across all modules
// Checks: question length, answer diversity, generic patterns, scenario-based questions
const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'sops', 'training');
const mods = ['cs', 'sales', 'hr', 'finance', 'pm', 'content', 'social-media', 'client-chat', 'designer', 'developer', 'wordpress', 'fiverr-risk', 'operations', 'fullstack'];
const results = [];

for (const mod of mods) {
    const fp = path.join(dir, mod + '-training-data.js');
    if (!fs.existsSync(fp)) { results.push({ mod, status: 'FILE_MISSING' }); continue; }
    const c = fs.readFileSync(fp, 'utf8');

    // Find all role quizzes (not task0Quiz intro)
    const quizVarNames = [];
    const re = /const (task\d+Quiz)\s*=\s*\[/g;
    let match;
    while (match = re.exec(c)) {
        if (match[1] !== 'task0Quiz') quizVarNames.push(match[1]);
    }

    if (quizVarNames.length === 0) {
        results.push({ mod, status: 'NO_ROLE_QUIZZES', quizCount: 0 });
        continue;
    }

    // Analyze each quiz
    let totalQs = 0;
    let shortStemCount = 0; // Questions with very short stems (generic pattern)
    let scenarioCount = 0; // Questions that are scenario-based
    let answerDist = [0, 0, 0, 0];
    let allBCount = 0; // Questions where answer is B (index 1)

    for (const qv of quizVarNames) {
        const qRegex = new RegExp(`const ${qv}\\s*=\\s*\\[([\\s\\S]*?)\\];`);
        const qMatch = c.match(qRegex);
        if (!qMatch) continue;

        const block = qMatch[1];

        // Extract individual questions
        const questions = block.matchAll(/q:\s*"((?:[^"\\]|\\.)*)"/g);
        for (const q of questions) {
            totalQs++;
            const qText = q[1];

            // Short stem = generic (under 40 chars, ending with ":")
            if (qText.length < 40 && qText.endsWith(':')) shortStemCount++;

            // Scenario-based = contains client/scenario language
            if (qText.match(/client|customer|scenario|situation|colleague|manager|report|discover|receive|ticket|message|says|asks|tells/i)) {
                scenarioCount++;
            }
        }

        // Answer distribution
        const answers = block.matchAll(/c:\s*(\d)/g);
        for (const a of answers) {
            const idx = parseInt(a[1]);
            answerDist[idx]++;
            if (idx === 1) allBCount++;
        }
    }

    const pctScenario = totalQs > 0 ? Math.round(scenarioCount / totalQs * 100) : 0;
    const pctGeneric = totalQs > 0 ? Math.round(shortStemCount / totalQs * 100) : 0;
    const pctB = totalQs > 0 ? Math.round(allBCount / totalQs * 100) : 0;

    const quality = pctGeneric > 30 ? 'GENERIC_BAD' :
        pctScenario < 30 ? 'LOW_SCENARIO' :
            pctB > 40 ? 'UNBALANCED' : 'GOOD';

    results.push({
        mod,
        status: quality,
        quizCount: quizVarNames.length,
        totalQs,
        pctScenario,
        pctGeneric,
        dist: `A=${answerDist[0]} B=${answerDist[1]} C=${answerDist[2]} D=${answerDist[3]}`,
        pctB
    });
}

// Output
console.log('\n=== QUIZ QUALITY AUDIT ===\n');
console.log('Module'.padEnd(16) + 'Status'.padEnd(16) + 'Qs'.padEnd(6) + 'Scenario%'.padEnd(12) + 'Generic%'.padEnd(12) + 'Distribution');
console.log('-'.repeat(90));
for (const r of results) {
    if (r.status === 'FILE_MISSING' || r.status === 'NO_ROLE_QUIZZES') {
        console.log(`${r.mod.padEnd(16)}${r.status}`);
    } else {
        console.log(`${r.mod.padEnd(16)}${r.status.padEnd(16)}${String(r.totalQs).padEnd(6)}${(r.pctScenario + '%').padEnd(12)}${(r.pctGeneric + '%').padEnd(12)}${r.dist}`);
    }
}

console.log('\n=== MODULES NEEDING WORK ===');
for (const r of results) {
    if (r.status !== 'GOOD') {
        console.log(`  ${r.mod}: ${r.status}`);
    }
}
