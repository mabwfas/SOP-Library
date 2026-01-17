
const fs = require('fs');

const filePath = String.raw`c:\Users\reals\.gemini\antigravity\playground\shimmering-einstein\sops\hr-sop.html`;

// CSS Helper for black text
const TEXT_BLACK = 'style="color: #1e293b !important;"';
const BG_WHITE = 'style="background: #ffffff !important;"';
const TABLE_STYLE = 'style="width: 100%; border-collapse: collapse; background: white; color: #1e293b;"';
const TH_STYLE = 'style="background: #e2e8f0; color: #1e293b; padding: 12px; border: 1px solid #cbd5e1; text-align: left;"';
const TD_STYLE = 'style="background: #ffffff; color: #1e293b; padding: 12px; border: 1px solid #cbd5e1;"';

// Special styles for the Red/Important section
const TH_RED_STYLE = 'style="background: #9f1239; color: white; padding: 12px; border: 1px solid #881337; text-align: left;"';
const TD_RED_STYLE = 'style="background: white; color: #881337; padding: 12px; border: 1px solid #fecdd3;"';


const guideHTML = `
                <!-- NEW: DEVELOPER HIRING GUIDE (Detailed V3 - Fixed Visibility) -->
                <section class="critical-alert" id="dev-hiring-guide" style="background: white; border: 2px solid var(--primary); padding: 0;">
                    
                    <!-- Header -->
                    <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); padding: 30px; text-align: center; color: white;">
                        <h2 style="color: white; margin: 0; font-size: 2.2em; text-shadow: 0 2px 4px rgba(0,0,0,0.2);">🎯 DIGITAL HEROES - HR HIRING GUIDE</h2>
                        <h3 style="color: #bfdbfe; margin-top: 10px; font-size: 1.4em;">Simple Step-by-Step Process for Hiring Web Developers</h3>
                        <p style="margin-top: 10px; font-weight: 500; opacity: 0.9; color: white;">Easy to Follow | Less Time Consuming | Find Tech-Savvy Gems</p>
                    </div>

                    <div style="padding: 30px;">

                        <!-- IMPORTANT SECTION -->
                        <div class="highlight-box" style="background: #fff1f2; border-left: 5px solid #e11d48; padding: 20px;">
                            <h3 style="color: #be123c;">📌 IMPORTANT: READ THIS FIRST</h3>
                            
                            <h4 style="margin-top: 15px; color: #881337;">Who Are We Hiring?</h4>
                            <table class="styled-table" style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                                <thead>
                                    <tr>
                                        <th ${TH_RED_STYLE}>What</th>
                                        <th ${TH_RED_STYLE}>Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td ${TD_RED_STYLE}><strong>Role</strong></td><td ${TD_RED_STYLE}>Web Developer (Trainee/Intern)</td></tr>
                                    <tr><td ${TD_RED_STYLE}><strong>Training</strong></td><td ${TD_RED_STYLE}>Everyone gets same Shopify training first</td></tr>
                                    <tr><td ${TD_RED_STYLE}><strong>After Training</strong></td><td ${TD_RED_STYLE}>Assigned to: Shopify Dev / Designer / Full Stack / PM based on aptitude</td></tr>
                                    <tr><td ${TD_RED_STYLE}><strong>Key Filter</strong></td><td ${TD_RED_STYLE}>Must be <strong>TECH-SAVVY</strong> (uses computers daily, figures out tech easily)</td></tr>
                                    <tr><td ${TD_RED_STYLE}><strong>Location</strong></td><td ${TD_RED_STYLE}>Remote/Hybrid - Location NOT a barrier</td></tr>
                                </tbody>
                            </table>

                            <h4 style="margin-top: 20px; color: #881337;">Why Tech-Savvy Matters</h4>
                            <div style="background: #fff; padding: 15px; border-radius: 6px; border: 1px solid #fecdd3; color: #881337; font-family: monospace; font-weight: bold;">
                                Tech-Savvy Person → Learns fast → Solves problems → Needs less hand-holding → PRODUCTIVE<br><br>
                                Non-Tech Person → Struggles with basics → Gets stuck → Needs constant help → BURDEN
                            </div>
                        </div>

                        <!-- HIRING PROCESS OVERVIEW -->
                        <div class="info-box" style="background: #eff6ff; border-left: 5px solid #2563eb; margin-top: 30px; padding: 20px;">
                            <h3 style="color: #1e40af;">🔄 HIRING PROCESS OVERVIEW</h3>
                            <div style="background: white; padding: 15px; border-radius: 8px; margin-top: 15px; color: #1e3a8a; font-family: monospace; line-height: 1.6; border: 1px solid #bfdbfe;">
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

                            <div style="background: #dbeafe; padding: 15px; border-radius: 6px; margin-top: 15px; color: #1e40af; border: 1px solid #93c5fd;">
                                <strong>KEY INSIGHT:</strong> We give AI App Task <strong>BEFORE</strong> interview. Why?<br>
                                <ul style="margin-top: 5px; padding-left: 20px; color: #1e40af;">
                                    <li>Anyone can TALK well in interview</li>
                                    <li>AI App Task tests who can actually DO</li>
                                    <li>No point interviewing someone who can't complete a 2-hour task</li>
                                    <li>Saves HR time - interview only serious candidates</li>
                                </ul>
                                <p style="margin-top: 10px; color: #1e40af;"><strong>HR's Job:</strong> Step 1, 2, 3, 4 (filter out wrong people efficiently)</p>
                            </div>
                        </div>

                        <!-- STEP 1: APP FILTER -->
                        <div class="section-divider" style="border-top: 2px dashed #cbd5e1; margin: 40px 0;"></div>
                        <h2 style="color: #0f172a;">✅ STEP 1: APPLICATION FILTER (2 min/person)</h2>
                        <h4 style="color: #475569;">HR Checklist - Just Tick Yes/No</h4>
                        
                        <table class="styled-table" ${TABLE_STYLE}>
                            <thead>
                                <tr>
                                    <th ${TH_STYLE}>Question</th>
                                    <th ${TH_STYLE}>YES = Continue</th>
                                    <th ${TH_STYLE}>NO = Reject</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td ${TD_STYLE}>Can work remotely/hybrid as needed?</td><td ${TD_STYLE}>✅</td><td ${TD_STYLE}>❌ REJECT</td></tr>
                                <tr><td ${TD_STYLE}>Has portfolio OR any work samples?</td><td ${TD_STYLE}>✅</td><td ${TD_STYLE}>❌ REJECT</td></tr>
                                <tr><td ${TD_STYLE}>Resume is complete (not half-empty)?</td><td ${TD_STYLE}>✅</td><td ${TD_STYLE}>❌ REJECT</td></tr>
                                <tr><td ${TD_STYLE}>Has own laptop?</td><td ${TD_STYLE}>✅</td><td ${TD_STYLE}>❌ REJECT</td></tr>
                            </tbody>
                        </table>
                        <p style="background: #fee2e2; color: #991b1b; padding: 10px; border-radius: 4px; margin-top: 10px; font-weight: bold; text-align: center; border: 1px solid #fca5a5;">If ANY answer is NO → REJECT immediately. Don't waste time.</p>


                        <!-- STEP 2: PHONE SCREEN -->
                        <div class="section-divider" style="border-top: 2px dashed #cbd5e1; margin: 40px 0;"></div>
                        <h2 style="color: #0f172a;">📞 STEP 2: PHONE SCREEN (10 min)</h2>
                        <p style="color: #334155;"><strong>Purpose:</strong> Check if worth calling for interview</p>

                        <div class="story-box" style="margin-top: 15px; background: #f0fdf4; border: 1px solid #86efac; color: #166534; padding: 15px;">
                            <h4 style="color: #166534;">📝 Script for HR:</h4>
                            <p style="color: #166534;">"Hi [Name], this is [Your Name] from Digital Heroes.<br><br>
                            I saw your application for the Web Developer role.<br>
                            I have a few quick questions - will take 5-10 minutes.<br>
                            Is this a good time?"<br><br>
                            <em>[If yes, continue. If no, schedule call.]</em></p>
                        </div>

                        <h4 style="margin-top: 25px; color: #334155;">Questions to Ask (Exactly These):</h4>

                        <!-- Phone Q1 -->
                        <div class="info-box" style="margin-top: 15px; background: #f8fafc; border: 1px solid #e2e8f0; padding: 15px;">
                            <strong style="color: #1e293b; font-size: 1.1em;">Q1: "Do you have your own laptop?"</strong>
                            <table class="styled-table" ${TABLE_STYLE}>
                                <tbody>
                                    <tr><td ${TD_STYLE}>"Yes, I have a laptop"</td><td ${TD_STYLE}>✅ Continue</td></tr>
                                    <tr><td ${TD_STYLE}>"No, but I can arrange"</td><td ${TD_STYLE}>⚠️ Ask: "Within how many days?"</td></tr>
                                    <tr><td ${TD_STYLE}>"No, I'll use office computer"</td><td ${TD_STYLE}>❌ REJECT (shows dependency)</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <!-- Phone Q2 -->
                        <div class="info-box" style="margin-top: 15px; background: #f8fafc; border: 1px solid #e2e8f0; padding: 15px;">
                            <strong style="color: #1e293b; font-size: 1.1em;">Q2: "How many hours per day do you use a computer/laptop - not phone, computer?"</strong>
                            <table class="styled-table" ${TABLE_STYLE}>
                                <tbody>
                                    <tr><td ${TD_STYLE}>"4+ hours daily"</td><td ${TD_STYLE}>✅ Continue</td></tr>
                                    <tr><td ${TD_STYLE}>"2-3 hours"</td><td ${TD_STYLE}>⚠️ Ask what they do in that time</td></tr>
                                    <tr><td ${TD_STYLE}>"Only when needed" / "Mostly use phone"</td><td ${TD_STYLE}>❌ REJECT</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <!-- Phone Q3 -->
                        <div class="info-box" style="margin-top: 15px; background: #f8fafc; border: 1px solid #e2e8f0; padding: 15px;">
                            <strong style="color: #1e293b; font-size: 1.1em;">Q3: "What do you usually do on your laptop?"</strong>
                            <table class="styled-table" ${TABLE_STYLE}>
                                <thead>
                                    <tr>
                                        <th ${TH_STYLE}>Good Answers (Tech-Savvy Signs)</th>
                                        <th ${TH_STYLE}>Bad Answers (Reject)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td ${TD_STYLE}>"Coding, learning, projects"</td><td ${TD_STYLE}>"Just college assignments"</td></tr>
                                    <tr><td ${TD_STYLE}>"Watch tutorials, practice"</td><td ${TD_STYLE}>"Movies, social media"</td></tr>
                                    <tr><td ${TD_STYLE}>"Play games, explore software"</td><td ${TD_STYLE}>"Nothing much"</td></tr>
                                    <tr><td ${TD_STYLE}>"Freelancing, personal projects"</td><td ${TD_STYLE}>"Only when required"</td></tr>
                                    <tr><td ${TD_STYLE}>"Build websites, design"</td><td ${TD_STYLE}>"I prefer using phone"</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <!-- Phone Q4 -->
                        <div class="info-box" style="margin-top: 15px; background: #f8fafc; border: 1px solid #e2e8f0; padding: 15px;">
                            <strong style="color: #1e293b; font-size: 1.1em;">Q4: "Have you ever built anything on your own - website, app, design, anything?"</strong>
                            <table class="styled-table" ${TABLE_STYLE}>
                                <tbody>
                                    <tr><td ${TD_STYLE}>"Yes" → Ask: "What? Tell me briefly"</td><td ${TD_STYLE}>✅ If genuine project, continue</td></tr>
                                    <tr><td ${TD_STYLE}>"College projects only"</td><td ${TD_STYLE}>⚠️ Acceptable, continue</td></tr>
                                    <tr><td ${TD_STYLE}>"No, nothing"</td><td ${TD_STYLE}>❌ REJECT (no initiative)</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <!-- Phone Q5 -->
                        <div class="info-box" style="margin-top: 15px; background: #f8fafc; border: 1px solid #e2e8f0; padding: 15px;">
                            <strong style="color: #1e293b; font-size: 1.1em;">Q5: "If your laptop has a problem - slow, hanging, virus - what do you do?"</strong>
                            <table class="styled-table" ${TABLE_STYLE}>
                                <tbody>
                                    <tr><td ${TD_STYLE}>"Google it, YouTube, try to fix myself"</td><td ${TD_STYLE}>✅ PERFECT - Tech-savvy</td></tr>
                                    <tr><td ${TD_STYLE}>"Ask friends who know computers"</td><td ${TD_STYLE}>⚠️ Acceptable</td></tr>
                                    <tr><td ${TD_STYLE}>"Take to repair shop"</td><td ${TD_STYLE}>❌ REJECT (not tech-minded)</td></tr>
                                    <tr><td ${TD_STYLE}>"Wait for someone to help"</td><td ${TD_STYLE}>❌ REJECT</td></tr>
                                </tbody>
                            </table>
                        </div>

                         <!-- Phone Q6 -->
                        <div class="info-box" style="margin-top: 15px; background: #f8fafc; border: 1px solid #e2e8f0; padding: 15px;">
                            <strong style="color: #1e293b; font-size: 1.1em;">Q6: "If selected, can you start within this week?"</strong>
                            <table class="styled-table" ${TABLE_STYLE}>
                                <tbody>
                                    <tr><td ${TD_STYLE}>"Yes, immediately"</td><td ${TD_STYLE}>✅ Great - note it</td></tr>
                                    <tr><td ${TD_STYLE}>"Yes, within a week"</td><td ${TD_STYLE}>✅ Good</td></tr>
                                    <tr><td ${TD_STYLE}>"Need 2 weeks notice"</td><td ${TD_STYLE}>⚠️ Acceptable, note it</td></tr>
                                    <tr><td ${TD_STYLE}>"Maybe after a month"</td><td ${TD_STYLE}>⚠️ Ask why, note it</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="highlight-box" style="margin-top: 20px; background: #fffbeb; border-color: #fbbf24; padding: 15px; border: 1px solid #fcd34d;">
                            <h4 style="color: #92400e;">Phone Screen Decision:</h4>
                            <ul class="styled-list" style="color: #92400e;">
                                <li><strong>5-6 Good answers</strong> = ✅ Send AI App Task</li>
                                <li><strong>3-4 Good answers</strong> = ⚠️ Send task but watch closely</li>
                                <li><strong>0-2 Good answers</strong> = ❌ REJECT - Don't proceed</li>
                            </ul>
                        </div>

                        <div class="story-box" style="margin-top: 20px; background: #fff; border: 1px solid #e5e7eb; padding: 20px;">
                            <h4 style="color: #1e293b;">✅ After Phone Screen (If Passed), Say:</h4>
                            <p style="color: #334155;">"Great! You've cleared the phone screen.<br><br>
                            I'm going to send you a small task on WhatsApp right now.<br>
                            It's a 2-hour challenge to test how fast you can learn.<br><br>
                            Check WhatsApp in 5 minutes.<br>
                            Your 2 hours will start when you confirm receipt.<br><br>
                            Any questions before we proceed?"</p>
                            <p style="margin-top: 10px; background: #fff7ed; padding: 10px; border-left: 3px solid #f97316; color: #9a3412;">
                                <strong>Note:</strong> We do VIDEO CALL interview only AFTER they complete AI App Task successfully. This saves time - no point interviewing someone who can't complete a simple task.
                            </p>
                        </div>


                        <!-- STEP 4: INTERVIEW -->
                        <div class="section-divider" style="border-top: 2px dashed #cbd5e1; margin: 40px 0;"></div>
                        <h2 style="color: #0f172a;">🎤 STEP 4: HR VIDEO INTERVIEW (20 min) - After AI App Task</h2>
                        
                        <div class="checklist-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                            <div class="checklist-card" style="background: white; padding: 15px; border: 1px solid #e2e8f0; border-radius: 8px;">
                                <h4 style="color: #1e293b;">When to Do This:</h4>
                                <ul class="check-list" style="color: #334155;">
                                    <li>✅ ONLY after candidate completes AI App Task</li>
                                    <li>✅ You've reviewed their submitted app</li>
                                    <li>✅ App quality is acceptable (Score 10+/20)</li>
                                </ul>
                            </div>
                            <div class="checklist-card" style="background: white; padding: 15px; border: 1px solid #e2e8f0; border-radius: 8px;">
                                <h4 style="color: #1e293b;">Interview Mode: Video Call</h4>
                                <ul class="styled-list" style="color: #334155;">
                                    <li>No need for in-person.</li>
                                    <li>AI App Task already proved they can DO.</li>
                                    <li>Interview is just to check personality/attitude.</li>
                                </ul>
                            </div>
                        </div>

                        <div class="info-box" style="margin-top: 20px; padding: 15px; border: 1px solid #e2e8f0; background: #f8fafc;">
                            <h4 style="color: #1e293b;">Interview Structure (Total: 20 min)</h4>
                             <table class="styled-table" ${TABLE_STYLE}>
                                <thead>
                                    <tr>
                                        <th ${TH_STYLE}>Section</th>
                                        <th ${TH_STYLE}>Time</th>
                                        <th ${TH_STYLE}>What to Test</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td ${TD_STYLE}>A. Tech Background</td><td ${TD_STYLE}>5 min</td><td ${TD_STYLE}>Are they actually tech-savvy?</td></tr>
                                    <tr><td ${TD_STYLE}>B. Problem Solving</td><td ${TD_STYLE}>5 min</td><td ${TD_STYLE}>How do they think?</td></tr>
                                    <tr><td ${TD_STYLE}>C. Personality Check</td><td ${TD_STYLE}>5 min</td><td ${TD_STYLE}>Attitude, honesty</td></tr>
                                    <tr><td ${TD_STYLE}>D. Final Questions</td><td ${TD_STYLE}>5 min</td><td ${TD_STYLE}>Availability, expectations</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <!-- Section A -->
                         <div style="margin-top: 30px;">
                            <h3 style="color: #1e3a8a; border-bottom: 2px solid #1e3a8a; padding-bottom: 5px; display: inline-block;">SECTION A: TECH BACKGROUND (5 min)</h3>
                            
                            <div class="story-box" style="margin-top: 15px; padding: 15px; background: #fff; border: 1px solid #e2e8f0;">
                                <strong style="color: #1e293b;">Script:</strong> <span style="color: #334155;">"Let's start by understanding your tech background. I'll ask some simple questions."</span>
                            </div>

                            <p style="margin-top: 15px; color: #1e293b;"><strong>A1: "Since when have you been using computers regularly?"</strong></p>
                            <table class="styled-table" ${TABLE_STYLE}>
                                <tbody>
                                    <tr><td ${TD_STYLE}>"Since childhood / school"</td><td ${TD_STYLE}>5</td></tr>
                                    <tr><td ${TD_STYLE}>"Since college (3-4 years)"</td><td ${TD_STYLE}>4</td></tr>
                                    <tr><td ${TD_STYLE}>"Not regularly"</td><td ${TD_STYLE}>1 → ❌ RED FLAG</td></tr>
                                </tbody>
                            </table>

                            <p style="margin-top: 15px; color: #1e293b;"><strong>A2: "Do you play any video games? Which ones?"</strong> (Gamers = tech comfortable)</p>
                            <table class="styled-table" ${TABLE_STYLE}>
                                <tbody>
                                    <tr><td ${TD_STYLE}>PC/Console games (any type)</td><td ${TD_STYLE}>5</td></tr>
                                    <tr><td ${TD_STYLE}>Mobile games regularly</td><td ${TD_STYLE}>3</td></tr>
                                    <tr><td ${TD_STYLE}>"No, I don't play games"</td><td ${TD_STYLE}>1</td></tr>
                                </tbody>
                            </table>

                            <p style="margin-top: 15px; color: #1e293b;"><strong>A3: "What software/tools do you know? Just name them."</strong></p>
                            <table class="styled-table" ${TABLE_STYLE}>
                                <thead><tr><th ${TH_STYLE}>Good Signs</th><th ${TH_STYLE}>Bad Signs</th></tr></thead>
                                <tbody>
                                    <tr><td ${TD_STYLE}>VS Code, Figma, Photoshop, Git, Coding</td><td ${TD_STYLE}>"Only MS Word, Excel", "I don't know many"</td></tr>
                                </tbody>
                            </table>

                             <p style="margin-top: 15px; color: #1e293b;"><strong>A4: "Have you ever installed software, done troubleshooting...?"</strong></p>
                             <table class="styled-table" ${TABLE_STYLE}>
                                <tbody>
                                    <tr><td ${TD_STYLE}>Gives specific example</td><td ${TD_STYLE}>5</td></tr>
                                    <tr><td ${TD_STYLE}>"No, I'm not good with such things"</td><td ${TD_STYLE}>1 → ❌ RED FLAG</td></tr>
                                </tbody>
                             </table>
                             
                             <div class="info-box teal" style="margin-top: 10px; background: #f0fdfa; color: #0f766e; padding: 10px; border: 1px solid #ccfbf1;">
                                 <strong>Section A Score:</strong> 20-25 (Strong), 10-14 (Weak), <10 (Reject)
                             </div>
                        </div>


                         <!-- Section B -->
                         <div style="margin-top: 40px;">
                            <h3 style="color: #1e3a8a; border-bottom: 2px solid #1e3a8a; padding-bottom: 5px; display: inline-block;">SECTION B: PROBLEM SOLVING (5 min)</h3>
                            <div class="story-box" style="margin-top: 15px; padding: 15px; background: #fff; border: 1px solid #e2e8f0;">
                                <strong style="color: #1e293b;">Script:</strong> <span style="color: #334155;">"Now I'll give you some situations. Tell me what you would do."</span>
                            </div>
                            
                            <!-- B1 -->
                            <div class="info-box" style="margin-top: 15px; background: #fffcf4; border: 1px solid #fde68a; padding: 15px;">
                                <strong style="color: #92400e;">B1: "You're given a task you've never done before. What do you do?"</strong>
                                <table class="styled-table" ${TABLE_STYLE}>
                                    <thead><tr><th ${TH_STYLE}>Good Answer (Score 5)</th><th ${TH_STYLE}>Bad Answer (Score 1-2)</th></tr></thead>
                                    <tbody>
                                        <tr><td ${TD_STYLE}>"Google it, YouTube, try myself first"</td><td ${TD_STYLE}>"Ask someone immediately"</td></tr>
                                        <tr><td ${TD_STYLE}>"Use ChatGPT to understand, then practice"</td><td ${TD_STYLE}>"Tell them I don't know how"</td></tr>
                                    </tbody>
                                </table>
                            </div>

                             <!-- B2 -->
                            <div class="info-box" style="margin-top: 15px; background: #fffcf4; border: 1px solid #fde68a; padding: 15px;">
                                <strong style="color: #92400e;">B2: "You're stuck on something for 2 hours. Nothing is working. What's your next step?"</strong>
                                <table class="styled-table" ${TABLE_STYLE}>
                                    <tbody>
                                        <tr><td ${TD_STYLE}>Good: "Try different approaches, Google more", "Ask a senior with what I've tried"</td><td ${TD_STYLE}>Bad: "Keep doing same thing", "Give up"</td></tr>
                                    </tbody>
                                </table>
                            </div>
                         </div>


                        <!-- Section C -->
                         <div style="margin-top: 40px;">
                            <h3 style="color: #1e3a8a; border-bottom: 2px solid #1e3a8a; padding-bottom: 5px; display: inline-block;">SECTION C: PERSONALITY CHECK (5 min)</h3>
                            
                            <p style="margin-top: 15px; color: #1e293b;"><strong>C1: "Tell me about a time you failed at something."</strong></p>
                            <p style="color: #334155;">Good: Admits failure, explains learning. Bad: "I never fail" (Red Flag).</p>

                            <p style="margin-top: 15px; color: #1e293b;"><strong>C2: "Why did you leave your last job/internship?"</strong></p>
                            <p style="color: #334155;">Good: Growth. Bad: Badmouthing boss (Red Flag).</p>

                            <p style="margin-top: 15px; color: #1e293b;"><strong>C4: "Rate yourself 1-10 on web development skills."</strong></p>
                            <p style="color: #334155;">10/10 = Red Flag (Overconfident). 6-8 = Good/Honest.</p>

                            <div class="info-box danger" style="margin-top: 15px; background: #fef2f2; border: 1px solid #fca5a5; color: #991b1b; padding: 15px;">
                                <strong>C5: HONESTY TRAP - "Have you used Framer Motion for animations?"</strong><br>
                                (Real tool, but advanced).<br>
                                If they say "Yes, use it all the time" without proof → <strong>LYING</strong>.
                            </div>
                         </div>
                         
                         <!-- Section D -->
                         <div style="margin-top: 40px;">
                            <h3 style="color: #1e3a8a; border-bottom: 2px solid #1e3a8a; padding-bottom: 5px; display: inline-block;">SECTION D: FINAL QUESTIONS</h3>
                            <ul class="styled-list" style="color: #334155;">
                                <li>D1: "Do you have any questions? (Good candidates ask about work/growth)</li>
                                <li>D2: "When can you start?"</li>
                                <li>D3: "Expected stipend/salary?"</li>
                                <li>D4: "Applying elsewhere?"</li>
                            </ul>
                        </div>
                        
                        <div class="story-box" style="margin-top: 30px; background: #f0fdf4; border: 1px solid #16a34a; padding: 20px;">
                            <h4 style="color: #15803d;">✅ If Candidate PASSED Interview:</h4>
                            <p style="color: #15803d;">"Thank you! Your interview went well.<br>
                            You've already proven yourself with the AI App task.<br>
                            Now there's one final task: Shopify Store Replication.<br>
                            It's a 24-hour task. You'll receive details on WhatsApp shortly."</p>
                        </div>


                        <!-- STEP 3: AI APP TASK -->
                        <div class="section-divider" style="border-top: 2px dashed #cbd5e1; margin: 40px 0;"></div>
                        <h2 style="color: #0f172a;">📱 STEP 3: AI APP TASK (2 Hours) - Before Interview</h2>
                        <p style="color: #334155;">Given RIGHT AFTER phone screen. Interview ONLY if they complete this.</p>
                        
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
                        
                         <div class="info-box" style="margin-top: 20px; background: #fff; border: 1px solid #e2e8f0; padding: 20px;">
                            <h4 style="color: #1e293b;">HR Evaluation Checklist:</h4>
                            <p style="color: #334155;"><strong>Did they submit?</strong> No = No Shopify task.<br>
                            <strong>App quality:</strong> Useful? Good design? Works?<br>
                            <strong>Decision:</strong> Submitted + Score 15+ = ✅ Send Shopify Task.</p>
                        </div>


                        <!-- STEP 5: SHOPIFY TASK -->
                        <div class="section-divider" style="border-top: 2px dashed #cbd5e1; margin: 40px 0;"></div>
                        <h2 style="color: #0f172a;">📱 STEP 5: SHOPIFY TRIAL TASK (1 Day)</h2>
                        <p style="color: #334155;"><strong>⚠️ ONLY send to candidates who completed Al App Task</strong></p>
                        
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
                        
                        <div class="highlight-box" style="margin-top: 15px; background: #f8fafc; border: 1px solid #e2e8f0; padding: 15px;">
                            <h4 style="color: #1e293b;">Rejection Email:</h4>
                            <p style="font-family: monospace; color: #4b5563;">
                                "After careful consideration, we've decided to move forward with other candidates... We appreciate your interest..."
                            </p>
                        </div>
                         <div class="highlight-box" style="margin-top: 15px; background: #f0fdf4; border: 1px solid #bbf7d0; padding: 15px;">
                            <h4 style="color: #166534;">Hiring Confirmation:</h4>
                            <p style="font-family: monospace; color: #166534;">
                                "Congratulations! You've successfully completed the trial.<br>
                                We're excited to have you join Digital Heroes... Start Date: [Date]."
                            </p>
                        </div>
                        
                        <div class="info-box success" style="margin-top: 30px; text-align: center; background: #f0fdf4; border: 2px solid #16a34a; padding: 20px;">
                            <h3 style="color: #166534;">🏆 COMPLETE FLOW SUMMARY</h3>
                            <p style="font-size: 1.1em; margin-top: 10px; color: #166534;">
                                Application (2 min) → Phone Screen (10 min) → <strong>AI App Task (2 hr)</strong> → Video Interview (20 min) → Shopify Task (24 hr) → <strong>HIRE</strong>
                            </p>
                        </div>

                    </div>
                </section>
`;

function reinjectGuide() {
    try {
        let content = fs.readFileSync(filePath, 'utf8');

        const startMarker = '<section class="critical-alert" id="dev-hiring-guide"';
        const endMarker = '</section>';

        const startIndex = content.indexOf(startMarker);

        if (startIndex !== -1) {
            // Find closing tag strictly after start
            const contentAfterStart = content.substring(startIndex);
            const relativeEndIndex = contentAfterStart.indexOf(endMarker);

            if (relativeEndIndex !== -1) {
                const totalEndIndex = startIndex + relativeEndIndex + endMarker.length;

                const newContent = content.substring(0, startIndex) + guideHTML + content.substring(totalEndIndex);

                fs.writeFileSync(filePath, newContent, 'utf8');
                console.log('Successfully re-injected Developer Hiring Guide (V3) with visibility fixes.');
            } else {
                console.error('Could not find closing </section> tag.');
            }
        } else {
            console.error('Target section id="dev-hiring-guide" not found! Did you remove it?');
        }

    } catch (e) {
        console.error(`Error: ${e.message}`);
    }
}

reinjectGuide();
