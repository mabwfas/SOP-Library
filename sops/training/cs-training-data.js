// Customer Service Training - SALES-LEVEL DEPTH ENHANCED

const trainingTasks = [
    { id: 1, title: "CS Mindset", description: "Support = Revenue Protection", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "💰 Why CS matters to bottom line", "📖 Read cs-sop.html completely"] },
    { id: 2, title: "Communication Excellence", description: "Tone, Empathy, Clarity", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "🗣️ Professional communication techniques", "📖 Study response templates"] },
    { id: 3, title: "Ticket Management", description: "Prioritization & SLAs", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "📋 Ticket workflows", "📖 Study priority matrix"] },
    { id: 4, title: "Common Issues", description: "Technical Troubleshooting", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "🔧 Top 20 issues and solutions", "📖 Study troubleshooting guides"] },
    { id: 5, title: "Escalation Protocol", description: "When & How to Escalate", contentFirst: true, studyGuide: ["⏱️ Time: 30 min", "⬆️ Escalation decision tree", "📖 Study escalation matrix"] },
    { id: 6, title: "Difficult Customers", description: "De-escalation Techniques", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "😤 Handling angry customers", "📖 Study de-escalation scripts"] },
    { id: 7, title: "Proactive Support", description: "Preventing Issues", contentFirst: true, studyGuide: ["⏱️ Time: 30 min", "🛡️ Proactive communication", "📖 Study check-in templates"] },
    { id: 8, title: "Tools & Systems", description: "Help Desk Mastery", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🖥️ Tool proficiency", "📖 Study system guides"] },
    { id: 9, title: "Metrics & Performance", description: "CSAT, FRT, Resolution", contentFirst: true, studyGuide: ["⏱️ Time: 30 min", "📊 KPI understanding", "📖 Study performance benchmarks"] },
    { id: 10, title: "Final Certification", description: "CS Mastery Exam", contentFirst: false, studyGuide: ["⏱️ Time: 60 min", "📝 30 Questions", "🎥 Submit role-play recording"] }
];

// ============ TASK 1: CS MINDSET ============
const task1Content = `
<h2>📚 TASK 1: CS MINDSET - Support = Revenue Protection</h2>

<div class="content-section">
    <h3>💰 The Hidden Revenue Impact</h3>
    <p>Customer Service isn't a cost center. <strong>It's revenue protection.</strong></p>
    
    <div class="highlight-box">
        <strong>🔥 THE NUMBERS:</strong>
        <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
            <tr style="background: rgba(239, 68, 68, 0.15);">
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Bad support → 1 angry customer tells</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>15-20 people</strong></td>
            </tr>
            <tr style="background: rgba(16, 185, 129, 0.15);">
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Great support → 1 happy customer tells</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>4-6 people + referrals</strong></td>
            </tr>
            <tr style="background: rgba(99, 102, 241, 0.15);">
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Acquiring new customer costs</td>
                <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>5-7x more than retaining</strong></td>
            </tr>
        </table>
        <p><strong>Your job:</strong> Turn problems into loyalty. Turn complaints into referrals.</p>
    </div>
</div>

<div class="content-section">
    <h3>🎯 The CS Professional's Role</h3>
    <p>You are NOT just "answering tickets." You are:</p>
    <ul>
        <li>🛡️ <strong>Brand Guardian:</strong> Every interaction shapes perception</li>
        <li>💰 <strong>Revenue Protector:</strong> Prevent churn, save relationships</li>
        <li>📢 <strong>Voice of Customer:</strong> Report patterns to improve products</li>
        <li>🎁 <strong>Surprise Deliverer:</strong> Exceed expectations, create fans</li>
    </ul>
</div>

<div class="content-section">
    <h3>🧠 The Support Mindset Shift</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Amateur Thinking</th>
            <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Professional Thinking</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"This customer is annoying"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"This customer is frustrated - I can fix that"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Not my problem"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"How can I own this until it's solved?"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I answered the question"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Did I actually solve their problem?"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"They should read the FAQ"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Let me make this super easy for them"</td>
        </tr>
    </table>
</div>
`;

