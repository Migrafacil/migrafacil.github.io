function notify(titulo, texto, tipo, posicao,duracao=3000) {
    new Notify({
        status: tipo,
        title: titulo,
        text:texto.replace(/&lt;/g,"<").replace(/&gt;/g,">") ,
        effect: 'fade',
        speed: 500,
        showIcon: true,
        showCloseButton: true,
        autoclose: true,
        autotimeout: duracao,
        gap: 20,
        distance: 20,
        type: 1,
        position:posicao 
    })
}

// document.getElementById('profileForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     alert('Alterações no perfil salvas!');
// });

// document.getElementById('listingForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const listingType = document.getElementById('listingType').value;
//     const listingTitle = document.getElementById('listingTitle').value;
//     const listingDescription = document.getElementById('listingDescription').value;
//     const listingPrice = document.getElementById('listingPrice').value;
//     const listingImage = document.getElementById('listingImage').files[0];

//     let message = `Anúncio publicado com sucesso!\n\nTipo: ${listingType}\nTítulo: ${listingTitle}\nDescrição: ${listingDescription}`;
//     if (listingPrice) {
//         message += `\nPreço: ${listingPrice}`;
//     }
//     if (listingImage) {
//         message += `\nImagem: ${listingImage.name}`;
//     }

//     alert(message);
    
// });
