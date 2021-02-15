// Reduce


//ex1 Some todos números com reduce
//ex2 Retorne um array com os pares (filter é o melhor para ser usado nesse caso)
//ex3 Retorne um array com o dobro dos valores (map é o melhor para ser usado nesse caso)
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const ex1 = numeros.reduce((acumulador, valor, indice,array) => {
    acumulador += valor;
    return acumulador; // Sempre vai retornar, caso contrario NaN
}, 0); // valor inicial do acumulador
console.log(ex1);

const ex2 = numeros.reduce((acumulador,valor) => {
    if (valor % 2 === 0) acumulador.push(valor)
    return acumulador;
},[]); // valor inicial do acumulador
console.log(ex2);

const ex3 = numeros.reduce((acumulador,valor) => {
    acumulador.push(valor * 2);
    return acumulador;
},[]); // valor inicial do acumulador
console.log(ex3);

//ex4 Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 76},
    {nome: 'Wallace', idade: 47},
];

const ex4 = pessoas.reduce((acumulador,valor) => {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(ex4);