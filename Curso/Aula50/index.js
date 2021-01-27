const nome = 'Gabriel';

function falaNome(){
    // vai procurar a variavel até o escopo global
    //caso tenha variavel nome nesse escopo ele vai ser utilizada
    console.log(nome);
}

function usaFalaNome(){
    const nome = 'Wolf';
    falaNome();
}

usaFalaNome();