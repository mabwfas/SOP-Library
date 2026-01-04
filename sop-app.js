// Render navigation
function renderNav() {
    const nav = document.getElementById('nav');
    nav.innerHTML = sopData.map(role => `
        <div class="nav-group open" data-role="${role.id}">
            <div class="nav-header" onclick="selectRole('${role.id}')">
                <span class="nav-icon">${role.icon}</span>
                <span>${role.title.split(' ')[0]}</span>
                <span class="nav-arrow">▶</span>
            </div>
            <div class="nav-items">
                ${role.sections.map(section => `
                    <div class="nav-section-group">
                        <div class="nav-section-title">${section.name}</div>
                        ${section.items.map(item => `
                            <a class="nav-item" href="#sop-${role.id}-${item.n}" onclick="selectRole('${role.id}')">${item.n}. ${item.title.substring(0, 30)}${item.title.length > 30 ? '...' : ''}</a>
                        `).join('')}
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Render full content for a role
function renderContent(roleId) {
    const role = sopData.find(r => r.id === roleId);
    if (!role) return;

    const content = document.getElementById('content');
    content.innerHTML = `
        <header class="header">
            <h1><span class="header-icon">${role.icon}</span> ${role.title}</h1>
            <p class="header-desc">${role.desc}</p>
            <div class="search-box">
                <span class="search-icon">🔍</span>
                <input type="text" class="search-input" id="searchInput" placeholder="Search in ${role.title}..." oninput="filterContent()">
            </div>
        </header>
        ${role.sections.map(section => `
            <div class="category">
                <div class="cat-title">${section.name}</div>
                ${section.items.map(item => `
                    <div class="sop-item" id="sop-${role.id}-${item.n}">
                        <div class="sop-header">
                            <div class="sop-num">${item.n}</div>
                            <div class="sop-title">${item.title}</div>
                            ${item.critical ? '<span class="sop-critical">CRITICAL</span>' : ''}
                        </div>
                        <div class="sop-content">${item.content}</div>
                    </div>
                `).join('')}
            </div>
        `).join('')}
    `;
}

// Select a role
function selectRole(roleId) {
    document.querySelectorAll('.nav-group').forEach(g => g.classList.remove('active'));
    document.querySelector(`.nav-group[data-role="${roleId}"]`)?.classList.add('active');
    renderContent(roleId);
}

// Toggle nav group
document.addEventListener('click', e => {
    const header = e.target.closest('.nav-header');
    if (header) {
        header.closest('.nav-group').classList.toggle('open');
    }
});

// Filter content based on search
function filterContent() {
    const query = document.getElementById('searchInput')?.value.toLowerCase() || '';
    document.querySelectorAll('.sop-item').forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? 'block' : 'none';
    });
}

// Initialize
renderNav();
selectRole('founder');
