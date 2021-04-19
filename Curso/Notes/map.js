// Map -> altera valores do array e devolve um array do mesmo tamanho

//ex1 Dobre os valores
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const ex1 = numeros.map(valor => valor * 2);
console.log(ex1);


//Para cada elemento:
//ex2 Retorne apenas uma string com o nome da pessoa
//ex3 Remova apenas a chave nome do objeto
//ex4 Adicione uma chave 'ID' em cada objeto
// OBS: Objetos array e funções não são copiados, todo alteração ocorre no direto no original.
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const ex2 = pessoas.map(obj => obj.nome)
console.log(ex2);

// A desestruturação aqui precisa estar entre (), caso contrario sera retornado undefined
const ex3 = pessoas.map(obj => ({idade: obj.idade}));
console.log(ex3);


const ex4 = pessoas.map((obj, indice) => {
    // obj.id = (indice + 1); // retorna o original alterado
    // return obj;
    const newObj = {...obj};
    newObj.id = indice;
    return newObj; // retorna novo objeto sem alterar o orignal
}); 
console.log(ex4); 