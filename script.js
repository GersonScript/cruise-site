const carousel = document.querySelector(".carousel");
const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");

let currentIndex = 0;

const updateCarousel = () => {
  const cardWidth = carousel.querySelector(".feedback-card").offsetWidth;
  carousel.style.transform = `translateX(-${
    currentIndex * (cardWidth + 40)
  }px)`;
};

leftButton.addEventListener("click", () => {
  currentIndex = Math.max(currentIndex - 1, 0); // Garante que não passe do limite esquerdo
  updateCarousel();
});

rightButton.addEventListener("click", () => {
  const maxIndex = carousel.children.length - 1;
  currentIndex = Math.min(currentIndex + 1, maxIndex); // Garante que não passe do limite direito
  updateCarousel();
});

// Ajusta o carrossel ao redimensionar a janela
window.addEventListener("resize", updateCarousel);
window.addEventListener("load", () => {
  const cardWidth = document.querySelector(".feedback-card").offsetWidth;
  document.querySelector(".carousel").style.transform = `translateX(-${
    currentIndex * (cardWidth + 32)
  }px)`;
});
