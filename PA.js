let a1 = parseInt(prompt("Informe o primeiro termo"))
let n = parseInt(prompt("Informe o segundo termo"))
let r = parseInt(prompt("Informe a razão entre os números"))
let an = a1+(n-1)*r
while (a1<=an){
    document.writeln (a1+`,`) 
    a1+=r
}