// Full-Stack Developer Training Data
// Complete training content for full-stack certification
// Based on comprehensive PDP: Custom Websites, Web Apps & API Development

const trainingTasks = [
    {
        id: 1,
        title: "Full Stack Mindset & Principles",
        description: "Project principles, quality standards",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 20-25 minutes",
            "📖 Read SOP: https://dhlibrary.vercel.app/fullstack-sop.html — Principles section",
            "🧠 Internalize 'Spec Before Code' philosophy",
            "🛡️ Study the Zero Tolerance quality standards",
            "🤖 ChatGPT: Ask 'What are best practices for full stack project management?'"
        ]
    },
    {
        id: 2,
        title: "Discovery Phase",
        description: "Client meetings, requirements gathering",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 25-30 minutes",
            "📖 Read SOP: 'Discovery Phase' section",
            "📝 Study the 60-90 minute meeting agenda",
            "💬 Memorize the 7 critical questions to ask",
            "🤖 ChatGPT: Ask 'What questions to ask in a software discovery meeting?'"
        ]
    },
    {
        id: 3,
        title: "Technical Specification Document",
        description: "TSD creation, scope definition",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 30-35 minutes",
            "📖 Read SOP: 'Technical Planning & Specification' section",
            "📄 Study all 10 TSD sections",
            "⚠️ Understand why 'Out of Scope' is critical",
            "🤖 ChatGPT: Ask 'What should a technical specification document include?'"
        ]
    },
    {
        id: 4,
        title: "Project Setup & Architecture",
        description: "Repo setup, folder structure, tech stack",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 25-30 minutes",
            "📖 Read SOP: 'Project Setup' section",
            "📁 Study the Next.js folder structure",
            "🌿 Memorize the branch strategy (main, develop, feature)",
            "🤖 ChatGPT: Ask 'What is the recommended Next.js folder structure?'"
        ]
    },
    {
        id: 5,
        title: "Development Phases & Milestones",
        description: "Phase breakdown, deliverables",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 25-30 minutes",
            "📖 Read SOP: 'Development Phases' section",
            "📅 Study the 5-phase delivery approach",
            "✅ Learn what each phase delivers",
            "🤖 ChatGPT: Ask 'How to structure a 6-week software development project?'"
        ]
    },
    {
        id: 6,
        title: "Database Design & API Development",
        description: "Schema, REST standards, security",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 30-35 minutes",
            "📖 Read SOP: 'Database Design' and 'API Development' sections",
            "🗄️ Study soft deletes and timestamp standards",
            "📡 Memorize RESTful naming and HTTP methods",
            "🤖 ChatGPT: Ask 'What are REST API best practices?'"
        ]
    },
    {
        id: 7,
        title: "Testing & QA Protocol",
        description: "Testing checklist, security must-checks",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 25-30 minutes",
            "📖 Read SOP: 'Testing & QA' section",
            "🧪 Study all testing categories",
            "🔒 Memorize the 5 security NEVER rules",
            "🤖 ChatGPT: Ask 'What security checks are mandatory before deployment?'"
        ]
    },
    {
        id: 8,
        title: "Deployment & Client Handover",
        description: "Pre-deploy checklist, handover package",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 25-30 minutes",
            "📖 Read SOP: 'Deployment' and 'Client Handover' sections",
            "🚀 Study the 9-point pre-deployment checklist",
            "📦 Memorize handover package contents",
            "🤖 ChatGPT: Ask 'What should be in a client handover package?'"
        ]
    },
    {
        id: 9,
        title: "Difficult Situations & Troubleshooting",
        description: "8 scenarios with scripts",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 30-35 minutes",
            "📖 Read SOP: 'Handling Difficult Situations' section",
            "🔴 Study all 8 scenario responses",
            "⚡ Learn rollback and recovery procedures",
            "🤖 ChatGPT: Ask 'How to handle production server outages?'"
        ]
    },
    {
        id: 10,
        title: "Final Certification",
        description: "Comprehensive exam + video submission",
        contentFirst: false,
        studyGuide: [
            "⏱️ Estimated Time: 45-60 minutes",
            "📖 Full SOP Review: Re-read entire fullstack-sop.html",
            "✅ Complete Tasks 1-9 with 10/10 on all quizzes",
            "🎥 Prepare 30-minute video walkthrough",
            "🏆 Score 20/20 on final exam to pass"
        ]
    }
];

