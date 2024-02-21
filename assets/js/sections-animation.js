document.addEventListener('DOMContentLoaded', () => {

  let observerOptions = {
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, observerOptions ); 

  const allSections = document.querySelectorAll('section');
  allSections.forEach((section) => {
    observer.observe(section); // observe each element 
  })

});
