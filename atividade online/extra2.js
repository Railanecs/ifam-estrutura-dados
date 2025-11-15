 let n = parseInt(prompt("Tabuada:"));
    let tabuada = [];
    for (let i = 0; i <= 10; i++) {
        tabuada[i] = n * i;
    }
    document.writeln(`Tabuada de ${n}: `, tabuada)
