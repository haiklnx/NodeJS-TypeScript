// for para objetos
const pessoa = {
    nome: 'gabriel',
    idade: 29,
};

for (let key in pessoa){
    console.log(key, pessoa[key]);
} 

// for classico - Geralmente com iteraveis (array ou string)
// for in - Retorno o indice ou chave string (array ou objetos)
// for of - Retorna o valor em si iteraveis (arrays ou string)

// const nomes = ['gabriel', 'iara', 'maria'];

// for (let i = 0; i < nomes.length; i++){
//     console.log(i);
// }
// console.log('---')
// for (let i in nomes){ // for in usado quando precisa do indice também
//     console.log(nomes[i])
// }

// console.log('---')

// for (let valor of nomes){ // for of usado quando quer apenas o valor
//     console.log(valor)    // não serve para objetos
// }

// console.log('---')

// nomes.forEach((valor, indice, arrayCompleto) => {
//     console.log(valor, indice, arrayCompleto)
// })