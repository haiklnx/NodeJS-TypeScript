//Revisando objetos

// Literal
const pessoa = {
    nome: 'gabriel',
    sobrenome: 'ferreira',
    idade: 29,
    falarNome:  function(){
        return `Ola, meu nome é ${this.nome}`;
    },
    getDataNasc: function() {
        const dataAtual = new Date();
        return dataAtual.getFullYear() - this.idade;
    },
};

delete pessoa.sobrenome;
// console.log(pessoa.nome);
// console.log(pessoa['sobrenome']); // pode ser usado dinamicamente 
console.log(pessoa);
console.log(pessoa.falarNome());
console.log(pessoa.getDataNasc());

for (let chave in pessoa) {
    console.log(`chave [${chave}] -> valor [${pessoa[chave]}]`);
};





// // Construtor

// const pessoa2 = new Object;
// pessoa2.nome = 'wolf';
// pessoa2.idade = 999;
// console.log(pessoa2.nome);
// console.log(pessoa2['idade']);
