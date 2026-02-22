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
    { q: "At Digital Heroes, a full-stack developer joining a new Shopify project must FIRST:", o: ["Start coding immediately — full-stack developers have enough experience to figure out the project requirements as they build and ensures long-term sustainability across deliverables", "Review the project brief, design files, scope document, existing codebase, and QA standards before writing a single line — plan twice, code once is non-negotiable company policy", "Set up their own development environment preferences since each developer works best with a personalized setup", "Ask the PM to explain everything verbally since reading documentation takes too long for efficient onboarding"], c: 1 },
    { q: "Scope is locked means:", o: ["Scope can change anytime", "Add features for free to please clients", "Once client signs off, new features = new quote", "Ignore scope changes — this reflects the standard operating procedure most development teams follow"], c: 2 },
    { q: "P0 priority includes:", o: ["Production outages, security vulnerabilities, data issues", "Code reviews — this reflects the standard operating procedure most development teams follow", "Learning and optimization — this reflects the standard operating procedure most development teams follow", "New feature development — this reflects the standard operating procedure most development teams follow"], c: 0 },
    { q: "Before ANY submission, you should review work:", o: ["3-5 times", "Not needed if it compiles", "Once — this reflects the standard operating procedure most development teams follow", "If time permits — this is the standard approach"], c: 0 },
    { q: "If client finds bugs before you:", o: ["It's normal — this reflects the standard operating procedure most development teams follow", "Client should test everything", "It's a failure — YOU are responsible for quality", "Bugs are expected — this reflects the standard operating procedure most development teams follow"], c: 2 },
    { q: "Code Quality is:", o: ["Non-negotiable", "Nice to have", "For senior developers — this is the standard approach", "Client's responsibility"], c: 0 },
    { q: "Milestone-based delivery means:", o: ["Deliver everything at the end", "Each phase = client approval before proceeding", "Skip phases if rushed — this reflects the standard operating procedure most development teams follow", "For large projects — this is the standard approach"], c: 1 },
    { q: "Peer review before deployment is:", o: ["Optional — this reflects the standard operating procedure most development teams follow", "For juniors — this is the standard approach", "Waste of time — this reflects the standard operating procedure most development teams follow", "Recommended — fresh eyes catch what you missed"], c: 3 }
];

