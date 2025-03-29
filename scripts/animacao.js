document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.scroll-left-to-right');
  
    const checkVisibility = () => {
      const windowHeight = window.innerHeight;
      const triggerPoint = 0.1 * windowHeight; 
  
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
  
        if (elementTop < windowHeight - triggerPoint) {
          element.classList.add('animate');
        } else {
          element.classList.remove('animate');
        }
      });
    };
  
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); 
  });