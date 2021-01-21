function tarefa(){

    const lista = document.querySelector('.tarefas');

    function criarTarefa(nomeTarefa){
        const novaTarefa = document.createElement('li');
    
        novaTarefa.innerHTML = `${nomeTarefa} <button class="apagar">Apagar</button>`
        lista.appendChild(novaTarefa);
    }

    for(let i = 0; i < 6; i++){
        criarTarefa(i);
    }

    document.addEventListener('click', (e) => {
        el = e.target;
        alert(el);
    })

};

tarefa();