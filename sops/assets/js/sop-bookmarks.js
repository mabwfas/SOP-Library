/**
 * SOP Bookmarking System
 * Features: Bookmark sections, localStorage persistence, quick navigation
 */

(function () {
    'use strict';

    // State
    let bookmarks = [];
    let currentSOP = '';

    // Initialize on DOM ready (handle async loading)
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initBookmarks);
    } else {
        initBookmarks();
    }

    function initBookmarks() {
        currentSOP = getSOPName();
        loadBookmarks();
        addBookmarkButtons();
        createBookmarksPanel();
    }

    /**
     * Get current SOP name from URL or title
     */
    function getSOPName() {
        const path = window.location.pathname;
        const filename = path.substring(path.lastIndexOf('/') + 1);
        return filename.replace('.html', '') || 'unknown';
    }

    /**
     * Load bookmarks from localStorage
     */
    function loadBookmarks() {
        try {
            const stored = localStorage.getItem('sop-bookmarks-' + currentSOP);
            bookmarks = stored ? JSON.parse(stored) : [];
        } catch (e) {
            bookmarks = [];
        }
    }

    /**
     * Save bookmarks to localStorage
     */
    function saveBookmarks() {
        localStorage.setItem('sop-bookmarks-' + currentSOP, JSON.stringify(bookmarks));
        updateBookmarksPanel();
        updateBookmarkButtons();
    }

    /**
     * Add bookmark buttons to all sections
     */
    function addBookmarkButtons() {
        const sections = document.querySelectorAll('.section, .critical-alert');

        sections.forEach(section => {
            const id = section.id;
            if (!id) return;

            const header = section.querySelector('.section-header, h2');
            if (!header) return;

            // Create bookmark button
            const btn = document.createElement('button');
            btn.className = 'bookmark-btn';
            btn.setAttribute('data-section-id', id);
            btn.innerHTML = isBookmarked(id) ? '🔖' : '🏷️';
            btn.title = isBookmarked(id) ? 'Remove bookmark' : 'Bookmark this section';

            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleBookmark(id, section);
            });

            // Position button
            if (header.classList.contains('section-header')) {
                header.style.position = 'relative';
                btn.style.cssText = 'position: absolute; right: 0; top: 50%; transform: translateY(-50%);';
                header.appendChild(btn);
            } else {
                header.style.position = 'relative';
                header.style.paddingRight = '40px';
                btn.style.cssText = 'position: absolute; right: 0; top: 0;';
                header.appendChild(btn);
            }
        });

        // Add styles
        addBookmarkStyles();
    }

    /**
     * Check if section is bookmarked
     */
    function isBookmarked(id) {
        return bookmarks.some(b => b.id === id);
    }

    /**
     * Toggle bookmark for section
     */
    function toggleBookmark(id, section) {
        if (isBookmarked(id)) {
            // Remove bookmark
            bookmarks = bookmarks.filter(b => b.id !== id);
            showToast('Bookmark removed');
        } else {
            // Add bookmark
            const title = section.querySelector('h2, h3')?.textContent?.trim() || id;
            bookmarks.push({
                id: id,
                title: title.substring(0, 50),
                timestamp: Date.now()
            });
            showToast('Section bookmarked!');
        }
        saveBookmarks();
    }

    /**
     * Update bookmark button states
     */
    function updateBookmarkButtons() {
        document.querySelectorAll('.bookmark-btn').forEach(btn => {
            const id = btn.getAttribute('data-section-id');
            const bookmarked = isBookmarked(id);
            btn.innerHTML = bookmarked ? '🔖' : '🏷️';
            btn.title = bookmarked ? 'Remove bookmark' : 'Bookmark this section';
            btn.classList.toggle('active', bookmarked);
        });
    }

    /**
     * Create bookmarks panel in sidebar
     */
    function createBookmarksPanel() {
        const sidebar = document.querySelector('.sidebar');
        if (!sidebar) return;

        const panel = document.createElement('div');
        panel.className = 'bookmarks-panel';
        panel.innerHTML = `
            <div class="bookmarks-header" onclick="toggleBookmarksPanel()">
                <span>🔖 Bookmarks</span>
                <span class="bookmarks-count">${bookmarks.length}</span>
            </div>
            <div class="bookmarks-list"></div>
        `;

        // Find a good position in sidebar
        const backLink = sidebar.querySelector('.sidebar-back, .back-link');
        if (backLink) {
            backLink.parentNode.insertBefore(panel, backLink.nextSibling);
        } else {
            sidebar.insertBefore(panel, sidebar.firstChild.nextSibling);
        }

        updateBookmarksPanel();
    }

    /**
     * Update bookmarks panel content
     */
    function updateBookmarksPanel() {
        const list = document.querySelector('.bookmarks-list');
        const count = document.querySelector('.bookmarks-count');

        if (!list) return;
        if (count) count.textContent = bookmarks.length;

        if (bookmarks.length === 0) {
            list.innerHTML = '<div class="no-bookmarks">No bookmarks yet</div>';
        } else {
            list.innerHTML = bookmarks.map(b => `
                <a href="#${b.id}" class="bookmark-item" onclick="SOPBookmarks.scrollTo('${b.id}'); return false;">
                    <span class="bookmark-title">${b.title}</span>
                    <button class="bookmark-remove" onclick="event.stopPropagation(); SOPBookmarks.remove('${b.id}')">✕</button>
                </a>
            `).join('');
        }
    }

    /**
     * Scroll to bookmarked section
     */
    function scrollToBookmark(id) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // Highlight effect
            element.style.transition = 'box-shadow 0.3s ease';
            element.style.boxShadow = '0 0 0 4px rgba(59, 130, 246, 0.5)';
            setTimeout(() => {
                element.style.boxShadow = '';
            }, 2000);
        }
    }

    /**
     * Remove bookmark
     */
    function removeBookmark(id) {
        bookmarks = bookmarks.filter(b => b.id !== id);
        saveBookmarks();
        showToast('Bookmark removed');
    }

    /**
     * Show toast notification
     */
    function showToast(message) {
        let toast = document.querySelector('.bookmark-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'bookmark-toast';
            document.body.appendChild(toast);
        }

        toast.textContent = message;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    }

    /**
     * Add bookmark styles
     */
    function addBookmarkStyles() {
        if (document.getElementById('bookmark-styles')) return;

        const style = document.createElement('style');
        style.id = 'bookmark-styles';
        style.textContent = `
            .bookmark-btn {
                background: none;
                border: none;
                cursor: pointer;
                font-size: 18px;
                padding: 5px 8px;
                opacity: 0.6;
                transition: all 0.2s ease;
                border-radius: 6px;
            }
            
            .bookmark-btn:hover {
                opacity: 1;
                background: rgba(59, 130, 246, 0.1);
            }
            
            .bookmark-btn.active {
                opacity: 1;
            }
            
            .bookmarks-panel {
                margin: 10px;
                background: rgba(255, 255, 255, 0.05);
                border-radius: 8px;
                overflow: hidden;
            }
            
            .bookmarks-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px 12px;
                background: rgba(255, 255, 255, 0.08);
                cursor: pointer;
                font-size: 12px;
                color: rgba(255, 255, 255, 0.9);
                font-weight: 600;
            }
            
            .bookmarks-header:hover {
                background: rgba(255, 255, 255, 0.12);
            }
            
            .bookmarks-count {
                background: #3B82F6;
                color: white;
                padding: 2px 8px;
                border-radius: 10px;
                font-size: 10px;
            }
            
            .bookmarks-list {
                max-height: 150px;
                overflow-y: auto;
            }
            
            .bookmark-item {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 8px 12px;
                color: rgba(255, 255, 255, 0.8);
                text-decoration: none;
                font-size: 11px;
                border-top: 1px solid rgba(255, 255, 255, 0.05);
                transition: background 0.15s ease;
            }
            
            .bookmark-item:hover {
                background: rgba(255, 255, 255, 0.08);
            }
            
            .bookmark-title {
                flex: 1;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            
            .bookmark-remove {
                background: none;
                border: none;
                color: rgba(255, 255, 255, 0.4);
                cursor: pointer;
                padding: 2px 6px;
                font-size: 10px;
            }
            
            .bookmark-remove:hover {
                color: #EF4444;
            }
            
            .no-bookmarks {
                padding: 15px;
                text-align: center;
                color: rgba(255, 255, 255, 0.4);
                font-size: 11px;
            }
            
            .bookmark-toast {
                position: fixed;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%) translateY(100px);
                background: #1E293B;
                color: white;
                padding: 12px 24px;
                border-radius: 8px;
                font-size: 14px;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                z-index: 100002;
                transition: transform 0.3s ease;
            }
            
            .bookmark-toast.show {
                transform: translateX(-50%) translateY(0);
            }
        `;
        document.head.appendChild(style);
    }

    // Toggle panel visibility
    window.toggleBookmarksPanel = function () {
        const list = document.querySelector('.bookmarks-list');
        if (list) {
            list.style.display = list.style.display === 'none' ? 'block' : 'none';
        }
    };

    // Expose to global
    window.SOPBookmarks = {
        add: (id, section) => toggleBookmark(id, section),
        remove: removeBookmark,
        scrollTo: scrollToBookmark,
        getAll: () => [...bookmarks],
        clear: () => { bookmarks = []; saveBookmarks(); }
    };
})();
