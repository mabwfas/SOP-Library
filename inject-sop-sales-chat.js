const fs = require('fs');

// ========================
// SALES MODULE (33% scenario → target ~50%)
// ========================
function fixSalesModule() {
    const fp = './sops/training/sales-training-data.js';
    let c = fs.readFileSync(fp, 'utf8');

    const sopQuestions = {
        task2Quiz: [
            { q: "At Digital Heroes, the sales mindset 'You Are Not Selling — You Are Solving' means:", o: ["Avoid discussing pricing until the client brings it up — talking about money makes the sales interaction feel transactional and uncomfortable", "Diagnose the client's actual business problem first, propose a tailored solution, then align pricing to the value delivered — every proposal must solve a specific pain point the client explained", "Give free consultations hoping the client will buy later — solving their problems for free builds trust that eventually converts to paid work", "Focus on your product features exclusively — if the product is good enough, clients will see the solution themselves without you spelling it out"], c: 1 },
            { q: "A prospect tells you 'we'll think about it and get back to you.' At Digital Heroes, the SOP-trained response is:", o: ["Say 'okay, take your time' and wait — following up is pushy and damages the relationship with potential clients", "Acknowledge their need for consideration, ask what specific aspects they need to evaluate, propose a concrete follow-up date and time — 'thinking about it' without a timeline means the deal dies silently", "Move on to the next prospect immediately — if they were serious, they would commit on the first call without needing extra time", "Send them a 50% discount immediately — price is always the reason clients hesitate and a discount removes the main objection"], c: 1 },
            { q: "The Digital Heroes 'Interconnected Chain' principle applies to sales because:", o: ["Sales closes deals and then it becomes someone else's problem to deliver what was promised to the client", "Every promise you make in sales becomes a deliverable for design, development, and PM teams — overselling breaks the chain and damages the company's reputation with cascading effects", "Sales operates independently from other departments since their KPIs are different from the rest of the team", "The chain only applies to production teams — sales is the starting point and doesn't connect to downstream work"], c: 1 },
        ],
        task3Quiz: [
            { q: "At Digital Heroes, 'Rejection is Information, Not Insult' means when a prospect says no:", o: ["Take it personally and work harder on the next pitch to prove your worth and avoid the pain of rejection again", "Analyze WHY they said no (budget? timing? trust? wrong fit?), document the objection pattern, and refine your approach for similar prospects — every no contains data for future yeses", "Mark the lead as dead and never contact them again since revisiting rejected prospects wastes valuable selling time", "Argue with the prospect about why they're wrong — if you can logically prove your solution is better, they'll change their mind"], c: 1 },
            { q: "The Digital Heroes sales SOP requires documentation of:", o: ["Only closed deals — tracking losses wastes time that could be spent on prospecting for new opportunities", "Every interaction logged: lead source, objections raised, pricing discussed, follow-up dates, and outcome — this data feeds the team's understanding of what works and what doesn't in our market", "Just the final contract value — management only cares about revenue numbers, not the process details behind them", "Nothing — good salespeople keep everything in their head and formal documentation slows down the fast-paced sales cycle"], c: 1 },
        ],
        task4Quiz: [
            { q: "A client asks for a Shopify store build at half the Digital Heroes standard rate. The SOP says:", o: ["Accept anyway — any revenue is better than no revenue when you need to hit your monthly sales targets", "Explain what the standard rate includes (QA, responsive design, speed optimization, revision rounds), show what gets cut at half price, and let them decide — never devalue the team's work by discounting without scope reduction", "Tell the client they can't afford quality work and end the conversation — cheap clients are always problematic", "Counter with 75% of the rate as a compromise — splitting the difference shows you're flexible and willing to negotiate"], c: 1 },
        ],
        task5Quiz: [
            { q: "At Digital Heroes, the 'Discipline Beats Motivation' principle for sales means:", o: ["Wait until you feel motivated to make calls — forcing yourself leads to low-quality conversations that waste both your time and the prospect's time", "Follow the daily prospecting SOP regardless of how you feel — 20 outreach contacts daily, EOD report logged, pipeline updated — consistency compounds while motivation fluctuates unpredictably", "Motivation is all you need — if you're passionate enough about the product, the sales will come naturally without any structured process", "Take mental health days whenever motivation dips — burned out salespeople perform worse than rested salespeople on every metric"], c: 1 },
            { q: "The Digital Heroes sales EOD report must include:", o: ["A one-word status update like 'good' or 'productive' is sufficient for daily accountability", "Leads contacted, meetings booked, proposals sent, deals closed, objections encountered, and next-day plan — accountability through transparency is how the team identifies patterns and improves collectively", "Only your total sales number — the daily details don't matter as long as monthly targets are met consistently", "Nothing if it was a slow day — reporting zero activity makes you look unproductive and creates a negative impression"], c: 1 },
        ],
    };

    for (const [quizName, newQs] of Object.entries(sopQuestions)) {
        const re = new RegExp(`const ${quizName} = \\[([\\s\\S]*?)\\n\\];`);
        const match = c.match(re);
        if (!match) { console.log('  ⚠️ Sales ' + quizName + ' not found'); continue; }

        const existingQs = [];
        const qRe = /\{\s*q:\s*"([^"]*)",\s*o:\s*\[([^\]]*)\],\s*c:\s*(\d)\s*\}/g;
        let m;
        while ((m = qRe.exec(match[1])) !== null) {
            const opts = m[2].match(/"([^"]*)"/g)?.map(s => s.slice(1, -1)) || [];
            existingQs.push({ q: m[1], o: opts, c: parseInt(m[3]) });
        }

        const merged = [...newQs, ...existingQs.slice(newQs.length)];
        const qStr = merged.map(q => {
            const opts = q.o.map(o => `"${o.replace(/"/g, '\\"')}"`).join(', ');
            return `    { q: "${q.q.replace(/"/g, '\\"')}", o: [${opts}], c: ${q.c} }`;
        }).join(',\n');

        c = c.replace(re, `const ${quizName} = [\n${qStr}\n];`);
        console.log('  ✅ Sales ' + quizName + ': replaced ' + newQs.length + ' of ' + existingQs.length);
    }

    fs.writeFileSync(fp, c);
    console.log('  Sales module updated');
}

