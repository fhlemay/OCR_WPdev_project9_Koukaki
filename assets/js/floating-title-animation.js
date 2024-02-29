document.addEventListener("DOMContentLoaded", function () {
  let animatedImage = document.querySelector(".banner img");

  // Add a class to start the floating animation after a delay
  setTimeout(function () {
    animatedImage.classList.add("floatingAround");
  }, 3000); // Adjust the delay to match your loading animation duration
});
