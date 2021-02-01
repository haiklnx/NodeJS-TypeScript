//defineProperty
//defineProperties

function Produto(nome,preco,estoque){
    //                    objeto   atributo    definições     
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, //valor
        writable: false, // permite alterar
        configurable: false, // reconfigurar a chave
    });

    //                      objeto  atributo em chaves
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, //valor
            writable: false, // permite alterar
            configurable: false, // reconfigurar a chave
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, //valor
            writable: false, // permite alterar
            configurable: false, // reconfigurar a chave
        },
    });
}

const p1 = new Produto('Camisa', 20, 3);
// p1.estoque = 99;
// delete p1.estoque;
// console.log(p1);
// console.log(p1.estoque());

console.log(p1);
for (let chave in p1) console.log(chave);