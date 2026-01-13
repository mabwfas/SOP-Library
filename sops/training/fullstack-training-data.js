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

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
<h3>✅ IMPLEMENTATION TASK: Master Full Stack Principles</h3>
<p><strong>Before taking the quiz, complete these hands-on exercises:</strong></p>

<div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
<h4 style="color: #10B981; margin-top: 0;">📝 Exercise 1: Memorize the 5 Principles (5 min)</h4>
<p>Write out all 5 Project Principles from memory:</p>
<ol>
<li>SPEC BEFORE ____</li>
<li>SCOPE IS ____ AFTER APPROVAL</li>
<li>____-BASED DELIVERY</li>
<li>CODE QUALITY IS ____</li>
<li>TEST BEFORE ____</li>
</ol>
</div>

<div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
<h4 style="color: #06B6D4; margin-top: 0;">📝 Exercise 2: Scope Creep Response (10 min)</h4>
<p>A client says: "Can you also add a mobile app version? It shouldn't take long."</p>
<p>Write your professional response that:</p>
<ul>
<li>Acknowledges their request positively</li>
<li>Explains why it's out of scope</li>
<li>Offers a path forward (Phase 2 or new quote)</li>
</ul>
</div>

<div style="background: rgba(255,255,255,0.5); padding: 20px; border-radius: 10px; margin: 15px 0;">
<h4 style="color: #8B5CF6; margin-top: 0;">📝 Exercise 3: Read the Fullstack SOP (15 min)</h4>
<p>Open the <a href="../fullstack-sop.html" target="_blank" style="color: #8B5CF6;">Full Stack SOP document</a> and read:</p>
<ul>
<li>The 5 Project Principles section</li>
<li>The Quality Standards section</li>
<li>The Technical Specification Document section</li>
</ul>
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

// FULLSTACK TRAINING DATA - PART 2 (Tasks 6-10 + Quizzes)

// =====================================================
// TASK 6: DATABASE DESIGN & API DEVELOPMENT
// =====================================================
const task6Content = `
<h2>📚 DATABASE DESIGN & API DEVELOPMENT</h2>

<div class="content-section">
<h3>🗄️ Database Design Principles</h3>
<table>
<tr><th>Principle</th><th>Implementation</th></tr>
<tr><td><strong>Normalize data</strong></td><td>Avoid duplication, use relationships</td></tr>
<tr><td><strong>Plan for scale</strong></td><td>Index frequently queried columns</td></tr>
<tr><td><strong>Use soft deletes</strong></td><td>deletedAt timestamp, never hard delete</td></tr>
<tr><td><strong>Timestamps on everything</strong></td><td>createdAt, updatedAt on all tables</td></tr>
<tr><td><strong>UUID over auto-increment</strong></td><td>Better for distributed systems</td></tr>
</table>
</div>

<div class="content-section">
<h3>📡 API Standards</h3>
<table>
<tr><th>Standard</th><th>Implementation</th></tr>
<tr><td><strong>RESTful naming</strong></td><td>/api/users (not /api/getUsers)</td></tr>
<tr><td><strong>HTTP methods</strong></td><td>GET (read), POST (create), PUT (update), DELETE (remove)</td></tr>
<tr><td><strong>Status codes</strong></td><td>200 (success), 201 (created), 400 (bad request), 401 (unauthorized), 404 (not found), 500 (server error)</td></tr>
<tr><td><strong>Response format</strong></td><td>{ success: true, data: {...} } or { success: false, error: "message" }</td></tr>
<tr><td><strong>Authentication</strong></td><td>JWT in Authorization header or secure HTTP-only cookies</td></tr>
<tr><td><strong>Validation</strong></td><td>Validate ALL inputs. Use Zod or Yup schemas</td></tr>
</table>
</div>

<div class="content-section">
<h3>⚡ Error Handling Template</h3>
<pre style="background: #1a1a2e; padding: 15px; border-radius: 8px;">
try {
  const data = await doSomething();
  return Response.json({ success: true, data });
} catch (error) {
  console.error('[API Error]', error);
  return Response.json(
    { success: false, error: 'Something went wrong' },
    { status: 500 }
  );
}
</pre>
</div>

<div class="content-section">
<h3>🔒 Input Validation Rule</h3>
<div class="warning-box">
<strong>Frontend validation is for UX. Backend validation is for security.</strong>
<p>Never trust client-side data. Always validate on the server.</p>
</div>
</div>
`;

