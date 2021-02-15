/*
&& -> false && true retorna false
|| -> false && true retorne true. Só retorna false caso todas
as expressões sejam false

FALSY
*false
0
'' "" ``
null / undefined
NaN
*/

// console.log('gabriel' && true && 'iara');
// console.log('gabriel' && NaN && 'iara');

// function falar(){
//     return 'oi';
// };

// const executar = true;

// console.log(executar && falar());

console.log(0 || false || null || 'gabriel' || true);