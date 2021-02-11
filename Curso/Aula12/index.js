// atribuição de valores para variaveis
let a = 'a'; // b
let b = 'b'; // c
let c = 'c'; // a
let aux;

aux = a;
a = b;
b = c;
c = aux;

// Maneira mais nova de atribuir valores no JS sem criar uma nova variavel
// [a,b,c] = [b,c,a]

console.log(a, b, c);