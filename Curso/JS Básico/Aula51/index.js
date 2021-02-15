// closure
function retornaFuncao(nome){
    return function () {
       return nome;
    };
}

const funcao = retornaFuncao('Gabriel'); // fecha o escopo da função
const funcao2 = retornaFuncao('Wolf');
console.log(funcao());
console.log(funcao2());