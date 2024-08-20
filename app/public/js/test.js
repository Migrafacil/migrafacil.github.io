document.getElementById('registration-form').addEventListener('submit', function(event) {
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var cpf = document.getElementById('cpf').value;
  var senha = document.getElementById('senha').value;
  var confirmarSenha = document.getElementById('confirmar-senha').value;
  
  var isValid = true;
  
  if (senha!== confirmarSenha) {
    alert('As senhas não coincidem.');
    isValid = false;
  }
  
  const cpfValue = cpf.trim();
  const emailValue = email.trim();
  
  if (!senha.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)) {
    alert('A senha deve ter no mínimo 6 caracteres, 1 símbolo, 1 número e 1 letra maiúscula.');
    isValid = false;
  }

  if (!(validarCNPJ(cpfValue) && validarCPF(cpfValue) && validarEmail(emailValue))) {
    alert('Erro: um ou mais campos são inválidos.');
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault(); 
  }
});