// =====================================================
// TASK 1: FULL STACK MINDSET & PRINCIPLES
// =====================================================
const task1Content = `
<h2>📚 PART 1: THE PHILOSOPHY</h2>

<div class="content-section">
<h3>🎯 Why "Plan Twice, Code Once"?</h3>
<div class="highlight-box">
<strong>The ₹5 Lakh Project That Almost Failed</strong>
<p>We took on a custom dashboard project. Client wanted a "simple admin panel" for their delivery business. ₹5 lakhs budget. Seemed straightforward.</p>
</div>

<p><strong>Week 1-2:</strong> Started coding immediately. No detailed spec. "We'll figure it out as we go."</p>
<p><strong>Week 3:</strong> Client says "Oh, we also need real-time GPS tracking." That changes everything.</p>
<p><strong>Week 4:</strong> "Can drivers upload photos? And customers should get SMS updates." More scope creep.</p>
<p><strong>Week 6:</strong> Project is 50% over budget. Team is frustrated. Client is unhappy. We're behind schedule.</p>

<div class="warning-box">
<strong>What saved us:</strong> We stopped. Did a proper discovery session. Created a detailed technical specification. Got sign-off on exact features. Renegotiated timeline and budget.
</div>

<p><strong>🎯 The Lesson:</strong> Custom projects REQUIRE detailed planning upfront. Every hour spent in discovery saves 10 hours in development. <strong>Never skip the planning phase.</strong></p>
</div>

<h2>📚 PART 2: THE 5 PROJECT PRINCIPLES</h2>

<div class="content-section">
<h3>⚡ PRINCIPLE 1: SPEC BEFORE CODE</h3>
<div class="highlight-box">
<strong>Never write a single line of code without a signed-off technical specification.</strong>
</div>
<p>Discovery is not optional — it's mandatory. The TSD (Technical Specification Document) is your contract with the client.</p>
<ul>
<li>❌ "I think the client wants..." = Recipe for disaster</li>
<li>✅ "Client signed off on page 14, feature 3.2" = Professional</li>
</ul>
</div>

<div class="content-section">
<h3>🔒 PRINCIPLE 2: SCOPE IS LOCKED AFTER APPROVAL</h3>
<div class="highlight-box">
<strong>Once client signs off on spec, scope is frozen. New features = new quote. No exceptions.</strong>
</div>
<p>Scope creep kills projects. Every "small addition" adds up to massive overruns.</p>
<table>
<tr><td>❌ "Can you also add..." </td><td>→ "That's not in scope, but I can quote it"</td></tr>
<tr><td>❌ "Just one more thing..." </td><td>→ "Happy to add that in Phase 2"</td></tr>
<tr><td>❌ "I thought this was included" </td><td>→ "Let me show you the signed TSD"</td></tr>
</table>
</div>

<div class="content-section">
<h3>📊 PRINCIPLE 3: MILESTONE-BASED DELIVERY</h3>
<p>Large projects are delivered in phases. Each phase = client approval before proceeding.</p>
<table>
<tr><th>Phase</th><th>Deliverable</th><th>Client Action</th></tr>
<tr><td>Phase 1</td><td>Foundation (Auth, Layout)</td><td>Review & Approve</td></tr>
<tr><td>Phase 2</td><td>Core Features</td><td>Review & Approve</td></tr>
<tr><td>Phase 3</td><td>Integrations</td><td>Review & Approve</td></tr>
<tr><td>Phase 4</td><td>Polish & Testing</td><td>Final QA</td></tr>
<tr><td>Phase 5</td><td>Launch</td><td>Go Live!</td></tr>
</table>
<p>No surprises at the end. Client sees progress at every stage.</p>
</div>

<div class="content-section">
<h3>✨ PRINCIPLE 4: CODE QUALITY IS NON-NEGOTIABLE</h3>
<p>Clean code, proper comments, consistent formatting.</p>
<div class="warning-box">
<strong>If another developer can't understand your code, you've failed.</strong>
</div>
<ul>
<li>Use meaningful variable names</li>
<li>Comment complex logic</li>
<li>Follow project coding standards</li>
<li>No "clever" code that no one can maintain</li>
</ul>
</div>

<div class="content-section">
<h3>🧪 PRINCIPLE 5: TEST BEFORE DEPLOY</h3>
<p>Every feature is tested. Edge cases are considered. Security is checked.</p>
<div class="highlight-box">
<strong>No "it works on my machine" excuses.</strong>
<p>If it doesn't work for the client, it doesn't work. Period.</p>
</div>
</div>

<h2>📚 PART 3: QUALITY STANDARDS</h2>

<div class="content-section">
<h3>⚠️ Zero Tolerance Policy</h3>
<div class="warning-box">
<strong>After 15 days of onboarding:</strong> ONE careless mistake on a live project = potential removal from client work.
</div>
<ul>
<li>Check your work <strong>3-5 times</strong> before client delivery</li>
<li>There are NO "small bugs" on production</li>
<li>Preventable mistakes are unacceptable</li>
</ul>
</div>

<div class="content-section">
<h3>🎯 Creative Ownership Principle</h3>
<p><strong>You are 100% responsible for the quality of your work.</strong></p>
<ul>
<li>Code architecture, security, and performance = YOUR responsibility</li>
<li>Documentation = YOUR responsibility</li>
<li>Goal: <strong>Overdeliver</strong> — exceed expectations, not just meet them</li>
</ul>
</div>

<div class="content-section">
<h3>👥 Peer Review Process</h3>
<p>Before major deployments, get <strong>another developer to review</strong> your code:</p>
<ul>
<li>Fresh eyes catch what you missed</li>
<li>Share knowledge across team</li>
<li>Two brains are better than one</li>
</ul>
</div>

<h2>📚 PART 4: TASK PRIORITY ORDER</h2>

<div class="content-section">
<h3>🎯 P0-P3 Priority System</h3>
<table>
<tr><th>Priority</th><th>Type</th><th>Action</th></tr>
<tr><td>🔴 P0</td><td>Production Outages</td><td>DROP EVERYTHING. Fix immediately.</td></tr>
<tr><td>🔴 P0</td><td>Security Vulnerabilities</td><td>Patch first, explain later.</td></tr>
<tr><td>🔴 P0</td><td>Data Issues</td><td>Database problems, data loss. Critical.</td></tr>
<tr><td>🟡 P1</td><td>Deadline-Day Deliveries</td><td>Features due TODAY must ship.</td></tr>
<tr><td>🟡 P1</td><td>PM/Client Questions</td><td>Respond within 1 hour.</td></tr>
<tr><td>🟢 P2</td><td>Active Development</td><td>Features with upcoming deadlines.</td></tr>
<tr><td>🟢 P2</td><td>Code Reviews</td><td>Don't block teammates.</td></tr>
<tr><td>⚪ P3</td><td>Technical Debt</td><td>Refactoring, optimization.</td></tr>
</table>

<div class="highlight-box">
<strong>Golden Rule:</strong> Production issues > Security > Data > Deadlines > Communication > Development
</div>
</div>
`;

