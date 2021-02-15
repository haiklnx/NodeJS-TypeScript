// Declaração de função (function hoisting) ocorre apeans no exemplo abaixo
// eleva as funções para o topo do arquivo na hora da execução

falaOi()
function falaOi(){
    console.log('oi.');
}

// First-class objects (objeto de primeira classe)
// function expression

const souUmDado = function (){
    console.log('Sou um dado.');
};


function executaFuncao(funcao){
    console.log('Executando a função do parâmetro.')
    funcao();
}

executaFuncao(souUmDado);

// Arrow function

const arrow = () => {
    console.log('Sou uma arrow function.')
}
arrow();

// Dentro de um objeto

const obj = {
    falar: function(){
        console.log('OBJ falante!');
    }
}

obj.falar();