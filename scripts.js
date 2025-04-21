// Navbar shrink function
const navbarShrink = function () {
    const navbar = document.getElementById('mainNav');
    if (!navbar) return;
    
    if (window.scrollY === 0) {
        navbar.classList.remove('navbar-shrink');
    } else {
        navbar.classList.add('navbar-shrink');
    }
};

// Shrink the navbar when page is scrolled
document.addEventListener('scroll', navbarShrink);

// Activate Bootstrap scrollspy on the main nav element
const mainNav = document.getElementById('mainNav');
if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
        target: '#mainNav',
        offset: 72,
    });
}

// Collapse responsive navbar when toggler is visible
const navbarToggler = document.querySelector('.navbar-toggler');
const responsiveNavItems = document.querySelectorAll('#navbarResponsive .nav-link');
responsiveNavItems.forEach(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
        if (window.getComputedStyle(navbarToggler).display !== 'none') {
            navbarToggler.click();
        }
    });
});

// Initialize and configure the portfolio modals
const portfolioModals = document.querySelectorAll('.portfolio-modal');
portfolioModals.forEach(function (modal) {
    modal.addEventListener('show.bs.modal', function (event) {
        // Animation when modal opens
        const modalBody = modal.querySelector('.modal-body');
        modalBody.style.opacity = '0';
        modalBody.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            modalBody.style.opacity = '1';
            modalBody.style
            modalBody.style.transform = 'translateY(0)';
        }, 100);
    });
});

// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form validation and submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Phone validation (if provided)
        if (phone && !/^[\d\s\-()+]+$/.test(phone)) {
            alert('Please enter a valid phone number.');
            return;
        }
        
        // Form submission (you would replace this with actual submission logic)
        console.log('Form submitted:', { name, email, phone, message });
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// Animation on scroll for elements
function animateOnScroll() {
    const elements = document.querySelectorAll('.portfolio-item, .timeline-item, .skill-badge');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state for animation
window.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.portfolio-item, .timeline-item, .skill-badge');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Trigger animation on load for elements in viewport
    setTimeout(animateOnScroll, 100);
    
    // Initialize navbar shrink state
    navbarShrink();
});

// Trigger animation on scroll
window.addEventListener('scroll', animateOnScroll);

// Skill badges animation
const skillBadges = document.querySelectorAll('.skill-badge');
skillBadges.forEach((badge, index) => {
    badge.style.transitionDelay = `${index * 0.1}s`;
});

// Dark mode toggle (optional)
const darkModeToggle = document.createElement('button');
darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
darkModeToggle.className = 'btn btn-sm position-fixed bottom-0 end-0 m-3';
darkModeToggle.style.zIndex = '1000';
darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.innerHTML = document.body.classList.contains('dark-mode') 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
});
document.body.appendChild(darkModeToggle);

// Add dark mode CSS class if needed
const style = document.createElement('style');
style.innerHTML = `
    .dark-mode {
        background-color: #121212;
        color: #f8f9fa;
    }
    .dark-mode .bg-light {
        background-color: #1e1e1e !important;
    }
    .dark-mode .text-secondary {
        color: #1abc9c !important;
    }
    .dark-mode .modal-content {
        background-color: #1e1e1e;
        color: #f8f9fa;
    }
`;
document.head.appendChild(style);