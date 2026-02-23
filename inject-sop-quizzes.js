// Rewrite quizzes for Content, Social Media, Designer, Developer, Full-Stack
// to include more SOP-aligned, scenario-based, company-specific questions
const fs = require('fs');

// ========================
// CONTENT MODULE (10% scenario → target ~50%)
// ========================
function fixContentModule() {
    const fp = './sops/training/content-training-data.js';
    let c = fs.readFileSync(fp, 'utf8');

    // Content module has 11 tasks (0,2-11), ~164 questions
    // We'll replace about 5 questions per quiz with SOP-aligned versions
    // The training content covers: Content Strategy, SEO, Shopify content, QA, client briefs

    const sopQuestions = {
        // task2Quiz - Content Strategy & Brand Voice
        task2Quiz: [
            { q: "A client sends you a brief saying 'make the content fun and catchy.' At Digital Heroes, your FIRST step is:", o: ["Start writing immediately using a fun casual tone based on your own interpretation of what the client means", "Request a detailed brand voice document, target audience profile, and competitor references before writing a single word — specificity prevents rework", "Use ChatGPT to generate 10 fun headline options and send them to the client to pick their favorite ones", "Copy the competitor's tone of voice since the client probably wants something similar to what's already working in their niche"], c: 1 },
            { q: "The Digital Heroes content SOP requires that EVERY piece of content goes through:", o: ["A quick client approval via WhatsApp message — speed of delivery matters more than formal review processes", "Writer self-review → QA check by a second team member → PM review → client approval — the interconnected chain means every link must hold", "Direct publication by the writer — trained content writers don't need additional review steps slowing them down", "AI grammar check only — tools like Grammarly replace the need for human review in a modern content workflow"], c: 1 },
            { q: "You're writing product descriptions for a Shopify store. The Digital Heroes standard requires:", o: ["Generic descriptions focused on features — 'This product is made of high-quality materials and comes in multiple sizes'", "SEO-optimized, benefit-driven copy that addresses customer pain points, includes relevant keywords, and follows the client's brand voice guide — every word must earn revenue", "Long-form descriptions over 500 words for every product to maximize SEO value regardless of the product type", "Copying manufacturer descriptions to save time — rewriting them adds no value when the product information is already accurate"], c: 1 },
            { q: "At Digital Heroes, the 'Interconnected Chain' principle means for content writers:", o: ["Your content exists in isolation — focus on quality writing and let other teams handle design, SEO, and development", "Your content directly affects conversion rates, SEO rankings, client satisfaction, and ultimately team revenue — one weak link breaks everything", "Content is the least important link in the chain since design and development drive most of the business value", "You should CC every team member on every piece of content to show you're being transparent about your work"], c: 1 },
            { q: "A client rejects your content draft saying 'this isn't what I wanted.' At Digital Heroes, the correct response is:", o: ["Argue that your content follows best practices and educate the client on why their feedback is wrong technically", "Acknowledge the gap, reference the original brief to identify the disconnect, request specific feedback, and revise — never blame the client even if the brief was vague", "Immediately rewrite everything from scratch without asking questions to show you can work fast under pressure", "Escalate to the PM and let them handle the client while you wait for new instructions about the direction"], c: 1 },
        ],
        // task3Quiz - SEO Content
        task3Quiz: [
            { q: "At Digital Heroes, keyword research before writing is:", o: ["Optional for experienced writers who already know what topics to cover based on their expertise and market knowledge", "Mandatory — every content piece must have a target keyword, search intent analysis, and competitor SERP review documented BEFORE writing begins", "Something the SEO team handles separately while content writers focus purely on creative and engaging copywriting", "Required only for blog posts — product descriptions and landing pages don't benefit from keyword research today"], c: 1 },
            { q: "A blog post you wrote ranks on page 3 of Google after two months. The Digital Heroes SOP says you should:", o: ["Wait longer — SEO takes 6-12 months and there's nothing more to do until then once the content is published", "Analyze search console data, update the content with better keyword targeting, improve internal linking, and add fresh sections — content maintenance is ongoing, not one-time delivery", "Delete and rewrite the entire post from scratch since page 3 rankings indicate fundamentally poor content quality", "Accept the ranking — not every post can reach page 1 and focusing on new content creation is more valuable"], c: 1 },
            { q: "The Digital Heroes quality standard for meta descriptions requires:", o: ["Auto-generated descriptions using Yoast defaults since they perform exactly the same as custom-written descriptions", "Custom-written, compelling meta descriptions under 155 characters that include the target keyword and a clear value proposition — every search result is a sales pitch", "Leaving them blank — Google generates better meta descriptions than humans by pulling relevant content from the page", "Copy-pasting the first paragraph of the article since that's what Google would display anyway in the search results"], c: 1 },
        ],
        // task4Quiz - Shopify Content
        task4Quiz: [
            { q: "When writing collection page descriptions for a Shopify client at Digital Heroes, you must:", o: ["Skip them entirely — nobody reads collection descriptions and they have zero impact on SEO or user experience", "Write keyword-rich, structured descriptions that help both SEO and customers understand the collection, following the approved content template from the style guide", "Write one generic description and duplicate it across all collections to save time and maintain consistency", "Write only for the largest collections — smaller collections with fewer products don't justify the effort"], c: 1 },
            { q: "A Shopify product has 10 variants. At Digital Heroes, the product description should:", o: ["Be identical for all variants since they share the same product page and only one description is needed per product", "Cover the core product value proposition, mention key variant differences, include size/material guides, and address common purchase objections — each description must reduce customer support tickets", "Focus only on the most popular variant since that's what most customers will buy based on the sales data", "Be minimal (2-3 sentences max) since long product descriptions reduce conversion rates on Shopify stores"], c: 1 },
        ],
        // task5Quiz - Client Communication 
        task5Quiz: [
            { q: "A client asks for 5 blog posts by tomorrow. At Digital Heroes, your response should be:", o: ["Say yes to everything — never push back on client deadlines since customer satisfaction is the top priority", "Assess the scope, communicate what's realistically deliverable at Digital Heroes quality standards, proposed a phased schedule, and get PM approval — rushing compromises the chain", "Silently work overtime without telling anyone to prove you're dedicated and can handle the pressure alone", "Decline and tell the client that 5 posts need at least two weeks since you can't compromise on quality ever"], c: 1 },
            { q: "The Digital Heroes EOD (End of Day) report for content writers must include:", o: ["Nothing — content writers don't need to submit EOD reports since their output is tracked through published content", "Tasks completed, content pieces in progress, any blockers, client feedback received, and next-day priorities — accountability through transparency is non-negotiable", "Only the number of words written that day since productivity is measured purely by word count output metrics", "A simple 'done for the day' message on Discord since detailed reports waste time that could be spent writing"], c: 1 },
        ],
    };

    // Replace questions in each quiz
    for (const [quizName, newQs] of Object.entries(sopQuestions)) {
        const re = new RegExp(`const ${quizName} = \\[([\\s\\S]*?)\\];`);
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

        // Replace first N questions with SOP-aligned ones
        const merged = [...newQs, ...existingQs.slice(newQs.length)];

        const qStr = merged.map(q => {
            const opts = q.o.map(o => `"${o.replace(/"/g, '\\"')}"`).join(', ');
            return `    { q: "${q.q.replace(/"/g, '\\"')}", o: [${opts}], c: ${q.c} }`;
        }).join(',\n');

        c = c.replace(re, `const ${quizName} = [\n${qStr}\n];`);
        console.log('  ✅ Content ' + quizName + ': replaced ' + newQs.length + ' of ' + existingQs.length);
    }

    fs.writeFileSync(fp, c);
    console.log('  Content module updated');
}

