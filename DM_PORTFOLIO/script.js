// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Hero button interaction
const heroBtn = document.querySelector('.btn');
if (heroBtn) {
  heroBtn.addEventListener('click', () => {
    alert("Scroll down to explore DHRUVANSH MISTRY's projects!");
  });
}

// Reveal sections on scroll
const sections = document.querySelectorAll('.section');
const revealOnScroll = () => {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // run once on load
