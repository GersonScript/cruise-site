// Carrossel de feedback
const carousel = document.querySelector(".carousel");
const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");

let currentIndex = 0;

// Função para atualizar a posição do carrossel
const updateCarousel = () => {
  const cardWidth = carousel.querySelector(".feedback-card").offsetWidth;
  const gap = parseInt(getComputedStyle(carousel).gap) || 40; // Calcula o espaço entre os cartões
  carousel.style.transform = `translateX(-${
    currentIndex * (cardWidth + gap)
  }px)`;
};

// Evento para o botão esquerdo
leftButton.addEventListener("click", () => {
  currentIndex = Math.max(currentIndex - 1, 0); // Evita índice menor que 0
  updateCarousel();
});

// Evento para o botão direito
rightButton.addEventListener("click", () => {
  const visibleCards = Math.floor(
    carousel.offsetWidth / carousel.querySelector(".feedback-card").offsetWidth
  );
  const maxIndex = carousel.children.length - visibleCards;
  currentIndex = Math.min(currentIndex + 1, maxIndex); // Evita índice maior que o limite
  updateCarousel();
});

// Ajusta o carrossel ao redimensionar a janela
window.addEventListener("resize", updateCarousel);
updateCarousel(); // Inicializa o carrossel

// ==========================
// Destacar cartão central
// ==========================
const destinoContainer = document.querySelector(".destino-container");
const cards = document.querySelectorAll(".card");

// Função para detectar o cartão no centro
function highlightCenterCard() {
  const containerRect = destinoContainer.getBoundingClientRect();
  let closestCard = null;
  let closestDistance = Infinity;

  cards.forEach((card) => {
    const cardRect = card.getBoundingClientRect();
    const cardCenter = cardRect.left + cardRect.width / 2;
    const containerCenter = containerRect.left + containerRect.width / 2;

    // Calcula a distância do centro do cartão ao centro do container
    const distance = Math.abs(containerCenter - cardCenter);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestCard = card;
    }

    // Remove o destaque de todos os cartões
    card.classList.remove("highlight");
  });

  // Adiciona o destaque ao cartão mais próximo do centro
  if (closestCard) {
    closestCard.classList.add("highlight");
  }
}

// Evento de rolagem no container de destinos
destinoContainer.addEventListener("scroll", highlightCenterCard);

// Inicializa o destaque para o cartão central
highlightCenterCard();
