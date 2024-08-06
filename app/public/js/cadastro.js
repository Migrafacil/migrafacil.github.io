document.getElementById('registration-form').addEventListener('submit', function(event) {
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var cpf = document.getElementById('cpf').value;
  var senha = document.getElementById('senha').value;
  var confirmarSenha = document.getElementById('confirmar-senha').value;
  var isValid = true;

  if (senha !== confirmarSenha) {
    alert('As senhas não coincidem.');
    event.preventDefault();
    isValid = false;
  }

  const cpfValue = cpf.trim();
  const emailValue = email.trim();

  if (!senha.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,70}$/)) {
    alert('A senha deve ter no mínimo 6 caracteres, 1 símbolo, 1 número, 1 letra maiúscula e 1 letra minúscula.');
    event.preventDefault();
    isValid = false;
  }

  if (validarCNPJ(cpfValue) && validarCPF(cpfValue) && validarEmail(emailValue)) {
    alert('Cadastro enviado com sucesso!');
  } else {
    alert('Erro: um ou mais campos são inválidos.');
    event.preventDefault();
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault();
  }
});

function validarSenha(senha) {
  var requisitos = {
    minLength: senha.length >= 8 && senha.length <= 70,
    lowercase: /[a-z]/.test(senha),
    uppercase: /[A-Z]/.test(senha),
    number: /\d/.test(senha),
    symbol: /[@$!%*?&]/.test(senha)
  };

  document.getElementById('min-length').classList.toggle('valid', requisitos.minLength);
  document.getElementById('min-length').classList.toggle('invalid', !requisitos.minLength);

  document.getElementById('lowercase').classList.toggle('valid', requisitos.lowercase);
  document.getElementById('lowercase').classList.toggle('invalid', !requisitos.lowercase);

  document.getElementById('uppercase').classList.toggle('valid', requisitos.uppercase);
  document.getElementById('uppercase').classList.toggle('invalid', !requisitos.uppercase);

  document.getElementById('number').classList.toggle('valid', requisitos.number);
  document.getElementById('number').classList.toggle('invalid', !requisitos.number);

  document.getElementById('symbol').classList.toggle('valid', requisitos.symbol);
  document.getElementById('symbol').classList.toggle('invalid', !requisitos.symbol);
}

function validarCNPJ(cnpj) {
  
  return true; 
}

function validarCPF(cpf) {
  
  return true; 
}

function validarEmail(email) {
  
  return true; 
}

function formatCPF_CNPJ(input) {
  var value = input.value.replace(/\D+/g, ''); 
  var cpf_cnpj = value;

  if (cpf_cnpj.length <= 11) {
    cpf_cnpj = cpf_cnpj.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
  } else { 
    cpf_cnpj = cpf_cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
  }

  input.value = cpf_cnpj;
}


//document.getElementById('registration-form').addEventListener('submit', function(event) {
 // var nome = document.getElementById('nome').value;
  //var email = document.getElementById('email').value;
  //var cpf = document.getElementById('cpf').value;
  //var senha = document.getElementById('senha').value;
  //var confirmarSenha = document.getElementById('confirmar-senha').value;
  
 // if (senha !== confirmarSenha) {
  //  notify('As senhas não coincidem.');
   // event.preventDefault();
   // isValid = false;
//  }
  
//const cpfValue = cpf.trim();
 // const emailValue = email.trim();
  
  //if (!senha.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)) {
   // notify('A senha deve ter no mínimo 6 caracteres, 1 símbolo, 1 número e 1 letra maiúscula.');
   // event.preventDefault();
   // isValid = false;
//  }

 // if (validarCNPJ(cpfValue) && validarCPF(cpfValue) && validarEmail(emailValue)) {
    // Redirecionar para outra página após cadastro realizado com sucesso
    // window.location.href = '/logado';
  //  notify('Cadastro enviado com sucesso!');

  //} else { 
//notify('Erro: um ou mais campos são inválidos.');
   // event.preventDefault();
    //isValid = false;
//  }

 // if (!isValid) {
 //   event.preventDefault(); // impede que o formulário seja enviado
 // }
//});

// Funções de validação
//function validarCNPJ(cnpj) {
  // implemente a lógica de validação de CNPJ aqui
  //return true; // ou false se o CNPJ for inválido
//}

//function validarCPF(cpf) {
  // implemente a lógica de validação de CPF aqui
  //return true; // ou false se o CPF for inválido
//}

//function validarEmail(email) {
  // implemente a lógica de validação de email aqui
  //return true; // ou false se o email for inválido
//}
//function formatCPF_CNPJ(input) {
 // var value = input.value.replace(/\D+/g, ''); // remove todos os caracteres que não são dígitos
  //var cpf_cnpj = value;

  //if (cpf_cnpj.length <= 11) { // CPF
  //  cpf_cnpj = cpf_cnpj.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
 // } else { // CNPJ
//    cpf_cnpj = cpf_cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
  //}

  //input.value = cpf_cnpj;
//}
