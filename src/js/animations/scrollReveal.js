const revealElements = document.querySelectorAll(".home-text *");

window.addEventListener("load", () => {
  revealElements.forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    setTimeout(() => {
      el.style.transition = "all .6s ease";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, i * 150);
  });
});