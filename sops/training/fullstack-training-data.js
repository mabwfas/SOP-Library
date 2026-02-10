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
<h2>📚 TASK 1: FULL-STACK MINDSET - The ₹5 Lakh Mistake</h2>

<!-- WELCOME TO DIGITAL HEROES -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🚀 Welcome to Digital Heroes - You Are Part of Something Bigger</h3>
    <p>Before we dive into full-stack development, you need to understand something critical: <strong>You are not just joining a company. You are joining a mission.</strong></p>
    
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #3B82F6; padding: 20px; margin: 15px 0;">
        <strong style="color: #60A5FA;">🎯 Our Journey: Point A to Point B</strong>
        <table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
            <tr style="background: rgba(59, 130, 246, 0.2);">
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Point A (Now):</strong> ₹9.2 Crores</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Point B (2027):</strong> ₹75 Crores</td>
            </tr>
        </table>
        <p style="margin: 0;">Every team member contributes to this journey, and every team member benefits from it through our equity-sharing model—<strong>even interns from Day 1</strong>.</p>
    </div>
</div>

<!-- THE INTERCONNECTED CHAIN -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.1)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #10B981; margin-top: 0;">🔗 The Interconnected Chain: Where YOU Fit</h3>
    <p>At Digital Heroes, we operate as a <strong>single, interconnected chain</strong> where every link is equally critical:</p>
    
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; margin: 15px 0; font-size: 0.95em;">
        <p style="margin: 0;">
            <strong style="color: #FBBF24;">Sales</strong> → generates enquiries<br>
            ↓<br>
            <strong style="color: #10B981; font-size: 1.2em;">⭐ YOU (Full-Stack)</strong> → <strong>THE COMPLETE ENGINE - build the entire product end-to-end</strong><br>
            ↓<br>
            <strong style="color: #F472B6;">Design Implementation</strong> → pixel-perfect UI<br>
            ↓<br>
            <strong style="color: #60A5FA;">Backend & Database</strong> → reliable, secure, fast<br>
            ↓<br>
            <strong style="color: #A78BFA;">Client Satisfaction</strong> → leads to 5-star reviews
        </p>
    </div>
    
    <div class="highlight-box" style="background: rgba(16, 185, 129, 0.15); border-left: 4px solid #059669; padding: 15px; margin: 15px 0;">
        <strong style="color: #10B981;">🔧 Your Critical Role:</strong>
        <p style="margin: 10px 0 0 0;">As a full-stack developer, you are the <strong>COMPLETE ENGINE</strong> who builds entire products from frontend to backend. You understand the whole picture—databases, APIs, security, UI, and performance. A bug in your checkout flow = lost sales. A slow API = frustrated users. A security flaw = ₹5 Lakh disaster. Your code touches EVERY layer of the application, making you indispensable to client success.</p>
    </div>
    
    <p style="color: #10B981; font-weight: 700; text-align: center; margin: 20px 0; font-size: 1.1em;">Broken full-stack code = Broken product = Broken client trust = Chain collapses. You ARE the backbone.</p>
</div>

<div class="content-section">
    <h3>⚠️ THE STORY THAT CHANGED EVERYTHING</h3>
    <p>A developer at a well-funded startup hardcoded an API key in the frontend React code. The key was for a geolocation service charging $0.005 per request. Scrapers discovered the exposed key within 72 hours, automated scripts hammered the API, and within 24 hours the client received a bill for ₹5 Lakhs (~$6,000 USD).</p>
    
    <div class="highlight-box" style="background: rgba(239, 68, 68, 0.15); border-left: 4px solid #EF4444; padding: 20px; margin: 20px 0;">
        <strong style="color: #EF4444;">🚨 THE REAL COST:</strong>
        <ul style="margin: 10px 0;">
            <li>₹5 Lakhs in API charges (paid by Digital Heroes)</li>
            <li>Client relationship damaged permanently</li>
            <li>Developer's reputation destroyed</li>
            <li>3 weeks of emergency work to fix and migrate</li>
            <li>Future billing disputes with the API provider</li>
        </ul>
        <p style="color: #F87171; font-weight: bold; margin-top: 15px;">This was not a sophisticated attack. It was a SIMPLE mistake that a 5-minute code review would have caught.</p>
    </div>
</div>

