// Padrao IEEE 754 2008 para precisão de números
let n1 = 15;
let n2 = 2.5;
let n3 = 'ola' + 3;

let f1 = 0.7;
f1 += 0.1; // 0.8
f1 += 0.1; // 0.9
f1 += 0.1; // 1.0

console.log('Verificação de numeros')
console.log(n1.toString(2)); // retora o valor binário
console.log(n1.toFixed(2)); // arredondamento com duas casa decimais depois da ','
console.log(Number.isInteger(n1)); // verificar se é um inteiro
console.log(Number.isInteger(n2)); 
console.log(Number.isNaN(n3)); // verificar se é um NaN


console.log('para realiazar contas com precisão em floats')
// para resolver problema de números flutuantes e não gerar diferença nas contas
console.log(f1)
console.log(Number.isInteger(f1));
f1 = Number.parseInt(f1);
console.log(Number.isInteger(f1));