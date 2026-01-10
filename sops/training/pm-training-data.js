// Project Manager Training Data
// Complete training content for PM certification
// UPGRADED: Visuals, Study Guides, and Expanded Lessons
// EDITION: DEEP DIVE (Very Long & Detailed)

const trainingTasks = [
    {
        id: 1,
        title: "PM Mindset",
        description: "Leadership & ownership fundamentals",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 45 Minutes",
            "🧠 Deep Dive: The Psychology of Ownership",
            "🚫 The 'Broken Telephone' Effect in Development",
            "🛡️ How to be a Shield, not a Funnel",
            "🔑 Key Concept: 'Extreme Ownership'"
        ]
    },
    {
        id: 2,
        title: "Company Ecosystem",
        description: "Deep dive into Digital Heroes structure",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 40 Minutes",
            "🏢 The 3-Arm Structure: Media, Agency, Talent",
            "💎 Product Deep Dive: Premium vs Enterprise Specs",
            "🔄 The Flywheel: How YouTube feeds the Agency"
        ]
    },
    {
        id: 3,
        title: "Advanced Planning",
        description: "Scoping, timelines & critical path",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 60 Minutes",
            "🔄 The SDLC (Software Development Life Cycle) at DH",
            "📋 The 'Perfect Kickoff' Protocol",
            "⏰ Critical Path Analysis for Timelines",
            "📝 Writing Bulletproof Scopes"
        ]
    },
    {
        id: 4,
        title: "High-Performance Teams",
        description: "Delegation & psychology",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 50 Minutes",
            "👥 Situational Leadership in Delegating",
            "📊 Running Effective Squad Syncs (Standups)",
            "🧠 Identifying Burnout & Blocker Patterns",
            "🚀 Motivating Remote Developers"
        ]
    },
    {
        id: 5,
        title: "Elite Client Relations",
        description: "Stakeholder mastery",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 55 Minutes",
            "🔺 The Pyramid of Communication Trust",
            "💬 NLP Techniques for De-escalation",
            "⚠️ The Art of Saying 'No' (Scope Defense)",
            "📧 Writing Executive Summaries"
        ]
    },
    {
        id: 6,
        title: "Tools Mastery",
        description: "ClickUp & workflow architecture",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 45 Minutes",
            "🔧 ClickUp Power User Features (Dependencies, Automations)",
            "📋 The 'Single Source of Truth' Philosophy",
            "📹 Async Video Communication (Loom Mastery)",
            "📂 Asset Management Hygiene"
        ]
    },
    {
        id: 7,
        title: "Advanced Risk Ops",
        description: "Mitigation & crisis management",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 50 Minutes",
            "🔥 The Risk Impact/Probability Matrix",
            "🕵️‍♀️ Spotting 'Silent Failures' Early",
            "🛡️ Legal & Scope Protection Protocols",
            "🚨 The Red Flag Escalation Path"
        ]
    },
    {
        id: 8,
        title: "Zero-Defect Quality",
        description: "QA methodologies",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 45 Minutes",
            "✅ Functional vs Visual QA",
            "📱 Cross-Device Testing Matrices",
            "⚡ Performance Budgeting (PageSpeed)",
            "👀 The 'Pixel Perfect' Eye Training"
        ]
    },
    {
        id: 9,
        title: "Crisis Simulations",
        description: "Complex problem solving",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 60 Minutes",
            "🧠 Simulation 1: The 'Ghosting' Client",
            "🧠 Simulation 2: The Major Bug Launch",
            "🧠 Simulation 3: The Talent Meltdown",
            "📝 Drafting Crisis Comms"
        ]
    },
    {
        id: 10,
        title: "Board Certification",
        description: "Final comprehensive exam",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 90 Minutes",
            "📖 Comprehensive Review of Tasks 1-9",
            "🏆 The 'Bar Raiser' exam standard",
            "🎓 Certification requirement: 20/20 Score"
        ]
    }
];

