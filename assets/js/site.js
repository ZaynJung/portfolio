(() => {
  const slideshow = document.querySelector(".slideshow");
  if (!slideshow) return;

  const slides = [...slideshow.querySelectorAll(".slide")];
  const dots = [...slideshow.querySelectorAll("[data-slide]")];
  const status = slideshow.querySelector("[data-slide-status]");
  let current = 0;

  function showSlide(index, announce = true) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, position) => {
      const active = position === current;
      slide.hidden = !active;
      slide.classList.toggle("is-active", active);
    });
    dots.forEach((dot, position) => {
      dot.setAttribute("aria-pressed", String(position === current));
    });
    if (announce) {
      const caption = [...slides[current].querySelectorAll("figcaption span")]
        .map((part) => part.textContent.trim())
        .join(", ");
      status.textContent = `Artwork ${current + 1} of ${slides.length}: ${caption}`;
    }
  }

  slideshow.querySelector("[data-previous]").addEventListener("click", () => showSlide(current - 1));
  slideshow.querySelector("[data-next]").addEventListener("click", () => showSlide(current + 1));
  dots.forEach((dot, index) => dot.addEventListener("click", () => showSlide(index)));
  showSlide(0, false);
  slideshow.classList.add("is-ready");
  slideshow.querySelector(".slideshow-controls").hidden = false;
})();
