// valores primitivos são imutaveis
// string, number, boolean, undefined, null, bigint, symbol
// let a = 'a';
// let b = a; // cria uma copia do valor de a


// referencia é mutavel
// array, objetc, funtion
//let a = [1,2,3]
//let b = a
// a.push(4)
//console.log(a,b) // vao apontar para o mesmo lugar na memória

// para fazer uma copia:
// let c = [...a] faz a copia do array a

const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Ferreira',
};

const outraPessoa = {...pessoa} // faz a copia dos valores
pessoa.nome = 'alterado';
// const outraPessoa = pessoa;


console.log(pessoa);
console.log(outraPessoa);
