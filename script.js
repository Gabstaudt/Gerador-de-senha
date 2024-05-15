function generatePassword() {
    // Obtendo os valores dos campos do formulário

    var length = parseInt(document.getElementById("length").value);
    var uppercase = document.getElementById("uppercase").checked;
    var lowercase = document.getElementById("lowercase").checked;
    var numbers = document.getElementById("numbers").checked;
    var special = document.getElementById("special").checked;
  
    var charset = ""; // Conjunto de caracteres para gerar a senha
    // Construção de conjunto de caracteres com base nas opções selecionadas
    if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // add letras maiusculas
    if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz"; // add letras minusculas
    if (numbers) charset += "0123456789"; // add números
    if (special) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-="; // add símbolos especiais
  
    var password = "";
      // Gera a senha aleatória selecionando caracteres aleatórios do conjunto
    for (var i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
  
    document.getElementById("password").value = password;
  }
  // Função para copiar a senha gerada para a área de transferência
  function copyPassword() {
    var passwordInput = document.getElementById("password");
    passwordInput.select();
    passwordInput.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    alert("Senha copiada para a área de transferência!");
  }
  