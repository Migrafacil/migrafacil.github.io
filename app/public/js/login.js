function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Aqui você pode adicionar a lógica de autenticação, como chamadas de API
    alert(`Email: ${email}\nSenha: ${password}`);
    return true;
}
