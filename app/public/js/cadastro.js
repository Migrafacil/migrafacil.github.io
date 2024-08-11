document.addEventListener('DOMContentLoaded', function() {
  const senhaInput = document.getElementById('senha');
  const confirmarSenhaInput = document.getElementById('confirmar-senha');
  
  senhaInput.addEventListener('input', function() {
    const senha = this.value;
    const length = document.getElementById('length');
    const lowercase = document.getElementById('lowercase');
    const uppercase = document.getElementById('uppercase');
    const number = document.getElementById('number');
    const symbol = document.getElementById('symbol');
 
    if (senha.length >= 8 && senha.length <= 10) {
      length.classList.add('valid');
      length.classList.remove('invalid');
    } else {
      length.classList.add('invalid');
      length.classList.remove('valid');
    }

    if (/[a-z]/.test(senha)) {
      lowercase.classList.add('valid');
      lowercase.classList.remove('invalid');
    } else {
      lowercase.classList.add('invalid');
      lowercase.classList.remove('valid');
    }

    if (/[A-Z]/.test(senha)) {
      uppercase.classList.add('valid');
      uppercase.classList.remove('invalid');
    } else {
      uppercase.classList.add('invalid');
      uppercase.classList.remove('valid');
    }

    // Number check
    if (/\d/.test(senha)) {
      number.classList.add('valid');
      number.classList.remove('invalid');
    } else {
      number.classList.add('invalid');
      number.classList.remove('valid');
    }

    // Symbol check
    if (/[@$!%*?&]/.test(senha)) {
      symbol.classList.add('valid');
      symbol.classList.remove('invalid');
    } else {
      symbol.classList.add('invalid');
      symbol.classList.remove('valid');
    }
  });

  document.getElementById('registration-form').addEventListener('submit', function(event) {
    const senha = senhaInput.value;
    const confirmarSenha = confirmarSenhaInput.value;
    let isValid = true;
    
    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem.');
      event.preventDefault();
      isValid = false;
    }
    
    if (!senha.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/)) {
      alert('A senha deve ter no mínimo 8 caracteres, 1 símbolo, 1 número e 1 letra maiúscula.');
      event.preventDefault();
      isValid = false;
    }

    if (!isValid) {
      event.preventDefault(); 
    }
  });

  function formatCPF_CNPJ(input) {
    var value = input.value.replace(/\D+/g, '');
    var cpf_cnpj = value;

    if (cpf_cnpj.length <= 11) { // CPF
      cpf_cnpj = cpf_cnpj.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
    } else { // CNPJ
      cpf_cnpj = cpf_cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
    }

    input.value = cpf_cnpj;
  }
});
