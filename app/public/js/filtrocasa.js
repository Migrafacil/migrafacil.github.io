function applyFilters() {
    const filters = {
        minPrice: document.getElementById('min-price').value,
        maxPrice: document.getElementById('max-price').value,
        types: {
            apartment: document.getElementById('apartment').checked,
            house: document.getElementById('house').checked,
            condo: document.getElementById('condo').checked,
            studio: document.getElementById('studio').checked,
        },
        bedrooms: document.querySelector('input[name="bedrooms"]:checked').value,
        bathrooms: document.querySelector('input[name="bathrooms"]:checked').value,
        furnished: document.querySelector('input[name="furnished"]:checked').value,
        garage: document.querySelector('input[name="garage"]:checked').value,
        pets: document.querySelector('input[name="pets"]:checked').value,
        minArea: document.getElementById('min-area').value,
        maxArea: document.getElementById('max-area').value,
    };

    console.log('Filtros aplicados:', filters);
   
}
