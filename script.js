// ===== GSAP ANIMATIONS & INTERACTIONS =====

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Hero section animations on load
function initHeroAnimations() {
    // Grid animation in canvas
    const canvas = document.getElementById('grid-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        let offset = 0;
        function drawGrid() {
            ctx.fillStyle = 'rgba(0, 212, 170, 0.02)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.strokeStyle = 'rgba(0, 212, 170, 0.1)';
            ctx.lineWidth = 1;

            // Vertical lines
            for (let x = 0; x < canvas.width; x += 100) {
                ctx.beginPath();
                ctx.moveTo(x + offset, 0);
                ctx.lineTo(x + offset, canvas.height);
                ctx.stroke();
            }

            // Horizontal lines
            for (let y = 0; y < canvas.height; y += 100) {
                ctx.beginPath();
                ctx.moveTo(0, y + offset);
                ctx.lineTo(canvas.width, y + offset);
                ctx.stroke();
            }

            offset = (offset + 1) % 100;
            requestAnimationFrame(drawGrid);
        }
        drawGrid();
    }
}

// Counter animation
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2;
        const startValue = 0;
        
        gsap.to({ value: startValue }, {
            value: target,
            duration: duration,
            onUpdate: function() {
                counter.textContent = Math.floor(this.targets()[0].value).toLocaleString();
            },
            scrollTrigger: {
                trigger: counter,
                start: 'top 80%',
                once: true
            }
        });
    });
}

// Scroll-triggered section reveals
function initScrollAnimations() {
    const sections = document.querySelectorAll('.system-section, .sector-section, .outcomes-section, .trust-section, .contact-section');
    
    sections.forEach((section, index) => {
        gsap.from(section, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                once: true
            }
        });
    });
}

// System layer hover interactions
function initSystemLayers() {
    const layers = document.querySelectorAll('.system-layer');
    
    layers.forEach(layer => {
        layer.addEventListener('mouseenter', function() {
            const details = this.querySelector('.layer-details');
            if (details) {
                details.classList.remove('hidden');
                gsap.to(details, {
                    opacity: 1,
                    duration: 0.3
                });
            }
        });

        layer.addEventListener('mouseleave', function() {
            const details = this.querySelector('.layer-details');
            if (details) {
                gsap.to(details, {
                    opacity: 0,
                    duration: 0.3,
                    onComplete: function() {
                        details.classList.add('hidden');
                    }
                });
            }
        });
    });
}

// Sector tab switching with smooth animation
function initSectorTabs() {
    const tabs = document.querySelectorAll('.sector-tab');
    const panels = document.querySelectorAll('.sector-panel');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const sector = this.getAttribute('data-sector');
            
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Animate panel switch
            panels.forEach(panel => {
                if (panel.getAttribute('data-sector') === sector) {
                    panel.classList.add('active');
                    gsap.from(panel, {
                        opacity: 0,
                        duration: 0.4
                    });
                } else {
                    panel.classList.remove('active');
                }
            });
        });
    });
}

// Smooth scroll behavior
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                gsap.to(window, {
                    scrollTo: {
                        y: target.offsetTop - 80,
                        autoKill: false
                    },
                    duration: 0.8,
                    ease: 'power2.inOut'
                });
            }
        });
    });
}

// Outcome card scroll reveal
function initOutcomeCards() {
    const cards = document.querySelectorAll('.outcome-card');
    
    cards.forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                once: true
            }
        });
    });
}

// Partner logo hover effect
function initPartnerLogos() {
    const partnerItems = document.querySelectorAll('.partner-item, .partner-logo');
    
    partnerItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.05,
                duration: 0.3
            });
        });

        item.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.3
            });
        });
    });
}

// Initialize all animations on page load
document.addEventListener('DOMContentLoaded', function() {
    initHeroAnimations();
    animateCounters();
    initScrollAnimations();
    initSystemLayers();
    initSectorTabs();
    initSmoothScroll();
    initOutcomeCards();
    initPartnerLogos();

    // Refresh ScrollTrigger after all content loads
    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 100);
});

// Refresh ScrollTrigger on window resize
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});