// ============ TASK 2: COMMUNICATION EXCELLENCE ============
const task2Content = `
<h2>📚 TASK 2: COMMUNICATION EXCELLENCE</h2>

<div class="content-section">
    <h3>🗣️ The HEAT Method</h3>
    <p>Use this for every customer interaction:</p>
    
    <div class="highlight-box">
        <strong>H</strong> - Hear them out completely (don't interrupt)<br>
        <strong>E</strong> - Empathize with their situation<br>
        <strong>A</strong> - Apologize/Acknowledge the issue<br>
        <strong>T</strong> - Take action and follow through
    </div>
</div>

<div class="content-section">
    <h3>✍️ Response Templates</h3>
    
    <div class="highlight-box">
        <strong>Opening (Choose one):</strong>
        <ul>
            <li>"Thank you for reaching out! I'm happy to help with this."</li>
            <li>"I completely understand your concern, and I'm here to get this sorted for you."</li>
            <li>"I appreciate you bringing this to our attention."</li>
        </ul>
    </div>
    
    <div class="highlight-box" style="margin-top: 15px;">
        <strong>Empathy Phrases:</strong>
        <ul>
            <li>"I can see why that would be frustrating."</li>
            <li>"That's definitely not the experience we want you to have."</li>
            <li>"I'd feel the same way in your situation."</li>
        </ul>
    </div>
    
    <div class="highlight-box" style="margin-top: 15px;">
        <strong>Closing (Choose one):</strong>
        <ul>
            <li>"Is there anything else I can help you with today?"</li>
            <li>"Please don't hesitate to reach out if you need anything else!"</li>
            <li>"We appreciate your business and patience!"</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>❌ Words to Avoid vs ✅ Better Alternatives</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Avoid</th>
            <th style="padding: 12px;">Use Instead</th>
            <th style="padding: 12px;">Why</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I can't"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"What I can do is..."</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Focus on solutions</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"That's our policy"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Here's why we do it this way..."</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Explains the reason</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"You should have..."</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Going forward, try..."</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">No blame</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"No problem"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Happy to help!"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">More positive</td>
        </tr>
    </table>
</div>
`;

// ============ TASK 3: TICKET MANAGEMENT ============
const task3Content = `
<h2>📚 TASK 3: TICKET MANAGEMENT</h2>

<div class="content-section">
    <h3>📋 Priority Matrix</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Priority</th>
            <th style="padding: 12px;">Definition</th>
            <th style="padding: 12px;">Response Time</th>
            <th style="padding: 12px;">Examples</th>
        </tr>
        <tr style="background: rgba(239, 68, 68, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>P1 - Critical</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Business stopped</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">15 min</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Site down, checkout broken, data breach</td>
        </tr>
        <tr style="background: rgba(245, 158, 11, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>P2 - High</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Major function broken</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">1 hour</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Payment issues, login problems</td>
        </tr>
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>P3 - Medium</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Feature broken, workaround exists</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">4 hours</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Display bugs, slow loading</td>
        </tr>
        <tr style="background: rgba(16, 185, 129, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>P4 - Low</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Questions, feature requests</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">24 hours</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">How-to questions, suggestions</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>📝 Ticket Workflow</h3>
    <ol>
        <li><strong>Acknowledge</strong> within SLA (even if you can't solve immediately)</li>
        <li><strong>Categorize</strong> correctly for tracking</li>
        <li><strong>Research</strong> the issue thoroughly</li>
        <li><strong>Respond</strong> with clear solution or next steps</li>
        <li><strong>Follow up</strong> to ensure resolution</li>
        <li><strong>Close</strong> with satisfaction check</li>
    </ol>
</div>
`;

