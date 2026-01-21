// =========================
// MENU HAMBURGER — FUNCIONA EM TODAS AS PÁGINAS
// =========================
const menuToggle = document.querySelector(".menu-toggle-c");
const menuNav = document.querySelector(".menu-c");

if (menuToggle && menuNav) {
  menuToggle.addEventListener("click", () => {
    menuNav.classList.toggle("active");
  });

  menuNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuNav.classList.remove("active");
    });
  });

  document.addEventListener("click", (e) => {
    if (
      !menuNav.contains(e.target) &&
      !menuToggle.contains(e.target) &&
      menuNav.classList.contains("active")
    ) {
      menuNav.classList.remove("active");
    }
  });
}

// =========================
// CARROSSEL — SÓ SE EXISTIR
// =========================
const slidesC = document.querySelectorAll(".carousel-c img");
const dotsContainer = document.querySelector(".dots-c");
const prevBtn = document.querySelector(".prev-c");
const nextBtn = document.querySelector(".next-c");

if (slidesC.length && dotsContainer && prevBtn && nextBtn) {
  let i = 0;

  // cria os dots
  slidesC.forEach((_, index) => {
    let dot = document.createElement("span");
    if (index === 0) dot.classList.add("active-dot");
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dots-c span");

  function updateSlide(newIndex) {
    slidesC[i].classList.remove("active");
    dots[i].classList.remove("active-dot");
    i = newIndex;
    slidesC[i].classList.add("active");
    dots[i].classList.add("active-dot");
  }

  function nextSlide() {
    updateSlide((i + 1) % slidesC.length);
  }

  function prevSlide() {
    updateSlide((i - 1 + slidesC.length) % slidesC.length);
  }

  // EVENTOS
  nextBtn.onclick = nextSlide;
  prevBtn.onclick = prevSlide;

  dots.forEach((dot, index) => {
    dot.onclick = () => updateSlide(index);
  });

  // autoplay
  setInterval(nextSlide, 5000);

  // garante primeira imagem visível
  slidesC[0].classList.add("active");
}
