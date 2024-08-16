document.addEventListener('DOMContentLoaded', function() {
  const senhaInput = document.getElementById('senha');
  const confirmarSenhaInput = document.getElementById('confirmar-senha');
  const cpfInput = document.getElementById('cpf'); 

  function formatCPF(input) {
    let value = input.value.replace(/\D+/g, ''); 
    if (value.length <= 11) { 
      value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
    }
    
    input.value = value;
  }

  cpfInput.addEventListener('input', function() {
    formatCPF(this);
  });

  cpfInput.addEventListener('keypress', function(e) {
    const char = String.fromCharCode(e.which);
    if (!/\d/.test(char) || this.value.replace(/\D/g, '').length >= 11) {
      e.preventDefault();
    }
  });

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

    if (/\d/.test(senha)) {
      number.classList.add('valid');
      number.classList.remove('invalid');
    } else {
      number.classList.add('invalid');
      number.classList.remove('valid');
    }

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
      alert('A senha deve ter no mínimo 6 caracteres, 1 símbolo, 1 número e 1 letra maiúscula.');
      event.preventDefault();
      isValid = false;
    }

    if (isValid) {
      alert('Cadastro feito com sucesso');
    }

    if (!isValid) {
      event.preventDefault();
    }
  });
});