// ============ TASK 4: COMMON ISSUES ============
const task4Content = `
<h2>📚 TASK 4: COMMON ISSUES & SOLUTIONS</h2>

<div class="content-section">
    <h3>🔧 Top 10 Issues & Quick Fixes</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Issue</th>
            <th style="padding: 12px;">First Step</th>
            <th style="padding: 12px;">Common Cause</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Page not loading</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Clear cache, try incognito</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Browser cache</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Can't login</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Password reset link</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Wrong password</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Payment failed</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Check card details, try another</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Card declined by bank</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Order not received</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Check tracking, confirm address</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Shipping delay</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Email not received</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Check spam folder</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Spam filter</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🛠️ Troubleshooting Protocol</h3>
    <div class="highlight-box">
        <strong>The 5-Step Fix Method:</strong>
        <ol>
            <li><strong>Reproduce:</strong> Can you see the same issue?</li>
            <li><strong>Isolate:</strong> Is it browser/device/account specific?</li>
            <li><strong>Research:</strong> Check knowledge base, past tickets</li>
            <li><strong>Test:</strong> Try the solution yourself first</li>
            <li><strong>Verify:</strong> Confirm with customer it's fixed</li>
        </ol>
    </div>
</div>
`;

// ============ TASK 5: ESCALATION ============
const task5Content = `
<h2>📚 TASK 5: ESCALATION PROTOCOL</h2>

<div class="content-section">
    <h3>⬆️ When to Escalate</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(239, 68, 68, 0.2);">
            <th style="padding: 12px;">Escalate Immediately</th>
            <th style="padding: 12px;">Escalate After 2 Attempts</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Security/data breach</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Technical issue you can't solve</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Legal threats</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Customer remains unsatisfied</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">VIP/Enterprise client</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Billing disputes over ₹10,000</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Site completely down</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Feature completely broken</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>📋 Escalation Template</h3>
    <div class="highlight-box">
        <strong>Include in every escalation:</strong>
        <ul>
            <li>Customer name + account ID</li>
            <li>Issue summary (1-2 sentences)</li>
            <li>What you've already tried</li>
            <li>Priority level + why</li>
            <li>Customer expectation</li>
        </ul>
    </div>
</div>
`;

// ============ TASK 6: DIFFICULT CUSTOMERS ============
const task6Content = `
<h2>📚 TASK 6: DIFFICULT CUSTOMERS</h2>

<div class="content-section">
    <h3>😤 De-escalation Techniques</h3>
    
    <div class="highlight-box">
        <strong>The CALM Method:</strong><br><br>
        <strong>C</strong> - Control your emotions (breathe, don't react)<br>
        <strong>A</strong> - Acknowledge their frustration<br>
        <strong>L</strong> - Listen without interrupting<br>
        <strong>M</strong> - Move toward a solution
    </div>
</div>

<div class="content-section">
    <h3>🗣️ Magic Phrases for Angry Customers</h3>
    <ul>
        <li>"I completely understand why you're upset, and I would be too."</li>
        <li>"You're absolutely right to expect better."</li>
        <li>"Let me take ownership of this and fix it for you."</li>
        <li>"Here's exactly what I'm going to do right now..."</li>
        <li>"I'm not going to rest until this is resolved."</li>
    </ul>
</div>

<div class="content-section">
    <h3>🚫 What NOT to Do</h3>
    <ul>
        <li>❌ Don't argue or get defensive</li>
        <li>❌ Don't take it personally</li>
        <li>❌ Don't blame other departments</li>
        <li>❌ Don't make promises you can't keep</li>
        <li>❌ Don't match their anger with your own</li>
    </ul>
</div>
`;

// ============ TASK 7: PROACTIVE SUPPORT ============
const task7Content = `
<h2>📚 TASK 7: PROACTIVE SUPPORT</h2>

<div class="content-section">
    <h3>🛡️ Prevention > Cure</h3>
    <p>The best support ticket is the one that never gets created.</p>
    
    <div class="highlight-box">
        <strong>Proactive Support Actions:</strong>
        <ul>
            <li>Send check-in emails after launch</li>
            <li>Share tutorials before questions arise</li>
            <li>Alert customers to known issues</li>
            <li>Follow up after resolution</li>
            <li>Report patterns to prevent future issues</li>
        </ul>
    </div>
</div>

<div class="content-section">
    <h3>📧 Check-in Email Template</h3>
    <div class="highlight-box">
        "Hi [Name],<br><br>
        Just wanted to check in on your [website/project]! It's been [X days] since we launched, and I wanted to make sure everything is running smoothly.<br><br>
        Quick questions:<br>
        • Any issues you've noticed?<br>
        • Questions about any features?<br>
        • Anything we can help improve?<br><br>
        We're here whenever you need us!<br><br>
        Best, [Your Name]"
    </div>
</div>
`;

