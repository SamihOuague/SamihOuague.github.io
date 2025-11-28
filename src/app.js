// Menu burger

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Animation AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});
