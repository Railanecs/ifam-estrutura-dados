let n = parseInt(prompt("Quantas disciplinas?"));
    let notas = [], soma = 0;
    for (let i = 0; i < n; i++) {
        notas[i] = parseFloat(prompt(`Nota da disciplina ${i + 1}:`));
        soma += notas[i];
    }
    let media = soma / n;
   alert (`Média: ${media.toFixed(1)}`);
    if (media >= 6) {
        alert("Aprovado!");
    } else {
        alert("Reprovado!");
}
