// funcão construtora -> Pessoa (new)
function Pessoa (nome, sobrenome){
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.metodo = () => {
        console.log(`Eu sou ${this.nome}`);
    };
}

const p1 = new Pessoa('Gabriel','Ferreira');
console.log(p1);
p1.metodo();
