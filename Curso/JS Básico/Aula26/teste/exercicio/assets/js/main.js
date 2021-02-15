function Main(){
    const form = window.document.body.querySelector('.form');
    const peso = form.querySelector('#peso');
    const altura = form.querySelector('#altura');
    const resultado = form.querySelector('.resultado');
    let imc = 0;
    let statusIMC = '';
    
    function validarDados(peso,altura){
        if (!Number(peso.value)){
            resultado.innerHTML = 'Peso inválido!'; 
            resultado.classList.add('erro');
            return ok = false;   
        }else if (!Number(altura.value)){
            resultado.classList.add('erro');
            resultado.innerHTML = 'Altura inválida!'
            return ok = false;
        }else{
            resultado.classList.add('resultado');
            return ok = true;
        }

    };

    function calcularIMC(peso,altura){
        const imc = peso.value / (altura.value ** 2);
        if(imc >= 15 && imc <= 50){
            return imc.toFixed(2);
        }else {
            return 0
        }
    };

    function verificarStatusIMC(imc){ // poderia ser usado um array
        if (imc >= 15 && imc < 18.5){
            return 'Abaixo do peso'
        }else if(imc >= 18.5 && imc <= 24.9){
            return 'Peso normal'
        }else if(imc > 24.9 && imc <= 29.9){
            return 'Sobre peso'
        }else if (imc > 29.9 && imc <= 34.9) {
            return 'Obesidade grau 1'
        }else if(imc > 34.9 && imc <= 39.9){
            return 'Obesidade grau 2'
        }else if(imc > 39.9 && imc <= 50){
            return 'Obesidade grau 3'
        }else{
            return 'Verifique os dados informados'
        }
    }
    
    function eventoForm(evento){
        evento.preventDefault();
        if(validarDados(peso,altura)){
            imc = calcularIMC(peso,altura);
            statusIMC = verificarStatusIMC(imc);
            exibirDados(imc,statusIMC);
        }    
    };
    form.addEventListener('submit', eventoForm);
};


Main();