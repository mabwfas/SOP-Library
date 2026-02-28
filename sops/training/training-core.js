/**
 * Training Core System
 * Shared functionality for all training modules
 * Features: Score history, best scores, retry analytics, streaks, leaderboard
 */

(function () {
    'use strict';

    // Storage keys
    const KEYS = {
        SCORES: 'dh_training_scores',
        STREAKS: 'dh_training_streaks',
        LEADERBOARD: 'dh_training_leaderboard',
        PROFILE: 'dh_training_profile'
    };

    // Initialize core
    const TrainingCore = {
        version: '1.0.0',

        /**
         * Save a quiz attempt result
         */
        saveQuizResult: function (moduleId, taskId, result) {
            const scores = this.getAllScores();
            const key = `${moduleId}_task${taskId}`;

            if (!scores[key]) {
                scores[key] = [];
            }

            const attempt = {
                score: result.score,
                total: result.total,
                passed: result.passed,
                timeTaken: result.timeTaken || 0,
                attempt: scores[key].length + 1,
                timestamp: Date.now(),
                date: new Date().toISOString()
            };

            scores[key].push(attempt);
            localStorage.setItem(KEYS.SCORES, JSON.stringify(scores));

            // Update streak
            this.updateStreak();

            // Update leaderboard
            if (result.passed) {
                this.updateLeaderboard(moduleId, taskId, result);
            }

            return attempt;
        },

        /**
         * Get all saved scores
         */
        getAllScores: function () {
            try {
                return JSON.parse(localStorage.getItem(KEYS.SCORES)) || {};
            } catch (e) {
                return {};
            }
        },

        /**
         * Get scores for a specific module/task
         */
        getTaskScores: function (moduleId, taskId) {
            const scores = this.getAllScores();
            return scores[`${moduleId}_task${taskId}`] || [];
        },

        /**
         * Get best score for a task
         */
        getBestScore: function (moduleId, taskId) {
            const attempts = this.getTaskScores(moduleId, taskId);
            if (attempts.length === 0) return null;

            return attempts.reduce((best, curr) => {
                const currPercent = (curr.score / curr.total) * 100;
                const bestPercent = best ? (best.score / best.total) * 100 : 0;
                return currPercent > bestPercent ? curr : best;
            }, null);
        },

        /**
         * Get attempts count for a task
         */
        getAttempts: function (moduleId, taskId) {
            return this.getTaskScores(moduleId, taskId).length;
        },

        /**
         * Get overall stats for a module
         */
        getModuleStats: function (moduleId) {
            const scores = this.getAllScores();
            const moduleScores = Object.entries(scores)
                .filter(([key]) => key.startsWith(moduleId))
                .map(([key, attempts]) => ({
                    taskId: key.replace(`${moduleId}_task`, ''),
                    attempts: attempts,
                    bestScore: attempts.reduce((best, curr) =>
                        (curr.score / curr.total) > (best?.score / best?.total || 0) ? curr : best, null),
                    passed: attempts.some(a => a.passed)
                }));

            const totalTasks = moduleScores.length;
            const passedTasks = moduleScores.filter(t => t.passed).length;
            const totalAttempts = moduleScores.reduce((sum, t) => sum + t.attempts.length, 0);
            const avgScore = moduleScores.length > 0
                ? moduleScores.reduce((sum, t) => sum + (t.bestScore?.score / t.bestScore?.total * 100 || 0), 0) / moduleScores.length
                : 0;

            return {
                totalTasks,
                passedTasks,
                totalAttempts,
                averageScore: Math.round(avgScore),
                completionPercent: totalTasks > 0 ? Math.round((passedTasks / 10) * 100) : 0
            };
        },

        /**
         * Get global stats across all modules
         */
        getGlobalStats: function () {
            const scores = this.getAllScores();
            const modules = {};

            Object.entries(scores).forEach(([key, attempts]) => {
                const moduleId = key.split('_task')[0];
                if (!modules[moduleId]) {
                    modules[moduleId] = { passed: 0, total: 0, attempts: 0 };
                }
                modules[moduleId].total++;
                modules[moduleId].attempts += attempts.length;
                if (attempts.some(a => a.passed)) {
                    modules[moduleId].passed++;
                }
            });

            const totalModules = Object.keys(modules).length;
            const completedModules = Object.values(modules).filter(m => m.passed >= 10).length;
            const totalAttempts = Object.values(modules).reduce((sum, m) => sum + m.attempts, 0);

            return {
                modulesStarted: totalModules,
                modulesCompleted: completedModules,
                totalAttempts,
                streak: this.getCurrentStreak()
            };
        },

        /**
         * Update daily streak
         */
        updateStreak: function () {
            const streaks = this.getStreaks();
            const today = new Date().toDateString();
            const yesterday = new Date(Date.now() - 86400000).toDateString();

            if (streaks.lastDate === today) {
                // Already trained today
                return;
            }

            if (streaks.lastDate === yesterday) {
                // Continuing streak
                streaks.current++;
                streaks.best = Math.max(streaks.best, streaks.current);
            } else {
                // Streak broken or first day, start new
                streaks.current = 1;
                streaks.best = Math.max(streaks.best, streaks.current);
            }

            streaks.lastDate = today;
            localStorage.setItem(KEYS.STREAKS, JSON.stringify(streaks));
        },

        /**
         * Get streak data
         */
        getStreaks: function () {
            try {
                return JSON.parse(localStorage.getItem(KEYS.STREAKS)) || { current: 0, best: 0, lastDate: null };
            } catch (e) {
                return { current: 0, best: 0, lastDate: null };
            }
        },

        /**
         * Get current streak
         */
        getCurrentStreak: function () {
            const streaks = this.getStreaks();
            const today = new Date().toDateString();
            const yesterday = new Date(Date.now() - 86400000).toDateString();

            // Only count if trained today or yesterday
            if (streaks.lastDate === today || streaks.lastDate === yesterday) {
                return streaks.current;
            }
            return 0;
        },

        /**
         * Get recent activity (last N quiz attempts)
         */
        getRecentActivity: function (limit = 10) {
            const scores = this.getAllScores();
            const allAttempts = [];

            Object.entries(scores).forEach(([key, attempts]) => {
                const [moduleId, taskPart] = key.split('_task');
                const taskId = parseInt(taskPart);

                attempts.forEach(attempt => {
                    allAttempts.push({
                        moduleId,
                        taskId,
                        ...attempt
                    });
                });
            });

            // Sort by timestamp descending
            allAttempts.sort((a, b) => b.timestamp - a.timestamp);

            return allAttempts.slice(0, limit);
        },

        /**
         * Update leaderboard entry
         */
        updateLeaderboard: function (moduleId, taskId, result) {
            const profile = this.getProfile();
            if (!profile.name) return;

            const leaderboard = this.getLeaderboard();
            const key = profile.name.toLowerCase().replace(/\s+/g, '_');

            if (!leaderboard[key]) {
                leaderboard[key] = {
                    name: profile.name,
                    modules: {},
                    totalScore: 0,
                    completedTasks: 0,
                    joinedAt: Date.now()
                };
            }

            if (!leaderboard[key].modules[moduleId]) {
                leaderboard[key].modules[moduleId] = { passed: [], scores: {} };
            }

            // Track passed tasks
            if (!leaderboard[key].modules[moduleId].passed.includes(taskId)) {
                leaderboard[key].modules[moduleId].passed.push(taskId);
                leaderboard[key].completedTasks++;
            }

            // Track best score
            const prevBest = leaderboard[key].modules[moduleId].scores[taskId] || 0;
            const newScore = (result.score / result.total) * 100;
            if (newScore > prevBest) {
                leaderboard[key].modules[moduleId].scores[taskId] = newScore;
            }

            // Calculate total score
            let totalScore = 0;
            Object.values(leaderboard[key].modules).forEach(mod => {
                Object.values(mod.scores).forEach(score => {
                    totalScore += score;
                });
            });
            leaderboard[key].totalScore = totalScore;

            localStorage.setItem(KEYS.LEADERBOARD, JSON.stringify(leaderboard));
        },

        /**
         * Get leaderboard
         */
        getLeaderboard: function () {
            try {
                return JSON.parse(localStorage.getItem(KEYS.LEADERBOARD)) || {};
            } catch (e) {
                return {};
            }
        },

        /**
         * Get leaderboard rankings
         */
        getRankings: function (limit = 10) {
            const leaderboard = this.getLeaderboard();
            const rankings = Object.values(leaderboard)
                .sort((a, b) => {
                    // Sort by completed tasks first, then by total score
                    if (b.completedTasks !== a.completedTasks) {
                        return b.completedTasks - a.completedTasks;
                    }
                    return b.totalScore - a.totalScore;
                })
                .slice(0, limit)
                .map((entry, index) => ({
                    rank: index + 1,
                    ...entry
                }));

            return rankings;
        },

        /**
         * Get user's rank
         */
        getMyRank: function () {
            const profile = this.getProfile();
            if (!profile.name) return null;

            const rankings = this.getRankings(100);
            const myEntry = rankings.find(r =>
                r.name.toLowerCase() === profile.name.toLowerCase()
            );

            return myEntry?.rank || null;
        },

        /**
         * Get/set user profile
         */
        getProfile: function () {
            try {
                return JSON.parse(localStorage.getItem(KEYS.PROFILE)) || { name: '' };
            } catch (e) {
                return { name: '' };
            }
        },

        setProfile: function (profile) {
            localStorage.setItem(KEYS.PROFILE, JSON.stringify(profile));
        },

        /**
         * Format time duration
         */
        formatTime: function (seconds) {
            if (seconds < 60) return `${seconds}s`;
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${mins}m ${secs}s`;
        },

        /**
         * Format relative time
         */
        formatRelativeTime: function (timestamp) {
            const diff = Date.now() - timestamp;
            const minutes = Math.floor(diff / 60000);
            const hours = Math.floor(diff / 3600000);
            const days = Math.floor(diff / 86400000);

            if (minutes < 1) return 'Just now';
            if (minutes < 60) return `${minutes}m ago`;
            if (hours < 24) return `${hours}h ago`;
            if (days < 7) return `${days}d ago`;
            return new Date(timestamp).toLocaleDateString();
        },

        /**
         * Reset all data (for testing)
         */
        resetAll: function () {
            localStorage.removeItem(KEYS.SCORES);
            localStorage.removeItem(KEYS.STREAKS);
            localStorage.removeItem(KEYS.LEADERBOARD);
        }
    };

    // Expose globally
    window.TrainingCore = TrainingCore;

    // Auto-sync profile name from existing localStorage keys
    document.addEventListener('DOMContentLoaded', function () {
        const profile = TrainingCore.getProfile();
        if (!profile.name) {
            // Try to find name from existing training data
            const nameKeys = [
                'developerTraineeName', 'salesTraineeName', 'designerTraineeName',
                'contentTraineeName', 'csTraineeName', 'hrTraineeName',
                'financeTraineeName', 'pmTraineeName', 'fullstackTraineeName',
                'operationsTraineeName', 'socialMediaTraineeName', 'clientChatTraineeName'
            ];
            for (const key of nameKeys) {
                const name = localStorage.getItem(key);
                if (name) {
                    TrainingCore.setProfile({ name });
                    break;
                }
            }
        }
    });
})();
