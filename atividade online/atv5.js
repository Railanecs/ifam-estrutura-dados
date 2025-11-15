    let n = parseInt(prompt("Digite a quantidade de pessoas"));
    let idades = [], soma = 0;
    for (let i = 0; i < n; i++) {
    idades[i] = parseInt(prompt(`Idade da pessoa ${i + 1}:`));
        soma += idades[i];
    }
    let media = soma / n;
    alert(`Média das idades: ${media.toFixed(1)}`);