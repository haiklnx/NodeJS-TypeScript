let s = 'o rato roeu a ropa do rei de roma.';

// indexOf retorna o primeiro indice da letra na string
console.log(s.indexOf('t'));
console.log(s.lastIndexOf('m',3)); // busca o index de tras para frente.

// mostra o tamanho da string
console.log(s.length);

// busca na string utilizando expressão regular
console.log('regex: ' + s.match(/[a-z]/g));

// busca a primeira ocorrência na pesquisa de uma string
console.log(s.search(/r/));

// substitui uma string por outra
console.log(s.replace('roma.', 'substituição'));

// seleciona quais caracteres pegar de uma string determinadas pelo inicio e fim do indice
console.log(s.slice(4,6));

// separa uma string em um array pelo delimitador
console.log(s.split(' '));