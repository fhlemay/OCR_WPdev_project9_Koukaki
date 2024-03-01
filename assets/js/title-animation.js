document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("h2").forEach((element) => {
    // Splits the text into words and wraps them in a span container.
    element.innerHTML = element.textContent
      .split(" ")
      .map((word) => `<span>${word}</span>`)
      .join(" ");

    const words = element.querySelectorAll("span");

    let observerOptions = {
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            words.forEach((word, index) => {
              setTimeout(() => {
                word.classList.add("is-visible");
              }, index * 150); // animation delay between words
            });
          }, 2000); // give time to the section's animation
          observer.disconnect(); // stop observing once animation is triggered
        }
      });
    }, observerOptions);

    observer.observe(element); // observe each element (h2)
  });
});
