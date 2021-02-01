//Função Recursiva

function recursiva(max){
    console.log(max);
    if (max <= 1) return;

    recursiva(max - 1)
}

recursiva(10)