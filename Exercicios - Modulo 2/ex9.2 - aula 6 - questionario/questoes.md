**PERGUNTA 1: FUNDAMENTOS DO JAVASCRIPT**

"Analisando o código JavaScript, explique com suas palavras:

1. O que é document.getElementById() e para que usamos ele?
```

```
2. Qual a diferença entre classList.add() e classList.remove()?
```

```
3. Por que usamos addEventListener() em vez de colocar onclick no HTML?
```

```

**PERGUNTA 2: MANIPULAÇÃO DO DOM**

"No editor de texto, quando digitamos algo na área de texto, o texto aparece
automaticamente na visualização à direita.

1. Qual função é responsável por isso?
```
atualizarVisualização()
```
2. Que evento dispara essa atualização automática?
```
textoPreview.textContent = texto;
```
3. Como o JavaScript 'sabe' que o conteúdo mudou?
```
todas as vezes que um caractere é acionado o JS roda a função.
```

**PERGUNTA 3: ARMAZENAMENTO DE DADOS**

"O editor permite salvar e recuperar textos mesmo depois de fechar o navegador.

1. Onde esses dados são armazenados?
```
localmente, no localStorage do navegador.
```
2. Qual comando salva os dados?
```
function salvarTexto()
```
3. Por que precisamos usar JSON.stringify() ao salvar a configuração?

**PERGUNTA 4: LÓGICA DE PROGRAMAÇÃO**

"Observe a função atualizarVisualizacao():

1. Por que precisamos limpar as classes primeiro com
textoPreview.className = ''?
2. Como o programa 'lembra' quais estilos estão ativos?
3. O que aconteceria se não usássemos a variável config?

**PERGUNTA 5: CRIATIVIDADE E EXPANSÃO**

"Se você quisesse adicionar uma NOVA funcionalidade ao editor, por exemplo:

1. Um botão para transformar texto em MAIÚSCULAS
2. Uma opção para adicionar imagens
3. Um seletor de cor de fundo

Como você implementaria isso? Descreva quais partes do código precisam ser
modificadas (HTML, CSS, JavaScript)."