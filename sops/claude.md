# Claude Code Changelog

All changes made by Claude Code to the SOP Library project.
**Total impact:** 116 files changed, 18,498 insertions, 5,274 deletions across 20 commits.

---

## Session 4: QA Report Fixes (Mar 1, 2026)

### Commit `323a67f` — QA Report Fixes (6 files)
**Scope:** 10 issues from full QA report — UX, accessibility, navigation

**Homepage (index.html):**
- Fixed XP hover inflation: removed `mouseenter` +5 XP listener, kept click-only +10 (#5)
- Fixed matrix rain bleeding through role cards: added `z-index: 1` to `.role-card` (#9)
- Fixed God Mode: removed disruptive `alert()` popup, auto-reverts hue-rotate after 3 seconds (#21)
- Fixed placeholder `#` links: added `title="Coming Soon"` tooltip and `onclick="event.preventDefault()"` to Daily Routine & Chat Sim KRA/KPI buttons (#2)
- Fixed typo "High-fi Prototypes" → "Hi-fi Prototypes" on UI/UX Designer card (#12)
- Added Operations role card with Training link — was previously unreachable from homepage (#11)

**Other files:**
- Created branded `404.html` page with Back to Library + Training Hub links (#1)
- Fixed search result count mismatch: increased `maxResults` from 15→50 in `sop-search.js`, show total count when results exceed display limit (#4)
- Fixed light mode contrast on purple "Deep Dive" banner in `employee-handbook.html`: added `.keep-light-text` class and CSS rule in `sop-theme.js` to preserve white text on colored backgrounds (#15)
- Fixed double emoji on Designer KRA badge: `💰 🎨 Conversion Design` → `🎨 Conversion Design` (#13)

---

## Session 3: Full-Project QA Audit (Feb 28 - Mar 1, 2026)

### Commit `c034f9c` — Deep QA Pass (18 files, -950 lines)
**Scope:** HTML validation, training consistency, dead code removal

- Fixed 40 malformed `<h3">` tags (extra quote) across all 10 KPI files
- Removed 888 lines of duplicate content after `</body>` in 3 SOP files (daily-sop, finance-sop, social-media-sop had duplicate scripts and orphaned sections appended after the closing body tag)
- Removed duplicate `admin-mode.js` include in pm-sop.html
- Added missing `confetti.js` script to sales-training.html (was the only training module without it, breaking certificate celebration animation)
- Removed leftover dev "Skip to Task 10" button from fullstack-training.html (production leak)
- Fixed broken relative link in daily-onboarding.html (`resources/daily-assets.html` -> `../resources/daily-assets.html`)
- Added "View Certificate" button to fiverr-risk-training-app.js results screen (was the only module missing it)

### Commit `a13a056` — Full-Project Audit (47 files)
**Scope:** CSS integrity, favicons, broken references, meta tags

- Removed duplicate `quiz.css` and `admin-mode.css` `<link>` includes in 10 SOP files (tags appeared twice in `<head>`)
- Added missing CSS files (mobile-override, hero-cursor, copy-button, admin-mode) to 8 HR/matrix pages (authority-matrix, escalation-matrix, performance-review, process-improvement-log, rnr, incentive-penalty, onboarding, employee-handbook)
- Fixed broken `../../admin-mode.css` path in 6 onboarding/resources files (double parent traversal instead of single)
- Removed broken `assets/css/style.css` references from 16 onboarding/resources files (file doesn't exist, pages use inline styles)
- Added missing favicon `<link rel="icon">` to 22 files across dts/, onboarding/, resources/, and verify.html
- Fixed onboarding.html title format from "New Employee Onboarding | Digital Heroes" to "Digital Heroes | New Employee Onboarding" for consistency
- Updated index.html: added meta description and Open Graph tags, updated training hub card from "12 Role Trainings / 300+ Quiz" to "14 Role Trainings / 2,000+ Quiz"

### Commit `116a2f6` — Hub Card Counts Fix (12 files)
**Scope:** Training hub data accuracy

Browser-verified exact task/quiz counts for each of the 14 training modules and updated 12 hub cards that had stale data:

| Module | Before | After |
|--------|--------|-------|
| WordPress | 10 Tasks / 110 Quiz | 11 Tasks / 115 Quiz |
| Content | 10 Tasks / 30 Quiz | 11 Tasks / 130 Quiz |
| CS | 10 Tasks / 30 Quiz | 11 Tasks / 115 Quiz |
| Designer | 10 Tasks / 30 Quiz | 13 Tasks / 135 Quiz |
| Full Stack | 10 Tasks / 30 Quiz | 14 Tasks / 169 Quiz |
| PM | 10 Tasks / 30 Quiz | 11 Tasks / 153 Quiz |
| Finance | 10 Tasks / 30 Quiz | 11 Tasks / 125 Quiz |
| Social Media | 10 Tasks / 30 Quiz | 11 Tasks / 125 Quiz |
| HR | 10 Tasks / 30 Quiz | 14 Tasks / 140 Quiz |
| Client Chat | 10 Tasks / 30 Quiz | 11 Tasks / 112 Quiz |
| Operations | 10 Tasks / 30 Quiz | 13 Tasks / 145 Quiz |
| Fiverr Risk | 10 Tasks / 100 Quiz | 11 Tasks / 125 Quiz |

### Commit `8c5f483` — Developer QA Fixes (19 files)
**Scope:** Critical training system bugs, UX improvements

**Critical:**
- Fixed NaN localStorage key bug in `training-enhancement.js`: `let`/`const` at top-level scope don't create `window` properties, so `window.currentTask` returned `undefined`. Changed to direct global lexical variable access with `typeof` safety checks.
- Fixed score always saved as 0 (same root cause: `window.userAnswers` was `undefined`)
- Added certificate completion guard in `training-certificate.js` preventing certificate access before all tasks are done

**Major:**
- Fixed streak best counter never incrementing on first day in `training-core.js`
- Added locked task click feedback with toast notification across all 14 training app files
- Fixed developer Task 12 quiz (had only 9 questions, added 10th)
- Removed duplicate YouTube iframes in developer Task 3

**Minor:**
- Added title tooltips to sidebar task descriptions for truncated text
- Updated developer hub card quiz count (180 -> 193)

---

## Session 2: Training Modules QA & Content Expansion (Feb 27-28, 2026)

### Commit `6472952` — 35 QA Issues Fixed (multiple files)
**Scope:** Comprehensive QA across all 14 training modules

**Critical fixes:**
- Fixed progress bar overflow (110%) with dynamic calculation capped at 100%
- Fixed quiz timer not stopping on Exit Quiz (patched `openTask` to call `hideTimer`)
- Removed broken sales-sop.html references from content
- Guarded mermaid rendering when no `.mermaid` elements exist
- Fixed certificate title mismatch (Technical Sales -> Sales Executive)

**Quiz & UX:**
- Added validation message when clicking Next without selecting an answer
- Hidden Previous button on Q1 instead of showing disabled
- Removed duplicate checkmarks in sidebar (kept left checkmark only)
- Disabled QA_MODE and removed Skip (QA) buttons from all 14 modules

**Content fixes (sales training):**
- Fixed Final Certification task numbering table (was off by 1)
- Fixed prerequisites text and exam heading numbering

**Design & mobile:**
- Added mobile sidebar close button to all 14 training HTML files
- Fixed timer positioning on mobile viewports
- Added responsive iframe CSS for YouTube embeds
- Blocked matrix rain from bleeding through training hub content
- Added favicon and OG meta tags to all training pages

**Accessibility:**
- Added ARIA role/modal/label to certificate modal in all 14 app files
- Added focus styles for certificate modal

### Commit `be015c0` — Developer Training Expansion + Fixes
**Scope:** Content expansion, emoji repair, certificate/quiz improvements

- Expanded developer training from 14 to 18 tasks:
  - Task 14: Store Design Fundamentals (color theory, typography, visual hierarchy)
  - Task 15: Custom Sections & Page Design (JSON schemas, homepage design)
  - Task 16: Full Store Customization (header/footer, mobile-first, accessibility)
  - Task 17: CRO, Psychology & Copywriting (Cialdini's 6 principles, AIDA/PAS)
  - Task 18: Career Growth & Final Exam (renumbered from task 14)
- Fixed corrupted Unicode emojis across 12 HTML files (caused by PowerShell cache-busting command)
- Fixed quiz timer not stopping after completion (moved `hideTimer` to top of `showResults`)
- Fixed certificate modal: added scroll support, name prompt, mobile responsive styles
- Fixed template literal bug in quiz fail message across 13 app files
- Added skip-to-certificate redirect on last task for all 14 modules
- Dynamic progress bar calculation based on total tasks

### Commit `9c1b018` — Certificate Checksum Validation + Content Expansion
**Scope:** Security, massive content expansion, QA automation

**Certificate system overhaul:**
- Replaced insecure regex-only verification with cryptographic checksum (cyrb53 hash variant)
- New format: `DMH-CC-II-NNNN-KKKK` (course code, initials, nonce, 4-char checksum)
- Updated `verify.html` with three-tier validation: new checksum (verified), legacy DMH (unverifiable warning), legacy DH (database lookup)
- Updated `training-certificate.js` with matching checksum generation

**Content expansion:**
- Massively expanded sales training (443K), developer training (496K), designer training (387K) with comprehensive Shopify-focused content
- Added missing quizzes for fullstack tasks 12-14 (40 questions)
- Replaced fiverr-risk `alert()` with proper certificate modal

**Infrastructure:**
- Added QA_MODE, dynamic `quizLength`, and dynamic score display to all 14 app files
- Added cache-busting `?v=3` for training-certificate.js across all 14 HTML files
- QA verified: 30 JS files syntax pass, all 14 modules browser tested

---

## Session 1: Training Module Fixes & Infrastructure (Feb 25-27, 2026)

### Commit `2541376` — Data File Registration Fixes
- Fixed sales-training-data.js (had zero `window.taskNContent` registrations after a failed edit)
- Fixed fullstack-training-data-part2.js (defined task6-10 content but never registered on window)

### Commits `a7eb523`, `8f7162b`, `9bea8d8`, `50c41ed` — Content Coming Soon Bug
**Root cause:** `const` variables at top-level don't auto-register on `window`. The training system uses `window['task' + N + 'Content']` to load task content, but data files declared content with `const` which doesn't create window properties.

- Added `window.taskNContent` registrations to all 15 training data files
- Fixed across wordpress, operations, fullstack, fiverr-risk, sales, and 10 other modules
- Removed temporary fix scripts after permanent solution was applied

### Commit `b0f4c0c` — Training Sidebar Fix
- Fixed sidebar task IDs starting from 0 instead of 1
- Fixed sequential numbering across all modules

### Commit `3f3e1a1` — Sales Incentive Cleanup
- Removed hardcoded 5% sales incentive references
- Updated to point to Incentive & Penalty framework as single source of truth

### Commits `9101d35`, `18f4691` — Mobile Optimization
- Mobile optimized authority matrix and roles/responsibilities pages
- Mobile optimized incentive page with card tables and responsive layout
- Added Delhi team discretion note

### Commit `6a558df` — Sales Incentive Updates
- Updated Enterprise commission to 30k
- Added overachievement 1% after 20k threshold
- Added per-order clarification

### Commit `aa5a5d6` — Employee Handbook Update
- Incentive/penalty page overhaul in employee handbook

---

## Architecture Notes

### Training Module Structure
Each of the 14 training modules consists of 3 files:
- `training/{role}-training.html` — Page shell with sidebar, header, script includes
- `training/{role}-training-app.js` — Application logic (quiz engine, progress, navigation)
- `training/{role}-training-data.js` — Task content and quiz questions

Shared across all modules:
- `training/training-core.js` — Score history, streaks, leaderboard
- `training/training-enhancement.js` — Score saving, quiz result processing
- `training/training-certificate.js` — Certificate generation with checksum verification
- `training/training-quiz-enhance.js` — Quiz UI enhancements
- `assets/js/confetti.js` — Certificate celebration animation

### Certificate Verification System
Format: `DMH-{CourseCode}-{Initials}-{Nonce}-{Checksum}`
- Example: `DMH-SL-JS-A7K2-X3M9`
- Checksum: cyrb53-variant hash using shared secret `dh_cert_2026_v3_salt`
- Verification: `verify.html` recomputes checksum client-side and compares
- Backward compatible: legacy `DMH-XX-XXXX` and `DH-XXX-XXXXXXXX` formats handled gracefully

### Key Technical Decisions
- **`let`/`const` vs `window` properties:** Top-level `let`/`const` in non-module scripts create bindings in the global lexical environment but do NOT create `window` properties. IIFEs access these via scope chain, not `window.xxx`. This was the root cause of the NaN key bug and Content Coming Soon bug.
- **Client-side checksum:** Acceptable for anti-casual-forgery; not true security since the secret is in client code. Brute-forcing the 4-char checksum (~1.7M combinations) is impractical for casual attempts.

### Known Remaining Items (Low Priority)
- **DTS architectural split:** 8 of 10 DTS files use a simpler old-style layout vs 2 new-style with sidebars (different build phases, intentional)
- **Duplicate HTML IDs** in 5 SOP files (TOC anchors + section anchors share IDs) — cosmetic, doesn't break functionality
- **34 orphaned utility scripts** (one-time fix/migration `.js` and `.py` files in root and training/) — safe to clean up
- **`fiverr-risk-sop.html`** loads `quiz.css` but has no quiz content — harmless
- **`hr-training-data.js`** is orphaned (HR module uses `hr-training-data-new.js`)
- **`fullstack-training-data-part1.js`** is orphaned (never referenced by HTML)
