let n = parseInt(prompt("Quantos números deseja inserir?"));
    let vetor = [];
    let pares = 0;
    for (let i = 0; i < n; i++) {
        vetor[i] = parseInt(prompt(`Digite o número ${i + 1}:`));
        if (vetor[i] % 2 === 0) pares++;
    }
    document.writeln(`Vetores: ${vetor} <br> Quantidade de números pares: ${pares}`);
