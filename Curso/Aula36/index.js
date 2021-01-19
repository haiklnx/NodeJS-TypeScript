// for in

// const frutas = ['uva', 'laranja', 'manga', 'limao'];

// for (const index in frutas) { // index pega o número do indíce de um vetor
//         console.log(frutas[index]);
//     }

const pessoa = {
    nome: 'gabriel',
    idade: 29,
    curso: 'JavaScript',
};

for (let key in pessoa){
    console.log(key, pessoa[key]) // key pega o nome da chave
}