/**
 * Training Analytics Dashboard
 * Renders stats, leaderboard, and activity feed in training-hub.html
 */

(function () {
    'use strict';

    // Module display names
    const MODULE_NAMES = {
        'developer': { name: 'Developer', icon: '💻', color: '#6366F1' },
        'sales': { name: 'Sales', icon: '💰', color: '#10B981' },
        'designer': { name: 'Designer', icon: '🎨', color: '#EC4899' },
        'content': { name: 'Content', icon: '✍️', color: '#F59E0B' },
        'cs': { name: 'Customer Service', icon: '🎧', color: '#3B82F6' },
        'hr': { name: 'HR', icon: '👥', color: '#8B5CF6' },
        'finance': { name: 'Finance', icon: '📊', color: '#14B8A6' },
        'pm': { name: 'Project Manager', icon: '📋', color: '#F97316' },
        'fullstack': { name: 'Full-Stack', icon: '🔧', color: '#6366F1' },
        'operations': { name: 'Operations', icon: '⚙️', color: '#64748B' },
        'social-media': { name: 'Social Media', icon: '📱', color: '#EC4899' },
        'client-chat': { name: 'Client Chat', icon: '💬', color: '#06B6D4' }
    };

    // Initialize when DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initDashboard);
    } else {
        initDashboard();
    }

    function initDashboard() {
        // Only run on training-hub.html
        if (!document.querySelector('.training-grid')) return;

        // Wait for TrainingCore to be available
        if (!window.TrainingCore) {
            console.warn('TrainingCore not loaded, retrying...');
            setTimeout(initDashboard, 100);
            return;
        }

        renderDashboard();
        updateProgressCards();
    }

    /**
     * Render the main dashboard section
     */
    function renderDashboard() {
        const container = document.querySelector('.container');
        const footer = document.querySelector('.footer');

        if (!container || !footer) return;

        // Create dashboard HTML
        const dashboardHTML = `
            <div class="dashboard-section">
                <div class="section-header training" style="margin-top: 30px;">
                    <span>📊</span>
                    <h2>YOUR TRAINING DASHBOARD</h2>
                </div>
                
                <!-- Stats Cards Row -->
                <div class="stats-row">
                    <div class="stat-card">
                        <div class="stat-icon">🔥</div>
                        <div class="stat-value" id="streakValue">0</div>
                        <div class="stat-label">Day Streak</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon">📚</div>
                        <div class="stat-value" id="modulesValue">0</div>
                        <div class="stat-label">Modules Started</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon">✅</div>
                        <div class="stat-value" id="completedValue">0</div>
                        <div class="stat-label">Tasks Passed</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon">🏆</div>
                        <div class="stat-value" id="rankValue">--</div>
                        <div class="stat-label">Your Rank</div>
                    </div>
                </div>
                
                <!-- Two Column Layout -->
                <div class="dashboard-grid">
                    <!-- Recent Activity -->
                    <div class="dashboard-card">
                        <h3>📝 Recent Activity</h3>
                        <div class="activity-list" id="activityList">
                            <div class="no-activity">No quiz attempts yet. Start training!</div>
                        </div>
                    </div>
                    
                    <!-- Leaderboard -->
                    <div class="dashboard-card">
                        <h3>🏆 Leaderboard</h3>
                        <div class="leaderboard-list" id="leaderboardList">
                            <div class="no-activity">Be the first to complete a training!</div>
                        </div>
                    </div>
                </div>
                
                <!-- Progress Heatmap -->
                <div class="dashboard-card full-width">
                    <h3>📈 Training Progress</h3>
                    <div class="progress-heatmap" id="progressHeatmap"></div>
                </div>
            </div>
        `;

        // Add styles
        addDashboardStyles();

        // Insert before footer
        const dashboardDiv = document.createElement('div');
        dashboardDiv.innerHTML = dashboardHTML;
        footer.parentNode.insertBefore(dashboardDiv.firstElementChild, footer);

        // Populate data
        populateStats();
        populateActivity();
        populateLeaderboard();
        populateHeatmap();
    }

    /**
     * Populate stats cards
     */
    function populateStats() {
        const stats = window.TrainingCore.getGlobalStats();
        const rank = window.TrainingCore.getMyRank();

        document.getElementById('streakValue').textContent = stats.streak || 0;
        document.getElementById('modulesValue').textContent = stats.modulesStarted || 0;
        document.getElementById('completedValue').textContent = stats.totalAttempts || 0;
        document.getElementById('rankValue').textContent = rank ? `#${rank}` : '--';

        // Add streak fire animation if active
        if (stats.streak > 0) {
            document.getElementById('streakValue').classList.add('active-streak');
        }
    }

    /**
     * Populate recent activity
     */
    function populateActivity() {
        const activity = window.TrainingCore.getRecentActivity(5);
        const container = document.getElementById('activityList');

        if (activity.length === 0) {
            container.innerHTML = '<div class="no-activity">No quiz attempts yet. Start training!</div>';
            return;
        }

        container.innerHTML = activity.map(a => {
            const module = MODULE_NAMES[a.moduleId] || { name: a.moduleId, icon: '📚', color: '#6366F1' };
            const scorePercent = Math.round((a.score / a.total) * 100);
            const statusClass = a.passed ? 'passed' : 'failed';

            return `
                <div class="activity-item">
                    <div class="activity-icon" style="background: ${module.color}20; color: ${module.color}">${module.icon}</div>
                    <div class="activity-details">
                        <div class="activity-title">${module.name} - Task ${a.taskId}</div>
                        <div class="activity-meta">${window.TrainingCore.formatRelativeTime(a.timestamp)}</div>
                    </div>
                    <div class="activity-score ${statusClass}">${scorePercent}%</div>
                </div>
            `;
        }).join('');
    }

    /**
     * Populate leaderboard
     */
    function populateLeaderboard() {
        const rankings = window.TrainingCore.getRankings(5);
        const container = document.getElementById('leaderboardList');
        const myName = window.TrainingCore.getProfile()?.name?.toLowerCase();

        if (rankings.length === 0) {
            container.innerHTML = '<div class="no-activity">Be the first to complete a training!</div>';
            return;
        }

        container.innerHTML = rankings.map(r => {
            const isMe = r.name.toLowerCase() === myName;
            const rankEmoji = r.rank === 1 ? '🥇' : r.rank === 2 ? '🥈' : r.rank === 3 ? '🥉' : `#${r.rank}`;

            return `
                <div class="leaderboard-item ${isMe ? 'is-me' : ''}">
                    <div class="leaderboard-rank">${rankEmoji}</div>
                    <div class="leaderboard-name">${r.name}${isMe ? ' (You)' : ''}</div>
                    <div class="leaderboard-score">${r.completedTasks} tasks</div>
                </div>
            `;
        }).join('');
    }

    /**
     * Populate progress heatmap
     */
    function populateHeatmap() {
        const container = document.getElementById('progressHeatmap');
        const scores = window.TrainingCore.getAllScores();

        // Build module progress data
        const modules = Object.keys(MODULE_NAMES);

        container.innerHTML = modules.map(moduleId => {
            const module = MODULE_NAMES[moduleId];
            const tasks = [];

            for (let i = 1; i <= 10; i++) {
                const taskScores = scores[`${moduleId}_task${i}`] || [];
                const passed = taskScores.some(s => s.passed);
                const attempted = taskScores.length > 0;

                let status = 'not-started';
                if (passed) status = 'completed';
                else if (attempted) status = 'in-progress';

                tasks.push({ id: i, status });
            }

            const completedCount = tasks.filter(t => t.status === 'completed').length;

            return `
                <div class="heatmap-row">
                    <div class="heatmap-label" title="${module.name}">
                        <span class="heatmap-icon">${module.icon}</span>
                        <span class="heatmap-name">${module.name}</span>
                    </div>
                    <div class="heatmap-cells">
                        ${tasks.map(t => `
                            <div class="heatmap-cell ${t.status}" title="Task ${t.id}: ${t.status.replace('-', ' ')}"></div>
                        `).join('')}
                    </div>
                    <div class="heatmap-count">${completedCount}/10</div>
                </div>
            `;
        }).join('');
    }

    /**
     * Update training cards with progress indicators
     */
    function updateProgressCards() {
        const cards = document.querySelectorAll('.training-card');

        cards.forEach(card => {
            const link = card.getAttribute('href') || card.querySelector('a')?.getAttribute('href');
            if (!link) return;

            // Extract module ID from link
            const match = link.match(/(\w+)-training\.html/);
            if (!match) return;

            const moduleId = match[1];
            const stats = window.TrainingCore.getModuleStats(moduleId);

            if (stats.passedTasks > 0) {
                // Add progress indicator
                const indicator = document.createElement('div');
                indicator.className = 'card-progress-indicator';
                indicator.innerHTML = `
                    <div class="progress-bar-mini">
                        <div class="progress-fill-mini" style="width: ${stats.completionPercent}%"></div>
                    </div>
                    <span class="progress-text-mini">${stats.passedTasks}/10</span>
                `;
                card.appendChild(indicator);
            }
        });
    }

    /**
     * Add dashboard styles
     */
    function addDashboardStyles() {
        if (document.getElementById('dashboard-styles')) return;

        const style = document.createElement('style');
        style.id = 'dashboard-styles';
        style.textContent = `
            .dashboard-section {
                margin-top: 30px;
            }
            
            .stats-row {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 15px;
                margin-bottom: 20px;
            }
            
            .stat-card {
                background: var(--card-bg);
                border: 1px solid var(--border);
                border-radius: 12px;
                padding: 20px;
                text-align: center;
                transition: all 0.3s ease;
            }
            
            .stat-card:hover {
                transform: translateY(-3px);
                border-color: var(--training);
            }
            
            .stat-icon {
                font-size: 2em;
                margin-bottom: 8px;
            }
            
            .stat-value {
                font-size: 2.2em;
                font-weight: 800;
                color: var(--training);
                line-height: 1;
            }
            
            .stat-value.active-streak {
                animation: pulse 1.5s infinite;
            }
            
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }
            
            .stat-label {
                color: var(--muted);
                font-size: 0.85em;
                margin-top: 5px;
            }
            
            .dashboard-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 20px;
                margin-bottom: 20px;
            }
            
            .dashboard-card {
                background: var(--card-bg);
                border: 1px solid var(--border);
                border-radius: 12px;
                padding: 20px;
            }
            
            .dashboard-card.full-width {
                grid-column: 1 / -1;
            }
            
            .dashboard-card h3 {
                color: #fff;
                font-size: 1em;
                margin: 0 0 15px 0;
                padding-bottom: 10px;
                border-bottom: 1px solid var(--border);
            }
            
            .activity-list, .leaderboard-list {
                max-height: 250px;
                overflow-y: auto;
            }
            
            .activity-item, .leaderboard-item {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 10px;
                border-radius: 8px;
                margin-bottom: 8px;
                background: rgba(255, 255, 255, 0.02);
            }
            
            .activity-item:hover, .leaderboard-item:hover {
                background: rgba(255, 255, 255, 0.05);
            }
            
            .activity-icon {
                width: 36px;
                height: 36px;
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.2em;
            }
            
            .activity-details {
                flex: 1;
            }
            
            .activity-title {
                color: #fff;
                font-size: 0.9em;
            }
            
            .activity-meta {
                color: var(--muted);
                font-size: 0.75em;
            }
            
            .activity-score {
                font-weight: 700;
                font-size: 0.9em;
                padding: 4px 10px;
                border-radius: 6px;
            }
            
            .activity-score.passed {
                background: rgba(16, 185, 129, 0.2);
                color: #10B981;
            }
            
            .activity-score.failed {
                background: rgba(239, 68, 68, 0.2);
                color: #EF4444;
            }
            
            .leaderboard-rank {
                width: 32px;
                text-align: center;
                font-size: 1.1em;
            }
            
            .leaderboard-name {
                flex: 1;
                color: #fff;
                font-size: 0.9em;
            }
            
            .leaderboard-score {
                color: var(--training);
                font-weight: 600;
                font-size: 0.85em;
            }
            
            .leaderboard-item.is-me {
                background: rgba(16, 185, 129, 0.1);
                border: 1px solid rgba(16, 185, 129, 0.3);
            }
            
            .no-activity {
                color: var(--muted);
                text-align: center;
                padding: 30px;
                font-size: 0.9em;
            }
            
            /* Progress Heatmap */
            .progress-heatmap {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
            
            .heatmap-row {
                display: flex;
                align-items: center;
                gap: 12px;
            }
            
            .heatmap-label {
                width: 140px;
                display: flex;
                align-items: center;
                gap: 8px;
                color: #fff;
                font-size: 0.8em;
            }
            
            .heatmap-icon {
                font-size: 1.2em;
            }
            
            .heatmap-name {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            
            .heatmap-cells {
                display: flex;
                gap: 4px;
                flex: 1;
            }
            
            .heatmap-cell {
                width: 24px;
                height: 24px;
                border-radius: 4px;
                background: rgba(255, 255, 255, 0.05);
                transition: all 0.2s ease;
            }
            
            .heatmap-cell.in-progress {
                background: rgba(251, 191, 36, 0.4);
                border: 1px solid rgba(251, 191, 36, 0.6);
            }
            
            .heatmap-cell.completed {
                background: rgba(16, 185, 129, 0.5);
                border: 1px solid rgba(16, 185, 129, 0.7);
            }
            
            .heatmap-cell:hover {
                transform: scale(1.2);
            }
            
            .heatmap-count {
                width: 45px;
                text-align: right;
                color: var(--muted);
                font-size: 0.8em;
            }
            
            /* Card progress indicator */
            .card-progress-indicator {
                display: flex;
                align-items: center;
                gap: 8px;
                margin-top: 10px;
                padding-top: 10px;
                border-top: 1px solid var(--border);
            }
            
            .progress-bar-mini {
                flex: 1;
                height: 4px;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 2px;
                overflow: hidden;
            }
            
            .progress-fill-mini {
                height: 100%;
                background: var(--training);
                transition: width 0.3s ease;
            }
            
            .progress-text-mini {
                color: var(--training);
                font-size: 0.75em;
                font-weight: 600;
            }
            
            /* Responsive */
            @media (max-width: 900px) {
                .stats-row {
                    grid-template-columns: repeat(2, 1fr);
                }
                
                .dashboard-grid {
                    grid-template-columns: 1fr;
                }
                
                .heatmap-label {
                    width: 100px;
                }
                
                .heatmap-name {
                    display: none;
                }
            }
            
            @media (max-width: 500px) {
                .stats-row {
                    grid-template-columns: 1fr 1fr;
                }
                
                .heatmap-cell {
                    width: 18px;
                    height: 18px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Expose for external use
    window.TrainingAnalytics = {
        refresh: function () {
            populateStats();
            populateActivity();
            populateLeaderboard();
            populateHeatmap();
        }
    };
})();
