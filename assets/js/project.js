// Initialize animations
AOS.init({
    duration: 800,
    easing: 'ease-in-out-quad',
    once: true,
    offset: 100
});

// Smooth scroll for back button
document.querySelector('.back-btn').addEventListener('click', function (e) {
    e.preventDefault();
    window.history.back();
});

// Add hover effect to tech stack tags
const techTags = document.querySelectorAll('.tech-stack span');
techTags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'translateY(-3px)';
        tag.style.boxShadow = '0 5px 10px rgba(0,0,0,0.2)';
    });
    tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'translateY(0)';
        tag.style.boxShadow = 'none';
    });
});

// Enhanced rotating images functionality
const images = document.querySelectorAll('.rotating-image');
let currentImage = 0;
const rotationInterval = 5000; // 5 seconds

function rotateImages() {
    // Hide all images
    images.forEach(img => img.classList.remove('active'));

    // Show current image
    images[currentImage].classList.add('active');

    // Move to next image
    currentImage = (currentImage + 1) % images.length;
}

// Start rotation
let rotationTimer = setInterval(rotateImages, rotationInterval);

// Pause rotation on hover for better viewing
const imageContainer = document.querySelector('.header-image-container');
imageContainer.addEventListener('mouseenter', () => {
    clearInterval(rotationTimer);
});

imageContainer.addEventListener('mouseleave', () => {
    rotationTimer = setInterval(rotateImages, rotationInterval);
});

// Initial rotation
rotateImages();
