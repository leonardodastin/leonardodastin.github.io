// main.js
'use strict';

// Theme management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const btn = document.getElementById('themeToggle');
    btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Toast
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}

// Copy to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('Copied to clipboard!');
    }).catch(() => {
        showToast('Failed to copy');
    });
}

// Toggle view
function toggleView() {
    showDownloaded = !showDownloaded;
    const btn = document.getElementById('viewToggle');
    btn.textContent = showDownloaded ? 'Downloaded' : 'Pending';
    btn.classList.toggle('active', showDownloaded);
    renderContent();
}

// Toggle category
function toggleCategory(index) {
    expandedCategory = expandedCategory === index ? null : index;
    renderContent();
}

// Mark as downloaded
function markAsDownloaded(categoryIndex, itemId) {
    const category = DATA.categories[categoryIndex];
    const itemIndex = category.items.findIndex(item => item.id === itemId);
    
    if (itemIndex === -1) return;
    
    const item = category.items[itemIndex];
    
    // Add to downloaded
    const existingCatIndex = downloadedData.categories.findIndex(c => c.name === category.name);
    if (existingCatIndex >= 0) {
        downloadedData.categories[existingCatIndex].items.push(item);
    } else {
        downloadedData.categories.push({
            name: category.name,
            items: [item]
        });
    }
    
    // Remove from DATA
    DATA.categories[categoryIndex].items.splice(itemIndex, 1);
    
    showToast('Marked as downloaded!');
    renderContent();
}

// Restore item
function restoreItem(categoryIndex, itemId) {
    const category = downloadedData.categories[categoryIndex];
    const itemIndex = category.items.findIndex(item => item.id === itemId);
    
    if (itemIndex === -1) return;
    
    const item = category.items[itemIndex];
    
    // Add back to DATA
    const existingCatIndex = DATA.categories.findIndex(c => c.name === category.name);
    if (existingCatIndex >= 0) {
        DATA.categories[existingCatIndex].items.push(item);
    } else {
        DATA.categories.push({
            name: category.name,
            items: [item]
        });
    }
    
    // Remove from downloaded
    downloadedData.categories[categoryIndex].items.splice(itemIndex, 1);
    
    showToast('Restored to pending!');
    renderContent();
}

// Render content
function renderContent() {
    const container = document.getElementById('content');
    const currentData = showDownloaded ? downloadedData : DATA;
    const displayCategories = currentData.categories.filter(cat => cat.items.length > 0);

    if (displayCategories.length === 0) {
        container.innerHTML = `<div class="empty-message">${showDownloaded ? 'No downloads yet' : 'No items available'}</div>`;
        return;
    }

    let html = '';
    displayCategories.forEach((category, catIndex) => {
        const isOpen = expandedCategory === catIndex;
        html += `
            <div class="category">
                <div class="category-header" onclick="toggleCategory(${catIndex})">
                    <span class="category-name">${category.name}</span>
                    <span class="toggle-icon ${isOpen ? 'rotated' : ''}">▼</span>
                </div>
                <div class="items-container ${isOpen ? 'open' : ''}">
                    ${category.items.map(item => {
                        // Collect all buttons
                        const buttons = [];
                        
                        // Add magnets
                        if (item.magnets) {
                            item.magnets.forEach((magnet, idx) => {
                                buttons.push({
                                    type: 'magnet',
                                    html: `<a href="${magnet}" class="btn btn-magnet" style="flex: 1;">🧲 Magnet${item.magnets.length > 1 ? ' ' + (idx + 1) : ''}</a>`
                                });
                            });
                        }
                        
                        // Add torrents
                        if (item.torrents) {
                            item.torrents.forEach((torrent, idx) => {
                                buttons.push({
                                    type: 'torrent',
                                    html: `<a href="${torrent}" download class="btn btn-torrent" style="flex: 1;">📄 Torrent${item.torrents.length > 1 ? ' ' + (idx + 1) : ''}</a>`
                                });
                            });
                        }
                        
                        // Create buttons HTML
                        let buttonsHtml = '';
                        if (buttons.length > 0) {
                            buttonsHtml = `
                                <div class="button-row">
                                    ${buttons.map(btn => btn.html).join('')}
                                    <button class="btn btn-copy" onclick="copyToClipboard('${(item.magnets && item.magnets[0] || '').replace(/'/g, "\\'")}')">📋</button>
                                </div>
                            `;
                        }
                        
                        return `
                            <div class="item">
                                <div class="item-header">
                                    <div class="item-checkbox ${showDownloaded ? 'checked' : ''}" onclick="${showDownloaded ? `restoreItem(${catIndex}, '${item.id}')` : `markAsDownloaded(${catIndex}, '${item.id}')`}"></div>
                                    <div class="item-main">
                                        <div class="item-info">
                                            <div class="item-title">${item.title}</div>
                                            <div class="item-version">${item.version}</div>
                                        </div>
                                        <div class="item-stats">
                                            ${item.size ? `<span class="stat-badge">💾 ${item.size}</span>` : ''}
                                            ${item.seeders !== null && item.seeders !== undefined ? `<span class="stat-badge">🟢 ${item.seeders}</span>` : ''}
                                            ${item.leechers !== null && item.leechers !== undefined ? `<span class="stat-badge">🔴 ${item.leechers}</span>` : ''}
                                        </div>
                                    </div>
                                </div>
                                ${buttonsHtml ? `<div class="buttons-section">${buttonsHtml}</div>` : ''}
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Initialize
initTheme();
renderContent();