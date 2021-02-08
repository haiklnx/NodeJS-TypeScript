//getter e setter em classe

const _velocidade = Symbol('velocidade');// variavel privada para evitar acesso de forma indevida fora da classe
class Carro {
    constructor(nome, velocidade) {
        this.nome = nome;
        this[_velocidade] = 0;
    };
    
    //Vai retornar o valor atribuido a variavel.
    get velocidade() { 
        return this[_velocidade];
    }

    // Vai definir um valor para a variavel.
    set velocidade(value) {
        if(typeof value !== 'number') return;
        if(value > 100 || value < 0) return;
        this[_velocidade] = value;
    }

    acelerar() {
        if(this[_velocidade] >= 100) return; 
        this[_velocidade]++;
    };

    brekar() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    };
}

const c1 = new Carro('fusca');

for (let i = 0; i <= 101; i++){
    c1.acelerar();
}
// c1.velocidade = '99';
console.log(c1.velocidade);
