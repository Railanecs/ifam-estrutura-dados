let numero = parseInt(prompt("Informe um número: "))
let fatorial = 1
for (let i = numero; i > 1; i--) {
    fatorial *= i;
}
document.writeln(`${numero}! = ${fatorial}`) 