function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    alert(`Email: ${email}\nSenha: ${password}`);
    return true;
}

function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "usuario@example.com" && password === "senha123") {
        window.location.href = "/logado"; 
    } else {
        notify('Email ou senha incorretos. Tente novamente.');
    }
}
