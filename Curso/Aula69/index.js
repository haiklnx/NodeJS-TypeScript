//defineProperty -> getter e setters
function Produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;

    //                    objeto   atributo    definições     
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, // reconfigurar a chave
        get: function(){return estoque},
        set: function(valor){
            if (typeof valor !== 'number') throw new TypeError('Only numbers...');
            estoque = valor;
        }
    });

};

const p1 = new Produto('Meia', 3, 12);
// console.log(p1);
p1.estoque = 222;
console.log(p1.estoque);