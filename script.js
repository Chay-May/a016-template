// escreva seu código abaixo 👇🏻

//Exercício 1 - Laços + laços / Laços + condições

// const resultado1 = [2,4,6,8]
// const resultado2 = [1,3,5,7]
// const resultado3 = [0,8,10,12]
// const resultado4 = [9,11,13,15]

// const megaSena = [resultado1, resultado2, resultado3, resultado4]

// //console.log (megaSena)

// if (megaSena.length === 4){

//   for (let i = 0; i < megaSena.length; i++) /* parado em resultado 1 */{
//     console.log(megaSena[i])
//     for (let z = 0; z < megaSena[i].length; z++) /* parado em resultado 0 */{
//       console.log(`Sorteio ${i}: ${megaSena[i]}`)
//   }
// }
// } else {
//   console.log("É necessário alterar o número de ítens do Array")
// }

//EXERCÍCIO 2 - FOR IN

// if (megaSena.length === 4){
//       // Key "in" value - FOR IN
  
//       for (let i in megaSena) {

//     for (let z = 0; z < megaSena[i].length; z++) {
//       console.log(`Sorteio ${Number(i)+1}: ${megaSena[i]}`)
//   }
// }
// } else {
//   console.log("É necessário alterar o número de ítens do Array")
// }

//EXERCÍCIO 3 - FOR OF

// if (megaSena.length === 4){
//     // Key "in" value - FOR IN
//   for (let i in megaSena) {

//        //Elemento do array
//     for (let z of megaSena[i]) {
//       console.log(`Sorteio ${i}: ${megaSena[i]}`)
// }
// }
// } else {
// console.log("É necessário alterar o número de ítens do Array")
// }

// //Exemplo extra:

// const obj = {
//   nome: 'Chay',
//   email: "chay@chay",
//   senha: 456
// }

// const array = [1,2,3]

// // key in array
// for( let i in obj){
//     console.log(i) // IMPRIME OS OBJETOS: NOME, EMAIL E SENHA
// }

// for(let i in array){
//   console.log(i) // IMPRIME O ÍNDICE DO ARRAY
// }

// for( let i of array){
//   console.log(i) // IMPRIME OS ELEMENTOS 'VALORES' DO ARRAY
// }
// console.log(array)

//EXERCÍCIO DE FICAÇÃO:
const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

for (let i = 0; i < filmes.length; i++){

  console.log(`Filme ${filmes[i].titulo}, ano de lançamento ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`);

    for (let z = 0; z < filmes[i].elenco.length; z++){
      console.log(`Tem no elenco: ${filmes[i].elenco}`)
    }
}


 for (let i in filmes){
   console.log(`${filmes[i].titulo}, de ${filmes[i].ano}, ${filmes[i].diretor}`)

  for (let z of filmes){
     console.log(`Tem no elenco: ${z.elenco}`)
  }
 }