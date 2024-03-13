document.addEventListener("DOMContentLoaded", () => {
  const TOP = 0;
  const RESET_POS = ""; // initial position
  const BOTTOM_POS = "0"; // bottom of the container
  const STICKY = "banner__logo--sticky";
  const FLOATING = "banner__logo--floating";
  const SLIDE_DOWN = "banner--slide-down";
  const SLIDE_UP = "banner__logo--slide-up";
  const ANIMATION_DELAY = 2000;
  const windowPosition = window.scrollY;
  const logo = document.querySelector(".banner__logo");
  const banner = document.querySelector(".banner");

  // Initial apparition
  banner.classList.add(SLIDE_DOWN);
  logo.classList.add(SLIDE_UP);

  // Start the floating animation *after* the sliding to avoid any conflict
  // ... and get sticky.
  setTimeout(() => {
    if (windowPosition === TOP) {
      // get sticky only if at the top of the page (reload in middle of the page)
      logo.classList.add(STICKY);
    }
    logo.classList.add(FLOATING);
  }, ANIMATION_DELAY);

  /* Dirty trick to make sure that the size and position is not relative to his parent.
   * When the position of an element is set to 'fixed' (sticky), is parent become the
   * viewport. If width is set to 50%, then the size of the element is adjusted relative
   * to the viewport width. Idem with margin-top.
   */
  logo.style.width = `${banner.offsetWidth / 2}px`; // 50% of is parent container.
  logo.style.marginTop = "-100px"; // Rought estim. Couldn't figure that one out.

  window.addEventListener("scroll", () => {
    // Gives position and size relative to viewport.
    // Has to be here : values updated at every scroll.
    const bannerRect = banner.getBoundingClientRect();
    const logoRect = logo.getBoundingClientRect();

    // Reset the skickyness if at the top of the page (after scrolling)
    if (window.scrollY === TOP) {
      logo.style.bottom = RESET_POS;
      logo.classList.add(STICKY);
      return;
    }

    // When logo leaves viewport, reset position.
    if (logoRect.bottom < TOP) {
      logo.style.bottom = RESET_POS;
      return;
    }

    // Remove logo's stickyness when it touched the bottom of his container (banner).
    if (logoRect.bottom >= bannerRect.bottom) {
      logo.classList.remove(STICKY);
      logo.style.bottom = BOTTOM_POS; // stay at the bottom of your container!
    }
  });
});
