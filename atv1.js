let n = parseInt(prompt("Quantidade de números"))
const vetor = []
for (let i = 0; i<n; i++){
    vetor[i] = parseInt(prompt(`Informe o ${i+1}° número`))
    document.writeln(vetor[i])
}