// =====================================================
// TASK 7: TESTING & QA PROTOCOL
// =====================================================
const task7Content = `
<h2>📚 TESTING & QA PROTOCOL</h2>

<div class="content-section">
<h3>✅ Testing Checklist</h3>
<table>
<tr><th>Category</th><th>Items to Test</th></tr>
<tr><td><strong>Functionality</strong></td><td>All features work as specified. Edge cases handled.</td></tr>
<tr><td><strong>Authentication</strong></td><td>Login, logout, password reset, session handling, protected routes</td></tr>
<tr><td><strong>Authorization</strong></td><td>Role-based access works. Users can't access admin features.</td></tr>
<tr><td><strong>Forms</strong></td><td>Validation works, errors shown, success messages, loading states</td></tr>
<tr><td><strong>Responsive</strong></td><td>Works on mobile, tablet, desktop. No horizontal scroll.</td></tr>
<tr><td><strong>Performance</strong></td><td>Page load < 3s. No unnecessary re-renders. Images optimized.</td></tr>
<tr><td><strong>Security</strong></td><td>SQL injection prevented, XSS prevented, CSRF tokens, HTTPS</td></tr>
</table>
</div>

<div class="content-section">
<h3>🚨 Security Must-Checks (5 NEVER Rules)</h3>
<div class="warning-box">
<ol>
<li><strong>Never</strong> expose API keys in frontend code</li>
<li><strong>Never</strong> trust client-side data — always validate server-side</li>
<li><strong>Never</strong> store passwords in plain text</li>
<li><strong>Never</strong> log sensitive data (passwords, tokens, PII)</li>
<li><strong>Never</strong> disable CORS for production</li>
</ol>
</div>
</div>

<div class="content-section">
<h3>🎯 Performance Targets</h3>
<table>
<tr><th>Metric</th><th>Target</th></tr>
<tr><td>Page Load</td><td>< 3 seconds</td></tr>
<tr><td>Time to Interactive</td><td>< 5 seconds</td></tr>
<tr><td>Core Web Vitals</td><td>All green</td></tr>
<tr><td>Mobile Score</td><td>85+</td></tr>
</table>
</div>
`;

// =====================================================
// TASK 8: DEPLOYMENT & CLIENT HANDOVER
// =====================================================
const task8Content = `
<h2>📚 DEPLOYMENT & CLIENT HANDOVER</h2>

<div class="content-section">
<h3>✅ Pre-Deployment Checklist</h3>
<table>
<tr><th>Task</th><th>Status</th></tr>
<tr><td>All environment variables set in production</td><td>☐</td></tr>
<tr><td>Database migrated to production</td><td>☐</td></tr>
<tr><td>SSL certificate configured</td><td>☐</td></tr>
<tr><td>Domain DNS configured correctly</td><td>☐</td></tr>
<tr><td>Payment gateway in live mode (not test)</td><td>☐</td></tr>
<tr><td>Email service configured with production domain</td><td>☐</td></tr>
<tr><td>Error monitoring set up (Sentry or similar)</td><td>☐</td></tr>
<tr><td>Analytics configured</td><td>☐</td></tr>
<tr><td>Backup strategy in place</td><td>☐</td></tr>
</table>
</div>

<div class="content-section">
<h3>📦 Handover Package Contents</h3>
<ul>
<li><strong>Admin credentials</strong> — Login details for admin panel</li>
<li><strong>Documentation</strong> — How to use the system (Notion/PDF)</li>
<li><strong>Training video</strong> — Loom walkthrough of key features</li>
<li><strong>Technical documentation</strong> — For future developers</li>
<li><strong>Environment variables list</strong> — What's configured where</li>
<li><strong>Hosting access</strong> — Vercel/Railway/hosting login</li>
<li><strong>Domain registrar access</strong> — DNS management</li>
<li><strong>GitHub repository</strong> — Transfer ownership or add as collaborator</li>
<li><strong>Support period details</strong> — What's included, how to contact</li>
</ul>
</div>

<div class="content-section">
<h3>🎥 Training Video Best Practices</h3>
<div class="highlight-box">
<ul>
<li>Keep under 15 minutes (break into parts if needed)</li>
<li>Show don't tell — screen record actual usage</li>
<li>Cover: Login, dashboard, common tasks, where to get help</li>
<li>Use Loom or similar for easy sharing</li>
</ul>
</div>
</div>
`;

