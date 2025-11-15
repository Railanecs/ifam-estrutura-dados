let n = parseInt(prompt("Quantos números?"))
    let vetor = [], soma = 0
    for (let i = 0; i < n; i++) {
        vetor[i] = parseInt(prompt(`Número ${i + 1}:`))
        soma += vetor[i];
    }
    if (soma > 100) {
        alert(`Soma = ${soma}`)
    } else {
        alert("A soma não é maior que 100")
    }
