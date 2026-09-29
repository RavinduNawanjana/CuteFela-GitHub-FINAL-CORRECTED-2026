(() => {
  'use strict';
  document.body.classList.add('home-page');

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const motionTargets = document.querySelectorAll(
    '.answer-strip, .media-river, .sdg-intro-grid, .species-feature-grid, .cta-panel'
  );
  motionTargets.forEach(element => element.setAttribute('data-motion-in', ''));

  if (reduce || !window.anime || !('IntersectionObserver' in window)) return;

  const groups = [
    document.querySelector('.work-showcase'),
    document.querySelector('.species-feature-grid')
  ].filter(Boolean);

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      const media = entry.target.querySelectorAll('img, video');
      window.anime({
        targets: media,
        scale: [1.075, 1.01],
        opacity: [.72, 1],
        delay: window.anime.stagger(75),
        duration: 900,
        easing: 'easeOutQuart'
      });
    });
  }, { threshold: .14 });

  groups.forEach(group => observer.observe(group));
})();
