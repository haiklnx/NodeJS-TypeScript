function criaMultiplicador(multiplicador){
    //multiplicador pega o escopo maior
    
    return function (numero){
        return numero * multiplicador;
    };
};


const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

// console.log(criaMultiplicador(2)(4)) // mesmo efeito da função acima de forma menos legivel
console.log(duplica(2));
console.log(triplica(3));
console.log(quadriplica(4));