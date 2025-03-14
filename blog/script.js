// Scroll-triggered animations
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }
  
  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.blog-section');
    sections.forEach(section => observer.observe(section));
  });
  