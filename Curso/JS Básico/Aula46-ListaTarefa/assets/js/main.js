function tarefa(){

    const lista = document.querySelector('.listaTarefas');
    const inputDescricao = document.querySelector('.descricao');
    const btnAdicionar = document.querySelector('.adicionarTarefa');
    
    function criaLista(){
        return document.createElement('li');
    }
    
    function limpaInputDescricao(){
        inputDescricao.value = '';
        inputDescricao.focus();
    }

    function criarBotaoApagar(li){
        li.innerHTML += ' ';
        const botaoApagar = document.createElement('button');
        botaoApagar.innerText = 'apagar';
        botaoApagar.setAttribute('class', 'apagar')
        li.appendChild(botaoApagar);
    }

    function adicionaItemLista(descricao, li){
        li.innerHTML = `${descricao}`;
    }
    
    function apagarTarefa(elemento){
        if (elemento.classList.contains('apagar')){
            elemento.parentElement.remove();
            salvarTarefas();
        }    
    }
    
    function validarDescricaoTarefa(descricao){
        if (!descricao){
            alert('Informe uma descrição!');
            inputDescricao.focus();
            throw new Error('Campo descrição em branco.')
        }
        return true;
    }
    
    function salvarTarefas(){
        const liTarefas = lista.querySelectorAll('li');
        const listaDeTarefas = [];
        
        for (let tarefa of liTarefas){
            let tarefaTexto = tarefa.innerText;
            tarefaTexto = tarefaTexto.replace('apagar','').trim();
            listaDeTarefas.push(tarefaTexto);
        }
        const tarefasJson = JSON.stringify(listaDeTarefas);
        localStorage.setItem('tarefas', tarefasJson);
        console.log(tarefasJson);
    }
    
    function restaurarTarefasSalvas(){
        const tarefas = localStorage.getItem('tarefas');
        const tarefasLista = JSON.parse(tarefas);
        for (let tarefa of tarefasLista){
            criarTarefa(tarefa);
        }
    }
    
    function criarTarefa(nomeTarefa){
        if (validarDescricaoTarefa(nomeTarefa)){
            const li = criaLista();
            lista.appendChild(li);
            adicionaItemLista(nomeTarefa, li);
            criarBotaoApagar(li);
            limpaInputDescricao();     
            salvarTarefas();
        }
    }
    
    inputDescricao.addEventListener('keypress', (e) =>{
        if (e.key === 'Enter'){
            criarTarefa(inputDescricao.value);
        }
    })
    
    btnAdicionar.addEventListener('click', () =>{
        criarTarefa(inputDescricao.value);
    })
    
    document.addEventListener('click', (e) => {
        const el = e.target;
        apagarTarefa(el);
    })
    
    restaurarTarefasSalvas();
};

tarefa();