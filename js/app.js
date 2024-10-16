let valorSomado = 0;

let listaDeSomas = [];

let total = document.getElementById('valor-total');


adicionar();

function adicionar() {

    let produtos = document.getElementById('produto').value;
    let produtoSelecionado = produtos.split('-')[0];

    let valorDeCadaProduto = produtos.split('R$')[1];

    let quantidade = parseInt(document.getElementById('quantidade').value);

    let valorTotalDoProduto = valorDeCadaProduto * quantidade;

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${produtoSelecionado} <span class="texto-azul">R$${valorTotalDoProduto}</span>
  </section>`;

    document.getElementById('quantidade').value = '0';

    listaDeSomas.push(valorTotalDoProduto);
    atualizarValorTotal()

    if (quantidade <= 0) {
        alert('Coloque uma quantidade válida');
        limpar()
        return;
    }
}


limpar();

function limpar() {
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0'
    document.getElementById('quantidade').value = '0';
    listaDeSomas = [];
}

function atualizarValorTotal() {
    valorSomado = 0;
    for (i = 0; i < listaDeSomas.length; i++) {
        valorSomado += listaDeSomas[i];
    }
    total.textContent = (`R$${valorSomado}`);
}