const task1Content = `
<h2>📚 PART 1: THE PM MINDSET (DEEP DIVE)</h2>

<div class="content-section">
    <h3>1. The Core Philosophy: "Hub, Not Messenger"</h3>
    <p>Most junior Project Managers fail because they view themselves as "messengers." They take an email from a client, forward it to a developer, wait for a reply, and forward it back. <strong>This is a failure mode.</strong> A conveyor belt adds no value; it only adds delay.</p>
    
    <div style="background: rgba(20, 184, 166, 0.1); padding: 25px; border-radius: 12px; border-left: 5px solid #14B8A6; margin: 25px 0;">
        <h4 style="margin-top: 0; color: #14B8A6;">🚫 The Messenger (Bad PM)</h4>
        <p><em>Client says: "The banner looks wrong."</em><br>
        <em>PM says to Dev: "Client says the banner looks wrong. Please fix."</em><br>
        <em>Dev says: "Wrong how?"</em><br>
        <em>PM to Client: "Can you be more specific?"</em></p>
        <p><strong>Result:</strong> 2 days lost, frustrated team, annoyed client.</p>
    </div>

    <div style="background: rgba(16, 185, 129, 0.1); padding: 25px; border-radius: 12px; border-left: 5px solid #10B981; margin: 25px 0;">
        <h4 style="margin-top: 0; color: #10B981;">✅ The Hub (Elite PM)</h4>
        <p><em>Client says: "The banner looks wrong."</em><br>
        <em>PM Action:</em> Opens the site. Checks mobile and desktop. Compares against the Figma file. Notices the padding is off by 20px on mobile.<br>
        <em>PM to Dev:</em> "The banner padding on mobile is 10px, but the design calls for 30px. Please correct this to match the Figma mock (Link). Priority: High."</p>
        <p><strong>Result:</strong> Fixed in 1 hour. Client never asked for specifics. Dev has clear instructions. You added <strong>Translation Value</strong>.</p>
    </div>
</div>

<div class="content-section">
    <h3>2. The Four Pillars of Digital Heroes PMs</h3>
    <p>Your role rests on four non-negotiable pillars. If one fails, the project collapses.</p>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 30px;">
        <div style="background: rgba(255,255,255,0.03); padding: 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);">
            <div style="font-size: 2em; margin-bottom: 15px;">🔗</div>
            <h4 style="margin: 0 0 10px 0; color: #fff;">1. Integration</h4>
            <p style="font-size: 0.95em; color: #CBD5E1;">You connect the dots. You know that a delay in Copywriting affects Design, which affects Dev, which affects Launch. You see the <strong>Dependency Chain</strong> before anyone else.</p>
        </div>
        <div style="background: rgba(255,255,255,0.03); padding: 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);">
            <div style="font-size: 2em; margin-bottom: 15px;">🛡️</div>
            <h4 style="margin: 0 0 10px 0; color: #fff;">2. Protection</h4>
            <p style="font-size: 0.95em; color: #CBD5E1;">You protect the team from chaos. You filter client anxiety, vague requests, and scope creep. You give the developers <strong>Deep Work</strong> time by handling the noise.</p>
        </div>
        <div style="background: rgba(255,255,255,0.03); padding: 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);">
            <div style="font-size: 2em; margin-bottom: 15px;">🔍</div>
            <h4 style="margin: 0 0 10px 0; color: #fff;">3. Precision</h4>
            <p style="font-size: 0.95em; color: #CBD5E1;">Vagueness is your enemy. "Make it pop" is banned vocabulary. You translate feelings into pixels, code, and hex codes.</p>
        </div>
        <div style="background: rgba(255,255,255,0.03); padding: 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);">
            <div style="font-size: 2em; margin-bottom: 15px;">🚀</div>
            <h4 style="margin: 0 0 10px 0; color: #fff;">4. Velocity</h4>
            <p style="font-size: 0.95em; color: #CBD5E1;">You are the engine's oil. You spot blockers (access issues, missing assets) days before they become problems. You ensure <strong>Zero Friction</strong>.</p>
        </div>
    </div>
</div>

<div class="content-section">
    <h3>3. Extreme Ownership</h3>
    <p>This is the hardest concept to master. <strong>Everything that happens on your project is your fault.</strong></p>
    <ul>
        <li>If the dev ships a bug? <strong>Your fault</strong> (You didn't QA it).</li>
        <li>If the client is angry about a delay? <strong>Your fault</strong> (You didn't manage expectations).</li>
        <li>If the designer used the wrong logo? <strong>Your fault</strong> (You didn't provide clear assets).</li>
    </ul>
    <p>When you accept this, you stop making excuses ("The dev was slow") and start building systems ("I need to check in with the dev 2 days earlier"). This mindset shift is what separates a $50k PM from a $150k PM.</p>
</div>

<div class="content-section">
    <h3>🚀 Reading Assessment</h3>
    <div class="highlight-box">
        <strong>Review Concept: The "Broken Telephone"</strong>
        <p>In the quiz, you will be tested on your ability to "Translate" rather than "Transmit" information. Remember the example of the banner padding. The goal is always to provide <strong>Actionable Intelligence</strong> to your team.</p>
    </div>
    <ul>
        <li>📝 10 Scenario-based questions</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task2Content = `
<h2>📚 TASK 2: DIGITAL HEROES ECOSYSTEM (DEEP DIVE)</h2>

<div class="content-section">
    <h3>1. The "Flywheel" Business Model</h3>
    <p>Understanding where you fit in the machine is crucial. Digital Heroes is not just an agency; it's a content-driven ecosystem.</p>
    
    <div style="background: rgba(0,0,0,0.2); padding: 30px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.05);">
        <h4 style="margin-top: 0;">🔃 The Cycle</h4>
        <ol style="line-height: 2;">
            <li><strong>Media Arm (Top of Funnel):</strong> Our YouTube channels generate millions of views. This builds high trust and authority.</li>
            <li><strong>Inbound Leads:</strong> Viewers become leads. They don't need "selling" because they are already fans. They want "The Digital Heroes Way."</li>
            <li><strong>Agency Arm (You are Here):</strong> We execute the services promised in the content. We must live up to the "Hero" brand. Quality cannot drop.</li>
            <li><strong>Talent Arm:</strong> We recruit the best global talent to fulfill the work.</li>
        </ol>
    </div>
</div>

