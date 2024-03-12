document.addEventListener("DOMContentLoaded", () => {
  const superMenu = document.querySelector(".super-menu");
  const toggleButton = document.getElementById("toggle-super-menu");
  const MINI_DELAY = 50; // to avoid the simultaneity of operations
  const ANIM_DELAY = 1000 + MINI_DELAY; // must be higher than in css
  const openMenuImage =
    childThemeParams.themeUrl + "/assets/images/menu_open.png";
  const closeMenuImage =
    childThemeParams.themeUrl + "/assets/images/menu_close.png";

  // Initial state : super menu is closed
  superMenu.style.display = "none";
  superMenu.classList.remove("is-visible");
  toggleButton.src = openMenuImage;

  /*
   * On click change the toggle button image
   * and show/hide super menu.
   */
  toggleButton.addEventListener("click", () => {
    if (superMenu.classList.contains("is-visible")) {
      // close super menu
      superMenu.classList.remove("is-visible");
      toggleButton.src = openMenuImage;
      setTimeout(() => {
        superMenu.style.display = "none";
      }, ANIM_DELAY);
    } else {
      // open super menu
      toggleButton.src = closeMenuImage;
      superMenu.style.display = "flex";
      setTimeout(() => {
        superMenu.classList.add("is-visible");
      }, MINI_DELAY);
    }
  });
});
