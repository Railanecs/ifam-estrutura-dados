let preco = parseFloat(prompt("Digite o preço normal da etiqueta do produto"))
let codigo = parseInt(prompt("Digite o código condição de pagamento"))
let valorFinal

if (pagamento = 1){
    valorFinal = preco - (preco * 0.1) 
}

else if (pagamento = 2){
    valorFinal = preco-(preco*0.15) 
}
else if (pagamento = 3) {
    valorFinal = preco/2
}
else {
    valorFinal = preco - (preco*0.1) /2
}
alert (`Preço de etiqueta: R$ ${preco}\n + Condição de pagamento: ${codigo} \n + Valor final a pagar: R$ ${valorFinal}`)