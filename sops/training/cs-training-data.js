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

<!-- WELCOME TO DIGITAL HEROES -->
<div class="content-section" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15)); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #60A5FA; margin-top: 0;">🚀 Welcome to Digital Heroes - You Are Part of Something Bigger</h3>
    <p>Before we dive into CS techniques, you need to understand something critical: <strong>You are not just joining a company. You are joining a mission.</strong></p>
    
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
<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1)); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 16px; padding: 30px; margin: 20px 0;">
    <h3 style="color: #34D399; margin-top: 0;">🔗 The Interconnected Chain: Where YOU Fit</h3>
    <p>At Digital Heroes, we operate as a <strong>single, interconnected chain</strong> where every link is equally critical:</p>
    
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; margin: 15px 0; font-size: 0.95em;">
        <p style="margin: 0;">
            <strong style="color: #FBBF24;">Sales</strong> → generates enquiries<br>
            ↓<br>
            <strong style="color: #60A5FA;">Development</strong> → delivers quality work<br>
            ↓<br>
            <strong style="color: #F472B6;">Client Satisfaction</strong> → creates happy customers<br>
            ↓<br>
            <strong style="color: #34D399; font-size: 1.1em;">⭐ YOU (CS)</strong> → <strong>PROTECT satisfaction & drive 5-star reviews</strong><br>
            ↓<br>
            <strong style="color: #A78BFA;">Better Reviews</strong> → boost algorithm positioning<br>
            ↓<br>
            <strong style="color: #FBBF24;">More Enquiries</strong> → the cycle continues
        </p>
    </div>
    
    <div class="highlight-box" style="background: rgba(239, 68, 68, 0.15); border-left: 4px solid #EF4444; padding: 15px; margin: 15px 0;">
        <strong style="color: #F87171;">⚠️ Your Critical Role:</strong>
        <p style="margin: 10px 0 0 0;">As CS, you are the <strong>voice of client satisfaction</strong>. Every interaction you have determines whether a client becomes a raving fan who leaves 5-star reviews and refers others, or a lost opportunity who damages our reputation. Your HEAT responses, your de-escalation skills, your proactive communication—these directly influence reviews, referrals, and our algorithm positioning.</p>
    </div>
    
    <p style="color: #34D399; font-weight: 700; text-align: center; margin: 20px 0; font-size: 1.1em;">When CS breaks, the entire chain breaks. When you excel, everyone wins.</p>
</div>

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

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 25px; margin: 20px 0;">
    <h3>📖 REAL STORY: The ₹2 Lakh Save</h3>
    <p><strong>Situation:</strong> A client running a fashion e-commerce site contacted us furious. Their checkout was broken during a festival sale weekend. They'd lost ₹50,000 in sales already and were threatening to leave and demand a refund of their entire project cost (₹2 lakhs).</p>
    
    <p><strong>What the CS rep did:</strong></p>
    <ul>
        <li>Immediately acknowledged the severity: "I understand this is critical for your business. Let me take full ownership right now."</li>
        <li>Escalated to dev within 3 minutes (P1 Critical)</li>
        <li>Kept client updated every 30 minutes with progress</li>
        <li>Issue fixed in 2 hours (Shopify app conflict)</li>
        <li>Followed up personally the next day</li>
        <li>Offered 1 week free support extension as goodwill</li>
    </ul>
    
    <p><strong>Result:</strong> Client stayed, left a 5-star review, and referred 2 new clients worth ₹3.5 lakhs combined.</p>
    
    <div class="highlight-box" style="margin-top: 15px;">
        <strong>💡 Lesson:</strong> That CS rep didn't just "handle a ticket" – they protected ₹5.5 lakhs in revenue (original project + referrals). That's the power of the right mindset.
    </div>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(245, 158, 11, 0.1)); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 12px; padding: 25px; margin: 20px 0;">
    <h3>⚠️ CAUTIONARY TALE: The ₹4 Lakh Lost Client</h3>
    <p><strong>What went wrong:</strong> A premium client (paying ₹80,000/year retainer) had a simple question about updating their product images. The CS rep:</p>
    <ul>
        <li>Responded 8 hours late</li>
        <li>Sent a generic "please see FAQ" response</li>
        <li>Didn't follow up when client didn't respond</li>
        <li>When client complained, got defensive: "That's not really a support issue"</li>
    </ul>
    
    <p><strong>Result:</strong> Client cancelled. Left a negative review. Their business partner (another potential client worth ₹1.2 lakh) saw the review and went elsewhere.</p>
    
    <div class="highlight-box" style="margin-top: 15px;">
        <strong>💀 Total damage:</strong> ₹80k (lost retainer) + ₹80k x 4 years (expected retention) + ₹1.2L (lost referral) = <strong>₹4.4 lakhs lost</strong> over a 5-minute question.
    </div>
