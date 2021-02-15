// async e await
function rand(min = 0, max = 3) {
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

            res(msg.toLocaleUpperCase() + 'PASSEI NA PROMISE'); // só pode ter um res
        }, tempo);
    })
};

// para utilizar o await é necessário declarar uma 'async function'
// await vai ser utilizado para esperar o retorno res/rej de uma promise
// para só então proseguir, simulando uma função sincrona
async function executar(){
    // utilizando try catch seria equiparo ao then catch
    try {
        const fase1 = await espera('Fase 1 ', rand());
        console.log(fase1);
        const fase2 = await espera('Fase 2 ', rand());
        console.log(fase2);
        const fase3 = await espera(88, rand());
        console.log(fase3);
    } catch (error) {  
        console.log(error);
    }
};

executar()
/* 
3 estados da promise
    pending -> pendente (ocorre quando chama o valor dela antes de ser resolvida)
    fullfilled -> resolvida
    rejected -> rejeitada
*/
