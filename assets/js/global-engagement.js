(() => {
  'use strict';

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cards = [...document.querySelectorAll('.conference-card')];
  const credentials = [...document.querySelectorAll('.accred-card')];

  if (!reduce && window.anime) {
    const reveal = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const group = entry.target.matches('.conference-card') ? cards : credentials;
        const pending = group.filter(item => !item.dataset.revealed);
        pending.forEach(item => { item.dataset.revealed = 'true'; });
        window.anime({
          targets: pending,
          opacity: [0, 1],
          translateY: [36, 0],
          scale: [.985, 1],
          delay: window.anime.stagger(85),
          duration: 780,
          easing: 'easeOutQuart'
        });
        pending.forEach(item => observer.unobserve(item));
      });
    }, { threshold: .12, rootMargin: '0px 0px -5% 0px' });

    [...cards, ...credentials].forEach(item => reveal.observe(item));
  }

  if (!reduce && matchMedia('(hover: hover) and (pointer: fine)').matches) {
    cards.forEach(card => {
      card.addEventListener('pointermove', event => {
        const box = card.getBoundingClientRect();
        const x = (event.clientX - box.left) / box.width - .5;
        const y = (event.clientY - box.top) / box.height - .5;
        card.style.transform = `perspective(900px) rotateX(${(-y * 2.2).toFixed(2)}deg) rotateY(${(x * 2.2).toFixed(2)}deg)`;
      });
      card.addEventListener('pointerleave', () => {
        card.style.transform = '';
      });
    });
  }
})();
