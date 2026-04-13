/**
 * =========================================
 * Mirai Crown Indonesia
 * Main JS
 * =========================================
 */

document.addEventListener("DOMContentLoaded", () => {
  console.log("🇯🇵 Mirai Crown Ready");

  initHeroAnimation();
  initNavbarScroll();
  initSmoothScroll();
  initScrollReveal();
});

/* HERO */
function initHeroAnimation() {
  const hero = document.querySelector(".home-text");
  if (!hero) return;

  hero.style.opacity = 0;
  hero.style.transform = "translateY(24px)";

  setTimeout(() => {
    hero.style.transition = "all 0.9s ease";
    hero.style.opacity = 1;
    hero.style.transform = "translateY(0)";
  }, 200);
}

/* NAVBAR SCROLL */
function initNavbarScroll() {
  const header = document.querySelector(".header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });
}

/* SMOOTH SCROLL */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;

      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth"
      });
    });
  });
}

/* SCROLL REVEAL */
function initScrollReveal() {
  const elements = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
      }
    });
  }, {
    threshold: 0.15
  });

  elements.forEach(el => {
    el.classList.add("reveal");
    observer.observe(el);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.2
    }
  );

  reveals.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {

  /* Scroll Reveal */
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.25 });

  reveals.forEach(el => observer.observe(el));

  /* 3D Scroll Depth */
  const track = document.querySelector(".results-viewport");

  track.addEventListener("scroll", () => {
    const cards = document.querySelectorAll(".result-card");
    const center = track.scrollLeft + track.offsetWidth / 2;

    cards.forEach(card => {
      const box = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(center - box);
      const scale = Math.max(0.9, 1 - distance / 1000);
      const z = Math.max(-120, -distance / 5);

      card.style.transform = `translateZ(${z}px) scale(${scale})`;
    });
  });

});