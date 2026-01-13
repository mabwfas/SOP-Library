// Client Success (Account Manager) Training Data - COMPLETE OVERHAUL
// Digital Heroes Certification Program
// 12 Tasks, 150+ Quiz Questions, Elite Retention Strategies

const trainingTasks = [
    {
        id: 1,
        title: "CS Mindset",
        description: "Advisor vs Waiter",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🧠 Concept: 'Order Taker' vs 'Strategic Partner'",
            "🛡️ Concept: Churn is the Enemy",
            "🚀 Concept: Net Revenue Retention (NRR)"
        ]
    },
    {
        id: 2,
        title: "The Kick-Off Call",
        description: "Setting the Stage",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "📅 Event: The First 45 Minutes",
            "🗣️ Script: Setting Expectations",
            "⛔ Trap: Over-promising"
        ]
    },
    {
        id: 3,
        title: "Onboarding Velocity",
        description: "Time to Value (TTV)",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "⚡ Metric: Days to First Value",
            "📧 Email: The 'Welcome' Sequence",
            "🚧 Roadblock: Client Delay Handling"
        ]
    },
    {
        id: 4,
        title: "Communication Rhythm",
        description: "Proactive Updates",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "📅 Routine: Friday Weekly Updates",
            "🎥 Tool: Loom Updates (10x Better than Text)",
            "📥 Habits: Inbox Zero"
        ]
    },
    {
        id: 5,
        title: "Churn Prevention",
        description: "The Danger Zone",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "🚩 Signal: The 'Ghosting' Client",
            "🚩 Signal: Leadership Change",
            "🔥 Action: The Save Plan"
        ]
    },
    {
        id: 6,
        title: "Upselling & Expansion",
        description: "Growing the Account",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "💰 Tactic: The 'Natural' Upsell",
            "💰 Tactic: Cross-Selling Services",
            "🤝 Skill: Consulting, Not Selling"
        ]
    },
    {
        id: 7,
        title: "The QBR",
        description: "Quarterly Business Review",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 60 min",
            "📊 Deck: The QBR Template",
            "🎯 Goal: Reselling the Vision",
            "🔄 Outcome: Renewal Confirmation"
        ]
    },
    {
        id: 8,
        title: "Tools of Trade",
        description: "CRM & Management",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 30 min",
            "⚙️ Tool: HubSpot / Salesforce",
            "⚙️ Tool: ClickUp for Tasks",
            "⚙️ Tool: Gong (Call Recording)"
        ]
    },
    {
        id: 9,
        title: "Crisis Management",
        description: "De-escalation",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🤬 Scenario: The Angry Email",
            "📉 Scenario: Results Dipped",
            "🧘‍♀️ Skill: The 'Vent' Phase"
        ]
    },
    {
        id: 10,
        title: "Delivering Bad News",
        description: "Honesty Wins",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 45 min",
            "🗣️ Principle: Bad News Early",
            "🏗️ Formula: Problem -> Fix -> Prevention",
            "🚫 Don't: Blame the Team"
        ]
    },
    {
        id: 11,
        title: "Referral Engine",
        description: "Viral Growth",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 30 min",
            "🗣️ Script: The 'mid-project' ask",
            "⭐ Tactic: Review Generation",
            "🎁 Tactic: Client Gifting"
        ]
    },
    {
        id: 12,
        title: "Organization & Time",
        description: "Managing 20 Accounts",
        contentFirst: true,
        studyGuide: [
            "⏱️ Time: 30 min",
            "📅 Method: Time Blocking",
            "📝 Method: The 'End of Day' List",
            "⚖️ Method: Prioritization Matrix"
        ]
    }
];

