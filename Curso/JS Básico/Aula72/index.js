// // new Object -> Object.prototype
// const objA ={
//     chaveA: 'A',
//     // __proto__: Object.protype // ocorre automaticamente
// };

// const objB ={
//     chaveB: 'B',
//     // __proto__: objA
// };
// Object.setPrototypeOf(objB, objA);
// console.log('objB');
// console.log(objB.chaveA);

// const objC = new Object();
// objC.chaveC = 'C';

// console.log('objC');
// Object.setPrototypeOf(objC, objB)
// console.log(objC.chaveA);
// console.log(objC.chaveB);
// console.log(objC.chaveC);

function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = function(desconto){
    this.preco = this.preco - ((desconto / 100) * this.preco);
};
Produto.prototype.aumentaPreco = function(aumento){
    this.preco = this.preco + ((aumento / 100) * this.preco);
};

const prod = new Produto('notebook', 100);
prod.desconto(100);
console.dir(prod)

const prod2 = {
    nome: 'agua',
    preco: 30,
};

Object.setPrototypeOf(prod2, Produto.prototype)

prod2.aumentaPreco(100);
console.dir(prod2)

const prod3 = Object.create(Produto.prototype, {
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value:42,
    },
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value:18,
    }
});
prod3.desconto(50);
console.log(prod3);