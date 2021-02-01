// valor por referencia
//       indice    0       1       2
const nomes = ['gabriel', 'iara', 'juruna'];

nomes[2] = 'wolf';
delete nomes[0];
console.log(nomes);

// funciona pra tudo (string,int,boolean...), porem é pouco utilizado
const array = new Array('1','2','3');
console.log(array)

// const a = nomes *Nao faz a copia // vão apontar pro mesmo lugar na memória

const l1 = [1,2,3];
const l2 = [...l1];
const l3 = [1,2,3,4,5,6,7,8,9];
const l4 = l3.slice(0,3); // usado para terminado incio e fim dos indices do array que deseja
const nome = 'Gabriel Ferreira Leite Monteiro';
const nomeEmArray = nome.split(' ');
const unirArray = nomeEmArray.join(' ');
l2.pop(); // remove do fim
l1.shift(); // remove do inicio e reorganiza os indíces
l1.push('gabriel'); //adiciona elemento no fim do array
l2.unshift('inicio'); // adiciona elemento no inicio do do array e reorganiza os indíces
console.log('l1 -> ' + l1);
console.log('l2 -> ' + l2);
console.log(l4);
console.log(nomeEmArray);
console.log(unirArray);

