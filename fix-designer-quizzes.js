// Fix: Add task12Quiz and task13Quiz to designer module and update allQuizzes
const fs = require('fs');
const fp = './sops/training/designer-training-data.js';
let c = fs.readFileSync(fp, 'utf8');

// Add task12Quiz before allQuizzes
const task12 = `const task12Quiz = [
    { q: "Client says 'I don't like the design' with no specifics. Your response:", o: ["'You approved the brief, so this is what you get'", "Ask specific questions: 'What specifically isn't working — the colors, layout, or style? Let me show you alternatives.'", "'I'll start over from scratch'", "'Design is subjective — this is objectively good'"], c: 1 },
    { q: "A client demands 20 revision rounds for a project scoped for 3. You should:", o: ["Do all 20 revisions to keep them happy", "Reference the scope agreement, offer consolidated feedback rounds, and quote additional revisions — boundaries protect your work", "Refuse any additional revisions", "Escalate to management immediately"], c: 1 },
    { q: "Receiving harsh feedback 'This looks amateur' — the professional response:", o: ["Take it personally and defend your work", "Stay calm, ask for specific examples, understand their vision, and propose targeted improvements — ego kills careers", "Agree and start over completely", "Ignore the feedback and deliver as-is"], c: 1 },
    { q: "A developer says your design is 'impossible to build.' You should:", o: ["Insist your design must be followed exactly", "Understand the technical constraints, collaborate on a feasible alternative that maintains design intent", "Simplify the entire design to be safe", "Tell the PM to handle it"], c: 1 },
    { q: "Client wants a design that EXACTLY copies a competitor store. The ethical response:", o: ["Copy it exactly — client is paying", "Explain legal/brand risks, then propose: 'Let me design something INSPIRED by elements you like but uniquely yours'", "Refuse the project entirely", "Copy it but change the colors"], c: 1 },
    { q: "Managing your own burnout: Working 12-hour design days for weeks leads to:", o: ["Diminishing quality — creative work suffers under exhaustion, sustainable pace produces better design", "Faster project delivery", "More portfolio pieces", "Client appreciation for your dedication"], c: 0 },
    { q: "When PM and client give contradicting design feedback:", o: ["Always follow the client over the PM", "Clarify with both parties together — misalignment causes revision loops, alignment prevents wasted work", "Follow whichever feedback you agree with", "Pick whichever option is easier to implement"], c: 1 },
    { q: "A design you're proud of gets rejected by data (low conversion in A/B test). You should:", o: ["Accept the data — design's purpose is conversion, not self-expression, iterate based on what numbers show", "Argue that the test was flawed", "Rerun the test hoping for different results", "Blame the copy or product for poor performance"], c: 0 },
    { q: "Client requests a red polka-dot background on a minimalist luxury store. You should:", o: ["Do exactly what they request", "Present your professional recommendation with mockups showing both options — educate don't dictate", "Refuse and explain why it's wrong", "Do it but warn them it won't look good"], c: 1 },
    { q: "Design critique from teammates should be:", o: ["Taken as personal attacks on your taste", "Ignored unless from senior designers", "Welcomed as growth opportunities — diverse perspectives catch blind spots you'll never see yourself", "Only accepted during formal review meetings"], c: 2 }
];`;

const task13 = `const task13Quiz = [
    { q: "AI tools like Midjourney in design workflow are best used for:", o: ["Replacing manual design work entirely", "Rapid ideation, mood board generation, and concept exploration — AI accelerates creative phase but humans finalize", "Creating final deliverable assets", "Only generating placeholder images"], c: 1 },
    { q: "AI-generated design assets risk:", o: ["Nothing — AI produces perfect results", "Copyright ambiguity, generic outputs lacking brand personality, and quality inconsistencies — always customize AI outputs", "Only legal issues, quality is fine", "Being detected by clients as AI-generated"], c: 1 },
    { q: "Using AI to generate color palettes is effective because:", o: ["AI chooses better colors than humans", "AI processes color theory rules instantly and suggests options — but designers validate against brand context", "AI palettes are always on-trend", "It eliminates the need for color psychology knowledge"], c: 1 },
    { q: "AI image upscaling tools help designers by:", o: ["Creating original images from scratch", "Replacing the need for professional photography", "Enhancing low-resolution client assets to usable quality — saving projects when clients provide tiny logos", "Automatically optimizing images for web"], c: 2 },
    { q: "The biggest risk of over-relying on AI design tools is:", o: ["They're too expensive for regular use", "Clients don't accept AI-assisted work", "AI tools will become obsolete", "Losing fundamental design skills — if you can't design without AI, you can't critically evaluate AI output"], c: 3 },
    { q: "AI-powered prototyping helps designers by:", o: ["Replacing Figma entirely", "Creating final production code", "Generating layout variations faster — explore more options in less time while maintaining creative control", "Running usability tests automatically"], c: 2 },
    { q: "Figma AI features should be:", o: ["Used blindly for maximum efficiency", "Treated as starting points — AI suggestions need human review for brand consistency and design intent", "Avoided — manual work is always better", "The primary design workflow"], c: 1 },
    { q: "AI can generate design copy but:", o: ["It should be published as final copy", "Lorem ipsum is safer — AI copy in mockups may accidentally be published, and content writers finalize copy", "AI copy is always better than writer copy", "Designers should write final copy using AI"], c: 1 },
    { q: "The AI-powered designer's competitive advantage is:", o: ["Speed — AI makes everything faster automatically", "Being able to replace entire design teams", "Knowing the most AI tools", "Combining AI efficiency with human creativity, brand understanding, and emotional intelligence"], c: 3 },
    { q: "AI design tools should follow the same QA process as manual design because:", o: ["AI output is always perfect", "QA is not needed for AI-assisted work", "AI makes subtle errors that only trained eyes catch in QA — wrong proportions, inconsistent spacing, off-brand elements", "AI self-corrects during generation"], c: 2 }
];`;

// Insert before allQuizzes
c = c.replace('const allQuizzes = [', task12 + '\n\n' + task13 + '\n\nconst allQuizzes = [');

// Update allQuizzes to include new quizzes
c = c.replace(
    /\[\] \/\* no quiz var for position 11 \*\/,\s*\[\] \/\* no quiz var for position 12 \*\//,
    'task12Quiz,\n    task13Quiz'
);

fs.writeFileSync(fp, c);
console.log('Designer task12Quiz and task13Quiz added!');
try { new Function(c); console.log('✅ Syntax valid'); } catch (e) { console.log('❌ Syntax error:', e.message); }

// Final distribution check
const all = [...c.matchAll(/,\s*c:\s*(\d)/g)];
const dist = { 0: 0, 1: 0, 2: 0, 3: 0 };
all.forEach(x => dist[x[1]]++);
const total = all.length;
const letters = 'ABCD';
console.log(`Designer (${total}q): ${Object.entries(dist).map(([k, v]) => `${letters[k]}:${v}(${Math.round(v / total * 100)}%)`).join(' ')}`);
