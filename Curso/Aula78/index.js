//Classe

class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    };
    // Não precisa atrelar ao prototype(Pessoa.prototype.falar = () => {}) como é feito na função construtora!
    falar(){console.log(`${this.nome} está falando`)}
    comer(){console.log(`${this.nome} está comendo`)}
    beber(){console.log(`${this.nome} está bebendo`)}
};

const p1 = new Pessoa('gabriel', 'ferreira');
const p2 = new Pessoa('wolf', 'ferreira');
console.log(p1);
console.log(p2);

p1.falar();
p2.falar();
p1.beber();
p2.beber();
