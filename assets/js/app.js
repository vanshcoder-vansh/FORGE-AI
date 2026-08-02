// Forge AI - Main Application JavaScript

class ForgeApp {
    constructor() {
        this.currentTheme = 'theme-dark';
        this.currentAccent = 'accent-violet';
        this.sidebarOpen = false;
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadPreferences();
        console.log('Forge AI initialized');
    }

    bindEvents() {
        // Mobile sidebar toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => this.toggleSidebar());
        }

        // Sidebar overlay click
        const sidebarOverlay = document.querySelector('.sidebar-overlay');
        if (sidebarOverlay) {
            sidebarOverlay.addEventListener('click', () => this.closeSidebar());
        }

        // Theme switcher (if exists)
        const themeSwitcher = document.querySelector('.theme-switcher');
        if (themeSwitcher) {
            this.initThemeSwitcher(themeSwitcher);
        }

        // Keyboard shortcuts
        this.bindKeyboardShortcuts();
    }

    toggleSidebar() {
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.sidebar-overlay');
        
        if (sidebar && overlay) {
            this.sidebarOpen = !this.sidebarOpen;
            sidebar.classList.toggle('open', this.sidebarOpen);
            overlay.classList.toggle('active', this.sidebarOpen);
        }
    }

    closeSidebar() {
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.sidebar-overlay');
        
        if (sidebar && overlay) {
            this.sidebarOpen = false;
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
        }
    }

    initThemeSwitcher(switcher) {
        const themes = ['theme-dark', 'theme-light', 'theme-midnight'];
        let currentIndex = 0;

        switcher.addEventListener('click', () => {
            document.body.classList.remove(this.currentTheme);
            currentIndex = (currentIndex + 1) % themes.length;
            this.currentTheme = themes[currentIndex];
            document.body.classList.add(this.currentTheme);
            this.savePreferences();
        });
    }

    bindKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Cmd/Ctrl + K for search
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                const searchInput = document.querySelector('.navbar-search input');
                if (searchInput) {
                    searchInput.focus();
                }
            }

            // Escape to close sidebar on mobile
            if (e.key === 'Escape' && this.sidebarOpen) {
                this.closeSidebar();
            }

            // Cmd/Ctrl + Enter to send message
            if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
                const sendBtn = document.querySelector('.prompt-send-btn');
                if (sendBtn) {
                    sendBtn.click();
                }
            }
        });
    }

    savePreferences() {
        try {
            localStorage.setItem('forge-theme', this.currentTheme);
            localStorage.setItem('forge-accent', this.currentAccent);
        } catch (e) {
            console.warn('Could not save preferences:', e);
        }
    }

    loadPreferences() {
        try {
            const savedTheme = localStorage.getItem('forge-theme');
            const savedAccent = localStorage.getItem('forge-accent');

            if (savedTheme) {
                document.body.classList.remove(this.currentTheme);
                this.currentTheme = savedTheme;
                document.body.classList.add(savedTheme);
            }

            if (savedAccent) {
                document.body.classList.remove(this.currentAccent);
                this.currentAccent = savedAccent;
                document.body.classList.add(savedAccent);
            }
        } catch (e) {
            console.warn('Could not load preferences:', e);
        }
    }

    // Utility: Show notification
    showNotification(message, type = 'info') {
        const container = document.querySelector('.notification-container') || this.createNotificationContainer();
        
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <span class="notification-message">${message}</span>
            <button class="notification-close">×</button>
        `;

        container.appendChild(notification);

        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.remove();
        }, 5000);

        // Close button handler
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.remove();
        });
    }

    createNotificationContainer() {
        const container = document.createElement('div');
        container.className = 'notification-container fixed top-20 right-4 z-50 flex flex-col gap-2';
        document.body.appendChild(container);
        return container;
    }

    // Utility: Format date
    formatDate(date) {
        return new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).format(new Date(date));
    }

    // Utility: Format file size
    formatFileSize(bytes) {
        if (bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
}

// Initialize app when DOM is ready
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new ForgeApp();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ForgeApp;
}