const task1Content = `
<h2>📚 TASK 1: MINDSET - The Trusted Advisor</h2>

<div class="content-section">
    <h3>🤵 Waiter vs Doctor</h3>
    <p>A Waiter asks: "What would you like?" (Reactive). <br>A Doctor says: "Here is what you need to get healthy." (Proactive). <br><strong>Be the Doctor.</strong></p>
</div>

<div class="content-section">
    <h3>🛡️ Protect the Revenue</h3>
    <p>Your salary comes from Retainers. If a client leaves, we all lose. Retention > Acquisition.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1)); border: 2px solid rgba(6, 182, 212, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Self-Audit</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #22D3EE; margin-top: 0;">Exercise: The Shift</h4>
        <p>Rewrite this email line: "Let me know if you need anything." -> Change it to a Proactive suggestion.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Mindset</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task2Content = `
<h2>📚 TASK 2: THE KICK-OFF CALL</h2>

<div class="content-section">
    <h3>📅 The First 45 Minutes</h3>
    <p>This call dictates the relationship. If you are weak here, they will walk all over you forever.</p>
    <ul>
        <li>Agenda: Introductions.</li>
        <li>Goals: Define "Success" mathematically.</li>
        <li>Housekeeping: "We don't reply on Sundays."</li>
    </ul>
</div>

<div class="content-section">
    <h3>⛔ Over-Promising</h3>
    <p>Never say "Yes" to a deadline you can't 100% hit. Better to say "No" now than "Sorry" later.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1)); border: 2px solid rgba(6, 182, 212, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Scripting</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #22D3EE; margin-top: 0;">Exercise: Boundary Setting</h4>
        <p>Client says: "I want daily calls." Write a polite but firm script explaining why we do Weekly Updates instead (Focus on work).</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Kick-Offs</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task3Content = `
<h2>📚 TASK 3: ONBOARDING VELOCITY</h2>

<div class="content-section">
    <h3>⚡ Time to Value (TTV)</h3>
    <p>The clock starts ticking when they pay. If they don't see a "Win" in 14 days, Buyer's Remorse sets in. The "Win" can be small (e.g., A strategy doc).</p>
</div>

<div class="content-section">
    <h3>🚧 Client Delays</h3>
    <p>If the client owes us assets, nagging them is your job. "Gentle pressure applied relentlessly."</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1)); border: 2px solid rgba(6, 182, 212, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: The Chase</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #22D3EE; margin-top: 0;">Exercise: Follow Up</h4>
        <p>Client hasn't sent logos in 5 days. Write the 2nd follow-up email. Make it urgent but polite.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Onboarding</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task4Content = `
<h2>📚 TASK 4: COMMUNICATION RHYTHM</h2>

<div class="content-section">
    <h3>🎥 Loom Updates</h3>
    <p>Stop writing long emails. Record a 3-minute Loom. Show your screen. Walk through the data. It builds a human connection.</p>
</div>

