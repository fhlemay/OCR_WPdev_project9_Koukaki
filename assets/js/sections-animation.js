document.addEventListener("DOMContentLoaded", () => {
  let observerOptions = {
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible", "slideUp");
        const allParagraphs = entry.target.querySelectorAll("p");
        for (const paragraph of allParagraphs)
          paragraph.classList.add("slideDown");
      }
    });
  }, observerOptions);

  // const allSections = document.querySelectorAll("section:not(.banner)");
  const allSections = document.querySelectorAll("section");
  allSections.forEach((section) => {
    observer.observe(section); // observe each element
  });
});
