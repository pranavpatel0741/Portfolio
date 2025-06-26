document.addEventListener('DOMContentLoaded', function() {
    
    // Enhanced animations initialization
    const animateElements = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const delay = element.dataset.delay || 0;
            setTimeout(() => {
                element.classList.add('animated');
            }, delay);
        });
    };
    
    // Navigation scrolling
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (document.querySelector('.nav-links').classList.contains('active')) {
                document.querySelector('.nav-links').classList.remove('active');
                document.querySelector('.mobile-menu-btn').classList.remove('active');
            }
        });
    });
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinksContainer = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinksContainer.classList.toggle('active');
    });
    
    // Sticky navigation functionality
    const header = document.querySelector('header');
    
    // Debug: Check if header is found
    if (!header) {
        console.error('Header element not found!');
        return;
    }
    
    console.log('Header element found, setting up sticky behavior');
    
    // Function to handle sticky behavior on scroll
    function handleStickyHeader() {
        const scrollPosition = window.scrollY;
        
        // Add scrolled class for enhanced styling when scrolled
        if (scrollPosition > 100) {
            if (!header.classList.contains('scrolled')) {
                header.classList.add('scrolled');
                console.log('Added scrolled class at position:', scrollPosition);
            }
        } else {
            if (header.classList.contains('scrolled')) {
                header.classList.remove('scrolled');
                console.log('Removed scrolled class at position:', scrollPosition);
            }
        }
        
        // Handle active nav links based on scroll position
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if(scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelector('.nav-link[href="#' + sectionId + '"]').classList.add('active');
            } else {
                document.querySelector('.nav-link[href="#' + sectionId + '"]').classList.remove('active');
            }
        });
    }
    
    // Listen for scroll events with throttling for better performance
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleStickyHeader();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Recalculate header dimensions on window resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            headerHeight = header.offsetHeight;
            handleStickyHeader();
        }, 250);
    });
    
    // Custom cursor code removed as requested
    
    // Enhanced scroll reveal animation
    const revealElements = document.querySelectorAll('.reveal-animation');
    
    function checkReveal() {
        const triggerBottom = window.innerHeight * 0.85;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add('active');
                
                // Add staggered animation to child elements
                const childElements = element.querySelectorAll('.stagger-animation');
                if (childElements.length > 0) {
                    childElements.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('active');
                        }, 150 * index);
                    });
                }
            }
        });
    }
    
    // Initial check and add scroll event listener
    checkReveal();
    window.addEventListener('scroll', checkReveal);
    
    // Form submission (prevent default)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple form validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Here you would typically send the form data to a server
            alert('Thank you for your message! This is a demo form, so no message was actually sent.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Parallax effect for elements with class 'parallax-element'
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    function handleParallax() {
        parallaxElements.forEach(element => {
            const scrollPosition = window.scrollY;
            const elementPosition = element.getBoundingClientRect().top + scrollPosition;
            const offset = scrollPosition - elementPosition;
            const speed = element.dataset.speed || 0.2;
            
            if (element.classList.contains('parallax-slow')) {
                element.style.transform = `translateY(${offset * 0.05}px)`;
            } else if (element.classList.contains('parallax-medium')) {
                element.style.transform = `translateY(${offset * 0.1}px)`;
            } else if (element.classList.contains('parallax-fast')) {
                element.style.transform = `translateY(${offset * 0.15}px)`;
            }
        });
    }
    
    window.addEventListener('scroll', handleParallax);
    window.addEventListener('resize', handleParallax);
    handleParallax();
    
    // Add 3D tilt effect to project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const cardRect = card.getBoundingClientRect();
            const cardCenterX = cardRect.left + cardRect.width / 2;
            const cardCenterY = cardRect.top + cardRect.height / 2;
            
            const angleX = (e.clientY - cardCenterY) * 0.01;
            const angleY = (cardCenterX - e.clientX) * 0.01;
            
            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-5px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
    
    // Initialize sticky header immediately on page load
    handleStickyHeader();
    
    // Initialize sticky header immediately on page load
    handleStickyHeader();
});
