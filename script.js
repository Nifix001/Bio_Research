const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

// Toggle navigation menu on click
hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.classList.toggle('open');
});

// Add animation for the hamburger icon
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
});
