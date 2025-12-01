
'use strict';

// ==========================================
// 🌓 THEME MANAGEMENT
// ==========================================

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const toggle = document.getElementById('themeToggle');
    if (toggle) {
        toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// ==========================================
// 🚀 APP LOGIC
// ==========================================

let toastTimeout = null;

function showToast(message) {
    try {
        const toast = document.getElementById('toast');
        if (!toast) return;

        if (toastTimeout) {
            clearTimeout(toastTimeout);
        }

        toast.textContent = String(message || 'Action completed');
        toast.classList.add('show');
        
        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
            toastTimeout = null;
        }, 2000);
    } catch (error) {
        console.error('Toast error:', error);
    }
}

function copyToClipboard(text, button) {
    if (!text || typeof text !== 'string') {
        showToast('Invalid link');
        return;
    }

    if (!button) {
        showToast('Button reference lost');
        return;
    }

    if (button.disabled) return;
    button.disabled = true;

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text)
            .then(() => {
                handleCopySuccess(button);
            })
            .catch((err) => {
                console.warn('Clipboard API failed, trying fallback:', err);
                fallbackCopy(text, button);
            });
    } else {
        fallbackCopy(text, button);
    }
}

function handleCopySuccess(button) {
    try {
        const originalText = button.innerHTML;
        button.innerHTML = '✓';
        button.classList.add('copied');
        showToast('Copied to clipboard!');
        
        setTimeout(() => {
            if (button) {
                button.innerHTML = originalText;
                button.classList.remove('copied');
                button.disabled = false;
            }
        }, 1500);
    } catch (error) {
        console.error('Copy success handler error:', error);
        button.disabled = false;
    }
}

function fallbackCopy(text, button) {
    try {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            const successful = document.execCommand('copy');
            if (successful) {
                handleCopySuccess(button);
            } else {
                showToast('Copy failed');
                button.disabled = false;
            }
        } catch (err) {
            console.error('Fallback copy failed:', err);
            showToast('Copy not supported');
            button.disabled = false;
        } finally {
            document.body.removeChild(textArea);
        }
    } catch (error) {
        console.error('Fallback copy error:', error);
        showToast('Copy failed');
        button.disabled = false;
    }
}

