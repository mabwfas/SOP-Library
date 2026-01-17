
const fs = require('fs');

const filePath = String.raw`c:\Users\reals\.gemini\antigravity\playground\shimmering-einstein\sops\hr-sop.html`;

const guideHTML = `
                <!-- NEW: DEVELOPER HIRING GUIDE (Detailed V2) -->
                <section class="critical-alert" id="dev-hiring-guide" style="background: white; border: 2px solid var(--primary); padding: 0;">
                    
                    <!-- Header -->
                    <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); padding: 30px; text-align: center; color: white;">
                        <h2 style="color: white; margin: 0; font-size: 2.2em; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">🎯 DIGITAL HEROES - HR HIRING GUIDE</h2>
                        <h3 style="color: #bfdbfe; margin-top: 10px; font-size: 1.4em;">Simple Step-by-Step Process for Hiring Web Developers</h3>
                        <p style="margin-top: 10px; font-weight: 500; opacity: 0.9;">Easy to Follow | Less Time Consuming | Find Tech-Savvy Gems</p>
                    </div>

                    <div style="padding: 30px;">

                        <!-- IMPORTANT SECTION -->
                        <div class="highlight-box" style="background: #fff1f2; border-left: 5px solid #e11d48;">
                            <h3 style="color: #be123c;">📌 IMPORTANT: READ THIS FIRST</h3>
                            
                            <h4 style="margin-top: 15px; color: #881337;">Who Are We Hiring?</h4>
                            <table class="styled-table" style="margin-top: 10px;">
                                <thead>
                                    <tr style="background: #9f1239;"><th>What</th><th>Details</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td><strong>Role</strong></td><td>Web Developer (Trainee/Intern)</td></tr>
                                    <tr><td><strong>Training</strong></td><td>Everyone gets same Shopify training first</td></tr>
                                    <tr><td><strong>After Training</strong></td><td>Assigned to: Shopify Dev / Designer / Full Stack / PM based on aptitude</td></tr>
                                    <tr><td><strong>Key Filter</strong></td><td>Must be <strong>TECH-SAVVY</strong> (uses computers daily, figures out tech easily)</td></tr>
                                    <tr><td><strong>Location</strong></td><td>Remote/Hybrid - Location NOT a barrier</td></tr>
                                </tbody>
                            </table>

                            <h4 style="margin-top: 20px; color: #881337;">Why Tech-Savvy Matters</h4>
                            <div style="background: #fff; padding: 15px; border-radius: 6px; border: 1px solid #fecdd3; color: #881337; font-family: monospace; font-weight: bold;">
                                Tech-Savvy Person → Learns fast → Solves problems → Needs less hand-holding → PRODUCTIVE<br><br>
                                Non-Tech Person → Struggles with basics → Gets stuck → Needs constant help → BURDEN
                            </div>
                        </div>

                        <!-- HIRING PROCESS OVERVIEW -->
                        <div class="info-box" style="background: #eff6ff; border-left: 5px solid #2563eb; margin-top: 30px;">
                            <h3 style="color: #1e40af;">🔄 HIRING PROCESS OVERVIEW</h3>
                            <div style="background: white; padding: 15px; border-radius: 8px; margin-top: 15px; color: #1e3a8a; font-family: monospace; line-height: 1.6;">
                                STEP 1: Application Filter (2 min) → Reject 70%<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;↓<br>
                                STEP 2: HR Phone Screen (10 min) → Reject 50% more<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;↓<br>
                                STEP 3: AI App Task (2 hours) → Filter by ACTION not words<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;↓<br>
                                STEP 4: HR Video Interview (20 min) → Only for those who completed AI App<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;↓<br>
                                STEP 5: Shopify Trial Task (1 day) → Final filter<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;↓<br>
                                STEP 6: Training (if passed) → Assign role
                            </div>

                            <div style="background: #dbeafe; padding: 15px; border-radius: 6px; margin-top: 15px; color: #1e40af;">
                                <strong>KEY INSIGHT:</strong> We give AI App Task <strong>BEFORE</strong> interview. Why?<br>
                                <ul style="margin-top: 5px; padding-left: 20px;">
                                    <li>Anyone can TALK well in interview</li>
                                    <li>AI App Task tests who can actually DO</li>
                                    <li>No point interviewing someone who can't complete a 2-hour task</li>
                                    <li>Saves HR time - interview only serious candidates</li>
                                </ul>
                                <p style="margin-top: 10px;"><strong>HR's Job:</strong> Step 1, 2, 3, 4 (filter out wrong people efficiently)</p>
                            </div>
                        </div>

                        <!-- STEP 1: APP FILTER -->
                        <div class="section-divider" style="border-top: 2px dashed #cbd5e1; margin: 40px 0;"></div>
                        <h2 style="color: #0f172a;">✅ STEP 1: APPLICATION FILTER (2 min/person)</h2>
                        <h4 style="color: #475569;">HR Checklist - Just Tick Yes/No</h4>
                        
                        <table class="styled-table" style="margin-top: 15px;">
                            <thead>
                                <tr><th>Question</th><th>YES = Continue</th><th>NO = Reject</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Can work remotely/hybrid as needed?</td><td>✅</td><td>❌ REJECT</td></tr>
                                <tr><td>Has portfolio OR any work samples?</td><td>✅</td><td>❌ REJECT</td></tr>
                                <tr><td>Resume is complete (not half-empty)?</td><td>✅</td><td>❌ REJECT</td></tr>
                                <tr><td>Has own laptop?</td><td>✅</td><td>❌ REJECT</td></tr>
                            </tbody>
                        </table>
                        <p style="background: #fee2e2; color: #991b1b; padding: 10px; border-radius: 4px; margin-top: 10px; font-weight: bold; text-align: center;">If ANY answer is NO → REJECT immediately. Don't waste time.</p>


                        <!-- STEP 2: PHONE SCREEN -->
                        <div class="section-divider" style="border-top: 2px dashed #cbd5e1; margin: 40px 0;"></div>
                        <h2 style="color: #0f172a;">📞 STEP 2: PHONE SCREEN (10 min)</h2>
                        <p><strong>Purpose:</strong> Check if worth calling for interview</p>

                        <div class="story-box" style="margin-top: 15px;">
                            <h4>📝 Script for HR:</h4>
                            <p>"Hi [Name], this is [Your Name] from Digital Heroes.<br><br>
                            I saw your application for the Web Developer role.<br>
                            I have a few quick questions - will take 5-10 minutes.<br>
                            Is this a good time?"<br><br>
                            <em>[If yes, continue. If no, schedule call.]</em></p>
                        </div>

                        <h4 style="margin-top: 25px; color: #334155;">Questions to Ask (Exactly These):</h4>

                        <!-- Phone Q1 -->
                        <div class="info-box" style="margin-top: 15px; background: #f8fafc; border: 1px solid #e2e8f0;">
                            <strong style="color: #1e293b; font-size: 1.1em;">Q1: "Do you have your own laptop?"</strong>
                            <table class="styled-table" style="margin-top: 10px;">
                                <tbody>
                                    <tr><td>"Yes, I have a laptop"</td><td>✅ Continue</td></tr>
                                    <tr><td>"No, but I can arrange"</td><td>⚠️ Ask: "Within how many days?"</td></tr>
                                    <tr><td>"No, I'll use office computer"</td><td>❌ REJECT (shows dependency)</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <!-- Phone Q2 -->
                        <div class="info-box" style="margin-top: 15px; background: #f8fafc; border: 1px solid #e2e8f0;">
                            <strong style="color: #1e293b; font-size: 1.1em;">Q2: "How many hours per day do you use a computer/laptop - not phone, computer?"</strong>
                            <table class="styled-table" style="margin-top: 10px;">
                                <tbody>
                                    <tr><td>"4+ hours daily"</td><td>✅ Continue</td></tr>
                                    <tr><td>"2-3 hours"</td><td>⚠️ Ask what they do in that time</td></tr>
                                    <tr><td>"Only when needed" / "Mostly use phone"</td><td>❌ REJECT</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <!-- Phone Q3 -->
                        <div class="info-box" style="margin-top: 15px; background: #f8fafc; border: 1px solid #e2e8f0;">
                            <strong style="color: #1e293b; font-size: 1.1em;">Q3: "What do you usually do on your laptop?"</strong>
                            <table class="styled-table" style="margin-top: 10px;">
                                <thead><tr><th>Good Answers (Tech-Savvy Signs)</th><th>Bad Answers (Reject)</th></tr></thead>
                                <tbody>
                                    <tr><td>"Coding, learning, projects"</td><td>"Just college assignments"</td></tr>
                                    <tr><td>"Watch tutorials, practice"</td><td>"Movies, social media"</td></tr>
                                    <tr><td>"Play games, explore software"</td><td>"Nothing much"</td></tr>
                                    <tr><td>"Freelancing, personal projects"</td><td>"Only when required"</td></tr>
                                    <tr><td>"Build websites, design"</td><td>"I prefer using phone"</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <!-- Phone Q4 -->
                        <div class="info-box" style="margin-top: 15px; background: #f8fafc; border: 1px solid #e2e8f0;">
                            <strong style="color: #1e293b; font-size: 1.1em;">Q4: "Have you ever built anything on your own - website, app, design, anything?"</strong>
                            <table class="styled-table" style="margin-top: 10px;">
                                <tbody>
                                    <tr><td>"Yes" → Ask: "What? Tell me briefly"</td><td>✅ If genuine project, continue</td></tr>
                                    <tr><td>"College projects only"</td><td>⚠️ Acceptable, continue</td></tr>
                                    <tr><td>"No, nothing"</td><td>❌ REJECT (no initiative)</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <!-- Phone Q5 -->
                        <div class="info-box" style="margin-top: 15px; background: #f8fafc; border: 1px solid #e2e8f0;">
                            <strong style="color: #1e293b; font-size: 1.1em;">Q5: "If your laptop has a problem - slow, hanging, virus - what do you do?"</strong>
                            <table class="styled-table" style="margin-top: 10px;">
                                <tbody>
                                    <tr><td>"Google it, YouTube, try to fix myself"</td><td>✅ PERFECT - Tech-savvy</td></tr>
                                    <tr><td>"Ask friends who know computers"</td><td>⚠️ Acceptable</td></tr>
                                    <tr><td>"Take to repair shop"</td><td>❌ REJECT (not tech-minded)</td></tr>
                                    <tr><td>"Wait for someone to help"</td><td>❌ REJECT</td></tr>
                                </tbody>
                            </table>
                        </div>

                         <!-- Phone Q6 -->
                        <div class="info-box" style="margin-top: 15px; background: #f8fafc; border: 1px solid #e2e8f0;">
                            <strong style="color: #1e293b; font-size: 1.1em;">Q6: "If selected, can you start within this week?"</strong>
                            <table class="styled-table" style="margin-top: 10px;">
                                <tbody>
                                    <tr><td>"Yes, immediately"</td><td>✅ Great - note it</td></tr>
                                    <tr><td>"Yes, within a week"</td><td>✅ Good</td></tr>
                                    <tr><td>"Need 2 weeks notice"</td><td>⚠️ Acceptable, note it</td></tr>
                                    <tr><td>"Maybe after a month"</td><td>⚠️ Ask why, note it</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="highlight-box" style="margin-top: 20px; background: #fffbeb; border-color: #fbbf24;">
                            <h4 style="color: #92400e;">Phone Screen Decision:</h4>
                            <ul class="styled-list">
                                <li style="color: #92400e;"><strong>5-6 Good answers</strong> = ✅ Send AI App Task</li>
                                <li style="color: #92400e;"><strong>3-4 Good answers</strong> = ⚠️ Send task but watch closely</li>
                                <li style="color: #92400e;"><strong>0-2 Good answers</strong> = ❌ REJECT - Don't proceed</li>
                            </ul>
                        </div>

                        <div class="story-box" style="margin-top: 20px;">
                            <h4>✅ After Phone Screen (If Passed), Say:</h4>
                            <p>"Great! You've cleared the phone screen.<br><br>
                            I'm going to send you a small task on WhatsApp right now.<br>
                            It's a 2-hour challenge to test how fast you can learn.<br><br>
                            Check WhatsApp in 5 minutes.<br>
                            Your 2 hours will start when you confirm receipt.<br><br>
                            Any questions before we proceed?"</p>
                            <p style="margin-top: 10px; background: #fff; padding: 10px; border-left: 3px solid #f59e0b;">
                                <strong>Note:</strong> We do VIDEO CALL interview only AFTER they complete AI App Task successfully. This saves time - no point interviewing someone who can't complete a simple task.
                            </p>
                        </div>


                        <!-- STEP 4: INTERVIEW -->
                        <!-- NOTE: User labeled this Step 4. Step 3 is technically the AI App Task before this. -->
                        <div class="section-divider" style="border-top: 2px dashed #cbd5e1; margin: 40px 0;"></div>
                        <h2 style="color: #0f172a;">🎤 STEP 4: HR VIDEO INTERVIEW (20 min) - After AI App Task</h2>
                        
                        <div class="checklist-grid">
                            <div class="checklist-card">
                                <h4>When to Do This:</h4>
                                <ul class="check-list">
                                    <li>✅ ONLY after candidate completes AI App Task</li>
                                    <li>✅ You've reviewed their submitted app</li>
                                    <li>✅ App quality is acceptable (Score 10+/20)</li>
                                </ul>
                            </div>
                            <div class="checklist-card">
                                <h4>Interview Mode: Video Call (Google Meet / Zoom)</h4>
                                <ul class="styled-list">
                                    <li>No need for in-person.</li>
                                    <li>AI App Task already proved they can DO.</li>
                                    <li>Interview is just to check personality/attitude.</li>
                                </ul>
                            </div>
                        </div>

                        <div class="info-box" style="margin-top: 20px;">
                            <h4>Interview Structure (Total: 20 min)</h4>
                             <table class="styled-table" style="margin-top: 10px;">
                                <thead><tr><th>Section</th><th>Time</th><th>What to Test</th></tr></thead>
                                <tbody>
                                    <tr><td>A. Tech Background</td><td>5 min</td><td>Are they actually tech-savvy?</td></tr>
                                    <tr><td>B. Problem Solving</td><td>5 min</td><td>How do they think?</td></tr>
                                    <tr><td>C. Personality Check</td><td>5 min</td><td>Attitude, honesty</td></tr>
                                    <tr><td>D. Final Questions</td><td>5 min</td><td>Availability, expectations</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <!-- Section A -->
                         <div style="margin-top: 30px;">
                            <h3 style="color: #1e3a8a; border-bottom: 2px solid #1e3a8a; padding-bottom: 5px; display: inline-block;">SECTION A: TECH BACKGROUND (5 min)</h3>
                            
                            <div class="story-box" style="margin-top: 15px;">
                                <strong>Script:</strong> "Let's start by understanding your tech background. I'll ask some simple questions."
                            </div>

                            <p style="margin-top: 15px;"><strong>A1: "Since when have you been using computers regularly?"</strong></p>
                            <table class="styled-table">
                                <tbody>
                                    <tr><td>"Since childhood / school"</td><td>5</td></tr>
                                    <tr><td>"Since college (3-4 years)"</td><td>4</td></tr>
                                    <tr><td>"Not regularly"</td><td>1 → ❌ RED FLAG</td></tr>
                                </tbody>
                            </table>

                            <p style="margin-top: 15px;"><strong>A2: "Do you play any video games? Which ones?"</strong> (Gamers = tech comfortable)</p>
                            <table class="styled-table">
                                <tbody>
                                    <tr><td>PC/Console games (any type)</td><td>5</td></tr>
                                    <tr><td>Mobile games regularly</td><td>3</td></tr>
                                    <tr><td>"No, I don't play games"</td><td>1</td></tr>
                                </tbody>
                            </table>

                            <p style="margin-top: 15px;"><strong>A3: "What software/tools do you know? Just name them."</strong></p>
                            <table class="styled-table">
                                <thead><tr><th>Good Signs</th><th>Bad Signs</th></tr></thead>
                                <tbody>
                                    <tr><td>VS Code, Figma, Photoshop, Git, Coding</td><td>"Only MS Word, Excel", "I don't know many"</td></tr>
                                </tbody>
                            </table>

                             <p style="margin-top: 15px;"><strong>A4: "Have you ever installed software, done troubleshooting...?"</strong></p>
                             <table class="styled-table"><tbody><tr><td>Gives specific example</td><td>5</td></tr><tr><td>"No, I'm not good with such things"</td><td>1 → ❌ RED FLAG</td></tr></tbody></table>

                             <p style="margin-top: 15px;"><strong>A5: "What have you built or created on computer?"</strong></p>
                             <table class="styled-table"><tbody><tr><td>Shows actual work / portfolio</td><td>5</td></tr><tr><td>"Nothing really"</td><td>1 → ❌ RED FLAG</td></tr></tbody></table>
                             
                             <div class="info-box teal" style="margin-top: 10px;">
                                 <strong>Section A Score:</strong> 20-25 (Strong), 10-14 (Weak), <10 (Reject)
                             </div>
                        </div>


                         <!-- Section B -->
                         <div style="margin-top: 40px;">
                            <h3 style="color: #1e3a8a; border-bottom: 2px solid #1e3a8a; padding-bottom: 5px; display: inline-block;">SECTION B: PROBLEM SOLVING (5 min)</h3>
                            <div class="story-box" style="margin-top: 15px;">
                                <strong>Script:</strong> "Now I'll give you some situations. Tell me what you would do."
                            </div>
                            
                            <!-- B1 -->
                            <div class="info-box" style="margin-top: 15px; background: #fffcf4;">
                                <strong>B1: "You're given a task you've never done before. What do you do?"</strong>
                                <table class="styled-table">
                                    <thead><tr><th>Good Answer (Score 5)</th><th>Bad Answer (Score 1-2)</th></tr></thead>
                                    <tbody>
                                        <tr><td>"Google it, YouTube, try myself first"</td><td>"Ask someone immediately"</td></tr>
                                        <tr><td>"Use ChatGPT to understand, then practice"</td><td>"Tell them I don't know how"</td></tr>
                                    </tbody>
                                </table>
                            </div>

                             <!-- B2 -->
                            <div class="info-box" style="margin-top: 15px; background: #fffcf4;">
                                <strong>B2: "You're stuck on something for 2 hours. Nothing is working. What's your next step?"</strong>
                                <table class="styled-table">
                                    <tbody>
                                        <tr><td>Good: "Try different approaches, Google more", "Ask a senior with what I've tried"</td><td>Bad: "Keep doing same thing", "Give up"</td></tr>
                                    </tbody>
                                </table>
                            </div>

                             <!-- B4 -->
                            <div class="info-box" style="margin-top: 15px; background: #fffcf4;">
                                <strong>B4: "Your computer crashes and you lose 3 hours of work. What do you do?"</strong>
                                <table class="styled-table">
                                    <tbody>
                                        <tr><td>Good: "Redo work fast", "Set up auto-save for future"</td><td>Bad: "Blame computer", "Complain", "Not my fault"</td></tr>
                                    </tbody>
                                </table>
                            </div>
                         </div>


                        <!-- Section C -->
                         <div style="margin-top: 40px;">
                            <h3 style="color: #1e3a8a; border-bottom: 2px solid #1e3a8a; padding-bottom: 5px; display: inline-block;">SECTION C: PERSONALITY CHECK (5 min)</h3>
                            
                            <p style="margin-top: 15px;"><strong>C1: "Tell me about a time you failed at something."</strong></p>
                            <p>Good: Admits failure, explains learning. Bad: "I never fail" (Red Flag).</p>

                            <p style="margin-top: 15px;"><strong>C2: "Why did you leave your last job/internship?"</strong></p>
                            <p>Good: Growth. Bad: Badmouthing boss (Red Flag).</p>

                            <p style="margin-top: 15px;"><strong>C4: "Rate yourself 1-10 on web development skills."</strong></p>
                            <p>10/10 = Red Flag (Overconfident). 6-8 = Good/Honest.</p>

                            <div class="info-box danger" style="margin-top: 15px;">
                                <strong>C5: HONESTY TRAP - "Have you used Framer Motion for animations?"</strong><br>
                                (Real tool, but advanced).<br>
                                If they say "Yes, use it all the time" without proof → <strong>LYING</strong>.
                            </div>
                         </div>
                         
                         <!-- Section D -->
                         <div style="margin-top: 40px;">
                            <h3 style="color: #1e3a8a; border-bottom: 2px solid #1e3a8a; padding-bottom: 5px; display: inline-block;">SECTION D: FINAL QUESTIONS</h3>
                            <ul class="styled-list">
                                <li>D1: "Do you have any questions? (Good candidates ask about work/growth)</li>
                                <li>D2: "When can you start?"</li>
                                <li>D3: "Expected stipend/salary?"</li>
                                <li>D4: "Applying elsewhere?"</li>
                            </ul>
                        </div>
                        
                        <div class="story-box" style="margin-top: 30px; background: #f0fdf4; border-color: #16a34a;">
                            <h4 style="color: #15803d;">✅ If Candidate PASSED Interview:</h4>
                            <p>"Thank you! Your interview went well.<br>
                            You've already proven yourself with the AI App task.<br>
                            Now there's one final task: Shopify Store Replication.<br>
                            It's a 24-hour task. You'll receive details on WhatsApp shortly."</p>
                        </div>


                        <!-- STEP 3: AI APP TASK -->
                        <div class="section-divider" style="border-top: 2px dashed #cbd5e1; margin: 40px 0;"></div>
                        <h2 style="color: #0f172a;">📱 STEP 3: AI APP TASK (2 Hours) - Before Interview</h2>
                        <p>Given RIGHT AFTER phone screen. Interview ONLY if they complete this.</p>
                        
                        <div class="info-box" style="background: #27272a; color: #fff; font-family: monospace; padding: 25px; border-radius: 8px; margin-top: 20px;">
                            <h3 style="color: #4ade80; border-bottom: 1px solid #52525b; padding-bottom: 10px;">🚀 DIGITAL HEROES - AI APP CHALLENGE</h3>
                            
                            <p style="margin-top: 15px;"><strong>Hi [Name]! Congratulations on clearing the interview! 🎉</strong></p>
                            
                            <p style="margin-top: 20px;"><strong>⏰ DEADLINE: 2 HOURS from now</strong></p>
                            
                            <p style="margin-top: 20px; color: #fbbf24;"><strong>📋 YOUR TASK:</strong></p>
                            
                            <p><strong>STEP 1: INSTALL FIREBASE STUDIO (30 min)</strong><br>
                            1. Go to: firebase.studio<br>
                            2. Login with Google<br>
                            3. Explore the AI Interface</p>
                            
                            <p style="margin-top: 15px;"><strong>STEP 2: BUILD A USEFUL APP (1.5 hours)</strong><br>
                            Build ANY useful app (Expense Tracker, Todo, Habit Tracker, etc.).<br>
                            Requirements: Must be USEFUL, GOOD DESIGN, and FUNCTIONAL.</p>
                            
                            <p style="margin-top: 15px;"><strong>STEP 3: HOST ON VERCEL</strong><br>
                            Deploy app to Vercel and get live link.</p>
                            
                            <p style="margin-top: 20px; color: #fbbf24;"><strong>📤 WHAT TO SUBMIT:</strong><br>
                            1. Vercel Link<br>
                            2. What app you built & why<br>
                            3. Screenshot</p>
                            
                            <p style="margin-top: 20px;"><strong>⏱️ Your 2 hours start NOW!</strong></p>
                        </div>
                        
                         <div class="info-box" style="margin-top: 20px; background: #fff;">
                            <h4>HR Evaluation Checklist:</h4>
                            <p><strong>Did they submit?</strong> No = No Shopify task.<br>
                            <strong>App quality:</strong> Useful? Good design? Works?<br>
                            <strong>Decision:</strong> Submitted + Score 15+ = ✅ Send Shopify Task.</p>
                        </div>


                        <!-- STEP 5: SHOPIFY TASK -->
                        <div class="section-divider" style="border-top: 2px dashed #cbd5e1; margin: 40px 0;"></div>
                        <h2 style="color: #0f172a;">📱 STEP 5: SHOPIFY TRIAL TASK (1 Day)</h2>
                        <p><strong>⚠️ ONLY send to candidates who completed Al App Task</strong></p>
                        
                        <div class="info-box" style="background: #fff7ed; border: 1px solid #fed7aa; color: #9a3412; font-family: monospace; padding: 25px; border-radius: 8px; margin-top: 20px;">
                            <h3 style="color: #c2410c;">🎯 DIGITAL HEROES - SHOPIFY TRIAL TASK</h3>
                            <p><strong>⏰ DEADLINE: 24 HOURS. NO EXTENSIONS.</strong></p>
                            
                            <p style="margin-top: 15px;"><strong>📋 TASK: REPLICATE A SHOPIFY STORE</strong><br>
                            🔗 Reference Store: [Pick ONE: eyeamcreation.com, nutripium.com, theawwshop.com]</p>
                            
                            <p style="margin-top: 15px;"><strong>✅ WHAT TO REPLICATE:</strong><br>
                            Homepage (exact sections), Colors, Fonts, Header, Footer, 5 Products, Mobile Layout.</p>
                            
                            <p style="margin-top: 15px;"><strong>💡 TOOLS:</strong> Koala Inspector, Inspect Element, ChatGPT, YouTube.</p>
                            
                            <p style="margin-top: 15px;"><strong>📤 SUBMIT:</strong> Partner Account Details, Store Preview Link, Screenshots.</p>
                        </div>
                        
                        
                        <!-- EMAIL TEMPLATES -->
                        <div class="section-divider" style="border-top: 2px dashed #cbd5e1; margin: 40px 0;"></div>
                        <h2 style="color: #0f172a;">📝 EMAIL TEMPLATES FOR HR</h2>
                        
                        <div class="highlight-box" style="margin-top: 15px;">
                            <h4>Rejection Email:</h4>
                            <p style="font-family: monospace; color: #4b5563;">
                                "After careful consideration, we've decided to move forward with other candidates... We appreciate your interest..."
                            </p>
                        </div>
                         <div class="highlight-box" style="margin-top: 15px;">
                            <h4>Hiring Confirmation:</h4>
                            <p style="font-family: monospace; color: #166534;">
                                "Congratulations! You've successfully completed the trial.<br>
                                We're excited to have you join Digital Heroes... Start Date: [Date]."
                            </p>
                        </div>
                        
                        <div class="info-box success" style="margin-top: 30px; text-align: center;">
                            <h3>🏆 COMPLETE FLOW SUMMARY</h3>
                            <p style="font-size: 1.1em; margin-top: 10px;">
                                Application (2 min) → Phone Screen (10 min) → <strong>AI App Task (2 hr)</strong> → Video Interview (20 min) → Shopify Task (24 hr) → <strong>HIRE</strong>
                            </p>
                        </div>

                    </div>
                </section>
`;

