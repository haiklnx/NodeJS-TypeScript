//para importar algo especifico
/*

*** Esses requires são relativos a arquivos criados pelo DEV.
*** Caso precise de algum modulo instalado basta usar require('pasta do modulo')
** const path = require('path')

//const mod1 = require('./mod1').falaNome; -> falaNome()
// // const mod1 = require('.mod1'); -> mod1.falaNome()
// const { nome, sobreNome, falaNome } = require('./mod1');
// console.log(nome);
// console.log(falaNome());
*/
const { Pessoa } = require('./mod1');
const path = require('path');

const p1 = new Pessoa('gabriel');
console.log(p1);
