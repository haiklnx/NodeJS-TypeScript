let n1 = 9.53578;

// arrendoda o número para baixo
let n2 = Math.floor(n1);

// arredonda o número para cima
let n3 = Math.ceil(n1);

// arredonda o número para o mais próximo, caso n1 === 9.43 retornaria 9
let n4 = Math.round(n1);

console.log(n2);
console.log(n3);
console.log(n4);

// retorna o maior valor
console.log(Math.max(1,2,3,4,15,64,3,2,6,8,9));

// retorna o menor valor
console.log(Math.min(77,2,3,4,15,64,3,2,6,8,9));

// gera uma valor aleátorio entre 0 e 1
console.log(Math.random());

// gera uma valor aleátorio entre 1 e 3
const aleatorio = Math.round(Math.random() * (1 - 3) + 3);
console.log(aleatorio);

console.log(10 / 0); // true && não gera erro a divisão por 0 em JavaScript
