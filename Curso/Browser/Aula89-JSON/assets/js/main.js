//JSON utilizando AXIOS (foi importado pelo CDN no index.html)

// fetch('pessoas.json')
// .then(dados => dados.json())
// .then(json => carregaElementos(json));

axios('pessoas.json')
    .then(resposta => carregaElementos(resposta.data))

function carregaElementos(json) {
    const table = document.createElement('table');
    const resultado = document.querySelector('.resultado');
    for(let pessoa of json){
        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.empresa;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.salario;
        tr.appendChild(td);

        table.appendChild(tr);
    }
    resultado.appendChild(table);
}