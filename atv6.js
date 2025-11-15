let n = parseInt(prompt("Quantos itens?"))
    let itens = [], valores = [], total = 0
    for (let i = 0; i < n; i++) {
        itens[i] = prompt(`Nome do item ${i + 1}:`);
        valores[i] = parseFloat(prompt(`Valor do item ${i + 1}:`))
        total += valores[i];
    }
    document.writeln("Lista de produtos")

    for (let i = 0; i < n; i++) {
        document.writeln(`<br>${itens[i]}: R$ ${valores[i].toFixed(2)}`)
    }
    document.writeln(`<br>Total: R$ ${total.toFixed(2)}`)