<div class="content-section">
    <h3>2. Detailed Package Specifications</h3>
    <p>You must memorize these. Confusion here leads to "Scope Creep" nightmares later.</p>
    
    <div style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: separate; border-spacing: 0; min-width: 600px;">
            <thead>
                <tr style="background: rgba(255,255,255,0.05);">
                    <th style="padding: 15px; text-align: left; border-top-left-radius: 10px;">Feature</th>
                    <th style="padding: 15px; text-align: left; color: #14B8A6;">💎 Premium ($1,200)</th>
                    <th style="padding: 15px; text-align: left; color: #F59E0B; border-top-right-radius: 10px;">👑 Enterprise ($1,800)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);"><strong>Page Count</strong></td>
                    <td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Up to 5 Pages</td>
                    <td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">10+ Pages (Custom)</td>
                </tr>
                <tr>
                    <td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);"><strong>Product Upload</strong></td>
                    <td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Up to 25 Products</td>
                    <td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">100+ Products (Bulk CSV)</td>
                </tr>
                <tr>
                    <td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);"><strong>Design Level</strong></td>
                    <td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Theme Customization</td>
                    <td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Fully Custom Code / Liquid</td>
                </tr>
                <tr>
                    <td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);"><strong>Apps Integration</strong></td>
                    <td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Standard (Reviews, Email)</td>
                    <td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Advanced (Subscriptions, Bundles)</td>
                </tr>
                <tr>
                    <td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);"><strong>Post-Launch Support</strong></td>
                    <td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">30 Days</td>
                    <td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">60 Days + Priority</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div class="content-section">
    <h3>3. Organization Structure & Escalation</h3>
    <p>Knowing who to call is half the battle.</p>
    <ul>
        <li><strong>Managing Director (Anurag):</strong> Critical escalations only (Legal threats, refund demands > $5k). Do not disturb for minor issues.</li>
        <li><strong>Head of Operations:</strong> Process blockers, resource allocation (need more devs), timeline crises.</li>
        <li><strong>Lead Developer:</strong> Technical feasibility questions ("Can we build this?"), code review.</li>
        <li><strong>Lead Designer:</strong> Visual direction, UI/UX disputes.</li>
        <li><strong>You (PM):</strong> Everything else. You are the CEO of your project.</li>
    </ul>
</div>

<div class="content-section">
    <h3>🚀 Readiness Check</h3>
    <ul>
        <li>📝 10 questions on Pricing, Specs, and Org Chart</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task3Content = `
<h2>📚 TASK 3: ADVANCED PROJECT PLANNING</h2>

<div class="content-section">
    <h3>1. The Anatomy of a Scope Document</h3>
    <p>A "Scope of Work" (SOW) is your legal shield. If it's not in the SOW, it doesn't exist.</p>
    
    <div class="highlight-box">
        <strong>⚠️ The "Vague Language" Trap</strong>
        <p>Never write: "Create a contact page."</p>
        <p><strong>Client hears:</strong> "Create a contact page with a map, a custom form with logic, multiple office locations, and live chat integration."</p>
        <p><strong>Dev hears:</strong> "Basic HTML form with Name, Email, Message."</p>
        <p><strong>Result:</strong> Disappointment.</p>
        <br>
        <strong>✅ Correct Writing:</strong>
        <p>"Create a Contact Us page containing: 1. Standard submission form (Name, Email, Body), 2. Google Maps embed (API key provided by client), 3. Static text area for address."</p>
    </div>
</div>

<div class="content-section">
    <h3>2. Critical Path Analysis</h3>
    <p>The "Critical Path" is the sequence of tasks that determines the project duration. If a task on the critical path is delayed, the <strong>entire project</strong> is delayed.</p>
    
    <div style="display: flex; gap: 20px; flex-wrap: wrap; margin-top: 20px;">
        <div style="flex: 1; min-width: 250px; background: rgba(255,255,255,0.05); padding: 20px; border-radius: 12px;">
            <h4>⛔ The Blocker: Client Assets</h4>
            <p>We cannot design without a logo. We cannot build product pages without product images. <strong>Collecting Assets</strong> is usually the start of the critical path.</p>
        </div>
        <div style="flex: 1; min-width: 250px; background: rgba(255,255,255,0.05); padding: 20px; border-radius: 12px;">
            <h4>⛔ The Blocker: App Configuration</h4>
            <p>Some apps (e.g., Subscriptions) require banking approval. This can take weeks. Start this process on Day 1, even if development happens on Day 20.</p>
        </div>
    </div>
</div>

<div class="content-section">
    <h3>3. The Kickoff Ritual</h3>
    <p>The first 48 hours determine the success of the next 4 weeks.</p>
    <ol>
        <li><strong>The "Welcome" Email:</strong> Send immediately upon signing. Includes the "Homework" (Onboarding Form link).</li>
        <li><strong>Asset Audit:</strong> Do not just file the assets. Open them. Is the logo high-res? Do the product CSVs open? Flag issues NOW, not when the dev needs them.</li>
        <li><strong>Internal Sync:</strong> Brief your team. "This client is strictly corporate." "This client likes playful emoji usage." Set the vibe.</li>
        <li><strong>Timeline Commitment:</strong> Send the proposed dates. "Design by Friday. Dev by Next Wednesday." Lock it in.</li>
    </ol>
</div>

<div class="content-section">
    <h3>🚀 Readiness Check</h3>
    <ul>
        <li>📝 10 questions on Scoping, Critical Paths, and Kickoffs</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task4Content = `
<h2>📚 TASK 4: HIGH-PERFORMANCE TEAM MANAGEMENT</h2>

<div class="content-section">
    <h3>1. Situational Leadership</h3>
    <p>Not all team members are equal. You manage a Senior Dev differently than a Junior Designer.</p>
    <ul>
        <li><strong>The Junior (Directive Style):</strong> Needs specific instructions. "Please place the logo 20px from the left." Check in daily.</li>
        <li><strong>The Senior (Delegative Style):</strong> Needs outcomes. "We need a sticky header that converts. Use your best judgment." Check in weekly. interfering micromanaging annoys them.</li>
        <li><strong>The Contractor (Transactional Style):</strong> Needs clear SOW. "Doing X for $Y by Z date."</li>
    </ul>
</div>

