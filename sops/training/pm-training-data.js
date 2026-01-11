// Project Manager Training Data - COMPLETE OVERHAUL
// Digital Heroes PM Certification Program
// 10 Tasks, 120 Quiz Questions, Comprehensive Content

const trainingTasks = [
    {
        id: 1,
        title: "PM Mindset & Principles",
        description: "Non-negotiable ownership principles",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 30-45 minutes",
            "📖 Read PM SOP: Principles section",
            "🔍 YouTube: 'project manager mindset'",
            "🤖 ChatGPT: 'What makes a great project manager?'"
        ]
    },
    {
        id: 2,
        title: "Company & Process",
        description: "Digital Heroes structure & tools",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 30 minutes",
            "📖 Read full PM SOP document",
            "📖 Study Team Lead Responsibilities",
            "🔍 Watch Digital Marketing Heroes videos"
        ]
    },
    {
        id: 3,
        title: "14-Day Timeline",
        description: "Project lifecycle mastery",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 40 minutes",
            "📖 Read: 14-Day Shopify Build Timeline",
            "🚨 CRITICAL: Early Homepage Preview requirement",
            "🤖 ChatGPT: 'Key phases of client project lifecycle'"
        ]
    },
    {
        id: 4,
        title: "Client Onboarding",
        description: "First 24 hours protocol",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 35 minutes",
            "📖 Read: Client Onboarding section",
            "📖 Study: Onboarding Questionnaire requirements",
            "🔍 YouTube: 'client onboarding process'"
        ]
    },
    {
        id: 5,
        title: "Daily Operations",
        description: "Updates & communication",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 40 minutes",
            "📖 Read: Communication Protocol section",
            "📖 Study: Daily Update Structure",
            "🔍 YouTube: 'daily standup meetings'"
        ]
    },
    {
        id: 6,
        title: "PM Scenarios",
        description: "Real scripts for real situations",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 45 minutes",
            "📖 Study all 6 scenario scripts word-for-word",
            "🤖 Role-play: Handle angry client about delay",
            "📝 Memorize key response templates"
        ]
    },
    {
        id: 7,
        title: "Revisions & Scope",
        description: "Scope management mastery",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 35 minutes",
            "📖 Read: Revision Policy section",
            "📖 Study: Scope Change Flowchart",
            "🤖 ChatGPT: 'How to handle scope creep'"
        ]
    },
    {
        id: 8,
        title: "Escalation Protocol",
        description: "When and how to escalate",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 40 minutes",
            "📖 Read: Problem Escalation Protocol",
            "📖 Study: Escalation Matrix levels",
            "🔍 YouTube: 'handling difficult clients'"
        ]
    },
    {
        id: 9,
        title: "Handover & QA",
        description: "Delivery checklist & meetings",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 40 minutes",
            "📖 Read: Project Handover & Training",
            "📖 Study: Meeting Agenda Templates",
            "📖 Review: Delivery Checklist"
        ]
    },
    {
        id: 10,
        title: "Final Certification",
        description: "Comprehensive exam (20 questions)",
        contentFirst: true,
        studyGuide: [
            "⏱️ Estimated Time: 60 minutes",
            "📖 Review entire PM SOP",
            "📖 Memorize 8 Non-Negotiable Principles",
            "📖 Know all 6 scenario scripts",
            "🎥 Prepare for 30-minute video submission"
        ]
    }
];

// ===============================================
// TASK 1: PM MINDSET & PRINCIPLES
// ===============================================

