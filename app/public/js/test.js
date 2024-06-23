document.getElementById('registration-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var cpf = document.getElementById('cpf').value;
  var senha = document.getElementById('senha').value;
  var confirmarSenha = document.getElementById('confirmar-senha').value;
  
  const inputCnpj = document.getElementById('cnpj');
  const inputEmail = document.getElementById('email');
  const resultadoDiv = document.getElementById('resultado');
  
  if (senha !== confirmarSenha) {
    alert('As senhas não coincidem.');
    return;
  }
  
  if (!/^\d{11}|\d{14}$/.test(cpf)) {
    alert('CPF/CNPJ inválido.');
    return;
  }
  
  const cnpj = inputCnpj.value.trim();
  const cpfValue = cpf.trim();
  const emailValue = email.trim();
  
  // Verificação adicional para a senha
  if (!senha.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)) {
    alert('A senha deve ter no mínimo 6 caracteres, 1 símbolo, 1 número e 1 letra maiúscula.');
    return;
  }

  if (validarCNPJ(cnpj) && validarCPF(cpfValue) && validarEmail(emailValue)) {
    resultadoDiv.innerHTML = `<p>Todos os campos são válidos!</p>`;
    alert('Cadastro enviado com sucesso!');
  } else {
    resultadoDiv.innerHTML = `<p>Erro: um ou mais campos são inválidos.</p>`;
  }
});

// Funções de validação
function validarCNPJ(cnpj) {
  // Verificar se o CNPJ tem 14 dígitos
  if (cnpj.length !== 14) return false;
  
  // Verificar se o CNPJ é válido
  var soma = 0;
  var peso = 2;
  for (var i = 0; i < 12; i++) {
    soma += parseInt(cnpj.charAt(i)) * peso;
    peso = (peso === 2) ? 9 : --peso;
  }
  var resto = soma % 11;
  if (resto < 2) resto = 0; else resto = 11 - resto;
  if (resto !== parseInt(cnpj.charAt(12))) return false;
  
  soma = 0;
  peso = 2;
  for (var i = 0; i < 13; i++) {
    soma += parseInt(cnpj.charAt(i)) * peso;
    peso = (peso === 2) ? 9 : --peso;
  }
  resto = soma % 11;
  if (resto < 2) resto = 0; else resto = 11 - resto;
  if (resto !== parseInt(cnpj.charAt(13))) return false;
  
  return true;
}

function validarCPF(cpf) {
  // Verificar se o CPF tem 11 dígitos
  if (cpf.length !== 11) return false;
  
  // Verificar se o CPF é válido
  var soma = 0;
  var peso = 10;
  for (var i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * peso;
    peso--;
  }
  var resto = soma % 11;
  if (resto < 2) resto = 0; else resto = 11 - resto;
  if (resto !== parseInt(cpf.charAt(9))) return false;
  
  soma = 0;
  peso = 11;
  for (var i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * peso;
    peso--;
  }
  resto = soma % 11;
  if (resto < 2) resto = 0; else resto = 11 - resto;
  if (resto !== parseInt(cpf.charAt(10))) return false;
  
  return true;
}

function validarEmail(email) {
  // Verificar se o email é válido
  var re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
}