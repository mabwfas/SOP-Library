const hrQuestions = [
    // 1-5: HR Core Principles
    { q: "What is the 'Hire Slow, Fire Fast' principle?", options: ["Hire quickly to fill gaps", "Take time to hire right, but exit mismatches quickly", "Fire everyone", "Hire friends"], correct: 1 },
    { q: "Which is more important: Culture Fit or Skill?", options: ["Skill", "Culture Fit (Attitude cannot be taught)", "Neither", "Both equal"], correct: 1 },
    { q: "Documentation is:", options: ["Boring", "Protection (Written agreements protect all)", "Optional", "Useless"], correct: 1 },
    { q: "The 'Golden Rule' of hiring is:", options: ["Hire for looks", "Hire for attitude, train for skills", "Hire cheapest", "Hire fastest"], correct: 1 },
    { q: "Can a Level 3 person become a Level 6?", options: ["Yes", "No (Fundamental character traits don't change easily)", "Maybe", "With enough money"], correct: 1 },

    // 6-10: Hiring Process - Step 1 & 2
    { q: "A JD must include:", options: ["Jokes", "Salary Range, Skills, Role Details", "Hidden info", "False promises"], correct: 1 },
    { q: "Red Flag on CV:", options: ["Married", "3+ job switches in 1 year", "Good college", "Projects"], correct: 1 },
    { q: "We filter 100 CVs down to:", options: ["50", "15", "90", "1"], correct: 1 },
    { q: "Consistent grades in education show:", options: ["Intelligence", "Discipline & Consistency", "Nothing", "Luck"], correct: 1 },
    { q: "For Developers, we check:", options: ["GitHub & Live Links", "Instagram", "Facebook", "Nothing"], correct: 1 },

    // 11-15: Hiring Process - Step 3 & 4
    { q: "Confirmation Call Goal:", options: ["Job offer", "Verify data, confidence, and availability (Filter 15->5)", "Chat", "Test code"], correct: 1 },
    { q: "Interview Section A covers:", options: ["Code", "CV/Background & Ownership", "Situational", "Salary"], correct: 1 },
    { q: "Interview Section B covers:", options: ["Family", "Technical Skills (Role specific)", "Hobbies", "Gossip"], correct: 1 },
    { q: "Instead of 'Are you hardworking?', ask:", options: ["Are you lazy?", "Tell me about a time you worked extremely hard (Situational)", "Do you like work?", "Nothing"], correct: 1 },
    { q: "Vague answers during interview usually mean:", options: ["They are shy", "They are likely lying", "They are smart", "They are tired"], correct: 1 },

    // 16-20: Role Specific - PM & Dev
    { q: "PM Question: Client complains about quality. You:", options: ["Ignore", "Panic", "Problem solve & manage emotion", "Refund"], correct: 2 },
    { q: "PM Practical Test:", options: ["Code a site", "Write a client update or handles a complaint", "Draw", "Sing"], correct: 1 },
    { q: "Developer Question: Site loads in 8s. You:", options: ["Cry", "Systematically check 5 common issues", "Blame server", "Reboot"], correct: 1 },
    { q: "Developer Practical:", options: ["Fix broken code snippet", "Write essay", "Talk", "Sleep"], correct: 0 },
    { q: "Liquid Basics: Difference between Sections and?", options: ["Snippets", "Divs", "Tags", "None"], correct: 0 },

    // 21-25: Role Specific - Sales & Designer
    { q: "Sales: Buyer wants everything for free. You:", options: ["Give it", "Set boundaries & communicate value", "Fight", "Block"], correct: 1 },
    { q: "Sales: Enquiry to Order conversion depends on:", options: ["Luck", "Speed & Qualification", "Price only", "Fiverr"], correct: 1 },
    { q: "Designer: Client gives vague feedback. You:", options: ["Guess", "Ask clarifying questions", "Ignore", "Quit"], correct: 1 },
    { q: "Designer: Mobile responsiveness is:", options: ["Optional", "Mandatory (Mobile First)", "Nice to have", "Later"], correct: 1 },
    { q: "Content Writer: Features vs Benefits. Which sells?", options: ["Features", "Benefits", "Neither", "Both"], correct: 1 },

    // 26-30: Onboarding
    { q: "Day 1 Priority:", options: ["Work", "Comfort, Access, Welcome", "Tests", "Firing"], correct: 1 },
    { q: "Contracts must be signed:", options: ["Before start", "After 1 month", "Never", "When asked"], correct: 0 },
    { q: "Culture is built by:", options: ["Posters", "Actions & Standards", "Money", "Ping pong"], correct: 1 },
    { q: "Probation period usually lasts:", options: ["1 week", "3 Months", "1 Year", "None"], correct: 1 },
    { q: "Tools access (Slack/Jira) should be ready:", options: ["Day 1", "Day 5", "Week 2", "Whenever"], correct: 0 },

    // 31-35: Policies
    { q: "After leave approval, HR must:", options: ["Do nothing", "POST on Discord or ERP/HRM to notify Seniors", "Delete employee account", "Panic"], correct: 1 },
    { q: "Notice Period is:", options: ["Optional", "Mandatory as per contract", "1 day", "None"], correct: 1 },
    { q: "Confidentiality (NDA) protects:", options: ["Nothing", "Client Data & IP", "Code", "Office"], correct: 1 },
    { q: "Salary is paid on:", options: ["1st of Month", "15th", "Randomly", "Weekly"], correct: 0 },
    { q: "Performance Reviews happen:", options: ["Never", "Quarterly/Annually", "Daily", "Weekly"], correct: 1 },

    // 36-40: Troubleshooting HR
    { q: "Employee underperforming. First step:", options: ["Fire", "Feedback/Warning (Documented)", "Ignore", "Promote"], correct: 1 },
    { q: "Employee disappearing (Ghosting). You:", options: ["Wait forever", "Try contact, then terminate access", "Cry", "Nothing"], correct: 1 },
    { q: "Dispute between team members. You:", options: ["Watch", "Mediate & Resolve", "Pick sides", "Fire both"], correct: 1 },
    { q: "Candidate rejects offer. You:", options: ["Argue", "Ask why (Feedback) & Move to backup", "Insult", "Force"], correct: 1 },
    { q: "Urgent hiring need. You:", options: ["Hire anyone", "Follow process faster (don't skip steps)", "Skip interview", "Guess"], correct: 1 },

    // 41-45: Advanced HR
    { q: "Why interview even when team is full?", options: ["Boredom", "Build Talent Pipeline & Market Intel", "Fun", " Rules"], correct: 1 },
    { q: "Cost of a bad hire is:", options: ["Salary only", "5-10x Salary (Time, Opportunity, Cleanup)", "Zero", "Small"], correct: 1 },
    { q: "A 'Level 10' employee is:", options: ["Perfect", "Self-driven, High Skill, High Integrity", "Cheap", "Fast"], correct: 1 },
    { q: "Transparent Communication prevents:", options: ["Success", "Surprises & Resentment", "Work", "Fun"], correct: 1 },
    { q: "Culture check question:", options: ["Do you like pizza?", "What would you do if a junior is struggling?", "What is 2+2?", "Name?"], correct: 1 },

    // 46-50: Final Check
    { q: "True or False: Skills can be taught.", options: ["True", "False", "Maybe", "No"], correct: 0 },
    { q: "True or False: Hire fast to save time.", options: ["True", "False (Hire Slow)", "Always", "Yes"], correct: 1 },
    { q: "True or False: Verbal agreements are enough.", options: ["True", "False (Always writing)", "Sometimes", "Maybe"], correct: 1 },
    { q: "True or False: Cultural fit is optional.", options: ["True", "False", "Yes", "Maybe"], correct: 1 },
    { q: "Primary goal of HR:", options: ["Paperwork", "Building a High-Performance Team", "Rules", "Fun"], correct: 1 }
];
