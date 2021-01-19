const elementos = [
    {tag:'p' , texto: 'Frase 1'},
    {tag:'div' , texto: 'Frase 2'},
    {tag:'footer' , texto: 'Frase 3'},
    {tag:'section' , texto: 'Frase 4'},
];

const container = window.document.querySelector('.container');
const div = window.document.createElement('div');

for (let index = 0; index < elementos.length; index++) {
    const {tag, texto} = elementos[index];
    let tagCriada = window.document.createElement(tag);
    let textoCriado = window.document.createTextNode(texto);
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div);