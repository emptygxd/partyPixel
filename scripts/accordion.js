function initAccordion(selector) {
  const root = document.querySelector(selector);
  if (!root) return;

  const items = Array.from(root.querySelectorAll(".accordion__item"));

  items.forEach((item) => {
    const header = item.querySelector(".accordion__header");

    header.addEventListener("click", () => {
      item.classList.toggle("open");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initAccordion("#faqAccordion");
});
