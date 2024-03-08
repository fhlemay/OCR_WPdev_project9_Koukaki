/* ************************
 * ** Client requirement **
 * ************************
 * When the section appears in viewport on scrolling :
 *  -section title will slide up;
 *  -each words in the title will have a small delay.
 */
document.addEventListener("DOMContentLoaded", () => {
  const TITLE = "h2";
  const TO_ANIMATE = "is-visible";
  const WORD_ANIMATION_DELAY = 150; // units : ms
  const WORD_CONTAINER = "span";

  const titles = document.querySelectorAll(TITLE);

  titles.forEach((title) => {
    splitWordsIn(title);
    doOnElementWhenItsVisible(animateWordsIn, title);
  });

  function splitWordsIn(element) {
    element.innerHTML = element.textContent
      .split(" ")
      .map((word) => `<${WORD_CONTAINER}>${word}</${WORD_CONTAINER}>`)
      .join(" ");
  }

  function doOnElementWhenItsVisible(doOn, element) {
    const observerOptions = {
      rootMargin: "0px",
      threshold: 1.0,
    };

    new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        doOn(element);
        observer.disconnect(); // stop observing once done
      }
    }, observerOptions).observe(element);
  }

  function animateWordsIn(element) {
    const words = element.querySelectorAll(WORD_CONTAINER);
    words.forEach((word, index) => {
      setTimeout(() => {
        word.classList.add(TO_ANIMATE);
      }, index * WORD_ANIMATION_DELAY); // animation delay between words
    });
  }
});