<div class="content-section">
    <h3>📅 The Friday Update</h3>
    <p>Every Friday, every client gets an update. Even if nothing happened. "Still waiting on X, expect it Monday." Silence = Anxiety.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1)); border: 2px solid rgba(6, 182, 212, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Update Template</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #22D3EE; margin-top: 0;">Exercise: The Script</h4>
        <p>Write bullet points for a Friday Update where the main project is delayed by 2 days.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Comms</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task5Content = `
<h2>📚 TASK 5: CHURN PREVENTION</h2>

<div class="content-section">
    <h3>🚩 The Ghost</h3>
    <p>If a client stops replying to fun stuff and only replies to business, they are checking out.</p>
</div>

<div class="content-section">
    <h3>🚩 The Champion Leaves</h3>
    <p>If your main contact (CMO) quits, you are in the "Danger Zone". The new CMO will want to bring in their own agency. You must resell value immediately.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1)); border: 2px solid rgba(6, 182, 212, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Save Plan</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #22D3EE; margin-top: 0;">Exercise: Strategy</h4>
        <p>Client says "We are thinking of pausing for a month". Give me 3 reasons why pausing hurts MOMENTUM (not just revenue).</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Churn</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task6Content = `
<h2>📚 TASK 6: UPSELLING & EXPANSION</h2>

<div class="content-section">
    <h3>🤝 Consulting, Not Selling</h3>
    <p>Don't say "Buy our SEO package." <br>Say "I noticed your competitors are ranking for X. If we wrote 4 articles, we could beat them."</p>
</div>

<div class="content-section">
    <h3>💰 The Natural Upsell</h3>
    <p>The best time to upsell is right after a WIN. "We just hit 10k followers! Now would be the perfect time to launch ads to them."</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1)); border: 2px solid rgba(6, 182, 212, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: The Pitch</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #22D3EE; margin-top: 0;">Exercise: Email Draft</h4>
        <p>Draft a 3-sentence email pitching "Email Marketing" to a client who only does "Social Media" with us.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Upselling</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task7Content = `
<h2>📚 TASK 7: THE QBR (Quarterly Business Review)</h2>

<div class="content-section">
    <h3>📊 The Deck</h3>
    <p>It's not just a report. It's a ceremony. <br>1. What we did. <br>2. The Results. <br>3. The Learnings (Good & Bad). <br>4. The Plan for Next Quarter.</p>
</div>

<div class="content-section">
    <h3>🎯 Reselling the Vision</h3>
    <p>Remind them why they hired us. "Remember, the goal was $1M ARR. We are at $200k. Here is the path to $1M."</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1)); border: 2px solid rgba(6, 182, 212, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Slide Creation</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #22D3EE; margin-top: 0;">Exercise: The 'Learnings' Slide</h4>
        <p>We missed the target by 10%. Write the bullet point explaining why, without sounding defensive.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about QBRs</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task8Content = `
<h2>📚 TASK 8: TOOLS OF TRADE</h2>

<div class="content-section">
    <h3>⚙️ CRM Hygiene</h3>
    <p>If it's not in HubSpot, it didn't happen. Notes from every call must be logged.</p>
</div>

<div class="content-section">
    <h3>⚙️ Project Tools</h3>
    <p>We use ClickUp. Clients don't use ClickUp. You are the bridge. You translate Client Emails into ClickUp Tasks.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1)); border: 2px solid rgba(6, 182, 212, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Organization</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #22D3EE; margin-top: 0;">Exercise: Meeting Notes</h4>
        <p>I will recite a chaotic meeting. You summarize it into 3 Action Items with Owners and Due Dates.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Tools</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task9Content = `
<h2>📚 TASK 9: CRISIS MANAGEMENT</h2>

<div class="content-section">
    <h3>🤬 The Angry Email</h3>
    <p>DO NOT reply immediately. Wait 30 mins. <br>The Goal: De-escalate. <br>"I completely understand why you are frustrated. Here is what I'm doing to fix it."</p>
</div>

<div class="content-section">
    <h3>🧘‍♀️ The Vent Phase</h3>
    <p>On a call, let them yell. Don't interrupt. Say "I hear you." When they run out of breath, then you solve.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1)); border: 2px solid rgba(6, 182, 212, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: De-escalation</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #22D3EE; margin-top: 0;">Exercise: Response Draft</h4>
        <p>Client emails: "This is unacceptable! I want a refund!" Draft the reply. (Hint: Get them on a call).</p>
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

const task10Content = `
<h2>📚 TASK 10: DELIVERING BAD NEWS</h2>

<div class="content-section">
    <h3>🗣️ Bad News Early</h3>
    <p>Bad news ages like milk. If we are going to miss a deadline, tell them 3 days before, not 3 minutes before.</p>
</div>

<div class="content-section">
    <h3>🏗️ The Formula</h3>
    <p>1. The Problem (Directly). <br>2. The Fix (What we are doing). <br>3. Prevention (How we stop it happening again).</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1)); border: 2px solid rgba(6, 182, 212, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Scripting</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #22D3EE; margin-top: 0;">Exercise: The Delay</h4>
        <p>We promised the website for Monday. It won't be ready until Thursday. Write the Loom script.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Bad News</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task11Content = `
<h2>📚 TASK 11: REFERRAL ENGINE</h2>

<div class="content-section">
    <h3>🗣️ The Mid-Project Ask</h3>
    <p>Don't wait until the end. When they say "Wow, this looks great!", you say: <br>"Thanks! We love working with people like you. Do you know anyone else in your circle needing this?"</p>
</div>

<div class="content-section">
    <h3>⭐ Reviews</h3>
    <p>Make it easy. Send them the direct link to the Google Review page. Draft the text for them if they are busy.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1)); border: 2px solid rgba(6, 182, 212, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: The Ask</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #22D3EE; margin-top: 0;">Exercise: Email Template</h4>
        <p>Write an email checking in on their satisfaction, and pivoting to a referral ask.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Quiz?</h3>
    <ul>
        <li>📝 10 questions about Referrals</li>
        <li>🎯 Score <strong>10/10</strong> to proceed</li>
    </ul>
</div>
`;

const task12Content = `
<h2>📚 TASK 12: ORGANIZATION & TIME</h2>

<div class="content-section">
    <h3>📅 Time Blocking</h3>
    <p>09:00 - 10:00: Email Triage. <br>10:00 - 12:00: Deep Work (Strategy). <br>13:00 - 15:00: Calls.</p>
</div>

<div class="content-section">
    <h3>⚖️ Prioritization Matrix</h3>
    <p>Urgent vs Important. Don't let "Urgent but Unimportant" emails kill your "Important but Non-Urgent" strategy time.</p>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1)); border: 2px solid rgba(6, 182, 212, 0.3); padding: 25px; border-radius: 12px;">
    <h3>✅ IMPLEMENTATION TASK: Schedule</h3>
    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <h4 style="color: #22D3EE; margin-top: 0;">Exercise: The Day Plan</h4>
        <p>You have 3 calls, 2 decks to write, and 50 unread emails. Create a schedule for the day.</p>
    </div>
</div>

<div class="content-section">
    <h3>🚀 Ready for the Final Exam?</h3>
    <ul>
        <li>📝 20 questions covering ALL modules</li>
        <li>🎯 Score <strong>20/20</strong> to receive Client Success Certification</li>
    </ul>
</div>
`;

const quizQuestions = [
    // Task 1
    {
        question: "What is the difference between a Waiter and a Doctor?",
        options: ["Doctors get paid more", "Waiters are reactive, Doctors are proactive", "Waiters serve food", "Doctors are scary"],
        correct: 1
    },
    // Task 2
    {
        question: "What should you never do in a Kick-Off?",
        options: ["Smile", "Over-promise on deadlines", "Introduce the team", "Take notes"],
        correct: 1
    },
    // Task 3
    {
        question: "What is TTV?",
        options: ["Time to Value", "Time to Victory", "Total Tax Value", "Time to Vacation"],
        correct: 0
    },
    // Task 4
    {
        question: "How often should you update clients?",
        options: ["Monthly", "Weekly (Every Friday)", "Daily", "Only when done"],
        correct: 1
    },
    // Task 5
    {
        question: "A sign of churn risk is...",
        options: ["They pay early", "The Champion leaves", "They send gifts", "They refer friends"],
        correct: 1
    },
    // Task 6
    {
        question: "Best time to upsell?",
        options: ["When they are angry", "Right after a Win", "First day", "Never"],
        correct: 1
    },
    // Task 7
    {
        question: "What is a QBR?",
        options: ["Quick Break Room", "Quarterly Business Review", "Quality Best Rate", "Quarterly Bonus Round"],
        correct: 1
    },
    // Task 9
    {
        question: "First step with an angry email?",
        options: ["Reply instantly", "Wait 30 mins, then de-escalate", "Ignore it", "Fight back"],
        correct: 1
    },
    // Task 10
    {
        question: "How to deliver bad news?",
        options: ["Hide it", "Blame others", "Early + Fix + Prevention", "Hope they don't notice"],
        correct: 2
    },
    // Task 11
    {
        question: "When to ask for referrals?",
        options: ["Mid-project after a compliment", "Never", "Day 1", "After 10 years"],
        correct: 0
    }
];
