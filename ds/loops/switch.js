let n1 = parseInt(prompt("n1"))
let n2 = parseInt(prompt("n2"))
function multiplicacao(n1, n2){
    return n1*n2
}
function divisao(n1, n2){
    return n1/n2
}
function subtracao (n1,n2){
    return n1-n2
}
function adicao(n1,n2){
    return n1+n2
}
let operacao = prompt("Operações")

switch(operacao){
    case '1':
       document.writeln (multiplicacao(n1, n2));break;
        case'2':
        document.writeln (divisao(n1, n2));break;
        case '3':
        document.writeln (subtracao(n1, n2));break;
        case '4':
            adicao();break;
            default:
                alert ("opção inválida")

}
/*let onibus = []
onibus.p*/