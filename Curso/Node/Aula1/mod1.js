// const nome = 'Gabriel';
// const sobreNome = 'Ferreira';
// const falaNome = () => nome + ' ' + sobreNome;
// //module.exports.nome = nome;
// //this.qualquerNome = sobreNome;
// exports.nome = nome;
// exports.sobreNome = sobreNome;
// exports.falaNome = falaNome;

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;