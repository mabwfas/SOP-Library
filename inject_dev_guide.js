
const fs = require('fs');
const path = require('path');

const filePath = String.raw`c:\Users\reals\.gemini\antigravity\playground\shimmering-einstein\sops\hr-sop.html`;

const guideHTML = `
                <!-- NEW: DEVELOPER HIRING GUIDE -->
                <section class="critical-alert" id="dev-hiring-guide" style="background: linear-gradient(135deg, #2563EB 0%, #1E40AF 100%);">
                    <div class="section-header" style="border-bottom-color: rgba(255,255,255,0.3);">
                        <div class="section-number" style="background: white; color: #1E40AF;">💻</div>
                        <h2 style="color: white;">WEB DEVELOPER HIRING GUIDE</h2>
                    </div>

                    <div class="highlight-box" style="background: rgba(255,255,255,0.1); border-left-color: #60A5FA;">
                        <h3 style="color: white; margin-bottom: 10px;">📌 IMPORTANT: READ THIS FIRST</h3>
                        <p style="color: #DBEAFE;"><strong>Who Are We Hiring?</strong> Tech-Savvy Gems (Trainee/Intern)</p>
                        <p style="color: #DBEAFE;"><strong>Key Filter:</strong> Must be <strong>TECH-SAVVY</strong> (uses computers daily, figures out tech easily)</p>
                        <p style="color: #DBEAFE; margin-top: 10px;"><em>"Tech-Savvy Person → Learns fast → Solves problems. Non-Tech Person → Struggles → Needs help → BURDEN."</em></p>
                    </div>

                    <div class="info-box" style="background: white; color: #1E293B; margin-top: 25px;">
                        <h4 style="color: #1E40AF;">🔄 HIRING PROCESS OVERVIEW</h4>
                        <ul class="styled-list" style="margin-top: 10px;">
                            <li><strong>STEP 1: Application Filter (2 min)</strong> → Reject 70%</li>
                            <li><strong>STEP 2: HR Phone Screen (10 min)</strong> → Reject 50% more</li>
                            <li><strong>STEP 3: AI App Task (2 hours)</strong> → Filter by ACTION not words</li>
                            <li><strong>STEP 4: HR Video Interview (20 min)</strong> → Only for those who completed AI App</li>
                            <li><strong>STEP 5: Shopify Trial Task (1 day)</strong> → Final filter</li>
                            <li><strong>STEP 6: Training</strong> → Assign role</li>
                        </ul>
                        <p style="background: #EFF6FF; padding: 10px; border-radius: 6px; margin-top: 15px; border-left: 4px solid #3B82F6;">
                            <strong>KEY INSIGHT:</strong> We give AI App Task <strong>BEFORE</strong> interview. No point interviewing someone who can't complete a 2-hour task. Saves HR time.
                        </p>
                    </div>

                    <div class="checklist-grid">
                        <div class="checklist-card">
                            <h4>✅ STEP 1: APPLICATION FILTER</h4>
                            <ul class="check-list">
                                <li>Can work remotely/hybrid? (No = Reject)</li>
                                <li>Has portfolio/work samples? (No = Reject)</li>
                                <li>Resume is complete? (No = Reject)</li>
                                <li>Has own laptop? (No = Reject)</li>
                            </ul>
                        </div>
                        
                        <div class="checklist-card">
                            <h4>📞 STEP 2: PHONE SCREEN (10 min)</h4>
                            <p style="font-size: 0.9em; margin-bottom: 10px;">"Hi [Name], quick questions for Web Dev role..."</p>
                            <ul class="styled-list">
                                <li><strong>Laptop?</strong> "Yes" = ✅ | "No/Office PC" = ❌</li>
                                <li><strong>Usage?</strong> "4+ hours" = ✅ | "Phone only" = ❌</li>
                                <li><strong>Activity?</strong> "Coding/Projects" = ✅ | "Movies/Nothing" = ❌</li>
                                <li><strong>Built anything?</strong> "Yes" = ✅ | "No" = ❌</li>
                                <li><strong>Tech Fix?</strong> "Google it/Self" = ✅ | "Repair shop" = ❌</li>
                            </ul>
                            <div style="background: #F0FDF4; padding: 8px; border-radius: 4px; margin-top: 10px; font-size: 0.85em; color: #166534;">
                                <strong>Decision:</strong> 5-6 Good answers = ✅ Send AI App Task
                            </div>
                        </div>
                    </div>

                    <div class="story-box">
                        <h4>📱 STEP 3: AI APP TASK (2 Hours)</h4>
                        <p><strong>Purpose:</strong> Test who can Learn & Build Fast using AI. Given RIGHT AFTER phone screen.</p>
                        
                        <div style="background: white; padding: 15px; border-radius: 8px; margin-top: 15px; font-family: monospace; font-size: 0.9em;">
                            <strong>🚀 DIGITAL HEROES - AI APP CHALLENGE</strong><br><br>
                            <strong>TASK:</strong><br>
                            1. Install Firebase Studio (firebase.studio)<br>
                            2. Build a USEFUL app (Expense Tracker, Todo, etc.) using AI prompts<br>
                            3. Host on Vercel<br><br>
                            <strong>SUBMIT:</strong> Vercel Link, App details, Screenshot.<br>
                            <strong>DEADLINE:</strong> 2 Hours.
                        </div>
                        
                        <p style="margin-top: 10px; font-size: 0.9em;"><strong>Evaluation:</strong><br>
                        ✅ Submitted + Useful + Good Design = <strong>Pass</strong><br>
                        ❌ No switch / Broken / Ugly = <strong>Reject</strong></p>
                    </div>

                    <div class="info-box" style="background: white; color: #1E293B;">
                        <h4 style="color: #1E40AF;">🎤 STEP 4: HR VIDEO INTERVIEW (20 min)</h4>
                        <p>Only AFTER AI App Task is passed.</p>
                        
                        <table class="styled-table" style="margin-top: 15px; font-size: 0.9em;">
                            <thead>
                                <tr style="background: #1E40AF;"><th>Section</th><th>Key Question / Check</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>A. Tech Background</strong></td><td>"Since when using computers?" (Childhood = 5 pts)<br>"Do you play games?" (Gamers = Tech savvy)<br>"What have you built?" (Real work = 5 pts)</td></tr>
                                <tr><td><strong>B. Problem Solving</strong></td><td>"Stuck for 2 hours?" (Google/Try new ways = ✅)<br>"Computer crashes?" (Redo/Backup = ✅)</td></tr>
                                <tr><td><strong>C. Personality</strong></td><td>"Time you failed?" (Honest admission = ✅)<br>"Rate skills 1-10?" (9-10 = Red flag)<br><strong>TRAP:</strong> "Used Framer Motion?" (Lying check)</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="story-box" style="background: linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%); border-color: #F97316;">
                        <h4 style="color: #C2410C;">📱 STEP 5: SHOPIFY TRIAL TASK (1 Day)</h4>
                        <p><strong>Goal:</strong> Replicate a Shopify Store (Reference provided).</p>
                        <p><strong>Checklist:</strong> Partner Account, Dev Store, Theme Setup, 5 Products, Mobile layout.</p>
                        <p><strong>Tools Allowed:</strong> Koala Inspector, ChatGPT, YouTube.</p>
                        <div style="background: white; padding: 10px; border-radius: 6px; margin-top: 10px; border-left: 4px solid #F97316;">
                            <strong>Decision:</strong><br>
                            20-25/25 Score (Deadline met, Visual accuracy) = ✅ <strong>HIRE & START TRAINING</strong>
                        </div>
                    </div>
                </section>
`;

function injectGuide() {
    try {
        let content = fs.readFileSync(filePath, 'utf8');

        // Target: <section class="section" id="hiring">
        const target = '<section class="section" id="hiring">';

        if (content.includes(target)) {
            content = content.replace(target, guideHTML + '\n\n' + target);
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Injected Developer Hiring Guide into hr-sop.html`);
        } else {
            console.error('Target section not found!');
        }

    } catch (e) {
        console.error(`Error: ${e.message}`);
    }
}

injectGuide();
