// Seleção de elementos
let display = document.getElementById('display');
let valorAtual = '0';
let valorAnterior = '';
let operador = null;
let aguardandoNovoNumero = true;
// Atualiza display
function atualizarDisplay() {
display.textContent = valorAtual;
console.log('Display:', valorAtual);
}
// Adiciona número
function adicionarNumero(numero) {
if (aguardandoNovoNumero) {
valorAtual = numero;
aguardandoNovoNumero = false;
} else {
valorAtual = valorAtual === '0' ? numero : valorAtual + numero;
}
atualizarDisplay();
}
// Adiciona decimal
function adicionarDecimal() {
if (aguardandoNovoNumero) {
valorAtual = '0.';
aguardandoNovoNumero = false;
} else if (!valorAtual.includes('.')) {
valorAtual += '.';
}
atualizarDisplay();
}
// Escolher operador
function escolherOperador(op) {
if (!aguardandoNovoNumero) calcular();
valorAnterior = valorAtual;
operador = op;
aguardandoNovoNumero = true;
}
// Calcular
function calcular() {
if (!operador) return;
let resultado;
const anterior = parseFloat(valorAnterior);
const atual = parseFloat(valorAtual);
switch(operador) {
case '+': resultado = anterior + atual; break;
case '-': resultado = anterior - atual; break;
case '*': resultado = anterior * atual; break;
case '/':
if (atual === 0) {
alert('Erro: Divisão por zero!');
limpar();
return;
}
resultado = anterior / atual;
break;
}
valorAtual = String(resultado);
operador = null;
valorAnterior = '';
aguardandoNovoNumero = true;
atualizarDisplay();
}
// Limpar
function limpar() {
valorAtual = '0';
valorAnterior = '';
operador = null;
aguardandoNovoNumero = true;
atualizarDisplay();
}
// Event listeners
document.querySelectorAll('.btn').forEach(botao => {
botao.addEventListener('click', () => {
const valor = botao.getAttribute('data-value');
switch(valor) {
case 'C':
case 'CE': limpar(); break;
case '=': calcular(); break;
case '.': adicionarDecimal(); break;
case '+':
case '-':
case '*':
case '/': escolherOperador(valor); break;
default:
if (!isNaN(valor)) adicionarNumero(valor);
}
});
});