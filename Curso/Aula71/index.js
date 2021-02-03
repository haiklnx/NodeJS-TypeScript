//Construtora -> molde classe
function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    // a função a baixo sera criada em todos os objetos desta forma, para linkar usar o prototype
    // this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`; 
}
// utilizando o prototype a referencia sera passada por um 'link' sem preciar ser criada a toda nova instancia!
Pessoa.prototype.nomeCompleto = function() {return this.nome + ' ' + this.sobrenome};

// Instancia
// compare os prototypes de pessoa1 e data no console do navegador para ver suas propriedades
// pessoa1 -> pessoa -> object
const pessoa1 = new Pessoa('gabriel', 'ferreira'); //<- Pessoa === função construtora
const data = new Date();
console.dir(pessoa1);
console.dir(data);