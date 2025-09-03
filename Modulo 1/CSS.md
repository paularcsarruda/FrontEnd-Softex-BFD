O CSS (Cascading Style Sheets) é a linguagem usada para estilizar páginas HTML, controlando cores, tamanhos, posicionamentos, fontes, espaçamentos, etc.

seletor {
  propriedade: valor;
}

📑 Tabela Resumida de CSS
https://www.notion.so/CSS-2624387b20398045baa7c31cf7f3d897

Dica seletor universal e body básico:
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  font-family: "Poppins", "Segoe UI", sans-serif;
  font-size: 16px;
}