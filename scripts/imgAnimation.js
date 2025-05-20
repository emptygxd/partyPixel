function initScrollAnimations() {
  const els = document.querySelectorAll("[data-animate]");
  if (!els.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        const name = el.dataset.animate;
        const cls = `animate-${name}`;

        if (entry.isIntersecting) {
          el.classList.add(cls);
        } else {
          el.classList.remove(cls);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  els.forEach((el) => {
    observer.observe(el);
  });
}

document.addEventListener("DOMContentLoaded", initScrollAnimations);
