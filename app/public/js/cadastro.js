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
  
  if (validarCNPJ(cnpj) && validarCPF(cpfValue) && validarEmail(emailValue)) {
    resultadoDiv.innerHTML = `<p>Todos os campos são válidos!</p>`;
    alert('Formulário enviado com sucesso!');
  } else {
    resultadoDiv.innerHTML = `<p>Erro: um ou mais campos são inválidos.</p>`;
  }
});

// Funções de validação
function validarCNPJ(cnpj) {
  // implemente a lógica de validação de CNPJ aqui
  return true; // ou false se o CNPJ for inválido
}

function validarCPF(cpf) {
  // implemente a lógica de validação de CPF aqui
  return true; // ou false se o CPF for inválido
}

function validarEmail(email) {
  // implemente a lógica de validação de email aqui
  return true; // ou false se o email for inválido
}