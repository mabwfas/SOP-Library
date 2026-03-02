/**
 * SOP Dark Mode Toggle
 * Adds a dark/light mode toggle with persistence
 * Pages are light by default; toggle adds body.dark-mode
 */

(function () {
    'use strict';

    const STORAGE_KEY = 'dh_theme_preference';

    function init() {
        createToggleButton();
        applyStoredTheme();
        console.log('✅ Dark Mode Toggle loaded');
    }

    function createToggleButton() {
        const btn = document.createElement('button');
        btn.id = 'theme-toggle';
        btn.className = 'theme-toggle-btn';
        btn.innerHTML = '🌙';
        btn.title = 'Toggle Dark/Light Mode';
        btn.onclick = toggleTheme;

        const style = document.createElement('style');
        style.textContent = `
            /* ========== TOGGLE BUTTON ========== */
            .theme-toggle-btn {
                position: fixed;
                bottom: 80px;
                right: 20px;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: linear-gradient(135deg, #6366F1, #8B5CF6);
                border: none;
                color: white;
                font-size: 1.5em;
                cursor: pointer;
                z-index: 9999;
                box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
                transition: all 0.3s ease;
            }
            .theme-toggle-btn:hover {
                transform: scale(1.1);
                box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6);
            }
            @media (max-width: 768px) {
                .theme-toggle-btn {
                    bottom: 140px;
                    right: 15px;
                    width: 45px;
                    height: 45px;
                    font-size: 1.3em;
                }
            }

            /* ========== DARK MODE — PAGE BACKGROUND ========== */
            body.dark-mode {
                background: #0F172A !important;
                color: #E2E8F0 !important;
            }
            body.dark-mode .main-content {
                background: #0F172A !important;
            }
            body.dark-mode .container {
                background: transparent !important;
            }

            /* ========== DARK MODE — HEADINGS & TEXT ========== */
            body.dark-mode h1,
            body.dark-mode h2,
            body.dark-mode h3,
            body.dark-mode h4,
            body.dark-mode h5,
            body.dark-mode h6 {
                color: #FFFFFF !important;
            }
            body.dark-mode p,
            body.dark-mode li,
            body.dark-mode label,
            body.dark-mode dd,
            body.dark-mode dt {
                color: #E2E8F0 !important;
            }
            body.dark-mode span {
                color: #E2E8F0 !important;
            }
            body.dark-mode a {
                color: #93C5FD !important;
            }
            body.dark-mode a:hover {
                color: #BFDBFE !important;
            }
            body.dark-mode strong,
            body.dark-mode b {
                color: #FFFFFF !important;
            }

            /* ========== DARK MODE — PRESERVE INLINE-STYLED ELEMENTS ========== */
            /* Elements with inline style colors/backgrounds should keep them.
               Only override elements WITHOUT inline styles via the class-based rules below.
               Links & buttons with inline colors must not be overridden to blue. */
            body.dark-mode a[style*="color"],
            body.dark-mode a[style*="background"] {
                color: inherit !important;
            }
            body.dark-mode .action-btn,
            body.dark-mode a.action-btn {
                color: white !important;
            }

            /* Placeholder spans — yellow bg needs dark text */
            body.dark-mode .placeholder {
                color: #1E293B !important;
            }

            /* ========== DARK MODE — SECTIONS & CARDS ========== */
            body.dark-mode .section,
            body.dark-mode .content-section,
            body.dark-mode .card,
            body.dark-mode .info-box,
            body.dark-mode .highlight-box,
            body.dark-mode .template-box,
            body.dark-mode .notes-box,
            body.dark-mode .checklist-card,
            body.dark-mode .manifesto-box,
            body.dark-mode .box,
            body.dark-mode .rules-box,
            body.dark-mode .rule-card,
            body.dark-mode .purpose-box,
            body.dark-mode .ref-card,
            body.dark-mode .quick-ref,
            body.dark-mode .toc {
                background: #1E293B !important;
                border-color: #334155 !important;
                color: #E2E8F0 !important;
            }

            /* TOC grid links (used in incentive-penalty, handbook etc) */
            body.dark-mode .toc-grid a,
            body.dark-mode .toc a {
                background: #334155 !important;
                color: #93C5FD !important;
                border-color: #475569 !important;
            }
            body.dark-mode .toc-grid a:hover,
            body.dark-mode .toc a:hover {
                background: #475569 !important;
            }

            /* ========== DARK MODE — ROLE & DECISION CARDS ========== */
            body.dark-mode .role-section,
            body.dark-mode .decision-card,
            body.dark-mode .outcome-card,
            body.dark-mode .score-card,
            body.dark-mode .issue-card,
            body.dark-mode .log-entry,
            body.dark-mode .timeline-item,
            body.dark-mode .area-card,
            body.dark-mode .meta-item,
            body.dark-mode .step,
            body.dark-mode .flow-step {
                background: #1E293B !important;
                border-color: #334155 !important;
                color: #E2E8F0 !important;
            }

            /* ========== DARK MODE — LIGHT BG OVERRIDES ========== */
            /* Attribute selectors for inline white/near-white backgrounds */
            body.dark-mode [style*="background: white"],
            body.dark-mode [style*="background-color: white"],
            body.dark-mode [style*="background:#fff"],
            body.dark-mode [style*="background: #fff"],
            body.dark-mode [style*="background-color: #fff"],
            body.dark-mode [style*="background: #FFF"],
            body.dark-mode [style*="background: rgb(255, 255, 255)"],
            body.dark-mode [style*="background-color: rgb(255, 255, 255)"] {
                background: #1E293B !important;
                color: #E2E8F0 !important;
            }
            /* JS-scanned light backgrounds get this class */
            body.dark-mode .dm-dark-bg {
                background: #1E293B !important;
                color: #E2E8F0 !important;
            }
            body.dark-mode .dm-dark-bg-green {
                background: #064E3B !important;
                color: #D1FAE5 !important;
            }
            body.dark-mode .dm-dark-bg-blue {
                background: #1E3A5F !important;
                color: #DBEAFE !important;
            }
            body.dark-mode .dm-dark-bg-orange {
                background: #78350F !important;
                color: #FEF3C7 !important;
            }
            body.dark-mode .dm-dark-bg-red {
                background: #7F1D1D !important;
                color: #FEE2E2 !important;
            }

            /* Known classes with light backgrounds */
            body.dark-mode .conversation {
                background: #1E293B !important;
                border-color: #334155 !important;
                color: #E2E8F0 !important;
            }
            body.dark-mode .message.sales {
                background: #064E3B !important;
                border-color: #059669 !important;
                color: #D1FAE5 !important;
            }
            body.dark-mode .message.client {
                background: #1E3A5F !important;
                border-color: #3B82F6 !important;
                color: #DBEAFE !important;
            }
            body.dark-mode .analysis {
                background: #78350F !important;
                border-color: #D97706 !important;
                color: #FEF3C7 !important;
            }
            body.dark-mode .kpi-card {
                background: #1E293B !important;
                border-color: #334155 !important;
                color: #E2E8F0 !important;
            }
            body.dark-mode .moral {
                background: #2D1B4E !important;
                color: #F1F5F9 !important;
            }

            /* ========== DARK MODE — PAGE-SPECIFIC CARDS ========== */
            body.dark-mode .design-card,
            body.dark-mode .comparison-card,
            body.dark-mode .case-study,
            body.dark-mode .tech-card,
            body.dark-mode .phase-card,
            body.dark-mode .platform-card,
            body.dark-mode .calendar-card,
            body.dark-mode .variation-card,
            body.dark-mode .video-card,
            body.dark-mode .chat-example,
            body.dark-mode .prompt-box,
            body.dark-mode .discord-box,
            body.dark-mode .lesson,
            body.dark-mode .time-block,
            body.dark-mode .view-section,
            body.dark-mode .font-showcase,
            body.dark-mode .hero {
                background: #1E293B !important;
                border-color: #334155 !important;
                color: #E2E8F0 !important;
            }

            /* ========== DARK MODE — STORY & ALERT BOXES ========== */
            body.dark-mode .story-box,
            body.dark-mode .opening-story,
            body.dark-mode .real-story {
                background: #2D1B4E !important;
                border-color: #7C3AED !important;
                color: #F1F5F9 !important;
            }
            body.dark-mode .critical-alert {
                background: linear-gradient(135deg, #7F1D1D, #991B1B) !important;
                border-color: #DC2626 !important;
                color: #FEE2E2 !important;
            }
            body.dark-mode .success-box,
            body.dark-mode .box-success {
                background: #064E3B !important;
                border-color: #059669 !important;
                color: #D1FAE5 !important;
            }
            body.dark-mode .warning-box,
            body.dark-mode .box-warning {
                background: #78350F !important;
                border-color: #D97706 !important;
                color: #FEF3C7 !important;
            }
            body.dark-mode .box-danger {
                background: #7F1D1D !important;
                border-color: #DC2626 !important;
                color: #FEE2E2 !important;
            }
            body.dark-mode .box-info {
                background: #1E3A5F !important;
                border-color: #3B82F6 !important;
                color: #DBEAFE !important;
            }
            body.dark-mode .box-purple {
                background: #2D1B4E !important;
                border-color: #8B5CF6 !important;
                color: #EDE9FE !important;
            }

            /* ========== DARK MODE — TABLES ========== */
            body.dark-mode table {
                background: #1E293B !important;
                border-color: #334155 !important;
            }
            body.dark-mode thead,
            body.dark-mode th {
                background: #334155 !important;
                color: #F1F5F9 !important;
                border-color: #475569 !important;
            }
            body.dark-mode td {
                color: #E2E8F0 !important;
                border-color: #334155 !important;
            }
            body.dark-mode tr:hover td {
                background: #334155 !important;
            }
            body.dark-mode .styled-table,
            body.dark-mode .metric-table {
                background: #1E293B !important;
                border-color: #334155 !important;
            }

            /* ========== DARK MODE — FAQ & DETAILS ========== */
            body.dark-mode details {
                background: #1E293B !important;
                border-color: #334155 !important;
            }
            body.dark-mode details summary {
                color: #FFFFFF !important;
                background: #1E293B !important;
            }
            body.dark-mode details > div,
            body.dark-mode .faq-answer {
                color: #E2E8F0 !important;
                background: #1E293B !important;
                border-color: #334155 !important;
            }
            body.dark-mode .faq-item,
            body.dark-mode .faq-card {
                background: #1E293B !important;
                border-color: #334155 !important;
            }
            body.dark-mode .faq-question {
                color: #FFFFFF !important;
            }

            /* ========== DARK MODE — BADGES ========== */
            body.dark-mode .badge {
                color: white !important;
            }
            body.dark-mode .weight-badge,
            body.dark-mode .severity-badge,
            body.dark-mode .decision-badge {
                color: white !important;
            }

            /* ========== DARK MODE — LISTS & CHECK ITEMS ========== */
            body.dark-mode .check-list li,
            body.dark-mode .styled-list li,
            body.dark-mode .tick-list li {
                color: #E2E8F0 !important;
            }
            body.dark-mode .dos-column {
                background: #064E3B !important;
                border-color: #059669 !important;
                color: #D1FAE5 !important;
            }
            body.dark-mode .donts-column {
                background: #7F1D1D !important;
                border-color: #DC2626 !important;
                color: #FEE2E2 !important;
            }

            /* ========== DARK MODE — CODE BLOCKS ========== */
            body.dark-mode pre,
            body.dark-mode code,
            body.dark-mode .code-block {
                background: #0F172A !important;
                color: #E2E8F0 !important;
                border-color: #334155 !important;
            }

            /* ========== DARK MODE — FORM ELEMENTS ========== */
            body.dark-mode input,
            body.dark-mode select,
            body.dark-mode textarea {
                background: #334155 !important;
                color: #F1F5F9 !important;
                border-color: #475569 !important;
            }
            body.dark-mode input::placeholder {
                color: #94A3B8 !important;
            }

            /* ========== DARK MODE — SOP FEATURE PANELS ========== */
            body.dark-mode .toc-panel,
            body.dark-mode .search-panel,
            body.dark-mode .bookmarks-panel {
                background: #1E293B !important;
                border-color: #334155 !important;
                color: #E2E8F0 !important;
            }
            body.dark-mode .toc-panel a,
            body.dark-mode .bookmarks-panel a {
                color: #93C5FD !important;
            }
            body.dark-mode .toc-panel a:hover,
            body.dark-mode .bookmarks-panel a:hover {
                color: #BFDBFE !important;
                background: rgba(51, 65, 85, 0.5) !important;
            }

            /* ========== DARK MODE — GRIDS ========== */
            body.dark-mode .score-grid > *,
            body.dark-mode .design-grid > *,
            body.dark-mode .comparison-grid > *,
            body.dark-mode .tech-grid > *,
            body.dark-mode .platform-grid > *,
            body.dark-mode .calendar-grid > *,
            body.dark-mode .variation-grid > *,
            body.dark-mode .video-grid > *,
            body.dark-mode .meta-grid > *,
            body.dark-mode .rules-grid > *,
            body.dark-mode .toc-grid > *,
            body.dark-mode .dos-donts-grid > * {
                border-color: #334155 !important;
            }

            /* ========== DARK MODE — PROCESS STEPS ========== */
            body.dark-mode .step-num,
            body.dark-mode .flow-num {
                background: #334155 !important;
                color: #F1F5F9 !important;
            }
            body.dark-mode .process-steps,
            body.dark-mode .process-flow {
                border-color: #334155 !important;
            }

            /* ========== DARK MODE — HEADER BANNER (handbook) ========== */
            body.dark-mode .header-banner {
                background: #1E293B !important;
                border-color: #334155 !important;
            }

            /* ========== DARK MODE — FOOTER ========== */
            body.dark-mode .footer {
                color: #94A3B8 !important;
                border-color: #334155 !important;
            }

            /* ========== DARK MODE — SIDEBAR NAV BUTTONS ========== */
            body.dark-mode .sidebar-nav-grid a {
                background: rgba(255,255,255,0.08) !important;
                border-color: rgba(255,255,255,0.15) !important;
            }
            body.dark-mode .sidebar-nav-grid a:hover {
                background: rgba(255,255,255,0.15) !important;
            }

            /* ========== DARK MODE — SCROLLBAR ========== */
            body.dark-mode ::-webkit-scrollbar {
                background: #0F172A;
            }
            body.dark-mode ::-webkit-scrollbar-thumb {
                background: #334155;
                border-radius: 4px;
            }

            /* ========== DARK MODE — SECTION NUMBERS & ICONS ========== */
            body.dark-mode .section-number {
                background: #334155 !important;
                color: #F1F5F9 !important;
            }
            body.dark-mode .section-header {
                border-color: #334155 !important;
            }

            /* ========== PRESERVE — KEEP UNCHANGED IN DARK MODE ========== */
            body.dark-mode .keep-light-text,
            body.dark-mode .keep-light-text h3,
            body.dark-mode .keep-light-text p,
            body.dark-mode .keep-light-text a {
                color: white !important;
            }
            /* Header keeps its gradient + white text */
            body.dark-mode .header,
            body.dark-mode .header h1,
            body.dark-mode .header p,
            body.dark-mode .header span {
                color: white !important;
            }

            /* ========== DARK MODE — PRINT BUTTON ========== */
            body.dark-mode .print-btn {
                background: #334155 !important;
                color: #F1F5F9 !important;
                border-color: #475569 !important;
            }

            /* ========== TRANSITION ========== */
            body {
                transition: background-color 0.3s ease, color 0.3s ease;
            }
            .main-content,
            .section,
            .card,
            .info-box,
            details,
            table {
                transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(btn);
    }

    function toggleTheme() {
        const isDark = document.body.classList.toggle('dark-mode');
        const btn = document.getElementById('theme-toggle');
        btn.innerHTML = isDark ? '☀️' : '🌙';
        localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
        if (isDark) {
            scanLightBackgrounds();
        } else {
            clearDarkOverrides();
        }
    }

    function applyStoredTheme() {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'dark') {
            document.body.classList.add('dark-mode');
            const btn = document.getElementById('theme-toggle');
            if (btn) btn.innerHTML = '☀️';
            scanLightBackgrounds();
        }
    }

    /**
     * Scans for elements with inline light backgrounds that CSS attribute
     * selectors can't catch (rgb values, near-white colors) and adds
     * dark-mode override classes.
     */
    function scanLightBackgrounds() {
        const mainContent = document.querySelector('.main-content') || document.body;
        mainContent.querySelectorAll('[style]').forEach(function(el) {
            var inlineStyle = el.style.background || el.style.backgroundColor || '';
            if (!inlineStyle) return;

            // Parse the computed background
            var bg = window.getComputedStyle(el).backgroundColor;
            if (bg === 'rgba(0, 0, 0, 0)') return;

            var match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
            if (!match) return;

            var r = parseInt(match[1]);
            var g = parseInt(match[2]);
            var b = parseInt(match[3]);

            // Skip if already dark (luminance < 128)
            var lum = 0.299 * r + 0.587 * g + 0.114 * b;
            if (lum < 128) return;

            // Determine the color category for smart dark replacement
            var maxC = Math.max(r, g, b);
            var minC = Math.min(r, g, b);
            var saturation = maxC > 0 ? (maxC - minC) / maxC : 0;

            if (saturation < 0.15) {
                // Near-white / gray — generic dark bg
                el.classList.add('dm-dark-bg');
            } else if (g > r && g > b) {
                // Green-tinted
                el.classList.add('dm-dark-bg-green');
            } else if (b > r && b > g) {
                // Blue-tinted
                el.classList.add('dm-dark-bg-blue');
            } else if (r > g && r > b && g > b) {
                // Orange/amber-tinted
                el.classList.add('dm-dark-bg-orange');
            } else if (r > g && r > b) {
                // Red-tinted
                el.classList.add('dm-dark-bg-red');
            } else {
                // Fallback
                el.classList.add('dm-dark-bg');
            }
        });
    }

    function clearDarkOverrides() {
        document.querySelectorAll('.dm-dark-bg, .dm-dark-bg-green, .dm-dark-bg-blue, .dm-dark-bg-orange, .dm-dark-bg-red').forEach(function(el) {
            el.classList.remove('dm-dark-bg', 'dm-dark-bg-green', 'dm-dark-bg-blue', 'dm-dark-bg-orange', 'dm-dark-bg-red');
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
