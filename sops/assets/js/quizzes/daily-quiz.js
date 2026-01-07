const dailyQuestions = [
    // 1-5: Work Hours & Status
    { q: "Standard Work Hours:", options: ["Whenever", "10:00 AM - 7:00 PM IST", "24/7", "9-5 EST"], correct: 1 },
    { q: "During work hours, your status must be:", options: ["Invisible", "🟢 Online", "Idle", "Offline"], correct: 1 },
    { q: "If you step away for lunch, you must:", options: ["Just leave", "Change status to 🍽️ Lunch", "Go offline", "Nothing"], correct: 1 },
    { q: "First thing to do in the morning:", options: ["Check Instagram", "Go Online + Connect with Manager", "Sleep", "Eat"], correct: 1 },
    { q: "You must have Discord installed on:", options: ["PC only", "Phone only", "Both PC and Phone (Urgent access)", "None"], correct: 2 },

    // 6-10: Communication Rules
    { q: "Golden Rule of Response Time:", options: ["1 Day", "1 Hour (During work hours)", "1 Week", "Never"], correct: 1 },
    { q: "Response Time: Client Emergency / Site Down:", options: ["1 Hour", "Immediately (within 15 mins)", "24 Hours", "Next day"], correct: 1 },
    { q: "Response Time: Manager DM:", options: ["1 Hour", "30 Minutes", "2 Hours", "Whenever"], correct: 1 },
    { q: "If you don't respond repeatedly:", options: ["Nothing", "Performance Review Impact", "Bonus", "Promotion"], correct: 1 },
    { q: "Discord is our:", options: ["Playground", "HQ (Being active = Being at work)", "Optional tool", "Enemy"], correct: 1 },

    // 11-15: Reporting (EOD)
    { q: "EOD stands for:", options: ["End of Day", "End of Drama", "Eat or Drink", "Early or Delay"], correct: 0 },
    { q: "EOD Update is:", options: ["Optional", "Mandatory (No update = Did not work)", "Annoying", "Fun"], correct: 1 },
    { q: "EOD Format includes:", options: ["Jokes", "Completed, In Progress, Priorities, Blockers", "Weather", "News"], correct: 1 },
    { q: "When to send EOD?", options: ["Morning", "Before logging off", "Next day", "Weekend"], correct: 1 },
    { q: "If you log off early, you must:", options: ["Sneak out", "Send EOD before leaving", "Say nothing", "Cry"], correct: 1 },

    // 16-20: Using SOPs
    { q: "Minimum SOPs every member follows:", options: ["1", "2 (Daily SOP + Role SOP)", "5", "None"], correct: 1 },
    { q: "When to check SOP?", options: ["Never", "Adjusting to new task / Unsure / Training", "When bored", "Always"], correct: 1 },
    { q: "SOPs are:", options: ["Static", "Living Documents (Tell manager if improvements needed)", "Useless", "Trash"], correct: 1 },
    { q: "Role Specific SOP for designers:", options: ["Sales SOP", "Designer SOP", "HR SOP", "None"], correct: 1 },
    { q: "Role Specific SOP for developers:", options: ["Developer SOP", "Sales SOP", "HR SOP", "None"], correct: 0 },

    // 21-25: Productivity
    { q: "The 80/20 Rule:", options: ["Works 80% of time", "80% results come from 20% tasks (Focus on high impact)", "Work 20% only", "None"], correct: 1 },
    { q: "Pomodoro Technique:", options: ["Eat pasta", "25 min work, 5 min break", "Sleep", "Run"], correct: 1 },
    { q: "Deep Work blocks should be:", options: ["Interrupted", "Distraction-free (No phone)", "Noisy", "Short"], correct: 1 },
    { q: "Browser Bookmark Tip:", options: ["Save games", "Folder 'Work' (Jira, Discord, SOP Hub, Email)", "Save movies", "None"], correct: 1 },
    { q: "If falling behind:", options: ["Hide", "Communicated Early (Before deadline)", "Quit", "Panic"], correct: 1 },

    // 26-30: Scenarios
    { q: "You have a doctor's appointment. You:", options: ["Disappear", "Inform manager & detailed EOD later", "Quit", "Lie"], correct: 1 },
    { q: "Internet down. You:", options: ["Sleep", "Message manager via Phone Data immediately", "Wait", "Ignore"], correct: 1 },
    { q: "Confused about a task. You:", options: ["Guess", "Check SOP -> Ask Manager", "Do nothing", "Cry"], correct: 1 },
    { q: "Tagged in general channel. Respond within:", options: ["1 min", "2 Hours", "1 Day", "Never"], correct: 1 },
    { q: "Tagged in Team channel. Respond within:", options: ["5 mins", "1 Hour", "1 Day", "Never"], correct: 1 },

    // 31-35: Culture
    { q: "Digital Heroes Philosophy:", options: ["Good enough", "Excellence is an attitude", "Lazy", "Slow"], correct: 1 },
    { q: "Why we work hard:", options: ["Money only", "Helping real people build dreams", "Force", "None"], correct: 1 },
    { q: "Start each day with:", options: ["Complaints", "Intention (Present, Responsive, Excellent)", "Sleep", "Food"], correct: 1 },
    { q: "Notifications should be:", options: ["OFF", "ON for Mentions/DMs", "Random", "Silent"], correct: 1 },
    { q: "Music for focus:", options: ["Heavy Metal", "Lofi / Instrumental", "Talk radio", "Silence"], correct: 1 },

    // 36-40: Tools
    { q: "Tool for Video Messages:", options: ["Skype", "Loom (< 5 mins)", "TikTok", "YouTube"], correct: 1 },
    { q: "Tool for Project Management:", options: ["Excel", "Notion / ClickUp", "Paper", "Mind"], correct: 1 },
    { q: "Tool for Live Meetings:", options: ["Discord Voice / Google Meet", "Whatsapp", "Instagram", "None"], correct: 0 },
    { q: "Where to store files:", options: ["Desktop", "Google Drive (Shared)", "USB", "Bin"], correct: 1 },
    { q: "Discord Mobile App is for:", options: ["Games", "Urgent responses away from desk", "Fun", "Nothing"], correct: 1 },

    // 41-45: Final Check
    { q: "True or False: Ghosting is acceptable.", options: ["True", "False (Never)", "Maybe", "Yes"], correct: 1 },
    { q: "True or False: You can multitask during deep work.", options: ["True", "False (Focus on one)", "Maybe", "Yes"], correct: 1 },
    { q: "True or False: Ask for help if stuck.", options: ["True (Save time)", "False", "No", "Maybe"], correct: 0 },
    { q: "True or False: Deadlines are suggestions.", options: ["True", "False (Commitments)", "Maybe", "Yes"], correct: 1 },
    { q: "True or False: You represent the company.", options: ["True", "False", "No", "Maybe"], correct: 0 },

    // 46-50: Bonus
    { q: "Average lunch break:", options: ["3 hours", "1 Hour", "10 mins", "None"], correct: 1 },
    { q: "Morning Routine time:", options: ["2 hours", "15 Minutes", "1 min", "Half day"], correct: 1 },
    { q: "Wrap Up time:", options: ["5 mins", "15-30 Minutes (EOD)", "1 hour", "None"], correct: 1 },
    { q: "If sick:", options: ["Ghost", "Inform Manager ASAP morning", "Come anyway", "Quit"], correct: 1 },
    { q: "Primary Goal:", options: ["Survive", "Be a High-Performance Team Member", "Sleep", "Eat"], correct: 1 }
];