const task1Content = `
<div class="content-section">
    <img src="images/pm_8_principles.png" alt="8 Non-Negotiable PM Principles" style="width: 100%; border-radius: 12px; margin-bottom: 24px;">
    
    <h2>📖 PART 1: THE FOUNDATION</h2>
    
    <div class="highlight-box">
        <strong>🎯 Core Philosophy</strong>
        <p>"A Project Manager is the bridge between client dreams and developer reality. You own the outcome — not just the process."</p>
        <p>"The PM who communicates proactively never firefights. The PM who documents everything never forgets. The PM who follows process never fails."</p>
    </div>
    
    <h3>📖 The Tale of Two Projects</h3>
    <p><strong>Project A (No Process):</strong> Client messaged requirements on WhatsApp. PM said "okay, we'll start." No questionnaire, no kickoff call. Day 5: Developer asks "what's the brand color?" PM messages client. No response for 2 days. Day 10: Client sees progress and says "This isn't what I wanted." Day 21: Project finally delivered. <span style="color: #EF4444;">3-star review. "Communication was poor."</span></p>
    
    <p><strong>Project B (Our Process):</strong> Client completed onboarding questionnaire within 24 hours. Kickoff call scheduled. All assets received Day 1. Daily progress updates sent. Day 7: Client approves design direction. Day 14: Delivered on time. <span style="color: #10B981;">5-star review. "Best agency I've worked with. Communication was exceptional."</span></p>
    
    <div class="warning-box">
        <strong>🎯 The Lesson</strong>
        <p>Both projects had the same client budget, same team, same timeline. The ONLY difference was the process. As PM, YOUR process determines whether a project succeeds or fails.</p>
    </div>
</div>

<div class="content-section">
    <h2>🚨 THE 8 NON-NEGOTIABLE PM PRINCIPLES</h2>
    
    <h3>PRINCIPLE 1: Client NEVER Waits for Update</h3>
    <p>You update them BEFORE they ask. If a client has to message "Any update?" — you've already failed.</p>
    
    <h3>PRINCIPLE 2: Daily Updates are MANDATORY</h3>
    <p>Send updates in <strong>BOTH</strong> places:</p>
    <ul>
        <li>📩 <strong>Inbox/Messages</strong> — Direct message to client</li>
        <li>📋 <strong>Order Update Chat</strong> — In the order page comments</li>
    </ul>
    <p>Even if NO progress was made, send an update: "Working on X today, will share preview tomorrow."</p>
    
    <h3>PRINCIPLE 3: Problems Communicated IMMEDIATELY</h3>
    <p>Bad news doesn't get better with time. If there's a delay, tell client <strong>within 2 hours</strong> of knowing. NEVER surprise them on delivery day.</p>
    
    <h3>PRINCIPLE 4: Every Request is DOCUMENTED</h3>
    <p>Verbal agreements mean nothing. Everything in writing. "As discussed, you've approved X. Confirming in writing."</p>
    
    <h3>PRINCIPLE 5: Scope is SACRED</h3>
    <p>What's in the proposal is what's delivered. <strong>NEW requests = NEW quote.</strong> No exceptions. No "just this one thing."</p>
    
    <h3>PRINCIPLE 6: Early Cancellation for Toxic Clients</h3>
    <p>Even after payment, we can cancel orders for problem clients. Better to lose a project than your sanity. We don't work with clients who give us PTSD.</p>
    
    <h3>PRINCIPLE 7: Unresponsive Clients = Keep Working</h3>
    <p>If client stops responding, <strong>DO NOT pause the project.</strong> Complete to YOUR best expectations, send daily updates. We deliver on time, not when the client finally responds.</p>
    
    <h3>PRINCIPLE 8: 1+1+C Meeting Format</h3>
    <ul>
        <li>👨‍💼 <strong>1 Project Manager</strong> — Leads call</li>
        <li>👨‍💻 <strong>1 Developer</strong> — Technical answers</li>
        <li>🧑‍💼 <strong>Client</strong> — Decision maker present</li>
    </ul>
</div>

<div class="content-section">
    <h2>📊 PROJECT MANAGEMENT BEST PRACTICES</h2>
    <img src="images/pm_priority_matrix.png" alt="Task Priority Order P0-P3" style="width: 100%; border-radius: 12px; margin-bottom: 24px;">
    
    <h3>🎯 Task Priority Order</h3>
    <ol>
        <li><strong style="color: #EF4444;">P0 - CRITICAL:</strong> Client escalations, deadline deliveries, blockers</li>
        <li><strong style="color: #F59E0B;">P1 - HIGH:</strong> Client messages (respond within 1 hour), status updates</li>
        <li><strong style="color: #FCD34D;">P2 - MEDIUM:</strong> Team check-ins, planning & scheduling</li>
        <li><strong style="color: #10B981;">P3 - LOW:</strong> Documentation, admin tasks</li>
    </ol>
    
    <h3>Key Best Practices</h3>
    <ul>
        <li><strong>90% Rule:</strong> Projects feel nearly done at 90%. The last 10% takes 50% of the time.</li>
        <li><strong>Buffer Principle:</strong> Always add 20-30% buffer. If you think 5 days → Quote 7 days.</li>
        <li><strong>"What Could Go Wrong" Check:</strong> Before starting, list 3 things that could go wrong. Plan for them.</li>
        <li><strong>Single Point of Contact:</strong> Every project has ONE client decision maker.</li>
        <li><strong>Scope Lock:</strong> After sign-off, scope changes = new quote.</li>
    </ul>
</div>
`;

