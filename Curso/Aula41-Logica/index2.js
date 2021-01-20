/* escreva uma função chamada ePaisagem que
que recebe dois argumentos, lagura e altura
de uma imgagem (number);
Retorne true se a imagem estiver no modo paisagem
*/


// const ePaisagem = (largura, altura) => largura > altura ? true : false;
const ePaisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(1920,1080));
console.log(ePaisagem(480,780));