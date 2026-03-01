/**
 * SOP Dark Mode Toggle
 * Adds a dark/light mode toggle with persistence
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

        // Add styles
        const style = document.createElement('style');
        style.textContent = `
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
            
            /* Light mode overrides */
            body.light-mode {
                --bg: #F8FAFC !important;
                --card-bg: #FFFFFF !important;
                --text: #1E293B !important;
                --muted: #64748B !important;
                --border: #E2E8F0 !important;
            }
            
            body.light-mode .sidebar {
                background: linear-gradient(180deg, #E2E8F0 0%, #CBD5E1 100%) !important;
            }
            
            body.light-mode .sidebar,
            body.light-mode .sidebar a,
            body.light-mode .sidebar h2 {
                color: #1E293B !important;
            }
            
            body.light-mode .section,
            body.light-mode .card,
            body.light-mode .info-box {
                background: #FFFFFF !important;
                color: #1E293B !important;
            }
            
            body.light-mode h1,
            body.light-mode h2,
            body.light-mode h3,
            body.light-mode h4 {
                color: #1E293B !important;
            }
            
            body.light-mode p,
            body.light-mode li,
            body.light-mode td {
                color: #475569 !important;
            }

            /* Preserve white text on colored backgrounds */
            body.light-mode .keep-light-text,
            body.light-mode .keep-light-text h3,
            body.light-mode .keep-light-text p,
            body.light-mode .keep-light-text a {
                color: white !important;
            }
            
            body.light-mode .main-content {
                background: #F1F5F9 !important;
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
        `;
        document.head.appendChild(style);
        document.body.appendChild(btn);
    }

    function toggleTheme() {
        const isLight = document.body.classList.toggle('light-mode');
        const btn = document.getElementById('theme-toggle');
        btn.innerHTML = isLight ? '☀️' : '🌙';
        localStorage.setItem(STORAGE_KEY, isLight ? 'light' : 'dark');
    }

    function applyStoredTheme() {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'light') {
            document.body.classList.add('light-mode');
            const btn = document.getElementById('theme-toggle');
            if (btn) btn.innerHTML = '☀️';
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