// ===============================================
// TASK 2: COMPANY & PROCESS
// ===============================================

const task2Content = `
<div class="content-section">
    <h2>🏢 Digital Heroes Overview</h2>
    
    <div class="highlight-box">
        <strong>Who We Are</strong>
        <ul>
            <li>Premium Shopify development agency founded in 2017</li>
            <li>2,000+ stores built with 4.9★ Fiverr rating</li>
            <li>Primary market: US-based ecommerce entrepreneurs</li>
            <li>YouTube channel: 2.5M+ subscribers (Digital Marketing Heroes)</li>
        </ul>
    </div>
    
    <h3>📊 Our Metrics</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: rgba(20, 184, 166, 0.2);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">⏱️ Delivery</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>7-14 Days</strong></td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">📊 On-Time Rate</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>95%</strong></td>
        </tr>
        <tr style="background: rgba(20, 184, 166, 0.2);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">⭐ Satisfaction</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>4.9 Stars</strong></td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h2>👥 Team Structure</h2>
    
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: rgba(139, 92, 246, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Role</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Responsibilities</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Sales Executive</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Closes Fiverr deals, qualifies leads, hands off to PM</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Project Manager</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Owns project from handoff to delivery</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Shopify Developer</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Builds the store, implements features</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Designer</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Creates visual assets, UI/UX</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Client Success</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Post-delivery support, upsells, reviews</td>
        </tr>
    </table>
    
    <h3>📋 Response Time Requirements</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: rgba(245, 158, 11, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Message Type</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Response Time</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Urgent (blocking work)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong style="color: #EF4444;">Within 30 minutes</strong></td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Standard question</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Within 4 hours</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Revision request</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Acknowledge 2 hours, complete 24-48 hours</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">After hours (past 8 PM)</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Next morning by 10 AM</td>
        </tr>
    </table>
</div>
`;

// ===============================================
// TASK 3: 14-DAY TIMELINE
// ===============================================

const task3Content = `
<div class="content-section">
    <h2>📅 The 14-Day Project Timeline</h2>
    <img src="images/pm_14day_timeline.png" alt="14-Day Shopify Project Timeline" style="width: 100%; border-radius: 12px; margin-bottom: 24px;">
    
    <div class="warning-box">
        <strong>🚨 CRITICAL: Early Homepage Preview (Days 1-2)</strong>
        <p>The first homepage preview <strong>MUST</strong> be sent to the client within 1-2 days. This is <strong>NON-NEGOTIABLE</strong>.</p>
        <p>Why? Get direction early, avoid wasted development, protect timeline, build trust.</p>
    </div>
    
    <h3>📋 Day 1-2 Preview Must Include:</h3>
    <ul>
        <li>✅ Theme installed with brand colors/fonts</li>
        <li>✅ Header with logo and basic navigation</li>
        <li>✅ Hero section with placeholder or real content</li>
        <li>✅ 1-2 homepage sections to show design direction</li>
    </ul>
    <p><em>Send Loom video + preview link → Ask: "Does this direction match your vision?"</em></p>
</div>

<div class="content-section">
    <h2>📊 Timeline Breakdown</h2>
    
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: rgba(20, 184, 166, 0.3);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Days</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Phase</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Deliverables</th>
        </tr>
        <tr style="background: rgba(239, 68, 68, 0.2);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>1-2</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">🚨 Foundation + PREVIEW</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Theme, brand colors, header, hero → SEND PREVIEW</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>3-5</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Homepage & Core</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Full homepage, About page, Contact page</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>6-8</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Products & Collections</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Products uploaded, collections created</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>9-12</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Optimization & QA</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Speed, mobile testing, SEO basics</td>
        </tr>
        <tr style="background: rgba(16, 185, 129, 0.2);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>13-14</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">🚀 Delivery</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Full QA, revisions, test order, handover</td>
        </tr>
    </table>
    
    <h3>📍 Milestone Check-ins</h3>
    <ul>
        <li><strong>25% (Day 2-3):</strong> Is design direction approved?</li>
        <li><strong>50% (Day 7):</strong> Does homepage represent their brand?</li>
        <li><strong>75% (Day 10):</strong> Ready for QA?</li>
        <li><strong>100% (Day 14):</strong> Ready to launch?</li>
    </ul>
</div>
`;