// =====================================================
// TASK 9: DIFFICULT SITUATIONS & TROUBLESHOOTING
// =====================================================
const task9Content = `
<h2>📚 DIFFICULT SITUATIONS & TROUBLESHOOTING</h2>

<div class="content-section">
<h3>🔴 SCENARIO 1: Production Server Down</h3>
<p><strong>Situation:</strong> Client's application is completely inaccessible.</p>
<div class="highlight-box">
<strong>Response:</strong>
<ol>
<li>Check server status and logs immediately</li>
<li>Communicate: "We're aware and investigating."</li>
<li>Roll back last deploy if it caused the issue</li>
<li>Document root cause after resolution</li>
</ol>
</div>
<p><strong>Rule:</strong> Availability first. Communicate early. Post-mortem after fire is out.</p>
</div>

<div class="content-section">
<h3>🔴 SCENARIO 2: Database Corruption or Data Loss</h3>
<p><strong>Situation:</strong> Data is missing or corrupted.</p>
<div class="warning-box">
<strong>Response:</strong> Stop all writes immediately. Check backups. Restore from last known good backup. Document what was lost. Implement better backup strategy after.
</div>
<p><strong>Rule:</strong> Backups save lives. Test restores regularly.</p>
</div>

<div class="content-section">
<h3>🔴 SCENARIO 3: Security Vulnerability Discovered</h3>
<p><strong>Situation:</strong> Found or reported security flaw.</p>
<div class="highlight-box">
<strong>Response:</strong> Assess severity. If critical: Patch immediately or take affected feature offline. Inform client. Document the vulnerability and fix. Review for similar issues.
</div>
<p><strong>Rule:</strong> Security issues are P0. Drop everything else.</p>
</div>

<div class="content-section">
<h3>🔴 SCENARIO 4: Third-Party API is Down</h3>
<p><strong>Situation:</strong> External service your app depends on is not responding.</p>
<div class="highlight-box">
<strong>Response:</strong> Check status page. Implement graceful degradation (fallback UX). Notify client: "We're experiencing issues with [service]. Working on a workaround."
</div>
<p><strong>Rule:</strong> Always plan for third-party failures.</p>
</div>

<div class="content-section">
<h3>🔴 SCENARIO 5: Client Wants Feature in Unrealistic Timeline</h3>
<p><strong>Situation:</strong> Client expects complex feature in days, not weeks.</p>
<div class="highlight-box">
<strong>Response:</strong> "I understand the urgency. To deliver properly, this takes [X days]. I can deliver [smaller scope] by your deadline, then add the rest. Which approach works better?"
</div>
<p><strong>Rule:</strong> Don't promise impossible. Offer phased delivery.</p>
</div>

<div class="content-section">
<h3>🔴 SCENARIO 6: Inherited Codebase is a Disaster</h3>
<p><strong>Situation:</strong> Taking over project with poor code quality.</p>
<div class="highlight-box">
<strong>Response:</strong> Document issues found. Estimate cleanup time. Advise PM: "Before adding features, we should refactor [X] to prevent future bugs."
</div>
<p><strong>Rule:</strong> Don't blame previous devs. Document risks. Recommend solutions.</p>
</div>

<div class="content-section">
<h3>🔴 SCENARIO 7: Your Deployment Broke Something</h3>
<p><strong>Situation:</strong> New feature caused unexpected issues.</p>
<div class="warning-box">
<strong>Response:</strong> Roll back immediately if possible. Own it: "My recent deployment caused [issue]. Rolling back now." Then investigate properly in staging.
</div>
<p><strong>Rule:</strong> Fast rollback beats slow debugging.</p>
</div>

<div class="content-section">
<h3>🔴 SCENARIO 8: Client Access Credentials Compromised</h3>
<p><strong>Situation:</strong> Credentials were exposed or suspected breach.</p>
<div class="warning-box">
<strong>Response:</strong> Rotate ALL credentials immediately. Check for unauthorized access in logs. Notify client and PM. Review access controls.
</div>
<p><strong>Rule:</strong> Rotate first, investigate second. Never share creds in plain text.</p>
</div>
`;

