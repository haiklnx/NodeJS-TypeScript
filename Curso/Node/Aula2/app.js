/* 
andando pelas pastas com caminho relativo
'./' vai para frente
'../' volta uma pasta
*/
const path = require('path');
const multiplicacao = require('./mod');

console.log(multiplicacao(2, 3));

console.log(__dirname); // pega o caminho do diretório atual
console.log(__filename);// pega o nome do arquivo atual
// resolve o caminho e ainda pode navegar por eles
console.log(path.resolve(__dirname, '..', '..', 'aula1')); 