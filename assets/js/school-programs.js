(() => {
  const grid = document.querySelector("[data-youth-lab]");
  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll(".youth-lab-card"));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  cards.forEach((card) => card.setAttribute("data-motion-in", ""));
  if (reduceMotion || !window.anime || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver((entries) => {
    if (!entries.some((entry) => entry.isIntersecting)) return;
    observer.disconnect();
    window.anime({
      targets: cards,
      opacity: [0, 1],
      translateY: [34, 0],
      scale: [.985, 1],
      delay: window.anime.stagger(85),
      duration: 820,
      easing: "easeOutExpo"
    });
  }, { threshold: .12 });

  observer.observe(grid);
})();