// ============ TASK 8: TOOLS & SYSTEMS ============
const task8Content = `
<h2>📚 TASK 8: TOOLS & SYSTEMS</h2>

<div class="content-section">
    <h3>🖥️ Essential CS Tools</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Tool</th>
            <th style="padding: 12px;">Purpose</th>
            <th style="padding: 12px;">Key Features</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Help Desk</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Ticket management</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Assign, prioritize, track</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Knowledge Base</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Self-serve answers</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">FAQs, guides, tutorials</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Live Chat</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Real-time support</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Quick responses</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>CRM</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Customer history</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Past interactions, notes</td>
        </tr>
    </table>
</div>
`;

// ============ TASK 9: METRICS ============
const task9Content = `
<h2>📚 TASK 9: METRICS & PERFORMANCE</h2>

<div class="content-section">
    <h3>📊 Key CS Metrics</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Metric</th>
            <th style="padding: 12px;">What It Measures</th>
            <th style="padding: 12px;">Target</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>CSAT</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Customer satisfaction</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">&gt;90%</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>FRT</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">First Response Time</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">&lt;1 hour</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Resolution Time</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Time to full resolution</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">&lt;24 hours</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>FCR</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">First Contact Resolution</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">&gt;70%</td>
        </tr>
    </table>
</div>
`;

// ============ TASK 10: CERTIFICATION ============
const task10Content = `
<h2>📚 TASK 10: FINAL CERTIFICATION</h2>

<div class="content-section">
    <h3>🎓 Requirements</h3>
    <ul>
        <li>✅ Score 28/30 or higher on quiz</li>
        <li>✅ Submit role-play recording (handle angry customer scenario)</li>
        <li>✅ Pass communication quality review</li>
    </ul>
</div>

<div class="content-section">
    <h3>🏆 Skills Mastered</h3>
    <ul>
        <li>💰 CS Mindset: Support = Revenue Protection</li>
        <li>🗣️ Communication Excellence: HEAT method</li>
        <li>📋 Ticket Management: Priority matrix</li>
        <li>🔧 Troubleshooting: 5-Step Fix Method</li>
        <li>⬆️ Escalation Protocol</li>
        <li>😤 De-escalation: CALM method</li>
        <li>🛡️ Proactive Support</li>
        <li>📊 Metrics & Performance</li>
    </ul>
</div>
`;

