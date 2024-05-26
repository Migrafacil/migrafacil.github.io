const searchInput = document.querySelector('.busque-city');
const searchButton = document.querySelector('.buscar');
const cityResults = document.querySelector('.city-results');

searchButton.addEventListener('click', async () => {
  const query = searchInput.value.trim();
  if (!query) return;

  try {
    const apiKey = '';
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(query)}&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    cityResults.innerHTML = '';

    results.forEach((result) => {
      const city = result.components.city;
      const region = result.components.region;
      const country = result.components.country;
      const latitude = result.geometry.lat;
      const longitude = result.geometry.lng;

      const cityResultHTML = `
        <div class="city-result">
          <h4>${city}, ${region}, ${country}</h4>
          <p>Latitude: ${latitude}, Longitude: ${longitude}</p>
        </div>
      `;

      cityResults.innerHTML += cityResultHTML;
    });
  } catch (error) {
    console.error(error);
  }
});
// Seleciona o elemento de menu toggle
const menuToggle = document.getElementById('menuToggle');

// Adiciona um evento de click ao menu toggle
menuToggle.addEventListener('click', () => {
  // Alterna a visibilidade do menu
  document.getElementById('menu').classList.toggle('show');
});

// Seleciona os elementos de busca
const buscaMoradia = document.querySelector('.retangulo1');
const buscaBairro = document.querySelector('.retangulo2');
const buscaAluguel = document.querySelector('.retangulo3');

// Adiciona um evento de click aos elementos de busca
buscaMoradia.addEventListener('click', () => {
  // Redireciona para a página de busca de moradias
  window.location.href = 'anunciante.html';
});

buscaBairro.addEventListener('click', () => {
  // Redireciona para a página de busca de bairros
  window.location.href = 'anunciante.html';
});

buscaAluguel.addEventListener('click', () => {
  // Redireciona para a página de busca de aluguel
  window.location.href = 'anunciante.html';
});

// Seleciona o botão de entrar
const entrarButton = document.querySelector('.entrar');

// Adiciona um evento de click ao botão de entrar
entrarButton.addEventListener('click', () => {
  // Redireciona para a página de login
  window.location.href = 'login.html';
});

// Seleciona o botão de anunciar
const anunciarButton = document.querySelector('.anun');

// Adiciona um evento de click ao botão de anunciar
anunciarButton.addEventListener('click', () => {
  // Redireciona para a página de anunciar
  window.location.href = 'anunciar.html';
});