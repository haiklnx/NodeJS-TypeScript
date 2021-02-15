//datas

const data = new Date();

// console.log('dia', data.getDate()); // dia referente ao mes
// console.log('mes', data.getMonth());
// console.log('ano', data.getFullYear());
// console.log('diaSemana', data.getDay()); // pega o dia da semana
// console.log(data.toString());

function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

function formataData(data){
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());

    const hora = zeroEsquerda(data.getHours());
    const minuto = zeroEsquerda(data.getMinutes());
    const segundo = zeroEsquerda(data.getSeconds());
    
    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}` 
};
const dataBrasil = formataData(data);

console.log(dataBrasil);
