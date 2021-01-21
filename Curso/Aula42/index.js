// try except
// tratamento de erros

function soma(x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('Apenas numeros para somar!')
    }

    return x + y;
}
try {
    // try vai tentar executar o bloco de código
    // caso ocorra algum erro o catch sera acionado
    console.log(soma(2,3));
    console.log(soma(2,'3'));
} catch (error) {
    // Em caso de algum erro no try
    // este bloco sera executado
    console.log('Mensagem amigavel para o usuário;')
    // console.log(error) // -> error deixar apenas para logs ou back end
    // para lançar exibir um erro para o usuário mostrar
    // uma mensagem amigavel como a de cima no console.log
}