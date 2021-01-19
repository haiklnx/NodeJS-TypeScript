// atribuição via desestruturação

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [n1, n2, ...resto] = numeros;
const [x1, , x2, , x3] = numeros;

console.log(n1, n2);
console.log(x1, x2, x3);
console.log(resto);


console.log('----')

const l1 = [[1,2,3],[4,5,6],[7,8,9]];

console.log(l1[1][1]);

const [, ,[, ,nove]] = l1;
console.log(nove)
