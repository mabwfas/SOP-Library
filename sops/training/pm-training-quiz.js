// PM Training Quiz Questions - 100 Questions for 10 Tasks
// Each task has 10 questions (some tasks have 20 for final certification)

const taskQuizzes = {
    1: [
        { q: "If a client messages 'Any update?' what does this mean?", options: ["They're just curious", "You've already failed — they should never need to ask", "Normal client behavior", "Project is going well"], correct: 1 },
        { q: "Daily updates should be sent where?", options: ["Only Fiverr inbox", "Only order update chat", "BOTH inbox/messages AND order update chat", "Only when there's progress"], correct: 2 },
        { q: "When should you communicate problems to clients?", options: ["On delivery day", "Within 2 hours of knowing", "When the client asks", "Only if it's a big problem"], correct: 1 },
        { q: "What does 'Scope is Sacred' mean?", options: ["You can add small things for free", "What's in the proposal is delivered — NEW requests = NEW quote", "Scope can change anytime", "Only big changes need quotes"], correct: 1 },
        { q: "If a client becomes toxic, what should you do?", options: ["Continue and absorb stress", "Issue refund and cancel — better to lose project than sanity", "Never cancel a paid project", "Work slower"], correct: 1 },
        { q: "If a client stops responding mid-project, what should you do?", options: ["Pause the project and wait", "Keep working, complete to YOUR best expectations, send daily updates", "Cancel the project", "Only work when they respond"], correct: 1 },
        { q: "The 1+1+C meeting format means:", options: ["1 PM + 1 hour + Client", "1 PM + 1 Developer + Client decision maker", "1 meeting + 1 follow-up + Confirmation", "1 day + 1 week + Close"], correct: 1 },
        { q: "According to the 90% Rule:", options: ["90% completion means almost done", "The last 10% takes 50% of the time — budget accordingly", "Projects should be 90% complete by halfway", "90% is good enough to deliver"], correct: 1 },
        { q: "The Buffer Principle says if you think 5 days:", options: ["Quote 5 days", "Quote 4 days to impress", "Quote 7 days — add 20-30% buffer", "Quote 10 days"], correct: 2 },
        { q: "Task Priority Order — which comes FIRST?", options: ["Team check-ins", "Documentation", "Client escalations and deadline-day deliveries (P0)", "Planning & scheduling"], correct: 2 }
    ],
    2: [
        { q: "What is Digital Heroes' Fiverr rating?", options: ["4.5 stars", "4.9 stars", "5.0 stars", "4.7 stars"], correct: 1 },
        { q: "Standard delivery timeframe is:", options: ["3-5 days", "7-14 days", "21-30 days", "1-2 days"], correct: 1 },
        { q: "Response time for urgent/blocking messages:", options: ["4 hours", "24 hours", "Within 30 minutes", "Next day"], correct: 2 },
        { q: "Team Lead morning shift for Fiverr chat is:", options: ["9 AM - 12 PM", "7 AM - 10 AM", "6 AM - 9 AM", "10 AM - 1 PM"], correct: 1 },
        { q: "If team member not responding, Team Lead should:", options: ["Wait indefinitely", "Call them individually, inform management after 3 attempts", "Ignore and continue", "Replace immediately"], correct: 1 },
        { q: "Quality Gate means:", options: ["Skip review if busy", "Review ALL store submissions before client delivery", "Client reviews first", "Developer self-reviews only"], correct: 1 },
        { q: "New member onboarding includes daily check-ins for:", options: ["1 day", "First 2 weeks", "1 month", "No check-ins needed"], correct: 1 },
        { q: "After hours messages (past 8 PM) require response by:", options: ["Immediately", "Next morning by 10 AM", "Within 4 hours", "Within 1 hour"], correct: 1 },
        { q: "Revision request should be acknowledged within:", options: ["24 hours", "2 hours", "30 minutes", "1 week"], correct: 1 },
        { q: "Who do Project Managers report to?", options: ["CEO directly", "Team Lead / GM", "Developers", "Clients"], correct: 1 }
    ],
    3: [
        { q: "When must the FIRST homepage preview be sent to client?", options: ["Day 7", "Day 1-2 (NON-NEGOTIABLE)", "Day 14", "When development is complete"], correct: 1 },
        { q: "Why does Digital Heroes use 14 days instead of 3 days?", options: ["To charge more", "Stores delivered in 14 days have 40% fewer revision requests", "Developers work slowly", "No particular reason"], correct: 1 },
        { q: "Day 1-2 preview MUST include all EXCEPT:", options: ["Theme with brand colors", "Header with logo", "All 50 products uploaded", "Hero section"], correct: 2 },
        { q: "Products & Collections are typically done on days:", options: ["1-2", "6-8", "13-14", "11-12"], correct: 1 },
        { q: "The 50% milestone (Day 7) should have:", options: ["Just theme installed", "Homepage complete, core pages done", "QA complete", "Only header done"], correct: 1 },
        { q: "What happened when a client insisted on 3-day delivery?", options: ["Perfect delivery", "47 revision requests, '3-day delivery' took 17 days total", "Client was happy", "Faster than expected"], correct: 1 },
        { q: "QA & Delivery happens on days:", options: ["1-2", "6-8", "13-14", "3-5"], correct: 2 },
        { q: "The Day 1-2 preview should be sent via:", options: ["Only text message", "Loom video + preview link", "Email only", "No preview needed"], correct: 1 },
        { q: "After sending Day 1-2 preview, you should ask:", options: ["Do you like it?", "Does this direction match your vision?", "Is it done?", "Nothing — wait"], correct: 1 },
        { q: "Speed optimization and SEO basics happen on days:", options: ["1-2", "3-5", "9-12", "6-8"], correct: 2 }
    ],
    4: [
        { q: "Welcome message sent within:", options: ["24 hours", "1 hour of payment", "1 week", "When convenient"], correct: 1 },
        { q: "Shopify collaborator code requested within:", options: ["1 hour", "4 hours", "24 hours", "1 week"], correct: 1 },
        { q: "Kickoff call should be scheduled within:", options: ["4 hours", "24 hours", "1 week", "No call needed"], correct: 1 },
        { q: "'3 stores you love' question helps understand:", options: ["Their budget", "Their taste and expectations", "Their competitors' prices", "Nothing important"], correct: 1 },
        { q: "If assets not received by Day 3, you should:", options: ["Wait indefinitely", "Start without them", "Send specific follow-up: 'Work is paused. May affect delivery.'", "Cancel the project"], correct: 2 },
        { q: "Welcome message should include all EXCEPT:", options: ["Questionnaire link", "Expected delivery date", "Your personal phone number for emergencies", "Daily update timing"], correct: 2 },
        { q: "How many revision rounds are included (per welcome template)?", options: ["Unlimited", "2 rounds", "0 rounds", "5 rounds"], correct: 1 },
        { q: "Brand colors should be provided as:", options: ["Color names (red, blue)", "Hex codes", "RGB values only", "Doesn't matter"], correct: 1 },
        { q: "'1 store you hate' question helps understand:", options: ["What to avoid", "Nothing useful", "Their budget", "Their timeline"], correct: 0 },
        { q: "Day 5 asset follow-up includes:", options: ["Gentle reminder", "'Project on hold. Delivery shifted to [new date].'", "Just wait", "Cancel project"], correct: 1 }
    ],
    5: [
        { q: "Daily updates should be sent where?", options: ["Only Fiverr inbox", "Only order chat", "BOTH inbox AND order update chat", "Only when progress made"], correct: 2 },
        { q: "Live Revision Calls are held on:", options: ["Phone call", "Google Meet with screen share", "WhatsApp", "Email only"], correct: 1 },
        { q: "Live Revision Call duration:", options: ["15 minutes", "1-2 hours", "30 minutes", "5 hours"], correct: 1 },
        { q: "What should be fixed LIVE on revision call?", options: ["Custom code", "New page layouts", "Text changes, colors, spacing, font sizes", "App integrations"], correct: 2 },
        { q: "Standard question response time:", options: ["Within 30 minutes", "Within 4 hours", "Within 24 hours", "Within 1 week"], correct: 1 },
        { q: "After Live Revision Call, you should:", options: ["Wait for client to follow up", "Send summary: 'We fixed X live. We'll complete Y by [date].'", "Do nothing", "Schedule another call immediately"], correct: 1 },
        { q: "When client asks 'Where's my update?' the RIGHT response includes:", options: ["'Sorry, been busy'", "Ownership, immediate status, preview link, commitment", "'I'll get back to you'", "Blame the developer"], correct: 1 },
        { q: "Daily update should include all EXCEPT:", options: ["What was completed", "Tomorrow's plan", "Internal team conflicts", "Preview link"], correct: 2 },
        { q: "Urgent (blocking) messages require response within:", options: ["4 hours", "24 hours", "30 minutes", "1 week"], correct: 2 },
        { q: "What takes 3 days of messages can be done in how long on a live call?", options: ["3 days", "1 hour", "1 week", "Same time"], correct: 1 }
    ],
    6: [
        { q: "Client asks for free extra work. The WRONG response is:", options: ["'Here are the options with pricing'", "'Sure, no problem!'", "'That's outside scope, here's the cost'", "'Which option works for you?'"], correct: 1 },
        { q: "Client unresponsive for 7 days. Your message should say:", options: ["'Project cancelled'", "'Projects paused 7+ days may need re-scheduling'", "'We're done with you'", "Nothing — just wait"], correct: 1 },
        { q: "Client hates the design. You should FIRST:", options: ["Redo everything immediately", "Get defensive and argue", "Ask clarifying questions about what doesn't match their vision", "Cancel the project"], correct: 2 },
        { q: "After a client call, you MUST:", options: ["Do nothing", "Send written summary of what was discussed", "Wait for them to summarize", "Forget about it"], correct: 1 },
        { q: "Client compares your price to competitor. You should:", options: ["Match the lower price", "Tell them to go with competitor", "Highlight value differences, never discount without GM approval", "Double the price"], correct: 2 },
        { q: "When client asks 'When will this be done?' you should provide:", options: ["Vague answer", "Specific breakdown: Completed, In Progress, Remaining, with dates", "'Soon'", "'I don't know'"], correct: 1 },
        { q: "Client unresponsive Day 5 — you should:", options: ["Cancel project", "Inform GM and send follow-up message", "Do nothing", "Start work anyway"], correct: 1 },
        { q: "For scope additions, the correct approach is:", options: ["Say no completely", "Do it for free", "Offer 'yes, and here's the pricing/timeline'", "Ignore the request"], correct: 2 },
        { q: "Before scheduling a client call, you should:", options: ["Just pick any time", "Ask what topics they want to cover so you can prepare", "Never do calls", "Have developer handle it alone"], correct: 1 },
        { q: "'Another agency quoted $200 less' — highlight value by mentioning:", options: ["Nothing special", "14-day guarantee, training, support, mobile optimization", "We can be cheaper", "Go with them"], correct: 1 }
    ],
    7: [
        { q: "How many revision rounds are included per milestone?", options: ["Unlimited", "2 rounds", "5 rounds", "0 rounds"], correct: 1 },
        { q: "Revisions must be submitted as:", options: ["One-by-one throughout the day", "Consolidated list (all feedback together)", "Verbal requests only", "Whenever convenient"], correct: 1 },
        { q: "'Change button color from blue to green' is:", options: ["Scope change (extra cost)", "Revision (included)", "New project", "Not allowed"], correct: 1 },
        { q: "'Add completely new page not discussed' is:", options: ["Included revision", "Scope change (extra cost)", "Free addition", "Automatic"], correct: 1 },
        { q: "For minor changes (<2 hours) outside scope, you can:", options: ["Refuse completely", "Do as goodwill to build relationship", "Charge $500", "Cancel project"], correct: 1 },
        { q: "Medium changes (2-8 hours) outside scope should:", options: ["Be done free", "Be quoted as add-on ($50-200)", "Be ignored", "Be done without telling client"], correct: 1 },
        { q: "Before starting scope change work, you MUST:", options: ["Just do it", "Get written approval from client", "Assume they want it", "Wait indefinitely"], correct: 1 },
        { q: "'Complete redesign because client changed mind' is:", options: ["Free revision", "Included in package", "Scope change requiring new quote", "Your fault"], correct: 2 },
        { q: "Major changes (>8 hours) require:", options: ["Small add-on", "New project proposal", "Free work", "Cancellation"], correct: 1 },
        { q: "Scope changes should be documented in:", options: ["Your memory only", "Project record with updated timeline", "Nowhere", "Personal notes only"], correct: 1 }
    ],
    8: [
        { q: "Client threatens refund. This is escalation Level:", options: ["Level 1 — PM handles", "Level 2 — GM", "Level 3 — Founder (Immediately)", "No escalation needed"], correct: 2 },
        { q: "Minor delays (1-2 days) are handled by:", options: ["Founder", "GM", "PM (You) — Level 1", "Legal team"], correct: 2 },
        { q: "Technical blocker escalation timeframe:", options: ["Within 24 hours", "Within 2 hours", "Within 1 week", "Never escalate technical issues"], correct: 1 },
        { q: "Delay communication should be sent:", options: ["After the deadline passes", "BEFORE the original deadline", "Only if client asks", "Never"], correct: 1 },
        { q: "Escalation message must include all EXCEPT:", options: ["What you've tried", "Your recommendation", "Personal complaints about client", "Need decision by date"], correct: 2 },
        { q: "Client unhappy with developer's work. You should:", options: ["Blame the developer to client", "Be the buffer, gather specific feedback, never blame team", "Cancel project", "Ignore the complaint"], correct: 1 },
        { q: "Client asking for refund — you should:", options: ["Agree immediately", "Never agree yourself, document, escalate immediately", "Argue with client", "Ignore"], correct: 1 },
        { q: "Before escalating, you should:", options: ["Just escalate immediately", "Try to solve yourself, document facts, have recommendation ready", "Wait a week", "Ask client permission"], correct: 1 },
        { q: "Legal threat escalation level:", options: ["Level 1", "Level 2", "Level 3 — Founder (Immediately)", "No escalation"], correct: 2 },
        { q: "Project delayed 5+ days. You should:", options: ["Hide it from everyone", "Escalate to GM", "Tell client after delivery", "Blame developer"], correct: 1 }
    ],
    9: [
        { q: "Before handover, Mobile PageSpeed should be:", options: ["50+", "85+", "30+", "Any score"], correct: 1 },
        { q: "Kickoff call duration:", options: ["5 minutes", "30-45 minutes", "3 hours", "10 minutes"], correct: 1 },
        { q: "Weekly check-in duration:", options: ["2 hours", "15-20 minutes", "5 minutes", "1 hour"], correct: 1 },
        { q: "Final delivery message should include all EXCEPT:", options: ["Training video link", "Support period details", "Internal team chat logs", "Next steps for client"], correct: 2 },
        { q: "Project handover agenda includes:", options: ["Only final review", "Final review, training, access handover, support info, review request", "Just send files", "Only training"], correct: 1 },
        { q: "Kickoff call must-get items include:", options: ["Client's personal life story", "Shopify access, assets location, first review date", "Nothing specific", "Only timeline"], correct: 1 },
        { q: "Before delivery, what must be completed?", options: ["Only homepage", "Test order, no console errors, all products, policies", "Just checkout", "Nothing specific"], correct: 1 },
        { q: "Weekly check-in includes 'Demo/Show Work' for:", options: ["0 minutes", "3-8 minutes (5 min section)", "30 minutes", "Never demo work"], correct: 1 },
        { q: "Handover meeting ends with:", options: ["Nothing", "Review/testimonial request", "Argument", "Cancellation"], correct: 1 },
        { q: "'No placeholder text' means:", options: ["Some dummy text is OK", "ALL content must be real, no Lorem Ipsum", "Placeholder is fine", "Only homepage matters"], correct: 1 }
    ],
    10: [
        { q: "If client asks 'Any update?' this means:", options: ["Normal", "You've failed — they shouldn't need to ask", "Project done", "Good sign"], correct: 1 },
        { q: "Daily updates sent where:", options: ["Inbox only", "Order chat only", "BOTH inbox AND order chat", "Email only"], correct: 2 },
        { q: "Problems communicated within:", options: ["24 hours", "2 hours of knowing", "1 week", "Never"], correct: 1 },
        { q: "'Scope is Sacred' means:", options: ["Scope can change", "New requests = new quote, no exceptions", "Free changes", "No scope"], correct: 1 },
        { q: "Early homepage preview sent:", options: ["Day 7", "Day 1-2 (NON-NEGOTIABLE)", "Day 14", "Never"], correct: 1 },
        { q: "Standard delivery timeline:", options: ["3 days", "7-14 days", "30 days", "1 day"], correct: 1 },
        { q: "Buffer principle — if you think 5 days:", options: ["Quote 5", "Quote 3", "Quote 7 (add 20-30%)", "Quote 10"], correct: 2 },
        { q: "Client hates design. FIRST action:", options: ["Redo everything", "Get defensive", "Ask clarifying questions", "Cancel"], correct: 2 },
        { q: "Free extra work request. CORRECT response:", options: ["'Sure, no problem!'", "'Here are options with pricing'", "'No'", "Ignore"], correct: 1 },
        { q: "After client call, you MUST:", options: ["Nothing", "Send written summary", "Forget", "Wait for them"], correct: 1 },
        { q: "Revision rounds included:", options: ["Unlimited", "2 rounds", "0", "10"], correct: 1 },
        { q: "Client threatens refund. Escalation Level:", options: ["Level 1", "Level 2", "Level 3 — Founder", "None"], correct: 2 },
        { q: "Technical blocker escalation timeframe:", options: ["24 hours", "2 hours", "1 week", "Never"], correct: 1 },
        { q: "Client unresponsive — what to do:", options: ["Pause project", "Keep working, complete to YOUR expectations", "Cancel", "Wait forever"], correct: 1 },
        { q: "Live Revision Call duration:", options: ["15 min", "1-2 hours", "5 min", "5 hours"], correct: 1 },
        { q: "1+1+C meeting format:", options: ["1 hour + 1 day", "1 PM + 1 Developer + Client", "1 meeting", "1 week"], correct: 1 },
        { q: "Mobile PageSpeed for delivery:", options: ["50+", "85+", "30+", "Any"], correct: 1 },
        { q: "Kickoff call duration:", options: ["5 min", "30-45 min", "3 hours", "10 min"], correct: 1 },
        { q: "Unresponsive client Day 5 action:", options: ["Cancel", "Inform GM + follow-up", "Nothing", "Wait"], correct: 1 },
        { q: "P0 priority tasks are:", options: ["Documentation", "Client escalations, deadline deliveries, blockers", "Planning", "Team check-ins"], correct: 1 }
    ]
};

// Export for use
if (typeof module !== 'undefined') {
    module.exports = { taskQuizzes };
}