// =====================================================
// TASK 10: FINAL CERTIFICATION
// =====================================================
const task10Content = `
<h2>🎓 FINAL CERTIFICATION</h2>

<div class="content-section">
<h3>📋 Pre-Certification Requirements</h3>
<ul>
<li>✅ Complete Tasks 1-9 with 10/10 on all quizzes</li>
<li>✅ Review entire SOP: https://dhlibrary.vercel.app/fullstack-sop.html</li>
<li>📖 Study all 5 Project Principles</li>
<li>📖 Know all 8 difficult scenario scripts</li>
<li>📖 Understand the 5-phase development cycle</li>
</ul>
</div>

<div class="content-section">
<h3>📝 Final Exam: 20 Questions</h3>
<p>The final exam covers ALL material from Tasks 1-9. You must score <strong>20/20 (100%)</strong> to pass.</p>
</div>

<div class="content-section">
<h3>🎥 Video Submission Requirement</h3>
<p><strong>After passing exam, record 30-minute video:</strong></p>

<h4>1️⃣ Introduction (2 min)</h4>
<ul>
<li>Your name and background</li>
<li>Previous development experience</li>
</ul>

<h4>2️⃣ SOP Walkthrough (10 min)</h4>
<ul>
<li>Walk through the 5 Project Principles</li>
<li>Explain the 5-phase development cycle</li>
<li>Describe the TSD structure</li>
</ul>

<h4>3️⃣ Technical Demonstration (15 min)</h4>
<ul>
<li>Show your understanding of project setup</li>
<li>Walk through a sample folder structure</li>
<li>Explain API design decisions</li>
<li>Demonstrate testing approach</li>
</ul>

<h4>4️⃣ Closing (3 min)</h4>
<ul>
<li>How you'll apply these principles</li>
<li>Your commitment to quality</li>
</ul>
</div>

<div class="content-section">
<h3>✅ Upon Certification</h3>
<div class="highlight-box">
<ol>
<li>✅ "CERTIFIED FULL STACK DEVELOPER" badge</li>
<li>✅ Assigned first project with senior oversight</li>
<li>✅ Begin building real client applications</li>
</ol>
</div>
</div>

<div class="content-section">
<h3>💡 REMEMBER</h3>
<div class="highlight-box" style="font-size: 1.2em; text-align: center;">
<strong>"Plan twice, code once."</strong><br><br>
<strong>Spec → Build → Test → Deploy</strong>
</div>
</div>
`;

// Assign content to tasks
trainingTasks[0].content = task1Content;
trainingTasks[1].content = task2Content;
trainingTasks[2].content = task3Content;
trainingTasks[3].content = task4Content;
trainingTasks[4].content = task5Content;
trainingTasks[5].content = task6Content;
trainingTasks[6].content = task7Content;
trainingTasks[7].content = task8Content;
trainingTasks[8].content = task9Content;
trainingTasks[9].content = task10Content;

// ===============================================
// QUIZ QUESTIONS - 120 Total (10 per task + 20 final)
// Answer positions randomized for equal A/B/C/D distribution
// ===============================================