// =====================================================
// TASK 2: DISCOVERY PHASE
// =====================================================
const task2Content = `
<h2>📚 DISCOVERY PHASE</h2>

<div class="content-section">
<h3>💰 Discovery is a Paid Service</h3>
<p>For complex projects, discovery is a separate paid engagement (<strong>$15,000 - $50,000</strong>). This ensures:</p>
<ul>
<li>Serious clients who value proper planning</li>
<li>Protection for your time investment</li>
<li>Clear deliverable: Technical Specification Document</li>
</ul>
</div>

<div class="content-section">
<h3>📅 Discovery Meeting Agenda (60-90 minutes)</h3>
<table>
<tr><th>Topic</th><th>Time</th><th>What to Capture</th></tr>
<tr><td><strong>Business Context</strong></td><td>15 min</td><td>What problem are we solving? Who are the users? What's the business goal?</td></tr>
<tr><td><strong>Feature Walkthrough</strong></td><td>30 min</td><td>Every feature explained. Write it ALL down. Ask "what happens when..."</td></tr>
<tr><td><strong>User Roles</strong></td><td>10 min</td><td>Who uses the system? Admin, user, guest? What can each role do?</td></tr>
<tr><td><strong>Integrations</strong></td><td>10 min</td><td>Payment gateway? Email service? Third-party APIs? CRM?</td></tr>
<tr><td><strong>Design Expectations</strong></td><td>10 min</td><td>Reference websites, color preferences, brand guidelines</td></tr>
<tr><td><strong>Timeline & Budget</strong></td><td>15 min</td><td>Launch date? Budget range? Must-haves vs nice-to-haves?</td></tr>
</table>
</div>

<div class="content-section">
<h3>❓ Critical Questions (Never Skip These)</h3>
<div class="highlight-box">
<ol>
<li><strong>"What does success look like?"</strong> — Understand the real goal</li>
<li><strong>"Who will use this and how?"</strong> — Understand user flows</li>
<li><strong>"What happens when [edge case]?"</strong> — Find hidden complexity</li>
<li><strong>"What existing systems does this need to work with?"</strong> — Find integration needs</li>
<li><strong>"What's the budget range?"</strong> — Ensure alignment before work</li>
<li><strong>"When do you need this live?"</strong> — Set realistic expectations</li>
<li><strong>"Who approves deliverables?"</strong> — Identify decision-maker</li>
</ol>
</div>
</div>

<div class="content-section">
<h3>🔍 Finding Hidden Complexity</h3>
<p>The question <strong>"What happens when [edge case]?"</strong> reveals requirements clients forget to mention:</p>
<table>
<tr><th>Ask This</th><th>Reveals</th></tr>
<tr><td>"What happens when a user has no orders?"</td><td>Empty state designs needed</td></tr>
<tr><td>"What if two users edit the same record?"</td><td>Conflict resolution needed</td></tr>
<tr><td>"What happens when payment fails?"</td><td>Error handling flows needed</td></tr>
<tr><td>"What if the API is down?"</td><td>Fallback strategies needed</td></tr>
</table>
</div>
`;

