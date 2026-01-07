const csQuestions = [
    // 1-5: The 5-Star Philosophy
    { q: "What happened in the '$8 Lakh Review' story?", options: ["Client refunded", "One 5-star review led to referrals & repeat business", "Client ghosted", "Nothing"], correct: 1 },
    { q: "Delivery is:", options: ["The End", "The Beginning of the Relationship", "Boring", "Optional"], correct: 1 },
    { q: "Our Target Rating is:", options: ["3 Stars", "4.0 Stars", "4.9 Stars (Almost Zero Bad Reviews)", "5.5 Stars"], correct: 2 },
    { q: "If a client doesn't leave 5 stars, we:", options: ["Succeeded", "Failed somewhere", "Don't care", "Block them"], correct: 1 },
    { q: "Support Period is:", options: ["Optional", "Sacred (Our Promise)", "Paid extra", "1 day"], correct: 1 },

    // 6-10: Delivery Process
    { q: "Before delivery, PageSpeed must be:", options: ["Any speed", "85+", "50+", "10+"], correct: 1 },
    { q: "Milestone Payments: We do NOT do:", options: ["Upfront", "Multi-stage milestones (Too complex)", "50% split", "Full payment"], correct: 1 },
    { q: "What must be verified before delivery?", options: ["Test Order & Mobile Responsiveness", "Nothing", "Colors only", "Logo"], correct: 1 },
    { q: "Delivery Message includes:", options: ["Just link", "Preview Link, What's Completed, Training, Support Info", "Invoice", "Bye"], correct: 1 },
    { q: "Support lasts for:", options: ["Forever", "30-90 Days (as per package)", "1 week", "None"], correct: 1 },

    // 11-15: Getting Reviews
    { q: "When to ask for a review?", options: ["Never", "When client is DELIGHTED (Mid-project, Delivery, or 7 days post)", "When angry", "Years later"], correct: 1 },
    { q: "If we forget to ask for a review:", options: ["It's fine", "We lose a valuable asset (Opportunity lost)", "Client will do it anyway", "Nothing"], correct: 1 },
    { q: "Review Request Template (7 days post):", options: ["Demand review", "Check-in + Polite Request", "Beg", "Threaten"], correct: 1 },
    { q: "Why do we want reviews?", options: ["Ego", "Social Proof & Future Sales", "Fun", "No reason"], correct: 1 },
    { q: "If client is happy mid-project, you:", options: ["Ignore", "Ask if they'd be open to reviewing later (Seed the idea)", "Stop working", "Sleep"], correct: 1 },

    // 16-20: Client Feedback
    { q: "Why ask for suggestions?", options: ["To feel bad", "Makes client feel valued + Catches problems early", "Waste time", "Rules"], correct: 1 },
    { q: "Proactive Problem Catch script:", options: ["What's wrong?", "Noticed you're quiet - Is everything okay?", "Hello", "Bye"], correct: 1 },
    { q: "If client says 'It's not what I expected':", options: ["Argue", "Clarify expectations & Offer revision", "Ignore", " refund"], correct: 1 },
    { q: "Feedback prevents:", options: ["Success", "Negative Reviews", "Happiness", "Money"], correct: 1 },
    { q: "Mid-Project Feedback Goal:", options: ["Course correction", "Delay", "Payment", "Fun"], correct: 1 },

    // 21-25: Support & Response Times
    { q: "Support Response: Critical (Site Down):", options: ["1 Week", "Within 1 Hour", "24 Hours", "Whenever"], correct: 1 },
    { q: "Support Response: Important (Feature Broken):", options: ["1 Hour", "Within 4 Hours", "2 Days", "Never"], correct: 1 },
    { q: "What is included in Support?", options: ["New features", "Bug fixes & Minor text updates", "Redesign", "New apps"], correct: 1 },
    { q: "What looks like a 'bad' support attitude?", options: ["Helping", "Saying 'That's not in scope' rudely", "Checking admin", "Testing"], correct: 1 },
    { q: "Loom videos should be:", options: ["1 hour long", "Under 5 mins, Clear, Show don't just tell", "Audio only", "Silent"], correct: 1 },

    // 26-30: Upselling
    { q: "Existing clients are:", options: ["Hard to sell", "5x Easier to sell to (Trust exists)", "Boring", "Cheap"], correct: 1 },
    { q: "Upsell: 'Add a blog' price:", options: ["Free", "$15,000", "$100", "$1M"], correct: 1 },
    { q: "Upsell: 'Email Integration' price:", options: ["$500", "$8,000 - $15,000", "$50,000", "Free"], correct: 1 },
    { q: "Upsell: 'SEO Package' starts at:", options: ["$1000", "$20,000+", "$5000", "$100"], correct: 1 },
    { q: "Best time to upsell:", options: ["When angry", "Natural moments (e.g., asking for features)", "Never", "First day"], correct: 1 },

    // 31-35: Tools
    { q: "Fiverr/Upwork Response Time:", options: ["24 hours", "1 Hour (During work hours)", "3 days", "1 week"], correct: 1 },
    { q: "Tool for Live Calls:", options: ["Zoom", "Google Meet", "Skype", "Phone"], correct: 1 },
    { q: "Tool for Screen Recording:", options: ["Camcorder", "Loom", "OBS", "None"], correct: 1 },
    { q: "Tool for Project Tracking:", options: ["Paper", "Notion / ClickUp", "Mind", "Wall"], correct: 1 },
    { q: "Never share what on Fiverr?", options: ["Name", "Personal Contact Info (Phone/Email)", "Work", "Files"], correct: 1 },

    // 36-40: Scenarios
    { q: "Client is quiet/ghosting. You:", options: ["Celebrate", "Proactive Check-in (Is everything ok?)", "Close order", "Delete"], correct: 1 },
    { q: "Client asks for out-of-scope work. You:", options: ["Do it free", "Polite decline + Quote for extra work", "Ignore", "Block"], correct: 1 },
    { q: "Client is angry. You:", options: ["Fight", "Listen, Empathize, Solve", "Refund immediately", "Hang up"], correct: 1 },
    { q: "Competitor comparison ('They are cheaper'). You:", options: ["Match price", "Highlight Value & Quality differences", "Insult competitor", "Give up"], correct: 1 },
    { q: "Client broke the site. You:", options: ["Laugh", "Fix it (Support) & Educate", "Charge double", "Ban them"], correct: 1 },

    // 41-45: KPIs
    { q: "On-Time Delivery Target:", options: ["50%", "100%", "90%", "80%"], correct: 1 },
    { q: "Client Satisfaction Target:", options: ["4.0", "4.9 Stars", "3.0", "5.0"], correct: 1 },
    { q: "Repeat Client Rate Target:", options: ["0%", "30%+", "10%", "100%"], correct: 1 },
    { q: "Referral Rate Target:", options: ["0%", "20%+", "5%", "50%"], correct: 1 },
    { q: "Support Response KPI:", options: ["< 24 hrs", "< 4 Hours", "< 1 Week", "None"], correct: 1 },

    // 46-50: Final Check
    { q: "True or False: The project ends at delivery.", options: ["True", "False (Relationship begins)", "Maybe", "Yes"], correct: 1 },
    { q: "True or False: Multi-stage milestones are good.", options: ["True", "False (We don't do them)", "Sometimes", "Yes"], correct: 1 },
    { q: "True or False: Upselling is bad.", options: ["True", "False (It adds value)", "Maybe", "Yes"], correct: 1 },
    { q: "True or False: You should automate all replies.", options: ["True", "False (Personalize)", "Yes", "Maybe"], correct: 1 },
    { q: "Goal of Client Success:", options: ["Money", "Happy Clients -> Reviews -> Referrals -> Growth", "Work", "None"], correct: 1 }
];
