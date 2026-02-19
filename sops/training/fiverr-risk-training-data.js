// Fiverr Risk Manager Training Data - Digital Heroes
// 10 Tasks, 100 Quiz Questions

const trainingTasks = [
    { id: 1, title: "Risk Manager Role", description: "Your Mission", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🛡️ Concept: First Line of Defense", "🎯 Goal: Zero Missed Messages", "📊 Rule: Daily Reporting MANDATORY"] },
    { id: 2, title: "Daily Health Check", description: "Account Monitoring", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📋 Process: Per-Account Checklist", "🔔 Check: Messages, Notifications, Reviews", "⚠️ Flag: Anything due within 48 hrs"] },
    { id: 3, title: "Daily Reporting", description: "Report Structure", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "📊 Format: Per-Account Breakdown", "🚫 Rule: No vague reports", "📝 Skill: Detail every action"] },
    { id: 4, title: "Feedback Tracker", description: "Review Management", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "⭐ Track: Clients without reviews", "🔴 Rule: 30-day window expiration", "📋 Tool: Centralized Google Sheet"] },
    { id: 5, title: "Bonus Messages", description: "Review Follow-Up", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🎁 When: After order completion", "🚫 When NOT: Work in progress", "⭐ Goal: Maximize 5-star reviews"] },
    { id: 6, title: "Cancelled Orders", description: "Ticket Management", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "🎫 Rule: EVERY cancellation = ticket", "🛡️ Request: Metric removal + compensation", "📋 Process: 5-step filing"] },
    { id: 7, title: "Cancellation Strategy", description: "Defense Playbook", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "🚨 Rule: NEVER accept cancellations", "💬 Skill: Client conversation templates", "📨 Template: Support ticket"] },
    { id: 8, title: "Brief Response", description: "Lead Conversion", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🔔 Source: Fiverr Briefs/Matches", "📋 Pitch: Portfolio message", "⏰ Rule: Respond to ALL"] },
    { id: 9, title: "Delivery Risk", description: "Escalation Protocol", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "⚠️ Flag: Due within 48 hours", "🚨 Escalation: Red flags", "📞 Chain: Who to notify"] },
    { id: 10, title: "Final Assessment", description: "Certification Exam", contentFirst: true, studyGuide: ["⏱️ Time: 90 min", "📝 Exam: 10 questions, ALL modules", "🎯 Score: 10/10 required", "🎓 Reward: Risk Manager Certificate"] }
];

const task1Content = `
<h2>📚 TASK 1: RISK MANAGER ROLE — Your Mission</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(14, 165, 233, 0.15), rgba(3, 105, 161, 0.15)); border: 2px solid rgba(14, 165, 233, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #38BDF8; margin-top: 0;"> Welcome to Digital Heroes — You Are the Shield</h3>
    <p>You are not just monitoring accounts. <strong>You are protecting the revenue engine of Digital Heroes.</strong></p>
    <div class="highlight-box" style="background: rgba(30, 41, 59, 0.8); border-left: 4px solid #0EA5E9; padding: 20px; margin: 15px 0;">
        <strong style="color: #38BDF8;"> Our Journey</strong>
        <table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
            <tr style="background: rgba(14, 165, 233, 0.2);">
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Point A (Now):</strong> ₹9.2 Crores</td>
                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);"><strong>Point B (2027):</strong> ₹75 Crores</td>
            </tr>
        </table>
        <p style="margin: 0;">A single account demotion can cost us lakhs. <strong>Your vigilance = growth vs setback.</strong></p>
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(220, 38, 38, 0.1)); border: 2px solid rgba(239, 68, 68, 0.4); padding: 25px; border-radius: 12px;">
    <h3 style="color: #EF4444; margin-top: 0;"> THE RISK MANAGER'S MISSION</h3>
    <p style="font-size: 1.2em; font-weight: bold; text-align: center; margin: 20px 0;">
        "Every missed message = potential lost client.<br>
        Every unflagged delivery = potential account penalty.<br>
        <span style="color: #10B981;">Your vigilance is the shield that keeps Digital Heroes strong.</span>"
    </p>
</div>

<div class="content-section">
    <h3> Primary Objectives</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead><tr style="background: rgba(14, 165, 233, 0.3);"><th style="padding: 12px; text-align: left;">Objective</th><th style="padding: 12px; text-align: left;">Target</th><th style="padding: 12px; text-align: left;">Why</th></tr></thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Zero missed messages</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">100% reply within 24 hrs</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Response rate affects seller level</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Zero late deliveries</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Flag anything due within 48 hrs</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">On-time delivery is key metric</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">100% notification clearance</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">All checked daily</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Missed = missed opportunities</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Review maximization</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Follow up on every order</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Reviews drive gig ranking</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Performance protection</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">File tickets for every cancel</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Cancellations demote seller level</td></tr>
            <tr><td style="padding: 10px;">Brief conversion</td><td style="padding: 10px;">Reply to ALL briefs</td><td style="padding: 10px;">Briefs = free incoming leads</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3> Accounts Under Management</h3>
    <p>You manage <strong>5 Fiverr seller accounts</strong>:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead><tr style="background: rgba(139, 92, 246, 0.3);"><th style="padding: 12px; text-align: left;">Account</th><th style="padding: 12px; text-align: left;">Manager</th><th style="padding: 12px; text-align: left;">Contact</th></tr></thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"> Sarthak</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Khushi</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Discord / WhatsApp</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"> Navya</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Sampada</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Discord / WhatsApp</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"> Divyansh</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Divyansh</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Discord / WhatsApp</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"> Anurag</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Delhi Team</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Discord / WhatsApp</td></tr>
            <tr><td style="padding: 10px;"> Shreyansh Singh</td><td style="padding: 10px;">Shreyansh</td><td style="padding: 10px;">Discord / WhatsApp</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section" style="background: rgba(239, 68, 68, 0.1); border: 2px solid rgba(239, 68, 68, 0.3); padding: 25px; border-radius: 12px;">
    <h3> CRITICAL: Daily Reporting is MANDATORY</h3>
    <p>You <strong>must</strong> send a daily report — <strong>even if only 1 action was completed</strong>. If zero messages were sent, report <strong>why</strong>. Failure to report = SOP violation.</p>
</div>

<div class="content-section">
    <h3> Ready for the Quiz?</h3>
    <ul>
        <li> 10 questions about the Risk Manager Role</li>
        <li> Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;
const task2Content = `
<h2>📚 TASK 2: DAILY HEALTH CHECK — Account Monitoring</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(3, 105, 161, 0.1)); border: 2px solid rgba(14, 165, 233, 0.3); padding: 25px; border-radius: 12px;">
    <h3 style="color: #38BDF8; margin-top: 0;"> When to Perform</h3>
    <p>This check must be completed <strong>once every day</strong> for <strong>every account</strong>. Open each account on Dolphin browser and go through the entire checklist below.</p>
