// Promise
function rand(min,max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}


function espera(msg, tempo) {
    // res === resolvendo a promise, sucesso
    // rej === erro na promise
    return new Promise((res, rej) => {
        if (typeof msg !== 'string') rej('Valor inválido!')
        setTimeout(() => {
            res(msg); // só pode ter um res
        }, tempo);
    })
};
// códigos assincronos sendo executados
espera('conxão DB', rand(1, 3))
.then(resposta => {
    console.log(resposta)
    return espera('Buscando dados', rand(1,2));
})
.then(reposta2 => {
    console.log(reposta2);
    // para testar o erro descomente a linha 28 e comente a 29
    // return espera(99, rand(1,3));
    return espera('tratando os dados', rand(1,3));
})
.then(data => {
    console.log(data);
})
.then(() => {
    console.log('Exibe os dados!')
})
.catch(e => {
    console.log('Erro:', e);
});
