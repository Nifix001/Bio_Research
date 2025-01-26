const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const closeIcon = document.querySelector('.close-icon');

// Toggle the active class on click
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
  closeIcon.classList.toggle('active');
});

// Close the menu when clicking outside or on the close icon
document.addEventListener('click', (event) => {
  if (
    !event.target.closest('.nav-links') &&
    !event.target.closest('.hamburger') &&
    !event.target.closest('.close-icon') &&
    navLinks.classList.contains('active')
  ) {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
    closeIcon.classList.remove('active');
  }

  if (event.target.closest('.close-icon')) {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
    closeIcon.classList.remove('active');
  }
});