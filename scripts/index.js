// Seleção dos elementos que serão utilizados
var produtos = document.getElementsByClassName('produtos-item')
var botaoFecharModal = document.getElementById('fechar-modal')
let modal = document.getElementById('modal-produto')
let caixaDescricaoModal = document.getElementById('caixa-descricao')

// Faz uma cópia da descrição do produto e mostra no pop-up através do "display: flex".
function mostrarDescricao() {
    let descricaoProduto = this.closest('.produtos-item').getElementsByClassName('descricao')
    let descricaoProdutoClone = descricaoProduto[0].cloneNode(true)

    caixaDescricaoModal.append(descricaoProdutoClone)
    modal.style.display = 'flex'
}

// Monitora qualquer clique em um dos produtos para disparar a função para mostrar a descrição.
Array.from(produtos).forEach(function(produto) {
    produto.addEventListener('click', mostrarDescricao)
})

// fecha o modal através do "display: none"
function fecharModal() {
    modal.style.display = 'none'
    caixaDescricaoModal.lastChild.remove()
}

// Monitora o clique no elemento para fechar o modal
botaoFecharModal.addEventListener('click', fecharModal)

