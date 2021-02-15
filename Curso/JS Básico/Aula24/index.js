/* 
if - inicia a estrutura e é usado uma vez
else if - pode ser usado após o if quantas vezes necessário
else - utilizado uma vez no fim da condição caso necessário 
*/

const hora = 19;

if (hora >=0 && hora <= 11){
    console.log('Bom dia!');
}else if (hora <= 17){
    console.log('Boa Tarde!');
}else if (hora <= 23) {
    console.log('Boa Noite!');
}else{
    console.log('Hora inválida!');
}