// ========================
// SOCIAL MEDIA MODULE (17% scenario → target ~50%)
// ========================
function fixSocialMediaModule() {
    const fp = './sops/training/social-media-training-data.js';
    let c = fs.readFileSync(fp, 'utf8');

    const sopQuestions = {
        task2Quiz: [
            { q: "At Digital Heroes, before posting any social media content for a client, the approval chain is:", o: ["Post immediately and fix mistakes later — social media moves fast and delays lose engagement opportunities", "Content creation → internal QA review → PM sign-off → client approval → scheduled posting — skipping any step is a zero-tolerance violation", "Send to the client directly via WhatsApp for quick verbal approval since formal processes slow down social media", "The social media manager has full authority to post without any approvals since they understand the brand best"], c: 1 },
            { q: "A client's competitor just went viral with a trend. The Digital Heroes SOP for reacting is:", o: ["Copy the competitor's post format immediately — being first matters more than originality in social media trends", "Analyze whether the trend aligns with the client's brand, propose a tailored version to the PM, get client approval, then execute — reactive content still follows the approval chain", "Ignore trends entirely — Digital Heroes focuses on planned content calendars and never deviates from the schedule", "Post a generic version using a template without client approval since speed is critical for trend-jacking success"], c: 1 },
            { q: "Your client's Instagram engagement dropped 40% this month. At Digital Heroes, you should:", o: ["Immediately increase posting frequency from 3x to 7x per week since more content always equals more engagement", "Analyze the data to identify causes (algorithm change, content type, timing, audience shift), present findings to PM with an action plan, and implement adjustments systematically", "Blame the Instagram algorithm changes since there's nothing you can control about platform engagement fluctuations", "Hide the drop from the client and focus on the metrics that are still positive to maintain client confidence"], c: 1 },
        ],
        task3Quiz: [
            { q: "The Digital Heroes content calendar process requires:", o: ["Posting spontaneously based on daily inspiration since authentic content performs better than planned content always", "Monthly calendar planning → client approval → weekly batch creation → daily scheduling with analytics review — systematic planning prevents last-minute scrambles", "Creating content only when the client requests it since proactive planning wastes resources on content that may not be needed", "Copying the previous month's calendar since consistency means repeating what worked before without changing anything"], c: 1 },
            { q: "At Digital Heroes, social media analytics reports for clients must include:", o: ["Only follower count growth since that's the primary metric clients care about and understand most easily", "KPIs tied to business goals (engagement rate, reach, conversions, link clicks), comparison to previous period, insights, and recommendations — data without actionable insights is useless", "Screenshots of the best-performing posts without any context or analysis since the results speak for themselves", "General industry benchmarks only — individual post performance data overwhelms clients and isn't actionable for them"], c: 1 },
        ],
        task4Quiz: [
            { q: "A client wants you to post controversial political content to drive engagement. At Digital Heroes, you should:", o: ["Post it if the client insists — the client is always right and it's their brand to manage however they choose", "Advise against it with documented reasoning about brand risk, propose alternative engagement strategies, escalate to PM if client insists — protecting the client's brand is our responsibility", "Post it but use their account only so Digital Heroes isn't associated with the content if there's any backlash", "Agree and schedule it for late night posting when fewer people will see it to minimize potential controversy"], c: 1 },
        ],
        task5Quiz: [
            { q: "The Digital Heroes SOP for handling negative comments on a client's social media is:", o: ["Delete all negative comments immediately — a clean feed is essential for maintaining brand image and trust online", "Respond professionally within 2 hours, acknowledge the concern, offer to resolve via DM, escalate to PM if it's a crisis — every negative comment is a public customer service opportunity", "Ignore negative comments — responding draws more attention to them and encourages other people to complain too", "Report and block everyone who leaves a negative comment since they're probably not real customers anyway"], c: 1 },
            { q: "A social media post goes live with a typo in the client's brand name. At Digital Heroes, the immediate action is:", o: ["Leave it up — editing or deleting hurts engagement metrics and most users won't notice a small spelling mistake", "Immediately take it down, fix the error, republish, document the incident in the EOD report, and review QA process to prevent recurrence — zero tolerance for quality failures", "Wait until end of day to fix it so you don't disrupt the content schedule that's already been approved", "Blame the design team for not catching it in the creative asset review before it reached the social team"], c: 1 },
        ],
    };

    for (const [quizName, newQs] of Object.entries(sopQuestions)) {
        const re = new RegExp(`const ${quizName} = \\[([\\s\\S]*?)\\];`);
        const match = c.match(re);
        if (!match) { console.log('  ⚠️ SM ' + quizName + ' not found'); continue; }

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
        console.log('  ✅ Social Media ' + quizName + ': replaced ' + newQs.length + ' of ' + existingQs.length);
    }

    fs.writeFileSync(fp, c);
    console.log('  Social Media module updated');
}

