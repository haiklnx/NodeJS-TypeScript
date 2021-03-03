const nome = 'gabriel';
const idade = 29;

function soma(x, y) { return x + y };


// formas de exportar
export { nome, soma };
// default só pode ter um por 'módulo'
export default class Pessoa {
    constructor(nome, sobreNome) {
        this.nome = nome;
        this.sobreNome = sobreNome;
    };
};



