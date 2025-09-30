// Detect scroll + activate the current slide
const slides = document.querySelectorAll(".slide");

function activateSlides() {
  slides.forEach(slide => {
    let rect = slide.getBoundingClientRect();
    if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", activateSlides);
activateSlides();