function toggleCategory(categoryId) {
    try {
        const container = document.getElementById(`items-${categoryId}`);
        const icon = document.getElementById(`icon-${categoryId}`);
        
        if (container && icon) {
            container.classList.toggle('open');
            icon.classList.toggle('rotated');
        }
    } catch (error) {
        console.error('Toggle category error:', error);
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function validateData(data) {
    if (!data || typeof data !== 'object') {
        return false;
    }

    if (!Array.isArray(data.categories)) {
        return false;
    }

    return true;
}

function renderContent() {
    try {
        const contentDiv = document.getElementById('content');
        if (!contentDiv) {
            console.error('Content div not found');
            return;
        }

        if (!validateData(DATA)) {
            contentDiv.innerHTML = '<div class="error-message">Invalid data structure. Please check your configuration.</div>';
            return;
        }

        if (!DATA.categories || DATA.categories.length === 0) {
            contentDiv.innerHTML = '<div class="empty-message">No downloads available</div>';
            return;
        }

        contentDiv.innerHTML = '';
        
        DATA.categories.forEach((category, catIndex) => {
            try {
                if (!category || !category.name) {
                    console.warn(`Skipping invalid category at index ${catIndex}`);
                    return;
                }

                const categoryDiv = document.createElement('div');
                categoryDiv.className = 'category';
                
                const header = document.createElement('div');
                header.className = 'category-header';
                header.onclick = () => toggleCategory(catIndex);
                header.innerHTML = `
                    <span>${escapeHtml(category.name)}</span>
                    <span id="icon-${catIndex}" class="toggle-icon">▼</span>
                `;
                
                const itemsContainer = document.createElement('div');
                itemsContainer.id = `items-${catIndex}`;
                itemsContainer.className = 'items-container';
                
                if (!Array.isArray(category.items) || category.items.length === 0) {
                    const emptyDiv = document.createElement('div');
                    emptyDiv.className = 'empty-message';
                    emptyDiv.textContent = 'No items in this category';
                    itemsContainer.appendChild(emptyDiv);
                } else {
                    category.items.forEach((item, itemIndex) => {
                        try {
                            if (!item || !item.title) {
                                console.warn(`Skipping invalid item at index ${itemIndex} in category ${category.name}`);
                                return;
                            }

                            const itemDiv = document.createElement('div');
                            itemDiv.className = 'item';
                            
                            let linksHTML = '';
                            
                            // Process magnet links
                            if (Array.isArray(item.magnets) && item.magnets.length > 0) {
                                item.magnets.forEach((magnet, magnetIndex) => {
                                    if (magnet && typeof magnet === 'string' && magnet.trim()) {
                                        const escapedMagnet = magnet.replace(/`/g, '\\`').replace(/\$/g, '\\$');
                                        const magnetLabel = item.magnets.length > 1 ? ` ${magnetIndex + 1}` : '';
                                        linksHTML += `
                                            <div class="magnet-buttons" style="margin-bottom: 8px">
                                                <a href="${escapeHtml(magnet)}" class="btn btn-primary">
                                                    🧲 Magnet${magnetLabel}
                                                </a>
                                                <button class="btn btn-copy" onclick="copyToClipboard(\`${escapedMagnet}\`, this)">
                                                    📋
                                                </button>
                                            </div>
                                        `;
                                    }
                                });
                            }
                            
                            // Process torrent files
                            if (Array.isArray(item.torrents) && item.torrents.length > 0) {
                                item.torrents.forEach((torrent, torrentIndex) => {
                                    if (torrent && typeof torrent === 'string' && torrent.trim()) {
                                        const torrentLabel = item.torrents.length > 1 ? ` ${torrentIndex + 1}` : '';
                                        linksHTML += `
                                            <div class="magnet-buttons" style="margin-bottom: 8px">
                                                <a href="${escapeHtml(torrent)}" download class="btn btn-primary">
                                                    📄 Torrent${torrentLabel}
                                                </a>
                                            </div>
                                        `;
                                    }
                                });
                            }

                            if (!linksHTML) {
                                linksHTML = '<div class="empty-message" style="margin: 0; padding: 8px;">No download links available</div>';
                            }
                            
                            itemDiv.innerHTML = `
                                <div class="item-title">${escapeHtml(item.title)}</div>
                                <div class="item-version">${escapeHtml(item.version || 'N/A')}</div>
                                <div class="item-info">
                                    <span class="info-badge size">💾 ${escapeHtml(item.size || 'N/A')}</span>
                                    <span class="info-badge seeders">🟢 ${escapeHtml(String(item.seeders ?? 0))} seeders</span>
                                    <span class="info-badge leechers">🔴 ${escapeHtml(String(item.leechers ?? 0))} leechers</span>
                                </div>
                                <div class="magnet-section">
                                    ${linksHTML}
                                </div>
                            `;
                            
                            itemsContainer.appendChild(itemDiv);
                        } catch (itemError) {
                            console.error(`Error rendering item ${itemIndex}:`, itemError);
                        }
                    });
                }
                
                categoryDiv.appendChild(header);
                categoryDiv.appendChild(itemsContainer);
                contentDiv.appendChild(categoryDiv);
            } catch (catError) {
                console.error(`Error rendering category ${catIndex}:`, catError);
            }
        });

    } catch (error) {
        console.error('Fatal render error:', error);
        const contentDiv = document.getElementById('content');
        if (contentDiv) {
            contentDiv.innerHTML = '<div class="error-message">An error occurred while loading content. Please refresh the page.</div>';
        }
    }
}

// Initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initTheme();
        renderContent();
    });
} else {
    initTheme();
    renderContent();
}

window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
});
