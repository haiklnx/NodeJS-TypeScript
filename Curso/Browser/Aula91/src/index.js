// import e export

// vai gerar um erro por tentar redeclarar a variavel com o mesmo nome
// para resolver basta adicionar um apelido utilizando as -> nome as outroNome
//formas de importar
// import { nome as nome2, soma } from './modulo1'
import * as modulo from './modulo1'
// para importar o default -> import qualquernome from './modulo1'
// sempre que importar sem a chaves sera o default a ser importado
import qualquernome from './modulo1';
const nome = 'wolf';

console.log(`nome index -> ${nome}`); // variavel do modulo index
console.log(`nome modulo -> ${modulo.nome}`) // variavel da importação modulo1
console.log(modulo.soma(3, 5));
// utilizando import com default
const p1 = new qualquernome('gabriel', 'ferreira');
console.log(p1);