// ============ QUIZ QUESTIONS ============
const quizQuestions = [
    { question: "One angry customer tells how many people?", options: ["1-2", "5-10", "15-20", "50+"], correct: 2 },
    { question: "HEAT stands for:", options: ["Help-Empathize-Action-Thanks", "Hear-Empathize-Apologize-Take action", "Hello-Explain-Ask-Tell", "None"], correct: 1 },
    { question: "P1 Critical response time target:", options: ["24 hours", "4 hours", "1 hour", "15 minutes"], correct: 3 },
    { question: "CSAT target should be:", options: [">50%", ">70%", ">90%", "100%"], correct: 2 },
    { question: "Acquiring a new customer costs ___ more than retaining:", options: ["2x", "5-7x", "10x", "Same"], correct: 1 },
    { question: "Best phrase for \"I can't\":", options: ["That's impossible", "It's not my job", "What I CAN do is...", "No"], correct: 2 },
    { question: "First step when customer can't login:", options: ["Ignore", "Password reset", "Delete account", "Escalate immediately"], correct: 1 },
    { question: "CALM method C stands for:", options: ["Call manager", "Control your emotions", "Check manual", "Copy response"], correct: 1 },
    { question: "When to escalate immediately:", options: ["Any complaint", "Security breach", "Simple question", "Password reset"], correct: 1 },
    { question: "FCR stands for:", options: ["First Customer Response", "First Contact Resolution", "Fast Customer Return", "Final Close Rate"], correct: 1 },
    { question: "FRT target should be:", options: ["<15 min", "<1 hour", "<24 hours", "<1 week"], correct: 1 },
    { question: "Proactive support means:", options: ["Waiting for tickets", "Preventing issues before they happen", "Ignoring problems", "Slow responses"], correct: 1 },
    { question: "Page not loading - first step:", options: ["Rebuild website", "Clear cache, try incognito", "Refund customer", "Ignore"], correct: 1 },
    { question: "\"No problem\" should be replaced with:", options: ["Whatever", "Sure", "Happy to help!", "OK"], correct: 2 },
    { question: "Escalation should include:", options: ["Just customer name", "Customer name + issue + what you tried + priority", "Nothing", "Only the complaint"], correct: 1 },
    { question: "Best way to handle angry customer:", options: ["Argue back", "Hang up", "Listen and empathize", "Transfer immediately"], correct: 2 },
    { question: "Check-in emails should be sent:", options: ["Never", "After launch", "Only when problems occur", "Every hour"], correct: 1 },
    { question: "P4 Low priority response time:", options: ["15 min", "1 hour", "24 hours", "1 week"], correct: 2 },
    { question: "Knowledge base is for:", options: ["Internal use only", "Self-serve customer answers", "Hiding information", "Nothing"], correct: 1 },
    { question: "\"That's our policy\" should become:", options: ["Deal with it", "Here's WHY we do it this way", "Not my problem", "Ask someone else"], correct: 1 },
    { question: "Resolution time target:", options: ["<1 hour", "<24 hours", "<1 week", "<1 month"], correct: 1 },
    { question: "Troubleshooting step 1:", options: ["Escalate", "Reproduce the issue", "Close ticket", "Ignore"], correct: 1 },
    { question: "VIP client issue should:", options: ["Wait in queue", "Be escalated immediately", "Be ignored", "Take lowest priority"], correct: 1 },
    { question: "After resolving issue, you should:", options: ["Close immediately", "Follow up to verify", "Delete ticket", "Forget about it"], correct: 1 },
    { question: "Customer says \"I'm going to sue\" - action:", options: ["Laugh", "Escalate immediately", "Ignore", "Argue"], correct: 1 },
    { question: "Magic phrase for angry customer:", options: ["Calm down", "It's not my fault", "Let me take ownership and fix this", "Whatever"], correct: 2 },
    { question: "Site completely down is:", options: ["P4 Low", "P3 Medium", "P2 High", "P1 Critical"], correct: 3 },
    { question: "Don't blame:", options: ["The customer", "Other departments", "The weather", "All of the above"], correct: 3 },
    { question: "Ticket workflow ends with:", options: ["Just closing", "Satisfaction check then close", "Deleting ticket", "Ignoring"], correct: 1 },
    { question: "CS professional is a:", options: ["Cost center", "Revenue protector", "Annoyance", "Unnecessary role"], correct: 1 }
];

// =============================================================================
// QUIZ QUESTIONS FOR EACH TASK
// =============================================================================

const task1Quiz = [
    { q: "What is the core mindset for this role?", o: ["Just complete tasks", "Revenue-focused excellence", "Speed only", "Minimum effort"], c: 1 },
    { q: "Digital Heroes standard is:", o: ["Basic quality", "Premium quality only", "Cheap and fast", "Average"], c: 1 },
    { q: "Client satisfaction is:", o: ["Optional", "Our primary goal", "Secondary", "Not important"], c: 1 },
    { q: "Quality vs Speed priority:", o: ["Speed always", "Quality with efficiency", "Neither", "Random"], c: 1 },
    { q: "Continuous learning is:", o: ["Optional", "Essential for growth", "Wasted time", "Not needed"], c: 1 },
    { q: "Team collaboration means:", o: ["Work alone", "Share knowledge and support", "Compete only", "Ignore others"], c: 1 },
    { q: "Taking ownership means:", o: ["Blame others", "Be responsible for outcomes", "Avoid responsibility", "Wait for instructions"], c: 1 },
    { q: "Professional communication is:", o: ["Casual", "Clear, timely, and respectful", "Optional", "Slow"], c: 1 },
    { q: "Handling mistakes correctly:", o: ["Hide them", "Acknowledge and fix quickly", "Blame system", "Ignore"], c: 1 },
    { q: "Growth at Digital Heroes:", o: ["Limited", "Based on performance and initiative", "Random", "Impossible"], c: 1 }
];