// =====================================================
// TASK 3: TECHNICAL SPECIFICATION DOCUMENT
// =====================================================
const task3Content = `
<h2>📚 TECHNICAL SPECIFICATION DOCUMENT (TSD)</h2>

<div class="content-section">
<h3>📄 Every Custom Project Gets a TSD</h3>
<div class="highlight-box">
The TSD is your contract. It defines <strong>exactly</strong> what will be built. Client signs off before development starts.
</div>
</div>

<div class="content-section">
<h3>📋 TSD Structure (10 Sections)</h3>
<table>
<tr><th>Section</th><th>Contents</th></tr>
<tr><td><strong>1. Project Overview</strong></td><td>Business context, goals, success metrics</td></tr>
<tr><td><strong>2. User Roles & Permissions</strong></td><td>Who can do what in the system</td></tr>
<tr><td><strong>3. Feature List</strong></td><td>Every feature with detailed acceptance criteria</td></tr>
<tr><td><strong>4. User Flows</strong></td><td>Step-by-step flow diagrams for key processes</td></tr>
<tr><td><strong>5. Database Schema</strong></td><td>Tables, relationships, data types</td></tr>
<tr><td><strong>6. API Endpoints</strong></td><td>All backend routes with request/response formats</td></tr>
<tr><td><strong>7. Third-Party Integrations</strong></td><td>External services, APIs, credentials needed</td></tr>
<tr><td><strong>8. Technology Stack</strong></td><td>Frontend, backend, database, hosting decisions</td></tr>
<tr><td><strong>9. Timeline & Milestones</strong></td><td>Phase breakdown with delivery dates</td></tr>
<tr><td><strong>10. Out of Scope</strong></td><td>What is NOT included (very important!)</td></tr>
</table>
</div>

<div class="content-section">
<h3>⚠️ Why "Out of Scope" is Critical</h3>
<div class="warning-box">
Client expectations often exceed what was agreed. The "Out of Scope" section protects both parties.
</div>
<p><strong>Example:</strong></p>
<ul>
<li>❌ "Mobile app" — Only web responsive, no native app</li>
<li>❌ "Multi-language" — English only for Phase 1</li>
<li>❌ "AI recommendations" — Manual product curation only</li>
<li>❌ "Custom email designs" — Using template emails</li>
</ul>
<p>This prevents scope creep and uncomfortable conversations later.</p>
</div>

<div class="content-section">
<h3>📝 Feature Acceptance Criteria Example</h3>
<div class="highlight-box">
<strong>Feature:</strong> User Registration<br>
<strong>Acceptance Criteria:</strong>
<ul>
<li>User can register with email and password</li>
<li>Password must be 8+ characters with 1 number</li>
<li>Email verification required before login</li>
<li>Error messages shown for invalid input</li>
<li>Success redirects to dashboard</li>
</ul>
</div>
<p>This level of detail prevents "I thought it would work differently" conversations.</p>
</div>
`;

