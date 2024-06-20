function validarCNPJ(cnpj) {
 
  cnpj = cnpj.replace(/[^\d]+/g,'');

  if(cnpj == '') return false;
   
  if (cnpj.length != 14)
      return false;

  // Elimina CNPJs invalidos conhecidos
  if (cnpj == "00000000000000" || 
      cnpj == "11111111111111" || 
      cnpj == "22222222222222" || 
      cnpj == "33333333333333" || 
      cnpj == "44444444444444" || 
      cnpj == "55555555555555" || 
      cnpj == "66666666666666" || 
      cnpj == "77777777777777" || 
      cnpj == "88888888888888" || 
      cnpj == "99999999999999")
      return false;
       
  // Valida DVs
  tamanho = cnpj.length - 2
  numeros = cnpj.substring(0,tamanho);
  digitos = cnpj.substring(tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
          pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(0))
      return false;
       
  tamanho = tamanho + 1;
  numeros = cnpj.substring(0,tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
          pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(1))
        return false;
         
  return true;
  
}

module.exports = {validarCNPJ}

function validateCPF(cpf) {
    cpf = cpf.replace(/\D+/g, ''); // remove caracteres não numéricos
    if (cpf.length!== 11) return false; // CPF deve ter 11 dígitos
  
    const cpfRegex = /^\d{11}$/;
    if (!cpfRegex.test(cpf)) return false; // CPF deve ter apenas dígitos
  
    let sum = 0;
    let weight = [10, 9, 8, 7, 6, 5, 4, 3, 2];
  
    for (let i = 0; i < 9; i++) {
      sum += cpf.charAt(i) * weight[i];
    }
  
    let verifyingDigit = 11 - (sum % 11);
    if (verifyingDigit > 9) verifyingDigit = 0;
  
    if (cpf.charAt(9)!== verifyingDigit.toString()) return false;
  
    sum = 0;
    weight = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
  
    for (let i = 0; i < 10; i++) {
      sum += cpf.charAt(i) * weight[i];
    }
  
    verifyingDigit = 11 - (sum % 11);
    if (verifyingDigit > 9) verifyingDigit = 0;
  
    if (cpf.charAt(10)!== verifyingDigit.toString()) return false;
  
    return true;
  }


  // const cpf = "12345678909";

  // if (validateCPF(cpf)) {
  //   console.log("CPF válido!");
  // } else {
  //   console.log("CPF inválido!");
  // }

  module.exports = {validarCPF}

   function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
  
  // const email = "exemplo@email.com";
  // if (validateEmail(email)) {
  //   console.log("Email válido!");
  // } else {
  //   console.log("Email inválido!");
  // }

  module.exports = {validarEmail}
