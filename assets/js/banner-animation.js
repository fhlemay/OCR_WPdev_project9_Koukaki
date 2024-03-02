document.addEventListener("DOMContentLoaded", () => {
  let logo = document.querySelector(".banner__logo");
  let banner = document.querySelector(".banner");

  // Start the floating animation after the sliding up
  setTimeout(function () {
    logo.classList.add("banner__logo--floating");
    if (window.scrollY === 0) {
      // don't get sticky if middle page reload
      logo.classList.add("banner__logo--sticky");
    }
  }, 2000);

  banner.classList.add("banner--slide-down");
  logo.classList.add("banner__logo--slide-up");

  // When logo leaves viewport, reset position
  const observer = new IntersectionObserver((changes) => {
    for (const change of changes) {
      if (!change.isIntersecting) {
        logo.style.bottom = "";
        logoLeftedVP = true;
      }
    }
  });
  observer.observe(logo);
});

// Remove logo's stickyness when it touched the bottom borde of the banner
window.addEventListener("scroll", () => {
  let logo = document.querySelector(".banner__logo");
  let banner = document.querySelector(".banner");

  const bannerRect = banner.getBoundingClientRect();
  const logoRect = logo.getBoundingClientRect();

  if (logoRect.bottom >= bannerRect.bottom) {
    logo.classList.remove("banner__logo--sticky");
    logo.style.bottom = "0";
  }

  // Reset the skickyness if at the top of the page
  if (window.scrollY === 0) {
    logo.classList.add("banner__logo--sticky");
  }
});
