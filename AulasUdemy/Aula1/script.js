// 1 - number
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -127);

// 2 - operadores
console.log(2 + 4);
console.log(5 - 3);
console.log(25 / 2);
console.log(5 * 4);
console.log(5 + (4 * 2));

// 3 - Special Numbers
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(12 * 'abc');
console.log(typeof NaN);

// 4 - String
/* 
     "" =>
     '' => 
     ´´ =>
*/
console.log('Teste');
console.log("Teste");
console.log(`Teste`);
console.log(typeof 'Teste');
console.log(typeof "Teste");
console.log(typeof `Teste`);

// começar e terminar sempre com o mesmo caractere
// e.g.: \n => pula uma linha do texto ("Teste em \n Duas Linhas")

// 5 - Special Symbols in Strings
console.log('Testando \nquebra de linha');
console.log('Espaçamento \t de tab');

// 6 - Concatenação
let nome = 'Paula';
console.log('Olá, ' + nome);
console.log(`Testando ` + `com ` + `crase`);

// 7 - Interpolação (Template Strings)
/*
     recurso semelhante a concatenação
     deve ser escrita entre **CRASE** 
     e.g.:  ${algum código}
*/
console.log(`A soma de 2 + 2 é: ${2 + 2}`);

// 8 - Booleans
console.log(true);
console.log(5 > 20);
console.log(30 < 10);

// 8 - Comparações
/*
     Maior e Menor < >;
     Igual ==;
     Maior ou Menor Igual a <= >=;
     Diferente !=;
     Identico ===
*/
console.log(5 >= 5);
console.log(5 <= 10);
console.log(10 == 10);
console.log(10 != 10);

// 9 - Comparação de Idênticos
// === e !==
// avalia os tipos de dados
console.log(9 === '9');
console.log(9 !== '9');

// 10 - Operadores Lógicos e Tabela Verdade
/*
     and => &&
     or => ||
     not => !

               TABELA VERDADE
     -----------------------------------          
     A    B    A AND B   A OR B    NOT A
     -----------------------------------
     F    F       F        F         T
     F    T       F        T         T
     T    F       F        T         F
     T    T       T        T         F
     ----------------------------------
*/
console.log(true && true);
console.log(true && false);
console.log(!true);
console.log(false || true);
console.log(5 > 2 && 2 < 10);
console.log(8 < 8 || 10 > 2);

// 11 - Empty Values






















