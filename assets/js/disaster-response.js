(() => {
  const root = document.querySelector(".disaster-page");
  if (!root || !window.anime) return;

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (reducedMotion) return;

  const groups = [
    ["[data-disaster-reveal]", 30],
    ["[data-disaster-card]", 22],
  ];

  groups.forEach(([selector, distance]) => {
    const elements = [...root.querySelectorAll(selector)];
    elements.forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = `translateY(${distance}px)`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target);

        if (!visible.length) return;

        window.anime({
          targets: visible,
          opacity: [0, 1],
          translateY: [distance, 0],
          duration: 780,
          delay: window.anime.stagger(85),
          easing: "easeOutCubic",
          complete: () => {
            visible.forEach((element) => {
              element.style.removeProperty("will-change");
              observer.unobserve(element);
            });
          },
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -6%" },
    );

    elements.forEach((element) => observer.observe(element));
  });
})();
