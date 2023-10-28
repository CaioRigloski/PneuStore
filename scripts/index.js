var produtos = document.getElementsByClassName('produtos-item')
var botaoFecharModal = document.getElementById('fechar-modal')
let modal = document.getElementById('modal-produto')
let caixaDescricaoModal = document.getElementById('caixa-descricao')

function mostrarDescricao() {
    let descricaoProduto = this.closest('.produtos-item').getElementsByClassName('descricao')
    let descricaoProdutoClone = descricaoProduto[0].cloneNode(true)

    caixaDescricaoModal.append(descricaoProdutoClone)
    modal.style.display = 'flex'
}

Array.from(produtos).forEach(function(produto) {
    produto.addEventListener('click', mostrarDescricao)
})

function fecharModal() {
    modal.style.display = 'none'
    caixaDescricaoModal.lastChild.remove()
}

botaoFecharModal.addEventListener('click', fecharModal)

