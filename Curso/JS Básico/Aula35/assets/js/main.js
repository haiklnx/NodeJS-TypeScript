const elementos = [
    {tag:'p' , texto: 'Frase 1 <p>'},
    {tag:'div' , texto: 'Frase 2 <div>'},
    {tag:'footer' , texto: 'Frase 3 <footer>'},
    {tag:'section' , texto: 'Frase 4 <section>'},
];

const container = window.document.querySelector('.container');
const div = window.document.createElement('div');

// Para trazer cada objeto de dentro do array for classico
// Caso precise do valor da chave do objeto seria necessário fazer um
// for in em elementos[posicao] para obter os dados
// for(let key in elementos[posicao]{console.log(key, elementos[posicao][key])})
for (let posicao = 0; posicao < elementos.length; posicao++) {
    for(let key in elementos[posicao]) {console.log(`chave: ${key} | valor: ${elementos[posicao][key]}`)}
    const {tag, texto} = elementos[posicao];
    let tagCriada = window.document.createElement(tag);
    let textoCriado = window.document.createTextNode(texto);
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div);