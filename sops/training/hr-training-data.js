// HR Training Data - SALES-LEVEL DEPTH
// Digital Heroes Certification Program

const trainingTasks = [
    { id: 1, title: "HR Mindset", description: "People = Revenue", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🧠 Concept: Hiring cost vs value", "📊 Data: Bad hire = 3x salary cost"] },
    { id: 2, title: "Tech-Savvy Hiring", description: "Developer Hiring Guide", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📞 Scripts: Phone Screen", "🎤 Scripts: Interview Questions"] },
    { id: 3, title: "Cultural Fit", description: "Beyond Skills", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🎯 Framework: STAR Method", "🚩 Red Flags: Attitude Problems"] },
    { id: 4, title: "Onboarding Excellence", description: "First 90 Days", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📋 Checklist: Day 1", "🎯 Plan: 30-60-90"] },
    { id: 5, title: "Performance Management", description: "1:1s & Reviews", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "📊 Template: Performance Review", "💬 Script: Difficult Conversations"] },
    { id: 6, title: "Compensation", description: "Salary & Benefits", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "💰 Structure: Pay Bands", "📈 Process: Salary Reviews"] },
    { id: 7, title: "Legal Compliance", description: "Contracts & Policies", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📜 Doc: Employment Contract", "⚖️ Laws: Leave, Termination"] },
    { id: 8, title: "Employee Relations", description: "Conflict Resolution", contentFirst: true, studyGuide: ["⏱️ Time: 45 min", "🤝 Process: Mediation", "📝 Doc: Written Warnings"] },
    { id: 9, title: "Exit Management", description: "Offboarding Protocol", contentFirst: true, studyGuide: ["⏱️ Time: 30 min", "📋 Checklist: Exit Interview", "🔐 Process: Access Revocation"] },
    { id: 10, title: "Final Certification", description: "HR Mastery Exam", contentFirst: true, studyGuide: ["⏱️ Time: 60 min", "📝 20 Questions", "🎥 Video Submission"] }
];

const task1Content = `
<h2>📚 TASK 1: HR MINDSET - People ARE Revenue</h2>

<div class="content-section">
    <h3>💰 The $100,000 Mistake</h3>
    <p>A bad hire doesn't just fail at their job. They:</p>
    <ul>
        <li>💸 Cost 3x their salary in recruitment, training, and severance</li>
        <li>⏰ Waste 6+ months of team productivity</li>
        <li>😤 Demotivate other team members</li>
        <li>🔄 Create a hiring cycle that repeats</li>
    </ul>
    <div class="highlight-box">
        <strong>Real Story:</strong>
        <p>We once hired a "rockstar developer" who interviewed perfectly. 3 months in, we discovered he was outsourcing his work to someone else. Total cost: $120,000 (salary, projects delayed, re-hiring, client trust damaged).</p>
        <p><strong>Lesson:</strong> Verification > Belief. Test ACTIONS, not just words.</p>
    </div>
</div>

<div class="content-section">
    <h3>🎯 The HR Mission</h3>
    <p>Your job is NOT to fill seats. Your job is to:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(239, 68, 68, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>❌ Wrong Mindset</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I need to hire someone for this role"</td>
        </tr>
        <tr style="background: rgba(16, 185, 129, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>✅ Right Mindset</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I need to find someone who will multiply team output"</td>
        </tr>
    </table>
</div>

<div class="content-section">
    <h3>📊 The Economics of Hiring</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: rgba(99, 102, 241, 0.15);">
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Metric</strong></td>
            <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Cost</strong></td>
        </tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Job Posting + Screening</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹5,000-10,000</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Interview Time (HR + Team)</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹15,000-25,000</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Training (2-4 weeks)</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">₹30,000-50,000</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Bad Hire Replacement</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #EF4444; font-weight: bold;">₹1,00,000+</td></tr>
    </table>
    <div class="warning-box">
        <strong>Takeaway:</strong> Invest time in hiring RIGHT the first time. 10 minutes of extra phone screening can save months of pain.
    </div>
</div>
`;

const task2Content = `
<h2>📚 TASK 2: TECH-SAVVY HIRING - The Developer Filter</h2>

<div class="content-section">
    <h3>📞 Phone Screen Script (10 min)</h3>
    <div class="highlight-box">
        <strong>Opening:</strong>
        <p>"Hi [Name], this is [Your Name] from Digital Heroes. I saw your application for the Web Developer role. I have a few quick questions - will take 5-10 minutes. Is this a good time?"</p>
    </div>
    
    <h4>Question 1: Laptop Ownership</h4>
    <p><strong>"Do you have your own laptop?"</strong></p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Yes, I have a laptop"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;">✅ Continue</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"No, I'll use office computer"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #EF4444;">❌ REJECT (shows dependency)</td></tr>
    </table>
    
    <h4>Question 2: Computer Usage</h4>
    <p><strong>"How many hours per day do you use a computer/laptop - not phone, computer?"</strong></p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"4+ hours daily"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;">✅ Continue</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Mostly use phone"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #EF4444;">❌ REJECT</td></tr>
    </table>
    
    <h4>Question 3: Problem-Solving</h4>
    <p><strong>"If your laptop has a problem - slow, hanging, virus - what do you do?"</strong></p>
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Google it, try to fix myself"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #10B981;">✅ Tech-Savvy</td></tr>
        <tr><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Take to repair shop"</td><td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #EF4444;">❌ Not tech-minded</td></tr>
    </table>
</div>
`;

// Additional tasks would follow same pattern...
const task3Content = `<h2>📚 TASK 3: CULTURAL FIT ASSESSMENT</h2>
<div class="content-section"><h3>🎯 STAR Method</h3><p><strong>S</strong>ituation - <strong>T</strong>ask - <strong>A</strong>ction - <strong>R</strong>esult</p></div>`;

const task4Content = `<h2>📚 TASK 4: ONBOARDING EXCELLENCE</h2>
<div class="content-section"><h3>📋 Day 1 Checklist</h3><ul><li>System access setup</li><li>Team introductions</li><li>First task assignment</li></ul></div>`;

const task5Content = `<h2>📚 TASK 5: PERFORMANCE MANAGEMENT</h2>
<div class="content-section"><h3>📊 1:1 Meeting Template</h3><ul><li>What went well?</li><li>What challenges?</li><li>What support needed?</li></ul></div>`;

const task6Content = `<h2>📚 TASK 6: COMPENSATION</h2>
<div class="content-section"><h3>💰 Pay Band Structure</h3><p>Transparent salary ranges by role and experience level.</p></div>`;

const task7Content = `<h2>📚 TASK 7: LEGAL COMPLIANCE</h2>
<div class="content-section"><h3>📜 Required Documents</h3><ul><li>Offer Letter</li><li>Employment Contract</li><li>NDA</li><li>Policy Acknowledgments</li></ul></div>`;

const task8Content = `<h2>📚 TASK 8: EMPLOYEE RELATIONS</h2>
<div class="content-section"><h3>🤝 Conflict Resolution Steps</h3><ol><li>Listen to both sides</li><li>Document facts</li><li>Propose solutions</li><li>Follow up</li></ol></div>`;

const task9Content = `<h2>📚 TASK 9: EXIT MANAGEMENT</h2>
<div class="content-section"><h3>📋 Exit Checklist</h3><ul><li>Knowledge transfer</li><li>Asset return</li><li>Access revocation</li><li>Exit interview</li><li>Final settlement</li></ul></div>`;

const task10Content = `<h2>📚 TASK 10: FINAL CERTIFICATION</h2>
<div class="content-section"><h3>🎓 Exam Requirements</h3><ul><li>Pass 20/20 quiz questions</li><li>Submit 30-min video walkthrough</li></ul></div>`;

const quizQuestions = [
    { question: "A bad hire typically costs the company:", options: ["Half their monthly salary", "Same as their annual salary", "3x their salary or more in total impact", "Just the recruitment agency fee"], correct: 2 },
    { question: "HR's primary mission is to:", options: ["Fill open positions as quickly as possible", "Find people who will multiply team output", "Maintain employee records and policies", "Organize company events and activities"], correct: 1 },
    { question: "The recommended phone screen duration is:", options: ["5 seconds to 1 minute maximum", "Approximately 10 minutes total", "At least 45 minutes per candidate", "Phone screens are unnecessary"], correct: 1 },
    { question: "STAR interview method stands for:", options: ["Skills Training And Review process", "Situation Task Action Result format", "Standard Testing And Rating system", "Staff Training Assessment Report"], correct: 1 },
    { question: "On Day 1, new hires must receive:", options: ["Only company swag and welcome kit", "System access and a meaningful first task", "A full week off to settle in", "Just their workstation assignment"], correct: 1 },
    { question: "1:1 meetings should focus on asking about:", options: ["Only the employee's personal life topics", "Wins, challenges, and support needed", "When they plan to take vacation", "Gossip about other team members"], correct: 1 },
    { question: "The primary purpose of exit interviews is to:", options: ["Make the departing employee feel bad", "Learn insights to improve retention", "Argue about their decision to leave", "Complete legal paperwork only"], correct: 1 },
    { question: "NDA in employment context stands for:", options: ["No Daily Activity logging policy", "Non-Disclosure Agreement document", "New Data Access permission level", "National Development Association"], correct: 1 }
];

// =============================================================================
// QUIZ QUESTIONS FOR EACH TASK - CHALLENGING WITH VARIED POSITIONS
// =============================================================================

const task1Quiz = [
    { q: "According to the training, a bad hire costs approximately:", o: ["Just their monthly salary amount", "Double their annual compensation", "3x salary plus 6+ months productivity loss", "Only the recruitment fees paid"], c: 2 },
    { q: "The story of the 'rockstar developer' reveals what lesson?", o: ["Trust impressive resumes completely", "Test ACTIONS, not just interview words", "Never hire experienced developers", "Phone interviews are always sufficient"], c: 1 },
    { q: "The WRONG mindset for HR is thinking:", o: ["I need to find someone who multiplies output", "I need to hire someone for this role", "Quality matters more than speed", "Cultural fit is essential"], c: 1 },
    { q: "Extra phone screening time (10 minutes) can save:", o: ["Just a few hours of interview time", "Months of pain from bad hire", "Nothing significant really", "Only the posting cost"], c: 1 },
    { q: "Total cost of a bad hire decision includes:", o: ["Only direct salary payments", "Recruitment + training + lost productivity + replacement", "Just the severance package", "Only the interview time invested"], c: 1 },
    { q: "The training states that verification should:", o: ["Be replaced with belief in candidates", "Come before trusting candidate claims", "Only apply to senior positions", "Be done after the probation period"], c: 1 },
    { q: "What demotivates existing team members?", o: ["Hiring exceptionally talented people", "Working alongside a bad hire", "Competitive salary increases", "Challenging project assignments"], c: 1 },
    { q: "The real cost of the 'rockstar developer' story was:", o: ["Just one month's salary", "Only the wasted interview time", "$120,000 including delayed projects and client trust damage", "A minor inconvenience to the team"], c: 2 },
    { q: "Team productivity waste from a bad hire typically lasts:", o: ["Only 1-2 days maximum", "6+ months of disruption", "Just the hiring process period", "About one hour total"], c: 1 },
    { q: "The RIGHT mindset multiplying effect means:", o: ["Hire more people to increase output", "One great hire multiplies team performance", "Anyone can do the job adequately", "Speed of hiring is most important"], c: 1 }
];

const task2Quiz = [
    { q: "If a candidate doesn't own their own laptop:", o: ["It's completely acceptable for this role", "Shows dependency - reject immediately", "They can use a phone instead", "Office will provide one anyway"], c: 1 },
    { q: "Candidate spends most time on phone, not computer:", o: ["Perfectly fine for developer work", "Red flag - not tech-minded enough", "Modern preference is acceptable", "Phone skills are more important now"], c: 1 },
    { q: "When asked 'what do you do if laptop has problems?':", o: ["'Take to repair shop' is the right answer", "Googling and fixing shows tech-savvy mindset", "Buying a new one shows financial stability", "Asking IT is always the correct approach"], c: 1 },
    { q: "Phone screen question about computer usage reveals:", o: ["Nothing useful about candidates", "Their comfort level with technology", "Their age and generation only", "Their wealth and status"], c: 1 },
    { q: "The phone screen should filter candidates who:", o: ["Are too experienced for the role", "Show tech-dependency and problem-solving gaps", "Ask too many good questions", "Have higher salary expectations"], c: 1 },
    { q: "A candidate who uses computer 4+ hours daily is:", o: ["Overworking and needs work-life balance", "A green flag for tech comfort", "Probably addicted to games", "Wasting time not being productive"], c: 1 },
    { q: "Self-problem-solving with technology indicates:", o: ["The candidate is a know-it-all", "The candidate is tech-savvy and resourceful", "The candidate doesn't trust professionals", "Nothing meaningful about work style"], c: 1 },
    { q: "The 10-minute phone screen goal is to:", o: ["Replace the full interview process", "Quickly filter out obviously unfit candidates", "Make candidates feel welcome", "Discuss salary expectations first"], c: 1 },
    { q: "Relying on repair shops for tech problems suggests:", o: ["The candidate is wealthy enough to afford help", "The candidate lacks tech troubleshooting mindset", "Excellent delegation and prioritization skills", "Understanding when to seek expert help"], c: 1 },
    { q: "Opening the phone screen should include:", o: ["Immediately asking about salary expectations", "Confirming good time and explaining brief purpose", "Starting with technical coding questions", "Talking about company history for 5 minutes"], c: 1 }
];

const task3Quiz = [
    { q: "STAR method helps assess:", o: ["Only technical coding skills", "Behavioral patterns through specific examples", "Salary history and expectations", "References from previous employers"], c: 1 },
    { q: "'S' in STAR stands for:", o: ["Skills assessment framework", "Situation the candidate faced", "Salary and compensation", "Screenings and evaluations"], c: 1 },
    { q: "Cultural fit assessment happens:", o: ["Only after technical skills verified", "Throughout the interview process", "Only in the final interview round", "It's not important for tech roles"], c: 1 },
    { q: "Red flags for attitude problems include:", o: ["Asking clarifying questions", "Blaming previous employers consistently", "Being nervous during interviews", "Requesting time to think about answers"], c: 1 },
    { q: "The 'A' in STAR evaluates:", o: ["Their annual salary expectations", "Actions the candidate specifically took", "Awards and recognition received", "Attendance at previous jobs"], c: 1 },
    { q: "Beyond skills, cultural fit looks at:", o: ["Only their hobbies and interests", "Values, work style, and team compatibility", "Educational background exclusively", "Their social media presence"], c: 1 },
    { q: "The 'R' in STAR method means:", o: ["Review of their resume details", "Result or outcome of their actions", "References from past employers", "Reasons for leaving their job"], c: 1 },
    { q: "Attitude problems are considered:", o: ["Easily fixed with training", "Red flags that predict future issues", "Normal and acceptable", "Only relevant for client-facing roles"], c: 1 },
    { q: "STAR method questions start with:", o: ["Tell me about a time when...", "What is your greatest weakness...", "Where do you see yourself in 5 years...", "Why should we hire you..."], c: 0 },
    { q: "Evaluating cultural fit requires:", o: ["Asking personal questions about family", "Assessing alignment with company values", "Checking their political views", "Reviewing their financial status"], c: 1 }
];

const task4Quiz = [
    { q: "Day 1 must include which critical element:", o: ["Full company history presentation", "System access setup and first task", "Week-long orientation only", "Introduction to all company clients"], c: 1 },
    { q: "The 30-60-90 day plan purpose is to:", o: ["Delay performance expectations", "Set clear milestones for new hire success", "Give new hires extended time off", "Reduce onboarding investment costs"], c: 1 },
    { q: "First task assignment should be:", o: ["The most complex project available", "Meaningful but achievable task", "Something that doesn't matter if failed", "Busy work to keep them occupied"], c: 1 },
    { q: "Team introductions on Day 1 help with:", o: ["Nothing really important", "Building relationships and reducing isolation", "Wasting productive work time", "Showing off the team size"], c: 1 },
    { q: "Onboarding excellence directly impacts:", o: ["Only the new hire's first week", "Long-term retention and performance", "Just the HR workload", "Nothing measurable really"], c: 1 },
    { q: "System access should be ready:", o: ["Whenever IT gets around to it", "Before the new hire starts on Day 1", "After their first month of work", "Only if they specifically ask"], c: 1 },
    { q: "The 90-day mark typically evaluates:", o: ["Whether HR did paperwork correctly", "If new hire is productive and integrated", "Vacation days remaining", "Only attendance records"], c: 1 },
    { q: "Delayed onboarding leads to:", o: ["Better prepared new hires", "Confusion and decreased productivity", "More time for proper planning", "Improved retention rates"], c: 1 },
    { q: "First 90 days are called the 'onboarding period' because:", o: ["Legal requirements mandate this timeframe", "Critical time for integration and expectation setting", "It's an arbitrary HR standard", "New hires can't work independently before this"], c: 1 },
    { q: "Checklist-based onboarding ensures:", o: ["More paperwork for HR to handle", "Nothing important gets missed", "Slower onboarding process", "Reduced flexibility for new hires"], c: 1 }
];

const task5Quiz = [
    { q: "1:1 meeting structure should ask about:", o: ["Only salary and promotion desires", "What went well, challenges faced, and support needed", "Personal life and hobbies only", "Complaints about other team members"], c: 1 },
    { q: "Performance reviews should be:", o: ["Surprising with new information", "Based on ongoing documented feedback", "Done only when there are problems", "Handled entirely by senior management"], c: 1 },
    { q: "Difficult conversation scripts help managers:", o: ["Avoid having necessary conversations", "Navigate sensitive topics professionally", "Make employees feel worse", "Document things for legal protection only"], c: 1 },
    { q: "Regular 1:1s are important because they:", o: ["Waste productive work time", "Build trust and catch issues early", "Are required by labor law", "Give employees time to complain"], c: 1 },
    { q: "Performance management is about:", o: ["Finding reasons to fire people", "Supporting growth and addressing gaps", "Creating paperwork for HR files", "Micromanaging employee activities"], c: 1 },
    { q: "Feedback during 1:1s should be:", o: ["Saved for annual review only", "Timely, specific, and actionable", "Always positive to maintain morale", "Delivered only through email"], c: 1 },
    { q: "The 'support needed' question reveals:", o: ["Nothing useful for management", "Blockers and resource gaps to address", "Employee weaknesses only", "Budget requests to deny"], c: 1 },
    { q: "Difficult conversations require:", o: ["Avoiding the topic until it goes away", "Preparation, clarity, and professionalism", "Having other employees present always", "Immediate termination decisions"], c: 1 },
    { q: "Performance documentation purpose is:", o: ["Creating legal defense only", "Tracking progress and providing evidence for decisions", "Micromanaging every action", "Satisfying auditors"], c: 1 },
    { q: "'What went well' question helps identify:", o: ["Employees who brag too much", "Wins to recognize and patterns to repeat", "Nothing actionable really", "Overconfident team members"], c: 1 }
];

const task6Quiz = [
    { q: "Pay band structure provides:", o: ["Rigid salary limits that cannot change", "Transparency and consistency in compensation", "Lower salaries for everyone", "Confusion in salary negotiations"], c: 1 },
    { q: "Salary review process should be:", o: ["Random and unpredictable", "Structured, fair, and transparent", "Done only when employees complain", "Handled secretly by management"], c: 1 },
    { q: "Benefits packages impact:", o: ["Nothing related to retention", "Attraction and retention of talent", "Only the company's costs", "Legal compliance only"], c: 1 },
    { q: "Compensation discussions require:", o: ["Avoiding the topic entirely", "Clear data and market comparisons", "Promising things you can't deliver", "Always saying 'no' to requests"], c: 1 },
    { q: "Pay equity means:", o: ["Everyone earns the same amount", "Fair pay for comparable work and experience", "Paying minimum wage only", "Ignoring market rates entirely"], c: 1 },
    { q: "Salary transparency helps build:", o: ["Conflict between employees", "Trust and reduce pay discrimination", "Higher costs with no benefit", "Unrealistic expectations only"], c: 1 },
    { q: "Market rate research for salaries:", o: ["Is unnecessary for small companies", "Informs competitive compensation decisions", "Should be done once and never updated", "Only matters for executive roles"], c: 1 },
    { q: "Performance-based compensation should:", o: ["Replace all base salaries", "Link pay to measurable outcomes fairly", "Create unhealthy competition always", "Be eliminated entirely"], c: 1 },
    { q: "Compensation package includes:", o: ["Only monthly salary amount", "Salary, benefits, bonuses, and growth opportunities", "Free coffee and snacks only", "Just health insurance"], c: 1 },
    { q: "Salary negotiation conversations need:", o: ["Aggressive tactics to minimize costs", "Listening, data, and fair resolution", "Immediate rejection of all requests", "Promises you can't keep"], c: 1 }
];

const task7Quiz = [
    { q: "Employment contracts must include:", o: ["Only start date and salary", "Role, compensation, terms, and policies", "Just the job title", "Handshake agreements are sufficient"], c: 1 },
    { q: "NDA (Non-Disclosure Agreement) protects:", o: ["Employee's personal information only", "Confidential company and client information", "Nothing legally binding", "Only financial data"], c: 1 },
    { q: "Leave policies must comply with:", o: ["Whatever the company decides", "Labor laws and regulations", "No specific requirements exist", "Only what competitors offer"], c: 1 },
    { q: "Termination procedures require:", o: ["No documentation needed", "Proper notice, documentation, and legal compliance", "Just changing access passwords", "Announcing via public Slack"], c: 1 },
    { q: "Policy acknowledgment signatures prove:", o: ["Nothing useful really", "Employee received and understood policies", "Employees can be punished anytime", "Legal protection against all claims"], c: 1 },
    { q: "Offer letter should be:", o: ["Verbal only to avoid commitment", "Written, clear, and include key terms", "Vague to allow flexibility", "Sent after they start working"], c: 1 },
    { q: "Compliance violations can result in:", o: ["Nothing significant really", "Legal penalties and reputation damage", "Just minor HR warnings", "Positive media coverage"], c: 1 },
    { q: "Employee handbook purpose is:", o: ["Decoration for HR office", "Clear communication of expectations and policies", "Making things more complicated", "Legal jargon nobody reads"], c: 1 },
    { q: "Legal document retention requires:", o: ["Throwing away after employee leaves", "Keeping records for specified periods", "Only keeping digital copies temporarily", "No specific requirements exist"], c: 1 },
    { q: "Background checks should be:", o: ["Skipped to save time and cost", "Consistent, legal, and documented", "Only for senior positions", "Based on how the person looks"], c: 1 }
];

const task8Quiz = [
    { q: "Conflict between employees should be:", o: ["Ignored until it resolves itself", "Addressed professionally and promptly", "Escalated to CEO immediately", "Handled by making one person leave"], c: 1 },
    { q: "Mediation process involves:", o: ["Taking sides with the favorite employee", "Listening to both parties objectively", "Declaring a winner and loser", "Public announcement of the conflict"], c: 1 },
    { q: "Written warnings should be:", o: ["Threatening and aggressive", "Clear, factual, and documented", "Given without explanation", "Verbal only to avoid records"], c: 1 },
    { q: "Employee relations focuses on:", o: ["Creating more conflicts", "Building positive workplace culture", "Surveillance and punishment", "Reducing all communication"], c: 1 },
    { q: "Difficult conversations require:", o: ["Yelling to make a point", "Calm, private, and constructive approach", "Public confrontation", "Avoiding the issue entirely"], c: 1 },
    { q: "Following up after conflict resolution:", o: ["Is unnecessary busywork", "Ensures issues were actually resolved", "Creates more problems", "Should never be done"], c: 1 },
    { q: "Documentation of conflicts helps:", o: ["Nothing - it's just paperwork", "Track patterns and protect all parties", "Make employees feel monitored", "Create legal problems only"], c: 1 },
    { q: "When both employees blame each other:", o: ["Fire both of them immediately", "Investigate facts objectively", "Believe the more senior one", "Flip a coin to decide"], c: 1 },
    { q: "Hostile work environment claims require:", o: ["Immediate dismissal without investigation", "Thorough investigation and action", "Ignoring until lawsuit arrives", "Blaming the complainant"], c: 1 },
    { q: "Employee relations success means:", o: ["Zero conflicts ever occurring", "Healthy relationships and fair resolution of issues", "Employees never disagreeing", "Complete silence in the office"], c: 1 }
];

const task9Quiz = [
    { q: "Knowledge transfer during offboarding ensures:", o: ["Nothing important really", "Critical information isn't lost with departure", "The leaving employee feels bad", "More work for remaining team"], c: 1 },
    { q: "Asset return checklist includes:", o: ["Only expensive equipment", "All company property including laptop and keys", "Just the laptop", "Whatever employee remembers"], c: 1 },
    { q: "Access revocation should happen:", o: ["Whenever IT gets to it", "Immediately upon last working day", "One month after departure", "Only if employee was fired"], c: 1 },
    { q: "Exit interview purpose is:", o: ["Making departing employee uncomfortable", "Gathering insights to improve retention", "Arguing about their decision", "Legal requirement only"], c: 1 },
    { q: "Final settlement timing:", o: ["Whenever company decides", "Within legal timeframes with all dues", "Never - they forfeit everything", "Only if they ask nicely"], c: 1 },
    { q: "Resignation acceptance should be:", o: ["Dramatic and confrontational", "Professional and documented properly", "Ignored for several days", "Announced to entire company immediately"], c: 1 },
    { q: "Exit checklist ensures:", o: ["Maximum inconvenience for departing person", "Complete and consistent offboarding", "Random steps based on mood", "Nothing important gets done"], c: 1 },
    { q: "Departing employee handover includes:", o: ["Nothing - let others figure it out", "Project status, contacts, and pending items", "Only their computer password", "Complaints about the company"], c: 1 },
    { q: "Positive exit experiences lead to:", o: ["Nothing relevant really", "Potential referrals and boomerang employees", "More people wanting to leave", "Bad reviews online"], c: 1 },
    { q: "Offboarding process reflects:", o: ["Nothing about company culture", "How company treats people at all stages", "Only legal compliance", "HR's workload management"], c: 1 }
];

const task10Quiz = [
    { q: "Certification validates:", o: ["Just completing training modules", "Competency to perform the role effectively", "Nothing meaningful really", "Ability to pass tests only"], c: 1 },
    { q: "Video walkthrough demonstrates:", o: ["Camera presence and appearance", "Practical application of knowledge", "Technical video editing skills", "Nothing useful for evaluation"], c: 1 },
    { q: "Continuous learning after certification:", o: ["Is completely unnecessary", "Should continue throughout career", "Wastes productive work time", "Only for those seeking promotion"], c: 1 },
    { q: "Career growth at Digital Heroes requires:", o: ["Luck and timing only", "Performance, initiative, and skill development", "Political connections primarily", "Just time served in role"], c: 1 },
    { q: "Professional development responsibility:", o: ["Entirely on the company", "Personal ownership with company support", "Not important for this role", "Only for senior positions"], c: 1 },
    { q: "Mentoring others helps you:", o: ["Lose competitive advantage", "Reinforce your own knowledge", "Waste productive time", "Create threats to your position"], c: 1 },
    { q: "Staying current with industry trends:", o: ["Is unnecessary if doing job well", "Keeps skills relevant and valuable", "Takes time from real work", "Only matters for leadership"], c: 1 },
    { q: "Identifying skill gaps should lead to:", o: ["Hiding them from management", "Actively addressing and closing them", "Changing to different career", "Ignoring them completely"], c: 1 },
    { q: "Performance reviews provide opportunity for:", o: ["Being criticized unfairly", "Growth feedback and career discussion", "Annual salary reduction", "Hearing complaints only"], c: 1 },
    { q: "Long-term career goals help:", o: ["Create unrealistic expectations", "Guide development and decision-making", "Limit flexibility in career", "Waste time on planning"], c: 1 }
];

const allQuizzes = [task1Quiz, task2Quiz, task3Quiz, task4Quiz, task5Quiz, task6Quiz, task7Quiz, task8Quiz, task9Quiz, task10Quiz];

