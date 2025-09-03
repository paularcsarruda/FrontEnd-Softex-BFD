function calcularIdade() {
     let anoNascimento = document.getElementById("anoNascimento").value;
     let anoAtual = new Date().getFullYear(); // pega o ano atual automático

     anoNascimento = Number(anoNascimento);

     // validação simples
     if (!anoNascimento || anoNascimento > anoAtual) {
          alert("Digite um ano de nascimento válido!");
          return;
     }

     let idade = anoAtual - anoNascimento;

     document.getElementById("resultado").textContent = `Sua idade é ${idade} anos.`;
}
