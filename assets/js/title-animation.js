/* ************************
 * ** Client requirement **
 * ************************
 * When the section appears in viewport on scrolling :
 *  -section title will slide up;
 *  -each words in the title will have a small delay.
 */
document.addEventListener("DOMContentLoaded", () => {
  const TITLE = "h2";

  const titles = document.querySelectorAll(TITLE);

  // see helper-functions.js
  titles.forEach((title) => {
    splitWordsIn(title);
    doOnElementWhenItsVisible(animateWordsIn, title);
  });
});