// =====================================================
// TASK 4: PROJECT SETUP & ARCHITECTURE
// =====================================================
const task4Content = `
<h2>📚 PROJECT SETUP & ARCHITECTURE</h2>

<div class="content-section">
<h3>✅ Project Initialization Checklist</h3>
<table>
<tr><th>Task</th><th>Details</th></tr>
<tr><td><strong>Create GitHub Repository</strong></td><td>Private repo, proper naming (client-project-name)</td></tr>
<tr><td><strong>Initialize Project</strong></td><td>npx create-next-app@latest or appropriate starter</td></tr>
<tr><td><strong>Set Up Environment Variables</strong></td><td>.env.local, .env.example (without secrets)</td></tr>
<tr><td><strong>Configure ESLint & Prettier</strong></td><td>Consistent code formatting across team</td></tr>
<tr><td><strong>Set Up Database</strong></td><td>Create DB, configure connection, test</td></tr>
<tr><td><strong>Configure Hosting</strong></td><td>Connect to Vercel/Railway, set up previews</td></tr>
<tr><td><strong>Set Up Branch Strategy</strong></td><td>main, develop, feature branches</td></tr>
</table>
</div>

<div class="content-section">
<h3>📁 Folder Structure (Next.js)</h3>
<pre style="background: #1a1a2e; padding: 15px; border-radius: 8px; overflow-x: auto;">
/src
  /app                    // App router pages
    /api                  // API routes
    /(auth)              // Auth pages (login, register)
    /(dashboard)         // Protected pages
    layout.tsx
    page.tsx
  /components            // Reusable UI components
    /ui                  // Base components (Button, Input)
    /forms              // Form components
    /layout             // Layout components (Header, Footer)
  /lib                   // Utilities, helpers
    db.ts               // Database connection
    auth.ts             // Auth configuration
    utils.ts            // Helper functions
  /types                 // TypeScript types
  /hooks                 // Custom React hooks
  /services             // API calls, external services
/prisma
  schema.prisma         // Database schema
/public                  // Static assets
</pre>
</div>

<div class="content-section">
<h3>🌿 Branch Strategy</h3>
<table>
<tr><th>Branch</th><th>Purpose</th><th>Deploys To</th></tr>
<tr><td><strong>main</strong></td><td>Production code only</td><td>Production</td></tr>
<tr><td><strong>develop</strong></td><td>Staging/testing</td><td>Staging</td></tr>
<tr><td><strong>feature/[name]</strong></td><td>New features</td><td>Preview</td></tr>
<tr><td><strong>fix/[name]</strong></td><td>Bug fixes</td><td>Preview</td></tr>
<tr><td><strong>hotfix/[name]</strong></td><td>Urgent production fixes</td><td>Production</td></tr>
</table>

<div class="highlight-box">
<strong>Flow:</strong> feature → develop (test) → main (production)
</div>
</div>

<div class="content-section">
<h3>🛠️ Technology Stack</h3>
<table>
<tr><th>Layer</th><th>Options</th></tr>
<tr><td><strong>Frontend</strong></td><td>Next.js, React, Tailwind CSS, TypeScript</td></tr>
<tr><td><strong>Backend</strong></td><td>Next.js API Routes, Node.js + Express, Prisma</td></tr>
<tr><td><strong>Database</strong></td><td>PostgreSQL, MongoDB, Supabase, Firebase</td></tr>
<tr><td><strong>Hosting</strong></td><td>Vercel, Railway, AWS, DigitalOcean</td></tr>
<tr><td><strong>Auth</strong></td><td>NextAuth, Clerk, Auth0</td></tr>
</table>
</div>
`;

