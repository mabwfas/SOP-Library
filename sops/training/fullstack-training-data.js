// Full-Stack Developer Training Data
// Complete training content for full-stack certification
// UPGRADED: Visuals, Study Guides, and Expanded Lessons

const trainingTasks = [
    {
        id: 1,
        title: "Mindset & Role",
        description: "Foundation and expectations",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 15-20 minutes",
            "🧠 Internalize the 'Ownership' mindset",
            "🛡️ Understand 'Security First' thinking",
            "🚀 Learn why Performance is a feature, not a bonus"
        ]
    },
    {
        id: 2,
        title: "Company Knowledge",
        description: "Digital Heroes ecosystem",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 15-20 minutes",
            "🏢 Memorize the Ecosystem Architecture",
            "💎 Understand the 'Premium' code standard",
            "🤝 Learn how Devs support Agency & Media arms"
        ]
    },
    {
        id: 3,
        title: "MERN Stack Architecture",
        description: "Core technical stack",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 30-40 minutes",
            "🏗️ Study the MERN Stack Architecture Diagram",
            "🔄 Understand the Data Flow (Client <-> Server <-> DB)",
            "🧱 Memorize the Folder Structure conventions"
        ]
    },
    {
        id: 4,
        title: "API Development",
        description: "Backend mastery",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 25-30 minutes",
            "📡 Study the API Integration Flow",
            "🔒 Learn Authentication (JWT) best practices",
            "⚡ Master Error Handling protocols"
        ]
    },
    {
        id: 5,
        title: "Database Design",
        description: "Data modeling",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 30-45 minutes",
            "📊 Study the E-commerce ERD (Entity Relationship Diagram)",
            "🔑 Understand PKs, FKs, and Indexing",
            "💾 Learn Aggregation Pipeline basics"
        ]
    },
    {
        id: 6,
        title: "Frontend Engineering",
        description: "React & Next.js",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 25-30 minutes",
            "⚛️ Master Component Lifecycle & Hooks",
            "📱 Learn State Management (Context/Redux)",
            "⚡ Understand SSR vs CSR vs ISR"
        ]
    },
    {
        id: 7,
        title: "DevOps & Deployment",
        description: "CI/CD & Hosting",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 20-25 minutes",
            "🚀 Learn the Deployment Pipeline (Vercel/Heroku)",
            "🔄 Understand CI/CD basics",
            "🌐 Master Environment Variables management"
        ]
    },
    {
        id: 8,
        title: "Testing & QA",
        description: "Reliability engineering",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 25-30 minutes",
            "🧪 Learn Unit vs Integration vs E2E testing",
            "✅ Master the 'Definition of Done'",
            "🐞 Understand Debugging Protocols"
        ]
    },
    {
        id: 9,
        title: "Practice Scenarios",
        description: "Real-world challenges",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 30-45 minutes",
            "🧠 Solve the 'Production Outage' scenario",
            "🐌 Fix the 'Slow API' performance issue",
            "🔐 Handle the 'Security Vulnerability' alert"
        ]
    },
    {
        id: 10,
        title: "Final Certification",
        description: "Comprehensive assessment",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 45-60 minutes",
            "📖 Review ALL previous modules",
            "🏆 Score 20/20 to pass",
            "🎉 Get ready to build the future!"
        ]
    }
];

const task1Content = `
<h2>📚 PART 1: DEV MINDSET</h2>

<div class="content-section">
<h3>🎯 The Digital Heroes Developer</h3>
<p>You are not just writing code. You are building <strong>business assets</strong>.</p>
<ul>
<li>🏗️ <strong>Architects:</strong> You build scalable, robust systems.</li>
<li>🛡️ <strong>Guardians:</strong> You protect user data and business integrity.</li>
<li>⚡ <strong>Optimizers:</strong> You ensure speed and efficiency.</li>
</ul>
</div>

<div class="content-section">
<h3>💡 Core Philosophy: ownership</h3>
<div class="highlight-box">
<strong>If you break it, you fix it. If you build it, you own it.</strong>
<p>We don't "throw code over the wall" to QA. You are responsible for the quality of your code from local dev to production.</p>
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about dev mindset</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task2Content = `
<h2>📚 TASK 2: COMPANY KNOWLEDGE</h2>

