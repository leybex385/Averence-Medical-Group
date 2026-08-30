
document.addEventListener('DOMContentLoaded', () => {
    // Intelligent Smooth Scrolling for Intra-Page Links
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if(!this.href) return;
            try {
                const url = new URL(this.href, window.location.href);
                // If the link points to the exact same page path and contains a hash
                if (url.pathname === window.location.pathname && url.hash) {
                    const target = document.querySelector(url.hash);
                    if (target) {
                        e.preventDefault();
                        target.scrollIntoView({ behavior: 'smooth' });
                        history.pushState(null, null, url.hash);
                    }
                }
            } catch(err) {
                // Ignore invalid URLs
            }
        });
    });

    // 1. Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    if(mobileToggle) mobileToggle.addEventListener('click', () => {
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'rgba(5, 7, 10, 0.98)';
            navLinks.style.padding = '20px 0';
            navLinks.style.alignItems = 'center';
            navLinks.style.gap = '20px';
            
            // Adjust margin for mobile items
            const links = navLinks.querySelectorAll('a');
            links.forEach(link => link.style.marginLeft = '0');
        }
    });

    // 2. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Number Counter Animation
    const counters = document.querySelectorAll('.counter');
    const speed = 100; // Animation speed

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 15);
                } else {
                    counter.innerText = target;
                }
            };
            
            // reset to 0 in case it runs multiple times, though we unobserve
            if (counter.innerText === "0") {
                updateCount();
            }
        });
    };

    // 4. Reveal Elements on Scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                
                // Trigger counter animation if stats section is in view
                if(entry.target.classList.contains('hero-stats') || entry.target.closest('.hero-stats')) {
                    animateCounters();
                }
                
                // Stop observing once visible
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply fade-in class to major sections for scroll animation
    const elementsToReveal = document.querySelectorAll('section:not(.hero), .glass-card, .team-card, .glass-pill, .timeline-item, .hero-stats, .fade-in-section');
    elementsToReveal.forEach(el => {
        el.classList.add('fade-in-section');
        observer.observe(el);
    });
    
    // Auto-reveal hero elements
    setTimeout(() => animateCounters(), 500); // trigger counter for hero section
});

const mobileToggle = document.querySelector('.mobile-toggle'); if(mobileToggle) { mobileToggle.addEventListener('click', () => { const navLinks = document.querySelector('.nav-links'); if(navLinks) navLinks.classList.toggle('active'); }); }


// Cross-Page Anchor Failsafe
window.addEventListener('load', () => {
    if (window.location.hash) {
        setTimeout(() => {
            try {
                const target = document.querySelector(window.location.hash);
                if (target) {
                    target.scrollIntoView({ behavior: 'auto' });
                }
            } catch(e) {}
        }, 150); // Delay allows images and video to populate their natural vertical heights
    }
});