// =====================================================
// TASK 5: DEVELOPMENT PHASES & MILESTONES
// =====================================================
const task5Content = `
<h2>📚 DEVELOPMENT PHASES & MILESTONES</h2>

<div class="content-section">
<h3>📅 Typical Timeline: 4-8 Weeks</h3>
<p>Custom projects follow a phased approach. Each phase has clear deliverables and <strong>client approval before proceeding</strong>.</p>
</div>

<div class="content-section">
<h3>🏗️ Phase 1: Foundation (Week 1-2)</h3>
<ul>
<li>Project setup (repo, hosting, CI/CD)</li>
<li>Database schema implementation</li>
<li>Authentication system</li>
<li>Base layout and navigation</li>
<li>Core UI components</li>
</ul>
<div class="highlight-box">
<strong>Deliverable:</strong> Working login/register, basic dashboard shell
</div>
</div>

<div class="content-section">
<h3>⚙️ Phase 2: Core Features (Week 2-4)</h3>
<ul>
<li>Primary CRUD operations</li>
<li>Main user flows implemented</li>
<li>API endpoints for core features</li>
<li>Form validations</li>
<li>Error handling</li>
</ul>
<div class="highlight-box">
<strong>Deliverable:</strong> All primary features functional
</div>
</div>

<div class="content-section">
<h3>🔌 Phase 3: Integrations (Week 4-5)</h3>
<ul>
<li>Payment gateway integration</li>
<li>Email service setup</li>
<li>Third-party API connections</li>
<li>Notifications system</li>
</ul>
<div class="highlight-box">
<strong>Deliverable:</strong> All integrations working in test mode
</div>
</div>

<div class="content-section">
<h3>✨ Phase 4: Polish & Testing (Week 5-6)</h3>
<ul>
<li>UI/UX refinement</li>
<li>Mobile responsiveness</li>
<li>Performance optimization</li>
<li>Bug fixes from testing</li>
<li>Security review</li>
</ul>
<div class="highlight-box">
<strong>Deliverable:</strong> Production-ready application
</div>
</div>

<div class="content-section">
<h3>🚀 Phase 5: Launch (Week 6-7)</h3>
<ul>
<li>Production deployment</li>
<li>DNS configuration</li>
<li>SSL setup</li>
<li>Final testing on live</li>
<li>Client training</li>
</ul>
<div class="highlight-box">
<strong>Deliverable:</strong> Live website + documentation
</div>
</div>
`;

