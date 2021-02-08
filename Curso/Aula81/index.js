// Metodos estaticos

class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    };
    // Método de instância
    aumentarVolume(){
        this.volume += 2;
    }

    diminuirVolume(){
        this.volume -= 2;
    }
    // Método estático
    static trocaCanal() {
        console.log('Trocando de canal');
    }
};

const controle = new ControleRemoto('LG');
console.log(controle);
controle.aumentarVolume();
controle.aumentarVolume();
console.log(controle);
// controle.trocaCanal(); // vai gerar um erro, método static só pode ser acessado pela classe

ControleRemoto.trocaCanal();