# Exercício de Fixação JavaScript  
**Nome:** __________________  
**Data:** __________________

---

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
- `==` (igualdade frouxa): compara valores fazendo coerção de tipo quando necessário.  
- `===` (igualdade estrita): compara valor **e** tipo, sem coerção.  
Exemplo:
```js
0 == false   // true
0 === false  // false