<div class="content-section">
<h3>🏢 Where Code Fits In</h3>
<p>Digital Heroes relies on technology to scale.</p>
<ul>
<li><strong>Media Arm:</strong> Needs high-performance landing pages for traffic spikes.</li>
<li><strong>Agency Arm:</strong> Needs custom Shopify apps and complex integrations.</li>
<li><strong>Internal Tools:</strong> Automating workflows for the team.</li>
</ul>
</div>

<div class="content-section">
<h3>💎 The Premium Standard</h3>
<p>Our clients pay premium prices ($1,800+). They expect:</p>
<div class="warning-box">
<ul>
<li>❌ Zero Critical Bugs in Production</li>
<li>❌ No "Janky" UI flashes (Layout Shift)</li>
<li>✅ Sub-second load times</li>
<li>✅ Mobile-perfect responsiveness</li>
</ul>
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about company knowledge</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task3Content = `
<h2>📚 TASK 3: MERN STACK ARCHITECTURE</h2>

<div class="content-section">
<h3>🏗️ The Full Stack Overview</h3>
<img src="images/fullstack_architecture_diagram.png" alt="MERN Architecture Diagram" style="width: 100%; border-radius: 12px; margin: 20px 0; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
</div>

<div class="content-section">
<h3>🧱 The Stack components</h3>
<ul>
<li><strong>MongoDB:</strong> NoSQL flexible database for rapid iteration.</li>
<li><strong>Express.js:</strong> Lightweight backend framework.</li>
<li><strong>React.js:</strong> Component-based UI library (often Next.js).</li>
<li><strong>Node.js:</strong> JavaScript runtime environment.</li>
</ul>
</div>

<div class="content-section">
<h3>📂 Folder Structure Convention</h3>
<pre style="background: #1e293b; padding: 15px; border-radius: 8px; font-size: 0.9em;">
/server
  /controllers (Logic)
  /models (Schema)
  /routes (Endpoints)
  /middleware (Auth, Logs)
/client
  /components (Reusable)
  /pages (Routes)
  /context (State)
  /hooks (Custom logic)
</pre>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about architecture</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task4Content = `
<h2>📚 TASK 4: API DEVELOPMENT</h2>

<div class="content-section">
<h3>📡 Data Flow Diagram</h3>
<img src="images/api_integration_flow.png" alt="API Data Flow" style="width: 100%; border-radius: 12px; margin: 20px 0; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
</div>

<div class="content-section">
<h3>🔒 RESTful Best Practices</h3>
<ul>
<li><strong>Nouns, not Verbs:</strong> <code>GET /users</code> not <code>GET /getUsers</code></li>
<li><strong>Status Codes Matter:</strong>
    <ul>
    <li><code>200</code> OK</li>
    <li><code>201</code> Created</li>
    <li><code>400</code> Bad Request (Client Fault)</li>
    <li><code>401</code> Unauthorized (No Token)</li>
    <li><code>500</code> Server Error (Your Fault)</li>
    </ul>
</li>
<li><strong>Statelessness:</strong> Every request contains all info needed (JWT).</li>
</ul>
</div>

<div class="content-section">
<h3>⚡ Error Handling</h3>
<div class="highlight-box">
<strong>Never expose stack traces to the client.</strong>
<p>Production errors should be generic ("Something went wrong"), while logs contain the details.</p>
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

