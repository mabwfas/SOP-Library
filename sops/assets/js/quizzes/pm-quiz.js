const pmQuestions = [
    // 1-5: The Golden Rules (Critical Principles)
    { q: "What is the #1 Principle of Client Management?", options: ["Client always waits", "Client NEVER waits for an update", "Update only on Fridays", "Update after delivery"], correct: 1 },
    { q: "Where must daily updates be sent?", options: ["Email only", "Inbox DM + Order Page Comments", "WhatsApp", "Slack"], correct: 1 },
    { q: "If a client asks 'Any update?', what does it mean?", options: ["They are eager", "You have already FAILED", "They are bored", "It's normal"], correct: 1 },
    { q: "When should bad news be communicated?", options: ["Immediately (within 2 hours)", "Wait for a solution", "On delivery day", "Never"], correct: 0 },
    { q: "What is the rule for Verbal Agreements?", options: ["They are binding", "They mean NOTHING (Must be in writing)", "They are friendly", "They save time"], correct: 1 },

    // 6-10: Onboarding & Kickoff
    { q: "What is the '24-Hour Rule'?", options: ["Reply in 24 hours", "First 24 hours set the tone (Welcome + Kickoff + Assets)", "Delivery in 24 hours", "Sleep for 24 hours"], correct: 1 },
    { q: "What is the first message you send after payment?", options: ["Invoice", "Welcome Message + Questionnaire Link", "Design Preview", "Login Request"], correct: 1 },
    { q: "What must be received BEFORE work starts?", options: ["A 'Hi'", "All Assets (Logo, Images, Content)", "5-star review", "Tip"], correct: 1 },
    { q: "How do we request Shopify access safely?", options: ["Ask for password", "Request Collaborator Code", "Create new account", "Hack it"], correct: 1 },
    { q: "Why is the Onboarding Questionnaire mandatory?", options: ["It's not", "It prevents 'I don't like it' feedback later", "To collect emails", "To waste time"], correct: 1 },

    // 11-15: The 14-Day Timeline
    { q: "What is our standard delivery timeline?", options: ["3 Days", "7 Days", "14 Days", "30 Days"], correct: 2 },
    { q: "Why do we refuse '3-Day Rush' jobs?", options: ["We are slow", "Rushed stores = Bugs & Revision Hell", "We charge less", "No reason"], correct: 1 },
    { q: "When MUST the First Homepage Preview be sent?", options: ["Day 7", "Day 14", "Day 1-2 (NON-NEGOTIABLE)", "Day 5"], correct: 2 },
    { q: "Why send an early preview (Day 1-2)?", options: ["To finish early", "To confirm design direction before building deeply", "To panic", "To impress"], correct: 1 },
    { q: "What happens on Day 11-12?", options: ["Nothing", "Optimization (Speed, SEO, Mobile)", "Start building", "Delivery"], correct: 1 },

    // 16-20: Communication & Meetings
    { q: "What is the '1+1+C' Meeting Format?", options: ["1 PM + 1 Dev + Client", "1 PM + 1 Sales + Client", "2 Devs + Client", "Client only"], correct: 0 },
    { q: "Who leads the client call?", options: ["The Developer", "The Project Manager (You)", "The Client", "Nobody"], correct: 1 },
    { q: "Why do we do 'Live Revision Calls'?", options: ["To chat", "To fix small things LIVE and reduce back-and-forth", "To bill more hours", "To show face"], correct: 1 },
    { q: "What should be fixed LIVE on a call?", options: ["Complex code", "Small text/color/spacing changes", "Database migration", "Process flow"], correct: 1 },
    { q: "If a client is unresponsive, what do you do?", options: ["Pause project", "Stop working", "KEEP WORKING (Deliver on time)", "Refund"], correct: 2 },

    // 21-25: Scope & Change Management
    { q: "How do you handle 'Just one small extra thing'?", options: ["Do it for free", "Scope is Sacred: New Request = New Quote", "Ignore it", "Complain"], correct: 1 },
    { q: "What do you do if a client hates the design?", options: ["Argue", "Refer to the approved reference/preview", "Refund", "Quit"], correct: 1 },
    { q: "If a client is toxic/abusive, what is the policy?", options: ["Tolerate it", "Early Cancellation (Fire the client)", "Charge more", "Ignore"], correct: 1 },
    { q: "Who answers TECHNICAL questions on a call?", options: ["The PM", "The Developer", "The Salesperson", "Google"], correct: 1 },
    { q: "What counts as a 'Red Flag' during project?", options: ["Asking questions", "Scope creep & Disrespect", "Providing assets", "Paying on time"], correct: 1 },

    // 26-30: Documentation & Handover
    { q: "Where do you find the client's preferences?", options: ["Guess", "Onboarding Questionnaire", "Google", "Ask client again"], correct: 1 },
    { q: "What happens on Handover (Day 13-14)?", options: ["Just send login", "Full QA + Test Order + Final Transfer", "Send invoice", "Delete store"], correct: 1 },
    { q: "Why document every request?", options: ["For fun", "To protect against 'I didn't say that'", "To write a book", "Legal requirement"], correct: 1 },
    { q: "If a developer asks a question the client already answered, you:", options: ["Ask client again", "Check the Questionnaire/Docs first", "Guess", "Ignore"], correct: 1 },
    { q: "What is the 'Moral' of the Project A vs B story?", options: ["Talent wins", "Process determines success", "Luck matters", "Price matters"], correct: 1 },

    // 31-35: Scenarios
    { q: "Client: 'I don't like this font.' You say:", options: ["'Too bad'", "'We can change it! Let's pick one live.'", "'It's the best font'", "'Pay me more'"], correct: 1 },
    { q: "Client: 'Can we add a wholesale portal?' (Not in scope). You say:", options: ["'Sure!'", "'Yes, I can send a quote for that extra feature.'", "'No'", "'Maybe'"], correct: 1 },
    { q: "Developer is stuck on a bug. You:", options: ["Wait", "Inform client of delay immediately + ETA", "Hide it", "Blame developer"], correct: 1 },
    { q: "Client sends assets via 50 WhatsApp messages. You:", options: ["Save them one by one", "Ask them to upload to the Drive folder", "Ignore them", "Block them"], correct: 1 },
    { q: "Client misses a meeting. You:", options: ["Wait 1 hour", "Wait 10 mins, send email, reschedule", "Cancel project", "Cry"], correct: 1 },

    // 36-40: Developer Coordination
    { q: "How do you treat your developer?", options: ["Like a servant", "As a Partner (Protect their time)", "Ignore them", "Micro-manage"], correct: 1 },
    { q: "Before a meeting, you must:", options: ["Do nothing", "Sync with Developer & Prepare Agenda", "Sleep", "Eat"], correct: 1 },
    { q: "If a developer makes a mistake, you:", options: ["Blame them to client", "Own it as a team, fix it, then discuss privately", "Fire them", "Laugh"], correct: 1 },
    { q: "Who is responsible for QA?", options: ["Client", "PM (First line of defense)", "Developer only", "Nobody"], correct: 1 },
    { q: "When does the developer get access?", options: ["Immediately", "After Collaborator Code is received", "Never", "Day 14"], correct: 1 },

    // 41-45: Advanced PM
    { q: "What is 'Scope Creep'?", options: ["A scary ghost", "Slow expansion of work beyond original agreement", "A bug", "A feature"], correct: 1 },
    { q: "Why ask 'Are you the decision maker?'", options: ["Curiosity", "To avoid 'I need to ask my boss' delays", "To be rude", "To networking"], correct: 1 },
    { q: "If a project is 'Easy', do you skip the process?", options: ["Yes", "NO. Process is for consistency.", "Sometimes", "Maybe"], correct: 1 },
    { q: "What ensures a 5-star review?", options: ["Luck", "Expectation Management + Communication", "Cheap price", "Freebies"], correct: 1 },
    { q: "What is the 'Order Update Chat'?", options: ["Facebook", "Internal comment system on order page", "WhatsApp group", "Discord"], correct: 1 },

    // 46-50: Final Check
    { q: "True or False: We pause for unresponsive clients.", options: ["True", "False (Keep Working)", "Depends", "True if > 3 days"], correct: 1 },
    { q: "True or False: Early Preview (Day 1-2) is optional.", options: ["True", "False (Mandatory)", "Only for big projects", "Only for small projects"], correct: 1 },
    { q: "True or False: You can cancel a project if client is abusive.", options: ["True", "False", "No refund", "Never"], correct: 0 },
    { q: "True or False: Daily updates are only for days with progress.", options: ["True", "False (Update EVERY day)", "True, avoid spam", "False"], correct: 1 },
    { q: "Who defines the project success?", options: ["The Code", "The PM's Process", "The weather", "The tools"], correct: 1 }
];
