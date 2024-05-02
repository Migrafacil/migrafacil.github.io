const searchInput = document.querySelector('.busque-city');
const searchButton = document.querySelector('.buscar');
const cityResults = document.querySelector('.city-results');

searchButton.addEventListener('click', async () => {
  const query = searchInput.value.trim();
  if (!query) return;

  try {
    const apiKey = 'YOUR_OPEN_CAGE_API_KEY';
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