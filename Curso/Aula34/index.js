// estruturas de repetição
// for classico
const frutas = ['uva', 'laranja', 'peira', 2, 5, 'gabriel', true];

for (let i = 0; i < 6; i++) {
    console.log(`Linha ${i}`);
}
console.log('*')
for (let i = 10; i >= 0; i--) {
    console.log(`Linha ${i}`);
}
console.log('*')

for (let i = 0; i < frutas.length; i++){
    console.log(`indice: ${i} -> ${frutas[i]}`)
}