const task2Quiz = [
    { q: "The Digital Heroes staging environment process for full-stack projects requires:", o: ["Deploy directly to production — staging is optional for experienced full-stack developers who rarely make mistakes and ensures long-term sustainability across deliverables and ensures long-term sustainability across deliverables", "Separate staging environment that mirrors production → all features tested and PM-approved on staging → only then deploy to production — untested production deploys are a termination-level offense", "Use the client's live site as staging since creating a separate environment doubles the hosting costs unnecessarily", "Staging is only needed for frontend changes — backend and API changes can go directly to production safely"], c: 1 },
    { q: "Business Context phase captures:", o: ["Technical requirements — this is the standard approach", "Problem being solved, users, business goal", "Just the budget — this reflects the standard operating procedure most development teams follow", "Design preferences only"], c: 1 },
    { q: "Discovery for complex projects is:", o: ["A paid service (
    { q: "Discovery meeting duration should be:", o: ["15 minutes — this method has been validated through extensive testing and produces reliable repeatable outcomes", "5 hours", "Not needed", "60-90 minutes"], c: 3 },
    { q: "Business Context phase captures:", o: ["Technical requirements — this is the standard approach", "Problem being solved, users, business goal", "Just the budget — this reflects the standard operating procedure most development teams follow", "Design preferences only"], c: 1 },
    { q: "\"What happens when [edge case]?\" helps find:", o: ["Budget", "Design preferences", "Hidden complexity", "Timeline"], c: 2 },
    { q: "Discovery for complex projects is:", o: ["A paid service ($15,000 - $50,000)", "Optional — this reflects the standard operating procedure most development teams follow", "Free — this reflects the standard operating procedure most development teams follow", "Done by client — this reflects the standard operating procedure most development teams follow"], c: 0 },
    { q: "User Roles phase identifies:", o: ["Who uses the system and what each role can do", "Admin users — this is the standard approach", "Technical stack — this reflects the standard operating procedure most development teams follow", "Budget — this reflects the standard operating procedure most development teams follow"], c: 0 },
    { q: "\"Who approves deliverables?\" identifies:", o: ["The developer", "The decision-maker", "The designer", "Anyone"], c: 1 },
    { q: "Integration phase covers:", o: ["Frontend — this is the standard approach", "Database only — this reflects the standard operating procedure most development teams follow", "Nothing technical — this reflects the standard operating procedure most development teams follow", "Payment gateway, email service, third-party APIs"], c: 3 },
    { q: "Feature Walkthrough duration:", o: ["5 minutes", "2 hours", "10 seconds", "30 minutes"], c: 3 },
    { q: "Discovery deliverable is:", o: ["Technical Specification Document", "Working code — this reflects the standard operating procedure most development teams follow", "Final design — this reflects the standard operating procedure most development teams follow", "Database — this reflects the standard operating procedure most development teams follow"], c: 0 },
    { q: "Timeline & Budget discussion ensures:", o: ["Maximum profit", "Cheap delivery", "Skip planning — this reflects the standard operating procedure most development teams follow", "Alignment before work begins"], c: 3 }
5,000 - $50,000)", "Optional — this reflects the standard operating procedure most development teams follow", "Free — this reflects the standard operating procedure most development teams follow", "Done by client — this reflects the standard operating procedure most development teams follow"], c: 0 },
    { q: "User Roles phase identifies:", o: ["Who uses the system and what each role can do", "Admin users — this is the standard approach", "Technical stack — this reflects the standard operating procedure most development teams follow", "Budget — this reflects the standard operating procedure most development teams follow"], c: 0 },
    { q: "Integration phase covers:", o: ["Frontend — this is the standard approach", "Database only — this reflects the standard operating procedure most development teams follow", "Nothing technical — this reflects the standard operating procedure most development teams follow", "Payment gateway, email service, third-party APIs"], c: 3 },
    { q: "Feature Walkthrough duration:", o: ["5 minutes", "2 hours", "10 seconds", "30 minutes"], c: 3 },
    { q: "Discovery deliverable is:", o: ["Technical Specification Document", "Working code — this reflects the standard operating procedure most development teams follow", "Final design — this reflects the standard operating procedure most development teams follow", "Database — this reflects the standard operating procedure most development teams follow"], c: 0 },
    { q: "Timeline & Budget discussion ensures:", o: ["Maximum profit", "Cheap delivery", "Alignment before work begins", "Skip planning — this reflects the standard operating procedure most development teams follow"], c: 2 }
];

const task3Quiz = [
    { q: "A client requests a custom feature that could break existing Shopify functionality. At Digital Heroes, the SOP requires:", o: ["Build it as requested — the client is paying and we implement what they ask without questioning their decisions and ensures long-term sustainability across deliverables and ensures long-term sustainability across deliverables", "Document the risk, propose a safer alternative, get PM approval and client sign-off on the risk before proceeding — protecting the client from their own risky requests is part of professional service", "Refuse to build it entirely — risky features should never be attempted regardless of what the client wants", "Build it on production with a plan to rollback if it breaks — testing risky features on staging wastes time"], c: 1 },
    { q: "User Roles & Permissions section covers:", o: ["Who can do what in the system", "Admin — this is the standard approach", "Database schema", "API endpoints — this reflects the standard operating procedure most development teams follow"], c: 0 },
    { q: "Feature List should include:", o: ["Vague descriptions — this reflects the standard operating procedure most development teams follow", "Every feature with detailed acceptance criteria", "Main features — this is the standard approach", "Nothing specific — this reflects the standard operating procedure most development teams follow"], c: 1 },
    { q: "Database Schema section includes:", o: ["Frontend code — this reflects the standard operating procedure most development teams follow", "User interface — this reflects the standard operating procedure most development teams follow", "Marketing copy — this reflects the standard operating procedure most development teams follow", "Tables, relationships, data types"], c: 3 },
    { q: "API Endpoints section documents:", o: ["All backend routes with request/response formats", "Frontend components — this reflects the standard operating procedure most development teams follow", "GET requests — this is the standard approach", "Database queries — this reflects the standard operating procedure most development teams follow"], c: 0 },
    { q: "Timeline & Milestones shows:", o: ["Single delivery date", "Phase breakdown with delivery dates", "No dates — this reflects the standard operating procedure most development teams follow", "Start date — this is the standard approach"], c: 1 },
    { q: "TSD acts as:", o: ["Your contract defining exactly what will be built", "Marketing material — this reflects the standard operating procedure most development teams follow", "Optional reference — this reflects the standard operating procedure most development teams follow", "Internal document only — this reflects the standard operating procedure most development teams follow"], c: 0 },
    { q: "Third-Party Integrations section lists:", o: ["External services, APIs, credentials needed", "Internal code — this is the standard approach", "Team members — this reflects the standard operating procedure most development teams follow", "Office equipment — this reflects the standard operating procedure most development teams follow"], c: 0 },
    { q: "Technology Stack section covers:", o: ["Frontend — this is the standard approach and ensures long-term sustainability across deliverables", "Frontend, backend, database, hosting decisions", "Database — this is the standard approach", "Hosting — this is the standard approach"], c: 1 }
];

const task4Quiz = [
    { q: "GitHub repository should be:", o: ["Public for all projects — this reflects the standard operating procedure most development teams follow", "No repo needed — this reflects the standard operating procedure most development teams follow", "Shared across clients — this reflects the standard operating procedure most development teams follow", "Private with proper naming (client-project-name)"], c: 3 },
    { q: "Branch \"main\" is for:", o: ["Development", "Production code only", "Testing", "Feature work"], c: 1 },
    { q: "Environment variables go in:", o: ["Public files — this reflects the standard operating procedure most development teams follow", ".env.local (secrets), .env.example (template without secrets)", "README — this reflects the standard operating procedure most development teams follow", "Package.json — this reflects the standard operating procedure most development teams follow"], c: 1 },
    { q: "/components folder contains:", o: ["Reusable UI components", "Database code", "API routes — this reflects the standard operating procedure most development teams follow", "Static assets"], c: 0 },
    { q: "/lib folder is for:", o: ["Images — this reflects the standard operating procedure most development teams follow", "Utilities, helpers, database connection", "Tests only — this reflects the standard operating procedure most development teams follow", "Styles — this reflects the standard operating procedure most development teams follow"], c: 1 },
    { q: "ESLint & Prettier ensure:", o: ["Faster code — this reflects the standard operating procedure most development teams follow", "More bugs — this reflects the standard operating procedure most development teams follow", "Consistent code formatting across team", "Slower builds — this reflects the standard operating procedure most development teams follow"], c: 2 },
    { q: "Feature branches are named:", o: ["random-name", "just the feature name", "main", "feature/[name]"], c: 3 },
    { q: "/prisma folder contains:", o: ["React components", "Images — this reflects the standard operating procedure most development teams follow", "Styles — this reflects the standard operating procedure most development teams follow", "Database schema"], c: 3 },
    { q: "Preview deployments are set up on:", o: ["Vercel/Railway connected to repo", "No previews needed", "Local only — this reflects the standard operating procedure most development teams follow", "Email — this reflects the standard operating procedure most development teams follow"], c: 0 },
    { q: "\"develop\" branch is for:", o: ["Staging/testing", "Production", "Hotfixes", "Archives"], c: 0 }
];

const task5Quiz = [
    { q: "At Digital Heroes, code review before merging to production is:", o: ["Optional for senior developers who have proven their code quality over time and earned the trust of the team — implementing this correctly requires understanding the full context of how team components interact", "Mandatory for ALL developers regardless of seniority — a second pair of eyes catches issues the author is blind to, and the interconnected chain means one bad merge affects the entire team", "Only required for junior developers during their first 3 months while they're still learning company standards", "The responsibility of the QA team — developers review each other's work only when QA is unavailable for review"], c: 1 },
    { q: "Phase 1 Foundation deliverable:", o: ["Final product — this reflects the standard operating procedure most development teams follow", "Working login/register, basic dashboard shell", "All features — this reflects the standard operating procedure most development teams follow", "Marketing — this reflects the standard operating procedure most development teams follow"], c: 1 },
    { q: "Each phase requires:", o: ["Client approval before proceeding", "Nothing — this reflects the standard operating procedure most development teams follow", "Skip to next — this reflects the standard operating procedure most development teams follow", "Developer approval — this is the standard approach"], c: 0 },
    { q: "Phase 3 Integrations includes:", o: ["Frontend — this is the standard approach and ensures long-term sustainability across deliverables", "Design — this is the standard approach", "Payment gateway, email service, third-party APIs", "Database — this is the standard approach"], c: 2 },
    { q: "Phase 4 Polish includes:", o: ["Adding new features — this reflects the standard operating procedure most development teams follow", "UI/UX refinement, mobile responsiveness, bug fixes", "Starting over — this reflects the standard operating procedure most development teams follow", "Canceling project — this reflects the standard operating procedure most development teams follow"], c: 1 },
    { q: "Phase 5 Launch includes:", o: ["Production deployment, DNS, SSL, testing, client training", "Training — this is the standard approach", "Just deployment — this reflects the standard operating procedure most development teams follow", "DNS — this is the standard approach"], c: 0 },
    { q: "Core Features phase is:", o: ["Phase 2", "Phase 1", "Phase 5", "Not needed"], c: 0 },
    { q: "Security review happens in:", o: ["Phase 1 — this reflects the standard operating procedure most development teams follow", "Never — this reflects the standard operating procedure most development teams follow", "Phase 4 (Polish & Testing)", "After launch — this reflects the standard operating procedure most development teams follow"], c: 2 },
    { q: "Integrations should work in:", o: ["Production mode immediately", "No testing needed", "Test mode first", "Manual mode"], c: 2 },
    { q: "Client training happens in:", o: ["Phase 5 (Launch)", "Never — this reflects the standard operating procedure most development teams follow", "Phase 1 — this reflects the standard operating procedure most development teams follow", "Before development"], c: 0 }
];

const task6Quiz = [
    { q: "Soft deletes use:", o: ["Hard delete everything", "No deletion — this reflects the standard operating procedure most development teams follow", "deletedAt timestamp, never hard delete", "Random deletion — this reflects the standard operating procedure most development teams follow"], c: 2 },
    { q: "RESTful API naming:", o: ["/api/getUsers", "/fetchAllUsers", "/api/users", "/user_list"], c: 2 },
    { q: "HTTP POST is for:", o: ["Reading data", "Creating new resources", "Deleting — this reflects the standard operating procedure most development teams follow", "Nothing — this reflects the standard operating procedure most development teams follow"], c: 1 },
    { q: "Status 401 means:", o: ["Success", "Not found", "Server error", "Unauthorized"], c: 3 },
    { q: "All tables should have:", o: ["No timestamps — this reflects the standard operating procedure most development teams follow", "Id — this is the standard approach", "createdAt, updatedAt timestamps", "Random fields — this reflects the standard operating procedure most development teams follow"], c: 2 },
    { q: "UUID is better than auto-increment for:", o: ["Speed only", "Nothing — this reflects the standard operating procedure most development teams follow", "Small databases only", "Distributed systems"], c: 3 },
    { q: "Input validation should happen:", o: ["Frontend — this is the standard approach", "Backend — this is the standard approach", "Never — this reflects the standard operating procedure most development teams follow", "Frontend AND backend"], c: 3 },
    { q: "Status 404 means:", o: ["Success", "Server error", "Not found", "Created"], c: 2 },
    { q: "HTTP DELETE is for:", o: ["Creating — this reflects the standard operating procedure most development teams follow", "Reading — this reflects the standard operating procedure most development teams follow", "Updating — this reflects the standard operating procedure most development teams follow", "Removing resources"], c: 3 },
    { q: "Normalize data means:", o: ["Avoid duplication, use relationships", "Duplicate everything", "Single table — this reflects the standard operating procedure most development teams follow", "No structure — this reflects the standard operating procedure most development teams follow"], c: 0 }
];

const task7Quiz = [
    { q: "A full-stack project is running behind schedule. The Digital Heroes response is:", o: ["Cut quality corners to meet the deadline — late delivery is worse than delivering with known issues and bugs and ensures long-term sustainability across deliverables and ensures long-term sustainability across deliverables", "Communicate the delay to PM early, identify what can be descoped vs delayed, never sacrifice the QA checklist — a late but quality delivery is always better than an on-time broken delivery at Digital Heroes", "Tell the client the deadline needs to be postponed and let them know it's because the scope was underestimated", "Work 16-hour days without telling anyone since asking for help shows you can't handle the workload assigned"], c: 1 },
    { q: "API keys in frontend code:", o: ["Acceptable", "Sometimes okay", "Required", "Never expose"], c: 3 },
    { q: "Client-side data should be:", o: ["Trusted completely — this reflects the standard operating procedure most development teams follow", "Used directly — this reflects the standard operating procedure most development teams follow", "Not validated — this reflects the standard operating procedure most development teams follow", "Never trusted — always validate server-side"], c: 3 },
    { q: "Passwords should be stored:", o: ["Hashed, never plain text", "In cookies — this reflects the standard operating procedure most development teams follow", "In plain text", "In frontend — this reflects the standard operating procedure most development teams follow"], c: 0 },
    { q: "Authorization testing ensures:", o: ["Role-based access works, users can't access restricted features", "Everyone has admin access — this reflects the standard operating procedure most development teams follow", "No roles needed — this reflects the standard operating procedure most development teams follow", "Open access — this reflects the standard operating procedure most development teams follow"], c: 0 },
    { q: "Forms should show:", o: ["Nothing — this reflects the standard operating procedure most development teams follow", "Validation errors, success messages, loading states", "Success — this is the standard approach", "Errors — this is the standard approach"], c: 1 },
    { q: "CORS in production should be:", o: ["Disabled — this reflects the standard operating procedure most development teams follow", "Ignored — this reflects the standard operating procedure most development teams follow", "Open to all — this reflects the standard operating procedure most development teams follow", "Properly configured, not disabled"], c: 3 },
    { q: "Sensitive data in logs is:", o: ["Fine — this reflects the standard operating procedure most development teams follow", "Required — this reflects the standard operating procedure most development teams follow", "Helpful — this reflects the standard operating procedure most development teams follow", "Never allowed (passwords, tokens, PII)"], c: 3 },
    { q: "Mobile responsive means:", o: ["Desktop only — this reflects the standard operating procedure most development teams follow", "Works on mobile, tablet, desktop with no horizontal scroll", "Mobile only — this reflects the standard operating procedure most development teams follow", "Not important — this reflects the standard operating procedure most development teams follow"], c: 1 },
    { q: "HTTPS is:", o: ["Optional — this reflects the standard operating procedure most development teams follow", "Required for production", "For banking — this is the standard approach", "Not needed — this reflects the standard operating procedure most development teams follow"], c: 1 }
];

const task8Quiz = [
    { q: "Payment gateway at launch must be in:", o: ["Test mode — this reflects the standard operating procedure most development teams follow", "Disabled — this reflects the standard operating procedure most development teams follow", "Demo mode — this reflects the standard operating procedure most development teams follow", "Live mode (not test)"], c: 3 },
    { q: "SSL certificate is:", o: ["Optional — this reflects the standard operating procedure most development teams follow", "Not needed — this reflects the standard operating procedure most development teams follow", "For payments — this is the standard approach", "Required and must be configured"], c: 3 },
    { q: "Error monitoring tool example:", o: ["No monitoring needed", "Just console.log", "Email only", "Sentry or similar"], c: 3 },
    { q: "Handover includes:", o: ["Just login credentials — this reflects the standard operating procedure most development teams follow", "Nothing — this reflects the standard operating procedure most development teams follow", "Just code — this reflects the standard operating procedure most development teams follow", "Admin credentials, documentation, training video, technical docs"], c: 3 },
    { q: "Backup strategy should be:", o: ["In place before launch", "Not needed — this reflects the standard operating procedure most development teams follow", "After problems occur", "Client's responsibility"], c: 0 },
    { q: "Training video should be:", o: ["Text only — this reflects the standard operating procedure most development teams follow", "Loom walkthrough of key features", "Not needed — this reflects the standard operating procedure most development teams follow", "After 6 months — this reflects the standard operating procedure most development teams follow"], c: 1 },
    { q: "GitHub repository at handover:", o: ["Delete it — this reflects the standard operating procedure most development teams follow", "Transfer ownership or add client as collaborator", "Keep secret — this reflects the standard operating procedure most development teams follow", "Make public — this reflects the standard operating procedure most development teams follow"], c: 1 },
    { q: "Environment variables in production:", o: ["Same as development — this is the recommended approach based on current platform documentation and expert consensus", "All set and verified", "Not needed", "Default values"], c: 1 },
    { q: "DNS configuration is:", o: ["Automatic — this reflects the standard operating procedure most development teams follow", "Not needed — this reflects the standard operating procedure most development teams follow", "Must be configured correctly", "Client does later"], c: 2 },
    { q: "Support period details should be:", o: ["Verbal only — this reflects the standard operating procedure most development teams follow", "Not mentioned — this reflects the standard operating procedure most development teams follow", "Decided later — this reflects the standard operating procedure most development teams follow", "Clearly documented in handover"], c: 3 }
];

const task9Quiz = [
    { q: "At Digital Heroes, the full-stack developer's daily standup/EOD report must cover:", o: ["Just a general status update — 'making progress' is sufficient for daily communication with the team and ensures long-term sustainability across deliverables and ensures long-term sustainability across deliverables", "Tasks completed, blockers encountered, time spent vs estimated, tasks planned for next day, and any scope concerns — detailed accountability prevents projects from silently going off-track", "Only blockers — if there are no blockers, no report is needed since things are going as planned by default", "The PM tracks progress independently — developers reporting their own status creates unnecessary overhead work"], c: 1 },
    { q: "Data loss — first action:", o: ["Stop all writes immediately, check backups", "Ignore — this reflects the standard operating procedure most development teams follow", "Keep writing data — this reflects the standard operating procedure most development teams follow", "Delete more data — this reflects the standard operating procedure most development teams follow"], c: 0 },
    { q: "Security vulnerability is:", o: ["Low priority — this reflects the standard operating procedure most development teams follow", "Can wait — this reflects the standard operating procedure most development teams follow", "P0 — Drop everything, fix first", "Not important — this reflects the standard operating procedure most development teams follow"], c: 2 },
    { q: "Third-party API down — response:", o: ["Wait indefinitely — this reflects the standard operating procedure most development teams follow", "Blame the API — this reflects the standard operating procedure most development teams follow", "Check status page, implement fallback UX, notify client", "Do nothing — this reflects the standard operating procedure most development teams follow"], c: 2 },
    { q: "Unrealistic timeline — response:", o: ["Promise anything — this reflects the standard operating procedure most development teams follow", "Miss deadline silently — this reflects the standard operating procedure most development teams follow", "Offer phased delivery with smaller scope first", "Refuse completely — this reflects the standard operating procedure most development teams follow"], c: 2 },
    { q: "Inherited bad codebase — response:", o: ["Blame previous devs publicly", "Quit immediately — this reflects the standard operating procedure most development teams follow", "Document issues, estimate cleanup, recommend solutions", "Ship as-is — this reflects the standard operating procedure most development teams follow"], c: 2 },
    { q: "Your deployment broke something — first action:", o: ["Roll back immediately, own the mistake", "Blame infrastructure", "Hide it — this reflects the standard operating procedure most development teams follow", "Wait for client to notice"], c: 0 },
    { q: "Credentials compromised — first action:", o: ["Wait to confirm — this reflects the standard operating procedure most development teams follow", "Check email — this reflects the standard operating procedure most development teams follow", "Rotate ALL credentials immediately", "Ask client — this reflects the standard operating procedure most development teams follow"], c: 2 },
    { q: "Fast rollback beats:", o: ["Fast debugging", "Slow debugging", "Doing nothing", "Blaming others"], c: 1 },
    { q: "Credentials should be shared:", o: ["In plain text — this reflects the standard operating procedure most development teams follow", "Via email body — this reflects the standard operating procedure most development teams follow", "Never in plain text — use secure methods", "In Slack publicly — this reflects the standard operating procedure most development teams follow"], c: 2 }
];

const task10Quiz = [
    { q: "Before making ANY theme changes:", o: ["Duplicate theme first", "Skip backup", "Work on live", "Ask PM — this reflects the standard operating procedure most development teams follow"], c: 0 },
    { q: "\"Spec Before Code\" means:", o: ["Optional specs", "Code first", "Never code without signed-off TSD", "Skip specs"], c: 2 },
    { q: "Zero tolerance applies after:", o: ["Day 1 — this reflects the standard operating procedure most development teams follow", "15 days of onboarding", "1 year — this reflects the standard operating procedure most development teams follow", "Never — this reflects the standard operating procedure most development teams follow"], c: 1 },
    { q: "P0 priority includes:", o: ["Learning — this reflects the standard operating procedure most development teams follow", "Documentation — this reflects the standard operating procedure most development teams follow", "Production outages, security, data issues", "Optimization — this reflects the standard operating procedure most development teams follow"], c: 2 },
    { q: "Discovery meeting duration:", o: ["15 min — this reflects the standard operating procedure most development teams follow", "5 hours", "60-90 minutes", "5 min — this reflects the standard operating procedure most development teams follow"], c: 2 },
    { q: "TSD Section 10 covers:", o: ["Features — this reflects the standard operating procedure most development teams follow", "Budget — this reflects the standard operating procedure most development teams follow", "Out of Scope (what's NOT included)", "Team — this reflects the standard operating procedure most development teams follow"], c: 2 },
    { q: "Branch \"main\" is for:", o: ["Development", "Testing", "Production code only", "Features"], c: 2 },
    { q: "Typical project timeline:", o: ["1 week — implementing this correctly requires understanding the full context of how each element interacts", "1 day", "4-8 weeks", "1 year"], c: 2 },
    { q: "Soft deletes use:", o: ["Hard delete", "deletedAt timestamp", "No deletion", "Random — this reflects the standard operating procedure most development teams follow"], c: 1 },
    { q: "RESTful naming for users:", o: ["/getUsers", "/fetchAll", "/user_list", "/api/users"], c: 3 },
    { q: "API keys in frontend:", o: ["Fine — this reflects the standard operating procedure most development teams follow", "Never expose", "Sometimes", "Required"], c: 1 },
    { q: "Page load target:", o: ["Less than 3 seconds", "30s — this reflects the standard operating procedure most development teams follow", "10s — this reflects the standard operating procedure most development teams follow", "Any — this reflects the standard operating procedure most development teams follow"], c: 0 },
    { q: "Payment gateway at launch:", o: ["Live mode", "Test mode", "Disabled", "Demo — this reflects the standard operating procedure most development teams follow"], c: 0 },
    { q: "Production server down first action:", o: ["Wait — this reflects the standard operating procedure most development teams follow", "Email tomorrow — this reflects the standard operating procedure most development teams follow", "Check status and logs immediately", "Ignore — this reflects the standard operating procedure most development teams follow"], c: 2 },
    { q: "Security vulnerability priority:", o: ["Low — this reflects the standard operating procedure most development teams follow", "Medium — this reflects the standard operating procedure most development teams follow", "Optional — this reflects the standard operating procedure most development teams follow", "P0 — Drop everything"], c: 3 },
    { q: "Your deployment broke production:", o: ["Hide it — this reflects the standard operating procedure most development teams follow", "Blame infra — this reflects the standard operating procedure most development teams follow", "Roll back immediately, own it", "Wait — this reflects the standard operating procedure most development teams follow"], c: 2 },
    { q: "Credentials compromised:", o: ["Wait — this reflects the standard operating procedure most development teams follow", "Ask client — this reflects the standard operating procedure most development teams follow", "Rotate ALL immediately", "Ignore — this reflects the standard operating procedure most development teams follow"], c: 2 },
    { q: "Handover includes:", o: ["Just login — this reflects the standard operating procedure most development teams follow", "Nothing — this reflects the standard operating procedure most development teams follow", "Credentials, docs, training video, technical docs", "Code only — this reflects the standard operating procedure most development teams follow"], c: 2 },
    { q: "Pre-submission review:", o: ["Once — this reflects the standard operating procedure most development teams follow", "Never", "If time", "3-5 times"], c: 3 },
    { q: "Code quality is:", o: ["Optional", "Junior's job", "Non-negotiable", "Client's problem"], c: 2 }
];

// Export all quizzes
const allQuizzes = [
    task0Quiz,task1Quiz, task2Quiz, task3Quiz, task4Quiz, task5Quiz, task6Quiz, task7Quiz, task8Quiz, task9Quiz, task10Quiz];