</div>

<div class="content-section">
    <h3>🔑 The 5 Laws of CS Excellence</h3>
    <div class="highlight-box">
        <ol>
            <li><strong>Speed is Survival:</strong> First response time directly correlates with satisfaction. Under 1 hour = 2x higher retention.</li>
            <li><strong>Empathy Before Solutions:</strong> Customers want to feel heard before they want to be fixed.</li>
            <li><strong>Own It Completely:</strong> Never say "that's not my department." YOU are the company to them.</li>
            <li><strong>Under-Promise, Over-Deliver:</strong> Say it takes 24 hours, fix it in 4. Never the other way around.</li>
            <li><strong>Every Ticket is a Relationship:</strong> This isn't just a problem – it's a person who trusted us with their business.</li>
        </ol>
    </div>
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

<div class="content-section" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1)); border: 1px solid rgba(99, 102, 241, 0.3); border-radius: 12px; padding: 25px; margin: 20px 0;">
    <h3>🎭 HEAT Method in Action - Real Conversation</h3>
    
    <p><strong>❌ BAD Response (No HEAT):</strong></p>
    <div class="highlight-box" style="background: rgba(239, 68, 68, 0.2); border-color: rgba(239, 68, 68, 0.5);">
        <strong>Customer:</strong> "My website has been down for 2 hours and I'm losing sales! This is unacceptable!"<br><br>
        <strong>Bad CS Rep:</strong> "Let me check... looks like there's a server issue. It should be fixed soon. Is there anything else?"
        <p style="color: #F87171; margin-top: 10px; font-style: italic;">❌ No empathy, no acknowledgment, no ownership, vague timeline</p>
    </div>
    
    <p><strong>✅ GREAT Response (Using HEAT):</strong></p>
    <div class="highlight-box" style="background: rgba(16, 185, 129, 0.2); border-color: rgba(16, 185, 129, 0.5);">
        <strong>Customer:</strong> "My website has been down for 2 hours and I'm losing sales! This is unacceptable!"<br><br>
        <strong>Great CS Rep:</strong><br>
        <strong>[HEAR]</strong> "I can see exactly what you're describing - your checkout page is indeed unreachable."<br><br>
        <strong>[EMPATHIZE]</strong> "I completely understand how stressful this is, especially during what looks like your peak sales period. Losing even an hour of sales is incredibly frustrating."<br><br>
        <strong>[APOLOGIZE]</strong> "I sincerely apologize that this happened. This is absolutely not the experience you should have."<br><br>
        <strong>[TAKE ACTION]</strong> "Here's what I'm doing RIGHT NOW: I've already flagged this as P1 Critical and our senior developer is on it. I'll personally update you every 30 minutes until it's resolved. As soon as we fix this, I'll also investigate the root cause to make sure it never happens again."
        <p style="color: #34D399; margin-top: 10px; font-style: italic;">✅ Shows understanding, takes ownership, specific action plan, proactive follow-up</p>
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
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Calm down"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I understand this is upsetting"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Never dismiss emotions</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"As I said before..."</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Let me clarify..."</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Avoids condescension</td>
        </tr>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 25px; margin: 20px 0;">
    <h3>📖 REAL STORY: The Tone That Saved a ₹1.5L Contract</h3>
    <p><strong>Situation:</strong> A jewelry store client was frustrated because their product images weren't displaying correctly on mobile. They sent an angry email at 11 PM demanding answers.</p>
    
    <p><strong>The CS rep's response (sent at 7 AM next day):</strong></p>
    <div class="highlight-box" style="font-style: italic;">
        "Good morning [Name],<br><br>
        I saw your message as soon as I started today, and I want you to know this is my TOP priority this morning.<br><br>
        First, I completely understand your frustration - your jewelry products need to look stunning on mobile because that's where most of your customers shop. A display issue isn't just an inconvenience, it's affecting your sales.<br><br>
        I've already identified the issue: your images are using a format that some older phones don't display well. Here's what I'm doing:<br>
        1. Converting all 47 product images to a compatible format (ETA: 2 hours)<br>
        2. Testing on 5 different mobile devices before confirming<br>
        3. I'll send you screenshots of the fixed pages by 12 PM<br><br>
        I apologize this happened at all. Once fixed, I'll also add monitoring so we catch any future image issues instantly.<br><br>
        Thank you for your patience. Talk soon,<br>
        [Rep Name]"
    </div>
    
    <p><strong>Result:</strong> Client replied: "This is exactly why we work with you. Thank you for actually caring." They added 2 more stores to their contract (₹1.5L additional revenue).</p>
