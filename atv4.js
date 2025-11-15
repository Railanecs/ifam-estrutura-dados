const A = [], B = [], C = []
 alert ("Preencha o vetor A")
for (let i = 0 ; i < 4; i++){
    A[i] = parseInt(prompt())
} alert ("Preencha o vetor B")
for (let i = 0; i < 4; i++){
    B[i] = parseInt(prompt())
}
for (let i = 0; i < 4; i++){
    C[i] = A[i]*B[i]
} alert("Produto dos vetores")
for (let i = 0; i < 4; i++){
    document.writeln(C[i])
}