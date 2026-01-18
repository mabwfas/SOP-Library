/**
 * Gamification System
 * Adds badges, achievements, and XP tracking
 */

(function () {
    'use strict';

    const STORAGE_KEY = 'dh_gamification';

    const ACHIEVEMENTS = {
        first_quiz: { name: 'Quiz Starter', icon: '🎯', desc: 'Complete your first quiz', xp: 50 },
        perfect_score: { name: 'Perfectionist', icon: '💯', desc: 'Get 100% on any quiz', xp: 100 },
        five_quizzes: { name: 'Quiz Master', icon: '🏆', desc: 'Complete 5 quizzes', xp: 150 },
        streak_3: { name: 'On Fire', icon: '🔥', desc: '3-day training streak', xp: 75 },
        streak_7: { name: 'Dedicated', icon: '⭐', desc: '7-day training streak', xp: 200 },
        all_tasks: { name: 'Champion', icon: '👑', desc: 'Complete all tasks in a module', xp: 300 },
        speed_demon: { name: 'Speed Demon', icon: '⚡', desc: 'Complete quiz under 60 seconds', xp: 100 },
        night_owl: { name: 'Night Owl', icon: '🦉', desc: 'Train after 10 PM', xp: 50 },
        early_bird: { name: 'Early Bird', icon: '🐦', desc: 'Train before 8 AM', xp: 50 },
        explorer: { name: 'Explorer', icon: '🧭', desc: 'Visit 5 different SOPs', xp: 75 }
    };

    window.Gamification = {
        getData: function () {
            const stored = localStorage.getItem(STORAGE_KEY);
            return stored ? JSON.parse(stored) : {
                xp: 0,
                level: 1,
                badges: [],
                quizzesCompleted: 0,
                pagesVisited: [],
                lastTrainingDate: null
            };
        },

        saveData: function (data) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
            this.updateUI();
        },

        addXP: function (amount, reason) {
            const data = this.getData();
            data.xp += amount;

            // Level up every 500 XP
            const newLevel = Math.floor(data.xp / 500) + 1;
            if (newLevel > data.level) {
                data.level = newLevel;
                this.showNotification(`🎉 Level Up! You're now Level ${newLevel}!`, 'level');
            }

            this.saveData(data);
            this.showNotification(`+${amount} XP: ${reason}`, 'xp');
        },

        unlockBadge: function (badgeId) {
            const data = this.getData();
            if (data.badges.includes(badgeId)) return false;

            const badge = ACHIEVEMENTS[badgeId];
            if (!badge) return false;

            data.badges.push(badgeId);
            data.xp += badge.xp;
            this.saveData(data);

            this.showNotification(`${badge.icon} Badge Unlocked: ${badge.name}!`, 'badge');
            return true;
        },

        checkAchievements: function (context) {
            const data = this.getData();

            // First quiz
            if (context.quizCompleted && data.quizzesCompleted === 0) {
                data.quizzesCompleted = 1;
                this.saveData(data);
                this.unlockBadge('first_quiz');
            }

            // Perfect score
            if (context.score === context.total && context.total > 0) {
                this.unlockBadge('perfect_score');
            }

            // Speed demon
            if (context.timeTaken && context.timeTaken < 60) {
                this.unlockBadge('speed_demon');
            }

            // Time-based badges
            const hour = new Date().getHours();
            if (hour >= 22 || hour < 5) {
                this.unlockBadge('night_owl');
            }
            if (hour >= 5 && hour < 8) {
                this.unlockBadge('early_bird');
            }

            // Track page visits
            if (context.pageVisited) {
                if (!data.pagesVisited.includes(context.pageVisited)) {
                    data.pagesVisited.push(context.pageVisited);
                    this.saveData(data);
                    if (data.pagesVisited.length >= 5) {
                        this.unlockBadge('explorer');
                    }
                }
            }
        },

        showNotification: function (message, type) {
            const notification = document.createElement('div');
            notification.className = `gamification-notification ${type}`;
            notification.innerHTML = message;

            document.body.appendChild(notification);

            setTimeout(() => notification.classList.add('visible'), 50);
            setTimeout(() => {
                notification.classList.remove('visible');
                setTimeout(() => notification.remove(), 300);
            }, 3000);
        },

        updateUI: function () {
            const data = this.getData();

            // Update XP display if exists
            const xpDisplay = document.getElementById('playerXP');
            if (xpDisplay) {
                xpDisplay.textContent = data.xp.toLocaleString();
            }

            // Update level display if exists
            const levelDisplay = document.getElementById('playerLevel');
            if (levelDisplay) {
                levelDisplay.textContent = data.level;
            }
        },

        showBadgePanel: function () {
            const data = this.getData();

            let panel = document.getElementById('badge-panel');
            if (panel) {
                panel.remove();
                return;
            }

            panel = document.createElement('div');
            panel.id = 'badge-panel';
            panel.className = 'badge-panel';
            panel.innerHTML = `
                <div class="badge-panel-header">
                    <h3>🏆 Your Achievements</h3>
                    <button onclick="this.parentElement.parentElement.remove()">✕</button>
                </div>
                <div class="badge-stats">
                    <div class="stat"><span class="value">${data.xp}</span><span class="label">XP</span></div>
                    <div class="stat"><span class="value">${data.level}</span><span class="label">Level</span></div>
                    <div class="stat"><span class="value">${data.badges.length}</span><span class="label">Badges</span></div>
                </div>
                <div class="badge-grid">
                    ${Object.entries(ACHIEVEMENTS).map(([id, badge]) => `
                        <div class="badge-item ${data.badges.includes(id) ? 'unlocked' : 'locked'}">
                            <span class="badge-icon">${badge.icon}</span>
                            <span class="badge-name">${badge.name}</span>
                            <span class="badge-desc">${badge.desc}</span>
                        </div>
                    `).join('')}
                </div>
            `;

            document.body.appendChild(panel);
        }
    };

    function init() {
        addStyles();
        Gamification.updateUI();

        // Track page visit
        const pagePath = window.location.pathname;
        Gamification.checkAchievements({ pageVisited: pagePath });

        console.log('✅ Gamification System loaded');
    }

    function addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .gamification-notification {
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translateX(-50%) translateY(-100px);
                background: linear-gradient(135deg, #6366F1, #8B5CF6);
                color: white;
                padding: 15px 30px;
                border-radius: 12px;
                font-weight: 600;
                z-index: 100000;
                box-shadow: 0 10px 40px rgba(99, 102, 241, 0.5);
                opacity: 0;
                transition: all 0.3s ease;
            }
            
            .gamification-notification.visible {
                transform: translateX(-50%) translateY(0);
                opacity: 1;
            }
            
            .gamification-notification.badge {
                background: linear-gradient(135deg, #F59E0B, #D97706);
            }
            
            .gamification-notification.level {
                background: linear-gradient(135deg, #10B981, #059669);
            }
            
            .badge-panel {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg, #1E293B, #0F172A);
                border: 2px solid rgba(99, 102, 241, 0.3);
                border-radius: 20px;
                padding: 25px;
                width: 90%;
                max-width: 500px;
                max-height: 80vh;
                overflow-y: auto;
                z-index: 100001;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
            }
            
            .badge-panel-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
            }
            
            .badge-panel-header h3 {
                color: #F8FAFC;
                margin: 0;
            }
            
            .badge-panel-header button {
                background: none;
                border: none;
                color: #94A3B8;
                font-size: 1.5em;
                cursor: pointer;
            }
            
            .badge-stats {
                display: flex;
                gap: 20px;
                margin-bottom: 25px;
            }
            
            .badge-stats .stat {
                flex: 1;
                text-align: center;
                padding: 15px;
                background: rgba(99, 102, 241, 0.1);
                border-radius: 12px;
            }
            
            .badge-stats .value {
                display: block;
                font-size: 1.8em;
                font-weight: 700;
                color: #6366F1;
            }
            
            .badge-stats .label {
                color: #94A3B8;
                font-size: 0.85em;
            }
            
            .badge-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 12px;
            }
            
            .badge-item {
                padding: 15px;
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 12px;
                text-align: center;
            }
            
            .badge-item.locked {
                opacity: 0.4;
                filter: grayscale(100%);
            }
            
            .badge-item.unlocked {
                border-color: rgba(99, 102, 241, 0.5);
                background: rgba(99, 102, 241, 0.1);
            }
            
            .badge-icon {
                font-size: 2em;
                display: block;
                margin-bottom: 8px;
            }
            
            .badge-name {
                display: block;
                font-weight: 600;
                color: #F8FAFC;
                font-size: 0.9em;
            }
            
            .badge-desc {
                display: block;
                color: #64748B;
                font-size: 0.75em;
                margin-top: 4px;
            }
        `;
        document.head.appendChild(style);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
