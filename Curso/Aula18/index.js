const pessoa1 = {
    nome: 'Gabriel',
    idade: 29,

    fala(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    },

    incrementaIdade(){
        this.idade++;
    }
}


pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();


// function criarPessoa(nome,sobrenome,idade){
//     return {
//         nome,
//         sobrenome,
//         idade,
//     };
// };

// const pessoa1 = criarPessoa('Gabriel','Ferreira',29);
// const pessoa2 = criarPessoa('Maria','hue',17);
// const pessoa3 = criarPessoa('Iara','juruna',31);
// const pessoa4 = criarPessoa('zé','tiktok',44);
// const pessoa5 = criarPessoa('picles','raul',73);


// console.log(pessoa1);
// console.log(pessoa2);
// console.log(pessoa3);
// console.log(pessoa4);
// console.log(pessoa5);