let termos = prompt("Termos")
let n=0, t1=0, t2=1, i=1
document.writeln("1,")
while (i<=termos-1){
    n = t1 + t2;
    t1 = t2;
    t2 = n
    document.writeln(n  + `,`)
    i++
}