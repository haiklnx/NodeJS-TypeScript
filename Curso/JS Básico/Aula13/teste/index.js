// exercícios utilizandos os metodos do arquivo da aula13 index.js

const nome = window.prompt('Digite seu nome completo: ');
const letras = nome.length;
const segundaLetra = nome.charAt(1);
const indexLetraA = nome.indexOf('a');
const ultimaLetraIndex = nome.lastIndexOf('e');
const ultimasTresLetras = nome.slice(-3);
const palavrasNome = nome.split(' ');
const nomeMaiusculo = nome.toUpperCase();
const nomeMinusculo = nome.toLowerCase();

window.document.body.innerHTML += `O seu nome é: ${nome} <br />`;
window.document.body.innerHTML += `Seu nome tem: ${letras} letras. <br />`;
window.document.body.innerHTML += `A segunda letra do seu nome é: "${segundaLetra}" <br />`;
window.document.body.innerHTML += `Qual o primeiro índice da letra "a" no seu nome? : Index: ${indexLetraA} <br />`;
window.document.body.innerHTML += `Qual o último índice da letra "e" no seu nome: Index: ${ultimaLetraIndex} <br />`;
window.document.body.innerHTML += `As 3 útlimas letras do seu nome são : ${ultimasTresLetras} <br />`;
window.document.body.innerHTML += `As palavras do seu nome são: ${palavrasNome} <br />`;
window.document.body.innerHTML += `Seu nome com letras maiúsculas: ${nomeMaiusculo} <br />`;
window.document.body.innerHTML += `Seu nome com letras minúsculas: ${nomeMinusculo} <br />`;