const task5Content = `
<h2>📚 TASK 5: DATABASE DESIGN</h2>

<div class="content-section">
<h3>📊 E-commerce Data Model</h3>
<img src="images/database_schema_visual.png" alt="Database Schema ERD" style="width: 100%; border-radius: 12px; margin: 20px 0; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
</div>

<div class="content-section">
<h3>🔑 Key Concepts</h3>
<ul>
<li><strong>Normalization:</strong> Reducing redundancy (standard in SQL).</li>
<li><strong>Embedding vs Referencing (NoSQL):</strong>
    <ul>
    <li><em>Embed</em> when data is viewed together (Order items inside Order).</li>
    <li><em>Reference</em> when data grows infinitely (Reviews referenced in Product).</li>
    </ul>
</li>
<li><strong>Indexing:</strong> Vital for performance. Always index fields you query by (email, product_id).</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about databases</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task6Content = `
<h2>📚 TASK 6: FRONTEND ENGINEERING</h2>

<div class="content-section">
<h3>⚛️ React/Next.js Mastery</h3>
<ul>
<li><strong>Server Components (RSC):</strong> Fetch data on server, reduce client bundle.</li>
<li><strong>Hooks:</strong> <code>useEffect</code> (Side effects), <code>useState</code> (Local state), <code>useContext</code> (Global state).</li>
<li><strong>Performance:</strong> Use <code>React.memo</code> and <code>useCallback</code> to prevent re-renders.</li>
</ul>
</div>

<div class="content-section">
<h3>⚡ Rendering Strategies</h3>
<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
<tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>CSR</strong></td><td style="padding: 10px;">Client Side Rendering (Standard React). Good for dashboards.</td></tr>
<tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>SSR</strong></td><td style="padding: 10px;">Server Side Rendering (Next.js). SEO friendly, slower TTFB.</td></tr>
<tr><td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>SSG/ISR</strong></td><td style="padding: 10px;">Static Generation. Instantly fast, data can be stale. Best for blogs/products.</td></tr>
</table>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about frontend</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task7Content = `
<h2>📚 TASK 7: DEVOPS & DEPLOYMENT</h2>

<div class="content-section">
<h3>🚀 The Deployment Pipeline</h3>
<ol>
<li><strong>Local Dev:</strong> Code works on your machine.</li>
<li><strong>Commit/Push:</strong> Git push triggers webhook.</li>
<li><strong>CI (Continuous Integration):</strong> Tests run automatically. Build is attempted.</li>
<li><strong>CD (Continuous Deployment):</strong> If tests pass, code deploys to Staging/Prod.</li>
</ol>
</div>

<div class="content-section">
<h3>🌐 Environment Variables</h3>
<div class="warning-box">
<strong>NEVER commit .env files.</strong>
<p>API keys, DB passwords, and secrets stay in the environment (Vercel dashboard/Heroku config), NOT in the repo.</p>
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about devops</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task8Content = `
<h2>📚 TASK 8: TESTING & QA</h2>

<div class="content-section">
<h3>🧪 Testing Pyramid</h3>
<ul>
<li><strong>Unit Tests (Base):</strong> Test individual functions/components (Jest). Fast, cheap.</li>
<li><strong>Integration Tests (Middle):</strong> Test modules working together (API + DB).</li>
<li><strong>E2E Tests (Top):</strong> Test full user flows (Cypress/Playwright). Slow, expensive.</li>
</ul>
</div>

<div class="content-section">
<h3>✅ Definition of Done</h3>
<p>A ticket is not "Done" until:</p>
<ul>
<li>Code is written</li>
<li>Tests are passed</li>
<li>PR is reviewed</li>
<li>Deployed to Staging</li>
<li>Verified by PM</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about testing</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task9Content = `
<h2>📚 TASK 9: PRACTICE SCENARIOS</h2>

<div class="content-section">
<h3>🔥 Scenario 1: Production Outage</h3>
<p><strong>Site is down. 500 Error.</strong></p>
<div class="highlight-box">
<strong>Protocol:</strong>
<ol>
<li><strong>communicate:</strong> Acknowledge issue in #incidents channel.</li>
<li><strong>Rollback:</strong> Revert to last stable commit immediately.</li>
<li><strong>Diagnose:</strong> Check logs AFTER restoring service.</li>
<li><strong>Fix:</strong> Apply patch in staging first.</li>
</ol>
</div>
</div>

<div class="content-section">
<h3>🐌 Scenario 2: Slow API</h3>
<p><strong>Users complaining "Loading..." takes 5 seconds.</strong></p>
<ul>
<li>Check Database queries (Are we missing an index?)</li>
<li>Check N+1 problem (Are we fetching inside a loop?)</li>
<li>Implement caching (Redis) for frequent data.</li>
</ul>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<ul>
<li>📝 10 questions about scenarios</li>
<li>🎯 Score <strong>10/10</strong> to proceed</li>
</ul>
</div>
`;