<div class="content-section">
    <h3>🧠 PART 1: THE PROFESSIONAL DEVELOPER MINDSET</h3>
    
    <h4>1.1 Code Runs on REAL Money</h4>
    <p>Unlike tutorials or side projects, every line of code you write at Digital Heroes touches real revenue. Consider these scenarios:</p>
    <ul>
        <li><strong>E-commerce checkout:</strong> A bug in the payment flow = lost sales ($1,000s/hour)</li>
        <li><strong>SaaS dashboard:</strong> Slow query = churned customers ($10,000s/year)</li>
        <li><strong>Authentication:</strong> Security flaw = data breach (unlimited liability)</li>
        <li><strong>API performance:</strong> Every 100ms delay = 1% conversion drop</li>
    </ul>
    
    <h4>1.2 The Two Types of Developers</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: rgba(239, 68, 68, 0.2);">
            <td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1); width: 50%;">
                <strong style="color: #EF4444;">❌ The "It Works on My Machine" Developer</strong><br><br>
                • Writes code without planning<br>
                • Uses \`any\` in TypeScript "temporarily"<br>
                • Skips testing because "it's obvious"<br>
                • Hardcodes values for speed<br>
                • Blames environment when bugs appear<br>
                • Never reads error logs carefully<br>
                <em style="color: #F87171;">Will be stuck at ₹30K/month forever</em>
            </td>
            <td style="padding: 15px; border: 1px solid rgba(255,255,255,0.1); width: 50%;">
                <strong style="color: #10B981;">✅ The Digital Heroes Developer</strong><br><br>
                • Plans architecture before touching code<br>
                • Treats TypeScript as law, not suggestion<br>
                • Writes tests even for "simple" functions<br>
                • Uses environment variables religiously<br>
                • Takes ownership when bugs appear<br>
                • Reads every line of error messages<br>
                <em style="color: #10B981;">Commands ₹1L+/month and builds trust</em>
            </td>
        </tr>
    </table>
    
    <h4>1.3 Why Attitude > Skill at Entry Level</h4>
    <p>We can teach you React, PostgreSQL, and deployment. We CANNOT teach you to care about quality. The developers who rise fastest are those who:</p>
    <ul>
        <li>Triple-check their own code before asking for review</li>
        <li>Ask "what could go wrong?" for every feature</li>
        <li>Document decisions without being asked</li>
        <li>Communicate blockers immediately, not after 3 days</li>
        <li>Learn from every code review comment</li>
    </ul>
</div>

<div class="content-section">
    <h3>🛡️ PART 2: THE 5 CORE PRINCIPLES (Memorize These)</h3>
    
    <h4>PRINCIPLE 1: Plan Twice, Code Once</h4>
    <p>Before writing ANY code, you must have:</p>
    <ul>
        <li><strong>Database Schema:</strong> Know your tables, relationships, and indexes</li>
        <li><strong>API Endpoints:</strong> List every route with request/response shapes</li>
        <li><strong>Component Tree:</strong> Sketch the component hierarchy</li>
        <li><strong>Edge Cases:</strong> What happens when data is empty? When user is offline?</li>
    </ul>
    <div class="code-block" style="background: #1e1e1e; padding: 15px; font-family: monospace; border-radius: 8px; margin: 15px 0;">
        // ❌ BAD: Starting to code immediately<br>
        const users = await fetch('/api/users') // What's the shape? Error handling?<br><br>
        // ✅ GOOD: Planning first<br>
        // Schema: User { id: string, email: string, createdAt: Date }<br>
        // Endpoint: GET /api/users -> { users: User[], total: number }<br>
        // Error: 401 -> redirect to login, 500 -> show toast<br>
        // Edge: empty array -> show "No users yet" message
    </div>
    
    <h4>PRINCIPLE 2: Typesafety is Non-Negotiable</h4>
    <p>The \`any\` type defeats the purpose of TypeScript. It creates runtime bombs that explode in production at 3 AM.</p>
    <div class="code-block" style="background: #1e1e1e; padding: 15px; font-family: monospace; border-radius: 8px; margin: 15px 0;">
        // ❌ FORBIDDEN: Using 'any'<br>
        const data: any = await res.json();<br>
        console.log(data.user.name); // Might crash!<br><br>
        // ✅ REQUIRED: Full typing with Zod validation<br>
        const UserSchema = z.object({<br>
        &nbsp;&nbsp;id: z.string().uuid(),<br>
        &nbsp;&nbsp;name: z.string().min(1),<br>
        &nbsp;&nbsp;email: z.string().email()<br>
        });<br>
        const data = UserSchema.parse(await res.json()); // Safe!
    </div>
    
    <h4>PRINCIPLE 3: Don't Repeat Yourself (DRY)</h4>
    <p>If you write the same logic twice, extract it into a function. Three times? It needs its own module.</p>
    <ul>
        <li><strong>Repeated API calls?</strong> Create a \`useQuery\` hook or API client class</li>
        <li><strong>Repeated UI patterns?</strong> Create a reusable component</li>
        <li><strong>Repeated validation?</strong> Create a Zod schema and import it</li>
        <li><strong>Repeated error handling?</strong> Create a middleware or wrapper</li>
    </ul>
    
    <h4>PRINCIPLE 4: Secure by Default</h4>
    <p>Security is not a feature you add later. It's baked into every decision:</p>
    <ul>
        <li><strong>Environment Variables:</strong> ALL secrets in .env, NEVER in code</li>
        <li><strong>Input Validation:</strong> Validate EVERY input with Zod (frontend AND backend)</li>
        <li><strong>SQL Injection:</strong> NEVER concatenate user input into queries</li>
        <li><strong>XSS Prevention:</strong> NEVER use dangerouslySetInnerHTML with user data</li>
        <li><strong>CSRF Tokens:</strong> Required for all state-changing operations</li>
        <li><strong>Rate Limiting:</strong> All public endpoints must have limits</li>
    </ul>
    
    <h4>PRINCIPLE 5: Peer Review is Mandatory</h4>
    <p>No code reaches \`main\` or \`production\` without at least ONE other developer approving it. This is not bureaucracy—it's insurance.</p>
    <div class="highlight-box">
        <strong>Why Reviews Work:</strong>
        <ul>
            <li>Fresh eyes catch what tired eyes miss</li>
            <li>Knowledge spreads across the team</li>
            <li>Standards stay consistent</li>
            <li>Bugs are caught before they cost money</li>
        </ul>
        <p><strong>Exception Policy:</strong> There are NO exceptions. Even hotfixes get reviewed in a 5-minute sync call.</p>
    </div>
</div>

<div class="content-section">
    <h3>🔐 PART 3: SECURITY FUNDAMENTALS (The Basics You Must Know)</h3>
    
    <h4>3.1 Environment Variables: The Golden Rule</h4>
    <p>Any value that differs between environments (dev/staging/prod) OR is secret MUST be in environment variables.</p>
    <div class="code-block" style="background: #1e1e1e; padding: 15px; font-family: monospace; border-radius: 8px; margin: 15px 0;">
        // ❌ NEVER: Hardcoding secrets<br>
        const stripe = new Stripe("sk_live_abc123xyz");<br>
        const dbUrl = "postgresql://admin:password@db.com/prod";<br><br>
        // ✅ ALWAYS: Environment variables<br>
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);<br>
        const dbUrl = process.env.DATABASE_URL;
    </div>
    <p><strong>Files to create:</strong></p>
    <ul>
        <li>\`.env.local\` - Your local development secrets (gitignored)</li>
        <li>\`.env.example\` - Template with dummy values (committed)</li>
        <li>Vercel/Railway dashboard - Production secrets (never in code)</li>
    </ul>
    
    <h4>3.2 SQL Injection: The Classic Attack</h4>
    <p>SQL injection is a 20-year-old vulnerability that still claims victims because developers concatenate strings.</p>
    <div class="code-block" style="background: #1e1e1e; padding: 15px; font-family: monospace; border-radius: 8px; margin: 15px 0;">
        // ❌ VULNERABLE: String concatenation<br>
        const query = "SELECT * FROM users WHERE id = " + userId;<br>
        // If userId = "1 OR 1=1" -> Returns ALL users!<br>
        // If userId = "1; DROP TABLE users;" -> Goodbye database!<br><br>
        // ✅ SAFE: Parameterized queries (Prisma does this automatically)<br>
        const user = await prisma.user.findUnique({<br>
        &nbsp;&nbsp;where: { id: userId }<br>
        });
    </div>
    
    <h4>3.3 XSS (Cross-Site Scripting): The Silent Killer</h4>
    <p>XSS allows attackers to inject JavaScript into your pages, stealing session tokens and user data.</p>
    <div class="code-block" style="background: #1e1e1e; padding: 15px; font-family: monospace; border-radius: 8px; margin: 15px 0;">
        // ❌ VULNERABLE: Rendering raw HTML from user<br>
        &lt;div dangerouslySetInnerHTML={{ __html: userBio }} /&gt;<br>
        // If userBio = "&lt;script&gt;steal(document.cookie)&lt;/script&gt;" -> Hacked!<br><br>
        // ✅ SAFE: React escapes by default<br>
        &lt;div&gt;{userBio}&lt;/div&gt;  // Script tags are shown as text, not executed<br><br>
        // ✅ If you MUST render HTML: Sanitize first<br>
        import DOMPurify from 'dompurify';<br>
        &lt;div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(userBio) }} /&gt;
    </div>
</div>

<div class="content-section">
    <h3>📊 PART 4: CODE QUALITY STANDARDS</h3>
    
    <h4>4.1 Linting & Formatting</h4>
    <p>ESLint and Prettier run on every save. No exceptions. The configuration is shared across the team.</p>
    <ul>
        <li><strong>Warnings:</strong> Must be resolved before merging</li>
        <li><strong>Errors:</strong> Build fails immediately</li>
        <li><strong>Format on Save:</strong> Enabled in all editor configs</li>
    </ul>
    
    <h4>4.2 Naming Conventions</h4>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Type</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Convention</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Example</strong></td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Components</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">PascalCase</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">UserProfileCard.tsx</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Functions</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">camelCase</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">getUserById()</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Constants</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">SCREAMING_SNAKE</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">MAX_RETRY_COUNT</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Files</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">kebab-case</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">user-actions.ts</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Database Tables</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">PascalCase (Prisma)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">UserProfile</td>
        </tr>
    </table>
    
    <h4>4.3 Comment Guidelines</h4>
    <p>Comments explain WHY, not WHAT. Good code is self-documenting for the WHAT.</p>
    <div class="code-block" style="background: #1e1e1e; padding: 15px; font-family: monospace; border-radius: 8px; margin: 15px 0;">
        // ❌ BAD: Stating the obvious<br>
        // Increment counter by 1<br>
        counter++;<br><br>
        // ✅ GOOD: Explaining why<br>
        // Using retry counter to prevent infinite loops on flaky API<br>
        // After 3 failures, we surface error to user instead of silent retry<br>
        retryCount++;
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 2px solid rgba(59, 130, 246, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASKS</h3>
    
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #60A5FA; margin-top: 0;">Exercise 1: Security Audit</h4>
        <p>Review this vulnerable code snippet and identify ALL security issues:</p>
        <div class="code-block" style="background: #1e1e1e; padding: 10px; font-family: monospace; border-radius: 8px;">
            const user = await db.query("SELECT * FROM users WHERE id=" + req.body.id);<br>
            const apiKey = "sk_live_abcd1234";<br>
            return &lt;div dangerouslySetInnerHTML={{ __html: user.bio }} /&gt;;
        </div>
        <p><strong>List all vulnerabilities and write the secure version.</strong></p>
    </div>
    
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #60A5FA; margin-top: 0;">Exercise 2: Environment Setup</h4>
        <p>Create an \`.env.example\` file for a Next.js + PostgreSQL + Stripe project. Include all necessary variables with dummy/placeholder values.</p>
    </div>
    
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #60A5FA; margin-top: 0;">Exercise 3: Type Definition</h4>
        <p>Given this API response, write the complete TypeScript interface AND Zod schema:</p>
        <div class="code-block" style="background: #1e1e1e; padding: 10px; font-family: monospace; border-radius: 8px;">
            { "user": { "id": "abc123", "email": "test@example.com", "role": "admin", "createdAt": "2024-01-15T10:30:00Z" } }
        </div>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 <strong>15 questions</strong> testing your understanding of Full-Stack Mindset</li>
        <li>🎯 Score <strong>15/15</strong> to proceed to Task 2</li>
        <li>⏱️ Questions cover security, code quality, and professional standards</li>
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
    // TASK 1: MINDSET (10 Questions)
    {
        question: "A developer hardcoded an API key in the frontend. What is the PRIMARY risk?",
        options: ["Slower page load times", "Scrapers exhaust quota causing financial loss", "Users see the key in console", "Key becomes invalid after deployment"],
        correct: 1
    },
    {
        question: "Which principle states 'Write the schema, then the code'?",
        options: ["Code First, Plan Later", "Plan Twice, Code Once", "Schema After Coding", "Iterate Without Planning"],
        correct: 1
    },
    {
        question: "What does 'No any. Ever.' refer to in TypeScript development?",
        options: ["No anonymous functions allowed", "Typesafety is non-negotiable", "No arrays in the codebase", "No external packages allowed"],
        correct: 1
    },
    {
        question: "According to DH principles, when can code be merged without peer review?",
        options: ["When it's a hotfix for production", "When the senior dev is absent", "Never - peer review is mandatory", "When it's less than 10 lines"],
        correct: 2
    },
    {
        question: "The ₹5 Lakh failure story teaches us that security is:",
        options: ["A nice-to-have feature", "The foundation, not a feature", "Only for banking apps", "The client's responsibility"],
        correct: 1
    },
    {
        question: "Which statement about the 'any' type in TypeScript is correct?",
        options: ["It's acceptable for quick prototypes", "It should never be used in production", "It's required for external APIs", "It improves code readability"],
        correct: 1
    },
    {
        question: "What is the consequence of skipping peer review?",
        options: ["Faster deployment cycles", "Hidden bugs reach production", "Better team morale", "Reduced code complexity"],
        correct: 1
    },
    {
        question: "DRY principle helps prevent which common issue?",
        options: ["Code running too fast", "Logic duplicated across files", "Too many team members", "Excessive documentation"],
        correct: 1
    },
    {
        question: "In the vulnerability example SELECT * FROM users WHERE id= + req.body.id, the issue is:",
        options: ["Using SELECT instead of FIND", "SQL injection vulnerability", "Missing column names in query", "Incorrect table reference"],
        correct: 1
    },
    {
        question: "Secure by Default means validating every input using:",
        options: ["Console.log statements", "HTML form validation only", "Zod or similar validators", "Browser cookies"],
        correct: 2
    },

    // TASK 2: PLANNING (10 Questions)
    {
        question: "What must be approved BEFORE any code is written?",
        options: ["Client's payment invoice", "Technical Spec Document (TSD)", "Design mockups only", "Sprint backlog items"],
        correct: 1
    },
    {
        question: "The TSD includes all EXCEPT:",
        options: ["ER Diagram with relationships", "List of API endpoints", "Developer's salary details", "Risk identification section"],
        correct: 2
    },
    {
        question: "Why is Discovery Phase charged as paid work?",
        options: ["It requires no effort at all", "Planning is work and has value", "Clients prefer paying upfront", "It's a DH marketing strategy"],
        correct: 1
    },
    {
        question: "Which risk might be documented in a TSD?",
        options: ["Developer might take vacation", "Payment gateway approvals take 3 days", "Coffee machine is broken", "Office WiFi is occasionally slow"],
        correct: 1
    },
    {
        question: "An ER Diagram in the TSD shows:",
        options: ["Employee work schedules", "Database table relationships", "Frontend color schemes", "API response times"],
        correct: 1
    },
    {
        question: "What happens if TSD is not approved before coding?",
        options: ["Development starts immediately", "Project is put on hold", "We do not write code", "Senior dev makes the call"],
        correct: 2
    },
    {
        question: "Tech Stack section of TSD includes:",
        options: ["Verified libraries and frameworks", "Team member assignments", "Client's business goals", "Marketing strategies"],
        correct: 0
    },
    {
        question: "Planning for free is:",
        options: ["A good way to win clients", "Never acceptable - charge for discovery", "Standard industry practice", "Recommended for small projects"],
        correct: 1
    },
    {
        question: "Course Platform schema requires relations between:",
        options: ["Only User and Course tables", "User, Course, Lesson, Enrollment", "Just a single Users table", "Courses and Payments only"],
        correct: 1
    },
    {
        question: "API Endpoints section lists:",
        options: ["Only GET requests", "GET, POST, PUT methods", "Database column names", "Frontend component names"],
        correct: 1
    },

    // TASK 3: TECH STACK (10 Questions)
    {
        question: "In Next.js App Router, components should be Server Components by:",
        options: ["Explicit declaration only", "Default - use 'use client' sparingly", "Only for API routes", "Never - always use client"],
        correct: 1
    },
    {
        question: "When should Node/Express be used instead of Server Actions?",
        options: ["For simple CRUD operations", "For complex APIs and long-running jobs", "For all frontend requests", "When database is PostgreSQL"],
        correct: 1
    },
    {
        question: "Server Actions are best suited for:",
        options: ["Complex websocket connections", "Simple CRUD directly in Next.js", "Long-running background jobs", "Real-time chat applications"],
        correct: 1
    },
    {
        question: "What is the mandatory ORM for PostgreSQL at DH?",
        options: ["Sequelize for legacy support", "Prisma for typesafety", "Raw SQL for performance", "MongoDB drivers"],
        correct: 1
    },
    {
        question: "Raw SQL strings are allowed only for:",
        options: ["All database operations", "Performance optimization cases", "Simple SELECT queries", "Insert operations only"],
        correct: 1
    },
    {
        question: "For a chat app with real-time websockets, the better choice is:",
        options: ["Next.js Server Actions alone", "Node.js Custom Server", "Static HTML pages", "Client-side JavaScript only"],
        correct: 1
    },
    {
        question: "BullMQ is used for:",
        options: ["Frontend state management", "Long-running background jobs", "Database migrations", "CSS preprocessing"],
        correct: 1
    },
    {
        question: "The 'use client' directive should be:",
        options: ["Used on every component", "Used sparingly and intentionally", "Avoided completely", "Only for API routes"],
        correct: 1
    },
    {
        question: "Why is Prisma mandatory for database work?",
        options: ["It's free and open source", "It provides typesafety", "It's faster than raw SQL", "It works only with MySQL"],
        correct: 1
    },
    {
        question: "Which combination is the DH standard frontend stack?",
        options: ["Vue.js with Vuetify", "Next.js with React", "Angular with Material", "Svelte with Tailwind"],
        correct: 1
    },

    // TASK 4: SETUP & ARCHITECTURE (10 Questions)
    {
        question: "Feature-based folder structure means components go in:",
        options: ["A single /components folder", "Co-located within /features/auth", "Random directories", "Root directory only"],
        correct: 1
    },
    {
        question: "The 'main' branch represents:",
        options: ["Development testing", "Production - it's sacred", "Feature experiments", "Backup code storage"],
        correct: 1
    },
    {
        question: "Feature branches should be named like:",
        options: ["feature-1, feature-2", "feat/authentication or fix/navbar-bug", "my-changes-today", "random-unique-id"],
        correct: 1
    },
    {
        question: "Pull Requests should go into which branch first?",
        options: ["Directly to main branch", "The dev branch first", "Any available branch", "Client's repository"],
        correct: 1
    },
    {
        question: "When resolving a Git CONFLICT, first step is:",
        options: ["Delete the conflicting file", "Manually review and merge changes", "Push force to main", "Create a new repository"],
        correct: 1
    },
    {
        question: "Co-location means putting related code:",
        options: ["In separate repositories", "Together in feature folders", "Only in root directory", "Across multiple servers"],
        correct: 1
    },
    {
        question: "Environment variables should be:",
        options: ["Committed to Git always", "Kept secure and separate", "Shared on Slack openly", "Hardcoded in source"],
        correct: 1
    },
    {
        question: "The /features/auth folder contains:",
        options: ["Only authentication UI", "components, actions, and hooks", "Global app settings", "Third-party libraries"],
        correct: 1
    },
    {
        question: "Branching strategy prevents:",
        options: ["Fast development cycles", "Production breaking changes", "Team collaboration", "Code documentation"],
        correct: 1
    },
    {
        question: "Before merging a PR, you must:",
        options: ["Wait for Friday afternoon", "Get peer review approval", "Delete all test files", "Email the client"],
        correct: 1
    },

    // TASK 5: DEVELOPMENT PHASES (10 Questions)
    {
        question: "Phase 1 (Foundation) covers which weeks?",
        options: ["Weeks 4-6 of the project", "Weeks 1-2 of the project", "Final two weeks only", "No specific timeline"],
        correct: 1
    },
    {
        question: "The 'Skeleton' of the app includes:",
        options: ["Only CSS styling", "Auth setup, DB schema, UI Kit", "Marketing pages only", "Payment integrations"],
        correct: 1
    },
    {
        question: "Third-party integrations happen in which phase?",
        options: ["Phase 1 - Foundation", "Phase 3 - Integrations (Wk 4-5)", "After project completion", "Before planning starts"],
        correct: 1
    },
    {
        question: "Why does Phase 3 need buffer time?",
        options: ["Developers take breaks", "This is where bugs happen", "Clients delay feedback", "Less work is required"],
        correct: 1
    },
    {
        question: "Stripe, SendGrid, Twilio belong to:",
        options: ["Foundation phase only", "Integration phase", "Testing phase only", "Documentation phase"],
        correct: 1
    },
    {
        question: "DB schema should be locked by end of:",
        options: ["Phase 3 integrations", "Phase 1 foundation", "Final project week", "Client approval only"],
        correct: 1
    },
    {
        question: "A 6-week project has how many main phases?",
        options: ["Only 2 phases total", "3 phases typically", "6 phases - one per week", "No defined phases"],
        correct: 1
    },
    {
        question: "Map View feature for Real Estate app goes in:",
        options: ["Phase 1 with foundation", "Phase 2 core features", "Before project starts", "Post-launch updates only"],
        correct: 1
    },
    {
        question: "Auth setup happens during:",
        options: ["Final week of project", "Phase 1 Foundation", "After deployment only", "Integration phase"],
        correct: 1
    },
    {
        question: "Phase structure helps prevent:",
        options: ["Client communication", "Scope creep and timeline issues", "Code documentation", "Team collaboration"],
        correct: 1
    },

    // TASK 6: DATABASE DESIGN (10 Questions)
    {
        question: "Storing User Address repeatedly inside Orders table violates:",
        options: ["Security best practices", "Normalization principles", "API design patterns", "Frontend conventions"],
        correct: 1
    },
    {
        question: "Adding an index to a column helps with:",
        options: ["Data encryption speed", "Search query performance", "Database backups", "User authentication"],
        correct: 1
    },
    {
        question: "Without an index, the database must:",
        options: ["Use cached results", "Scan every row sequentially", "Skip the query entirely", "Ask for admin approval"],
        correct: 1
    },
    {
        question: "@@index([email]) in Prisma creates:",
        options: ["A unique constraint", "A database index on email", "An encrypted field", "A required field"],
        correct: 1
    },
    {
        question: "A 5-second query on 1M rows likely needs:",
        options: ["More server RAM only", "An index on the status column", "Faster internet connection", "Smaller table name"],
        correct: 1
    },
    {
        question: "Prisma Migrations help with:",
        options: ["Frontend styling changes", "Database schema changes", "API documentation", "Client communication"],
        correct: 1
    },
    {
        question: "Normalization reduces:",
        options: ["Query performance only", "Data redundancy and inconsistency", "Developer productivity", "Security vulnerabilities"],
        correct: 1
    },
    {
        question: "Creating a separate Address table is an example of:",
        options: ["Denormalization strategy", "Proper normalization", "Performance anti-pattern", "Security hardening"],
        correct: 1
    },
    {
        question: "Query optimization starts with analyzing:",
        options: ["Frontend load times", "Database indexes and query plans", "Server hardware specs", "Network latency only"],
        correct: 1
    },
    {
        question: "SELECT * FROM logs WHERE status = 'ERROR' on 1M rows is slow because:",
        options: ["SELECT * is deprecated", "status column lacks an index", "ERROR is a reserved word", "logs table doesn't exist"],
        correct: 1
    },

    // TASK 7: API DEVELOPMENT (10 Questions)
    {
        question: "Which HTTP method is idempotent and retrieves data?",
        options: ["POST for creation", "GET for retrieval", "DELETE for removal", "PATCH for updates"],
        correct: 1
    },
    {
        question: "PATCH is used to:",
        options: ["Create new resources", "Update resource partially", "Delete resources completely", "Retrieve full resources"],
        correct: 1
    },
    {
        question: "PUT differs from PATCH because PUT:",
        options: ["Updates partially only", "Replaces resource fully", "Only works with JSON", "Requires authentication"],
        correct: 1
    },
    {
        question: "Zod is primarily used for:",
        options: ["Database hosting services", "Runtime schema validation", "Frontend UI components", "CSS preprocessing"],
        correct: 1
    },
    {
        question: "API validation should happen on:",
        options: ["Only input from users", "Both INPUT and OUTPUT", "Output responses only", "Neither - trust clients"],
        correct: 1
    },
    {
        question: "When a database operation fails, return status:",
        options: ["200 OK with error message", "500 Internal Server Error", "404 Not Found always", "302 Redirect to home"],
        correct: 1
    },
    {
        question: "Stack traces in error responses are:",
        options: ["Required for debugging", "A security risk - never expose", "Optional for production", "Helpful for end users"],
        correct: 1
    },
    {
        question: "API documentation is maintained using:",
        options: ["Word documents only", "Swagger/OpenAPI specs", "Email chains to team", "Code comments alone"],
        correct: 1
    },
    {
        question: "z.string().email() validates that input is:",
        options: ["Any string value", "A valid email format", "A number as string", "An array of strings"],
        correct: 1
    },
    {
        question: "RESTful API design uses resources named like:",
        options: ["/getUsers and /createUser", "/users and /users/:id", "/api_v1_user_list", "/fetch-all-user-data"],
        correct: 1
    },

    // TASK 8: SECURITY ESSENTIALS (10 Questions)
    {
        question: "OWASP Top 10 #1 vulnerability is:",
        options: ["SQL Injection attacks", "Broken Access Control", "Weak passwords only", "Missing HTTPS"],
        correct: 1
    },
    {
        question: "Passwords should be stored using:",
        options: ["Plain text in database", "bcrypt or argon2 hashing", "Base64 encoding only", "Reversible encryption"],
        correct: 1
    },
    {
        question: "SQL injection is prevented by:",
        options: ["Trusting user input completely", "ORMs with parameterized queries", "Longer password requirements", "Frontend form validation"],
        correct: 1
    },
    {
        question: "JWT tokens are stateless meaning:",
        options: ["They store all data on server", "Server doesn't track sessions", "They expire immediately", "They can't be decoded"],
        correct: 1
    },
    {
        question: "The tradeoff of JWT vs Sessions is:",
        options: ["JWT is easier to revoke", "Sessions are database-heavy but secure", "JWT requires no encryption", "Sessions have no security"],
        correct: 1
    },
    {
        question: "XSS attacks inject malicious:",
        options: ["SQL queries into database", "Scripts into web pages", "Files into servers", "Users into systems"],
        correct: 1
    },
    {
        question: "React protects against XSS by:",
        options: ["Blocking all user input", "Escaping content by default", "Removing JavaScript entirely", "Using HTTPS only"],
        correct: 1
    },
    {
        question: "dangerouslySetInnerHTML is dangerous because:",
        options: ["It's slow performance", "It bypasses React's XSS protection", "It breaks CSS styling", "It requires admin access"],
        correct: 1
    },
    {
        question: "Broken Access Control means:",
        options: ["Passwords are too weak", "Users access unauthorized pages", "Database is too slow", "API returns wrong data"],
        correct: 1
    },
    {
        question: "Cryptographic Failure includes:",
        options: ["Using too many passwords", "Storing passwords as plain text", "Encrypting too much data", "Having complex algorithms"],
        correct: 1
    },

    // TASK 9: QA & TESTING (10 Questions)
    {
        question: "Unit Tests test:",
        options: ["Full user browser flows", "Individual functions in isolation", "Database connections only", "Third-party integrations"],
        correct: 1
    },
    {
        question: "E2E tests are characterized as:",
        options: ["Fast and run frequently", "Slow but test full browser flow", "Only for backend APIs", "Not needed in production"],
        correct: 1
    },
    {
        question: "The testing pyramid has most tests at:",
        options: ["E2E level at the top", "Unit test level at the base", "Integration level only", "Manual testing level"],
        correct: 1
    },
    {
        question: "Jest is used for which type of testing?",
        options: ["End-to-end browser tests", "Unit and integration tests", "Visual regression only", "Performance benchmarks"],
        correct: 1
    },
    {
        question: "Playwright is used for:",
        options: ["Unit testing functions", "End-to-end browser testing", "Database migrations", "API documentation"],
        correct: 1
    },
    {
        question: "Pre-merge checklist includes checking for:",
        options: ["Developer's mood that day", "Leftover console.log statements", "Preferred code editor", "Desktop wallpaper"],
        correct: 1
    },
    {
        question: "A Playwright test script should:",
        options: ["Only click random buttons", "Navigate, interact, and assert results", "Never check URLs", "Avoid form submissions"],
        correct: 1
    },
    {
        question: "Integration tests verify that:",
        options: ["Individual functions work alone", "Multiple modules work together", "Browser renders correctly", "Users can register only"],
        correct: 1
    },
    {
        question: "Build passing is checked:",
        options: ["Only at final deployment", "Before every merge", "Once a month manually", "By the client only"],
        correct: 1
    },
    {
        question: "Linting checks for:",
        options: ["Database query speed", "Code style and potential errors", "Server uptime status", "User login attempts"],
        correct: 1
    },

    // TASK 10: DEPLOYMENT & DEVOPS (10 Questions)
    {
        question: "Vercel is best suited for hosting:",
        options: ["PostgreSQL databases", "Next.js frontend apps", "Background job workers", "Email sending services"],
        correct: 1
    },
    {
        question: "Railway/Render is best for:",
        options: ["Static frontend sites", "Database and background workers", "Simple HTML pages", "CDN distribution only"],
        correct: 1
    },
    {
        question: "AWS should be used:",
        options: ["For all projects by default", "Only if necessary - it's complex", "For frontend only", "To replace Vercel always"],
        correct: 1
    },
    {
        question: "CI/CD stands for:",
        options: ["Code Integration/Code Deletion", "Continuous Integration/Continuous Deployment", "Computer Internet/Computer Data", "Client Interface/Client Dashboard"],
        correct: 1
    },
    {
        question: "GitHub Actions should run tests:",
        options: ["Only at midnight daily", "On every Pull Request", "Once after deployment", "When manually triggered only"],
        correct: 1
    },
    {
        question: ".env files should be committed to Git:",
        options: ["Yes, for team sharing", "Never - they contain secrets", "Only for development", "Only production keys"],
        correct: 1
    },
    {
        question: "After accidentally pushing .env to GitHub, first step is:",
        options: ["Delete the repository", "Rotate all exposed credentials", "Ignore and continue", "Blame the team member"],
        correct: 1
    },
    {
        question: "Monitoring tools like Sentry help with:",
        options: ["Marketing analytics", "Error tracking and logging", "User onboarding", "Sales projections"],
        correct: 1
    },
    {
        question: "CI pipeline failures should:",
        options: ["Be ignored if minor", "Block the merge until fixed", "Only notify the manager", "Auto-approve anyway"],
        correct: 1
    },
    {
        question: "Environment variables on Vercel are set:",
        options: ["In the source code directly", "In the Vercel dashboard securely", "Through GitHub commits", "Via email to support"],
        correct: 1
    },

    // TASK 11: CLIENT HANDOVER (10 Questions)
    {
        question: "The Handover Package includes all EXCEPT:",
        options: ["Source code and repo invite", "Architecture diagram", "Developer's personal notes", "README.md instructions"],
        correct: 2
    },
    {
        question: "Video training for clients uses:",
        options: ["Live Zoom calls only", "Loom recordings library", "PDF documents only", "Phone call walkthroughs"],
        correct: 1
    },
    {
        question: "README.md must include:",
        options: ["Developer's resume", "How to run locally", "Client's business history", "Competitor analysis"],
        correct: 1
    },
    {
        question: "Admin credentials are part of:",
        options: ["Marketing materials", "The Handover Package", "Public documentation", "Source code comments"],
        correct: 1
    },
    {
        question: "Loom videos should show clients how to:",
        options: ["Write code themselves", "Change text, ban users, view analytics", "Deploy to production", "Debug server errors"],
        correct: 1
    },
    {
        question: "Warranty period is for:",
        options: ["Unlimited free changes", "Post-launch support terms", "Pre-project planning", "Sales negotiations"],
        correct: 1
    },
    {
        question: "Getting Started section includes:",
        options: ["Company history", "Node version and install commands", "Financial projections", "Marketing strategies"],
        correct: 1
    },
    {
        question: "Architecture diagram shows:",
        options: ["Team member photos", "System component relationships", "Office floor plan", "Client org chart"],
        correct: 1
    },
    {
        question: "Repo invite gives client access to:",
        options: ["All DH projects", "Their project source code", "Developer personal repos", "Third-party services"],
        correct: 1
    },
    {
        question: "A smooth handover requires:",
        options: ["Minimal documentation", "Documentation and training videos", "Only source code zip", "Verbal instructions only"],
        correct: 1
    },

    // TASK 12: DIFFICULT SITUATIONS (10 Questions)
    {
        question: "When server is down, first action is:",
        options: ["Email the CEO immediately", "Check logs and host status", "Wait until morning", "Blame the hosting provider"],
        correct: 1
    },
    {
        question: "During an outage, communicate updates every:",
        options: ["24 hours minimum", "30 minutes to stakeholders", "Only when resolved", "Through social media only"],
        correct: 1
    },
    {
        question: "When client says 'It's slow', you should:",
        options: ["Disagree and defend", "Profile and use data to prove fixes", "Ignore the complaint", "Blame their internet"],
        correct: 1
    },
    {
        question: "To identify performance issues, use tools like:",
        options: ["Microsoft Word", "Lighthouse and NewRelic", "Email surveys", "Social media polls"],
        correct: 1
    },
    {
        question: "Expired SSL certificate causes:",
        options: ["Faster page loads", "Site appears insecure/unavailable", "Better SEO rankings", "More user signups"],
        correct: 1
    },
    {
        question: "Post-mortem incident report includes:",
        options: ["Only the fix applied", "Root cause, fix, and prevention", "Blame assignment", "Financial impact only"],
        correct: 1
    },
    {
        question: "Database corruption requires:",
        options: ["Ignoring until it fixes itself", "Immediate investigation and restore", "Waiting for client complaint", "Complete system rebuild"],
        correct: 1
    },
    {
        question: "API rate limiting issue is resolved by:",
        options: ["Increasing request frequency", "Implementing caching and throttling", "Removing API entirely", "Contacting internet provider"],
        correct: 1
    },
    {
        question: "Crisis communication should be:",
        options: ["Vague and defensive", "Clear, honest, and regular", "Only after full resolution", "Through marketing channels"],
        correct: 1
    },
    {
        question: "Prevention section in incident report:",
        options: ["Is optional and rarely needed", "Documents how to avoid recurrence", "Blames team members", "Lists client complaints"],
        correct: 1
    },

    // TASK 13: AI DEVELOPMENT (10 Questions)
    {
        question: "Good AI prompts for code should be:",
        options: ["Vague like 'Make a user page'", "Specific with tech stack and requirements", "As short as possible", "Copy-pasted from tutorials"],
        correct: 1
    },
    {
        question: "AI hallucinations in code mean:",
        options: ["AI creates perfect code", "AI invents packages that don't exist", "AI runs too slowly", "AI requires payment"],
        correct: 1
    },
    {
        question: "After AI generates imports, you must:",
        options: ["Trust and deploy immediately", "Verify packages actually exist", "Delete all imports", "Convert to TypeScript"],
        correct: 1
    },
    {
        question: "A good prompt for refactoring includes:",
        options: ["Just 'fix this code please'", "Context, current state, and desired outcome", "Only the file name", "Developer's personal preferences"],
        correct: 1
    },
    {
        question: "Converting spaghetti code to testable functions requires:",
        options: ["Deleting all comments", "Breaking into small helper functions", "Adding more complexity", "Removing all parameters"],
        correct: 1
    },
    {
        question: "AI-generated code should always be:",
        options: ["Used without review", "Reviewed and tested thoroughly", "Committed immediately", "Shared on social media"],
        correct: 1
    },
    {
        question: "ChatGPT might suggest packages that:",
        options: ["Are always the best option", "Don't exist or are deprecated", "Work perfectly always", "Have official Microsoft support"],
        correct: 1
    },
    {
        question: "Prompt engineering for code is about:",
        options: ["Using fewer words possible", "Crafting clear, detailed instructions", "Avoiding technical terms", "Only asking yes/no questions"],
        correct: 1
    },
    {
        question: "AI assistance is best for:",
        options: ["Replacing developer thinking", "Accelerating repetitive tasks", "Avoiding documentation", "Skipping code reviews"],
        correct: 1
    },
    {
        question: "Legacy code refactoring prompts should specify:",
        options: ["The AI model version", "Current structure and target architecture", "Developer's experience level", "Project budget constraints"],
        correct: 1
    }
];

// Make task content available globally for openTask() function
if (typeof task2Content !== 'undefined') window.task2Content = task2Content;
if (typeof task3Content !== 'undefined') window.task3Content = task3Content;
if (typeof task4Content !== 'undefined') window.task4Content = task4Content;
if (typeof task5Content !== 'undefined') window.task5Content = task5Content;
if (typeof task6Content !== 'undefined') window.task6Content = task6Content;
if (typeof task7Content !== 'undefined') window.task7Content = task7Content;
if (typeof task8Content !== 'undefined') window.task8Content = task8Content;
if (typeof task9Content !== 'undefined') window.task9Content = task9Content;
if (typeof task10Content !== 'undefined') window.task10Content = task10Content;
if (typeof task11Content !== 'undefined') window.task11Content = task11Content;
if (typeof task12Content !== 'undefined') window.task12Content = task12Content;
if (typeof task13Content !== 'undefined') window.task13Content = task13Content;
