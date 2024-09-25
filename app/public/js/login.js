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

// function handleLogin(event) {
//     event.preventDefault();
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     alert(`Email: ${email}\nSenha: ${password}`);
//     return true;
// }

// function handleLogin(event) {
//     event.preventDefault();

//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     if (email === "usuario@example.com" && password === "senha123") {
//         window.location.href = "/logado"; 
//     } else {
//         notify('Email ou senha incorretos. Tente novamente.');
//     }
// }
