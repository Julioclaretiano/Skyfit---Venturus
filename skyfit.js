// Função para adicionar uma tarefa
function adicionarTarefa() {
    const input = document.getElementById("novaTarefa");
    const tarefa = input.value.trim();

    if (tarefa !== "") {
        const lista = document.getElementById("listaDeTarefas");

        const item = document.createElement("li");
        item.textContent = tarefa;

        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.onclick = () => {
            lista.removeChild(item);
        };

        item.appendChild(botaoRemover);
        lista.appendChild(item);

        input.value = "";
        input.focus();
    } else {
        alert("Por favor, insira uma tarefa!");
    }
}