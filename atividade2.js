let nome = prompt("Digite seu nome")
let sexo = prompt ("Digite o sexo (F ou M)")
let estadoCivil = prompt ("Informe seu estado civil")

if (sexo=="F" && estadoCivil =="casada"){
    let tempoCasada = parseInt(prompt ("Informe seu tempo de casada em anos"))
     
    alert (`Nome: ${nome} \n Sexo: ${sexo}\n Estado civil: ${estadoCivil}\n Anos casada: ${tempoCasada}`)
}
else {
    alert (`Nome: ${nome} \n Sexo: ${sexo}\n Estado civil: ${estadoCivil}`)
}
