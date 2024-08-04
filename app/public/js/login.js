function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Aqui você pode adicionar a lógica de autenticação, como chamadas de API
    alert(`Email: ${email}\nSenha: ${password}`);
    return true;
}

function handleLogin(event) {
    event.preventDefault();

    // Obtenha os valores dos campos de entrada
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Aqui você pode adicionar a lógica de autenticação, como fazer uma solicitação AJAX ao servidor.
    // Supondo que a autenticação seja bem-sucedida, redirecione o usuário para a página logada.
    if (email === "usuario@example.com" && password === "senha123") {
        window.location.href = "/logado"; // Substitua por sua URL de página logada
    } else {
        notify('Email ou senha incorretos. Tente novamente.');
    }
}
