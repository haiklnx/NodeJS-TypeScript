// let i = 0;

// while(i <= 10){
//     console.log(i);
//     i++ // caso a variavel de controle não for incrementada
//         // vai ser criado um loop infinito
// }

function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let tentativas = 0;
let rand = random(min, max);
while(rand != 10){
    tentativas++;
    rand = random(min, max);
}
console.log(`tentativas até encontrar o numero 10: ${tentativas}`);

tentativas = 0;
// rand = 5; // descomentar essa linha e comentar a 28 para ter outro resultado.
do {
    tentativas++;
    rand = random(min, max);
} while (rand != 5);
console.log(`tentativas até encontrar o numero 5: ${tentativas}`);


