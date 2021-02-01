// Método Splice
//               -5        -4       -3      -2        -1
//                0         1        2       3         4
const nomes = ['gabriel', 'iara', 'maria', 'joao', 'rebeca'];

// nomes.splice(índice, delete, add)

//pop

console.log(nomes)
console.log('-------------');

//const removidos = nomes.splice(3,0,'Novo elemento no índice informado');
//pop
const removidos = nomes.splice(-1,1);
console.log(removidos);
console.log('-------------');
console.log(nomes);
console.log('-------------');
//substituição
nomes.splice(0,2,'El 1', 'El 2');
console.log(nomes)
console.log('-------------');
//push
nomes.splice(nomes.length, 0, 'estrela', 'wolf', 'unlimited');
console.log(nomes)
//unshift
console.log('-------------');
nomes.splice(0, 0, 'Start!');
console.log(nomes);