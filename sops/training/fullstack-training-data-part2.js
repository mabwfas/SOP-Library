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
