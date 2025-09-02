O HTML (HyperText Markup Language) é a linguagem usada para estruturar páginas da web. Ele usa tags (marcadores) que informam ao navegador como exibir o conteúdo.

**Tags de Texto**

<h1> ... <h6> → títulos (do maior ao menor)
<p> → parágrafo
<br> → quebra de linha
<strong> → texto em negrito (com destaque semântico)
<em> → texto em itálico (com destaque semântico)
<span> → usado para marcar parte de um texto

**Listas**

Lista não ordenada (pontinhos):
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

Lista ordenada (numerada):
<ol>
  <li>Passo 1</li>
  <li>Passo 2</li>
</ol>

**Links, Imagens e Tabelas**

Link:
<a href="https://example.com">Visite o site</a>

Imagem:
<img src="imagem.jpg" alt="Descrição da imagem">

Tabelas:
<table>
  <tr>
    <th>Nome</th>
    <th>Idade</th>
  </tr>
  <tr>
    <td>Ana</td>
    <td>25</td>
  </tr>
</table>

- <table> → cria tabela
- <tr> → linha
- <th> → célula de título (negrito e centralizado)
- <td> → célula de dados
  
**Formulários**

<form action="enviar.php" method="post">
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome">
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  
  <button type="submit">Enviar</button>
</form>

- <form> → formulário
- <input> → campo de entrada (texto, senha, email etc.)
- <textarea> → área de texto
- <button> → botão
- <label> → rótulo do campo
  
**Estrutura Semântica (HTML5)**

Essas tags dão significado ao conteúdo:

- <header> → cabeçalho
- <nav> → menu de navegação
- <main> → conteúdo principal
- <section> → seção de conteúdo
- <article> → artigo ou postagem independente
- <aside> → conteúdo lateral
- <footer> → rodapé
  
**Multimídia**
Audio:
<audio controls>
  <source src="musica.mp3" type="audio/mpeg">
</audio>

Video:
<video controls width="400">
  <source src="video.mp4" type="video/mp4">
</video>