const task2Quiz = [
    { q: "Understanding client needs is:", o: ["Optional", "Foundation of good work", "Not important", "Secondary"], c: 1 },
    { q: "Asking clarifying questions is:", o: ["Annoying", "Professional and necessary", "Waste of time", "Avoid always"], c: 1 },
    { q: "Active listening involves:", o: ["Interrupting", "Full attention and understanding", "Multi-tasking", "Ignoring details"], c: 1 },
    { q: "Documentation is:", o: ["Optional", "Critical for clarity", "Waste of time", "Not needed"], c: 1 },
    { q: "Following SOPs ensures:", o: ["Boredom", "Consistency and quality", "Slow work", "Nothing"], c: 1 },
    { q: "Deadline management means:", o: ["Miss deadlines", "Deliver on time or communicate early", "Ignore time", "Rush everything"], c: 1 },
    { q: "Quality check before delivery:", o: ["Skip it", "Always verify your work", "Client will check", "Optional"], c: 1 },
    { q: "Feedback should be:", o: ["Ignored", "Used for improvement", "Argued against", "Avoided"], c: 1 },
    { q: "Problem escalation path:", o: ["Hide problems", "Inform senior when stuck", "Ignore issues", "Wait it out"], c: 1 },
    { q: "Daily updates are:", o: ["Unnecessary", "Important for transparency", "Micromanagement", "Optional"], c: 1 }
];

const task3Quiz = [
    { q: "Tool proficiency is:", o: ["Optional", "Essential for efficiency", "Not needed", "Basic only"], c: 1 },
    { q: "Best practice adherence:", o: ["Sometimes", "Always follow proven methods", "Never", "Random"], c: 1 },
    { q: "Process optimization:", o: ["Avoid change", "Continuously improve", "Resist", "Ignore"], c: 1 },
    { q: "Cross-functional knowledge:", o: ["Not needed", "Adds value to work", "Confusing", "Avoid"], c: 1 },
    { q: "Attention to detail:", o: ["Overrated", "Differentiates premium work", "Slow", "Skip details"], c: 1 },
    { q: "Standard templates:", o: ["Unnecessary", "Save time and ensure consistency", "Boring", "Avoid"], c: 1 },
    { q: "Automation opportunities:", o: ["Threats", "Increase efficiency", "Avoid", "Not possible"], c: 1 },
    { q: "Knowledge sharing:", o: ["Competitive disadvantage", "Strengthens the team", "Avoid", "Optional"], c: 1 },
    { q: "Error prevention:", o: ["Not possible", "Better than error correction", "Not important", "Skip"], c: 1 },
    { q: "Work organization:", o: ["Random", "Systematic approach works best", "Chaos is good", "Avoid planning"], c: 1 }
];

const task4Quiz = [
    { q: "Communication clarity:", o: ["Optional", "Prevents misunderstandings", "Slow", "Not needed"], c: 1 },
    { q: "Response time matters:", o: ["Not really", "Shows professionalism", "Slow is fine", "Ignore"], c: 1 },
    { q: "Written communication:", o: ["Casual", "Professional and clear", "Any style", "Avoid"], c: 1 },
    { q: "Meeting preparation:", o: ["Not needed", "Shows respect and efficiency", "Waste of time", "Optional"], c: 1 },
    { q: "Follow-up actions:", o: ["Forget them", "Track and complete", "Optional", "Ignore"], c: 1 },
    { q: "Conflict resolution:", o: ["Avoid", "Address professionally", "Escalate everything", "Ignore"], c: 1 },
    { q: "Giving updates:", o: ["When asked", "Proactively share progress", "Never", "Only problems"], c: 1 },
    { q: "Asking for help:", o: ["Sign of weakness", "Smart when needed", "Never", "Avoid always"], c: 1 },
    { q: "Handling criticism:", o: ["Get defensive", "Accept and improve", "Ignore", "Argue back"], c: 1 },
    { q: "Positive attitude:", o: ["Fake", "Improves productivity", "Not important", "Optional"], c: 1 }
];

