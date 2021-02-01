/* 
Object.values -> Object.values(produto)
Object.entries -> Object.entries(produto)
Object.assign (des, any) -> Object.assign({}, produto, {material:'nano'})
Object.getOwnPropertyDescriptor (o, 'prop') ->  Object.getOwnPropertyDescriptor(produto, 'nome')
... (spread) -> const copiaProduto = {...produto, material: 'inox',};

// já vimos
Object.keys (retorna as chaves)  -> Object.keys(produto)
Object.freeze (congela o objeto) -> Object.freeze(produto)
Object.defineProperty (define uma propriedade) -> aula anterior
Object.defineProperties (define várias propriedades) -> aula anterior
*/


/* para vericar os exemplos basta descomentar as linhas de acordo com a quebra de linha */
const produto = {nome: 'caneca', preco: 3};
// const copiaProduto = {...produto, material: 'inox',};
// // const copiaProduto = Object.assign({}, produto, {material:'nano'}); // faz a copia do objeto

// copiaProduto.nome = 'Pendrive';
// copiaProduto.preco = 7;
// console.log(produto);
// console.log(copiaProduto);

// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// console.log(produto.nome)
// Object.defineProperty(produto, 'nome', {
//     writable: true,
//     enumerable: false,
//     configurable: false,
// });
// produto.nome = 'alterando???'
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// console.log(produto.nome)

// console.log(Object.entries(produto));
for ( [chave, valor]/* entry*/ of Object.entries(produto)) {
    console.log(chave, valor);
}