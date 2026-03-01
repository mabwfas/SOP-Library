/**
 * SOP Enhanced Search System
 * Features: Live search, highlighting, keyboard shortcuts, suggestions
 */

(function () {
    'use strict';

    // Configuration
    const CONFIG = {
        debounceMs: 200,
        minSearchLength: 2,
        maxResults: 50,
        highlightClass: 'search-highlight'
    };

    // State
    let searchIndex = [];
    let activeResultIndex = -1;
    let originalContent = new Map();

    // Initialize on DOM ready (handle case when loaded async after DOMContentLoaded)
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSearch);
    } else {
        // DOM already ready, init immediately
        initSearch();
    }

    function initSearch() {
        buildSearchIndex();
        enhanceSidebarSearch();
        createSearchModal();
        bindKeyboardShortcuts();
    }

    /**
     * Build search index from page content
     */
    function buildSearchIndex() {
        const sections = document.querySelectorAll('.section, .critical-alert, [id]');

        sections.forEach(section => {
            const id = section.id || section.querySelector('[id]')?.id;
            if (!id) return;

            const heading = section.querySelector('h2, h3, .section-header h2');
            const title = heading?.textContent?.trim() || id;
            const content = section.textContent?.trim() || '';

            // Store original HTML for later restoration
            originalContent.set(id, section.innerHTML);

            searchIndex.push({
                id,
                title,
                content: content.substring(0, 500),
                element: section
            });
        });
    }

    /**
     * Enhance existing sidebar search
     */
    function enhanceSidebarSearch() {
        const existingSearch = document.querySelector('.sidebar-search input, #searchInput');
        if (!existingSearch) return;

        // Wrap in container
        const container = document.createElement('div');
        container.className = 'sop-search-container';
        existingSearch.parentNode.insertBefore(container, existingSearch);
        container.appendChild(existingSearch);

        existingSearch.className = 'sop-search-input';
        existingSearch.placeholder = '🔍 Search this SOP...';

        // Add keyboard shortcut hint
        const kbd = document.createElement('span');
        kbd.className = 'search-kbd';
        kbd.textContent = 'Ctrl+K';
        container.appendChild(kbd);

        // Add clear button
        const clearBtn = document.createElement('button');
        clearBtn.className = 'search-clear-btn';
        clearBtn.innerHTML = '✕';
        clearBtn.onclick = () => {
            existingSearch.value = '';
            clearHighlights();
            hideResults();
            existingSearch.focus();
        };
        container.appendChild(clearBtn);

        // Add results dropdown
        const dropdown = document.createElement('div');
        dropdown.className = 'search-results-dropdown';
        container.appendChild(dropdown);

        // Bind search events
        let debounceTimer;
        existingSearch.addEventListener('input', (e) => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                performSearch(e.target.value, dropdown);
            }, CONFIG.debounceMs);
        });

        existingSearch.addEventListener('keydown', (e) => {
            handleSearchKeydown(e, dropdown);
        });

        existingSearch.addEventListener('focus', () => {
            if (existingSearch.value.length >= CONFIG.minSearchLength) {
                dropdown.classList.add('active');
            }
        });

        // Close dropdown on outside click
        document.addEventListener('click', (e) => {
            if (!container.contains(e.target)) {
                hideResults();
            }
        });
    }

    /**
     * Perform search and show results
     */
    function performSearch(query, dropdown) {
        clearHighlights();

        if (query.length < CONFIG.minSearchLength) {
            hideResults();
            return;
        }

        const allResults = searchIndex.filter(item => {
            const searchText = (item.title + ' ' + item.content).toLowerCase();
            return searchText.includes(query.toLowerCase());
        });
        const results = allResults.slice(0, CONFIG.maxResults);

        if (allResults.length === 0) {
            dropdown.innerHTML = '<div class="search-no-results">No results found</div>';
        } else {
            const countText = allResults.length > results.length
                ? `${allResults.length} results (showing ${results.length})`
                : `${allResults.length} result${allResults.length > 1 ? 's' : ''}`;
            dropdown.innerHTML = `
                <div class="search-result-count">${countText}</div>
                ${results.map((r, i) => `
                    <a href="#${r.id}" class="search-result-item" data-index="${i}">
                        <div class="result-title">${highlightText(r.title, query)}</div>
                        <div class="result-preview">${getPreview(r.content, query)}</div>
                    </a>
                `).join('')}
            `;

            // Highlight matches in page
            highlightMatches(query);
        }

        dropdown.classList.add('active');
        activeResultIndex = -1;

        // Bind click handlers
        dropdown.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                navigateToResult(item.getAttribute('href').slice(1));
            });
        });
    }

    /**
     * Handle keyboard navigation in search
     */
    function handleSearchKeydown(e, dropdown) {
        const items = dropdown.querySelectorAll('.search-result-item');

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            activeResultIndex = Math.min(activeResultIndex + 1, items.length - 1);
            updateActiveResult(items);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            activeResultIndex = Math.max(activeResultIndex - 1, 0);
            updateActiveResult(items);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (activeResultIndex >= 0 && items[activeResultIndex]) {
                navigateToResult(items[activeResultIndex].getAttribute('href').slice(1));
            }
        } else if (e.key === 'Escape') {
            hideResults();
            e.target.blur();
        }
    }

    function updateActiveResult(items) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === activeResultIndex);
        });
        if (items[activeResultIndex]) {
            items[activeResultIndex].scrollIntoView({ block: 'nearest' });
        }
    }

    /**
     * Navigate to result and highlight
     */
    function navigateToResult(id) {
        const element = document.getElementById(id);
        if (element) {
            hideResults();
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // Flash effect
            element.style.transition = 'box-shadow 0.3s ease';
            element.style.boxShadow = '0 0 0 4px rgba(59, 130, 246, 0.5)';
            setTimeout(() => {
                element.style.boxShadow = '';
            }, 2000);
        }
    }

    /**
     * Highlight matches in the page content
     */
    function highlightMatches(query) {
        if (!query || query.length < 2) return;

        const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');

        document.querySelectorAll('.section p, .section li, .section td, .info-box').forEach(el => {
            if (!el.querySelector('.' + CONFIG.highlightClass)) {
                el.innerHTML = el.innerHTML.replace(regex, `<mark class="${CONFIG.highlightClass}">$1</mark>`);
            }
        });
    }

    /**
     * Clear all highlights
     */
    function clearHighlights() {
        document.querySelectorAll('.' + CONFIG.highlightClass).forEach(mark => {
            const parent = mark.parentNode;
            parent.replaceChild(document.createTextNode(mark.textContent), mark);
            parent.normalize();
        });
    }

    /**
     * Create global search modal (Ctrl+K)
     */
    function createSearchModal() {
        const overlay = document.createElement('div');
        overlay.className = 'search-modal-overlay';
        overlay.innerHTML = `
            <div class="search-modal">
                <input type="text" class="search-modal-input" placeholder="Search this SOP...">
                <div class="search-modal-results"></div>
                <div class="search-modal-footer">
                    <span><kbd>↑↓</kbd> Navigate</span>
                    <span><kbd>Enter</kbd> Select</span>
                    <span><kbd>Esc</kbd> Close</span>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);

        const input = overlay.querySelector('.search-modal-input');
        const results = overlay.querySelector('.search-modal-results');

        // Close on overlay click
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeSearchModal();
            }
        });

        // Search handling
        let debounceTimer;
        input.addEventListener('input', (e) => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                performModalSearch(e.target.value, results);
            }, CONFIG.debounceMs);
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeSearchModal();
            } else {
                handleSearchKeydown(e, results);
            }
        });
    }

    function performModalSearch(query, container) {
        if (query.length < CONFIG.minSearchLength) {
            container.innerHTML = '';
            return;
        }

        const results = searchIndex.filter(item => {
            const searchText = (item.title + ' ' + item.content).toLowerCase();
            return searchText.includes(query.toLowerCase());
        }).slice(0, CONFIG.maxResults);

        if (results.length === 0) {
            container.innerHTML = '<div class="search-no-results">No results found</div>';
        } else {
            container.innerHTML = `
                <div class="search-result-count">${results.length} result${results.length > 1 ? 's' : ''}</div>
                ${results.map((r, i) => `
                    <a href="#${r.id}" class="search-result-item" data-index="${i}">
                        <div class="result-title">${highlightText(r.title, query)}</div>
                        <div class="result-preview">${getPreview(r.content, query)}</div>
                    </a>
                `).join('')}
            `;
        }

        activeResultIndex = -1;

        container.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                closeSearchModal();
                navigateToResult(item.getAttribute('href').slice(1));
                highlightMatches(query);
            });
        });
    }

    function openSearchModal() {
        const overlay = document.querySelector('.search-modal-overlay');
        overlay.classList.add('active');
        overlay.querySelector('.search-modal-input').focus();
    }

    function closeSearchModal() {
        const overlay = document.querySelector('.search-modal-overlay');
        overlay.classList.remove('active');
        overlay.querySelector('.search-modal-input').value = '';
        overlay.querySelector('.search-modal-results').innerHTML = '';
    }

    /**
     * Bind keyboard shortcuts
     */
    function bindKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl+K or Cmd+K to open search modal
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                openSearchModal();
            }

            // / to focus sidebar search
            if (e.key === '/' && !isInputFocused()) {
                e.preventDefault();
                const searchInput = document.querySelector('.sop-search-input');
                if (searchInput) searchInput.focus();
            }
        });
    }

    // Helper functions
    function hideResults() {
        document.querySelectorAll('.search-results-dropdown').forEach(d => {
            d.classList.remove('active');
        });
    }

    function highlightText(text, query) {
        const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
        return text.replace(regex, '<strong>$1</strong>');
    }

    function getPreview(content, query) {
        const lowerContent = content.toLowerCase();
        const lowerQuery = query.toLowerCase();
        const index = lowerContent.indexOf(lowerQuery);

        if (index === -1) return content.substring(0, 80) + '...';

        const start = Math.max(0, index - 30);
        const end = Math.min(content.length, index + query.length + 50);
        let preview = content.substring(start, end);

        if (start > 0) preview = '...' + preview;
        if (end < content.length) preview += '...';

        return highlightText(preview, query);
    }

    function escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    function isInputFocused() {
        const active = document.activeElement;
        return active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.isContentEditable);
    }

    // Expose to global
    window.SOPSearch = {
        open: openSearchModal,
        close: closeSearchModal,
        search: performSearch
    };
})();