// ========================
// DESIGNER MODULE (19% scenario → target ~50%)
// ========================
function fixDesignerModule() {
    const fp = './sops/training/designer-training-data.js';
    let c = fs.readFileSync(fp, 'utf8');

    const sopQuestions = {
        task2Quiz: [
            { q: "At Digital Heroes, the '5 Laws of Premium Design' exist because:", o: ["They're industry-standard rules that every agency follows to maintain basic design quality across projects", "Premium design directly correlates to client retention, higher pricing, and agency revenue — a cheap-looking design destroys trust and costs the company $50,000/day in potential revenue", "They're optional guidelines for senior designers while junior designers can follow their own design instincts", "They only apply to Shopify designs — non-Shopify projects at Digital Heroes follow different design standards"], c: 1 },
            { q: "A client says 'I want my website to look like Apple's.' At Digital Heroes, your response process is:", o: ["Copy Apple's design pixel-for-pixel since the client explicitly asked for it and that's the fastest path to approval", "Analyze what specifically appeals to them (minimalism, typography, spacing), propose a design that captures that essence while being unique to their brand, document rationale, and get PM approval before proceeding", "Tell the client that copying Apple isn't possible and they need to lower their expectations for their budget", "Use an Apple-inspired Shopify theme template without modifications since it already captures the aesthetic they want"], c: 1 },
        ],
        task3Quiz: [
            { q: "The Digital Heroes design QA checklist before client handoff requires:", o: ["A quick visual scan on your own laptop — if it looks good on your screen, it'll look good on all devices", "Full responsive testing (desktop, tablet, mobile), cross-browser checks, accessibility audit, performance impact review, and PM sign-off — the 60-point QA gate is non-negotiable", "Only mobile testing since 80% of traffic is mobile and desktop users can tolerate minor design inconsistencies", "The developer handles QA after receiving the design files — design QA is not the designer's responsibility"], c: 1 },
            { q: "At Digital Heroes, design iterations for a client are:", o: ["Unlimited — keep revising until the client is happy, even if it takes 20 rounds since client satisfaction is absolute", "Structured: 2-3 rounds are standard, with clear scope defined upfront. Additional rounds require PM approval and scope discussion — unlimited revisions kill profitability", "Not allowed — the first design presented should be final since you're a professional who should get it right immediately", "Handled by a different designer each time to bring fresh perspective and reduce individual bias in the process"], c: 1 },
        ],
        task4Quiz: [
            { q: "Your Figma design uses a custom font the client loves, but it costs $500/year. At Digital Heroes, you should:", o: ["Use the font and let the client discover the cost later — the design approval is more important than font licensing details", "Present the font cost to the PM upfront, propose a comparable free alternative (Google Fonts), and let the client make an informed decision — hidden costs erode client trust", "Always use free fonts only — Digital Heroes never recommends paid fonts regardless of design quality impact", "Download the font from a free piracy site since the client shouldn't have to pay for fonts in their project budget"], c: 1 },
        ],
        task5Quiz: [
            { q: "A developer implements your design but the spacing and colors don't match the Figma file. At Digital Heroes, the process is:", o: ["Accept the developer's version — pixel-perfect implementation isn't realistic and small differences don't matter", "Document the discrepancies with screenshots comparing Figma vs live, submit a QA report via the standard process, and work with the developer to fix deviations — the interconnected chain requires each link to deliver precisely", "Publicly call out the developer in the team Discord channel so everyone knows who is responsible for the mismatch", "Fix it yourself directly in the code since waiting for the developer to fix design issues takes too long"], c: 1 },
            { q: "At Digital Heroes, the design handoff to developers must include:", o: ["Just the Figma link — developers should figure out spacing, colors, and interactions from the visual design alone", "Exported assets, component specifications, interaction notes, responsive breakpoint guidelines, and a walkthrough meeting — incomplete handoffs create the exact bugs QA catches later", "Only the mobile mockup — developers can extrapolate the desktop version from the mobile design since they should know responsive principles", "Screenshots in an email — Figma access is only for designers and developers don't need to inspect design files"], c: 1 },
        ],
    };

    for (const [quizName, newQs] of Object.entries(sopQuestions)) {
        const re = new RegExp(`const ${quizName} = \\[([\\s\\S]*?)\\];`);
        const match = c.match(re);
        if (!match) { console.log('  ⚠️ Designer ' + quizName + ' not found'); continue; }

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
        console.log('  ✅ Designer ' + quizName + ': replaced ' + newQs.length + ' of ' + existingQs.length);
    }

    fs.writeFileSync(fp, c);
    console.log('  Designer module updated');
}

