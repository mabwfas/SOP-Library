const fs = require('fs');

const fp = './sops/training/sales-training-data.js';
let c = fs.readFileSync(fp, 'utf8');

// For each quiz, replace the FIRST N questions with SOP-aligned ones
const sopReplacements = {
    task2Quiz: [
        { q: "At Digital Heroes, the sales mindset 'You Are Not Selling — You Are Solving' means:", o: ["Avoid discussing pricing until the client brings it up first to keep the conversation comfortable and non-transactional", "Diagnose the client's actual business problem first, propose a tailored solution, then align pricing to the value delivered for maximum impact", "Give free consultations hoping the client will buy later since solving their problems for free builds lasting trust", "Focus on your product features exclusively since a strong product will sell itself without additional persuasion needed"], c: 1 },
        { q: "A prospect tells you 'we'll think about it and get back to you.' The Digital Heroes SOP-trained response is:", o: ["Say 'okay, take your time' and wait patiently because following up can feel pushy and may damage the professional relationship", "Acknowledge their need to consider, ask what specific aspects they need to evaluate, and propose a concrete follow-up date and time", "Move on to the next prospect immediately since truly interested clients would commit on the first conversation without delay", "Send them a 50% discount right away to remove the most common objection and accelerate their decision-making process"], c: 1 },
        { q: "The Digital Heroes 'Interconnected Chain' principle applies to sales because:", o: ["Sales closes deals and then it becomes someone else's responsibility to deliver on whatever promises were made to the customer", "Every promise you make in sales becomes a deliverable for design, development, and PM — overselling breaks the chain and creates cascading damage", "Sales operates independently from other departments since they have completely different KPIs and success metrics from the rest of the team", "The chain only applies to production teams because sales is the starting point of the process and doesn't connect to downstream work"], c: 1 },
    ],
    task3Quiz: [
        { q: "At Digital Heroes, 'Rejection is Information, Not Insult' means when a prospect declines:", o: ["Take it personally and work harder on the next pitch to prove your worth and avoid experiencing the pain of rejection again", "Analyze WHY they said no (budget, timing, trust, fit?), document the pattern, and refine your approach for similar future prospects", "Mark the lead as permanently dead and never contact them again since revisiting rejected prospects wastes valuable selling time", "Argue with the prospect about why they're making a mistake since logical reasoning should change their mind if presented well"], c: 1 },
        { q: "The Digital Heroes sales SOP requires thorough documentation of:", o: ["Only closed deals since tracking losses wastes time that would be better spent on prospecting for new sales opportunities", "Every interaction logged: lead source, objections raised, pricing discussed, follow-up dates, and final outcome for continuous improvement", "Just the final contract value because management only cares about revenue numbers, not the detailed process behind each sale", "Nothing formal since good salespeople keep everything in their head and documentation slows down the fast-paced sales cycle"], c: 1 },
    ],
    task5Quiz: [
        { q: "At Digital Heroes, 'Discipline Beats Motivation' for sales means:", o: ["Wait until you feel motivated to make calls since forcing yourself leads to low-quality conversations that waste everyone's time", "Follow the daily prospecting SOP regardless of feelings — 20 outreach contacts daily, EOD report logged, pipeline updated consistently", "Motivation is all you need since if you're passionate enough about the product, the sales will naturally come without structure", "Take mental health days whenever motivation dips because burned out salespeople perform worse on every measurable metric overall"], c: 1 },
        { q: "The Digital Heroes sales EOD report must include:", o: ["A one-word status update like 'good' or 'productive' is sufficient to maintain daily accountability with management oversight", "Leads contacted, meetings booked, proposals sent, deals closed, objections encountered, and next-day plan for full transparency", "Only your total sales number since daily details are irrelevant as long as monthly targets are met at the end of the period", "Nothing if it was a slow day since reporting zero activity makes you look unproductive and creates unnecessary negative impressions"], c: 1 },
    ],
};

for (const [quizName, newQs] of Object.entries(sopReplacements)) {
    const re = new RegExp(`const ${quizName} = \\[([\\s\\S]*?)\\n\\];`);
    const match = c.match(re);
    if (!match) { console.log('  ⚠️ ' + quizName + ' not found'); continue; }

    // Parse existing questions
    const existingQs = [];
    const qRe = /\{\s*q:\s*"([^"]*)",\s*o:\s*\[([^\]]*)\],\s*c:\s*(\d)\s*\}/g;
    let m;
    while ((m = qRe.exec(match[1])) !== null) {
        const opts = m[2].match(/"([^"]*)"/g)?.map(s => s.slice(1, -1)) || [];
        existingQs.push({ q: m[1], o: opts, c: parseInt(m[3]) });
    }

    // Replace first N with SOP questions, keep remaining
    const merged = [...newQs, ...existingQs.slice(newQs.length)];
    const qStr = merged.map(q => {
        const opts = q.o.map(o => `"${o.replace(/"/g, '\\"')}"`).join(', ');
        return `    { q: "${q.q.replace(/"/g, '\\"')}", o: [${opts}], c: ${q.c} }`;
    }).join(',\n');

    c = c.replace(re, `const ${quizName} = [\n${qStr}\n];`);
    console.log('  ✅ ' + quizName + ': injected ' + newQs.length + ' SOP questions, kept ' + (existingQs.length - newQs.length) + ' existing');
}

fs.writeFileSync(fp, c);

// Verify count
const verify = fs.readFileSync(fp, 'utf8');
const allQs = verify.match(/\{\s*q:\s*"/g);
console.log('\nTotal sales questions: ' + (allQs?.length || 0));