</div>

<div class="content-section">
    <h3> Per-Account Checklist (7 Items)</h3>
    <p>For <strong>each</strong> of the 5 accounts, complete these items:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead><tr style="background: rgba(14, 165, 233, 0.3);"><th style="padding: 12px;">#</th><th style="padding: 12px;">Check</th><th style="padding: 12px;">Action</th><th style="padding: 12px;">Priority</th></tr></thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">1</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Inbox Messages</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Reply to ALL messages from last 24 hrs. Clock icon = urgent.</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><span style="color: #EF4444;"> CRITICAL</span></td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">2</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Notifications</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Clear ALL notifications. Check for order updates, reviews, warnings.</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><span style="color: #EF4444;"> CRITICAL</span></td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">3</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Buyer Reviews</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">If buyer left review  give review back immediately.</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><span style="color: #F59E0B;"> HIGH</span></td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">4</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Delivery Timeline</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Flag deliveries due within 48 hrs. Notify account manager.</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><span style="color: #EF4444;"> CRITICAL</span></td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">5</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Briefs/Matches</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Respond to all matching briefs with portfolio pitch.</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><span style="color: #3B82F6;"> MEDIUM</span></td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">6</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Low Ratings</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Check for any 4 ratings. Screenshot + escalate to management.</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><span style="color: #EF4444;"> CRITICAL</span></td></tr>
            <tr><td style="padding: 10px;">7</td><td style="padding: 10px;"><strong>Cancelled Orders</strong></td><td style="padding: 10px;">Check for cancellations in last 24 hrs. File support ticket immediately.</td><td style="padding: 10px;"><span style="color: #EF4444;"> CRITICAL</span></td></tr>
        </tbody>
    </table>
</div>

<div class="content-section" style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10B981; padding: 20px; border-radius: 8px;">
    <h3 style="color: #10B981;"> Pro Tip: The Order Matters</h3>
    <p>Always check <strong>Messages first</strong> (response time is tracked), then <strong>Deliveries</strong> (time-sensitive), then everything else. This ensures the most critical items are handled first.</p>
</div>

<div class="content-section">
    <h3> Ready for the Quiz?</h3>
    <ul><li> 10 questions about the Daily Health Check</li><li> Score <strong>10/10</strong> to proceed</li></ul>
</div>
`;

const task3Content = `
<h2> TASK 3: DAILY REPORTING — Report Structure</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(220, 38, 38, 0.1)); border: 2px solid rgba(239, 68, 68, 0.4); padding: 25px; border-radius: 12px;">
    <h3 style="color: #EF4444; margin-top: 0;"> MANDATORY: Report Every Single Day</h3>
    <p>You do NOT wait to be asked. Even if zero actions were taken, you report WHY. "All accounts clear" is <strong>NOT acceptable</strong>. Break down each account individually.</p>
</div>

<div class="content-section">
    <h3> Report Format — Per Account Breakdown</h3>
    <p>Your daily report must cover <strong>all 5 accounts individually</strong> with these 7 items per account:</p>
    <ol>
        <li><strong>Messages:</strong> How many pending? Were they replied to?</li>
        <li><strong>Notifications:</strong> How many cleared?</li>
        <li><strong>Reviews:</strong> Any new reviews? Did you give review back?</li>
        <li><strong>Deliveries:</strong> Any due within 48 hrs? Who was notified?</li>
        <li><strong>Briefs:</strong> Any new matches? Were they responded to?</li>
        <li><strong>Low Ratings:</strong> Any 4? Was it escalated?</li>
        <li><strong>Cancellations:</strong> Any in last 24 hrs? Ticket filed?</li>
    </ol>
</div>

<div class="content-section" style="background: rgba(16, 185, 129, 0.1); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3 style="color: #10B981;"> Good Report Example</h3>
    <p><strong>Sarthak Account:</strong><br>- 2 msgs pending  replied to both <br>- 3 notifications cleared<br>- 1 review from buyer  gave review back <br>- No deliveries due in next 2 days<br>- 1 brief matched  responded with pitch <br>- No low ratings<br>- No cancelled orders</p>
