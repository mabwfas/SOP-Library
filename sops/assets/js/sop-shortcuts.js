/**
 * Keyboard Shortcuts Helper
 * Shows available keyboard shortcuts
 */

(function () {
    'use strict';

    const SHORTCUTS = [
        { keys: ['Ctrl', 'K'], desc: 'Open search' },
        { keys: ['Ctrl', 'B'], desc: 'Toggle bookmarks' },
        { keys: ['Ctrl', 'T'], desc: 'Toggle Table of Contents' },
        { keys: ['?'], desc: 'Show this help' },
        { keys: ['↑', '↓'], desc: 'Navigate search results' },
        { keys: ['Enter'], desc: 'Select result' },
        { keys: ['Esc'], desc: 'Close panels' }
    ];

    function init() {
        createHelpPanel();
        setupKeyboardHandler();
        console.log('✅ Keyboard Shortcuts loaded');
    }

    function createHelpPanel() {
        const style = document.createElement('style');
        style.textContent = `
            .shortcuts-panel {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) scale(0.9);
                background: linear-gradient(135deg, #1E293B, #0F172A);
                border: 2px solid rgba(99, 102, 241, 0.3);
                border-radius: 20px;
                padding: 30px;
                width: 90%;
                max-width: 400px;
                z-index: 100002;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
                opacity: 0;
                visibility: hidden;
                transition: all 0.2s ease;
            }
            
            .shortcuts-panel.visible {
                opacity: 1;
                visibility: visible;
                transform: translate(-50%, -50%) scale(1);
            }
            
            .shortcuts-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
            }
            
            .shortcuts-header h3 {
                color: #F8FAFC;
                margin: 0;
                font-size: 1.2em;
            }
            
            .shortcuts-close {
                background: none;
                border: none;
                color: #94A3B8;
                font-size: 1.5em;
                cursor: pointer;
            }
            
            .shortcut-row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 12px 0;
                border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            }
            
            .shortcut-row:last-child {
                border-bottom: none;
            }
            
            .shortcut-keys {
                display: flex;
                gap: 5px;
            }
            
            .shortcut-key {
                background: rgba(99, 102, 241, 0.2);
                color: #A5B4FC;
                padding: 4px 10px;
                border-radius: 6px;
                font-size: 0.85em;
                font-weight: 600;
                font-family: monospace;
            }
            
            .shortcut-desc {
                color: #94A3B8;
                font-size: 0.9em;
            }
            
            .shortcuts-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.5);
                z-index: 100001;
                opacity: 0;
                visibility: hidden;
                transition: all 0.2s;
            }
            
            .shortcuts-overlay.visible {
                opacity: 1;
                visibility: visible;
            }
            
            .shortcuts-hint {
                position: fixed;
                bottom: 20px;
                left: 20px;
                background: rgba(30, 41, 59, 0.9);
                color: #94A3B8;
                padding: 8px 15px;
                border-radius: 8px;
                font-size: 0.8em;
                z-index: 9997;
                backdrop-filter: blur(10px);
            }
            
            .shortcuts-hint kbd {
                background: rgba(99, 102, 241, 0.3);
                color: #A5B4FC;
                padding: 2px 6px;
                border-radius: 4px;
                margin-left: 5px;
            }
            
            @media (max-width: 768px) {
                .shortcuts-hint {
                    display: none;
                }
            }
        `;
        document.head.appendChild(style);

        // Panel
        const panel = document.createElement('div');
        panel.id = 'shortcuts-panel';
        panel.className = 'shortcuts-panel';
        panel.innerHTML = `
            <div class="shortcuts-header">
                <h3>⌨️ Keyboard Shortcuts</h3>
                <button class="shortcuts-close" onclick="toggleShortcutsPanel()">✕</button>
            </div>
            ${SHORTCUTS.map(s => `
                <div class="shortcut-row">
                    <div class="shortcut-keys">
                        ${s.keys.map(k => `<span class="shortcut-key">${k}</span>`).join('')}
                    </div>
                    <span class="shortcut-desc">${s.desc}</span>
                </div>
            `).join('')}
        `;
        document.body.appendChild(panel);

        // Overlay
        const overlay = document.createElement('div');
        overlay.id = 'shortcuts-overlay';
        overlay.className = 'shortcuts-overlay';
        overlay.onclick = toggleShortcutsPanel;
        document.body.appendChild(overlay);

        // Hint
        const hint = document.createElement('div');
        hint.className = 'shortcuts-hint';
        hint.innerHTML = 'Press <kbd>?</kbd> for shortcuts';
        document.body.appendChild(hint);

        // Hide hint after 5 seconds
        setTimeout(() => {
            hint.style.transition = 'opacity 0.5s';
            hint.style.opacity = '0';
            setTimeout(() => hint.remove(), 500);
        }, 5000);
    }

    function setupKeyboardHandler() {
        document.addEventListener('keydown', (e) => {
            // ? key to show shortcuts
            if (e.key === '?' && !e.ctrlKey && !e.metaKey) {
                const activeEl = document.activeElement;
                if (activeEl.tagName !== 'INPUT' && activeEl.tagName !== 'TEXTAREA') {
                    e.preventDefault();
                    toggleShortcutsPanel();
                }
            }

            // Escape to close
            if (e.key === 'Escape') {
                const panel = document.getElementById('shortcuts-panel');
                if (panel && panel.classList.contains('visible')) {
                    toggleShortcutsPanel();
                }
            }

            // Ctrl+B for bookmarks
            if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
                e.preventDefault();
                const bookmarkBtn = document.querySelector('.sop-bookmarks-toggle');
                if (bookmarkBtn) bookmarkBtn.click();
            }

            // Ctrl+T for TOC
            if ((e.ctrlKey || e.metaKey) && e.key === 't') {
                e.preventDefault();
                const tocBtn = document.querySelector('.toc-toggle-btn');
                if (tocBtn) tocBtn.click();
            }
        });
    }

    window.toggleShortcutsPanel = function () {
        const panel = document.getElementById('shortcuts-panel');
        const overlay = document.getElementById('shortcuts-overlay');
        if (panel && overlay) {
            panel.classList.toggle('visible');
            overlay.classList.toggle('visible');
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
