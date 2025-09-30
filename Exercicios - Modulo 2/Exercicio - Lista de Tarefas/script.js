let input = document.getElementById("tarefaInput");
let botao = document.getElementById("adicionarBtn");
let lista = document.getElementById("listaTarefas");
botao.addEventListener("click", function() {
 let texto = input.value.trim();
 if (texto !== "") {
 adicionarTarefa(texto);
 input.value = "";
 } else {
 alert("Digite uma tarefa antes de adicionar!");
 }
});
function adicionarTarefa(texto) {
 let li = document.createElement("li");
 li.textContent = texto;
 let btnRemover = document.createElement("button");
 btnRemover.textContent = "❌";
 btnRemover.classList.add("btn-remover");
 li.appendChild(btnRemover);
 lista.appendChild(li);
}
lista.addEventListener("click", function(event) {
 if (event.target.classList.contains("btn-remover")) {
 let li = event.target.closest("li");
 li.remove();
 }
});

