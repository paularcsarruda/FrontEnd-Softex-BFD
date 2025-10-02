// 🎯 COMEÇO DO NOSSO CÓDIGO - VAMOS EXPLICAR CADA PARTE!
console.log('🚀 Iniciando nosso Editor Criativo!');
// ============================================
// 🔹 PARTE 1: SELECIONAR TODOS OS ELEMENTOS
// ============================================
// Área de texto e visualização
const areaTexto = document.getElementById('areaTexto');
const textoPreview = document.getElementById('textoPreview');
const contadorCaracteres = document.getElementById('contadorCaracteres');
const contadorPalavras = document.getElementById('contadorPalavras');
const contadorLinhas = document.getElementById('contadorLinhas');
// Botões de estilo
const btnNegrito = document.getElementById('btnNegrito');
const btnItalico = document.getElementById('btnItalico');
const btnSublinhado = document.getElementById('btnSublinhado');
const btnEsquerda = document.getElementById('btnEsquerda');
const btnCentro = document.getElementById('btnCentro');
const btnDireita = document.getElementById('btnDireita');
// Controles
const selectFonte = document.getElementById('selectFonte');
const corTexto = document.getElementById('corTexto');
const tamanhoFonte = document.getElementById('tamanhoFonte');
const valorTamanho = document.getElementById('valorTamanho');
const nomeCor = document.getElementById('nomeCor');
// Botões criativos
const btnEmojis = document.getElementById('btnEmojis');
const btnBorda = document.getElementById('btnBorda');
const btnSombra = document.getElementById('btnSombra');
// Temas
const botoesTemas = document.querySelectorAll('.btn-tema');
// Controles finais
const btnSalvar = document.getElementById('btnSalvar');
const btnLimpar = document.getElementById('btnLimpar');
const btnCopiar = document.getElementById('btnCopiar');
// Mensagem
const mensagem = document.getElementById('mensagem');
console.log('✅ Todos os elementos selecionados!');
// ============================================
// 🔹 PARTE 2: VARIÁVEIS PARA GUARDAR CONFIGURAÇÕES
// ============================================
let config = {
estilos: {
negrito: false,
italico: false,
sublinhado: false,
borda: false,
sombra: false,
alinhamento: 'left' 
},
fonte: 'Arial',
cor: '#000000',
tamanho: 16,
tema: 'claro'
};
console.log('🎛️ Configurações iniciais definidas:', config);
// ============================================
// 🔹 PARTE 3: FUNÇÕES PRINCIPAIS
// ============================================
// 🎨 FUNÇÃO 1: Atualizar a visualização do texto
function atualizarVisualizacao() {
console.log('🔄 Atualizando visualização...');

// Aplicar alinhamento
textoPreview.style.textAlign = config.alinhamento;
// Ativar botão correto
btnEsquerda.classList.remove('ativo');
btnCentro.classList.remove('ativo');
btnDireita.classList.remove('ativo');
if (config.alinhamento === 'left') btnEsquerda.classList.add('ativo');
if (config.alinhamento === 'center') btnCentro.classList.add('ativo');
if (config.alinhamento === 'right') btnDireita.classList.add('ativo');

// Pegar o texto digitado pelo usuário
const texto = areaTexto.value || 'Sua obra-prima aparecerá aqui... 🌟';
// Colocar o texto na área de visualização
textoPreview.textContent = texto;
// 🔄 LIMPAR TODAS AS CLASSES ANTERIORES
textoPreview.className = 'texto-preview';
// 🎪 APLICAR ESTILOS CONFORME AS CONFIGURAÇÕES
if (config.estilos.negrito) {
textoPreview.classList.add('negrito');
btnNegrito.classList.add('ativo');
} else {
btnNegrito.classList.remove('ativo');
}
if (config.estilos.italico) {
textoPreview.classList.add('italico');
btnItalico.classList.add('ativo');
} else {
btnItalico.classList.remove('ativo');
}
if (config.estilos.sublinhado) {
textoPreview.classList.add('sublinhado');
btnSublinhado.classList.add('ativo');
} else {
btnSublinhado.classList.remove('ativo');
}
if (config.estilos.borda) {
textoPreview.classList.add('borda-decorativa');
btnBorda.classList.add('ativo');
} else {
btnBorda.classList.remove('ativo');
}
if (config.estilos.sombra) {
textoPreview.classList.add('sombra-texto');
btnSombra.classList.add('ativo');
} else {
btnSombra.classList.remove('ativo');
}
// 🎨 APLICAR CONFIGURAÇÕES DIRETAS
textoPreview.style.fontFamily = config.fonte;
textoPreview.style.color = config.cor;
textoPreview.style.fontSize = config.tamanho + 'px';
console.log('✨ Visualização atualizada com sucesso!');
}
// 🔢 FUNÇÃO 2: Atualizar contadores
function atualizarContadores() {
const texto = areaTexto.value;
const caracteres = texto.length;
const palavras = texto.trim() === '' ? 0 :
texto.trim().split(/\s+/).length;
const linhas = texto === '' ? 0 : texto.split('\n').length; // CONTA
LINHAS
contadorCaracteres.textContent = caracteres;
contadorPalavras.textContent = palavras;
contadorLinhas.textContent = linhas; // ATUALIZA CONTADOR DE LINHAS
console.log(`📊 Estatísticas: ${caracteres} caracteres, ${palavras}
palavras, ${linhas} linhas`);
}
// 💬 FUNÇÃO 3: Mostrar mensagens temporárias
function mostrarMensagem(texto, tipo = 'sucesso') {
mensagem.textContent = texto;
mensagem.className = 'mensagem mostrar';
if (tipo === 'erro') {
mensagem.classList.add('erro');
}
// Sumir depois de 3 segundos
setTimeout(() => {
mensagem.classList.remove('mostrar');
}, 3000);
console.log(`💬 Mensagem: ${texto}`);
}
// 💾 FUNÇÃO 4: Salvar texto no navegador
function salvarTexto() {
const texto = areaTexto.value;
if (!texto.trim()) {
mostrarMensagem('❌ Digite algo para salvar!', 'erro');
return;
}
// Salvar no localStorage do navegador
localStorage.setItem('textoSalvo', texto);
localStorage.setItem('configuracao', JSON.stringify(config));
mostrarMensagem('💾 Texto salvo com sucesso!');
console.log('📁 Texto salvo no navegador');
}
// 📂 FUNÇÃO 5: Carregar texto salvo
function carregarTextoSaved() {
const textoSaved = localStorage.getItem('textoSalvo');
const configSaved = localStorage.getItem('configuracao');
if (textoSaved) {
areaTexto.value = textoSaved;
if (configSaved) {
config = JSON.parse(configSaved);
aplicarConfiguracaoSalva();
}
atualizarVisualizacao();
atualizarContadores();
mostrarMensagem('📂 Texto anterior carregado!');
}
}
// 🔧 FUNÇÃO 6: Aplicar configuração salva
function aplicarConfiguracaoSalva() {
selectFonte.value = config.fonte;
corTexto.value = config.cor;
tamanhoFonte.value = config.tamanho;
valorTamanho.textContent = config.tamanho + 'px';
atualizarNomeCor(config.cor);
console.log('⚙️ Configuração salva aplicada:', config);
}
// 🎨 FUNÇÃO 7: Atualizar nome da cor
function atualizarNomeCor(corHex) {
const cores = {
'#000000': 'Preto',
'#ffffff': 'Branco',
'#ff0000': 'Vermelho',
'#00ff00': 'Verde',
'#0000ff': 'Azul',
'#ffff00': 'Amarelo',
'#ff00ff': 'Rosa',
'#00ffff': 'Ciano'
};
nomeCor.textContent = cores[corHex] || corHex;
}
// 😊 FUNÇÃO 8: Adicionar emojis aleatórios
function adicionarEmojis() {
const emojis = ['🐱', '🐶', '🦄', '🌈', '⚡', '🎮', '📱', '💻', '🎵',
'🎸', '🏀', '⚽', '🎲', '🧩', '🎪'];
const emojiAleatorio = emojis[Math.floor(Math.random() *
emojis.length)];
// Adicionar no cursor ou no final
const inicio = areaTexto.selectionStart;
const fim = areaTexto.selectionEnd;
const texto = areaTexto.value;
areaTexto.value = texto.substring(0, inicio) + emojiAleatorio +
texto.substring(fim);
// Atualizar
atualizarVisualizacao();
atualizarContadores();
mostrarMensagem(`😊 Emoji ${emojiAleatorio} adicionado!`);
}
// 🗑️ FUNÇÃO 9: Limpar tudo
function limparTudo() {
if (confirm('Tem certeza que quer limpar tudo? ✨')) {
areaTexto.value = '';
config.estilos = {
negrito: false,
italico: false,
sublinhado: false,
borda: false,
sombra: false
};
// Resetar controles
selectFonte.value = 'Arial';
corTexto.value = '#000000';
tamanhoFonte.value = 16;
valorTamanho.textContent = '16px';
atualizarNomeCor('#000000');
// Atualizar
atualizarVisualizacao();
atualizarContadores();
mostrarMensagem('🧹 Tudo limpo! Pronto para criar algo novo!');
}
}
// 📋 FUNÇÃO 10: Copiar texto
function copiarTexto() {
if (!areaTexto.value.trim()) {
mostrarMensagem('❌ Não há texto para copiar!', 'erro');
return;
}
navigator.clipboard.writeText(areaTexto.value)
.then(() => {
mostrarMensagem('📋 Texto copiado para a área de transferência!');
})
.catch(err => {
mostrarMensagem('❌ Erro ao copiar texto', 'erro');
console.error('Erro ao copiar:', err);
});
}
// 🎭 FUNÇÃO 11: Mudar tema
function mudarTema(novoTema, corFundo) {
// Remover todos os temas anteriores
document.body.classList.remove('tema-escuro', 'tema-azul', 'tema-rosa',
'tema-verde');
// Aplicar novo tema
if (novoTema !== 'claro') {
document.body.classList.add(`tema-${novoTema}`);
}
config.tema = novoTema;
mostrarMensagem(`🎭 Tema ${novoTema} ativado!`);
}

