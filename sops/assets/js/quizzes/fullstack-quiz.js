const fullstackQuestions = [
    // 1-5: The $5 Lakh Lesson (Planning)
    { q: "What saved the $5 Lakh project from failure?", options: ["Working harder", "Stopping to create a detailed Technical Specification", "Hiring more devs", "Ignoring the client"], correct: 1 },
    { q: "What is the #1 Principle of Full Stack Projects?", options: ["Code functionality first", "Spec before Code", "Design first", "Database first"], correct: 1 },
    { q: "Discovery for complex projects is:", options: ["Free", "A separate Paid Engagement", "Optional", "Fast"], correct: 1 },
    { q: "Every hour spent in Discovery saves how much in development?", options: ["1 hour", "10 hours", "No time", "5 mins"], correct: 1 },
    { q: "Once the Spec is signed off, the scope is:", options: ["Flexible", "Locked (Frozen)", "Open to suggestions", "Unknown"], correct: 1 },

    // 6-10: Technical Specification Document (TSD)
    { q: "What is the TSD?", options: ["A suggestion", "Your Contract defining exactly what will be built", "A drawing", "An invoice"], correct: 1 },
    { q: "Which section is 'Very Important' to include in TSD?", options: ["Team photos", "Out of Scope (What is NOT included)", "Marketing plan", "Office address"], correct: 1 },
    { q: "What defines 'User Roles'?", options: ["Who can do what in the system", "Job titles", "Avatars", "Passwords"], correct: 1 },
    { q: "Acceptance Criteria belong in which section?", options: ["Feature List", "Overview", "Timeline", "None"], correct: 0 },
    { q: "Why do we map 'User Flows'?", options: ["To look busy", "To understand step-by-step processes", "To draw pretty pictures", "To increase budget"], correct: 1 },

    // 11-15: Technology Stack & Setup
    { q: "Which frontend framework is recommended?", options: ["Angular", "Next.js / React", "Vue", "jQuery"], correct: 1 },
    { q: "For database ORM, what is listed?", options: ["Mongoose", "Prisma", "Sequelize", "Raw SQL"], correct: 1 },
    { q: "What should you NEVER commit to the repo?", options: ["Code", ".env files with secrets", "Images", "README"], correct: 1 },
    { q: "Which hosting platform is recommended for Next.js?", options: ["Heroku", "Vercel", "GoDaddy", "HostGator"], correct: 1 },
    { q: "What is the first step in Project Setup?", options: ["Start coding", "Create GitHub Repository (Private)", "Deploy", "Test"], correct: 1 },

    // 16-20: Database Design
    { q: "For primary keys in distributed systems, use:", options: ["Auto-increment Integer", "UUID", "Random string", "Name"], correct: 1 },
    { q: "What is a 'Soft Delete'?", options: ["Deleting slowly", "Using a 'deletedAt' timestamp instead of removing data", "Deleting backups", "Removing files"], correct: 1 },
    { q: "Every table should have which timestamps?", options: ["None", "createdAt and updatedAt", "bornAt", "diedAt"], correct: 1 },
    { q: "What implies 'Normalization'?", options: ["Making data normal", "Avoiding duplication by using relationships", "Deleting data", "Formatting text"], correct: 1 },
    { q: "Which DB is listed for relational data?", options: ["MongoDB", "PostgreSQL", "Redis", "Neo4j"], correct: 1 },

    // 21-25: API Development
    { q: "RESTful naming convention for users endpoint:", options: ["/api/getUsers", "/api/users", "/api/create-user", "/api/u"], correct: 1 },
    { q: "HTTP Status 201 means:", options: ["Success", "Created", "Bad Request", "Error"], correct: 1 },
    { q: "HTTP Status 401 means:", options: ["Not Found", "Unauthorized", "Server Error", "OK"], correct: 1 },
    { q: "How should you authenticate APIs?", options: ["API Key in URL", "JWT in Authorization header or httpOnly cookie", "Password in body", "No auth"], correct: 1 },
    { q: "Where must validation happen?", options: ["Frontend only", "Backend (Server-side) + Frontend", "Database triggers", "Nowhere"], correct: 1 },

    // 26-30: Security
    { q: "Can you expose API keys in frontend code?", options: ["Yes", "Never", "Sometimes", "If encrypted"], correct: 1 },
    { q: "How do you store passwords?", options: ["Plain text", "Hashed (never plain text)", "Encrypted in Word doc", "On sticky note"], correct: 1 },
    { q: "Is 'Client-side validation' enough security?", options: ["Yes", "No (Never trust client data)", "Maybe", "For small apps"], correct: 1 },
    { q: "What prevents SQL injection?", options: ["Firewall", "ORM / Parameterized queries", "Strong passwords", "HTTPS"], correct: 1 },
    { q: "Should you disable CORS in production?", options: ["Yes", "No (Never disable CORS security rules)", "Maybe", "If lazy"], correct: 1 },

    // 31-35: Development Process
    { q: "Development happens in:", options: ["One go", "Phases (Milestones)", "Chaos", "Reverse"], correct: 1 },
    { q: "Phase 1 usually covers:", options: ["Launch", "Foundation (Auth, DB, Base Layout)", "Polish", "Marketing"], correct: 1 },
    { q: "When do you test?", options: ["After launch", "Before Deploy (Continuously)", "Never", "When client complains"], correct: 1 },
    { q: "If code is hard to understand, it is:", options: ["Clever", "Bad code (Failed quality)", "Secure", "Advanced"], correct: 1 },
    { q: "Who approves the milestone before proceeding?", options: ["You", "The Client", "Nobody", "The Server"], correct: 1 },

    // 36-40: Scenarios
    { q: "Client adds 'Real-time GPS' mid-project. You:", options: ["Do it free", "Standard Scope Creep procedure (New Quote)", "Quit", "Cry"], correct: 1 },
    { q: "Deployment breaks. First step:", options: ["Hide", "Check logs / Rollback", "Blame client", "Delete repo"], correct: 1 },
    { q: "API returns 500 Error. It means:", options: ["Not Found", "Server Error (Something went wrong)", "Unauthorized", "Success"], correct: 1 },
    { q: "Client wants to skip Discovery. You:", options: ["Agree", "Refuse (Discovery is mandatory for complex projects)", "Start coding", "Charge double"], correct: 1 },
    { q: "You found a security vulnerability. You:", options: ["Ignore it", "Fix it immediately", "Sell it", "Tell client later"], correct: 1 },

    // 41-45: Integration & Launch
    { q: "When are integrations (Payments, etc) usually done?", options: ["Phase 1", "Phase 3 (Mid-project)", "Post-launch", "Never"], correct: 1 },
    { q: "What is required for Launch?", options: ["Just code", "Deployment, DNS, SSL, Final Test", "Email", "Luck"], correct: 1 },
    { q: "Deliverable for Phase 4 is:", options: ["Idea", "Production-ready application", "Wireframe", "Invoice"], correct: 1 },
    { q: "Why use Environment Variables?", options: ["To complicate things", "To keep secrets safe and config flexible", "To save space", "No reason"], correct: 1 },
    { q: "What is the 'Golden Rule' of API response?", options: ["Return HTML", "Consistent JSON format (success/data/error)", "Random text", "XML"], correct: 1 },

    // 46-50: Final Exam
    { q: "True or False: We work on the 'main' branch directly.", options: ["True", "False (Use feature/develop branches)", "True for speed", "Sometimes"], correct: 1 },
    { q: "True or False: Timestamps are optional.", options: ["True", "False (Required on all tables)", "Only for users", "Only for logs"], correct: 1 },
    { q: "True or False: You can trust data from the browser.", options: ["True", "False (Never trust client)", "If https", "If logged in"], correct: 1 },
    { q: "True or False: Comments are part of code quality.", options: ["True", "False", "No", "Waste of time"], correct: 0 },
    { q: "What is the goal of a Custom Project?", options: ["Make money", "Solve a specific business problem with custom software", "Use React", "Show off"], correct: 1 }
];
