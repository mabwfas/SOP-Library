/**
 * Training Dark/Light Mode Toggle
 * Pages are light by default; toggle adds body.dark-mode
 * Persists preference in localStorage
 */
(function () {
    'use strict';

    const STORAGE_KEY = 'dh_training_theme';

    function init() {
        createToggleButton();
        applyStoredTheme();
    }

    function createToggleButton() {
        const btn = document.createElement('button');
        btn.id = 'training-theme-toggle';
        btn.innerHTML = '🌙';
        btn.title = 'Toggle dark/light mode';
        btn.addEventListener('click', toggleTheme);
        document.body.appendChild(btn);
    }

    function applyStoredTheme() {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'dark') {
            document.body.classList.add('dark-mode');
            const btn = document.getElementById('training-theme-toggle');
            if (btn) btn.innerHTML = '☀️';
        }
    }

    function toggleTheme() {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
        const btn = document.getElementById('training-theme-toggle');
        if (btn) btn.innerHTML = isDark ? '☀️' : '🌙';
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
