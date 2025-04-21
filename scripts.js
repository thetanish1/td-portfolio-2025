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