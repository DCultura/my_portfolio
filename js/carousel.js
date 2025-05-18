document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const slideContainer = document.querySelector(".slides");
  const totalSlides = slides.length;
  let currentIndex = 0;

  const updateSlidePosition = () => {
    slideContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  const moveToNextSlide = () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
  };

  const moveToPrevSlide = () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
  };

  document.querySelector(".next").addEventListener("click", moveToNextSlide);
  document.querySelector(".prev").addEventListener("click", moveToPrevSlide);

  //setInterval(moveToNextSlide, 5000); // Auto slide every 5 seconds
});