// ===============================================
// TASK 4: CLIENT ONBOARDING
// ===============================================

const task4Content = `
<div class="content-section">
    <h2>⏰ The 24-Hour Rule</h2>
    <p>The first 24 hours set the tone for the entire project. A smooth start = smooth project. A chaotic start = problem project.</p>
    
    <div class="highlight-box">
        <strong>📋 Onboarding Checklist</strong>
        <ul>
            <li><strong>Within 1 Hour:</strong> Send Welcome Message, introduce yourself, share questionnaire</li>
            <li><strong>Within 4 Hours:</strong> Request Shopify Collaborator Code</li>
            <li><strong>Within 24 Hours:</strong> Schedule Kickoff Call (15-30 min)</li>
            <li><strong>Before Work Starts:</strong> Confirm ALL assets received</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h2>📝 Welcome Message Template</h2>
    <div style="background: rgba(15, 23, 42, 0.8); padding: 20px; border-radius: 8px; border-left: 4px solid #10B981; font-family: monospace; font-size: 0.9em;">
        <p>Hi [Client Name]! 🎉</p>
        <p>Welcome to Digital Heroes! I'm [Your Name], your dedicated Project Manager.</p>
        <p><strong>Here's what happens next:</strong></p>
        <p>1️⃣ Please complete this onboarding questionnaire (5 min): [Link]</p>
        <p>2️⃣ Grant us Shopify access: Settings → Users → Add Staff</p>
        <p>3️⃣ Share your brand assets via [Google Drive/Dropbox link]</p>
        <p><strong>Your Timeline:</strong></p>
        <p>📅 Expected Delivery: [Date - 14 days from now]</p>
        <p>📊 Daily Progress Updates: Every evening by 6 PM</p>
        <p>🔄 Revision Rounds: 2 included</p>
    </div>
    
    <h3>📋 Must-Have Questionnaire Questions</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: rgba(139, 92, 246, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Category</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Questions</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Brand Identity</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Name, tagline, logo files, brand colors (hex codes)</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Reference Stores</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">3 stores you love (and why), 1 store you hate (and why)</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Products</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Number of products, images ready?, descriptions ready?</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Functionality</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Apps needed? Payment methods? Shipping zones?</td>
        </tr>
    </table>
</div>
`;

// ===============================================
// TASK 5: DAILY OPERATIONS
// ===============================================

