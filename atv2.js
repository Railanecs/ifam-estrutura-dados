    let n = parseInt(prompt("Quantos números?"));
    let vetor = [];
    for (let i = 0; i < n; i++) {
        vetor[i] = parseInt(prompt(`Digite o número ${i + 1}:`));
    }
    document.writeln ("Ordem inversa: ");
    for (let i = n - 1; i >= 0; i--) {
        document.writeln (vetor[i]);
    }

