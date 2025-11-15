let dormiu = parseInt(prompt("Que horas você dormiu?"))
let acordou = parseInt(prompt("Que horas você acordou?"))
var sono = 0
if (dormiu>12 && acordou<12){
    sono = 24-(dormiu-acordou)
    alert (`${sono} horas de sono`)
}
else if (dormiu>12 || acordou>12){
    sono = (24-dormiu)+acordou
alert (`${sono} horas de sono`)
}
else {
    sono = acordou-dormiu
    alert (`${sono} horas de sono`)
}
let i = 1
while (i<=sono){
    alert(`${i} hora(s) dormindo`)
    i++
}