</div>

<div class="content-section" style="background: rgba(239, 68, 68, 0.1); border: 2px solid rgba(239, 68, 68, 0.3); padding: 25px; border-radius: 12px;">
    <h3 style="color: #EF4444;"> Bad Report Example</h3>
    <p>"All accounts clear." — <strong>This is NOT acceptable.</strong> You must detail each account individually.</p>
</div>

<div class="content-section">
    <h3> Ready for the Quiz?</h3>
    <ul><li> 10 questions about Daily Reporting</li><li> Score <strong>10/10</strong> to proceed</li></ul>
</div>
`;

const task4Content = `
<h2> TASK 4: FEEDBACK TRACKER — Review Management</h2>

<div class="content-section">
    <h3> Centralized Google Sheet</h3>
    <p>Maintain a centralized sheet tracking <strong>all clients across all accounts</strong> who have not yet left reviews.</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead><tr style="background: rgba(139, 92, 246, 0.3);"><th style="padding: 12px;">Column</th><th style="padding: 12px;">Description</th></tr></thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Account Name</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Which Fiverr account (FIRST column)</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Client Username</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Fiverr username of the buyer</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Order Completion Date</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">When the order was completed</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Days Since Completion</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Auto-calculated</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Follow-Up Status</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Bonus message sent? Review requested?</td></tr>
            <tr><td style="padding: 10px;"><strong>Review Status</strong></td><td style="padding: 10px;">Pending / Received / Expired (30+ days)</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section" style="background: rgba(239, 68, 68, 0.1); border: 2px solid rgba(239, 68, 68, 0.3); padding: 25px; border-radius: 12px;">
    <h3 style="color: #EF4444;"> The 30-Day Rule</h3>
    <p>30 days after completion with no review = <strong>review window EXPIRED</strong>. Mark row RED. No further follow-up needed.</p>
</div>

<div class="content-section" style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid #F59E0B; padding: 20px; border-radius: 8px;">
    <h3 style="color: #FBBF24;"> Merge All Sheets</h3>
    <p>All team members must merge their sheets into <strong>ONE central sheet</strong>. We do NOT maintain 10 separate sheets.</p>
</div>

<div class="content-section">
    <h3> Ready for the Quiz?</h3>
    <ul><li> 10 questions about the Feedback Tracker</li><li> Score <strong>10/10</strong> to proceed</li></ul>
</div>
`;

const task5Content = `
<h2> TASK 5: BONUS MESSAGES — Review Follow-Up</h2>

<div class="content-section">
    <h3> When to Send Bonus Messages</h3>
    <ul>
        <li>Order has been <strong>completed and delivered</strong></li>
        <li>Client's work is <strong>no longer in progress</strong></li>
        <li>Send across <strong>all accounts</strong> — not just one</li>
    </ul>
</div>

<div class="content-section">
    <h3> When NOT to Send</h3>
    <ul>
        <li>Client's project is still <strong>in active development</strong></li>
        <li>Order is in <strong>revision phase</strong></li>
        <li>Delivery has not yet been <strong>officially accepted</strong></li>
    </ul>
</div>

<div class="content-section" style="background: rgba(16, 185, 129, 0.1); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3 style="color: #10B981;"> Review Follow-Up Protocol</h3>
    <ul>
        <li>Follow up with clients who completed orders but haven't left reviews</li>
        <li>Use a <strong>polite, non-pushy tone</strong> — remind them feedback helps</li>
        <li>If buyer left a review  <strong>immediately give review back</strong></li>
        <li>Track all follow-ups in the centralized feedback tracker</li>
    </ul>
</div>

<div class="content-section" style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid #F59E0B; padding: 20px; border-radius: 8px;">
    <h3 style="color: #FBBF24;"> Even If Zero Messages Sent — REPORT IT</h3>
    <p>If you didn't send bonus messages, report <strong>why</strong>. Example: <em>"No bonus messages because all remaining clients have work still in progress."</em></p>
</div>

<div class="content-section">
    <h3> Ready for the Quiz?</h3>
    <ul><li> 10 questions about Bonus Messages</li><li> Score <strong>10/10</strong> to proceed</li></ul>
</div>
`;
const task6Content = `
<h2>📚 TASK 6: CANCELLED ORDERS — Ticket Management</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(220, 38, 38, 0.1)); border: 2px solid rgba(239, 68, 68, 0.4); padding: 25px; border-radius: 12px;">
    <h3 style="color: #EF4444; margin-top: 0;"> RULE: EVERY Cancellation Gets a Support Ticket</h3>
    <p>No exceptions. Whether the buyer cancelled, Fiverr auto-cancelled, or the order was mutually cancelled — <strong>you file a support ticket requesting metric removal and compensation.</strong></p>
</div>

<div class="content-section">
    <h3> 5-Step Ticket Filing Process</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead><tr style="background: rgba(139, 92, 246, 0.3);"><th style="padding: 12px;">Step</th><th style="padding: 12px;">Action</th><th style="padding: 12px;">Details</th></tr></thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>1</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Screenshot the cancellation</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Capture order page + cancellation reason</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>2</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Go to Fiverr Resolution Center</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Navigate to Help  Contact Support</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>3</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">File ticket with template</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Use the standard template from SOP Section 11</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>4</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Log in feedback tracker</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Add row with ticket ID, date, status</td></tr>
            <tr><td style="padding: 10px;"><strong>5</strong></td><td style="padding: 10px;">Include in daily report</td><td style="padding: 10px;">Mention the cancellation + ticket ID in your daily report</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3> What to Request in Every Ticket</h3>
    <ul>
        <li> <strong>Metric Removal:</strong> Remove cancellation impact from completion rate, order success rate, and seller level</li>
        <li> <strong>Compensation:</strong> Fair compensation for hours worked and deliverables completed</li>
        <li> <strong>Evidence:</strong> Attach screenshots of completed work + client conversations</li>
    </ul>
