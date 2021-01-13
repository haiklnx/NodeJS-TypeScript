let s = 'o rato roeu a ropa do rei de roma.';

console.log(s.indexOf('t'));
console.log(s.lastIndexOf('m',3)); // busca o index de tras para frente.

console.log(s.length);
console.log(s.match(/[a-z]/g));
console.log(s.search(/x/));
console.log(s.replace('um', 'substituição'));

console.log(s.slice(4,6));
console.log(s.split(' '));