// Helper to replace content by ID using regex because we are treating it as string
function reinjectGuide() {
    try {
        let content = fs.readFileSync(filePath, 'utf8');

        // Regex to find the previously injected section
        // It starts with <section class="critical-alert" id="dev-hiring-guide"
        // And ends with </section>
        // We will be very careful. 
        // Best approach: Find the start tag, find the next </section> closing tag, and replace everything in between.

        const startMarker = '<section class="critical-alert" id="dev-hiring-guide"';
        const endMarker = '</section>';

        const startIndex = content.indexOf(startMarker);

        if (startIndex !== -1) {
            // Find the closing tag AFTER the start index
            // Since there might be nested sections (unlikely here but possible in HTML), we should be careful.
            // But for our specific injected code, we know it ends with </section> and doesn't contain nested sections.
            // However, the USER's code might have had nested tags. 
            // The previous injection was "clean" so it should be find.

            // Let's look for the next </section> after startIndex
            const contentAfterStart = content.substring(startIndex);
            const relativeEndIndex = contentAfterStart.indexOf(endMarker);

            if (relativeEndIndex !== -1) {
                const totalEndIndex = startIndex + relativeEndIndex + endMarker.length;

                const newContent = content.substring(0, startIndex) + guideHTML + content.substring(totalEndIndex);

                fs.writeFileSync(filePath, newContent, 'utf8');
                console.log('Successfully re-injected detailed Developer Hiring Guide (V2).');
            } else {
                console.error('Could not find closing </section> tag for the hiring guide.');
            }
        } else {
            console.error('Target section id="dev-hiring-guide" not found! Did you remove it?');
        }

    } catch (e) {
        console.error(`Error: ${e.message}`);
    }
}

reinjectGuide();
