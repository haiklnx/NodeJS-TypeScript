// Herança

// camisa = Cor | caneca = material 
// produto -> desconto, aumento 

function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(value){
    this.preco += value;
}

Produto.prototype.desconto = function(value){
    this.preco -= value;
}
// ----------------------------
function Camisa(nome,preco,cor){
    Produto.call(this, nome,preco);
    this.cor = cor;
};
Camisa.prototype = Object.create(Produto.prototype);
Camisa.prototype.constructor = Camisa;

const camisa = new Camisa('regata', 10, 'roxo');
camisa.aumento(10);
console.log(camisa);
// ----------------------------
function Caneca(nome,preco,material, estoque){
    Produto.call(this, nome,preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        get: function(){
            return estoque;
        },
        set: function(quantidade){
            estoque = quantidade;
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;
//sobreescreve o método aumento inicial que foi criando para o produto
Caneca.prototype.aumento = function(percentual){
    this.preco += (this.preco * (percentual / 100));
}


const caneca = new Caneca('caneca de café',3, 'vidro', 8);
caneca.aumento(100);
console.log(caneca.estoque);
caneca.estoque = 15;
console.log(caneca.estoque);
console.log(caneca);