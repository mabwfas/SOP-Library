/**
 * Copy Button Functionality
 * Adds copy-to-clipboard functionality across all SOPs
 */

// Create toast notification element
function createCopyToast() {
    if (!document.getElementById('copy-toast')) {
        const toast = document.createElement('div');
        toast.id = 'copy-toast';
        toast.className = 'copy-toast';
        toast.textContent = 'Copied to clipboard!';
        document.body.appendChild(toast);
    }
}

// Show toast notification
function showCopyToast(message = 'Copied to clipboard!') {
    createCopyToast();
    const toast = document.getElementById('copy-toast');
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// Copy text to clipboard
async function copyToClipboard(text, button) {
    try {
        // Clean up the text - remove extra whitespace and HTML entities
        const cleanText = text
            .replace(/&nbsp;/g, ' ')
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/<br\s*\/?>/gi, '\n')
            .replace(/<[^>]*>/g, '')
            .replace(/\n{3,}/g, '\n\n')
            .trim();

        await navigator.clipboard.writeText(cleanText);

        // Update button state
        const originalText = button.innerHTML;
        button.innerHTML = '✓ Copied!';
        button.classList.add('copied');

        showCopyToast();

        setTimeout(() => {
            button.innerHTML = originalText;
            button.classList.remove('copied');
        }, 2000);

    } catch (err) {
        console.error('Failed to copy:', err);
        // Fallback for older browsers
        fallbackCopy(text, button);
    }
}

// Fallback copy method for older browsers
function fallbackCopy(text, button) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();

    try {
        document.execCommand('copy');
        button.innerHTML = '✓ Copied!';
        button.classList.add('copied');
        showCopyToast();

        setTimeout(() => {
            button.innerHTML = '📋 Copy';
            button.classList.remove('copied');
        }, 2000);
    } catch (err) {
        console.error('Fallback copy failed:', err);
        showCopyToast('Failed to copy');
    }

    document.body.removeChild(textarea);
}

// Add copy button to an element
function addCopyButton(element, position = 'after') {
    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.innerHTML = '📋 Copy';
    btn.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        copyToClipboard(element.textContent || element.innerText, btn);
    };

    if (position === 'before') {
        element.parentNode.insertBefore(btn, element);
    } else if (position === 'inside-start') {
        element.insertBefore(btn, element.firstChild);
    } else if (position === 'inside-end') {
        element.appendChild(btn);
    } else {
        element.parentNode.insertBefore(btn, element.nextSibling);
    }

    return btn;
}

// Add floating copy button to a block element
function addFloatingCopyButton(element) {
    element.classList.add('copyable-block');
    element.style.position = 'relative';

    const btn = document.createElement('button');
    btn.className = 'copy-btn copy-btn-float';
    btn.innerHTML = '📋 Copy';
    btn.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        copyToClipboard(element.textContent || element.innerText, btn);
    };

    element.appendChild(btn);
    return btn;
}

// Initialize copy buttons on page load
function initCopyButtons() {
    createCopyToast();

    // Add copy buttons to template boxes
    document.querySelectorAll('.template-box').forEach(box => {
        if (!box.querySelector('.copy-btn')) {
            addFloatingCopyButton(box);
        }
    });

    // Add copy buttons to story boxes with templates/scripts
    document.querySelectorAll('.story-box').forEach(box => {
        const hasScript = box.textContent.toLowerCase().includes('script') ||
            box.textContent.toLowerCase().includes('template') ||
            box.textContent.toLowerCase().includes('email');
        if (hasScript && !box.querySelector('.copy-btn')) {
            addFloatingCopyButton(box);
        }
    });

    // Add copy buttons to highlight boxes that look like templates
    document.querySelectorAll('.highlight-box').forEach(box => {
        const text = box.textContent.toLowerCase();
        const isTemplate = text.includes('subject:') ||
            text.includes('hi [name]') ||
            text.includes('dear') ||
            text.includes('template') ||
            text.includes('script');
        if (isTemplate && !box.querySelector('.copy-btn')) {
            addFloatingCopyButton(box);
        }
    });

    // Add copy buttons to info boxes that contain task instructions
    document.querySelectorAll('.info-box').forEach(box => {
        const style = box.getAttribute('style') || '';
        const hasMonospace = style.includes('monospace') || box.querySelector('[style*="monospace"]');
        const text = box.textContent.toLowerCase();
        const isTask = text.includes('deadline') ||
            text.includes('task:') ||
            text.includes('your task') ||
            text.includes('what to submit');
        if ((hasMonospace || isTask) && !box.querySelector('.copy-btn')) {
            addFloatingCopyButton(box);
        }
    });

    // Add copy buttons to pre/code elements
    document.querySelectorAll('pre, code').forEach(el => {
        if (el.textContent.length > 50 && !el.parentElement.querySelector('.copy-btn')) {
            const parent = el.closest('.template-box, .info-box, .highlight-box, .story-box');
            if (!parent || !parent.querySelector('.copy-btn')) {
                addFloatingCopyButton(el.parentElement || el);
            }
        }
    });
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCopyButtons);
} else {
    initCopyButtons();
}

// Also reinitialize after any dynamic content loads
window.addEventListener('load', initCopyButtons);
