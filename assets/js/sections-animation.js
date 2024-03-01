document.addEventListener("DOMContentLoaded", () => {
  let observerOptions = {
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("section--is-visible", "section--slide-up");
        entry.target
          .querySelectorAll(".section__text")
          // counter container animation to fix texts in place
          .forEach((text) => text.classList.add("section__text--slide-down"));
      }
    });
  }, observerOptions);

  const allSections = document.querySelectorAll(".section");
  allSections.forEach((section) => {
    observer.observe(section);
  });
});