// ========================
// DEVELOPER MODULE (19% scenario → target ~50%)
// ========================
function fixDeveloperModule() {
    const fp = './sops/training/developer-training-data.js';
    let c = fs.readFileSync(fp, 'utf8');

    const sopQuestions = {
        task2Quiz: [
            { q: "At Digital Heroes, the 'Revenue Developer' mindset means:", o: ["Developers should focus on learning sales skills since coding alone doesn't generate revenue for the company", "Every line of code directly impacts client revenue — a slow page, a broken checkout, or a bad UX costs the client money and costs Digital Heroes its reputation and future contracts", "Developers should track their personal billable hours and maximize the number of hours billed to each client", "Revenue isn't a developer's concern — PMs and sales handle revenue while developers only focus on code quality"], c: 1 },
            { q: "The Digital Heroes 'Zero Tolerance for Bugs' principle means:", o: ["All bugs are treated equally regardless of severity since even minor visual bugs are termination-worthy offenses", "Critical bugs (broken checkout, data loss, security) must be fixed before ANY handoff — shipping known Critical bugs violates the SOP and breaks the quality chain for the entire team", "Zero bugs is the literal expectation — any developer who introduces a single bug shows they aren't qualified for the role", "Only QA team members are responsible for finding bugs — developers who self-test are wasting billable time"], c: 1 },
        ],
        task3Quiz: [
            { q: "Before starting development on any Shopify project at Digital Heroes, the required process is:", o: ["Jump straight into coding — the best way to understand a project is to start building it immediately and iterate", "Review the design files, understand the scope document, set up staging, and get PM confirmation on the tech stack — plan twice, code once is the company standard", "Wait for the client to explain every requirement in a call since written briefs never capture the full picture", "Start with the homepage only and wait for feedback before building additional pages to avoid unnecessary rework"], c: 1 },
            { q: "A client asks you to install a premium Shopify app directly in a live store. At Digital Heroes, the SOP requires:", o: ["Install it immediately since the client is paying and you should fulfill their request without delay or pushback", "Install on staging first, test for theme conflicts and speed impact, document findings, get PM approval, then deploy to production — untested installs on live stores are a fireable offense", "Refuse since developers don't handle app installations — that's the PM's responsibility in the project workflow", "Install it but disable it until the next sprint cycle when there's time allocated for proper testing and review"], c: 1 },
        ],
        task4Quiz: [
            { q: "The Digital Heroes speed optimization standard for Shopify stores requires:", o: ["A PageSpeed score above 50 is acceptable — Shopify themes are inherently slow and clients understand this limitation", "Target 90+ mobile score with documented optimizations: lazy loading, code splitting, image compression, and app audit — every millisecond of load time directly impacts the client's conversion rate", "Speed optimization is a separate billable service — developers don't optimize speed unless the client pays extra", "Use a fast theme template and don't modify it — custom code always makes Shopify stores slower regardless"], c: 1 },
        ],
        task5Quiz: [
            { q: "At Digital Heroes, when you encounter a bug during development that you didn't cause, the response is:", o: ["Ignore it since you're only responsible for your own assigned tickets and someone else introduced that bug", "Document it, fix it if within your scope, or report it through the QA process with steps to reproduce — the interconnected chain means bugs anywhere become everyone's problem", "Fix it silently without telling anyone since documenting it might make a teammate look bad to management", "Leave a comment in the code saying 'not my bug' so future developers know who's responsible for the issue"], c: 1 },
            { q: "Your Shopify development task is taking longer than the estimated hours. At Digital Heroes, the SOP says:", o: ["Work unpaid overtime to hit the original estimate since going over budget is your personal failure as a developer", "Communicate proactively to the PM BEFORE the deadline, explain the blocker, propose solutions, and get updated approval — silent deadline misses are worse than early re-estimation", "Submit the work incomplete at the deadline and let QA catch the missing parts during their review process", "Tell the client directly that the PM's estimate was wrong and negotiate more hours without PM involvement"], c: 1 },
        ],
        task9Quiz: [
            { q: "The Digital Heroes 60-Point QA Checklist for Shopify sites includes:", o: ["Only functionality testing — visual design review is the designer's job and not part of developer QA responsibility", "Cross-browser testing, mobile responsiveness, checkout flow, page speed, SEO tags, accessibility, console errors, and content accuracy — every point exists because a past project failed on that exact item", "Only the 5 most critical checks — completing all 60 points would take too long and isn't practical for most projects", "Whatever the developer decides to test based on their experience — the checklist is a suggestion not a requirement"], c: 1 },
        ],
        task11Quiz: [
            { q: "A client's Shopify site goes down on a Saturday evening. The Digital Heroes crisis response protocol is:", o: ["Wait until Monday — weekend issues are handled during business hours only as per the standard work schedule", "Respond within 15 minutes, assess severity, communicate status to PM immediately, implement hotfix, document the incident — downtime means lost revenue and our SLA doesn't have weekends off", "Post in the general Discord channel and wait for any available developer to volunteer to fix it when they can", "Tell the client to contact Shopify support directly since hosting infrastructure issues aren't the developer's scope"], c: 1 },
        ],
    };

    for (const [quizName, newQs] of Object.entries(sopQuestions)) {
        const re = new RegExp(`const ${quizName} = \\[([\\s\\S]*?)\\];`);
        const match = c.match(re);
        if (!match) { console.log('  ⚠️ Developer ' + quizName + ' not found'); continue; }

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
        console.log('  ✅ Developer ' + quizName + ': replaced ' + newQs.length + ' of ' + existingQs.length);
    }

    fs.writeFileSync(fp, c);
    console.log('  Developer module updated');
}