</div>

<div class="content-section">
    <h3>⚡ The 3-Second Rule</h3>
    <div class="highlight-box">
        <p>Before hitting send on ANY response, pause for 3 seconds and ask:</p>
        <ol>
            <li><strong>Would I feel good receiving this message?</strong></li>
            <li><strong>Does this sound human or robotic?</strong></li>
            <li><strong>Am I solving their REAL problem, not just answering their question?</strong></li>
        </ol>
        <p style="margin-top: 15px;"><em>If any answer is "no" - rewrite before sending.</em></p>
    </div>
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

<div class="content-section" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(245, 158, 11, 0.1)); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 12px; padding: 25px; margin: 20px 0;">
    <h3>🎭 REAL DE-ESCALATION CONVERSATION</h3>
    <p><em>Actual transcript from a saved client relationship:</em></p>
    
    <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 10px; margin: 15px 0;">
        <p><strong style="color: #F87171;">CUSTOMER:</strong> "This is absolutely RIDICULOUS! I've been waiting THREE WEEKS for my website changes. I'm paying you people good money and getting NOTHING. I want to speak to your manager RIGHT NOW or I'm disputing every payment I've ever made to you!"</p>
        
        <p style="color: #94A3B8; font-style: italic;">[CS Rep takes a deep breath. Does NOT react defensively.]</p>
        
        <p><strong style="color: #34D399;">CS REP [ACKNOWLEDGE]:</strong> "I hear you, and I completely understand your frustration. Three weeks is far too long to wait for changes you're paying for. You have every right to be upset."</p>
        
        <p><strong style="color: #F87171;">CUSTOMER:</strong> "Yeah, well, 'understanding' doesn't fix my problem!"</p>
        
        <p><strong style="color: #34D399;">CS REP [LISTEN + VALIDATE]:</strong> "You're absolutely right – understanding alone doesn't fix it. Can you tell me exactly which changes were requested? I want to make sure I have the full picture so I can get this resolved TODAY."</p>
        
        <p><strong style="color: #F87171;">CUSTOMER:</strong> "I asked for new product images and a homepage banner update. Simple stuff! And I've been ignored!"</p>
        
        <p><strong style="color: #34D399;">CS REP [OWN IT]:</strong> "Those ARE simple tasks, and you should not have been waiting three weeks. I sincerely apologize. I don't know what caused this breakdown, but what I DO know is that I'm going to personally make sure it's done by end of day today. Not tomorrow. Today."</p>
        
        <p><strong style="color: #F87171;">CUSTOMER:</strong> "...Really? Today?"</p>
        
        <p><strong style="color: #34D399;">CS REP [SPECIFIC ACTION]:</strong> "Yes. Here's exactly what I'm doing right now: I'm flagging this as urgent with our design team. I'm going to call them directly – not email, call – and confirm they start immediately. I'll personally send you a preview by 4 PM. And after this is done, I'm going to review what went wrong so it never happens again to any client."</p>
        
        <p><strong style="color: #F87171;">CUSTOMER:</strong> "Well... okay. I appreciate you actually taking this seriously."</p>
        
        <p><strong style="color: #34D399;">CS REP:</strong> "I take YOUR business seriously. You'll hear from me by 4 PM with updates. Thank you for giving us the chance to make this right."</p>
    </div>
    
    <div class="highlight-box" style="margin-top: 15px; background: rgba(16, 185, 129, 0.2);">
        <strong>💡 RESULT:</strong> Changes delivered by 3 PM. Client sent a thank-you email. Renewed contract next month with a 20% upgrade.
    </div>
