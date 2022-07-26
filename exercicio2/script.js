const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const minhaString1 = minhaString.trim()
const quantEsp = minhaString.length
const quantEsp1 = minhaString1.length

console.log(`A frase \" ${minhaString} \" possui ${quantEsp} caracteres \nJá a frase \" ${minhaString1} \" possui ${quantEsp1} caracteres`)

const semTracos = minhaString1.replace("________", "sticioso")

console.log(semTracos)