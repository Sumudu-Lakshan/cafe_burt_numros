// 📆 Auto-update year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// 🌄 Animate Hero Text
window.addEventListener("load", () => {
  const heroText = document.querySelector(".hero-text-animate");
  if (heroText) {
    heroText.classList.add("visible");
  }
});

// 🎬 Scroll-triggered animations (manual)
const animateEls = document.querySelectorAll("[data-animate]");
const onScroll = () => {
  animateEls.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
};
window.addEventListener("scroll", onScroll);
window.addEventListener("load", onScroll);

// ✨ Initialize AOS
AOS.init();
