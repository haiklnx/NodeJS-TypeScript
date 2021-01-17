// function main(){
//     const h1 = window.document.querySelector('.titulo');
//     const data = new Date();
//     let diaSemana;

//     function getDiaSemana(diaSemana){
//         switch (diaSemana){
//             case 0:
//                 return 'Domingo'
//             // criar cases até sabado    
//         };
//     };

//     function getNomeMes(indexMes){
//         switch (indexMes){
//             case 0:
//                 return 'Janeiro';   
//             // criar cases até dezembro    
//         };
//     };

//     function zeroEsquerda(num){
//         return num >= 10 ? num : `0${num}`
//     }
    
//     function formataData(data){
//         const dia = zeroEsquerda(data.getDate());
//         const mes = zeroEsquerda(data.getMonth() + 1);
//         const ano = zeroEsquerda(data.getFullYear());
    
//         const hora = zeroEsquerda(data.getHours());
//         const minuto = zeroEsquerda(data.getMinutes());
//         const segundo = zeroEsquerda(data.getSeconds());
        
//         return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}` 
//     };

//     function getDetalheData(data){
//     dia = zeroEsquerda(data.getDate());
//     mes = data.getMonth();
//     ano = zeroEsquerda(data.getFullYear());
//     hora = zeroEsquerda(data.getHours());
//     minuto = zeroEsquerda(data.getMinutes());
//     diaSemana = data.getDay();
//     return `${getDiaSemana(diaSemana)}, ${dia} de ${getNomeMes(mes)} de ${ano} ${hora}:${minuto}`
// }; 
    
//     h1.innerHTML = getDetalheData(data) ;
// };
// main();

// poderia ser utilizado arrays para selecionar o dia da semana e também do mês!

    const h1 = window.document.querySelector('.titulo');
    const data = new Date();

    h1.innerHTML = data.toLocaleDateString('pt-BR',{dateStyle: 'full', timeStyle: 'long' }) 
    // o timeStyle só é suporteado no chrome e no opera!!