document.addEventListener("DOMContentLoaded", () => {
  const MINI_DELAY = 50;
  const ANIM_DELAY = 500 + MINI_DELAY; // must be higher than in css

  // childThemeParams is given by WP when this script is loaded.
  // See child theme functions.php.
  const OPEN_MENU_IMAGE =
    childThemeParams.themeUrl + "/assets/images/menu_open.png";
  const CLOSE_MENU_IMAGE =
    childThemeParams.themeUrl + "/assets/images/menu_close.png";

  const toggleButton = document.getElementById("toggle-super-menu");
  const superMenu = document.querySelector(".super-menu");
  const superMenuLinks = superMenu.querySelectorAll("a");

  // Initial state : menu is closed
  superMenu.style.display = "none";
  superMenu.classList.remove("is-visible");
  toggleButton.src = OPEN_MENU_IMAGE;

  toggleButton.addEventListener("click", () => {
    if (superMenu.classList.contains("is-visible")) {
      toggleSuperMenu("CLOSE");
    } else {
      toggleSuperMenu("OPEN");
    }
  });

  superMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Dirty trick to compensate the sticky main nav bar height (80px).
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      setTimeout(() => {
        if (targetElement) {
          window.scrollBy(0, -80);
        }
      }, 10); // give time to browser to jump to #href before applying menu offset
      toggleSuperMenu("CLOSE");
    });
  });

  function toggleSuperMenu(action) {
    switch (action) {
      case "OPEN":
        superMenu.style.display = "flex";
        toggleButton.src = CLOSE_MENU_IMAGE;
        superMenuLinks.forEach((link) => {
          splitWordsIn(link); // see helper-functions.js
        });
        setTimeout(() => {
          superMenu.classList.add("is-visible");
        }, MINI_DELAY); // to avoid the simultaneity of operations
        setTimeout(() => {
          superMenuLinks.forEach((link) => {
            animateWordsIn(link); // see helper-functions.js
          });
        }, MINI_DELAY * 5); // delay manually adjusted
        break;
      case "CLOSE":
        superMenu.classList.remove("is-visible");
        toggleButton.src = OPEN_MENU_IMAGE;
        setTimeout(() => {
          superMenu.style.display = "none";
        }, ANIM_DELAY);
        break;
    }
  }
});
