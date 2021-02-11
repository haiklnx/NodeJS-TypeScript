function meuEscopo(){
    const form = window.document.querySelector('.form');
    const resultado = window.document.querySelector('.resultado');
    const pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefault(); // retira o comportamente padrão do evento
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        });
            resultado.innerHTML += `
                <p>
                nome: ${nome.value},
                sobrenome: ${sobrenome.value},
                peso: ${peso.value},
                altura: ${altura.value},
                </p>
            `;
        console.log(pessoas);
    };

    //função que capta os eventos ocorrentes no formulário e executa uma
    // funação caso o evento em questão seja disparado
    form.addEventListener('submit', recebeEventoForm);
};

meuEscopo();