const task1Quiz = [
    { q: "\"Spec Before Code\" means:", o: ["Write code first, document later", "Create specifications after coding", "Skip specifications for small projects", "Never write code without a signed-off technical specification"], c: 3 },
    { q: "After 15 days onboarding, ONE careless mistake can result in:", o: ["Potential removal from client work", "A warning", "Extra training", "Nothing serious"], c: 0 },
    { q: "Scope is locked means:", o: ["Scope can change anytime", "Once client signs off, new features = new quote", "Add features for free to please clients", "Ignore scope changes"], c: 1 },
    { q: "P0 priority includes:", o: ["Learning and optimization", "Code reviews", "Production outages, security vulnerabilities, data issues", "New feature development"], c: 2 },
    { q: "Before ANY submission, you should review work:", o: ["Once", "Not needed if it compiles", "3-5 times", "Only if time permits"], c: 2 },
    { q: "If client finds bugs before you:", o: ["It's normal", "Client should test everything", "It's a failure — YOU are responsible for quality", "Bugs are expected"], c: 2 },
    { q: "Code Quality is:", o: ["Non-negotiable", "Nice to have", "Only for senior developers", "Client's responsibility"], c: 0 },
    { q: "Milestone-based delivery means:", o: ["Deliver everything at the end", "Skip phases if rushed", "Each phase = client approval before proceeding", "Only for large projects"], c: 2 },
    { q: "Peer review before deployment is:", o: ["Optional", "Only for juniors", "Waste of time", "Recommended — fresh eyes catch what you missed"], c: 3 },
    { q: "\"It works on my machine\" is:", o: ["Valid excuse", "Good enough", "Client's problem", "NOT acceptable — test everywhere"], c: 3 }
];

const task2Quiz = [
    { q: "Discovery meeting duration should be:", o: ["15 minutes", "5 hours", "60-90 minutes", "Not needed"], c: 2 },
    { q: "Business Context phase captures:", o: ["Only technical requirements", "Just the budget", "Problem being solved, users, business goal", "Design preferences only"], c: 2 },
    { q: "\"What happens when [edge case]?\" helps find:", o: ["Budget", "Design preferences", "Hidden complexity", "Timeline"], c: 2 },
    { q: "Discovery for complex projects is:", o: ["Free", "Optional", "A paid service ($15,000 - $50,000)", "Done by client"], c: 2 },
    { q: "User Roles phase identifies:", o: ["Who uses the system and what each role can do", "Only admin users", "Technical stack", "Budget"], c: 0 },
    { q: "\"Who approves deliverables?\" identifies:", o: ["The developer", "The decision-maker", "The designer", "Anyone"], c: 1 },
    { q: "Integration phase covers:", o: ["Only frontend", "Database only", "Payment gateway, email service, third-party APIs", "Nothing technical"], c: 2 },
    { q: "Feature Walkthrough duration:", o: ["5 minutes", "2 hours", "10 seconds", "30 minutes"], c: 3 },
    { q: "Discovery deliverable is:", o: ["Technical Specification Document", "Working code", "Final design", "Database"], c: 0 },
    { q: "Timeline & Budget discussion ensures:", o: ["Maximum profit", "Cheap delivery", "Skip planning", "Alignment before work begins"], c: 3 }
];

const task3Quiz = [
    { q: "TSD is signed:", o: ["After development", "Never", "Before development starts", "Only for large projects"], c: 2 },
    { q: "TSD Section 10 \"Out of Scope\" defines:", o: ["Extra features to add free", "What is NOT included", "Future updates", "Hidden features"], c: 1 },
    { q: "User Roles & Permissions section covers:", o: ["Who can do what in the system", "Only admin", "Database schema", "API endpoints"], c: 0 },
    { q: "Feature List should include:", o: ["Vague descriptions", "Only main features", "Every feature with detailed acceptance criteria", "Nothing specific"], c: 2 },
    { q: "Database Schema section includes:", o: ["Frontend code", "User interface", "Tables, relationships, data types", "Marketing copy"], c: 2 },
    { q: "API Endpoints section documents:", o: ["Only GET requests", "Frontend components", "All backend routes with request/response formats", "Database queries"], c: 2 },
    { q: "Timeline & Milestones shows:", o: ["Single delivery date", "Phase breakdown with delivery dates", "No dates", "Only start date"], c: 1 },
    { q: "TSD acts as:", o: ["Your contract defining exactly what will be built", "Marketing material", "Optional reference", "Internal document only"], c: 0 },
    { q: "Third-Party Integrations section lists:", o: ["External services, APIs, credentials needed", "Only internal code", "Team members", "Office equipment"], c: 0 },
    { q: "Technology Stack section covers:", o: ["Only frontend", "Frontend, backend, database, hosting decisions", "Only database", "Only hosting"], c: 1 }
];