const task10Content = `
<h2>📚 TASK 10: FINAL CERTIFICATION</h2>

<div class="content-section">
<h3>🏆 Congratulations!</h3>
<p>You've completed the Full-Stack Developer training. This final assessment covers:</p>
<ul>
<li>✅ Mindset & Ecosystem</li>
<li>✅ MERN Stack Architecture</li>
<li>✅ API Design & Security</li>
<li>✅ Database Modeling</li>
<li>✅ Frontend Performance</li>
<li>✅ Deployment & DevOps</li>
<li>✅ Testing & QA Standards</li>
<li>✅ Troubleshooting Scenarios</li>
</ul>
</div>

<div class="content-section">
<h3>📝 Final Assessment</h3>
<div class="warning-box">
<strong>20 questions covering all modules.</strong>
<p>Score 20/20 to receive your Full-Stack Certification.</p>
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for the Final Quiz?</h3>
<ul>
<li>📝 20 questions covering all training modules</li>
<li>🎯 Score <strong>20/20</strong> to receive certification</li>
</ul>
</div>
`;

// Quiz Questions
const allQuizzes = [
    // Task 1: Mindset
    [
        { q: "Developers at Digital Heroes are:", o: ["Code monkeys", "Business asset builders", "Isolated workers", "Just for fixing bugs"], c: 1 },
        { q: "Who owns the quality of code?", o: ["QA team", "The Developer", "The Client", "The PM"], c: 1 },
        { q: "Scalable systems are:", o: ["Built quickly", "Architected for growth", "Ignored", "Expensive"], c: 1 },
        { q: "When you break something:", o: ["Hide it", "Blame others", "Fix it", "Ignore it"], c: 2 },
        { q: "Code is:", o: ["A hobby", "A business asset", "Art only", "Temporary"], c: 1 },
        { q: "Security is:", o: ["An afterthought", "First priority", "Optional", "PM's job"], c: 1 },
        { q: "Throwing code over the wall means:", o: ["Good handoff", "Bad practice of confusing QA", "Fast delivery", "Teamwork"], c: 1 },
        { q: "Performance is:", o: ["A bonus", "A feature", "Unimportant", "For later"], c: 1 },
        { q: "Guardians protect:", o: ["Office snacks", "User data", "Code comments", "Nothing"], c: 1 },
        { q: "Optimizers ensure:", o: ["More lines of code", "Efficiency and speed", "More meetings", "Slow delivery"], c: 1 }
    ],
    // Task 2: Company Knowledge
    [
        { q: "Media arm needs:", o: ["Complex apps", "High performance landing pages", "Internal tools", "Nothing"], c: 1 },
        { q: "Agency arm needs:", o: ["Simple blogs", "Custom Shopify apps", "Static sites", "Videos"], c: 1 },
        { q: "Premium clients pay:", o: ["$500", "$1,000", "$1,800+", "$5,000"], c: 2 },
        { q: "Critical bugs in production are:", o: ["Acceptable", "Unacceptable", "Expected", "Normal"], c: 1 },
        { q: "Sub-second load time is:", o: ["Impossible", "A requirement", "Optional", "Nice to have"], c: 1 },
        { q: "Layout shift (Jank) should be:", o: ["Zero", "Minimal", "Maximised", "Ignored"], c: 0 },
        { q: "Mobile responsiveness is:", o: ["Optional", "Mandatory", "Secondary", "For tablets only"], c: 1 },
        { q: "Internal tools help:", o: ["Waste time", "Automate workflows", "Confuse team", "Slow down"], c: 1 },
        { q: "Digital Heroes scales using:", o: ["More people", "Technology", "Ads only", "Luck"], c: 1 },
        { q: "Quality expectation is:", o: ["MVP", "Beta", "Premium", "Prototype"], c: 2 }
    ],
    // Task 3: Architecture
    [
        { q: "MERN stands for:", o: ["MySQL, Express, React, Node", "MongoDB, Express, React, Node", "MariaDB, Ember, Ruby, Nginx", "Mongo, Electron, Rust, Next"], c: 1 },
        { q: "MongoDB is:", o: ["Relational", "NoSQL Document store", "Key-Value", "Graph DB"], c: 1 },
        { q: "Express is:", o: ["Frontend", "Database", "Backend framework", "Testing tool"], c: 2 },
        { q: "React used for:", o: ["Server logic", "User Interface", "Database", "DevOps"], c: 1 },
        { q: "Node.js is:", o: ["A language", "A runtime", "A library", "A database"], c: 1 },
        { q: "Models folder contains:", o: ["UI components", "Database schemas", "API routes", "Images"], c: 1 },
        { q: "Controllers folder contains:", o: ["HTML", "Business logic", "CSS", "Config"], c: 1 },
        { q: "Client folder is for:", o: ["Backend", "Frontend", "Database", "Scripts"], c: 1 },
        { q: "Context is used for:", o: ["Styling", "State management", "Routing", "Fetching"], c: 1 },
        { q: "Routes folder contains:", o: ["API Endpoints", "Images", "Styles", "Tests"], c: 0 }
    ],
    // Task 4: API
    [
        { q: "RESTful usage of verbs:", o: ["GET /getUsers", "GET /users", "POST /getUsers", "UPDATE /users"], c: 1 },
        { q: "Status 200 means:", o: ["Error", "Created", "OK", "Unauthorized"], c: 2 },
        { q: "Status 401 means:", o: ["Not Found", "Unauthorized", "Server Error", "Bad Request"], c: 1 },
        { q: "Status 500 means:", o: ["Client Error", "Server Error", "Success", "Redirect"], c: 1 },
        { q: "Where does JWT go?", o: ["Body", "Header", "URL", "Nowhere"], c: 1 },
        { q: "Statelessness means:", o: ["Server remembers nothing", "Request has all info", "No DB used", "No Auth"], c: 1 },
        { q: "Production errors should be:", o: ["Detailed stack traces", "Generic messages", "Hidden", "Ignored"], c: 1 },
        { q: "Status 201 means:", o: ["OK", "Created", "Accepted", "Found"], c: 1 },
        { q: "Nouns vs Verbs:", o: ["Use verbs", "Use nouns", "Use adjectives", "Random"], c: 1 },
        { q: "API logs should contain:", o: ["Nothing", "Details", "Passwords", "User data"], c: 1 }
    ],
    // Task 5: Database
    [
        { q: "Normalization reduces:", o: ["Speed", "Redundancy", "Security", "Complexity"], c: 1 },
        { q: "Embed data when:", o: ["It grows infinitely", "Viewed together", "Never used", "Unrelated"], c: 1 },
        { q: "Reference data when:", o: ["It is small", "It grows infinitely", "Always viewed together", "Static"], c: 1 },
        { q: "Indexing improves:", o: ["Write speed", "Read performance", "UI design", "Security"], c: 1 },
        { q: "PK stands for:", o: ["Private Key", "Primary Key", "Public Key", "Personal Key"], c: 1 },
        { q: "FK stands for:", o: ["First Key", "Foreign Key", "Fast Key", "Final Key"], c: 1 },
        { q: "ERD stands for:", o: ["Entity Relationship Diagram", "Error Reporting Data", "Easy React Design", "End Route Definition"], c: 1 },
        { q: "Aggegation pipeline is for:", o: ["Simple finds", "Complex data processing", "UI rendering", "Sending emails"], c: 1 },
        { q: "One-to-Many example:", o: ["User to Profile", "Order to Items", "User to Admin", "Product to Price"], c: 1 },
        { q: "Missing index causes:", o: ["Fast queries", "Slow queries", "Errors", "Data loss"], c: 1 }
    ],
    // Task 6: Frontend
    [
        { q: "RSC stands for:", o: ["React Server Components", "Redux State Control", "Raw Style Casading", "Route State Check"], c: 0 },
        { q: "useEffect is for:", o: ["State", "Side effects", "Context", "Routing"], c: 1 },
        { q: "useState is for:", o: ["Global state", "Local state", "Effects", "Memoization"], c: 1 },
        { q: "SSR means:", o: ["Server Side Rendering", "Super Slow React", "Static Site React", "Simple State Run"], c: 0 },
        { q: "ISR means:", o: ["Internal Server React", "Incremental Static Regeneration", "Instant State Reload", "Image Size Reduction"], c: 1 },
        { q: "CSR is good for:", o: ["SEO", "Dashboards", "Blogs", "Static sites"], c: 1 },
        { q: "SSG is best for:", o: ["Dynamic feeds", "Blogs/Marketing sites", "Real-time chat", "Admin panels"], c: 1 },
        { q: "useCallback prevents:", o: ["State updates", "Unnecessary function recreation", "Rendering", "Routing"], c: 1 },
        { q: "React.memo optimizes:", o: ["State", "Component re-renders", "Network requests", "CSS"], c: 1 },
        { q: "Next.js primarily adds:", o: ["Database", "SSR/SSG features", "Styling", "Testing"], c: 1 }
    ],
    // Task 7: DevOps
    [
        { q: "CI stands for:", o: ["Continuous Improvement", "Continuous Integration", "Code Inspection", "Cloud Interface"], c: 1 },
        { q: "CD stands for:", o: ["Code Delivery", "Continuous Deployment", "Cloud Database", "Customer Data"], c: 1 },
        { q: "Environment variables store:", o: ["Code", "Secrets/Keys", "Images", "HTML"], c: 1 },
        { q: ".env files should be:", o: ["Committed", "Ignored", "Shared publicly", "Printed"], c: 1 },
        { q: "Pipeline step 1:", o: ["Deploy", "Local Dev", "Test", "Monitor"], c: 1 },
        { q: "Tests run during:", o: ["Coding", "CI process", "After deploy", "Never"], c: 1 },
        { q: "Staging is for:", o: ["Testing before Prod", "Storage", "Backup", "Playground"], c: 0 },
        { q: "Heroku/Vercel are:", o: ["Databases", "Hosting platforms", "Languages", "Editors"], c: 1 },
        { q: "Git push triggers:", o: ["Shutdown", "Webhook/Pipeline", "Nothing", "Email"], c: 1 },
        { q: "Secrets in repo is:", o: ["Safe", "Security risk", "Standard practice", "Required"], c: 1 }
    ],
    // Task 8: QA
    [
        { q: "Unit tests check:", o: ["Full app", "Individual functions", "Database", "UI"], c: 1 },
        { q: "E2E tests check:", o: ["Code style", "Full user flows", "Single functions", "Database schema"], c: 1 },
        { q: "Ticket is Done when:", o: ["Code written", "Tests pass & Verified", "Committed", "Started"], c: 1 },
        { q: "Jest is for:", o: ["E2E", "Unit Testing", "Deploying", "Styling"], c: 1 },
        { q: "Cypress is for:", o: ["Unit", "E2E Testing", "Backend", "Database"], c: 1 },
        { q: "Integration tests check:", o: ["Single units", "Modules working together", "UI colors", "Spelling"], c: 1 },
        { q: "Definition of Done includes:", o: ["Bugs", "Deployment & Verification", "Half finished work", "Ideas"], c: 1 },
        { q: "Debugging first step:", o: ["Change code", "Reproduce/Check logs", "Restart server", "Blame user"], c: 1 },
        { q: "Test pyramid base:", o: ["E2E", "Unit", "Manual", "Integration"], c: 1 },
        { q: "Test pyramid top:", o: ["Unit", "E2E", "Integration", "Manual"], c: 1 }
    ],
    // Task 9: Scenarios
    // Task 9: Scenarios
    [
        { q: "Production outage first step:", o: ["Fix it", "Communicate/Acknowledge", "Go home", "Delete DB"], c: 1 },
        { q: "Immediate action for outage:", o: ["Rewrite app", "Rollback", "Wait", "Restart PC"], c: 1 },
        { q: "Slow API check 1:", o: ["Frontend code", "Database indexing", "User internet", "Browser version"], c: 1 },
        { q: "N+1 problem is:", o: ["Looping fetches", "Math error", "Compilation error", "CSS bug"], c: 0 },
        { q: "Security alert action:", o: ["Ignore", "Patch immediate", "Wait for next sprint", "Email CEO"], c: 1 },
        { q: "Diagnose happens:", o: ["Before rollback", "After restoring service", "Never", "During outage"], c: 1 },
        { q: "Fix applied where first:", o: ["Prod", "Staging", "Nowhere", "Client machine"], c: 1 },
        { q: "Redis is used for:", o: ["Storage", "Caching", "Logging", "Testing"], c: 1 },
        { q: "Incidents reported in:", o: ["Email", "Slack channel", "Twitter", "Nowhere"], c: 1 },
        { q: "Logs checked:", o: ["Never", "To diagnose root cause", "For fun", "Randomly"], c: 1 }
    ],
    // Task 10: Final (20)
    [
        { q: "MERN:", o: ["Mongo Express React Node", "MySQL Ember Ruby Nginx", "Mongo Electron Rust Next", "None"], c: 0 },
        { q: "Status 500:", o: ["Client Error", "Server Error", "Success", "Redirect"], c: 1 },
        { q: "RSC:", o: ["React Server Components", "React Simple Code", "Redux State", "Route Server"], c: 0 },
        { q: "CI/CD:", o: ["Continuous Integration/Deployment", "Code Internal/Design", "Cloud Integration/Data", "None"], c: 0 },
        { q: "Unit tests:", o: ["Test functions", "Test UI", "Test flows", "Test DB"], c: 0 },
        { q: "E2E:", o: ["End to End", "Error to Error", "Easy to Edit", "None"], c: 0 },
        { q: "Env variables:", o: ["Commit them", "Hide them/Config", "Print them", "Share them"], c: 1 },
        { q: "Indexing:", o: ["Slows reads", "Speeds reads", "Does nothing", "Corrupts data"], c: 1 },
        { q: "Normalization:", o: ["Increases redundancy", "Reduces redundancy", "Slows DB", "Is bad"], c: 1 },
        { q: "JWT:", o: ["Java Web Token", "JSON Web Token", "Javascript Window Token", "Just Web Text"], c: 1 },
        { q: "Stateless:", o: ["Server forgets", "Server remembers state", "No DB", "No Code"], c: 0 },
        { q: "ISR:", o: ["Incremental Static Regeneration", "Internal Server React", "Instant State", "None"], c: 0 },
        { q: "useEffect:", o: ["Effects", "State", "Context", "Routing"], c: 0 },
        { q: "Status 401:", o: ["Unauthorized", "Not Found", "Error", "OK"], c: 0 },
        { q: "Status 201:", o: ["OK", "Created", "Accepted", "Found"], c: 1 },
        { q: "Rollback:", o: ["Move forward", "Revert to stable", "Delete", "Stop"], c: 1 },
        { q: "N+1:", o: ["Efficient", "Inefficient loop fetching", "Math", "Good"], c: 1 },
        { q: "Premium standard:", o: ["Bugs ok", "Zero critical bugs", "Slow", "Ugly"], c: 1 },
        { q: "Owner mindset:", o: ["Not my job", "I build it I own it", "Blame QA", "Ignore"], c: 1 },
        { q: "DevOps:", o: ["Development Operations", "Developer Options", "Device Operating", "None"], c: 0 }
    ]
];
