const slides = Array.from(document.querySelectorAll(".slide"));
const previousButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");
let activeSlide = 0;

function showSlide(index) {
  activeSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === activeSlide);
  });
}

previousButton?.addEventListener("click", () => showSlide(activeSlide - 1));
nextButton?.addEventListener("click", () => showSlide(activeSlide + 1));

setInterval(() => showSlide(activeSlide + 1), 6500);