const task4Quiz = [
    { q: "GitHub repository should be:", o: ["Public for all projects", "No repo needed", "Shared across clients", "Private with proper naming (client-project-name)"], c: 3 },
    { q: "Branch \"main\" is for:", o: ["Development", "Production code only", "Testing", "Feature work"], c: 1 },
    { q: "Environment variables go in:", o: ["Public files", "README", ".env.local (secrets), .env.example (template without secrets)", "Package.json"], c: 2 },
    { q: "/components folder contains:", o: ["Reusable UI components", "Database code", "API routes", "Static assets"], c: 0 },
    { q: "/lib folder is for:", o: ["Images", "Utilities, helpers, database connection", "Tests only", "Styles"], c: 1 },
    { q: "ESLint & Prettier ensure:", o: ["Faster code", "More bugs", "Consistent code formatting across team", "Slower builds"], c: 2 },
    { q: "Feature branches are named:", o: ["random-name", "just the feature name", "main", "feature/[name]"], c: 3 },
    { q: "/prisma folder contains:", o: ["React components", "Images", "Styles", "Database schema"], c: 3 },
    { q: "Preview deployments are set up on:", o: ["Local only", "No previews needed", "Vercel/Railway connected to repo", "Email"], c: 2 },
    { q: "\"develop\" branch is for:", o: ["Staging/testing", "Production", "Hotfixes", "Archives"], c: 0 }
];

const task5Quiz = [
    { q: "Typical custom project timeline:", o: ["1 week", "1 day", "4-8 weeks", "1 year"], c: 2 },
    { q: "Phase 1 Foundation deliverable:", o: ["Final product", "Working login/register, basic dashboard shell", "All features", "Marketing"], c: 1 },
    { q: "Each phase requires:", o: ["Client approval before proceeding", "Nothing", "Skip to next", "Only developer approval"], c: 0 },
    { q: "Phase 3 Integrations includes:", o: ["Only frontend", "Only design", "Payment gateway, email service, third-party APIs", "Only database"], c: 2 },
    { q: "Phase 4 Polish includes:", o: ["Adding new features", "Starting over", "UI/UX refinement, mobile responsiveness, bug fixes", "Canceling project"], c: 2 },
    { q: "Phase 5 Launch includes:", o: ["Just deployment", "Only training", "Production deployment, DNS, SSL, testing, client training", "Only DNS"], c: 2 },
    { q: "Core Features phase is:", o: ["Phase 2", "Phase 1", "Phase 5", "Not needed"], c: 0 },
    { q: "Security review happens in:", o: ["Phase 1", "Never", "Phase 4 (Polish & Testing)", "After launch"], c: 2 },
    { q: "Integrations should work in:", o: ["Production mode immediately", "No testing needed", "Test mode first", "Manual mode"], c: 2 },
    { q: "Client training happens in:", o: ["Phase 1", "Never", "Phase 5 (Launch)", "Before development"], c: 2 }
];

const task6Quiz = [
    { q: "Soft deletes use:", o: ["Hard delete everything", "No deletion", "deletedAt timestamp, never hard delete", "Random deletion"], c: 2 },
    { q: "RESTful API naming:", o: ["/api/getUsers", "/api/users", "/fetchAllUsers", "/user_list"], c: 1 },
    { q: "HTTP POST is for:", o: ["Reading data", "Deleting", "Creating new resources", "Nothing"], c: 2 },
    { q: "Status 401 means:", o: ["Success", "Not found", "Unauthorized", "Server error"], c: 2 },
    { q: "All tables should have:", o: ["No timestamps", "Only id", "createdAt, updatedAt timestamps", "Random fields"], c: 2 },
    { q: "UUID is better than auto-increment for:", o: ["Speed only", "Nothing", "Distributed systems", "Small databases only"], c: 2 },
    { q: "Input validation should happen:", o: ["Only frontend", "Only backend", "Never", "Frontend AND backend"], c: 3 },
    { q: "Status 404 means:", o: ["Success", "Server error", "Not found", "Created"], c: 2 },
    { q: "HTTP DELETE is for:", o: ["Creating", "Reading", "Updating", "Removing resources"], c: 3 },
    { q: "Normalize data means:", o: ["Avoid duplication, use relationships", "Duplicate everything", "Single table", "No structure"], c: 0 }
];

