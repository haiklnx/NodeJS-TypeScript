//ex1 Retorne a soma do dobro de todos os pares
//-> Filtar pares
//-> Dobrar valores
//-> reduzir (somar tudo)

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

const ex1 = numeros
.filter(valor => valor % 2 === 0) //pares [ 50, 80, 2, 8, 22 ]
.map(valor => valor * 2) //dobro [ 100, 160, 4, 16, 44 ]
.reduce((ac,valor) => ac += valor); //total 324

console.log(ex1);