const frase1 = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"'

const fraseTroca = frase1.replaceAll("verde","rosa").replaceAll("azul","laranja")
const temVerde = fraseTroca.includes("verde")
const temLaranja = fraseTroca.includes("laranja")



console.log(fraseTroca)
console.log(`A frase acima contém a palavra "verde"? ${temVerde}`)
console.log(`A frase acima contém a palavra "laranja"? ${temLaranja}`)