const task5Content = `
<div class="content-section">
    <h2>📱 The Communication Golden Rule</h2>
    
    <div class="warning-box">
        <strong>⚠️ Client should NEVER have to ask "Any update?"</strong>
        <p>If they're asking, you've already failed at communication.</p>
    </div>
    
    <h3>📝 Daily Update Template</h3>
    <div style="background: rgba(15, 23, 42, 0.8); padding: 20px; border-radius: 8px; border-left: 4px solid #10B981; font-family: monospace; font-size: 0.9em;">
        <p>Hi [Client Name]! 👋</p>
        <p><strong>Today's Progress:</strong></p>
        <p>✅ [What was completed]</p>
        <p>✅ [Second item completed]</p>
        <p><strong>Tomorrow's Plan:</strong></p>
        <p>🔄 [What will be done next]</p>
        <p><strong>Preview:</strong> [Loom video link or screenshot]</p>
        <p><strong>Need From You:</strong> [Any pending items, or "Nothing needed right now!"]</p>
        <p>Timeline Status: ✅ On Track for [Delivery Date]</p>
    </div>
</div>

<div class="content-section">
    <h2>📞 Live Revision Calls (Google Meet)</h2>
    <p>Instead of endless back-and-forth messages, schedule a <strong>1-2 hour Google Meet call</strong> where client guides developer through corrections in real-time.</p>
    
    <h3>✅ Fix LIVE vs 📝 Fix LATER</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: rgba(16, 185, 129, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">✅ Fix LIVE</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">📝 Fix LATER</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Text changes, Color adjustments, Image swaps</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">New sections/layouts, Complex functionality</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Spacing tweaks, Font size changes</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">App integrations, Custom code</td>
        </tr>
    </table>
    
    <div class="highlight-box">
        <strong>💡 Key Insight</strong>
        <p>What takes 3 days of messages can be done in <strong>1 hour</strong> on a live call.</p>
    </div>
</div>
`;

// ===============================================
// TASK 6: PM SCENARIOS
// ===============================================

const task6Content = `
<div class="content-section">
    <h2>💡 Real PM Scenarios & Scripts</h2>
    <p>These are REAL scenarios. Use these EXACT scripts.</p>
    
    <h3>📍 SCENARIO 1: Client Asks for FREE Extra Work</h3>
    <p><strong>CLIENT:</strong> "Can you also add a blog page and integrate Mailchimp? Should be quick."</p>
    <p><strong style="color: #EF4444;">❌ WRONG:</strong> "Sure, no problem!" (NEVER say this!)</p>
    <div style="background: rgba(16, 185, 129, 0.1); padding: 15px; border-radius: 8px; border-left: 4px solid #10B981; margin: 15px 0;">
        <strong style="color: #10B981;">✅ CORRECT:</strong>
        <p>"Absolutely! Blog + Mailchimp sounds great for your business.</p>
        <p>Just to clarify - our current scope covers [list original scope]. Blog + Mailchimp would be additional work.</p>
        <p>Options:<br>1️⃣ Add to current project: +$XXX (delivery extends by 2 days)<br>2️⃣ As a separate project after launch: $XXX</p>
        <p>Which works better for you?"</p>
    </div>
    
    <h3>📍 SCENARIO 2: Client Completely Unresponsive (3+ Days)</h3>
    <p><strong>Day 3:</strong> "Hi [Name], just checking in! Haven't heard from you since [date]. No rush - I wanted to make sure everything's okay. Let me know!"</p>
    <p><strong>Day 5:</strong> "Hi [Name], following up again. Is there a better time/way to reach you? I'm here whenever you're ready."</p>
    <p><strong>Day 7 (Final):</strong> "Hi [Name], I haven't been able to reach you for 7 days. Projects paused for 7+ days may need re-scheduling. Please reply by [date] so we can resume."</p>
    
    <h3>📍 SCENARIO 3: Client Hates the Design</h3>
    <p><strong>CLIENT:</strong> "This is not what I wanted at all. Start over."</p>
    <div style="background: rgba(16, 185, 129, 0.1); padding: 15px; border-radius: 8px; border-left: 4px solid #10B981; margin: 15px 0;">
        <strong style="color: #10B981;">✅ CORRECT:</strong>
        <p>"I completely understand - getting the design right is my top priority. Let me make sure I understand exactly what you're looking for.</p>
        <p>Can you help me with:<br>1️⃣ What specific elements don't match your vision?<br>2️⃣ Can you share 2-3 examples of designs you love?<br>3️⃣ What should the overall 'feel' be?</p>
        <p>Once I understand this, I'll create a revised concept that nails your vision."</p>
    </div>
    <p><strong>NEVER:</strong> Get defensive. <strong>ALWAYS:</strong> Ask clarifying questions.</p>
</div>
`;

