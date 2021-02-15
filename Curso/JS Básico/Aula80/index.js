// Herança com classe

class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} já está ligado!`);
            return;
        }
        this.ligado = true;
        console.log('Ligado!')
    }

    desligar () {
        if(!this.ligado){
            console.log(`${this.nome} já foi desligado!`);
            return;
        }
        this.ligado = false;
        console.log('Desligado!')
    }
}

// const dispotivo = new DispositivoEletronico('Lâmpada');
class Smartphone extends DispositivoEletronico {
    constructor(nome,cor,modelo){
        //sempre que tiver um constructor na classe pai o 
        // metodo super() devera ser chamado no constructor do filho com os parametros
        super(nome); // Executa o construtor da classe pai DispositivoEletronico

        this.cor = cor;
        this.modelo = modelo;
    };
};

const s1 = new Smartphone('Moto', 'preto', 'G9');
console.log(s1);
s1.desligar();
s1.ligar();