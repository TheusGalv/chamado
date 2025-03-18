
// Função para adicionar cliente
function adicionarCliente() {
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;

    // Validação básica
    if (!nome || !telefone || !email) {
        alert("Todos os campos são obrigatórios!");
        return;
    }

    const tabela = document.getElementById('listaClientes');
    const novaLinha = document.createElement('tr');

    novaLinha.innerHTML = `
        <td>${nome}</td>
        <td>${telefone}</td>
        <td>${email}</td>
        <td><span class="delete-btn" onclick="deletarCliente(this)">Excluir</span></td>
    `;
    
    tabela.appendChild(novaLinha);

    // Limpar os campos após adicionar
    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('email').value = '';
}

// Função para deletar cliente com confirmação
function deletarCliente(element) {
    const confirmar = confirm("Você tem certeza que deseja excluir este cliente?");
    if (confirmar) {
        const linha = element.closest('tr');
        linha.remove();
    }
}

// Função para validar se o campo telefone contém apenas números
function validarTelefone(event) {
    const input = event.target;
    let valor = input.value;

    // Remover qualquer caractere que não seja número
    valor = valor.replace(/\D/g, '');
    
    // Atualizar o valor do campo
    input.value = valor;
}