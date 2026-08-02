// Forge AI - Animation Utilities

class AnimationController {
    constructor() {
        this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.init();
    }

    init() {
        if (!this.reducedMotion) {
            this.setupScrollAnimations();
            this.setupHoverEffects();
        }
    }

    // Scroll-based animations
    setupScrollAnimations() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements with data-animate attribute
        document.querySelectorAll('[data-animate]').forEach(el => {
            observer.observe(el);
        });
    }

    // Hover effect enhancements
    setupHoverEffects() {
        // Add ripple effect to buttons
        document.querySelectorAll('.btn-primary, .btn-secondary, .sidebar-btn-primary').forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (this.reducedMotion) return;
                
                const rect = btn.getBoundingClientRect();
                const ripple = document.createElement('span');
                ripple.className = 'ripple';
                ripple.style.left = (e.clientX - rect.left) + 'px';
                ripple.style.top = (e.clientY - rect.top) + 'px';
                btn.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });

        // 3D card tilt effect
        document.querySelectorAll('.card-3d, .feature-card, .artifact-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                if (this.reducedMotion) return;
                
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            });
        });
    }

    // Typing animation for text
    typeText(element, text, speed = 50) {
        return new Promise(resolve => {
            if (this.reducedMotion) {
                element.textContent = text;
                resolve();
                return;
            }

            element.textContent = '';
            let i = 0;
            
            const type = () => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                } else {
                    resolve();
                }
            };
            
            type();
        });
    }

    // Stream text character by character
    streamText(element, text, speed = 30) {
        return new Promise(resolve => {
            if (this.reducedMotion) {
                element.textContent = text;
                resolve();
                return;
            }

            element.innerHTML = '';
            let i = 0;
            
            const stream = () => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    
                    // Auto scroll to bottom
                    const container = element.closest('.chat-messages');
                    if (container) {
                        container.scrollTop = container.scrollHeight;
                    }
                    
                    setTimeout(stream, speed);
                } else {
                    // Add cursor at end
                    const cursor = document.createElement('span');
                    cursor.className = 'streaming-cursor';
                    element.appendChild(cursor);
                    resolve();
                }
            };
            
            stream();
        });
    }

    // Progress bar animation
    animateProgress(bar, targetPercent, duration = 1000) {
        return new Promise(resolve => {
            if (this.reducedMotion) {
                bar.style.width = targetPercent + '%';
                resolve();
                return;
            }

            const start = performance.now();
            const startWidth = parseFloat(bar.style.width) || 0;
            
            const animate = (currentTime) => {
                const elapsed = currentTime - start;
                const progress = Math.min(elapsed / duration, 1);
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const currentWidth = startWidth + (targetPercent - startWidth) * easeOut;
                
                bar.style.width = currentWidth + '%';
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    resolve();
                }
            };
            
            requestAnimationFrame(animate);
        });
    }

    // Fade in element
    fadeIn(element, duration = 300) {
        return new Promise(resolve => {
            element.style.opacity = '0';
            element.style.display = 'block';
            
            if (this.reducedMotion) {
                element.style.opacity = '1';
                resolve();
                return;
            }

            const start = performance.now();
            
            const animate = (currentTime) => {
                const elapsed = currentTime - start;
                const progress = Math.min(elapsed / duration, 1);
                element.style.opacity = progress;
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    resolve();
                }
            };
            
            requestAnimationFrame(animate);
        });
    }

    // Fade out element
    fadeOut(element, duration = 300) {
        return new Promise(resolve => {
            if (this.reducedMotion) {
                element.style.display = 'none';
                resolve();
                return;
            }

            const start = performance.now();
            
            const animate = (currentTime) => {
                const elapsed = currentTime - start;
                const progress = Math.min(elapsed / duration, 1);
                element.style.opacity = 1 - progress;
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    element.style.display = 'none';
                    element.style.opacity = '';
                    resolve();
                }
            };
            
            requestAnimationFrame(animate);
        });
    }

    // Slide in from left
    slideInLeft(element, duration = 400) {
        return new Promise(resolve => {
            if (this.reducedMotion) {
                element.style.transform = 'translateX(0)';
                element.style.opacity = '1';
                resolve();
                return;
            }

            element.style.transform = 'translateX(-30px)';
            element.style.opacity = '0';
            element.style.display = 'block';
            
            const start = performance.now();
            
            const animate = (currentTime) => {
                const elapsed = currentTime - start;
                const progress = Math.min(elapsed / duration, 1);
                const easeOut = 1 - Math.pow(1 - progress, 3);
                
                element.style.transform = `translateX(${(-30 + 30 * easeOut)}px)`;
                element.style.opacity = easeOut;
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    resolve();
                }
            };
            
            requestAnimationFrame(animate);
        });
    }

    // Create and animate particles
    createParticles(container, count = 20) {
        if (this.reducedMotion) return;

        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.setProperty('--tx', (Math.random() - 0.5) * 200 + 'px');
            particle.style.setProperty('--ty', (Math.random() - 0.5) * 200 + 'px');
            particle.style.animationDelay = Math.random() * 10 + 's';
            particle.style.animationDuration = (10 + Math.random() * 10) + 's';
            container.appendChild(particle);
        }
    }

    // Skeleton loading animation
    showSkeleton(target, duration = 1000) {
        const skeleton = document.createElement('div');
        skeleton.className = 'skeleton';
        skeleton.style.width = target.offsetWidth + 'px';
        skeleton.style.height = target.offsetHeight + 'px';
        
        target.replaceWith(skeleton);
        
        return new Promise(resolve => {
            setTimeout(() => {
                skeleton.replaceWith(target);
                resolve();
            }, duration);
        });
    }
}

// Initialize animation controller
const animations = new AnimationController();

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AnimationController;
}
