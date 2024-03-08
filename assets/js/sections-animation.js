/* ************************
 * ** Client requirement **
 * ************************
 * When the page is loading, all sections except banner :
 *  -will have a fade-in effect;
 *  -will slide up at the same time, except text (<p>).
 */
document.addEventListener("DOMContentLoaded", () => {
  const SECTION = "section";
  const IS_VISIBLE = "section--is-visible";
  const SLIDE_UP = "section--slide-up";
  const TEXT = "section__text";
  const TEXT_FIX = "section__text--slide-down";

  const allSections = document.querySelectorAll(`.${SECTION}`);

  allSections.forEach((section) => {
    section.classList.add(SLIDE_UP);
    section.classList.add(IS_VISIBLE);
    section
      .querySelectorAll(`.${TEXT}`)
      .forEach((text) => text.classList.add(TEXT_FIX));
  });
});
