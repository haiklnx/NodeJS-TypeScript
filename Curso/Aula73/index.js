// abstraçao -> Produto -> aumento de preço e desconto
//Camisa = cor, lapis = material

function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;

}

Produto.prototype.aumento = function (quantia) {this.preco += quantia};
Produto.prototype.desconto = function (quantia) {this.preco -= quantia};

function Camisa (nome,preco,cor){
    Produto.call(this,nome,preco);
    this.cor = cor;
}

// faz o link dos prototypes e mantem o constructor do objeto Camisa
Camisa.prototype = Object.create(Produto.prototype)
Camisa.prototype.constructor = Camisa

//Altera o método 'aumento' do constructor Produto
Camisa.prototype.aumento = function (value){
    this.preco = this.preco + ((value / 100) * this.preco)
}

const camisa = new Camisa('regata',7.5, 'roxo');
camisa.aumento(10);
console.log(camisa);

function Lapis(nome,preco,material,estoque){
    Produto.call(this,nome,preco);
    this.material = material;

    Object.defineProperty(this,'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(value){
            if (typeof value !== 'number') return;
            estoque = value
        },
    })
}

Lapis.prototype.create = Object.create(Produto.prototype);
Lapis.prototype.constructor = Lapis;
Lapis.prototype.desconto = function(value){this.preco = this.preco - ((value / 100) * this.preco)};


const lapis = new Lapis('faber',5,'madeira',20);
console.log(lapis);
console.log(lapis.estoque);
lapis.estoque = 13;
console.log(lapis.estoque);