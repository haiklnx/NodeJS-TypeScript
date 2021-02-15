const n = 8;

if (n >= 0 && n <= 5){
    console.log('o numero esta entre 0 e 5');
} if (n === 8) {
    console.log(`o numeero é ${n}`); //verdadeiro
}else if (n >= 6 && n <= 8){    //verdadeiro, porem o código para no primeiro verdadeiro
    console.log('o numero esta entre 6 e 8');
}else{
    console.log('o numero não esta entre 0 e 8');
}