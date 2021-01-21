//setInterval e setTimeout
// usandos como timers

function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

function funcaoDoInterval(){
    console.log(mostraHora());
}

//passar a referencia, não usa ()
// tempo é calculado em ms 1000 = 1 segundo
// vai execuar a cada 1 segundo sem parar
const timer = setInterval(() => {
    console.log(mostraHora());
}, 1000); 

// para parar o código no vscode:
// ctrl + shift + p
//stop code run // atalho ctrl + alt + m

setTimeout(() => {
    console.log('Fim após 4 segundos!')
}, 4000);

setTimeout(() => {
    clearInterval(timer);
}, 3000);