document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("place");
  const movingThings = document.querySelector(".story__moving-clouds");
  const THRESHOLD = 0.25;

  // Use linear interpolation to calculate the lateral position
  const interpolateXPosition = (xMax, xMin, yMax, yMin, yPosition) => {
    const clampedY = Math.min(yMax, Math.max(yMin, yPosition)); // *ensure value is within specified range
    const percentage = (clampedY - yMax) / (yMin - yMax); // interpolation parameter
    const lateralPosition = xMax + percentage * (xMin - xMax); // the linear interpolation

    return lateralPosition;
  };

  const translateXWhenScrolling = () => {
    const yMax = // viewport height minus observer threshold
      window.innerHeight - container.getBoundingClientRect().height * THRESHOLD;
    const yPosition = movingThings.getBoundingClientRect().bottom; // the things vertical position
    const xPosition = interpolateXPosition(0, -300, yMax, -100, yPosition);
    movingThings.style.transform = `translateX(${xPosition}px)`;
  };

  const inViewport = new IntersectionObserver( // translateX only if the container is in viewport
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          window.addEventListener("scroll", translateXWhenScrolling);
        } else {
          window.removeEventListener("scroll", translateXWhenScrolling);
        }
      });
    },
    { threshold: THRESHOLD },
  );
  inViewport.observe(container);
});
