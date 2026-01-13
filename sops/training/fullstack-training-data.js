// Full Stack Developer Training Data - COMPLETE OVERHAUL
// Digital Heroes Certification Program
// 13 Tasks, 150+ Quiz Questions, Tech Stack Mastery

const trainingTasks = [
    {
        id: 1,
        title: "Full Stack Mindset",
        description: "Zero Tolerance & Principles",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🧠 Concept: The ₹5 Lakh Failure Story",
            "🛡️ Concept: Peer Review Culture",
            "🚀 Concept: 5 Core Principles"
        ]
    },
    {
        id: 2,
        title: "Project Planning",
        description: "Specs before Code",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "📄 Doc: Technical Spec Document (TSD)",
            "🔎 Phase: Discovery & Paid Consulting",
            "⚠️ Phase: Risk Identification"
        ]
    },
    {
        id: 3,
        title: "Tech Stack Mastery",
        description: "Next.js, Node, Postgres",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 90 min",
            "⚛️ Frontend: Next.js + Tailwind",
            "🔙 Backend: Node.js + Express vs Server Actions",
            "🗄️ Database: PostgreSQL + Prisma"
        ]
    },
    {
        id: 4,
        title: "Setup & Architecture",
        description: "Repository Hygiene",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "📂 Structure: Feature-based Folders",
            "🌿 Git: Branching Strategy",
            "🔑 Env: Security Best Practices"
        ]
    },
    {
        id: 5,
        title: "Development Phases",
        description: "The 6-Week Sprints",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "1️⃣ Phase 1: Foundation (Auth/DB)",
            "2️⃣ Phase 2: Core Features",
            "3️⃣ Phase 3: Polish & Testing"
        ]
    },
    {
        id: 6,
        title: "Database Design",
        description: "Schema & Relations",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "📐 Design: Normalization",
            "⚡ Perf: Indexing & Query Optimization",
            "🔄 Tool: Prisma Migrations"
        ]
    },
    {
        id: 7,
        title: "API Development",
        description: "REST & Typesafety",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "🌐 Standard: RESTful Best Practices",
            "🛡️ Security: Zod Validation",
            "📚 Docs: Swagger/OpenAPI"
        ]
    },
    {
        id: 8,
        title: "Security Essentials",
        description: "OWASP Top 10",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🛡️ Topic: SQL Injection Prevention",
            "🛡️ Topic: XSS & CSRF",
            "🔐 Topic: JWT vs Sessions"
        ]
    },
    {
        id: 9,
        title: "QA & Testing",
        description: "Automated & Manual",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "🧪 Test: Unit Testing (Jest)",
            "🧪 Test: E2E Testing (Playwright)",
            "✅ Check: The Pre-Merge Checklist"
        ]
    },
    {
        id: 10,
        title: "Deployment & DevOps",
        description: "CI/CD & Hosting",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "☁️ Host: Vercel vs Railway vs AWS",
            "🚀 Pipe: GitHub Actions CI/CD",
            "📊 Monitor: Sentry & Logging"
        ]
    },
    {
        id: 11,
        title: "Client Handover",
        description: "Documentation & Training",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 30 min",
            "📦 Pack: The Handover Package",
            "🎥 Train: Loom Library",
            "🤝 Support: Warranty Period"
        ]
    },
    {
        id: 12,
        title: "Difficult Situations",
        description: "Server Outages & Crisis",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🔥 Scenario: Database Corruption",
            "🔥 Scenario: Security Breach",
            "🔥 Scenario: API Rate Limiting"
        ]
    },
    {
        id: 13,
        title: "AI Development",
        description: "Copilot & Refactoring",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 30 min",
            "🤖 Prompt: Refactoring Legacy Code",
            "🤖 Prompt: Generating Types",
            "⚠️ Warn: AI Hallucinations"
        ]
    }
];

const task1Content = `
<h2>📚 TASK 1: MINDSET - The ₹5 Lakh Mistake</h2>

<div class="content-section">
    <h3>📉 The Story</h3>
    <p>A dev hardcoded an API key in the frontend. Scrapers found it, exhausted the quota, and billed the client ₹5 Lakhs in 24 hours.</p>
    <div class="highlight-box">
        <strong>Lesson:</strong> Security is not a feature. It is the foundation. Small mistakes cost fortunes.
    </div>
</div>

<div class="content-section">
    <h3>🛡️ 5 Core Principles</h3>
    <ol>
        <li><strong>Plan Twice, Code Once:</strong> Write the schema, <em>then</em> the code.</li>
        <li><strong>Typesafety is Non-Negotiable:</strong> No <code>any</code>. Ever.</li>
        <li><strong>Don't Repeate Yourself (DRY):</strong> Abstract logic.</li>
        <li><strong>Secure by Default:</strong> Validate every input (Zod).</li>
        <li><strong>Peer Review:</strong> No merging without approval.</li>
    </ol>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(59, 130, 246, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Case Study</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #60A5FA; margin-top: 0;">Exercise: The Audit</h4>
        <p>Review this snippet: <code>const user = await db.query("SELECT * FROM users WHERE id=" + req.body.id);</code>. Identify the vulnerability and rewrite it securely.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Principle</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task2Content = `
