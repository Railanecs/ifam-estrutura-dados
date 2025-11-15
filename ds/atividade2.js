/* Pergunte as horas (somente as horas). Se a hora estiver ate as 11
 escreva a hora e insira AM.
 2 Se a hora informada for maior que 12, converta para sistema de horas
 ate 12 e escreva PM. Se a hora for igual a 12 escreva meio-dia e se
 for igual a 00 escreva meia-noite */
  let horas = parseInt(prompt("Informe as horas"))
  let pm = horas-12
  if (horas >=1 && horas <=11){
    alert (`Horário: ${horas} AM`)
  }
  else if (horas > 12 && horas <24){
    alert (`Horário : ${pm} PM `)
  }
  else if (horas == 12){
    alert (`Meio-dia`)
  }
  else if (horas == 0){
    alert (`Meia-noite`)
  }
  else 
  { alert (`Hora Inválida`)}