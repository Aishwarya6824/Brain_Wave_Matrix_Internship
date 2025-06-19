(() => {
  const header = document.getElementById('main-header');
  const scrollThreshold = 10;

  let scrollTimeout = null;

  function onScroll() {
    if (scrollTimeout) return;
    scrollTimeout = requestAnimationFrame(() => {
      if (window.scrollY > scrollThreshold) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      scrollTimeout = null;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  if (window.scrollY > scrollThreshold) {
    header.classList.add('scrolled');
  }
})();
