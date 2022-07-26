const usuario = prompt("Qual o seu nome?")
const comidaA = prompt("Qual a sua comida preferida?")
const comidaB = prompt("Além de " + comidaA + " qual sua próxima preferencia?")
const comidaC = prompt(`Obrigado pela sua atenção, você já mencionou ` + comidaA + ` e ` + comidaB + `. Agora para finalizar a sua terceira preferência.`)
const frase = `Estas são as comidas favoritas de ${usuario} \n - ${comidaA} \n - ${comidaB} \n - ${comidaC}`

console.log(frase)
