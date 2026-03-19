/**
 * Shared Sidebar Toggle — Digital Heroes SOP Library
 * Handles mobile sidebar open/close, overlay, and click-outside-to-close.
 */
(function () {
    'use strict';

    // Toggle sidebar open/closed
    window.toggleSidebar = function () {
        var sidebar = document.querySelector('.sidebar');
        var overlay = document.querySelector('.sidebar-overlay');
        if (sidebar) {
            sidebar.classList.toggle('active');
            sidebar.classList.toggle('open');
        }
        if (overlay) {
            overlay.classList.toggle('active');
        }
    };

    // Close sidebar
    window.closeSidebar = function () {
        var sidebar = document.querySelector('.sidebar');
        var overlay = document.querySelector('.sidebar-overlay');
        if (sidebar) {
            sidebar.classList.remove('active');
            sidebar.classList.remove('open');
        }
        if (overlay) {
            overlay.classList.remove('active');
        }
    };

    // Dark mode toggle
    window.toggleDarkMode = function () {
        var isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('dhDarkMode', isDark ? '1' : '0');
        var btn = document.getElementById('darkModeBtn');
        if (btn) btn.textContent = isDark ? '☀️ Light' : '🌙 Dark';
    };

    // Apply saved dark mode preference
    if (localStorage.getItem('dhDarkMode') === '1') {
        document.body.classList.add('dark-mode');
    }

    // Auto-inject dark mode button into sidebar print button area
    document.addEventListener('DOMContentLoaded', function () {
        var printBtn = document.querySelector('.print-btn');
        if (printBtn && !document.getElementById('darkModeBtn')) {
            var btn = document.createElement('button');
            btn.id = 'darkModeBtn';
            btn.className = 'print-btn';
            btn.onclick = window.toggleDarkMode;
            btn.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light' : '🌙 Dark';
            btn.style.marginTop = '-5px';
            printBtn.parentNode.insertBefore(btn, printBtn.nextSibling);
        }
    });

    // Click outside to close sidebar on mobile
    document.addEventListener('click', function (event) {
        var sidebar = document.querySelector('.sidebar');
        var toggleBtn = document.querySelector('.mobile-menu-btn');
        if (!sidebar || !toggleBtn) return;

        var isOpen = sidebar.classList.contains('active') || sidebar.classList.contains('open');
        var clickedOnSidebar = sidebar.contains(event.target);
        var clickedOnToggle = toggleBtn.contains(event.target);

        if (isOpen && !clickedOnSidebar && !clickedOnToggle) {
            window.closeSidebar();
        }
    });
})();