const task5Quiz = [
    { q: "Priority management:", o: ["Random order", "Focus on high impact first", "Easy first", "Avoid prioritizing"], c: 1 },
    { q: "Time blocking:", o: ["Unnecessary", "Increases focus", "Too rigid", "Avoid"], c: 1 },
    { q: "Multi-tasking:", o: ["Efficient", "Reduces quality", "Best approach", "Always do"], c: 1 },
    { q: "Deep work sessions:", o: ["Not productive", "Allow complex problem solving", "Waste time", "Avoid"], c: 1 },
    { q: "Distraction management:", o: ["Impossible", "Essential for productivity", "Not needed", "Ignore"], c: 1 },
    { q: "Break scheduling:", o: ["Lazy", "Improves sustained performance", "Avoid", "Never break"], c: 1 },
    { q: "Energy management:", o: ["Not relevant", "Match tasks to energy levels", "Ignore", "Push through"], c: 1 },
    { q: "Task batching:", o: ["Inefficient", "Reduces context switching", "Avoid", "Random is better"], c: 1 },
    { q: "Deadline buffer:", o: ["Unnecessary", "Accounts for unexpected issues", "Lazy", "Skip"], c: 1 },
    { q: "Progress tracking:", o: ["Micromanagement", "Keeps work on track", "Avoid", "Optional"], c: 1 }
];

const task6Quiz = [
    { q: "Quality standards:", o: ["Negotiable", "Must be maintained", "Optional", "Client decides"], c: 1 },
    { q: "Review process:", o: ["Skip it", "Catches errors before delivery", "Waste of time", "Optional"], c: 1 },
    { q: "Peer feedback:", o: ["Threatening", "Valuable for improvement", "Avoid", "Ignore"], c: 1 },
    { q: "Revision handling:", o: ["Complain", "Professional and timely", "Argue", "Delay"], c: 1 },
    { q: "Client expectations:", o: ["Ignore", "Set and exceed appropriately", "Lower them", "Avoid discussing"], c: 1 },
    { q: "Scope clarity:", o: ["Not important", "Prevents scope creep", "Optional", "Ignore"], c: 1 },
    { q: "Deliverable standards:", o: ["Variable", "Consistent premium quality", "Random", "Basic"], c: 1 },
    { q: "Testing before delivery:", o: ["Skip", "Always verify", "Optional", "Client tests"], c: 1 },
    { q: "Documentation of work:", o: ["Not needed", "Enables handoff and clarity", "Waste of time", "Skip"], c: 1 },
    { q: "Continuous improvement:", o: ["Not possible", "Part of professional growth", "Unnecessary", "Avoid"], c: 1 }
];

const task7Quiz = [
    { q: "Team support:", o: ["Competition", "Collaborative success", "Avoid helping", "Only when asked"], c: 1 },
    { q: "Knowledge transfer:", o: ["Keep secrets", "Share to strengthen team", "Avoid", "Optional"], c: 1 },
    { q: "Cross-training:", o: ["Waste of time", "Creates backup capabilities", "Unnecessary", "Avoid"], c: 1 },
    { q: "Positive team culture:", o: ["Not important", "Improves productivity", "Fake", "Optional"], c: 1 },
    { q: "Constructive feedback:", o: ["Avoid", "Helps improvement", "Offensive", "Skip"], c: 1 },
    { q: "Recognition of others:", o: ["Unnecessary", "Motivates team", "Fake", "Avoid"], c: 1 },
    { q: "Conflict with colleagues:", o: ["Escalate immediately", "Address professionally", "Ignore always", "Complain"], c: 1 },
    { q: "Team meetings:", o: ["Waste of time", "Align and coordinate work", "Skip when possible", "Unnecessary"], c: 1 },
    { q: "Shared responsibilities:", o: ["Avoid", "Distribute appropriately", "Do everything alone", "Ignore"], c: 1 },
    { q: "Celebrating wins:", o: ["Unnecessary", "Builds morale", "Waste of time", "Skip"], c: 1 }
];

