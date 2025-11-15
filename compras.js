let carrinho = parseInt(prompt("Informe a quantidade de itens: "))
let total = 0
document.writeln(`<br>Varejão da Ana</b><br>`)
for (let i = 1; i <= carrinho; i++) {
    var item = parseFloat(prompt("Informe o valor: "))
    document.writeln(`Item ${i}: R$ ${item}<br>`)
    total+=item  
}
document.writeln(`Valor total de compras: R$ ${total}`)