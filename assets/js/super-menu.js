document.addEventListener("DOMContentLoaded", () => {
  const MINI_DELAY = 50; // to avoid the simultaneity of operations
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

  // Initial state : super menu is closed
  superMenu.style.display = "none";
  superMenu.classList.remove("is-visible");
  toggleButton.src = OPEN_MENU_IMAGE;

  toggleButton.addEventListener("click", () => {
    if (superMenu.classList.contains("is-visible")) {
      toggleSuperMenu("CLOSE");
    } else {
      toggleSuperMenu("OPEN");
      // doIfThingIsClicked(toggleSuperMenu("CLOSE"), superMenuLinks);
    }
  });

  superMenuLinks.forEach((link) => {
    // link.addEventListener("click", toggleSuperMenu("CLOSE"));
    link.addEventListener("click", () => {
      toggleSuperMenu("CLOSE");
    });
  });

  // const doIfThingIsClicked = (doThat, things) => {
  //   things.forEach((thing) => {
  //     thing.addEventListener("click", doThat);
  //   });
  // };

  function toggleSuperMenu(action) {
    switch (action) {
      case "OPEN":
        console.log("opening super menu");
        superMenu.style.display = "flex";
        toggleButton.src = CLOSE_MENU_IMAGE;
        setTimeout(() => {
          superMenu.classList.add("is-visible");
        }, MINI_DELAY);
        break;
      case "CLOSE":
        console.log("closing super menu");
        superMenu.classList.remove("is-visible");
        toggleButton.src = OPEN_MENU_IMAGE;
        setTimeout(() => {
          superMenu.style.display = "none";
        }, ANIM_DELAY);
        break;
    }
  }
});
