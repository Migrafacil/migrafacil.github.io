function toggleFavorite(element) {
    element.classList.toggle('active');
}
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

function updateCarousel() {
    const imageWidth = images[0].clientWidth; // Largura da primeira imagem
    carousel.style.transform = `translateX(${-currentIndex * imageWidth}px)`; // Move o carrossel
}

// Inicializa a posição do carrossel
updateCarousel();

nextBtn.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Volta para a primeira imagem
    }
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1; // Volta para a última imagem
    }
    updateCarousel();
});
console.log(images)
// Atualiza o carrossel ao redimensionar a janela
window.addEventListener('resize', updateCarousel);

document.getElementById("view-phone").addEventListener("click", function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    document.getElementById("hidden-part").textContent = "1234"; // Substitua com o restante do número
    this.style.display = "none"; // Esconde o link "Ver telefone" após o clique
});

