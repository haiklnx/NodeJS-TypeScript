function rand(min,max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function espera(msg, tempo) {
    // res === resolvendo a promise, sucesso
    // rej === erro na promise
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                rej('Valor inválido!')
                return;
            };

            res(msg); // só pode ter um res
        }, tempo);
    })
};

// Promise.all | Promise.race | Promise.resolve | Promise.reject

const promises = [
    espera('promise 1', rand(1,3)),
    espera('promise 2', rand(1,3)),
    espera('promise 3', rand(1,3)),
    espera(99, rand(1,3)),
];

// vai resolver todas a promises antes de retornar.
// Promise.all(promises)
// .then((dados) => {
//     console.log(dados)
// })
// .catch((e) => {
//     console.log(console.error(e));
// });

// vai retornar a primeira promise resolvida e vai continuar executando o código.
// Promise.race(promises)
// .then(dados => console.log(dados))
// .catch(e => console.error(e));

function baixarPagina(){
    const emCache = true;
    if(emCache){ 
        return Promise.resolve('Página ok!'); //pode utilizar o reject() no caso de erro.
    }else {
        return espera('Página baixada!', 2000);
    }
}
baixarPagina()
.then(dados => {
    console.log(dados)
})
.catch(e => {
    console.error('ERRO:', e)
});