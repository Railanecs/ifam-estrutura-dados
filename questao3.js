
let preco = parseFloat(prompt("Informe o preço original"));
let desconto = parseFloat(prompt("Informe a porcentagem de desconto"));
let precofinal = calcularDesconto(preco, desconto);

function calcularDesconto (Original, Desconto){
    let valorDesconto = Original*(Desconto / 100);
    return Original-valorDesconto;
}
alert (`Preço final: R$ ${precofinal.toFixed(2)}`);