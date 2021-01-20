//Parametros

// function f(a1,a2){ // arguments só existe quando a palavra function é decladara
//     let total = 0;
//     for (const arg of arguments) {
//         total += arg;
//     }
//     console.log(total);

//     console.log(`a1 ${a1}\na2${a2}`)
// }
// f(1,2,3,4,5,6);

// function f1 (a, b = 2, c = 4){
//     console.log(a + b + c);
// }

// f1(3,undefined,5)

// const obj = {
//     nome: 'Gabriel',
//     idade: 30
// }

// function f2({nome, idade}){
//     console.log(nome, idade);
// }

// f2(obj);

//Não tem arguments em arrow function!

function conta(operador, acumulador, ...numeros){ // rest precisa ser o último
    for(let n of numeros){
        if(operador === '+') acumulador += n;
        if(operador === '-') acumulador -= n;
        if(operador === '/') acumulador /= n;
        if(operador === '*') acumulador *= n;
    }
    console.log('total',acumulador);
}

conta('*', 1, 20,30,50)