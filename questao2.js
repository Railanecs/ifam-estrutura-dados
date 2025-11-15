let nota1= parseFloat(prompt("informe a primeira nota"));
let nota2= parseFloat(prompt("Informe a segunda nota"));
let nota3= parseFloat(prompt("informe a terceira nota"));
function calcularMedia(nota1, nota2, nota3){
    return (nota1 + nota2 + nota3)/3;
}
media = calcularMedia(nota1, nota2, nota3)
alert (`Média: ${media.toFixed(1)}`)

function verificarAprovacao (nota1, nota2, nota3) {
    media = calcularMedia(nota1, nota2, nota3);
    if (media >=7){
        return "Aprovado" }
        else {
            return "Reprovado"
        }
    }
resultado = verificarAprovacao (nota1, nota2, nota3)
alert (`${resultado}`)
