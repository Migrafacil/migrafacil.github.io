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

