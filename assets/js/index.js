// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out-quad',
    once: true
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Typed.js initialization
document.addEventListener('DOMContentLoaded', function () {
    const typed = new Typed('.typed-text-output', {
        strings: ['Data Scientist', 'AI/ML Engineer', 'Generative AI Developer'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        showCursor: false // This removes the blinking cursor line
    });
});

// Project filtering functionality
const filterButtons = document.querySelectorAll('.category-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// giphy loader
document.addEventListener('DOMContentLoaded', function () {
    const gifContainers = document.querySelectorAll('.gif-container');

    gifContainers.forEach(container => {
        const iframe = container.querySelector('iframe');
        iframe.onload = function () {
            container.classList.add('loaded');
        };
    });
});