// ===============================================
// TASK 7: REVISIONS & SCOPE
// ===============================================

const task7Content = `
<div class="content-section">
    <h2>📋 Revision Policy & Scope Management</h2>
    <img src="images/pm_scope_flowchart.png" alt="Scope Change Decision Flow" style="width: 100%; border-radius: 12px; margin-bottom: 24px;">
    
    <h3>📋 Standard Revision Policy</h3>
    <ul>
        <li><strong>2 revision rounds included</strong> per milestone</li>
        <li>Revisions must be submitted as <strong>consolidated list</strong> (not one-by-one)</li>
        <li>Additional revision rounds = Extra cost</li>
    </ul>
</div>

<div class="content-section">
    <h2>✅ What IS vs ❌ What IS NOT a Revision</h2>
    
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); background: rgba(16, 185, 129, 0.2);">✅ Revision (Included)</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); background: rgba(239, 68, 68, 0.2);">❌ Scope Change (Extra Cost)</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Change button color</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Add completely new page</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Adjust font size</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Add custom functionality not in scope</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Reorder homepage sections</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Complete redesign ("changed mind")</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Update text content</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Add 50 more products than quoted</td>
        </tr>
    </table>
    
    <h3>🔄 Scope Change Flowchart</h3>
    <ol>
        <li><strong>Is it in original scope?</strong> YES → DO IT (free). NO → Continue...</li>
        <li><strong>How big?</strong> Minor (&lt;2 hrs) → Goodwill. Medium (2-8 hrs) → Quote add-on. Major (&gt;8 hrs) → New project proposal</li>
        <li><strong>Get written approval BEFORE starting work</strong></li>
        <li><strong>Document in project record</strong></li>
    </ol>
</div>
`;

// ===============================================
// TASK 8: ESCALATION PROTOCOL
// ===============================================

const task8Content = `
<div class="content-section">
    <h2>🚨 Escalation Protocol</h2>
    <img src="images/pm_escalation_pyramid.png" alt="Escalation Levels Pyramid" style="width: 100%; border-radius: 12px; margin-bottom: 24px;">
    
    <h3>📊 Escalation Levels</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: rgba(16, 185, 129, 0.2);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Level 1 - PM (You)</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Minor delays (1-2 days), revision requests, small scope questions</td>
        </tr>
        <tr style="background: rgba(245, 158, 11, 0.2);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Level 2 - GM</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Major delays (3+ days), unhappy client signals, scope disputes</td>
        </tr>
        <tr style="background: rgba(239, 68, 68, 0.2);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Level 3 - Founder</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Refund requests, legal threats, reputation-damaging situations</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h2>🚨 When to Escalate to GM IMMEDIATELY</h2>
    <ul>
        <li>❌ Client threatens negative review</li>
        <li>💰 Client requests refund</li>
        <li>⏰ Project delayed more than 5 days</li>
        <li>😡 Client is abusive or unreasonable</li>
        <li>🔧 Technical issue you can't resolve</li>
        <li>💵 Scope dispute over significant amount</li>
    </ul>
    
    <h3>📝 Escalation Message Template</h3>
    <div style="background: rgba(239, 68, 68, 0.1); padding: 15px; border-radius: 8px; border-left: 4px solid #EF4444;">
        <p>🚨 <strong>ESCALATION: [Severity Level]</strong></p>
        <p><strong>Client:</strong> [Client Name]</p>
        <p><strong>Project:</strong> [Project Name]</p>
        <p><strong>Issue:</strong> [Brief description]</p>
        <p><strong>What I've Tried:</strong> [Steps already taken]</p>
        <p><strong>Current Risk:</strong> [What could go wrong]</p>
        <p><strong>My Recommendation:</strong> [Your suggested solution]</p>
        <p><strong>Need Decision By:</strong> [Deadline for response]</p>
    </div>
</div>
`;

// ===============================================
// TASK 9: HANDOVER & QA
// ===============================================

