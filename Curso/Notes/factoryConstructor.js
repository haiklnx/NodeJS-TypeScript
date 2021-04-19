// factory function
function criaPessoa(nome,idade){
    return {
        nome,
        idade,
        get nomeCompleto(){
            return this.nome + ' ferreira';
        },
        get getIdade(){
            return this.idade;
        },
    };
  };
  
  const p1 = criaPessoa('Gabriel', 29);
  console.log(p1.nomeCompleto);
  console.log(p1.getIdade);
  
  // constructor function -> new cria um objeto vazio {} <- this representa o objeto vazio
  function Pessoa(nome,sobrenome){
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.getNomeCompleto = () => `${this.nome} ${this.sobrenome}`;
  
      // Object.freeze(this); // tava o objeto e não permite que seja alterado de forma alguma
  };
  
  const p2 = new Pessoa('wolf', 'haik');
  
  console.log(p2);