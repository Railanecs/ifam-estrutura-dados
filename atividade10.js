let peso = parseFloat(prompt("Digite seu peso em kg"))
let altura = parseFloat(prompt("Digite a sua altura"))
let imc = peso/(altura*altura)

if (imc<18.5){
condicao = "Abaixo do peso"
}
else if (imc>=18.5 && imc < 25){
    condicao = "Peso normal"
}
else if (imc>=25 && imc < 30){
    condicao = "Acima do peso"
}
else {
    condicao = "Obeso"
}
alert (`IMC: ${imc.toFixed(2)}\nCondição: ${condicao}`)