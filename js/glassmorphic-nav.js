// Glassmorphic navigation hover effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        // Create subtle glow effect on hover
        link.addEventListener('mouseenter', function(e) {
            const glow = document.createElement('div');
            glow.classList.add('nav-link-glow');
            glow.style.position = 'absolute';
            glow.style.width = '100%';
            glow.style.height = '100%';
            glow.style.top = '0';
            glow.style.left = '0';
            glow.style.borderRadius = '12px';
            glow.style.background = 'rgba(0, 117, 255, 0.15)';
            glow.style.filter = 'blur(8px)';
            glow.style.opacity = '0';
            glow.style.transition = 'opacity 0.3s ease';
            glow.style.zIndex = '-1';
            
            link.style.position = 'relative';
            link.appendChild(glow);
            
            setTimeout(() => {
                glow.style.opacity = '1';
            }, 10);
        });
        
        // Remove glow effect when hover ends
        link.addEventListener('mouseleave', function(e) {
            const glow = link.querySelector('.nav-link-glow');
            if (glow) {
                glow.style.opacity = '0';
                setTimeout(() => {
                    if (glow && glow.parentNode === link) {
                        link.removeChild(glow);
                    }
                }, 300);
            }
        });
    });
    
    // Enhance mobile menu with a smoother transition
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinksContainer = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinksContainer) {
        mobileMenuBtn.addEventListener('click', function() {
            // Add staggered animation to mobile menu items
            if (!navLinksContainer.classList.contains('active')) {
                const mobileLinks = navLinksContainer.querySelectorAll('li');
                mobileLinks.forEach((link, index) => {
                    link.style.opacity = '0';
                    link.style.transform = 'translateY(20px)';
                    link.style.transition = 'none';
                    
                    setTimeout(() => {
                        link.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                        link.style.transitionDelay = `${index * 0.1}s`;
                        link.style.opacity = '1';
                        link.style.transform = 'translateY(0)';
                    }, 300);
                });
            }
        });
    }
    
    // Initialize active state for current section
    function setInitialActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if(scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelector('.nav-link[href="#' + sectionId + '"]').classList.add('active');
            }
        });
    }
    
    // Set initial active link
    setInitialActiveLink();
});
