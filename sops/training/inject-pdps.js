// PDP (Personal Development Plan) Injector
// Adds PDP sections to each SOP file

const fs = require('fs');
const path = require('path');

const sopDir = path.join(__dirname, '..');

// PDP Content for each role
const pdps = {
    'developer-sop.html': `
<!-- PDP: DEVELOPER CAREER PATH -->
<section id="dev-pdp" class="section">
    <h2>🎯 Developer PDP - Personal Development Plan</h2>
    
    <div class="info-box">
        <h3>📊 Career Progression Path</h3>
        <table class="styled-table">
            <tr><th>Level</th><th>Experience</th><th>Skills Required</th><th>Salary Range</th></tr>
            <tr><td><strong>Junior</strong></td><td>0-1 year</td><td>HTML/CSS, Basic Liquid, Theme edits</td><td>₹25,000-40,000</td></tr>
            <tr><td><strong>Mid</strong></td><td>1-3 years</td><td>Custom sections, Metafields, Speed optimization</td><td>₹50,000-80,000</td></tr>
            <tr><td><strong>Senior</strong></td><td>3-5 years</td><td>Architecture design, Mentoring, Complex integrations</td><td>₹1,00,000-1,50,000</td></tr>
            <tr><td><strong>Lead</strong></td><td>5+ years</td><td>Team management, Technical strategy, Client relations</td><td>₹1,50,000-2,50,000</td></tr>
        </table>
    </div>
    
    <div class="highlight-box">
        <h3>🎓 Certification Goals</h3>
        <ul>
            <li>☐ Digital Heroes Developer Certification (Internal)</li>
            <li>☐ Shopify Partner Academy - Foundations</li>
            <li>☐ Shopify Partner Academy - Theme Development</li>
            <li>☐ Google Mobile Web Specialist</li>
        </ul>
    </div>
    
    <div class="story-box">
        <h3>🤖 AI MEGA PROMPTS FOR DEVELOPERS</h3>
        <div class="highlight-box">
            <h4>🔧 Debugging Prompt</h4>
            <p><em>"I have a Shopify Liquid error: [paste error]. The code is in [filename]. The expected behavior is [describe]. Current behavior is [describe]. Help me debug step by step."</em></p>
        </div>
        <div class="highlight-box">
            <h4>📝 Section Schema Prompt</h4>
            <p><em>"Create a Shopify section schema for [describe section]. Include settings for: [list settings]. Add blocks for: [list blocks]. Use proper types and labels."</em></p>
        </div>
        <div class="highlight-box">
            <h4>⚡ Speed Optimization Prompt</h4>
            <p><em>"Analyze this Liquid code for performance issues: [paste code]. Suggest optimizations for: lazy loading, reducing Liquid loops, deferring scripts."</em></p>
        </div>
    </div>
</section>
`,
    'sales-sop.html': `
<!-- PDP: SALES CAREER PATH -->
<section id="sales-pdp" class="section">
    <h2>🎯 Sales PDP - Personal Development Plan</h2>
    
    <div class="info-box">
        <h3>📊 Career Progression Path</h3>
        <table class="styled-table">
            <tr><th>Level</th><th>Monthly Target</th><th>Skills Required</th><th>Commission</th></tr>
            <tr><td><strong>Trainee</strong></td><td>$5,000</td><td>Basic qualifying, Response templates</td><td>3%</td></tr>
            <tr><td><strong>Sales Rep</strong></td><td>$15,000</td><td>Full qualification, Objection handling</td><td>As per I&P Framework</td></tr>
            <tr><td><strong>Senior Rep</strong></td><td>$30,000</td><td>Enterprise deals, Upselling</td><td>7%</td></tr>
            <tr><td><strong>Sales Lead</strong></td><td>$50,000+</td><td>Team mentoring, Process optimization</td><td>10%</td></tr>
        </table>
    </div>
    
    <div class="story-box">
        <h3>🤖 AI MEGA PROMPTS FOR SALES</h3>
        <div class="highlight-box">
            <h4>💬 Objection Handling Prompt</h4>
            <p><em>"The client said: [paste objection]. Our product is [describe]. Help me craft a response that acknowledges their concern, provides value, and moves toward closing."</em></p>
        </div>
        <div class="highlight-box">
            <h4>📧 Email Follow-up Prompt</h4>
            <p><em>"Write a follow-up email for a prospect who [describe situation]. Tone: professional but warm. Include: value reminder, soft CTA, urgency element."</em></p>
        </div>
    </div>
</section>
`,
    'hr-sop.html': `
<!-- PDP: HR CAREER PATH -->
<section id="hr-pdp" class="section">
    <h2>🎯 HR PDP - Personal Development Plan</h2>
    
    <div class="info-box">
        <h3>📊 Career Progression Path</h3>
        <table class="styled-table">
            <tr><th>Level</th><th>Experience</th><th>Focus Areas</th><th>Salary Range</th></tr>
            <tr><td><strong>HR Coordinator</strong></td><td>0-2 years</td><td>Sourcing, Screening, Onboarding</td><td>₹25,000-40,000</td></tr>
            <tr><td><strong>HR Generalist</strong></td><td>2-4 years</td><td>Full recruitment, Performance management</td><td>₹50,000-80,000</td></tr>
            <tr><td><strong>HR Manager</strong></td><td>4-6 years</td><td>Policy design, Compliance, Culture</td><td>₹1,00,000-1,50,000</td></tr>
            <tr><td><strong>HR Director</strong></td><td>6+ years</td><td>Strategic planning, Team leadership</td><td>₹1,50,000-3,00,000</td></tr>
        </table>
    </div>
    
    <div class="story-box">
        <h3>🤖 AI MEGA PROMPTS FOR HR</h3>
        <div class="highlight-box">
            <h4>📋 Job Description Prompt</h4>
            <p><em>"Write a job description for [role] at a Shopify agency. Include: responsibilities, requirements, nice-to-haves. Tone: professional but approachable. Add salary range: [range]."</em></p>
        </div>
        <div class="highlight-box">
            <h4>🎤 Interview Questions Prompt</h4>
            <p><em>"Generate 10 interview questions for a [role] position. Include: 3 technical, 3 behavioral (STAR), 2 situational, 2 culture fit. Focus on [key traits]."</em></p>
        </div>
    </div>
</section>
`
};

// Inject PDPs into SOP files
Object.entries(pdps).forEach(([filename, pdpContent]) => {
    const filepath = path.join(sopDir, filename);
    if (fs.existsSync(filepath)) {
        let content = fs.readFileSync(filepath, 'utf8');

        // Check if PDP already exists
        if (!content.includes('id="dev-pdp"') && !content.includes('id="sales-pdp"') && !content.includes('id="hr-pdp"')) {
            // Find insertion point (before </main> or </body>)
            const insertBefore = content.lastIndexOf('</main>');
            if (insertBefore !== -1) {
                content = content.slice(0, insertBefore) + pdpContent + content.slice(insertBefore);
                fs.writeFileSync(filepath, content, 'utf8');
                console.log('✅ Added PDP to ' + filename);
            }
        } else {
            console.log('⏭️ PDP already exists in ' + filename);
        }
    } else {
        console.log('⚠️ File not found: ' + filename);
    }
});

console.log('\\n🎉 PDP injection complete!');