</div>

<div class="content-section">
    <h3>🗣️ Magic Phrases for Angry Customers</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.2);">
            <th style="padding: 12px;">Situation</th>
            <th style="padding: 12px;">Magic Phrase</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Customer is venting</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I completely understand why you're upset, and I would be too."</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">We made a mistake</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"You're absolutely right to expect better. This is on us."</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Showing commitment</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Let me take ownership of this and fix it for you."</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Giving confidence</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Here's exactly what I'm going to do right now..."</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Client doubts you</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I'm not going to rest until this is resolved."</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Defusing tension</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Thank you for being so patient while I sort this out."</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>🚫 What NOT to Do (With Real Examples)</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(239, 68, 68, 0.2);">
            <th style="padding: 12px;">❌ Wrong Response</th>
            <th style="padding: 12px;">Why It's Bad</th>
            <th style="padding: 12px;">✅ Better Response</th>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Calm down please"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Dismisses their emotions</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I understand this is frustrating"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"That's not my department"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Avoids responsibility</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Let me get the right person on this immediately"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I already explained this"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Condescending</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Let me clarify that for you"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"We're very busy right now"</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Makes them feel unimportant</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"You're my priority right now"</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Well, you should have..."</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Blaming the customer</td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Going forward, we can..."</td>
        </tr>
    </table>
</div>

<div class="content-section" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 25px; margin: 20px 0;">
    <h3>📖 REAL STORY: The Legal Threat That Became a Referral</h3>
    <p><strong>Situation:</strong> A client threatened to "involve lawyers" because their e-commerce site had been showing wrong prices for 2 days, resulting in ₹40,000 of orders at incorrect (lower) prices.</p>
    
    <p><strong>What the CS Rep Did:</strong></p>
    <ol>
        <li><strong>Didn't panic:</strong> Stayed calm despite the legal threat</li>
        <li><strong>Validated:</strong> "I understand completely. This is a serious issue that affected your revenue."</li>
        <li><strong>Took ownership:</strong> "I'm personally going to ensure this is resolved properly."</li>
        <li><strong>Escalated smartly:</strong> Immediately involved the Operations Manager</li>
        <li><strong>Offered solution:</strong> Company absorbed the ₹40k loss and honored all orders at wrong prices</li>
        <li><strong>Prevented future:</strong> Implemented price change verification system</li>
    </ol>
    
    <p><strong>Result:</strong> Client dropped all legal talk, posted a LinkedIn recommendation praising "exceptional crisis handling," and referred 3 new clients over the next 6 months.</p>
    
    <div class="highlight-box" style="margin-top: 15px;">
        <strong>💡 Lesson:</strong> When customers threaten legal action, they usually want to be HEARD, not to actually sue. Professional de-escalation + real solutions = loyalty.
    </div>
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