// ========================
// FULL-STACK PART 2 (5% scenario → target ~40%)
// ========================
function fixFullStackModule() {
    const fp = './sops/training/fullstack-training-data-part2.js';
    let c = fs.readFileSync(fp, 'utf8');

    const sopQuestions = {
        task1Quiz: [
            { q: "At Digital Heroes, a full-stack developer joining a new Shopify project must FIRST:", o: ["Start coding immediately — full-stack developers have enough experience to figure out the project requirements as they build", "Review the project brief, design files, scope document, existing codebase, and QA standards before writing a single line — plan twice, code once is non-negotiable company policy", "Set up their own development environment preferences since each developer works best with a personalized setup", "Ask the PM to explain everything verbally since reading documentation takes too long for efficient onboarding"], c: 1 },
        ],
        task2Quiz: [
            { q: "The Digital Heroes staging environment process for full-stack projects requires:", o: ["Deploy directly to production — staging is optional for experienced full-stack developers who rarely make mistakes", "Separate staging environment that mirrors production → all features tested and PM-approved on staging → only then deploy to production — untested production deploys are a termination-level offense", "Use the client's live site as staging since creating a separate environment doubles the hosting costs unnecessarily", "Staging is only needed for frontend changes — backend and API changes can go directly to production safely"], c: 1 },
        ],
        task3Quiz: [
            { q: "A client requests a custom feature that could break existing Shopify functionality. At Digital Heroes, the SOP requires:", o: ["Build it as requested — the client is paying and we implement what they ask without questioning their decisions", "Document the risk, propose a safer alternative, get PM approval and client sign-off on the risk before proceeding — protecting the client from their own risky requests is part of professional service", "Refuse to build it entirely — risky features should never be attempted regardless of what the client wants", "Build it on production with a plan to rollback if it breaks — testing risky features on staging wastes time"], c: 1 },
        ],
        task5Quiz: [
            { q: "At Digital Heroes, code review before merging to production is:", o: ["Optional for senior developers who have proven their code quality over time and earned the trust of the team", "Mandatory for ALL developers regardless of seniority — a second pair of eyes catches issues the author is blind to, and the interconnected chain means one bad merge affects the entire team", "Only required for junior developers during their first 3 months while they're still learning company standards", "The responsibility of the QA team — developers review each other's work only when QA is unavailable for review"], c: 1 },
        ],
        task7Quiz: [
            { q: "A full-stack project is running behind schedule. The Digital Heroes response is:", o: ["Cut quality corners to meet the deadline — late delivery is worse than delivering with known issues and bugs", "Communicate the delay to PM early, identify what can be descoped vs delayed, never sacrifice the QA checklist — a late but quality delivery is always better than an on-time broken delivery at Digital Heroes", "Tell the client the deadline needs to be postponed and let them know it's because the scope was underestimated", "Work 16-hour days without telling anyone since asking for help shows you can't handle the workload assigned"], c: 1 },
        ],
        task9Quiz: [
            { q: "At Digital Heroes, the full-stack developer's daily standup/EOD report must cover:", o: ["Just a general status update — 'making progress' is sufficient for daily communication with the team", "Tasks completed, blockers encountered, time spent vs estimated, tasks planned for next day, and any scope concerns — detailed accountability prevents projects from silently going off-track", "Only blockers — if there are no blockers, no report is needed since things are going as planned by default", "The PM tracks progress independently — developers reporting their own status creates unnecessary overhead work"], c: 1 },
        ],
    };

    for (const [quizName, newQs] of Object.entries(sopQuestions)) {
        const re = new RegExp(`const ${quizName} = \\[([\\s\\S]*?)\\];`);
        const match = c.match(re);
        if (!match) { console.log('  ⚠️ Full-Stack ' + quizName + ' not found'); continue; }

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
        console.log('  ✅ Full-Stack ' + quizName + ': replaced ' + newQs.length + ' of ' + existingQs.length);
    }

    fs.writeFileSync(fp, c);
    console.log('  Full-Stack P2 module updated');
}

// Run all
console.log('\n=== CONTENT MODULE ===');
fixContentModule();
console.log('\n=== SOCIAL MEDIA MODULE ===');
fixSocialMediaModule();
console.log('\n=== DESIGNER MODULE ===');
fixDesignerModule();
console.log('\n=== DEVELOPER MODULE ===');
fixDeveloperModule();
console.log('\n=== FULL-STACK P2 MODULE ===');
fixFullStackModule();

console.log('\n✅ All 5 modules updated with SOP-aligned questions');