// ============================================
// 🔹 PARTE 4: CONFIGURAR EVENT LISTENERS
// ============================================
// ⌨️ EVENTO 1: Digitação em tempo real
areaTexto.addEventListener('input', function() {
console.log('⌨️ Usuário está digitando...');
atualizarVisualizacao();
atualizarContadores();
});
// 🅱️ EVENTO 2: Botão Negrito
btnNegrito.addEventListener('click', function() {
console.log('🅱️ Negrito clicado');
config.estilos.negrito = !config.estilos.negrito;
atualizarVisualizacao();
});
// ℹ️ EVENTO 3: Botão Itálico
btnItalico.addEventListener('click', function() {
console.log('ℹ️ Itálico clicado');
config.estilos.italico = !config.estilos.italico;
atualizarVisualizacao();
});
// 🔗 EVENTO 4: Botão Sublinhado
btnSublinhado.addEventListener('click', function() {
console.log('🔗 Sublinhado clicado');
config.estilos.sublinhado = !config.estilos.sublinhado;
atualizarVisualizacao();
});
// 🔤 EVENTO 5: Mudar fonte
selectFonte.addEventListener('change', function() {
config.fonte = this.value;
console.log('🔤 Fonte alterada para:', config.fonte);
atualizarVisualizacao();
});
// 🎨 EVENTO 6: Mudar cor
corTexto.addEventListener('input', function() {
config.cor = this.value;
atualizarNomeCor(config.cor);
console.log('🎨 Cor alterada para:', config.cor);
atualizarVisualizacao();
});
// 📏 EVENTO 7: Mudar tamanho
tamanhoFonte.addEventListener('input', function() {
config.tamanho = this.value;
valorTamanho.textContent = config.tamanho + 'px';
console.log('📏 Tamanho da fonte:', config.tamanho + 'px');
atualizarVisualizacao();
});
// 😊 EVENTO 8: Botão Emojis
btnEmojis.addEventListener('click', adicionarEmojis);
// 🖼️ EVENTO 9: Botão Borda
btnBorda.addEventListener('click', function() {
config.estilos.borda = !config.estilos.borda;
console.log('🖼️ Borda:', config.estilos.borda ? 'ATIVADA' :
'DESATIVADA');
atualizarVisualizacao();
});
// 💫 EVENTO 10: Botão Sombra
btnSombra.addEventListener('click', function() {
config.estilos.sombra = !config.estilos.sombra;
console.log('💫 Sombra:', config.estilos.sombra ? 'ATIVADA' :
'DESATIVADA');
atualizarVisualizacao();
});

