document.getElementById('registration-form').addEventListener('submit', function(event) {
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var cpf = document.getElementById('cpf').value;
  var senha = document.getElementById('senha').value;
  var confirmarSenha = document.getElementById('confirmar-senha').value;
  
  if (senha !== confirmarSenha) {
    alert('As senhas não coincidem.');
    event.preventDefault(); // impede que o formulário seja enviado
    return;
  }
  
  const cpfValue = cpf.trim();
  const emailValue = email.trim();
  
  if (!senha.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)) {
    alert('A senha deve ter no mínimo 6 caracteres, 1 símbolo, 1 número e 1 letra maiúscula.');
    event.preventDefault(); // impede que o formulário seja enviado
    return;
  }

  if (validarCNPJ(cpfValue) && validarCPF(cpfValue) && validarEmail(emailValue)) {
    // formulário válido, permitir que seja enviado para o servidor
    // não é necessário chamar event.preventDefault() aqui
    alert('Cadastro enviado com sucesso!');
  } else {
    alert('Erro: um ou mais campos são inválidos.');
    event.preventDefault(); // impede que o formulário seja enviado
  }
});