// ========================
// CLIENT-CHAT MODULE (28% scenario → target ~50%)
// ========================
function fixClientChatModule() {
    const fp = './sops/training/client-chat-training-data.js';
    let c = fs.readFileSync(fp, 'utf8');

    const sopQuestions = {
        task2Quiz: [
            { q: "The Digital Heroes '60-Second Rule' for live chat means:", o: ["You have 60 seconds to close the sale — if you can't convert them in a minute, move on to the next visitor", "Every incoming chat must receive a first response within 60 seconds or less — research shows response time is the #1 factor in live chat conversion and waiting longer kills the deal", "Send a templated response within 60 seconds then take your time — the initial auto-reply counts as a response", "The 60-second rule is a guideline not a requirement — quality responses matter more than speed every time"], c: 1 },
            { q: "At Digital Heroes, when a chat visitor says 'just browsing,' your trained response is:", o: ["Close the chat — browsing visitors never convert and engaging them wastes your time on non-buyers", "Acknowledge their browsing with a relevant question like 'Are you looking for something specific?' to surface their hidden intent — 40% of 'just browsing' visitors convert when guided properly", "Send them a link to the FAQ page and move on to the next chat since they clearly don't need help right now", "Immediately pitch the most popular product — they're on the site so they're interested whether they admit it or not"], c: 1 },
            { q: "The Digital Heroes chat SOP distinguishes 'Robot' vs 'Human' responses. A 'Human' response means:", o: ["Use slang, emojis, and casual language to sound like a friend texting — formal language makes you sound like a bot", "Be conversational yet professional, acknowledge their specific situation, use their name, reference what they said — templated responses that ignore context destroy trust and feel robotic", "Copy-paste from the script library for every response — consistency matters more than personalization in live chat", "Write extremely long detailed responses showing you really understand their problem — length proves you're human"], c: 1 },
        ],
        task3Quiz: [
            { q: "A client on live chat says 'your competitor offers the same for cheaper.' At Digital Heroes, the SOP response is:", o: ["Match the competitor's price immediately — you can't afford to lose any deal over a price difference in live chat", "Acknowledge the comparison, ask what specific services they're comparing (scope, QA, revisions, support), highlight our differentiators — competing on price alone is a race to zero that devalues the work", "Tell them to go with the competitor if price is all they care about — cheap clients cause more problems than revenue", "Ignore the competitor mention and redirect to features — acknowledging competition shows insecurity in your offering"], c: 1 },
            { q: "The Digital Heroes 'Conversion Framework' for chat requires these steps in order:", o: ["Pitch → Close → Follow up — speed is everything so skip the discovery questions and go straight to selling", "Greet → Qualify → Discover needs → Present solution → Handle objections → Close → Handoff to PM — each step builds on the previous one and skipping steps drops conversion rates significantly", "Just answer whatever they ask — structured frameworks feel artificial and clients can tell you're following a script", "Close → Upsell → Cross-sell — every chat interaction should maximize immediate revenue above all other goals"], c: 1 },
        ],
        task4Quiz: [
            { q: "At Digital Heroes, handling an angry client in live chat requires:", o: ["Transfer to a manager immediately — frontline chat agents shouldn't handle complaints since they lack authority", "Acknowledge the frustration, apologize without blame, ask clarifying questions, propose a concrete resolution, escalate to PM if needed — turning an angry client into a satisfied one builds more loyalty than never having a problem", "Apologize and offer a full refund to make the problem go away — the cost of the refund is less than the cost of a bad review", "Wait for them to calm down before responding — responding to angry messages while they're emotional makes things worse"], c: 1 },
            { q: "When a chat visitor asks a technical question you can't answer, the Digital Heroes SOP says:", o: ["Make your best guess — giving a wrong answer is better than saying you don't know since it makes you look incompetent", "Be transparent: 'Great question — let me check with our technical team and get you an accurate answer within [timeframe].' Then actually follow up — honesty builds more trust than fake expertise", "Tell them to email support instead since chat isn't meant for technical questions that require detailed investigation", "Put them on hold indefinitely while you research — don't close the chat because they might not come back if you do"], c: 1 },
        ],
        task5Quiz: [
            { q: "The Digital Heroes chat analytics SOP requires tracking:", o: ["Only the number of chats handled per day — volume is the primary performance metric for chat agents", "Response time, conversation length, conversion rate, customer satisfaction score, handoff rate, and common objections — data drives improvement and identifies patterns in what works", "Nothing — chat is too fast-paced for analytics and the overhead of tracking metrics slows down response times", "Only closed deals — chats that don't convert immediately aren't worth analyzing since the visitor left anyway"], c: 1 },
        ],
    };

    for (const [quizName, newQs] of Object.entries(sopQuestions)) {
        const re = new RegExp(`const ${quizName} = \\[([\\s\\S]*?)\\n\\];`);
        const match = c.match(re);
        if (!match) { console.log('  ⚠️ Chat ' + quizName + ' not found'); continue; }

        const existingQs = [];
        const qRe = /\{\s*q:\s*"([^"]*)",\s*o:\s*\[([^\]]*)\],\s*c:\s*(\d)\s*\}/g;
        let m;
        while ((m = qRe.exec(match[1])) !== null) {
            const opts = m[2].match(/"([^"]*)"/g)?.map(s => s.slice(1, -1)) || [];
            existingQs.push({ q: m[1], o: opts, c: parseInt(m[3]) });
        }

        const merged = [...newQs, ...existingQs.slice(newQs.length)];
        const qStr = merged.map(q => {
            const opts = q.o.map(o => `"${o.replace(/"/g, '\\"')}"`).join(', ');
            return `    { q: "${q.q.replace(/"/g, '\\"')}", o: [${opts}], c: ${q.c} }`;
        }).join(',\n');

        c = c.replace(re, `const ${quizName} = [\n${qStr}\n];`);
        console.log('  ✅ Chat ' + quizName + ': replaced ' + newQs.length + ' of ' + existingQs.length);
    }

    fs.writeFileSync(fp, c);
    console.log('  Client-Chat module updated');
}

// Run
console.log('\n=== SALES MODULE ===');
fixSalesModule();
console.log('\n=== CLIENT-CHAT MODULE ===');
fixClientChatModule();
console.log('\n✅ Both modules updated with SOP-aligned questions');