const task7Quiz = [
    { q: "Page load target:", o: ["10 seconds", "30 seconds", "No target", "Less than 3 seconds"], c: 3 },
    { q: "API keys in frontend code:", o: ["Acceptable", "Sometimes okay", "Required", "Never expose"], c: 3 },
    { q: "Client-side data should be:", o: ["Trusted completely", "Used directly", "Never trusted — always validate server-side", "Not validated"], c: 2 },
    { q: "Passwords should be stored:", o: ["In plain text", "In cookies", "Hashed, never plain text", "In frontend"], c: 2 },
    { q: "Authorization testing ensures:", o: ["Role-based access works, users can't access restricted features", "Everyone has admin access", "No roles needed", "Open access"], c: 0 },
    { q: "Forms should show:", o: ["Nothing", "Only success", "Validation errors, success messages, loading states", "Only errors"], c: 2 },
    { q: "CORS in production should be:", o: ["Disabled", "Ignored", "Open to all", "Properly configured, not disabled"], c: 3 },
    { q: "Sensitive data in logs is:", o: ["Fine", "Required", "Helpful", "Never allowed (passwords, tokens, PII)"], c: 3 },
    { q: "Mobile responsive means:", o: ["Desktop only", "Mobile only", "Works on mobile, tablet, desktop with no horizontal scroll", "Not important"], c: 2 },
    { q: "HTTPS is:", o: ["Optional", "Only for banking", "Required for production", "Not needed"], c: 2 }
];

const task8Quiz = [
    { q: "Payment gateway at launch must be in:", o: ["Test mode", "Disabled", "Demo mode", "Live mode (not test)"], c: 3 },
    { q: "SSL certificate is:", o: ["Optional", "Not needed", "Required and must be configured", "Only for payments"], c: 2 },
    { q: "Error monitoring tool example:", o: ["No monitoring needed", "Just console.log", "Sentry or similar", "Email only"], c: 2 },
    { q: "Handover includes:", o: ["Just login credentials", "Nothing", "Admin credentials, documentation, training video, technical docs", "Just code"], c: 2 },
    { q: "Backup strategy should be:", o: ["In place before launch", "Not needed", "After problems occur", "Client's responsibility"], c: 0 },
    { q: "Training video should be:", o: ["Text only", "Not needed", "Loom walkthrough of key features", "After 6 months"], c: 2 },
    { q: "GitHub repository at handover:", o: ["Delete it", "Keep secret", "Transfer ownership or add client as collaborator", "Make public"], c: 2 },
    { q: "Environment variables in production:", o: ["Same as development", "Not needed", "All set and verified", "Default values"], c: 2 },
    { q: "DNS configuration is:", o: ["Automatic", "Not needed", "Must be configured correctly", "Client does later"], c: 2 },
    { q: "Support period details should be:", o: ["Verbal only", "Not mentioned", "Decided later", "Clearly documented in handover"], c: 3 }
];

