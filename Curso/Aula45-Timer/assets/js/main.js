function relogio(){
    let second = 0;
    let timer;
    const relogio = document.querySelector('.relogio');

    function getTimeFromSeconds(second){ 
        let data = new Date(second * 1000); // utiliza ms para calcular o tempo
        return data.toLocaleTimeString('pt-BR',{
            hour12: false,
            timeZone: 'UTC'
        });
    }

    function iniciarTimer(){
        timer = setInterval(() => {
            second++;
            relogio.innerHTML = getTimeFromSeconds(second);
        }, 1000)
    }

    document.addEventListener('click', (e) =>{
        const el = e.target; // captura o elemento do click
        
        if(el.classList.contains('iniciar')){
            clearInterval(timer);
            relogio.classList.remove('pausado')
            iniciarTimer();    
        };

        if(el.classList.contains('pausar')){
            relogio.classList.add('pausado')
            clearInterval(timer);    
        };

        if(el.classList.contains('zerar')){
            relogio.classList.remove('pausado');
            second = 0;
            clearInterval(timer);
            relogio.innerHTML = '00:00:00'    
        };
    })
}
relogio();