const copas = [1959, 1962, 1994, 2002]
var valores, menu
do{
    menu = prompt(`Digite uma opção:\n0. Tamanho\n1. inserir no inicio\n2. remover inicio\n3. inserir final\n4. remover final\n-1. sair`)
    switch(menu){
        case '0':
            document.writeln(copas.length);
            copas.forEach(()=>{
                document.writeln (copas)
            }) ; break;
            case'1':
            valores = parseInt(prompt(`Informe uma copa`)
            document.writeln(`vitória adicionada<br>`); break;
            case'2':
            copas.shift()
            document.writeln ( `Vitória removida<br>`); break
            case'3':
            valores = parseInt(prompt(`Digite uma copa`))
            copas.push(valores); break;
            case '4':
                copas.pop(); break;
                default:
                    document.writeln (`Opção inválida.`)
    }
}
while(menu!='-1')