// factory function

function criaPessoa(nome,sobrenome ,idade, altura, peso){
    return {
        nome,
        sobrenome,
        idade,
        altura,
        peso,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        // setter adiciona um valor
        set nomeCompleto(value){
            value = value.split(' ');
            this.nome = value.shift();
            this.sobrenome = value.join(' ');           
        },  

        fala: (assunto = 'SOBRE NADA(default value)') => {
            return `Prazer meu nome é ${nome}. Falando sobre ${assunto}`
        },

        imc(){
            const imc = this.peso / (this.altura ** 2);
            return imc.toFixed(2);
        },
        //getter pega o resultado
        get imc2(){ 
            const imc = this.peso / (this.altura ** 2);
            return imc.toFixed(2);
        },

    };
};

const p1 = criaPessoa('gabriel','ferreira',29,1.79,110);
console.log(p1.nomeCompleto);
p1.nomeCompleto = 'wolf do mato';
// console.log(p1.nome);
// console.log(p1.sobrenome);
console.log(p1.nomeCompleto);
console.log(p1.fala());
// console.log(p1.imc());
console.log(p1.imc2);

