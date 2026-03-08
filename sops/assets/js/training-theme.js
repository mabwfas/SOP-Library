/**
 * Training Dark/Light Mode Toggle
 * Pages are dark by default; toggle adds body.light-mode
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
        btn.innerHTML = '☀️';
        btn.title = 'Toggle dark/light mode';
        btn.addEventListener('click', toggleTheme);
        document.body.appendChild(btn);
    }

    function applyStoredTheme() {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'light') {
            document.body.classList.add('light-mode');
            const btn = document.getElementById('training-theme-toggle');
            if (btn) btn.innerHTML = '🌙';
        }
    }

    function toggleTheme() {
        const isLight = document.body.classList.toggle('light-mode');
        localStorage.setItem(STORAGE_KEY, isLight ? 'light' : 'dark');
        const btn = document.getElementById('training-theme-toggle');
        if (btn) btn.innerHTML = isLight ? '🌙' : '☀️';
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