const task9Content = `
<div class="content-section">
    <h2>✅ Delivery Checklist (Before Handover)</h2>
    
    <h3>✅ Design Complete</h3>
    <ul>
        <li>☐ Homepage all sections done</li>
        <li>☐ All pages styled consistently</li>
        <li>☐ Mobile looks perfect</li>
        <li>☐ Brand colors applied</li>
    </ul>
    
    <h3>✅ Functionality Working</h3>
    <ul>
        <li>☐ All navigation links work</li>
        <li>☐ Add to cart works</li>
        <li>☐ Checkout completes</li>
        <li>☐ Forms submit correctly</li>
    </ul>
    
    <h3>✅ Content Complete</h3>
    <ul>
        <li>☐ All products uploaded</li>
        <li>☐ Collections created</li>
        <li>☐ Policy pages added</li>
        <li>☐ No placeholder text</li>
    </ul>
    
    <h3>✅ Performance</h3>
    <ul>
        <li>☐ Mobile PageSpeed 85+</li>
        <li>☐ Images optimized</li>
        <li>☐ No console errors</li>
        <li>☐ Test order completed</li>
    </ul>
</div>

<div class="content-section">
    <h2>📅 Meeting Agendas</h2>
    
    <h3>🎯 Kickoff Call (30-45 min)</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: rgba(20, 184, 166, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Time</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Topic</th>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">0-5 min</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Introductions & Thanks</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">5-15 min</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Requirements Review</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">15-25 min</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Timeline Discussion</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">25-35 min</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Design References</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">35-45 min</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Next Steps & Access</td></tr>
    </table>
    
    <h3>🎓 Handover Meeting (30 min)</h3>
    <p>Final Review → Training → Access Handover → Support Info → Review Request</p>
</div>
`;

// ===============================================
// TASK 10: FINAL CERTIFICATION
// ===============================================

const task10Content = `
<div class="content-section">
    <h2>🎓 Final Certification Requirements</h2>
    
    <div class="highlight-box">
        <strong>📋 Pre-Certification Checklist</strong>
        <ul>
            <li>✅ Complete Tasks 1-9 with 10/10 on all quizzes</li>
            <li>✅ Review entire PM SOP</li>
            <li>📖 Memorize 8 Non-Negotiable Principles</li>
            <li>📖 Know all 6 scenario scripts</li>
            <li>📖 Understand escalation levels</li>
        </ul>
    </div>
    
    <h3>🎥 Video Submission Requirement</h3>
    <p>After passing 20/20 exam, record <strong>30-minute video</strong> covering:</p>
    <ol>
        <li><strong>Introduction (2 min):</strong> Your name, why PM at Digital Heroes, what you learned</li>
        <li><strong>SOP Walkthrough (10 min):</strong> 8 Principles, 14-Day Timeline, daily routine</li>
        <li><strong>Scenario Role-Play (15 min):</strong> Handle 5 real scenarios out loud</li>
        <li><strong>Closing (3 min):</strong> Your commitment, questions</li>
    </ol>
</div>

<div class="content-section">
    <h2>🏆 Certification Complete When</h2>
    <ul>
        <li>✅ All 10 tasks done</li>
        <li>✅ All quizzes passed with 10/10</li>
        <li>✅ Final exam 20/20</li>
        <li>✅ 30-minute video submitted</li>
        <li>✅ Video approved by management</li>
    </ul>
    
    <div class="highlight-box">
        <strong>🎯 Your Daily Mantra</strong>
        <p style="font-style: italic; font-size: 1.1em;">"Today, I am the calm in the storm. I bring clarity, organization, and confidence to every project."</p>
    </div>
    
    <h3>📈 Post-Certification Pathway</h3>
    <ul>
        <li><strong>Week 1-2:</strong> Shadow existing PM, handle portions with review</li>
        <li><strong>Week 3-4:</strong> Own 1-2 projects with daily check-ins</li>
        <li><strong>Month 2:</strong> Manage 2-3 projects, weekly check-ins</li>
        <li><strong>Month 3+:</strong> Full PM — 3-5 projects, independent decisions</li>
    </ul>
</div>
`;

// Export content for each task
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

// Quiz questions will be in a separate file due to size
// See pm-training-quiz.js for all 100 questions