const task8Quiz = [
    { q: "Difficult situations require:", o: ["Panic", "Calm professional response", "Avoid", "Ignore"], c: 1 },
    { q: "Client complaints:", o: ["Argue back", "Listen and resolve", "Ignore", "Blame others"], c: 1 },
    { q: "Mistake acknowledgment:", o: ["Hide", "Own and fix quickly", "Blame system", "Deny"], c: 1 },
    { q: "Pressure handling:", o: ["Break down", "Stay focused and prioritize", "Complain", "Give up"], c: 1 },
    { q: "Unexpected changes:", o: ["Refuse", "Adapt professionally", "Complain loudly", "Quit"], c: 1 },
    { q: "Tight deadlines:", o: ["Miss them", "Communicate and prioritize", "Ignore quality", "Panic"], c: 1 },
    { q: "Unclear requirements:", o: ["Guess", "Ask for clarification", "Ignore", "Complain"], c: 1 },
    { q: "Resource constraints:", o: ["Give up", "Find creative solutions", "Complain", "Do nothing"], c: 1 },
    { q: "Feedback rejection:", o: ["Get upset", "Ask for specifics and improve", "Argue", "Ignore"], c: 1 },
    { q: "Burnout prevention:", o: ["Not important", "Essential for sustained performance", "Ignore", "Push through"], c: 1 }
];

const task9Quiz = [
    { q: "Process adherence:", o: ["Optional", "Ensures quality and consistency", "Slows work", "Ignore"], c: 1 },
    { q: "Checklist usage:", o: ["Unnecessary", "Prevents missed steps", "Waste of time", "Skip"], c: 1 },
    { q: "Standard operating procedures:", o: ["Ignore", "Follow for consistency", "Outdated", "Optional"], c: 1 },
    { q: "Quality gates:", o: ["Skip", "Ensure standards are met", "Slow", "Unnecessary"], c: 1 },
    { q: "Approval workflows:", o: ["Avoid", "Ensure proper sign-off", "Bureaucracy", "Skip"], c: 1 },
    { q: "Version control:", o: ["Not needed", "Tracks changes safely", "Complex", "Avoid"], c: 1 },
    { q: "Backup practices:", o: ["Optional", "Essential protection", "Waste of storage", "Skip"], c: 1 },
    { q: "Security practices:", o: ["Paranoid", "Protect client and company data", "Unnecessary", "Optional"], c: 1 },
    { q: "Compliance requirements:", o: ["Ignore", "Must be followed", "Optional", "Outdated"], c: 1 },
    { q: "Audit preparation:", o: ["Panic", "Maintain records proactively", "Fake it", "Ignore"], c: 1 }
];

const task10Quiz = [
    { q: "Certification validates:", o: ["Nothing", "Competency in role", "Waste of time", "Luck"], c: 1 },
    { q: "Continuous learning:", o: ["Ends at certification", "Ongoing requirement", "Optional", "Not needed"], c: 1 },
    { q: "Video walkthrough:", o: ["Skip it", "Demonstrates practical knowledge", "Optional", "Unnecessary"], c: 1 },
    { q: "Career growth requires:", o: ["Luck only", "Skill development and initiative", "Politics", "Time only"], c: 1 },
    { q: "Professional development:", o: ["Company responsibility", "Personal responsibility", "Not important", "Optional"], c: 1 },
    { q: "Mentoring others:", o: ["Threat", "Strengthens your knowledge", "Avoid", "Not possible"], c: 1 },
    { q: "Industry updates:", o: ["Ignore", "Stay current for relevance", "Not important", "Optional"], c: 1 },
    { q: "Skill gaps:", o: ["Hide them", "Identify and address", "Ignore", "Not possible"], c: 1 },
    { q: "Performance reviews:", o: ["Avoid", "Opportunity for growth feedback", "Threatening", "Skip"], c: 1 },
    { q: "Long-term goals:", o: ["Not needed", "Guide development efforts", "Unrealistic", "Avoid"], c: 1 }
];

const allQuizzes = [task1Quiz, task2Quiz, task3Quiz, task4Quiz, task5Quiz, task6Quiz, task7Quiz, task8Quiz, task9Quiz, task10Quiz];