</div>

<div class="content-section" style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid #F59E0B; padding: 20px; border-radius: 8px;">
    <h3 style="color: #FBBF24;"> 48-Hour Follow-Up Rule</h3>
    <p>If a ticket has no response within 48 hours, <strong>follow up immediately</strong>. Do not wait longer. Escalate to management if no response after 72 hours.</p>
</div>

<div class="content-section">
    <h3> Ready for the Quiz?</h3>
    <ul><li> 10 questions about Cancelled Order Tickets</li><li> Score <strong>10/10</strong> to proceed</li></ul>
</div>
`;

const task7Content = `
<h2> TASK 7: CANCELLATION STRATEGY — Defense Playbook</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(220, 38, 38, 0.15)); border: 3px solid rgba(239, 68, 68, 0.5); padding: 30px; border-radius: 16px;">
    <h3 style="color: #EF4444; margin-top: 0; font-size: 1.3em;"> GOLDEN RULE: NEVER Accept a Client-Initiated Cancellation</h3>
    <p style="font-size: 1.1em;">When a client requests cancellation — <strong>do NOT click "Accept"</strong>. Accepting directly damages the account's performance metrics, seller level, and search ranking.</p>
</div>

<div class="content-section">
    <h3> The 3-Step Cancellation Defense</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead><tr style="background: rgba(14, 165, 233, 0.3);"><th style="padding: 12px;">Step</th><th style="padding: 12px;">Action</th><th style="padding: 12px;">Details</th></tr></thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>1</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Politely Decline</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Respond with empathy. Explain cancellations hurt your account.</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>2</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Offer Full Refund + Work</strong></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Full refund AND they keep all completed work. Win-win.</td></tr>
            <tr><td style="padding: 10px;"><strong>3</strong></td><td style="padding: 10px;"><strong>File Support Ticket</strong></td><td style="padding: 10px;">Request metric removal + compensation from Fiverr support.</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section" style="background: rgba(14, 165, 233, 0.1); border-left: 4px solid #0EA5E9; padding: 20px; border-radius: 8px;">
    <h3 style="color: #38BDF8;"> Sample Response — Declining Cancellation</h3>
    <p><em>"Hi [Client Name], I completely understand that plans can change. However, cancellations significantly impact our account metrics on Fiverr. I'd like to offer:  Full refund +  Keep all completed work +  No cancellation on your end. This way you get your money back AND the work. Would this work for you? "</em></p>
</div>

<div class="content-section" style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid #F59E0B; padding: 20px; border-radius: 8px;">
    <h3 style="color: #FBBF24;"> If Client Insists</h3>
    <p><em>"I completely understand your preference. Accepting a cancellation would directly reduce my seller level. My offer stands: full refund + all completed work, with the order marked as delivered. If there's any concern about quality, I'd love the chance to address it."</em></p>
</div>

<div class="content-section" style="background: rgba(168, 85, 247, 0.1); border-left: 4px solid #A855F7; padding: 20px; border-radius: 8px;">
    <h3 style="color: #C084FC;"> Support Ticket Template</h3>
    <p><strong>Subject:</strong> Order Cancellation Impact Removal + Compensation Request</p>
    <p>Include: Order number, buyer username, description of work completed, request for metric removal AND compensation, hours invested.</p>
</div>

<div class="content-section" style="background: rgba(16, 185, 129, 0.1); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3 style="color: #10B981;"> Why This Strategy Works</h3>
    <p>Most clients cancel out of convenience. By offering <strong>full refund + completed work</strong>, you remove their incentive to push. They get MORE than cancellation would give. Meanwhile, <strong>your metrics stay protected</strong>.</p>
</div>

<div class="content-section">
    <h3> Ready for the Quiz?</h3>
    <ul><li> 10 questions about Cancellation Strategy</li><li> Score <strong>10/10</strong> to proceed</li></ul>
</div>
`;

const task8Content = `
<h2> TASK 8: BRIEF RESPONSE — Lead Conversion</h2>

<div class="content-section">
    <h3> What Are Briefs/Matches?</h3>
    <p>Fiverr sends you <strong>matching project briefs</strong> from buyers looking for services. These are essentially <strong>free incoming leads</strong> — potential clients actively looking for help.</p>
</div>

<div class="content-section" style="background: rgba(239, 68, 68, 0.1); border: 2px solid rgba(239, 68, 68, 0.3); padding: 25px; border-radius: 12px;">
    <h3 style="color: #EF4444;"> RULE: Respond to ALL Matching Briefs</h3>
    <p>You must respond to <strong>every single brief</strong> across <strong>all accounts</strong>. No exceptions. A brief left without response is a lost potential sale.</p>
</div>

<div class="content-section">
    <h3> Standard Brief Response Protocol</h3>
    <ol>
        <li>Check for new briefs/matches on each account</li>
        <li>Send the standard portfolio pitch to relevant briefs</li>
        <li>Attach relevant work samples/portfolio links</li>
        <li>Log in daily report: how many briefs found, how many responded</li>
    </ol>
