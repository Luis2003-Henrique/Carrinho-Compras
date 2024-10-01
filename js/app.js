let valorSomado = 0;

let listaDeSomas = [];

let total = document.getElementById('valor-total');


adicionar();

function adicionar(){

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
}


limpar();

function limpar(){
    let limparProdutos = document.getElementById('lista-produtos');
    let limparValor = document.getElementById('valor-total');
    let limparQuantidade = document.getElementById('quantidade');
limparProdutos.textContent = '';
limparValor.textContent = 'R$0';
limparQuantidade.value = '';
listaDeSomas = [];
}

function atualizarValorTotal(){
    valorSomado = 0;
    for (i = 0; i < listaDeSomas.length; i++){
        valorSomado += listaDeSomas[i];
    }
    total.textContent = (`R$${valorSomado}`);
}


// Adicionar um botão para remover itens do carrinho: Isso permitiria que o usuário removesse itens que ele não deseja mais comprar.
// Criar um sistema de desconto: Você poderia implementar um sistema de desconto para incentivar o usuário a comprar mais produtos.
// Implementar um sistema de frete: Você poderia calcular o frete com base no valor total da compra ou na região de entrega.
// Criar um sistema de login: Você poderia permitir que o usuário faça login para salvar seus dados de compra e histórico de pedidos.


// function adicionar() {
//     //recuperar valores nome do produto, quantidade e valor
//     let produto = document.getElementById('produto').value;
//     let nomeProduto = produto.split('-')[0];
//     let valorUnitario = produto.split('R$')[1]; 
//     let quantidade = document.getElementById('quantidade'); 
//     alert(nomeProduto);
//     alert(valorUnitario);
//     alert(quantidade.value);
//     let preco = quantidade.value * valorUnitario;
//     alert(preco);

//forma utilizada no curso, por meio do split. Mais prático e compacto