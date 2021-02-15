// função auto invocada
// IIFE -> immediately invoked function expression

const nome = 'global'; // escopo global

(function() {
    function falaOi(nome){
        return `Ola ${nome}!`;
    }

        console.log(falaOi('Gabriel'));

    console.log('foge do escopo global');
})()