</div>

<div class="content-section" style="background: rgba(14, 165, 233, 0.1); border-left: 4px solid #0EA5E9; padding: 20px; border-radius: 8px;">
    <h3 style="color: #38BDF8;"> Key Rules</h3>
    <ul>
        <li>Respond to briefs <strong>daily</strong> — don't let them pile up</li>
        <li>Use the <strong>standard portfolio message</strong> from the SOP</li>
        <li>Include <strong>relevant portfolio samples</strong></li>
        <li>Track conversion: how many briefs  how many orders</li>
    </ul>
</div>

<div class="content-section">
    <h3> Ready for the Quiz?</h3>
    <ul><li> 10 questions about Brief Response</li><li> Score <strong>10/10</strong> to proceed</li></ul>
</div>
`;
const task9Content = `
<h2> TASK 9: DELIVERY RISK — Escalation Protocol</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(217, 119, 6, 0.1)); border: 2px solid rgba(245, 158, 11, 0.4); padding: 25px; border-radius: 12px;">
    <h3 style="color: #FBBF24; margin-top: 0;"> The 48-Hour Window</h3>
    <p>Any order with delivery due <strong>within 48 hours</strong> is a <strong>delivery risk</strong>. These must be flagged, tracked, and escalated to the appropriate account manager immediately.</p>
</div>

<div class="content-section">
    <h3> Risk Levels</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <thead><tr style="background: rgba(14, 165, 233, 0.3);"><th style="padding: 12px;">Level</th><th style="padding: 12px;">When</th><th style="padding: 12px;">Action</th></tr></thead>
        <tbody>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><span style="color: #10B981;"> LOW</span></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Due in 3+ days</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Note in daily report</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><span style="color: #F59E0B;"> MEDIUM</span></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Due in 24-48 hrs</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Message account manager on Discord + report</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);"><span style="color: #EF4444;"> HIGH</span></td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Due in &lt;24 hrs</td><td style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">Urgent Discord + WhatsApp message to manager</td></tr>
            <tr><td style="padding: 10px;"><span style="color: #EF4444;"> CRITICAL</span></td><td style="padding: 10px;">Overdue / late</td><td style="padding: 10px;">Immediate escalation to management + request delivery extension from client</td></tr>
        </tbody>
    </table>
</div>

<div class="content-section">
    <h3> Escalation Chain</h3>
    <ul>
        <li><strong>Step 1:</strong> Message account manager on Discord</li>
        <li><strong>Step 2:</strong> If no reply in 2 hrs  WhatsApp message</li>
        <li><strong>Step 3:</strong> If no reply in 4 hrs  escalate to senior management</li>
        <li><strong>Step 4:</strong> If delivery will be LATE  request extension from client immediately</li>
    </ul>
</div>

<div class="content-section">
    <h3> Ready for the Quiz?</h3>
    <ul><li> 10 questions about Delivery Risk</li><li> Score <strong>10/10</strong> to proceed</li></ul>
</div>
`;

const task10Content = `
<h2> TASK 10: FINAL ASSESSMENT — Certification Exam</h2>

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.15)); border: 2px solid rgba(99, 102, 241, 0.4); padding: 30px; border-radius: 16px;">
    <h3 style="color: #A78BFA; margin-top: 0;"> Congratulations — You've Reached the Final Exam!</h3>
    <p>This assessment covers ALL modules you've studied. You must score <strong>10/10</strong> to earn your Fiverr Risk Manager Certificate.</p>
</div>

<div class="content-section">
    <h3> Review Checklist</h3>
    <ul>
        <li> Task 1: Risk Manager Role — mission, accounts, objectives</li>
        <li> Task 2: Daily Health Check — 7-item per-account checklist</li>
        <li> Task 3: Daily Reporting — per-account format, mandatory rules</li>
        <li> Task 4: Feedback Tracker — Google Sheet, 30-day rule</li>
        <li> Task 5: Bonus Messages — when to send, when NOT to send</li>
        <li> Task 6: Cancelled Orders — 5-step ticket filing, metric removal</li>
        <li> Task 7: Cancellation Strategy — 3-step defense, conversation templates</li>
        <li> Task 8: Brief Response — respond to ALL, portfolio pitch</li>
        <li> Task 9: Delivery Risk — 48-hour window, escalation levels</li>
    </ul>
</div>

<div class="content-section" style="background: rgba(16, 185, 129, 0.1); border: 2px solid rgba(16, 185, 129, 0.3); padding: 25px; border-radius: 12px;">
    <h3 style="color: #10B981;"> What You'll Earn</h3>
    <ul>
        <li> <strong>Fiverr Risk Manager Certificate</strong> — printable and downloadable</li>
        <li> <strong>Official certification</strong> recognized by Digital Heroes</li>
        <li> <strong>Competency validation</strong> across all risk management domains</li>
    </ul>
</div>

<div class="content-section">
    <h3> Take the Final Exam</h3>
    <ul><li> 10 comprehensive questions covering ALL modules</li><li> Score <strong>10/10</strong> to receive your certificate</li></ul>
