document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var cpf = document.getElementById('cpf').value;
    var senha = document.getElementById('senha').value;
    var confirmarSenha = document.getElementById('confirmar-senha').value;
    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem.');
        return;
    }
    
    if (!/^\d{11}|\d{14}$/.test(cpf)) {
        alert('CPF/CNPJ inválido.');
        return;
    }
    
    alert('Formulário enviado com sucesso!');
 });