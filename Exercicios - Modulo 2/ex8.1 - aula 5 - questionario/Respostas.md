## 1. Variáveis e Tipos

**Qual a diferença entre `var`, `let` e `const`?**  
- `var`: escopo de função, sofre *hoisting* e pode ser redeclarada.  
- `let`: escopo de bloco, não pode ser redeclarada no mesmo escopo; pode ser reatribuída.  
- `const`: escopo de bloco, não pode ser redeclarada nem reatribuída (objetos/arrays podem ter seus elementos internos alterados).  

**Tipos primitivos do JavaScript com exemplos:**  
- `string` — `"Olá, mundo"`  
- `number` — `42`, `3.14`  
- `boolean` — `true`, `false`  
- `null` — `null`  
- `undefined` — `undefined`  
- `bigint` — `1234567890123456789n`  
- `symbol` — `Symbol("id")`  

**Diferença entre `null` e `undefined`:**  
- `null`: valor intencionalmente vazio/ausente (atribuído pelo programador).  
- `undefined`: variável foi declarada, mas não recebeu um valor.  

**Explique `==` e `===`:**  
- `==` (Igualdade Ampla ou Comparação de Valor): compara valores fazendo coerção de tipo quando necessário.  
- `===` (igualdade estrita): compara valor **e** tipo, sem coerção.  
```js
0 == false   // true
0 === false  // false
```

----------------------------------------

## 2. Operadores e Expressões

**Operadores matemáticos:**  
`+`, `-`, `*`, `/`, `%`

**Operadores lógicos:**  
`&&`, `||`, `!`  

**Previsões:**  
- `"5" + 2` → `"52"` (concatenação, pois `"5"` é string).  
- `true + 1` → `2` (`true` é coergido para `1`).  

-----------------------------------------

## 3. Estruturas de Controle

**`if`, `else if` e `else`:**  
Estruturas de tomada de decisão.  
```js
if (idade >= 18) {
  console.log("Maior de idade");
} else if (idade >= 16) {
  console.log("Pode votar");
} else {
  console.log("Menor de idade");
}
```

**Como usar `switch`:**
```js
let cor = "verde";
switch (cor) {
  case "vermelho":
    console.log("Pare");
    break;
  case "amarelo":
    console.log("Atenção");
    break;
  case "verde":
    console.log("Siga");
    break;
  default:
    console.log("Cor inválida");
}
```

**Exemplo de verificação de maioridade:**
```js
let idade = 20;
if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}
```

----------------------------------------------------

## 4. Loops e Repetições

**Tipos de loops:**  
- `for`  
- `while`  
- `do...while`  

**Imprimir números de 1 a 5:**
```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

**Explique `break`:**  
`break` interrompe imediatamente a execução do loop (ou de um `switch`).  

-------------------------------------------------

## 5. Funções

**O que é uma função?**  
Bloco de código reutilizável que realiza uma tarefa e pode retornar um valor.  

**Diferença entre função declarada e função expressa:**  
- Função declarada:
```js
function soma(a, b) {
  return a + b;
}
```

- Função expressa:
```js
const soma = function(a, b) {
  return a + b;
};
```

**Função que recebe um nome e retorna saudação:**
```js
function saudar(nome) {
  return "Olá, " + nome + "!";
}
console.log(saudar("Paula")); // "Olá, Paula!"
```

------------------------------------------------------

## 6. Mini-casos práticos

**Verificação de número par ou ímpar:**
```js
let num = 7;
if (num % 2 === 0) {
  console.log("Par");
} else {
  console.log("Ímpar");
}
```

**Criação de uma lista de compras (array):**
```js
let compras = ["Leite", "Pão", "Arroz", "Feijão"];
```

**Somar números de 1 a 10 usando loop:**
```js
let soma = 0;
for (let i = 1; i <= 10; i++) {
  soma += i;
}
console.log(soma); 
```

----------------------------------------------------

## 7. Reflexão

**Por que conhecer tipos e operadores ajuda a programar melhor?**  
Evita erros de coerção de tipos, permite escrever condições corretas e torna o código mais previsível e robusto.  

**Por que usar `console.log()` é importante para debug?**  
Permite inspecionar valores em tempo real e entender o fluxo do programa, facilitando a identificação de bugs.  

**Como planejar variáveis, funções e loops antes de programar?**  
- Entender o problema e os requisitos.  
- Identificar os dados necessários (variáveis, estruturas).  
- Dividir em funções pequenas e claras.  
- Desenhar o fluxo (passo a passo) e pensar nos casos antes de codificar.  
