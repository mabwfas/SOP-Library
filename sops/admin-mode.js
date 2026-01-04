/**
 * ADMIN MODE - Premium SOP Editing System
 * ========================================
 * Password: Work@100
 * Features: Inline editing, History, Rollback, Find & Replace
 */

(function () {
    'use strict';

    // ===========================================
    // CONFIGURATION
    // ===========================================

    const CONFIG = {
        password: 'Work@100',
        storageKeys: {
            session: 'admin_session',
            history: 'admin_history',
            content: 'admin_content'
        },
        autoSaveInterval: 3000
    };

    // ===========================================
    // STATE MANAGEMENT
    // ===========================================

    let state = {
        isLoggedIn: false,
        currentEditElement: null,
        originalContent: '',
        history: [],
        unsavedChanges: false
    };

    // ===========================================
    // INITIALIZATION
    // ===========================================

    function init() {
        // Check for existing session
        checkSession();

        // Create UI elements
        createAdminButton();
        createLoginModal();
        createAdminBanner();
        createHistoryPanel();
        createFindReplacePanel();
        createToastContainer();

        // Load history from storage
        loadHistory();

        // Mark editable elements with STABLE IDs
        markEditableElements();

        // Load saved content AFTER marking elements (important!)
        loadContentFromStorage();

        // Setup event listeners
        setupEventListeners();

        // Apply admin state if logged in
        if (state.isLoggedIn) {
            activateAdminMode();
        }
    }

    // ===========================================
    // SESSION MANAGEMENT
    // ===========================================

    function checkSession() {
        const session = localStorage.getItem(CONFIG.storageKeys.session);
        if (session === 'active') {
            state.isLoggedIn = true;
        }
    }

    function saveSession() {
        localStorage.setItem(CONFIG.storageKeys.session, 'active');
    }

    function clearSession() {
        localStorage.removeItem(CONFIG.storageKeys.session);
    }

    // ===========================================
    // UI CREATION
    // ===========================================

    function createAdminButton() {
        const btn = document.createElement('button');
        btn.className = 'admin-floating-btn locked';
        btn.id = 'adminFloatingBtn';
        btn.innerHTML = '<span class="icon">🔒</span><span>Admin Mode</span>';
        btn.onclick = handleAdminButtonClick;
        document.body.appendChild(btn);
    }

    function createLoginModal() {
        const modal = document.createElement('div');
        modal.className = 'admin-modal-overlay';
        modal.id = 'adminLoginModal';
        modal.innerHTML = `
            <div class="admin-modal">
                <button class="admin-modal-close" onclick="AdminMode.closeLoginModal()">×</button>
                <div id="loginForm">
                    <div class="admin-modal-header">
                        <div class="admin-modal-icon">🔐</div>
                        <h2 class="admin-modal-title">Admin Access</h2>
                        <p class="admin-modal-subtitle">Enter password to unlock editing mode</p>
                    </div>
                    <div class="admin-input-group">
                        <div class="admin-input-wrapper">
                            <input type="password" class="admin-input" id="adminPasswordInput" 
                                   placeholder="Enter password" autocomplete="off">
                            <button class="admin-toggle-password" onclick="AdminMode.togglePassword()">👁️</button>
                        </div>
                        <p class="admin-error-message" id="adminErrorMsg">Incorrect password. Please try again.</p>
                    </div>
                    <button class="admin-submit-btn" onclick="AdminMode.submitPassword()">
                        🔓 Unlock Admin Mode
                    </button>
                </div>
                <div class="admin-success-check" id="loginSuccess">
                    <div class="admin-success-icon">✅</div>
                    <p class="admin-success-text">Welcome, Admin!</p>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        // Enter key to submit
        document.getElementById('adminPasswordInput').addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                window.AdminMode.submitPassword();
            }
        });
    }

    function createAdminBanner() {
        const banner = document.createElement('div');
        banner.className = 'admin-banner';
        banner.id = 'adminBanner';
        banner.innerHTML = `
            <div class="admin-banner-left">
                <span class="admin-banner-title">✨ Admin Mode Active</span>
                <span id="autoSaveStatus" style="font-size: 12px; opacity: 0.8;"></span>
            </div>
            <div class="admin-banner-actions">
                <button class="admin-banner-btn primary" onclick="AdminMode.openFindReplace()">
                    🔍 Find & Replace
                </button>
                <button class="admin-banner-btn primary" onclick="AdminMode.openHistory()">
                    📜 View History
                </button>
                <button class="admin-banner-btn danger" onclick="AdminMode.logout()">
                    🚪 Exit Admin
                </button>
            </div>
        `;
        document.body.appendChild(banner);
    }

    function createHistoryPanel() {
        const panel = document.createElement('div');
        panel.className = 'admin-history-panel';
        panel.id = 'adminHistoryPanel';
        panel.innerHTML = `
            <div class="admin-history-header">
                <h3 class="admin-history-title">📜 Edit History</h3>
                <button class="admin-history-close" onclick="AdminMode.closeHistory()">×</button>
            </div>
            <button class="admin-revert-all" onclick="AdminMode.revertAll()">
                ⏪ Revert All Recent Changes
            </button>
            <div class="admin-history-content" id="historyContent">
                <div class="admin-history-empty">
                    <p>📝 No changes yet</p>
                    <p style="font-size: 13px; margin-top: 5px;">Start editing to see history</p>
                </div>
            </div>
        `;
        document.body.appendChild(panel);
    }

    function createFindReplacePanel() {
        const panel = document.createElement('div');
        panel.className = 'admin-find-panel';
        panel.id = 'adminFindPanel';
        panel.innerHTML = `
            <div class="admin-find-header">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h3 class="admin-find-title">🔍 Find & Replace</h3>
                    <button class="admin-history-close" onclick="AdminMode.closeFindReplace()">×</button>
                </div>
                <div class="admin-find-inputs">
                    <input type="text" class="admin-find-input" id="findInput" placeholder="Find what...">
                    <input type="text" class="admin-find-input" id="replaceInput" placeholder="Replace with...">
                    <button class="admin-find-btn" onclick="AdminMode.performFind()">
                        🔎 Preview Matches
                    </button>
                </div>
            </div>
            <div class="admin-find-results" id="findResults">
                <div class="admin-history-empty">
                    <p>🔍 Enter text to search</p>
                </div>
            </div>
            <button class="admin-find-replace-all" id="replaceAllBtn" style="display: none;" onclick="AdminMode.replaceAll()">
                ✓ Replace All Matches
            </button>
        `;
        document.body.appendChild(panel);
    }

    function createToastContainer() {
        const container = document.createElement('div');
        container.className = 'admin-toast-container';
        container.id = 'adminToastContainer';
        document.body.appendChild(container);
    }

    // ===========================================
    // MARK EDITABLE ELEMENTS
    // ===========================================

    function markEditableElements() {
        // Selectors for all editable content
        const selectors = [
            'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
            'p', 'li', 'td', 'th',
            '.section-header h2',
            '.template-header',
            '.info-box h4',
            '.info-box p',
            '.template-box p',
            '.sidebar-nav a',
            '.sidebar-header h2',
            '.styled-list li',
            '.badge',
            '.header h1',
            '.header .subtitle',
            '.footer p',
            '.footer h3'
        ];

        let elementIndex = 0;
        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                // Skip if already marked or is interactive element
                if (el.hasAttribute('data-editable') ||
                    el.tagName === 'BUTTON' ||
                    el.tagName === 'A' ||
                    el.closest('.admin-modal-overlay') ||
                    el.closest('.admin-banner') ||
                    el.closest('.admin-history-panel') ||
                    el.closest('.admin-find-panel')) {
                    return;
                }

                // Mark as editable with STABLE ID based on page + position
                const stableId = generateStableId(el, elementIndex++);
                el.setAttribute('data-editable', stableId);
            });
        });
    }

    // ===========================================
    // EVENT LISTENERS
    // ===========================================

    function setupEventListeners() {
        // Click on editable elements
        document.addEventListener('click', function (e) {
            if (!state.isLoggedIn) return;

            const editable = e.target.closest('[data-editable]');
            if (editable && !editable.classList.contains('editing')) {
                startEditing(editable);
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', function (e) {
            if (!state.isLoggedIn) return;

            if (state.currentEditElement) {
                if (e.key === 'Escape') {
                    cancelEditing();
                } else if (e.key === 'Enter' && !e.shiftKey &&
                    !['P', 'LI', 'TD'].includes(state.currentEditElement.tagName)) {
                    e.preventDefault();
                    saveEditing();
                }
            }

            // Ctrl+Z for undo
            if (e.ctrlKey && e.key === 'z') {
                if (state.history.length > 0) {
                    e.preventDefault();
                    undoLastChange();
                }
            }
        });

        // Warn before leaving with unsaved changes
        window.addEventListener('beforeunload', function (e) {
            if (state.unsavedChanges) {
                e.preventDefault();
                e.returnValue = '';
            }
        });
    }

    // ===========================================
    // ADMIN MODE ACTIVATION
    // ===========================================

    function handleAdminButtonClick() {
        if (state.isLoggedIn) {
            // Already logged in - toggle admin banner focus
            document.getElementById('adminBanner').classList.toggle('visible');
        } else {
            // Show login modal
            showLoginModal();
        }
    }

    function showLoginModal() {
        const modal = document.getElementById('adminLoginModal');
        modal.classList.add('visible');
        document.getElementById('adminPasswordInput').focus();
    }

    function closeLoginModal() {
        const modal = document.getElementById('adminLoginModal');
        modal.classList.remove('visible');
        document.getElementById('adminPasswordInput').value = '';
        document.getElementById('adminErrorMsg').classList.remove('visible');
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('loginSuccess').classList.remove('visible');
    }

    function togglePassword() {
        const input = document.getElementById('adminPasswordInput');
        const btn = document.querySelector('.admin-toggle-password');
        if (input.type === 'password') {
            input.type = 'text';
            btn.textContent = '🙈';
        } else {
            input.type = 'password';
            btn.textContent = '👁️';
        }
    }

    function submitPassword() {
        const input = document.getElementById('adminPasswordInput');
        const password = input.value;

        if (password === CONFIG.password) {
            // Success
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('loginSuccess').classList.add('visible');

            setTimeout(() => {
                closeLoginModal();
                state.isLoggedIn = true;
                saveSession();
                activateAdminMode();
                showToast('success', 'Admin Mode activated! Click any text to edit.');
            }, 1000);
        } else {
            // Error
            input.classList.add('error');
            document.getElementById('adminErrorMsg').classList.add('visible');

            setTimeout(() => {
                input.classList.remove('error');
            }, 500);
        }
    }

    function activateAdminMode() {
        document.body.classList.add('admin-active');

        const btn = document.getElementById('adminFloatingBtn');
        btn.className = 'admin-floating-btn active';
        btn.innerHTML = '<span class="icon">✓</span><span>Admin Active</span>';

        document.getElementById('adminBanner').classList.add('visible');
    }

    function logout() {
        if (state.unsavedChanges) {
            if (!confirm('You have unsaved changes. Are you sure you want to exit Admin Mode?')) {
                return;
            }
        }

        state.isLoggedIn = false;
        clearSession();

        document.body.classList.remove('admin-active');

        const btn = document.getElementById('adminFloatingBtn');
        btn.className = 'admin-floating-btn locked';
        btn.innerHTML = '<span class="icon">🔒</span><span>Admin Mode</span>';

        document.getElementById('adminBanner').classList.remove('visible');

        // Cancel any active editing
        if (state.currentEditElement) {
            cancelEditing();
        }

        showToast('info', 'Admin Mode deactivated');
    }

    // ===========================================
    // INLINE EDITING
    // ===========================================

    function startEditing(element) {
        // Cancel previous editing if any
        if (state.currentEditElement) {
            cancelEditing();
        }

        state.currentEditElement = element;
        state.originalContent = element.innerHTML;

        element.classList.add('editing');
        element.setAttribute('contenteditable', 'true');
        element.focus();

        // Create action buttons
        createEditActions(element);

        // Select all text
        const range = document.createRange();
        range.selectNodeContents(element);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    }

    function createEditActions(element) {
        // Remove existing actions
        document.querySelectorAll('.admin-edit-actions').forEach(el => el.remove());

        const actions = document.createElement('div');
        actions.className = 'admin-edit-actions visible';
        actions.innerHTML = `
            <button class="admin-edit-btn save" onclick="AdminMode.saveEditing()">
                ✓ Save <span style="opacity:0.7; font-size:11px;">(Enter)</span>
            </button>
            <button class="admin-edit-btn cancel" onclick="AdminMode.cancelEditing()">
                ✗ Cancel <span style="opacity:0.7; font-size:11px;">(Esc)</span>
            </button>
        `;

        // Position relative to element
        element.style.position = 'relative';
        element.appendChild(actions);
    }

    function saveEditing() {
        if (!state.currentEditElement) return;

        const element = state.currentEditElement;
        const newContent = element.innerHTML;

        // Remove action buttons before saving
        element.querySelectorAll('.admin-edit-actions').forEach(el => el.remove());

        // Check if content changed
        if (newContent !== state.originalContent) {
            // Add to history
            addToHistory({
                elementId: element.getAttribute('data-editable'),
                elementTag: element.tagName,
                elementText: element.textContent.substring(0, 50),
                oldContent: state.originalContent,
                newContent: newContent,
                timestamp: new Date().toISOString()
            });

            // Save to storage
            saveContentToStorage(element.getAttribute('data-editable'), newContent);

            showToast('success', 'Changes saved!');
            state.unsavedChanges = false;
        }

        // Clean up
        element.classList.remove('editing');
        element.removeAttribute('contenteditable');
        state.currentEditElement = null;
        state.originalContent = '';
    }

    function cancelEditing() {
        if (!state.currentEditElement) return;

        const element = state.currentEditElement;

        // Restore original content
        element.innerHTML = state.originalContent;

        // Clean up
        element.classList.remove('editing');
        element.removeAttribute('contenteditable');
        element.querySelectorAll('.admin-edit-actions').forEach(el => el.remove());

        state.currentEditElement = null;
        state.originalContent = '';
    }

    // ===========================================
    // HISTORY MANAGEMENT
    // ===========================================

    function loadHistory() {
        const saved = localStorage.getItem(CONFIG.storageKeys.history);
        if (saved) {
            state.history = JSON.parse(saved);
        }
    }

    function saveHistory() {
        localStorage.setItem(CONFIG.storageKeys.history, JSON.stringify(state.history));
    }

    function addToHistory(entry) {
        state.history.unshift(entry);

        // Keep only last 100 entries
        if (state.history.length > 100) {
            state.history = state.history.slice(0, 100);
        }

        saveHistory();
        updateHistoryPanel();
    }

    function updateHistoryPanel() {
        const container = document.getElementById('historyContent');

        if (state.history.length === 0) {
            container.innerHTML = `
                <div class="admin-history-empty">
                    <p>📝 No changes yet</p>
                    <p style="font-size: 13px; margin-top: 5px;">Start editing to see history</p>
                </div>
            `;
            return;
        }

        let html = '';
        state.history.forEach((entry, index) => {
            const time = formatTime(entry.timestamp);
            const oldText = stripHtml(entry.oldContent).substring(0, 100);
            const newText = stripHtml(entry.newContent).substring(0, 100);

            html += `
                <div class="admin-history-item">
                    <div class="admin-history-time">${time}</div>
                    <div class="admin-history-action">
                        Edited <strong>${entry.elementTag}</strong>: "${entry.elementText}..."
                    </div>
                    <div class="admin-history-diff">
                        <div class="admin-history-old">${oldText}...</div>
                        <div class="admin-history-new">${newText}...</div>
                    </div>
                    <button class="admin-history-undo" onclick="AdminMode.undoChange(${index})">
                        ↩️ Undo This Change
                    </button>
                </div>
            `;
        });

        container.innerHTML = html;
    }

    function openHistory() {
        updateHistoryPanel();
        document.getElementById('adminHistoryPanel').classList.add('visible');
    }

    function closeHistory() {
        document.getElementById('adminHistoryPanel').classList.remove('visible');
    }

    function undoChange(index) {
        const entry = state.history[index];

        // Find the element
        const element = document.querySelector(`[data-editable="${entry.elementId}"]`);
        if (element) {
            element.innerHTML = entry.oldContent;
            saveContentToStorage(entry.elementId, entry.oldContent);
            showToast('success', 'Change undone!');
        }

        // Remove from history
        state.history.splice(index, 1);
        saveHistory();
        updateHistoryPanel();
    }

    function undoLastChange() {
        if (state.history.length > 0) {
            undoChange(0);
        }
    }

    function revertAll() {
        if (state.history.length === 0) {
            showToast('info', 'No changes to revert');
            return;
        }

        if (!confirm(`Are you sure you want to revert all ${state.history.length} changes?`)) {
            return;
        }

        // Revert all changes in reverse order
        for (let i = state.history.length - 1; i >= 0; i--) {
            const entry = state.history[i];
            const element = document.querySelector(`[data-editable="${entry.elementId}"]`);
            if (element) {
                element.innerHTML = entry.oldContent;
                saveContentToStorage(entry.elementId, entry.oldContent);
            }
        }

        // Clear history
        state.history = [];
        saveHistory();
        updateHistoryPanel();

        showToast('success', 'All changes reverted!');
    }

    // ===========================================
    // FIND & REPLACE
    // ===========================================

    function openFindReplace() {
        document.getElementById('adminFindPanel').classList.add('visible');
        document.getElementById('findInput').focus();
    }

    function closeFindReplace() {
        document.getElementById('adminFindPanel').classList.remove('visible');
        document.getElementById('findResults').innerHTML = `
            <div class="admin-history-empty">
                <p>🔍 Enter text to search</p>
            </div>
        `;
        document.getElementById('replaceAllBtn').style.display = 'none';
    }

    let findMatches = [];

    function performFind() {
        const searchText = document.getElementById('findInput').value.trim();

        if (!searchText) {
            showToast('error', 'Please enter text to search');
            return;
        }

        findMatches = [];
        const editables = document.querySelectorAll('[data-editable]');

        editables.forEach(el => {
            const text = el.textContent;
            if (text.toLowerCase().includes(searchText.toLowerCase())) {
                findMatches.push({
                    element: el,
                    id: el.getAttribute('data-editable'),
                    text: text,
                    html: el.innerHTML
                });
            }
        });

        displayFindResults(searchText);
    }

    function displayFindResults(searchText) {
        const container = document.getElementById('findResults');

        if (findMatches.length === 0) {
            container.innerHTML = `
                <div class="admin-history-empty">
                    <p>❌ No matches found for "${searchText}"</p>
                </div>
            `;
            document.getElementById('replaceAllBtn').style.display = 'none';
            return;
        }

        let html = `<div class="admin-find-count">Found <strong>${findMatches.length}</strong> matches</div>`;

        findMatches.forEach((match, index) => {
            const highlightedText = match.text.replace(
                new RegExp(searchText, 'gi'),
                m => `<mark>${m}</mark>`
            );

            html += `
                <div class="admin-find-match">
                    <div class="admin-find-match-location">${match.element.tagName} #${index + 1}</div>
                    <div class="admin-find-match-text">${highlightedText.substring(0, 200)}...</div>
                </div>
            `;
        });

        container.innerHTML = html;
        document.getElementById('replaceAllBtn').style.display = 'flex';
    }

    function replaceAll() {
        const searchText = document.getElementById('findInput').value.trim();
        const replaceText = document.getElementById('replaceInput').value;

        if (!searchText) {
            showToast('error', 'Please enter text to search');
            return;
        }

        if (findMatches.length === 0) {
            showToast('error', 'No matches to replace');
            return;
        }

        if (!confirm(`Replace ${findMatches.length} instances of "${searchText}" with "${replaceText}"?`)) {
            return;
        }

        let replaced = 0;

        findMatches.forEach(match => {
            const newHtml = match.html.replace(new RegExp(searchText, 'gi'), replaceText);

            // Add to history
            addToHistory({
                elementId: match.id,
                elementTag: match.element.tagName,
                elementText: match.text.substring(0, 50),
                oldContent: match.html,
                newContent: newHtml,
                timestamp: new Date().toISOString()
            });

            match.element.innerHTML = newHtml;
            saveContentToStorage(match.id, newHtml);
            replaced++;
        });

        showToast('success', `Replaced ${replaced} instances!`);
        closeFindReplace();
    }

    // ===========================================
    // CONTENT STORAGE
    // ===========================================

    function saveContentToStorage(id, content) {
        let allContent = JSON.parse(localStorage.getItem(CONFIG.storageKeys.content) || '{}');
        allContent[id] = content;
        localStorage.setItem(CONFIG.storageKeys.content, JSON.stringify(allContent));
    }

    function loadContentFromStorage() {
        const saved = localStorage.getItem(CONFIG.storageKeys.content);
        if (!saved) return;

        const content = JSON.parse(saved);
        Object.keys(content).forEach(id => {
            const element = document.querySelector(`[data-editable="${id}"]`);
            if (element) {
                element.innerHTML = content[id];
            }
        });
    }

    // ===========================================
    // UTILITY FUNCTIONS
    // ===========================================

    function generateStableId(element, index) {
        // Create a stable ID based on: page name + element type + index
        const pageName = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
        const tagName = element.tagName.toLowerCase();
        const parentClass = element.parentElement?.className?.split(' ')[0] || 'root';
        return `${pageName}_${tagName}_${parentClass}_${index}`;
    }

    function formatTime(timestamp) {
        const date = new Date(timestamp);
        const now = new Date();
        const diff = now - date;

        if (diff < 60000) return 'Just now';
        if (diff < 3600000) return `${Math.floor(diff / 60000)} minutes ago`;
        if (diff < 86400000) return `${Math.floor(diff / 3600000)} hours ago`;

        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    }

    function stripHtml(html) {
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    }

    function showToast(type, message) {
        const container = document.getElementById('adminToastContainer');
        const toast = document.createElement('div');
        toast.className = `admin-toast ${type}`;

        const icons = { success: '✅', error: '❌', info: 'ℹ️' };
        toast.innerHTML = `<span>${icons[type] || ''}</span><span>${message}</span>`;

        container.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'toastSlideIn 0.3s ease-out reverse';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // ===========================================
    // PUBLIC API
    // ===========================================

    window.AdminMode = {
        closeLoginModal,
        togglePassword,
        submitPassword,
        saveEditing,
        cancelEditing,
        openHistory,
        closeHistory,
        openFindReplace,
        closeFindReplace,
        performFind,
        replaceAll,
        undoChange,
        revertAll,
        logout
    };

    // ===========================================
    // INITIALIZE ON DOM READY
    // ===========================================

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            init();
        });
    } else {
        init();
    }

})();