<div class="content-section">
    <h3>2. Identifying "Silent Blockers"</h3>
    <p>Developers are optimists. They will say "It's going great" until the minute the deadline is missed. You must learn to speak "Dev."</p>
    
    <div class="warning-box">
        <strong>🚩 Red Flag Phrases to Watch For:</strong>
        <ul>
            <li>"I'm just refactoring a bit..." (Code for: The code is a mess)</li>
            <li>"It works on my machine." (Code for: I haven't tested it anywhere else)</li>
            <li>"I'm waiting for access." (Why are you waiting? Why didn't you ping me 4 hours ago?)</li>
            <li>"Almost done." (The most dangerous phrase in PM history. 90% done is 0% done.)</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>3. The Daily Standup (Async)</h3>
    <p>We work globally. We don't do hour-long Zoom calls daily. We use Slack.</p>
    <p><strong>The Format:</strong></p>
    <blockquote style="background: rgba(255,255,255,0.1); padding: 15px; border-left: 4px solid #fff; margin: 10px 0;">
        <strong>Yesterday:</strong> Completed Homepage Hero section.<br>
        <strong>Today:</strong> Working on Footer and Mobile Menu.<br>
        <strong>Blockers:</strong> Need the high-res social icons from client.
    </blockquote>
    <p>Your job is to scan these. If you see a Blocker, you drop everything to fix it. That is your primary purpose.</p>
</div>

<div class="content-section">
    <h3>🚀 Readiness Check</h3>
    <ul>
        <li>📝 10 questions on Leadership Styles and Team Comms</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task5Content = `
<h2>📚 TASK 5: ELITE CLIENT RELATIONS & PSYCHOLOGY</h2>

<div class="content-section">
    <h3>1. The Psychology of "Ghosting"</h3>
    <p>Clients ghost when they are overwhelmed or confused. They don't disappear because they don't care; they disappear because the next step is unclear.</p>
    <p><strong>The Fix: The "One Thing" Rule.</strong></p>
    <p>Never send an email asking for 5 things. Send an email asking for ONE thing. "I just need the logo to start." Once you get it, ask for the next thing. Lower the friction barrier.</p>
</div>

<div class="content-section">
    <h3>2. De-escalation Techniques (NLP)</h3>
    <p>When a client is angry, they are in "Emotional Brain." You need to move them to "Logical Brain."</p>
    <ul>
        <li><strong>Mirroring:</strong> "It sounds like you're frustrated about the timeline." (Validates them).</li>
        <li><strong>Labeling:</strong> "It seems like strict adherence to the brand guide is very important to you."</li>
        <li><strong>The "Audit" Approach:</strong> "You are right. We messed up X. Here is exactly how we are fixing it, and here is the timeline." Radical honesty diffuses anger instantly.</li>
    </ul>
</div>

<div class="content-section">
    <h3>3. Writing Executive Summaries</h3>
    <p>Clients are busy. They don't read essays. Your weekly updates should be skimmable.</p>
    <div style="background: #fff; color: #333; padding: 20px; border-radius: 8px; font-family: monospace;">
        <strong>Subject:</strong> Weekly Update: [Project Name] - [Status: On Track 🟢]<br><br>
        <strong>High Level:</strong><br>
        Homepage is approved. We are moving to the Product Page phase.<br><br>
        <strong>Completed This Week:</strong><br>
        ✅ Header Navigation<br>
        ✅ Hero Section Animation<br><br>
        <strong>Focus Next Week:</strong><br>
        🔨 Product Gallery Logic<br>
        🔨 Cart Drawer<br><br>
        <strong>Action Required from You:</strong><br>
        👉 Please approve the font selection (Link) by Tuesday.
    </div>
</div>

<div class="content-section">
    <h3>🚀 Readiness Check</h3>
    <ul>
        <li>📝 10 questions on Client Psychology and Communication</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task6Content = `
<h2>📚 TASK 6: TOOLS MASTERY (CLICKUP & LOOM)</h2>

<div class="content-section">
    <h3>1. ClickUp Architecture</h3>
    <p>ClickUp is not a to-do list. It is a database of truth.</p>
    <ul>
        <li><strong>Views:</strong> Use "Board View" for status checks (To Do -> In Progress -> QA -> Done). Use "Gantt View" for timeline checks.</li>
        <li><strong>Dependencies:</strong> Set "QA" to block "Delivery." This prevents accidental delivery of unchecked work.</li>
        <li><strong>Estimates:</strong> Always add time estimates. This helps us track profitability. If a task takes 10 hours but was estimated for 2, we have a problem.</li>
    </ul>
</div>

<div class="content-section">
    <h3>2. The Art of the Loom</h3>
    <p>We are a remote company. Typing explains <em>what</em>. Video explains <em>how</em> and <em>feel</em>.</p>
    <div class="highlight-box">
        <strong>💡 Loom Best Practices:</strong>
        <ol>
            <li><strong>Show your face:</strong> It builds human connection.</li>
            <li><strong>Keep it under 3 mins:</strong> Respect their time. If it's longer, send 2 videos.</li>
            <li><strong>Use the "Highlight" cursor:</strong> Guide their eye.</li>
            <li><strong>Playback Speed:</strong> Assume they watch at 1.5x. Speak clearly.</li>
        </ol>
    </div>
</div>

<div class="content-section">
    <h3>3. File naming & Hygiene</h3>
    <p>A messy file structure indicates a messy mind.</p>
    <p>❌ <code>logo-final-final-v2-REAL.png</code></p>
    <p>✅ <code>[ClientName]_Logo_Primary_v1.0.png</code></p>
    <p>Maintain your Google Drive folders as if a stranger had to take over your project tomorrow. Could they find everything in 5 minutes? If no, fix it.</p>
</div>

<div class="content-section">
    <h3>🚀 Readiness Check</h3>
    <ul>
        <li>📝 10 questions on Technical Workflows</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task7Content = `
<h2>📚 TASK 7: ADVANCED RISK OPS</h2>

<div class="content-section">
    <h3>1. The Risk Matrix</h3>
    <p>Every risk has two factors: <strong>Probability</strong> (How likely?) and <strong>Impact</strong> (How bad?).</p>
    <ul>
        <li><strong>High Prob / High Impact:</strong> (e.g., Client changing mind on design). Mitigation: Strict Sign-off phases.</li>
        <li><strong>Low Prob / High Impact:</strong> (e.g., Site hacked). Mitigation: Security backups.</li>
        <li><strong>High Prob / Low Impact:</strong> (e.g., Spelling errors). Mitigation: Proofreading checklist.</li>
    </ul>
    <p>Focus your energy on the High/High quadrant.</p>
</div>

<div class="content-section">
    <h3>2. Scope Creep Defense</h3>
    <p>Scope creep is death by a thousand cuts. "Can you just change this color?" "Can you just add this button?"</p>
    <p><strong>The "Zero Cost" Invoice Technique:</strong></p>
    <p>Even if you do a small favor for free, <strong>invoice it at $0</strong>.</p>
    <div style="background: rgba(255,255,255,0.1); padding: 15px; font-family: monospace;">
        Additional Button Request: $150<br>
        Courtesy Discount: -$150<br>
        Total: $0
    </div>
    <p>This signals value. It says "I did you a favor, but this has value." Next time, they will hesitate to ask.</p>
</div>

<div class="content-section">
    <h3>3. The "Red Flag" Protocol</h3>
    <p>When to hit the panic button?</p>
    <ul>
        <li>Client threatens legal action? -> <strong>ESCALATE TO MD IMMEDIATELY. DO NOT REPLY.</strong></li>
        <li>Developer goes absent for 24h? -> <strong>ESCALATE TO OPS HEAD.</strong></li>
        <li>Project budget exhausted? -> <strong>FLAG TO FINANCE.</strong></li>
    </ul>
    <p>Bad news must travel fast. Good news can travel slow.</p>
</div>

<div class="content-section">
    <h3>🚀 Readiness Check</h3>
    <ul>
        <li>📝 10 questions on Risk Mitigation</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task8Content = `
<h2>📚 TASK 8: ZERO-DEFECT QUALITY CONTROL</h2>

<div class="content-section">
    <h3>1. The "Pixel Perfect" Standard</h3>
    <p>Our brand promise is "Digital Heroes." Not "Digital Amateurs."</p>
    <p>When checking a site, open the Figma file in one window and the Live Site in another. Alt-Tab between them quickly. If the image "jumps" or "shifts," it's wrong. Margins, fonts, line-heights must be exact.</p>
</div>

<div class="content-section">
    <h3>2. Functional QA Matrix</h3>
    <p>You need to break the site today.</p>
    <table style="width: 100%; border: 1px solid rgba(255,255,255,0.1);">
        <tr><td><strong>Forms</strong></td><td>Test with valid data, invalid data (weird emails), and empty submissions. Check the "Thank You" state.</td></tr>
        <tr><td><strong>Checkout</strong></td><td>Add to cart. Go to checkout. Check shipping rates. Check taxes. Abandon cart (check email).</td></tr>
        <tr><td><strong>Responsive</strong></td><td>iPhone SE (Smallest), iPad (Tablet), Laptop (13"), Desktop (27"). Use Chrome DevTools.</td></tr>
        <tr><td><strong>Speed</strong></td><td>Run PageSpeed Insights. If Mobile is < 50, reject it.</td></tr>
    </table>
</div>

<div class="content-section">
    <h3>3. Performance Budgeting</h3>
    <p>A beautiful site that doesn't load is a failure. Monitor image sizes. No image should exceed 200KB unless it's a massive hero banner (max 500KB). If you see a 4MB PNG, reject the build.</p>
</div>

<div class="content-section">
    <h3>🚀 Readiness Check</h3>
    <ul>
        <li>📝 10 questions on QA Methodologies</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task9Content = `
<h2>📚 TASK 9: PRACTICE SIMULATIONS (WAR GAMES)</h2>

<div class="content-section">
    <h3>🧠 Simulation 1: The "Ghosting" Client</h3>
    <p><strong>Scenario:</strong> Client agreed to a 4-week timeline. Week 2 comes, and they need to approve the design. They vanish. 7 days pass. No reply to emails.</p>
    <p><strong>The Fix:</strong> The "Project Paused" Protocol.</p>
    <p><em>"Hi [Name], since we haven't heard back in 7 days, our automated system has placed this project 'On Hold' to preserve our team's schedule for active clients. No worries! When you are ready to resume, just reply here. A re-activation fee of $150 may apply to re-book the slot."</em></p>
    <p>This almost ALWAYS gets a reply within 10 minutes. Fear of loss is powerful.</p>
</div>

<div class="content-section">
    <h3>🧠 Simulation 2: The "Launch Day" Crash</h3>
    <p><strong>Scenario:</strong> You launch the site. 1 hour later, the "Add to Cart" button stops working. Client is screaming on the phone.</p>
    <p><strong>Step-by-Step Response:</strong></p>
    <ol>
        <li><strong>Acknowledge & Contain:</strong> "I see the issue. I am on it. I have alerted the Lead Dev." (Stop the panic).</li>
        <li><strong>Revert:</strong> If it worked yesterday, roll back the code. Get the site operational, even if it's an old version.</li>
        <li><strong>Root Cause Analysis:</strong> Fix the bug in Staging. Never debug on Live.</li>
        <li><strong>The Update:</strong> "We identified the conflict (App X). We rolled back. The site is live and transacting. We will redeploy the fix tonight at 3 AM."</li>
    </ol>
</div>

<div class="content-section">
    <h3>🧠 Simulation 3: The "Scope Explosion"</h3>
    <p><strong>Scenario:</strong> In the middle of dev, Client sends a doc with 50 "small tweaks" that are actually design changes.</p>
    <p><strong>Strategy:</strong> The "Phase 2" Bucket.</p>
    <p><em>"These are great ideas! However, they differ from the approved mockups. To protect our launch date, I have added these to a 'Phase 2' Wishlist. Let's launch V1 on time, and then we can scope out a Phase 2 contract for these enhancements."</em></p>
</div>

<div class="content-section">
    <h3>🚀 Readiness Check</h3>
    <ul>
        <li>📝 10 situational questions</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task10Content = `
<h2>📚 TASK 10: BOARD CERTIFICATION EXAM</h2>

<div class="content-section">
    <h3>🏆 The Final Hurdle</h3>
    <p>You have reviewed 9 modules of deep-dive project management theory and practice. You know the psychology, the tools, the risks, and the quality standards.</p>
    <p>Now, we test if you can apply it.</p>
</div>

<div class="content-section">
    <h3>📝 Certification Criteria</h3>
    <div class="highlight-box">
        <strong>Passing Score: 20/20 (100%)</strong>
        <p>There is no room for error in live projects. We demand perfection here so you can handle reality later.</p>
    </div>
    <ul>
        <li><strong>Part 1:</strong> Theory & Process (10 Questions)</li>
        <li><strong>Part 2:</strong> Applied Scenarios (10 Questions)</li>
    </ul>
</div>

<div class="content-section">
    <h3>🚀 Begin Certification</h3>
    <p>Take a deep breath. Good luck, Future Project Manager.</p>
</div>
`;

// Keep existing quizzes (logic unchanged, just content updated)
// Re-using the quizzes from before but ensuring they map to the 10/10 requirement
// Note: Expanded quiz content would also be ideal, but for now we focus on the lesson content expansion.
const allQuizzes = [
    // Task 1: PM Mindset
    [
        { q: "The PM is the hub of:", o: ["Sales only", "All communication", "Design only", "Development only"], c: 1 },
        { q: "A PM should be:", o: ["A messenger", "A problem-solver", "Just a coordinator", "Passive observer"], c: 1 },
        { q: "Timeline guardian means:", o: ["Being flexible", "Ensuring deadlines are met", "Ignoring deadlines", "Extending always"], c: 1 },
        { q: "Quality gatekeeper means:", o: ["Nothing leaves without approval", "Always approve", "Skip QA", "Delegate all checks"], c: 0 },
        { q: "Client champion means:", o: ["Ignoring clients", "Representing client interests", "Only team focus", "Sales focus"], c: 1 },
        { q: "PM should anticipate:", o: ["Nothing", "Issues and solutions", "Only good news", "Problems only"], c: 1 },
        { q: "Information should flow:", o: ["Randomly", "Through PM", "Bypass PM", "Only to leadership"], c: 1 },
        { q: "PM drives:", o: ["Nothing", "Results", "Confusion", "Delays"], c: 1 },
        { q: "Being proactive means:", o: ["Waiting for issues", "Anticipating problems", "Reacting only", "Ignoring risks"], c: 1 },
        { q: "A PM is NOT:", o: ["Problem-solver", "Communication hub", "Just a messenger", "Quality gatekeeper"], c: 2 }
    ],
    // Task 2: Company Knowledge
    [
        { q: "YouTube subscribers:", o: ["500K", "1M", "2.5M+", "5M"], c: 2 },
        { q: "Premium package price:", o: ["$800", "$1,000", "$1,200", "$1,500"], c: 2 },
        { q: "Enterprise package price:", o: ["$1,200", "$1,500", "$1,800", "$2,500"], c: 2 },
        { q: "Team size:", o: ["10+", "20+", "40+", "100+"], c: 2 },
        { q: "Premium support days:", o: ["15", "30", "45", "60"], c: 1 },
        { q: "Enterprise support days:", o: ["30", "45", "60", "90"], c: 2 },
        { q: "Premium pages included:", o: ["3", "5", "7", "10"], c: 1 },
        { q: "Enterprise pages:", o: ["5", "7", "10+", "15"], c: 2 },
        { q: "Premium products:", o: ["10", "25", "50", "100"], c: 1 },
        { q: "Enterprise products:", o: ["50", "75", "100+", "200"], c: 2 }
    ],
    // Task 3: Project Planning
    [
        { q: "Premium timeline:", o: ["1 week", "2-3 weeks", "4-5 weeks", "6+ weeks"], c: 1 },
        { q: "Enterprise timeline:", o: ["1-2 weeks", "2-3 weeks", "3-4 weeks", "5-6 weeks"], c: 2 },
        { q: "Kickoff requires:", o: ["Just an email", "Client brief, scope, timeline, team, assets, ClickUp", "Only budget", "Nothing"], c: 1 },
        { q: "Scope should be:", o: ["Vague", "Clearly defined", "Undefined", "Flexible always"], c: 1 },
        { q: "Milestones help with:", o: ["Confusion", "Tracking progress", "Delays", "Nothing"], c: 1 },
        { q: "Assets should be collected:", o: ["After project", "During kickoff", "Never", "At launch"], c: 1 },
        { q: "ClickUp project should be created:", o: ["Never", "At kickoff", "After completion", "When convenient"], c: 1 },
        { q: "Team assignment happens:", o: ["Randomly", "During planning", "After delivery", "Never"], c: 1 },
        { q: "Timeline should include:", o: ["Only end date", "Milestones and deadlines", "Nothing specific", "Just start date"], c: 1 },
        { q: "Client brief must be:", o: ["Ignored", "Reviewed thoroughly", "Skipped", "Assumed"], c: 1 }
    ],
    // Task 4: Team Management
    [
        { q: "Task descriptions should be:", o: ["Vague", "Specific", "Short", "Empty"], c: 1 },
        { q: "Deadlines should be:", o: ["Never set", "Clear", "Flexible always", "Ignored"], c: 1 },
        { q: "Assets should be provided:", o: ["Never", "Upfront", "After completion", "Only if asked"], c: 1 },
        { q: "Progress checks should be:", o: ["Weekly", "Daily", "Monthly", "Never"], c: 1 },
        { q: "PM should be available for:", o: ["Nothing", "Questions", "Lunch only", "Weekends only"], c: 1 },
        { q: "Daily standup asks about:", o: ["Weather", "Yesterday, today, blockers", "Personal life", "Vacation"], c: 1 },
        { q: "Blockers should be:", o: ["Ignored", "Addressed immediately", "Documented only", "Hidden"], c: 1 },
        { q: "Delegation means:", o: ["Doing everything yourself", "Assigning tasks clearly", "Avoiding work", "Random assignment"], c: 1 },
        { q: "Clear ownership means:", o: ["No one responsible", "Specific person assigned", "Everyone owns it", "PM does everything"], c: 1 },
        { q: "Team communication is:", o: ["Optional", "Essential", "Unnecessary", "Weekly only"], c: 1 }
    ],
    // Task 5: Client Relations
    [
        { q: "Response time during business hours:", o: ["24 hours", "8 hours", "4 hours", "1 week"], c: 2 },
        { q: "Progress updates should be:", o: ["Never", "Weekly", "Monthly", "Only when asked"], c: 1 },
        { q: "Loom is used for:", o: ["Gaming", "Visual explanations", "Personal videos", "Entertainment"], c: 1 },
        { q: "Before action, confirm:", o: ["Nothing", "Understanding", "Budget", "Weather"], c: 1 },
        { q: "Over-promising leads to:", o: ["Happy clients", "Problems", "Success", "More sales"], c: 1 },
        { q: "Estimates should have:", o: ["No buffer", "Buffer time", "Exact precision", "Random guesses"], c: 1 },
        { q: "Scope limitations should be:", o: ["Hidden", "Clarified", "Ignored", "Expanded freely"], c: 1 },
        { q: "Changes should be documented:", o: ["Never", "In writing", "Verbally only", "Not at all"], c: 1 },
        { q: "Managing expectations means:", o: ["Promising everything", "Setting realistic boundaries", "Ignoring clients", "Saying yes always"], c: 1 },
        { q: "Client communication should be:", o: ["Rare", "Professional and timely", "Aggressive", "Avoided"], c: 1 }
    ],
    // Task 6: Tools & Systems
    [
        { q: "Every project needs:", o: ["Nothing", "Dedicated ClickUp space", "Only emails", "Paper notes"], c: 1 },
        { q: "Tasks should have:", o: ["No dates", "Due dates", "Random priority", "No ownership"], c: 1 },
        { q: "Priority levels help with:", o: ["Confusion", "Organizing work", "Delays", "Nothing"], c: 1 },
        { q: "Task ownership should be:", o: ["Unclear", "Clear", "Shared always", "Nobody's"], c: 1 },
        { q: "Loom is for:", o: ["Project management", "Video updates", "Spreadsheets", "Design"], c: 1 },
        { q: "Slack is for:", o: ["Team communication", "Video calls only", "Storage", "Design"], c: 0 },
        { q: "Google Drive stores:", o: ["Videos only", "Assets", "Code", "Nothing"], c: 1 },
        { q: "Client calls use:", o: ["Loom", "Google Meet", "ClickUp", "Email"], c: 1 },
        { q: "Standard templates:", o: ["Should not exist", "Should be used", "Are optional", "Cause confusion"], c: 1 },
        { q: "Tags help with:", o: ["Nothing", "Organization", "Confusion", "Delays"], c: 1 }
    ],
    // Task 7: Risk Management
    [
        { q: "Scope creep means:", o: ["Reducing scope", "Adding features without budget", "Normal process", "Good thing"], c: 1 },
        { q: "Timeline slippage means:", o: ["Early delivery", "Team behind schedule", "On-time delivery", "Success"], c: 1 },
        { q: "Asset delays happen when:", o: ["Team is slow", "Client doesn't provide materials", "Everything is perfect", "PM is lazy"], c: 1 },
        { q: "Documentation should be:", o: ["Avoided", "Done in writing", "Verbal only", "Never"], c: 1 },
        { q: "Boundaries on scope should be:", o: ["Flexible always", "Clear", "None", "Hidden"], c: 1 },
        { q: "Contingency plans are for:", o: ["Nothing", "Delays", "Celebration", "Easy projects"], c: 1 },
        { q: "Escalation should happen:", o: ["Never", "Early when issues arise", "Only at failure", "After deadline"], c: 1 },
        { q: "Communication breakdown is:", o: ["Good", "A risk", "Normal", "Expected"], c: 1 },
        { q: "Risk mitigation means:", o: ["Ignoring risks", "Preventing/reducing risks", "Creating risks", "Accepting risks"], c: 1 },
        { q: "Written records are:", o: ["Optional", "Essential", "Unnecessary", "Waste of time"], c: 1 }
    ],
    // Task 8: Quality Control
    [
        { q: "Pages should be tested on:", o: ["Desktop only", "Mobile only", "Mobile & desktop", "Neither"], c: 2 },
        { q: "PageSpeed target:", o: ["50+", "65+", "85+", "95+"], c: 2 },
        { q: "Console errors should be:", o: ["Ignored", "None", "Acceptable", "Expected"], c: 1 },
        { q: "Content should be:", o: ["Ignored", "Proofread", "Copied randomly", "Automated"], c: 1 },
        { q: "Checkout flow must be:", o: ["Skipped", "Tested", "Ignored", "Assumed working"], c: 1 },
        { q: "Links must be:", o: ["Broken", "Working", "Missing", "Optional"], c: 1 },
        { q: "Delivery includes:", o: ["Just email", "Loom walkthrough", "Nothing", "Phone call only"], c: 1 },
        { q: "Internal QA happens:", o: ["After client review", "Before PM review", "Never", "Only for big projects"], c: 1 },
        { q: "PM final review is:", o: ["Optional", "Mandatory", "Rare", "Never"], c: 1 },
        { q: "Feedback should be:", o: ["Ignored", "Collected and addressed", "Dismissed", "Argued with"], c: 1 }
    ],
    // Task 9: Practice Scenarios
    [
        { q: "When client delays assets:", o: ["Wait forever", "Send reminder with deadline", "Cancel project", "Ignore"], c: 1 },
        { q: "Scope creep should be:", o: ["Always accepted free", "Quoted and approved", "Ignored", "Argued"], c: 1 },
        { q: "Extra features need:", o: ["No discussion", "Quote and written approval", "Free work", "Cancellation"], c: 1 },
        { q: "Impact on timeline should be:", o: ["Hidden", "Explained to client", "Ignored", "Minimized always"], c: 1 },
        { q: "Documentation protects:", o: ["Nobody", "Both parties", "Only client", "Only PM"], c: 1 },
        { q: "Alternatives (like stock photos) can be:", o: ["Never offered", "Offered when needed", "Always forced", "Ignored"], c: 1 },
        { q: "Written approval is needed:", o: ["Never", "Before extra work", "After completion", "Rarely"], c: 1 },
        { q: "Polite reminders are:", o: ["Unprofessional", "Appropriate", "Rude", "Unnecessary"], c: 1 },
        { q: "Positive acknowledgment means:", o: ["Saying no", "Acknowledging request positively", "Ignoring", "Arguing"], c: 1 },
        { q: "Boundaries should be:", o: ["Never set", "Clearly communicated", "Hidden", "Flexible always"], c: 1 }
    ],
    // Task 10: Final Certification (20 questions)
    [
        { q: "PM is hub of:", o: ["Sales", "All communication", "Design", "Nothing"], c: 1 },
        { q: "YouTube subscribers:", o: ["1M", "2.5M+", "5M", "10M"], c: 1 },
        { q: "Premium timeline:", o: ["1 week", "2-3 weeks", "5 weeks", "2 months"], c: 1 },
        { q: "Response time:", o: ["24 hours", "4 hours", "1 week", "1 hour"], c: 1 },
        { q: "Progress updates:", o: ["Never", "Weekly", "Monthly", "Yearly"], c: 1 },
        { q: "Scope creep means:", o: ["Good thing", "Adding without budget", "Reducing scope", "Normal"], c: 1 },
        { q: "PageSpeed target:", o: ["50+", "65+", "85+", "100"], c: 2 },
        { q: "Risk probability vs impact:", o: ["Ignore both", "Assess both", "Only probability", "Only impact"], c: 1 },
        { q: "Standup blockers:", o: ["Ignored", "Removed immediately", "Complained about", "Hidden"], c: 1 },
        { q: "Ghosting protocol:", o: ["Wait", "Re-activation fee message", "Cry", "Sue"], c: 1 },
        { q: "Phase 2 bucket is for:", o: ["Trash", "Scope creep feautures", "Bugs", "Admin"], c: 1 },
        { q: "Loom length:", o: ["10 mins", "Under 3 mins", "1 hour", "5 seconds"], c: 1 },
        { q: "File naming:", o: ["Random", "Standardized", "Messy", "None"], c: 1 },
        { q: "Zero-defect quality:", o: ["Impossible", "Standard", "Optional", "Rare"], c: 1 },
        { q: "Emotional brain vs Logical brain:", o: ["Ignore emotions", "Move to logical", "Stay emotional", "Fight"], c: 1 },
        { q: "Invoice $0 technique:", o: ["Loses money", "Signals value", "Is illegal", "Confuses client"], c: 1 },
        { q: "Red flag for dev:", o: ["I'm done", "It works on my machine", "I'm early", "I love this"], c: 1 },
        { q: "Emergency contact for legal:", o: ["You", "MD (Anurag)", "Nobody", "Police"], c: 1 },
        { q: "Dependency chain:", o: ["Doesn't exist", "Design -> Dev -> QA", "Random", "Dev -> Design"], c: 1 },
        { q: "PM Success Metric:", o: ["Effort", "Results/Delivery", "Hours worked", "Nice emails"], c: 1 }
    ]
];