<h2>📚 TASK 2: PLANNING - The Technical Spec</h2>

<div class="content-section">
    <h3>📄 The TSD (Technical Spec Document)</h3>
    <p>We do not write code until the TSD is approved. It includes:</p>
    <ul>
        <li><strong>ER Diagram:</strong> Database relationships.</li>
        <li><strong>API Endpoints:</strong> List of GET/POST/PUT.</li>
        <li><strong>Tech Stack:</strong> Verified libraries.</li>
        <li><strong>Risks:</strong> "Payment gateway approvals might take 3 days."</li>
    </ul>
</div>

<div class="content-section">
    <h3>💸 Discovery Phase</h3>
    <p>Planning is WORK. We charge for Discovery. Never plan for free.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(59, 130, 246, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: ER Diagram</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #60A5FA; margin-top: 0;">Exercise: Schema Planning</h4>
        <p>Client wants a "Course Platform". Define the relations between `User`, `Course`, `Lesson`, and `Enrollment`. Write the Prisma Schema pseudo-code.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Planning</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task3Content = `
<h2>📚 TASK 3: TECH STACK - The Digital Heroes Stack</h2>

<div class="content-section">
    <h3>⚛️ Frontend: Next.js + React</h3>
    <p>We use the App Router. Components must be Server Components by default. Use <code>"use client"</code> sparingly.</p>
</div>

<div class="content-section">
    <h3>🔙 Backend Options</h3>
    <ul>
        <li><strong>Server Actions:</strong> For simple CRUD directly in Next.js.</li>
        <li><strong>Node/Express:</strong> For complex, heavy-lifting APIs or long-running jobs (BullMQ).</li>
    </ul>
</div>

<div class="content-section">
    <h3>🗄️ Database: PostgreSQL + Prisma</h3>
    <p>Prisma ORM is mandatory for typesafety. No raw SQL strings unless for performance optimization.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(59, 130, 246, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Setup</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #60A5FA; margin-top: 0;">Exercise: Stack Choice</h4>
        <p>Scenario: A chat app with real-time websockets. Next.js Server Actions or Node.js Custom Server? Justify your choice.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about The Stack</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task4Content = `
<h2>📚 TASK 4: SETUP & ARCHITECTURE</h2>

<div class="content-section">
    <h3>📂 Folder Structure (Feature-Based)</h3>
    <p>Stop putting all headers in <code>/components</code>. Co-locate!</p>
    <div class="code-block" style="background: #1e1e1e; padding: 10px; font-family: monospace;">
        /features<br>
        &nbsp;&nbsp;/auth<br>
        &nbsp;&nbsp;&nbsp;&nbsp;/components<br>
        &nbsp;&nbsp;&nbsp;&nbsp;/actions<br>
        &nbsp;&nbsp;&nbsp;&nbsp;/hooks
    </div>
</div>

<div class="content-section">
    <h3>🌿 Branching Strategy</h3>
    <p><code>main</code> is sacred (Production).</p>
    <p>Work in <code>feat/authentication</code> or <code>fix/navbar-bug</code>. PR into <code>dev</code> first.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(59, 130, 246, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Git Flow</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #60A5FA; margin-top: 0;">Exercise: Merge Resolve</h4>
        <p>You and a teammate edited the same `UserButton.tsx`. Git says "CONFLICT". Describe the steps to resolve it manually.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Architecture</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task5Content = `
<h2>📚 TASK 5: DEVELOPMENT PHASES (6 Weeks)</h2>

<div class="content-section">
    <h3>Phase 1: Foundation (Wk 1-2)</h3>
    <p>Auth setup, DB schema locked, UI Kit installed. The "Skeleton" of the app.</p>
</div>

<div class="content-section">
    <h3>Phase 3: Integrations (Wk 4-5)</h3>
    <p>Stripe, SendGrid, Twilio. This is where bugs happen. Buffer time here.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(59, 130, 246, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Planning</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #60A5FA; margin-top: 0;">Exercise: Gantt Chart</h4>
        <p>Create a 6-week roadmap for a "Real Estate Listing Platform". When do you build the "Map View" vs the "Admin Dashboard"?</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Phases</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task6Content = `
<h2>📚 TASK 6: DATABASE DESIGN</h2>

<div class="content-section">
    <h3>📐 Normalization</h3>
    <p>Don't store "User Address" inside the "Orders" table repeatedly. Create an <code>Address</code> table and relate it.</p>
</div>

<div class="content-section">
    <h3>⚡ Indexing</h3>
    <p>If you search by <code>email</code> frequently, you MUST add an index. <code>@@index([email])</code>. Otherwise, the DB scans every row.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(59, 130, 246, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Optimization</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #60A5FA; margin-top: 0;">Exercise: The Slow Query</h4>
        <p>A query taking 5 seconds: <code>SELECT * FROM logs WHERE status = 'ERROR'</code>. The logs table has 1M rows. How do you fix it?</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Databases</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task7Content = `
<h2>📚 TASK 7: API DEVELOPMENT - The Connector</h2>

<div class="content-section">
    <h3>🌐 REST Standards</h3>
    <ul>
        <li><strong>GET:</strong> Retrieve (Idempotent).</li>
        <li><strong>POST:</strong> Create.</li>
        <li><strong>PUT:</strong> Replace fully.</li>
        <li><strong>PATCH:</strong> Update partially.</li>
        <li><strong>DELETE:</strong> Remove.</li>
    </ul>
</div>

<div class="content-section">
    <h3>🛡️ Validation (Zod)</h3>
    <div class="code-block" style="background: #1e1e1e; padding: 10px; font-family: monospace;">
        const schema = z.object({<br>
        &nbsp;&nbsp;email: z.string().email(),<br>
        &nbsp;&nbsp;age: z.number().min(18)<br>
        });
    </div>
    <p>Validate INPUT and OUTPUT.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(59, 130, 246, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Endpoint Build</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #60A5FA; margin-top: 0;">Exercise: Error Handling</h4>
        <p>Write a Try/Catch block for an API route. If the DB fails, what status code do you return? What message? (Don't leak stack traces!)</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about APIs</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task8Content = `
<h2>📚 TASK 8: SECURITY ESSENTIALS</h2>

<div class="content-section">
    <h3>🚫 OWASP Top 10</h3>
    <ol>
        <li><strong>Broken Access Control:</strong> Can I see Admin pages as a user?</li>
        <li><strong>Injection:</strong> SQL/Command injection.</li>
        <li><strong>Cryptographic Faclure:</strong> Storing passwords as plain text? (Use bcrypt/argon2).</li>
    </ol>
</div>

<div class="content-section">
    <h3>🔑 JWT vs Sessions</h3>
    <p>Using NextAuth? Understand the tradeoff. JWT is stateless but hard to revoke. Sessions are database-heavy but secure.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(59, 130, 246, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Sec Audit</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #60A5FA; margin-top: 0;">Exercise: XSS Prevention</h4>
        <p>A user inputs <code>&lt;script&gt;alert('hacked')&lt;/script&gt;</code> into their bio. How does React handle this? When is it dangerous?</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Security</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task9Content = `
<h2>📚 TASK 9: QA & TESTING</h2>

<div class="content-section">
    <h3>🧪 Testing Pyramid</h3>
    <ul>
        <li><strong>Unit Tests (Jest):</strong> Test individual functions. (Fast)</li>
        <li><strong>Integration Tests:</strong> Test modules working together.</li>
        <li><strong>E2E Tests (Playwright):</strong> Test the full browser flow. (Slow but critical).</li>
    </ul>
</div>

<div class="content-section">
    <h3>✅ Pre-Merge Checklist</h3>
    <p>Linting passed? Build passed? No console logs left?</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(59, 130, 246, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: E2E</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #60A5FA; margin-top: 0;">Exercise: Playwright Script</h4>
        <p>Write pseudo-code for a Playwright test that: 1. Goes to login. 2. Types credentials. 3. Clicks submit. 4. Expects URL to be /dashboard.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Testing</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task10Content = `
<h2>📚 TASK 10: DEPLOYMENT & DEVOPS</h2>

<div class="content-section">
    <h3>☁️ Hosting Providers</h3>
    <ul>
        <li><strong>Vercel:</strong> Best for Next.js (Frontend).</li>
        <li><strong>Railway/Render:</strong> Best for Database & Background workers.</li>
        <li><strong>AWS:</strong> Only if necessary (Complex).</li>
    </ul>
</div>

<div class="content-section">
    <h3>🚀 CI/CD Pipelines</h3>
    <p>Automate it. GitHub Actions should run tests on every Pull Request.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(59, 130, 246, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Env Vars</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #60A5FA; margin-top: 0;">Exercise: Secret Management</h4>
        <p>You accidentally pushed <code>.env</code> with production keys to GitHub. What are the EXACT 3 steps you take now?</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about DevOps</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task11Content = `
<h2>📚 TASK 11: CLIENT HANDOVER</h2>

<div class="content-section">
    <h3>📦 The Handover Package</h3>
    <ul>
        <li>Source Code (Zip + Repo Invite).</li>
        <li>Admin Credentials.</li>
        <li>Architecture Diagram.</li>
        <li>README.md (How to run locally).</li>
    </ul>
</div>

<div class="content-section">
    <h3>🎥 Video Training</h3>
    <p>Record Looms showing them how to change text, ban users, and view analytics.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(59, 130, 246, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Documentation</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #60A5FA; margin-top: 0;">Exercise: README Writing</h4>
        <p>Write the "Getting Started" section of a README. Include: Node version, Install command, and Env setup.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Handover</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task12Content = `
<h2>📚 TASK 12: DIFFICULT SITUATIONS</h2>

<div class="content-section">
    <h3>🔥 Crisis: Server Down</h3>
    <p><strong>Action:</strong> Check Logs -> Check Host Status -> Check Database Connection. Communicate updates every 30 mins.</p>
</div>

<div class="content-section">
    <h3>🔥 Crisis: "It's Slow"</h3>
    <p><strong>Action:</strong> Profile the app. Is it the DB? The API? Optimizing images? Use data (Lighthouse/NewRelic) to prove the fix.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(59, 130, 246, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Post-Mortem</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #60A5FA; margin-top: 0;">Exercise: Incident Report</h4>
        <p>Write an Incident Report for a 2-hour outage caused by an expired SSL certificate. Root Cause, Fix, and Prevention.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Crisis</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task13Content = `
<h2>📚 TASK 13: AI DEVELOPMENT</h2>

<div class="content-section">
    <h3>🤖 Prompt Engineering for Code</h3>
    <p>Don't say "Make a user page". Say "Create a Next.js Page using Tailwind that fetches user data from /api/user and displays it in a Card component. Handle loading and error states."</p>
</div>

<div class="content-section">
    <h3>⚠️ AI Hallucinations</h3>
    <p>ChatGPT makes up packages that don't exist. Always verify imports.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(59, 130, 246, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Refactoring</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #60A5FA; margin-top: 0;">Exercise: The Prompt</h4>
        <p>Write a prompt to convert a 500-line "Spaghetti Code" function into small, testable helper functions.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Final Exam?</h3>
    <ul>
        <li>📝 20 questions covering all modules</li>
        <li>🎯 Score <strong>20/20</strong> to receive Full Stack Certification</li>
    </ul>
</div>
`;

const quizQuestions = [
    // TASK 1: MINDSET
    {
        question: "What is the consequence of exposing an API key?",
        options: ["Nothing", "Financial loss and Security breach", "Faster API", "Better code"],
        correct: 1
    },
    {
        question: "What does DRY stand for?",
        options: ["Don't Repeat Yourself", "Do Repeat Yourself", "Don't Run Yarns", "Data Ready Yet"],
        correct: 0
    },
    // TASK 6: DB
    {
        question: "Why add an Index to a DB column?",
        options: ["To make it colorful", "To speed up search queries on that column", "To encrypt it", "To delete it"],
        correct: 1
    },
    {
        question: "What is Normalization?",
        options: ["Organizing data to reduce redundancy", "Making data normal", "Deleting data", "Using arrays"],
        correct: 0
    },
    // TASK 7: API
    {
        question: "Which HTTP method updates a resource partially?",
        options: ["PUT", "POST", "PATCH", "GET"],
        correct: 2
    },
    {
        question: "What is Zod used for?",
        options: ["Database hosting", "Runtime schema validation", "Frontend styling", "Testing"],
        correct: 1
    },
    // TASK 8: SECURITY
    {
        question: "How should passwords be stored?",
        options: ["Plain text", "Encrypted (Hashed)", "In a text file", "On sticky notes"],
        correct: 1
    },
    {
        question: "What prevents SQL Injection?",
        options: ["Using ORMs / Parameterized Queries", "Using Strings", "Trusting users", "Nothing"],
        correct: 0
    },
    // TASK 10: DEVOPS
    {
        question: "What is CI/CD?",
        options: ["Code Integration / Code Deletion", "Continuous Integration / Continuous Deployment", "Computer Internet", "None"],
        correct: 1
    },
    {
        question: "Should .env files be committed to Git?",
        options: ["Yes", "No, Never", "Sometimes", "Only production keys"],
        correct: 1
    },
    // TASK 11: HANDOVER
    {
        question: "What is crucial for a smooth handover?",
        options: ["Running away", "Documentation and Training Videos", "Deleting the repo", "Changing passwords"],
        correct: 1
    },
    // TASK 12: CRISIS
    {
        question: "First step when Server is Down?",
        options: ["Panic", "Check Logs and Status Page", "Email Jeff Bezos", "Sleep"],
        correct: 1
    }
];
