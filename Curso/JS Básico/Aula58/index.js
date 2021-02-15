//Função Geradora
// Lease avaluetion

function* geradora1(){
    //codigo
    yield 'valor 1';
    //codigo
    yield 'valor 2';
    //codigo
    yield 'valor 3';
};


const g1 = geradora1();
console.log(g1.next().value); // para cada chamada yield retorna o valor respectivo
console.log(g1.next().value);
// console.log(g1.next()); // gera erro se não utilizar o '.value'
for (let valor of g1) console.log(valor)

function* geradora2(){ // gerador infinito
    let i = 0;
    while(true) {
        yield i;
        i++;
    };
};
console.log('g2 gera um contador infinito');
const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
};

function* geradora4(){
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
};
console.log('\ng4 utilizando g3 \\/');
const g4 = geradora4();
for (let valor of g4) console.log(valor);

function* gerador5(){
    yield () => console.log('vim do yield 1');

    //codigo
    // se for usado um return o código não vai chegar até o próximo yield!!

    yield () => console.log('vim do yield 2');
}

const g5 = gerador5();
const f1 = g5.next().value;
const f2 = g5.next().value;

f1();
f2();
