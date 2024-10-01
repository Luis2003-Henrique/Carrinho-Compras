let foneDeOuvido = 100;
let celular = 1400;
let oculosVr = 5000;

let valorSomado = 0;

let listaDeSomas = [];

let total = document.getElementById('valor-total');


adicionar();

function adicionar(){

    let produtos = document.getElementById('produto');
    let produtoSelecionado = produtos.value;
    
    let quantidade = parseInt(document.getElementById('quantidade').value);
    
    let carrinho = document.getElementById('lista-produtos');

    if (produtoSelecionado == 'Fone de ouvido - R$100'){
        let valorTotalDoProduto = foneDeOuvido * quantidade;
        listaDeSomas.push(valorTotalDoProduto);
        atualizarValorTotal()
        let novoItem1 = document.createElement('li');
        carrinho.innerHTML = '';
        novoItem1.textContent = (`${quantidade}x Fone de ouvido R$${valorTotalDoProduto}`);
        carrinho.appendChild(novoItem1);
    
    } else if (produtoSelecionado == ('Celular - R$1400')){
        valorTotalDoProduto = celular * quantidade;
        listaDeSomas.push(valorTotalDoProduto);
        atualizarValorTotal()
        let novoItem2 = document.createElement('li');
        novoItem2.textContent = (`${quantidade}x Celular R$${valorTotalDoProduto}`);
        carrinho.appendChild(novoItem2);
        
    } else if (produtoSelecionado == ('Oculus VR - R$5000')){
        valorTotalDoProduto = oculosVr * quantidade;
        listaDeSomas.push(valorTotalDoProduto);
        atualizarValorTotal()
        let novoItem3 = document.createElement('li');
        novoItem3.textContent = (`${quantidade}x Óculos VR R$${valorTotalDoProduto}`);
        carrinho.appendChild(novoItem3);

}
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