</div>
`;
// QUIZ DATA — 10 quizzes, 10 questions each

const task1Quiz = [
    { q: "How many Fiverr accounts does the Risk Manager monitor?", o: ["3", "5", "7", "10"], c: 1 },
    { q: "What is the PRIMARY mission of the Risk Manager?", o: ["Close deals", "Protect account metrics and prevent penalties", "Design websites", "Write content"], c: 1 },
    { q: "Daily reporting is:", o: ["Optional on weekends", "Only when something happens", "MANDATORY every single day", "Weekly summary is fine"], c: 2 },
    { q: "What happens if you send no messages in a day?", o: ["No report needed", "Report WHY no messages were sent", "Skip the report", "Send next day"], c: 1 },
    { q: "Which Fiverr metric is affected by missed messages?", o: ["Completion rate", "Response rate", "Cancellation rate", "Earnings"], c: 1 },
    { q: "The company goal is to grow from ₹9.2 Cr to:", o: ["₹20 Crores", "₹50 Crores", "₹75 Crores", "₹100 Crores"], c: 2 },
    { q: "Who manages the Sarthak account?", o: ["Divyansh", "Sampada", "Khushi", "Shreyansh"], c: 2 },
    { q: "An account demotion can cost:", o: ["Nothing significant", "A few hundred rupees", "Lakhs in lost revenue", "Only reputation"], c: 2 },
    { q: "What is the response time target for messages?", o: ["48 hours", "1 week", "24 hours", "Same minute"], c: 2 },
    { q: "Failure to report daily is:", o: ["Understandable", "A direct SOP violation", "Acceptable occasionally", "Manager's fault"], c: 1 }
];

const task2Quiz = [
    { q: "How often must the daily health check be performed?", o: ["Weekly", "Every day for every account", "Twice a week", "When you remember"], c: 1 },
    { q: "What is the FIRST thing to check during the health check?", o: ["Briefs", "Reviews", "Inbox Messages", "Cancellations"], c: 2 },
    { q: "Deliveries due within how many hours must be flagged?", o: ["24 hours", "48 hours", "72 hours", "1 week"], c: 1 },
    { q: "How many items are in the per-account checklist?", o: ["3", "5", "7", "10"], c: 2 },
    { q: "If a buyer left a review, what should you do?", o: ["Ignore it", "Thank them privately", "Give review back immediately", "Wait for manager"], c: 2 },
    { q: "Low ratings (4 stars or below) should be:", o: ["Ignored", "Screenshotted and escalated", "Reported next week", "Deleted"], c: 1 },
    { q: "Cancelled orders found during check should get:", o: ["A follow-up message only", "A support ticket filed immediately", "Ignored if buyer cancelled", "Reported next month"], c: 1 },
    { q: "Why check messages FIRST during health check?", o: ["They are easiest", "Response time is tracked by Fiverr", "Manager preference", "No particular reason"], c: 1 },
    { q: "Notifications should be:", o: ["Checked weekly", "Cleared ALL daily", "Only important ones", "Ignored mostly"], c: 1 },
    { q: "Which browser is used to open accounts?", o: ["Chrome", "Firefox", "Dolphin", "Safari"], c: 2 }
];

const task3Quiz = [
    { q: "An 'All accounts clear' report is:", o: ["Acceptable", "NOT acceptable — must detail each account", "Fine on quiet days", "Preferred format"], c: 1 },
    { q: "How many accounts must be individually detailed in the report?", o: ["Only active ones", "All 5 accounts", "Just 3 main ones", "Depends on the day"], c: 1 },
    { q: "How many items per account in the report format?", o: ["3", "5", "7", "10"], c: 2 },
    { q: "If zero actions were taken, you should:", o: ["Skip the report", "Report WHY zero actions occurred", "Send 'nothing to report'", "Wait until tomorrow"], c: 1 },
    { q: "Daily reports must include which cancellation detail?", o: ["Just the account name", "Ticket ID filed", "Nothing about cancellations", "Only if asked"], c: 1 },
    { q: "When should the daily report be sent?", o: ["End of each day", "Weekly summary", "When manager asks", "Monthly"], c: 0 },
    { q: "Review status in reports should state:", o: ["Just yes/no", "Whether review was given back", "Nothing about reviews", "Only negative reviews"], c: 1 },
    { q: "Brief response reporting should include:", o: ["Number found and number responded", "Just total count", "Nothing about briefs", "Only converted ones"], c: 0 },
    { q: "Who should receive the daily report?", o: ["Each account manager separately", "Management/designated channel", "No one — just save it", "HR department"], c: 1 },
    { q: "Waiting to be asked for a report is:", o: ["Professional", "A violation — you report proactively", "Acceptable", "Manager's preference"], c: 1 }
];

const task4Quiz = [
    { q: "The feedback tracker is maintained on:", o: ["Slack", "Email", "Centralized Google Sheet", "Notepad"], c: 2 },
    { q: "What is the review window expiration period?", o: ["7 days", "14 days", "30 days", "90 days"], c: 2 },
    { q: "When a review window expires, the row should be:", o: ["Deleted", "Marked RED — no further follow-up", "Kept the same", "Moved to another sheet"], c: 1 },
    { q: "The FIRST column in the tracker should be:", o: ["Client Username", "Account Name", "Order Date", "Review Status"], c: 1 },
    { q: "How many separate feedback sheets should be maintained?", o: ["One per account", "ONE central sheet for all", "One per team member", "Multiple is fine"], c: 1 },
    { q: "Days Since Completion column should be:", o: ["Manually typed", "Auto-calculated", "Left blank", "Estimated"], c: 1 },
    { q: "Follow-Up Status tracks:", o: ["Revenue only", "Bonus message sent and review requested", "Just client name", "Nothing specific"], c: 1 },
    { q: "Review Status values include:", o: ["Good/Bad/Ugly", "Pending/Received/Expired", "Yes/No", "1-5 stars"], c: 1 },
    { q: "Merging all sheets means:", o: ["Keeping them separate is fine", "All team members use ONE central sheet", "Each person has their own", "Manager handles it"], c: 1 },
    { q: "A client who completed an order 35 days ago with no review is:", o: ["Still eligible", "Expired — mark RED", "Follow up harder", "Contact Fiverr support"], c: 1 }
];

const task5Quiz = [
    { q: "Bonus messages should be sent WHEN?", o: ["Before delivery", "After order completion only", "During active work", "Never"], c: 1 },
    { q: "Bonus messages should NOT be sent when:", o: ["Order is completed", "Work is still in progress", "Client accepted delivery", "Review window is open"], c: 1 },
    { q: "Bonus messages are sent across:", o: ["Only main account", "All accounts", "Only accounts with low ratings", "Random selection"], c: 1 },
    { q: "If zero bonus messages were sent, you should:", o: ["Skip reporting", "Report WHY none were sent", "Send anyway", "Ignore"], c: 1 },
    { q: "If a buyer left a review, what is the immediate action?", o: ["Thank them later", "Give review back immediately", "Wait for management", "Nothing"], c: 1 },
    { q: "The tone of bonus messages should be:", o: ["Demanding", "Polite and non-pushy", "Formal legal", "Casual slang"], c: 1 },
    { q: "Follow-ups should be tracked in:", o: ["Your memory", "Centralized feedback tracker", "Personal notes", "Nowhere"], c: 1 },
    { q: "Sending a bonus message during active revision is:", o: ["Good practice", "Incorrect — wait until completion", "Acceptable", "Encouraged"], c: 1 },
    { q: "The goal of bonus messages is to:", o: ["Get tips", "Maximize 5-star reviews", "Upsell services", "Fill quota"], c: 1 },
    { q: "Which of these is a valid reason for not sending bonuses?", o: ["Forgot", "All remaining clients have work in progress", "Too busy", "Not my job"], c: 1 }
];

const task6Quiz = [
    { q: "How many cancellations require a support ticket?", o: ["Only major ones", "EVERY single cancellation", "Only buyer-initiated", "Only above $100"], c: 1 },
    { q: "How many steps in the ticket filing process?", o: ["3", "5", "7", "10"], c: 1 },
    { q: "What TWO things should every ticket request?", o: ["Apology + discount", "Metric removal + compensation", "Review + refund", "Nothing specific"], c: 1 },
    { q: "Step 1 of ticket filing is:", o: ["Contact manager", "Screenshot the cancellation", "Write a complaint", "Ignore it"], c: 1 },
    { q: "Where do you file the support ticket?", o: ["Email Fiverr CEO", "Fiverr Resolution Center / Help", "Twitter DM", "Forum post"], c: 1 },
    { q: "After filing the ticket, you must also:", o: ["Forget about it", "Log it in feedback tracker + include in daily report", "Tell the buyer", "Nothing"], c: 1 },
    { q: "If a ticket has no response in 48 hours:", o: ["Wait patiently", "Follow up immediately", "File a new ticket", "Give up"], c: 1 },
    { q: "If no response after 72 hours:", o: ["Keep waiting", "Escalate to management", "Close the ticket", "Ignore"], c: 1 },
    { q: "Auto-cancelled orders by Fiverr:", o: ["Don't need tickets", "Also require a support ticket", "Are not your responsibility", "Fix themselves"], c: 1 },
    { q: "Evidence attached to tickets should include:", o: ["Nothing", "Screenshots of completed work + client conversations", "Just order number", "Verbal description"], c: 1 }
];

const task7Quiz = [
    { q: "The GOLDEN RULE for cancellations is:", o: ["Always accept quickly", "NEVER accept a client-initiated cancellation", "Accept if client insists", "Negotiate a discount"], c: 1 },
    { q: "Step 1 of the cancellation defense is:", o: ["Accept immediately", "Politely decline with empathy", "Ignore the request", "Ask manager"], c: 1 },
    { q: "What do you offer the client instead of cancellation?", o: ["A discount", "Full refund + keep all completed work", "Nothing", "A future credit"], c: 1 },
    { q: "Why does this strategy work?", o: ["Clients don't read", "It removes their financial incentive to push for cancellation", "Fiverr forces it", "It doesn't work"], c: 1 },
    { q: "If the client INSISTS on cancellation:", o: ["Accept it immediately", "Stay firm, repeat the offer, offer to address quality concerns", "Get angry", "Block them"], c: 1 },
    { q: "Before accepting ANY cancellation, you MUST:", o: ["Just accept it", "Escalate to management for approval", "Ask the buyer twice", "Wait 24 hours"], c: 1 },
    { q: "The support ticket subject should reference:", o: ["Just the order number", "Order Cancellation Impact Removal + Compensation Request", "Complaint about buyer", "Generic help request"], c: 1 },
    { q: "Accepting a cancellation directly damages:", o: ["Nothing", "Account metrics, seller level, and search ranking", "Only earnings", "Only reviews"], c: 1 },
    { q: "'I'll leave a good review instead' as a trade is:", o: ["A good deal", "NOT acceptable — never trade reviews for cancellations", "Preferred outcome", "Manager's decision"], c: 1 },
    { q: "The cancellation response time target is:", o: ["Same week", "Within 1 hour", "Next day", "When convenient"], c: 1 }
];

const task8Quiz = [
    { q: "What are Fiverr Briefs/Matches?", o: ["Client complaints", "Free incoming leads from buyers looking for services", "Internal memos", "Spam messages"], c: 1 },
    { q: "How many briefs should you respond to?", o: ["Only relevant ones", "ALL matching briefs on all accounts", "Top 3 per day", "None — they come to us"], c: 1 },
    { q: "A brief left without response is:", o: ["Normal", "A lost potential sale", "Saved for later", "Not important"], c: 1 },
    { q: "Brief responses should include:", o: ["Just a greeting", "Standard portfolio pitch + relevant samples", "Price only", "Nothing specific"], c: 1 },
    { q: "How often should briefs be checked?", o: ["Weekly", "Daily across all accounts", "Monthly", "When manager asks"], c: 1 },
    { q: "Brief conversion tracking means:", o: ["Counting messages", "How many briefs turned into actual orders", "Ignoring results", "Tracking competitors"], c: 1 },
    { q: "Daily report should mention briefs:", o: ["Never", "How many found + how many responded", "Only if converted", "Only on Mondays"], c: 1 },
    { q: "Portfolio samples attached should be:", o: ["Random", "Relevant to the brief's requirements", "Always the same", "None needed"], c: 1 },
    { q: "Briefs that pile up without response indicate:", o: ["Good workload", "Missed opportunities and SOP violation", "Normal operations", "Low demand"], c: 1 },
    { q: "The standard portfolio message comes from:", o: ["Your own creation", "The SOP standard template", "Google search", "Competitor profiles"], c: 1 }
];

const task9Quiz = [
    { q: "A delivery risk is any order due within:", o: ["24 hours", "48 hours", "72 hours", "1 week"], c: 1 },
    { q: "GREEN risk level means due in:", o: ["24 hours", "48 hours", "3+ days", "Overdue"], c: 2 },
    { q: "RED risk level action requires:", o: ["Note in report", "Urgent Discord + WhatsApp to manager", "Email next week", "Nothing"], c: 1 },
    { q: "If no reply from manager in 2 hours:", o: ["Wait longer", "Send WhatsApp message", "Give up", "Handle it yourself"], c: 1 },
    { q: "An OVERDUE delivery requires:", o: ["Nothing", "Immediate escalation + request extension from client", "Hide it", "Accept the penalty"], c: 1 },
    { q: "Escalation Step 3 is:", o: ["Send email", "Escalate to senior management", "Wait more", "Close the order"], c: 1 },
    { q: "The first escalation step is always:", o: ["WhatsApp", "Message account manager on Discord", "Email", "Phone call"], c: 1 },
    { q: "After 4 hours with no manager reply:", o: ["Continue waiting", "Escalate to senior management", "Ignore it", "Cancel the order"], c: 1 },
    { q: "Delivery risks should appear in:", o: ["Only if asked", "Every daily report", "Weekly summary", "Never"], c: 1 },
    { q: "YELLOW risk level means due in:", o: ["3+ days", "24-48 hours", "Under 12 hours", "Overdue"], c: 1 }
];

const task10Quiz = [
    { q: "The Risk Manager protects how many Fiverr accounts?", o: ["3", "5", "8", "10"], c: 1 },
    { q: "Daily reporting must be sent:", o: ["Only when busy", "Every single day without exception", "Weekly", "When asked"], c: 1 },
    { q: "The cancellation golden rule is:", o: ["Accept fast", "NEVER accept client-initiated cancellations", "Negotiate always", "Ignore requests"], c: 1 },
    { q: "Review window expires after:", o: ["7 days", "14 days", "30 days", "Never"], c: 2 },
    { q: "Support tickets for cancellations must request:", o: ["Just metric removal", "Metric removal AND compensation", "Just an apology", "Nothing specific"], c: 1 },
    { q: "The per-account daily checklist has how many items?", o: ["3", "5", "7", "10"], c: 2 },
    { q: "Briefs are essentially:", o: ["Complaints", "Free incoming leads", "Internal tasks", "Spam"], c: 1 },
    { q: "Delivery risk 48-hour flag is what color level?", o: ["Green", "Yellow", "Red", "Critical"], c: 1 },
    { q: "Before accepting any cancellation you must:", o: ["Just click accept", "Escalate to management for approval", "Ask buyer twice", "Wait a week"], c: 1 },
    { q: "A good daily report must be:", o: ["Per-account breakdown with all 7 items", "Short 'all clear' message", "Optional on quiet days", "Sent weekly"], c: 0 }
];

const allQuizzes = [task1Quiz, task2Quiz, task3Quiz, task4Quiz, task5Quiz, task6Quiz, task7Quiz, task8Quiz, task9Quiz, task10Quiz];

// Make content available globally
if (typeof task1Content !== 'undefined') window.task1Content = task1Content;
if (typeof task2Content !== 'undefined') window.task2Content = task2Content;
if (typeof task3Content !== 'undefined') window.task3Content = task3Content;
if (typeof task4Content !== 'undefined') window.task4Content = task4Content;
if (typeof task5Content !== 'undefined') window.task5Content = task5Content;
if (typeof task6Content !== 'undefined') window.task6Content = task6Content;
if (typeof task7Content !== 'undefined') window.task7Content = task7Content;
if (typeof task8Content !== 'undefined') window.task8Content = task8Content;
if (typeof task9Content !== 'undefined') window.task9Content = task9Content;
if (typeof task10Content !== 'undefined') window.task10Content = task10Content;