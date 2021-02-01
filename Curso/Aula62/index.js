// filter -> Filtrar Arrays
// Filter sempre vai retornar um array com a mesma quantidade de elementos ou menor

//Retorne os números maiores que 10
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
// let a = [];
// for (let n of numeros){
//     if (n > 10) a.push(n);
// }
// console.log(a);

// nos parametros do filter ele passa (valor, indice, array)
// filter((valor,indice,array) => {callback})
const filterNumeros = numeros.filter(valor => valor > 10);
console.log(filterNumeros);

//ex1  Retorne as pessoas que tem o nome com 5 letras ou mais
//ex2 Retorne as pessoas com mais de 50 anos
//ex3  Retorne as pessoas cujo o nome termina com a
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const ex1 = pessoas.filter(pessoa => pessoa.nome.length >= 7);
console.log(ex1);

const ex2 = pessoas.filter(pessoa => pessoa.idade > 50);
console.log(ex2);

const ex3 = pessoas.filter(pessoa => pessoa.nome.toLocaleLowerCase().endsWith('a'));
console.log(ex3);
