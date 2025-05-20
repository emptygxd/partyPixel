function createSlider(selector, autoInterval = 5000) {
  const root = document.querySelector(selector);

  const track = root.querySelector(".hero-slider__track");
  const slides = Array.from(track.children);

  const prevBtn = root.querySelector(".hero-slider__arrow-prev");
  const nextBtn = root.querySelector(".hero-slider__arrow-next");
  const dots = Array.from(root.querySelectorAll(".hero-slider__dot"));

  let current = 0;
  let autoTimer = null;

  function calcOffset(index) {
    const slideW = slides[0].offsetWidth;
    const gapPx = parseFloat(getComputedStyle(track).gap) || 0;
    return index * (slideW + gapPx);
  }

  function goTo(index) {
    const offset = calcOffset(index);
    track.style.transform = `translateX(${-offset}px)`;

    dots[current].classList.remove("is-active");
    dots[index].classList.add("is-active");

    current = index;
  }

  function slide(direction) {
    let next = current + direction;
    if (next < 0) next = slides.length - 1;
    if (next >= slides.length) next = 0;
    goTo(next);
  }

  function startAutoplay() {
    autoTimer = setInterval(() => {
      slide(1);
    }, autoInterval);
  }

  function resetAutoplay() {
    clearInterval(autoTimer);
    startAutoplay();
  }

  prevBtn.addEventListener("click", () => {
    slide(-1);
    resetAutoplay();
  });

  nextBtn.addEventListener("click", () => {
    slide(1);
    resetAutoplay();
  });

  dots.forEach((dot, i) =>
    dot.addEventListener("click", () => {
      goTo(i);
      resetAutoplay();
    })
  );

  window.addEventListener("resize", () => goTo(current));
  goTo(0);
}

document.addEventListener("DOMContentLoaded", () => {
  createSlider(".hero-slider", 10000);
});
