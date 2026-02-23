// Fix quiz quality: Make wrong answers equally detailed, remove "only" pattern
// Strategy: Pad short wrong answers with plausible reasoning to match correct answer length
const fs = require('fs');

const modules = ['designer', 'developer', 'fiverr-risk', 'finance', 'pm', 'content', 'socialmedia', 'clientchat'];

// Mapping of short wrong answer patterns to longer, more plausible versions
// These add reasoning that SOUNDS right but is actually wrong
const paddings = {
    // Generic short dismissive answers → detailed but wrong reasoning
    "There's no real difference": "Both approaches achieve the same outcome in production environments — the choice is purely a matter of personal workflow preference",
    "There's no functional difference": "Both approaches achieve identical results in production — choosing between them is a matter of team preference with no practical impact",
    "There's no practical difference": "Both approaches produce equivalent outcomes in real-world use — the distinction exists in theory but not in practice",
    "There's no difference": "Both approaches yield identical results — the seeming difference is a misconception from outdated documentation",
    "It doesn't matter": "The impact is negligible in practice — teams that obsess over this are optimizing for the wrong variable when other factors matter more",
    "Not concerned": "The metric naturally corrects over time through normal account activity without requiring direct intervention",
    "Not concerning": "The metric naturally corrects over time through normal account activity without requiring direct intervention",
};

for (const mod of modules) {
    const fp = `./sops/training/${mod}-training-data.js`;
    let c;
    try { c = fs.readFileSync(fp, 'utf8'); } catch { continue; }

    let fixCount = 0;
    let onlyFix = 0;

    // Match each quiz question block  
    c = c.replace(/\{\s*q:\s*"([^"]*)",\s*o:\s*\[([^\]]*)\],\s*c:\s*(\d)\s*\}/g, (match, question, optsStr, correctIdx) => {
        const ci = parseInt(correctIdx);
        const opts = [];
        const optRegex = /"([^"]*)"/g;
        let om;
        while ((om = optRegex.exec(optsStr)) !== null) {
            opts.push(om[1]);
        }

        if (opts.length !== 4) return match; // Skip malformed

        const correctLen = opts[ci].length;
        let changed = false;

        for (let i = 0; i < opts.length; i++) {
            if (i === ci) continue; // Skip correct answer

            const opt = opts[i];
            const ratio = opt.length / correctLen;

            // Fix 1: Remove "only" from wrong answers if it creates a pattern
            // Replace "Only X" with a more nuanced but still wrong statement
            if (opt.toLowerCase().startsWith('only ')) {
                const rest = opt.substring(5);
                // Rewrite to remove the "only" signal
                opts[i] = rest.charAt(0).toUpperCase() + rest.slice(1) + ' — this is the standard approach most teams follow';
                onlyFix++;
                changed = true;
            } else if (opt.toLowerCase().includes(' only ')) {
                // Mid-sentence "only" — replace with "primarily" or restructure
                opts[i] = opt.replace(/\bonly\b/gi, 'primarily');
                onlyFix++;
                changed = true;
            }

            // Fix 2: Pad short wrong answers to be closer in length to correct answer
            if (ratio < 0.6 && opts[i].length < 60) {
                // Short dismissive answer — needs padding
                const padded = padWrongAnswer(opts[i], correctLen);
                if (padded !== opts[i]) {
                    opts[i] = padded;
                    fixCount++;
                    changed = true;
                }
            }
        }

        if (!changed) return match;

        const newOpts = opts.map(o => `"${o.replace(/"/g, '\\"')}"`).join(', ');
        return `{ q: "${question}", o: [${newOpts}], c: ${ci} }`;
    });

    fs.writeFileSync(fp, c);
    console.log(`${mod}: ${fixCount} padded, ${onlyFix} only-fixes`);
}

function padWrongAnswer(answer, targetLen) {
    // Check lookup table first
    for (const [short, long] of Object.entries(paddings)) {
        if (answer.includes(short)) {
            return answer.replace(short, long);
        }
    }

    // Generic padding strategies based on answer content
    const lower = answer.toLowerCase();

    if (lower.includes('not') || lower.includes("don't") || lower.includes("doesn't") || lower.includes('never')) {
        // Negative dismissive → add false reasoning
        if (answer.length < 40) {
            return answer + ' — this is the industry-standard position backed by conventional practice';
        }
    }

    if (lower.includes('always') || lower.includes('every')) {
        // Absolute statement → add false justification
        if (answer.length < 40) {
            return answer + ' — following this approach consistently ensures predictable outcomes across all scenarios';
        }
    }

    if (lower.includes('wait') || lower.includes('ignore')) {
        if (answer.length < 40) {
            return answer + ' — intervening too early often creates more problems than the original issue';
        }
    }

    if (lower.includes('accept') || lower.includes('agree')) {
        if (answer.length < 40) {
            return answer + ' — maintaining goodwill protects the long-term relationship and future revenue';
        }
    }

    // If still short, add generic professional reasoning
    if (answer.length < 35 && answer.length > 10) {
        return answer + ' — this reflects the standard operating procedure most organizations follow';
    }

    return answer;
}

// Re-audit after fixes
console.log('\n--- POST-FIX AUDIT ---');
for (const mod of modules) {
    const fp = `./sops/training/${mod}-training-data.js`;
    let c;
    try { c = fs.readFileSync(fp, 'utf8'); } catch { continue; }

    const qs = [];
    const re = /\{\s*q:\s*"([^"]*)",\s*o:\s*\[([^\]]*)\],\s*c:\s*(\d)\s*\}/g;
    let x;
    while ((x = re.exec(c)) !== null) {
        const opts = x[2].match(/"([^"]*)"/g)?.map(s => s.slice(1, -1)) || [];
        qs.push({ o: opts, c: parseInt(x[3]) });
    }

    let cl = 0, ow = 0;
    for (const q of qs) {
        const ci = q.c;
        const clen = q.o[ci]?.length || 0;
        const wl = q.o.filter((_, i) => i !== ci).map(o => o.length);
        if (clen > Math.max(...wl)) cl++;
        for (let i = 0; i < q.o.length; i++) {
            if (q.o[i].toLowerCase().includes('only') && i !== ci) ow++;
        }
    }

    if (qs.length > 0) {
        console.log(`${mod}: ${qs.length}q | correct=longest: ${cl} (${Math.round(cl / qs.length * 100)}%) | only_wrong: ${ow}`);
    }
}
