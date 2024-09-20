function notify(titulo, texto, tipo, posicao,duracao=3000) {
  new Notify({
      status: tipo,
      title: titulo,
      text:texto,
      effect: 'fade',
      speed: 500,
      showIcon: true,
      showCloseButton: true,
      autoclose: true,
      autotimeout: duracao,
      gap: 20,
      distance: 20,
      type: 1,
      position:posicao 
  })
}

document.addEventListener('DOMContentLoaded', function() {
  const senhaInput = document.getElementById('senha');
  const confirmarSenhaInput = document.getElementById('confirmar-senha');
  const cnpjInput = document.getElementById('cnpj'); 
  const passwordRequirementsBox = document.getElementById('password-requirements-box');

  function isCNPJ(value) {
    return value.length === 14;
  }

  function formatCNPJ(input) {
    let value = input.value.replace(/\D+/g, ''); 

    if (isCNPJ(value)) {
      value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
    }

    input.value = value;
  }

  cnpjInput.addEventListener('input', function() {
    formatCNPJ(this);
  });

  cnpjInput.addEventListener('keypress', function(e) {
    const char = String.fromCharCode(e.which);
    const currentLength = this.value.replace(/\D/g, '').length;

    if (!/\d/.test(char) || currentLength >= 14) {
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

  function showPasswordCriteria() {
    passwordRequirementsBox.style.display = 'block';
  }

  function hidePasswordCriteria() {
    if (!senhaInput.value) {
      passwordRequirementsBox.style.display = 'none';
    }
  }

  senhaInput.addEventListener('focus', showPasswordCriteria);
  senhaInput.addEventListener('blur', hidePasswordCriteria);

  confirmarSenhaInput.addEventListener('input', function() {
    const senha = senhaInput.value;
    const confirmarSenha = this.value;

    if (senha !== confirmarSenha) {
      confirmarSenhaInput.setCustomValidity("As senhas não coincidem.");
    } else {
      confirmarSenhaInput.setCustomValidity("");
    }
  });

  document.getElementById('registration-form').addEventListener('submit', function(event) {
    const senha = senhaInput.value;
    const confirmarSenha = confirmarSenhaInput.value;
    const cnpj = cnpjInput.value.replace(/\D/g, '');
    let isValid = true;

    if (senha !== confirmarSenha) {
      confirmarSenhaInput.setCustomValidity("As senhas não coincidem.");
      isValid = false;
    } else {
      confirmarSenhaInput.setCustomValidity("");
    }

    if (senha.length < 8 || senha.length > 10) {
      senhaInput.setCustomValidity("A senha deve ter entre 8 e 10 caracteres.");
      isValid = false;
    } else {
      senhaInput.setCustomValidity("");
    }

    if (!isCNPJ(cnpj)) {
      cnpjInput.setCustomValidity("CNPJ inválido.");
      isValid = false;
    } else {
      cnpjInput.setCustomValidity("");
    }

    if (!isValid) {
      event.preventDefault();
    }
  });
});
