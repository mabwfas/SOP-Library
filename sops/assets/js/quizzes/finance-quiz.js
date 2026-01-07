const financeQuestions = [
    // 1-5: The Financial Crisis (Principles)
    { q: "In the '$3 Lakh Crisis' story, what was the main cause?", options: ["Low sales", "Revenue without Cash (Bad Tracking)", "High taxes", "Bad luck"], correct: 1 },
    { q: "Revenue means nothing if:", options: ["It's tax free", "The money isn't in the bank", "It's high", "It's low"], correct: 1 },
    { q: "Unsent reminders lead to:", options: ["Friendship", "Unpaid invoices & Cash flow problems", "More work", "Happiness"], correct: 1 },
    { q: "What is your job in Finance?", options: ["Count money", "Prevent financial failure by tracking every rupee", "Spend money", "Ignore invoices"], correct: 1 },
    { q: "Why do profitable companies fail?", options: ["They earn too much", "They run out of cash (Cash flow)", "They have too many staff", "They have no office"], correct: 1 },

    // 6-10: Payment Policy
    { q: "Payment Policy for projects < $1.5 Lakhs:", options: ["50% deposit", "100% Upfront (Non-negotiable)", "Pay later", "Installments"], correct: 1 },
    { q: "When does work start?", options: ["When client agrees", "When Payment Clears", "Immediately", "Tomorrow"], correct: 1 },
    { q: "Do we offer discounts?", options: ["Yes, always", "No (Value pricing)", "If asked", "For friends"], correct: 1 },
    { q: "For large projects ($1.5L+), what is the structure?", options: ["100% later", "50% Upfront, 50% on Preview", "Monthly", "Weekly"], correct: 1 },
    { q: "If client says 'I'll pay tomorrow', you:", options: ["Start work", "Wait until paid", "Send draft", "Agree"], correct: 1 },

    // 11-15: Invoicing
    { q: "When should you send the invoice?", options: ["End of month", "Within 24 hours of agreement", "Next week", "Before agreement"], correct: 1 },
    { q: "An invoice MUST have:", options: ["A joke", "Unique Number, Date, Amount, Service Description", "Photo", "Story"], correct: 1 },
    { q: "If an invoice is 'Sent' (Yellow), action is:", options: ["Wait forever", "Follow up if no payment in 48 hours", "Ignore", "Cancel"], correct: 1 },
    { q: "What happens if you send payment to wrong account?", options: ["Panic", "Contact Bank IMMEDIATELY (within hours)", "Wait", "Ignore"], correct: 1 },
    { q: "Why accurate client details?", options: ["Legal validity", "Fun", "Spam", "No reason"], correct: 1 },

    // 16-20: Tracking payments
    { q: "Day 0 action:", options: ["Nothing", "Send Invoice", "Call", "Email"], correct: 1 },
    { q: "Day 2 action (if unpaid):", options: ["Ignore", "Friendly Reminder", "Threaten", "Sue"], correct: 1 },
    { q: "Day 5 action:", options: ["Ignore", "Second Reminder", "Cry", "None"], correct: 1 },
    { q: "Day 7+ action:", options: ["Wait", "Escalate to Manager", "Forget it", "Discount"], correct: 1 },
    { q: "Never assume the client:", options: ["Is busy", "Will pay soon (Assume they forgot)", "Is nice", "Is rich"], correct: 1 },

    // 21-25: Refunds & Disputes
    { q: "Default Refund Policy:", options: ["Full refund always", "No refunds once work begins", "50% back", "Maybe"], correct: 1 },
    { q: "Who approves exceptions to refunds?", options: ["You", "Manager", "Client", "PM"], correct: 1 },
    { q: "Step 1 in Dispute Resolution:", options: ["Refund", "Listen to client concern", "Argue", "Block"], correct: 1 },
    { q: "If client disputes invoice saying 'I thought cheaper':", options: ["Discount", "Show original quote/agreement", "Refund", "Agree"], correct: 1 },
    { q: "What secures support priority?", options: ["Asking nice", "Payment", "Complaints", "Nothing"], correct: 1 },

    // 26-30: Expenses
    { q: "Expense Documentation Rule:", options: ["Just amount", "Receipt + Category + Purpose", "Guess", "None"], correct: 1 },
    { q: "Software expense < $5000:", options: ["Needs manager", "Auto-approval", "Banned", "Cash"], correct: 1 },
    { q: "Marketing expenses needs:", options: ["No approval", "Always Approval", "Sometimes", "Never"], correct: 1 },
    { q: "Why track expenses?", options: ["To be annoying", "To know Profit (Revenue - Expenses)", "Tax only", "Fun"], correct: 1 },
    { q: "If vendor requests payment to different account:", options: ["Pay it", "Red Flag! Verify first", "Ignore", "Delay"], correct: 1 },

    // 31-35: Payroll
    { q: "Salary Day is:", options: ["5th", "1st of every month", "10th", "Last day"], correct: 1 },
    { q: "Attendance calculation cutoff:", options: ["30th", "25th", "15th", "20th"], correct: 1 },
    { q: "Salary Slips sent by:", options: ["1st", "2nd of month", "5th", "10th"], correct: 1 },
    { q: "Who calculates leaves?", options: ["Manager", "Finance (from HR data)", "Client", "Employee"], correct: 1 },
    { q: "Payroll On-Time Target:", options: ["90%", "100%", "50%", "80%"], correct: 1 },

    // 36-40: Reports & KPIs
    { q: "Net Profit =", options: ["Revenue", "Revenue - Expenses", "Cash", "Sales"], correct: 1 },
    { q: "Cash Position is:", options: ["Profit", "What is in bank RIGHT NOW", "Invoices", "Future sales"], correct: 1 },
    { q: "Target Invoice-to-Payment Time:", options: ["7 days", "< 3 days", "30 days", "10 days"], correct: 1 },
    { q: "Target Collection Rate:", options: ["50%", "100%", "80%", "90%"], correct: 1 },
    { q: "Outstanding > 7 Days Target:", options: ["$1000", "$0", "$500", "$100"], correct: 1 },

    // 41-45: Scenarios
    { q: "Client says 'I paid' but no money:", options: ["Trust them", "Ask for screenshot/proof & Check", "Mark paid", "Ignore"], correct: 1 },
    { q: "Client paying in installments (accidental):", options: ["Okay", "Clarify immediately, Don't start until full", "Refund", "Ignore"], correct: 1 },
    { q: "Sent wrong amount:", options: ["Keep it", "Notify/Reconcile immediately", "Hide it", "Spend it"], correct: 1 },
    { q: "Payment Discrepancy means:", options: ["More money", "Difference between invoice and payment", "Less taxes", "None"], correct: 1 },
    { q: "Suspicious transaction:", options: ["Ignore", "Escalate immediately (Red Flag)", "Process it", "Delete it"], correct: 1 },

    // 46-50: Final Exam
    { q: "True or False: We start work on trust.", options: ["True", "False (No payment = No work)", "Sometimes", "For friends"], correct: 1 },
    { q: "True or False: You must reconcile bank weekly.", options: ["True", "False", "Monthly", "Never"], correct: 0 },
    { q: "True or False: Invoices don't need dates.", options: ["True", "False (Must have dates)", "Optional", "Maybe"], correct: 1 },
    { q: "True or False: Discounts train clients to haggle.", options: ["True", "False", "No", "Good business"], correct: 0 },
    { q: "The goal of Finance is:", options: ["Restrictions", "Financial Health & Cash Flow", "Rules", "Paperwork"], correct: 1 }
];
