const TO_ANIMATE_CLASS = "is-visible";
const WORD_ANIMATION_DELAY = 150; // units : ms
const WORD_CONTAINER = "span";

function splitWordsIn(element) {
  element.innerHTML = element.textContent
    .split(" ")
    .map((word) => `<${WORD_CONTAINER}>${word}</${WORD_CONTAINER}>`)
    .join(" ");
}

function animateWordsIn(element) {
  const words = element.querySelectorAll(WORD_CONTAINER);
  words.forEach((word, index) => {
    setTimeout(() => {
      word.classList.add(TO_ANIMATE_CLASS);
    }, index * WORD_ANIMATION_DELAY); // animation delay between words
  });
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