const task9Quiz = [
    { q: "Production server down — first action:", o: ["Wait and see", "Email client tomorrow", "Check server status and logs immediately", "Ignore"], c: 2 },
    { q: "Data loss — first action:", o: ["Keep writing data", "Ignore", "Stop all writes immediately, check backups", "Delete more data"], c: 2 },
    { q: "Security vulnerability is:", o: ["Low priority", "Can wait", "P0 — Drop everything, fix first", "Not important"], c: 2 },
    { q: "Third-party API down — response:", o: ["Wait indefinitely", "Blame the API", "Check status page, implement fallback UX, notify client", "Do nothing"], c: 2 },
    { q: "Unrealistic timeline — response:", o: ["Promise anything", "Miss deadline silently", "Offer phased delivery with smaller scope first", "Refuse completely"], c: 2 },
    { q: "Inherited bad codebase — response:", o: ["Blame previous devs publicly", "Quit immediately", "Document issues, estimate cleanup, recommend solutions", "Ship as-is"], c: 2 },
    { q: "Your deployment broke something — first action:", o: ["Hide it", "Blame infrastructure", "Roll back immediately, own the mistake", "Wait for client to notice"], c: 2 },
    { q: "Credentials compromised — first action:", o: ["Wait to confirm", "Check email", "Rotate ALL credentials immediately", "Ask client"], c: 2 },
    { q: "Fast rollback beats:", o: ["Fast debugging", "Doing nothing", "Slow debugging", "Blaming others"], c: 2 },
    { q: "Credentials should be shared:", o: ["In plain text", "Via email body", "Never in plain text — use secure methods", "In Slack publicly"], c: 2 }
];

const task10Quiz = [
    { q: "Before making ANY theme changes:", o: ["Work on live", "Skip backup", "Duplicate theme first", "Ask PM"], c: 2 },
    { q: "\"Spec Before Code\" means:", o: ["Optional specs", "Code first", "Never code without signed-off TSD", "Skip specs"], c: 2 },
    { q: "Zero tolerance applies after:", o: ["Day 1", "1 year", "15 days of onboarding", "Never"], c: 2 },
    { q: "P0 priority includes:", o: ["Learning", "Documentation", "Production outages, security, data issues", "Optimization"], c: 2 },
    { q: "Discovery meeting duration:", o: ["15 min", "5 hours", "60-90 minutes", "5 min"], c: 2 },
    { q: "TSD Section 10 covers:", o: ["Features", "Budget", "Out of Scope (what's NOT included)", "Team"], c: 2 },
    { q: "Branch \"main\" is for:", o: ["Development", "Testing", "Production code only", "Features"], c: 2 },
    { q: "Typical project timeline:", o: ["1 week", "1 day", "4-8 weeks", "1 year"], c: 2 },
    { q: "Soft deletes use:", o: ["Hard delete", "deletedAt timestamp", "No deletion", "Random"], c: 1 },
    { q: "RESTful naming for users:", o: ["/getUsers", "/fetchAll", "/api/users", "/user_list"], c: 2 },
    { q: "API keys in frontend:", o: ["Fine", "Sometimes", "Never expose", "Required"], c: 2 },
    { q: "Page load target:", o: ["10s", "30s", "Less than 3 seconds", "Any"], c: 2 },
    { q: "Payment gateway at launch:", o: ["Test mode", "Disabled", "Live mode", "Demo"], c: 2 },
    { q: "Production server down first action:", o: ["Wait", "Email tomorrow", "Check status and logs immediately", "Ignore"], c: 2 },
    { q: "Security vulnerability priority:", o: ["Low", "Medium", "P0 — Drop everything", "Optional"], c: 2 },
    { q: "Your deployment broke production:", o: ["Hide it", "Blame infra", "Roll back immediately, own it", "Wait"], c: 2 },
    { q: "Credentials compromised:", o: ["Wait", "Ask client", "Rotate ALL immediately", "Ignore"], c: 2 },
    { q: "Handover includes:", o: ["Just login", "Nothing", "Credentials, docs, training video, technical docs", "Code only"], c: 2 },
    { q: "Pre-submission review:", o: ["Once", "Never", "3-5 times", "If time"], c: 2 },
    { q: "Code quality is:", o: ["Optional", "Junior's job", "Non-negotiable", "Client's problem"], c: 2 }
];

// Export all quizzes
const allQuizzes = [task1Quiz, task2Quiz, task3Quiz, task4Quiz, task5Quiz, task6Quiz, task7Quiz, task8Quiz, task9Quiz, task10Quiz];
