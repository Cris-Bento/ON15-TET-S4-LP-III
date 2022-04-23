let clienteLilit = [
    {produto: 'Bolsa pequena', valor: 49.0}, 
    {produto: 'Cinto preto', valor: 22.0}, 
    {produto: 'Jaqueta Jeans', valor: 300.0}, 
    {produto: 'Calça preta', valor: 100.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}, 
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}, 
    {produto: 'meia calça transparente', valor: 30.0}]

let clienteCris = [
    {produto: 'Vestido preto', valor: 279.0},
    {produto: 'Jaqueta de couro', valor: 350.0},
    {produto: 'Camiseta branca', valor: 49.0},
    {produto: 'Blaser forrado off white', valor: 199.0},
    {produto: 'Scarpin nude 37', valor: 125.0}]

let clienteSilvana = [
    {produto: 'Jaqueta sarja branca', valor: 145.0},
    {produto: 'Camiseta vermelha', valor: 34.0},
    {produto: 'Regata estampada', valor: 29.0},
    {produto: 'Calça jeans', valor: 98.0},
    {produto: 'Tênis All Star 37', valor: 289.0},
    {produto: 'Sandália salto médio 37', valor: 78.0},
    {produto: 'Bolsa tiracolo caramelo', valor: 120.0},
    {produto: 'Meias de lã branca', valor: 15.0}]    
            

let valorTotal = [] 
let descontoAplicado = [] 

function calcularDesconto(valor) {
    if (valor >= 200.0) {
        descontoAplicado.push(valor * 0.5)
    } else if (valor >= 100.0) {
        descontoAplicado.push(valor * 0.2)
    } else if (valor >= 80.0) {
        descontoAplicado.push(valor * 0.1)
    } else if (valor >= 50.0) {
        descontoAplicado.push(valor * 0.05)
    } 
}

function carrinhoDeCompras(produtosDaCliente) {

    let quantidadeDeItens = produtosDaCliente.length

    produtosDaCliente.forEach(item => {
        valorTotal.push(item.valor)
        calcularDesconto(item.valor)
    })

    valorTotal = valorTotal.reduce((acumulador, atual) => acumulador + atual)
    descontoAplicado = descontoAplicado.reduce((acumulador, atual) => acumulador + atual)
    let valorFinal = valorTotal - descontoAplicado
    let dataDaCompra = new Date()

    let cupomFiscal = {
        "Valor Total": `R$${valorTotal.toFixed(2).replace('.', ',')}`,
        "Desconto Aplicado": `R$${descontoAplicado.toFixed(2).replace('.', ',')}`,
        "Valor Final": `R$${valorFinal.toFixed(2).replace('.', ',')}`,
        "Data de Compra": dataDaCompra.toLocaleDateString('pt-BR', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        })
    }

    if(quantidadeDeItens > 10 || valorFinal > 800.0) {
        return console.table({
            ...cupomFiscal,
            "Bônus": 'Parabéns! Você ganhou um voucher de desconto no valor de R$50,00 para a sua próxima compra!'
        })
    } else {
        return console.table(notaFiscal)
    }
}

carrinhoDeCompras(clienteLilit)
carrinhoDeCompras(clienteCris)
carrinhoDeCompras(clienteSilvana)