// 🎭 EVENTO 11: Botões de tema
botoesTemas.forEach(botao => {
botao.addEventListener('click', function() {
const tema = this.getAttribute('data-tema');
const cor = this.getAttribute('data-cor');
mudarTema(tema, cor);
});
});

// 💾 EVENTO 12: Salvar texto
btnSalvar.addEventListener('click', salvarTexto);

// 🗑️ EVENTO 13: Limpar tudo
btnLimpar.addEventListener('click', limparTudo);

// 📋 EVENTO 14: Copiar texto
btnCopiar.addEventListener('click', copiarTexto);


// 🎯 EVENTOS DE ALINHAMENTO
btnEsquerda.addEventListener('click', function() {
config.alinhamento = 'left';
atualizarVisualizacao();
});
btnCentro.addEventListener('click', function() {
config.alinhamento = 'center';
atualizarVisualizacao();
});
btnDireita.addEventListener('click', function() {
config.alinhamento = 'right';
atualizarVisualizacao();
});


// ============================================
// 🔹 PARTE 5: INICIALIZAÇÃO FINAL
// ============================================
console.log('🚀 Inicializando editor...');
// Configurações iniciais
atualizarNomeCor('#000000');
carregarTextoSaved();
// Mostrar mensagem de boas-vindas
setTimeout(() => {
mostrarMensagem('✨ Bem-vindo ao Editor Criativo! Comece a digitar...');
}, 1000);
console.log('✅ Editor criativo totalmente carregado e pronto!');