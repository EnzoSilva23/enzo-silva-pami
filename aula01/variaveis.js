// comentario
// javascript é uma linguagem fracamente tipada 
var texto = "ola" // aspas duplas contem sempre uma string
let texto2 = 'mundo';  // ponto e virgula é opcinal
const texto3 = "!"  // aspas simples também serve para string!

console.log(texto, texto2, texto3)
// concatena com espaço, enquanto o sinal de + deixa tudo junto 

texto = 'Hello'
let msg = `${texto} ${texto2} ${texto3}`
// use a crase junto de ${} para contatenar
//também 
console.log(msg)

// texto3 = "teste"
// o exemplo acima mostra que é impossivel reatribuir um novo valor
// a uma constate

let numero = 5
console.log(typeof numero) // typeof usado para informar o tipo da variavel se é string, numero ou etc


let obj = {nome: "Enzo ", idade: 17}
console.log(obj)
console.log(
    "nome da pessoa: ", obj.nome, 
    "| idade do meliante: ", obj.idade)
console.log(typeof obj)
// objeto é sempre um elemento chave/valor

let arr = ['Enzo', 'C.', 'G.', 'Silva']
console.log(arr[0], arr[3])
console.log(typeof arr)
