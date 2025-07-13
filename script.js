// Smooth scrolling function for navigation
function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
}

// Mobile hamburger menu toggle
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.querySelector('.hamburger');
    
    if (navMenu && hamburger) {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    }
}

// Close mobile menu when clicking on a link
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.querySelector('.hamburger');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu && hamburger) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu && hamburger && !e.target.closest('.nav-container')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});
