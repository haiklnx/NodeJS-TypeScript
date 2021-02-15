// continuação do try catch
// fynally sempre vai ser executado, com erro ou não
// mais de um finally pode ser executado

// try {
//     console.log('Arquivo aberto.');
//     console.log('Manipulei o arquivo e deu erro.');
//     console.log(a);
//     // console.log('Fechei o arquivo.'); // nao vai passar nessa linha
// } catch (e) {
//     console.log('Tratando o erro.')    
// } finally{
//     console.log('finally: fechando o arquivo no fim da função.')
// }

function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new Error('esperando instancia do tipo Date');
    }

    if (!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12: false
    });
}
try {
    const data = new Date('01-01-1970;')
    // const hora = retornaHora(a); // caso o erro ocorra aqui apenas o catch e o finally seram executados
    const hora2 = retornaHora();
    console.log(hora2);

    const hora3 = retornaHora(data);
    console.log(hora3);

    console.log(hora);
    
    
} catch (error) {
    console.log('Informe uma data válida.')
}finally{
    console.log('tenha um bom dia!')
}