document.addEventListener("DOMContentLoaded", () => {
  const super_menu = document.querySelector(".super-menu");
  const toggle_button = document.getElementById("toggle-super-menu");
  const ANIM_DELAY = 1000; // must be the same as in css

  // super_menu.style.display = "none";
  super_menu.style.display = "flex";
  super_menu.classList.add("is-visible");

  toggle_button.addEventListener("click", () => {
    if (super_menu.classList.contains("is-visible")) {
      super_menu.classList.remove("is-visible");
      setTimeout(() => {
        super_menu.style.display = "none";
      }, ANIM_DELAY);
    } else {
      super_menu.style.display = "flex";
      setTimeout(() => {
        super_menu.classList.add("is-visible");
      }, 50); // to avoid the simultaneity of operations
    }
  });
});
