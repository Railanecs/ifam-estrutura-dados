let num = parseInt(prompt("Quantidade de números?"));
    let vetor = [], impares = 0;
    for (let i = 0; i < num; i++) {
        vetor[i] = parseInt(prompt(`Número ${i + 1}:`));
        if (i % 2 == 1) {  
            impares += vetor[i];
        }
    }
    document.writeln("Vetores: ", vetor);
    document.writeln("<br>Soma das posições ímpares:", impares);
