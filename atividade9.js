let altura = parseFloat(prompt("Informe a sua altura em metros"))
let sexo = prompt ("Informe seu seu sexo (f ou m)")
let peso

if (sexo=="f"){
    peso = (62.1*altura)-44.7
}
else{
    peso = (72.7*altura)-58
}
alert (`Seu peso ideal é: ${peso.toFixed(2)}`)