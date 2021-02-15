// escreve uma função que recebe 2 números e retorne o maior deles.

function maior(num1, num2){
    return num1 > num2 ? num1 : num2;
}
const maior2 = (x , y) => x > y ? x : y;

console.log(maior(12,2));
console.log(maior2(7,23));