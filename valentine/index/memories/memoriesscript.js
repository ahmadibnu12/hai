let slideIndex = 0;
const slides = document.querySelectorAll(".slides img");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex)
}

 function goBack() {
     window.location.href = "1.html";
 }

 showSlide(slideIndex);