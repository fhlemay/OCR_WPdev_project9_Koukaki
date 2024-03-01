document.addEventListener("DOMContentLoaded", () => {
  let logo = document.querySelector(".banner__logo");
  let banner = document.querySelector(".banner");

  // Start the floating animation after the sliding up
  setTimeout(function () {
    logo.classList.add("banner__logo--floating");
  }, 2000);

  banner.classList.add("banner--slide-down");
  logo.classList.add("banner__logo--slide-up");
});
