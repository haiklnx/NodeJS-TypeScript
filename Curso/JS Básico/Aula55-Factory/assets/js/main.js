function criaCalculadora(){
    return{
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btnClear'),   
        
        inicia(){
            this.clickBtn();
            this.keyPressionaEnter();
        },
        
        clickBtn(){
            // this -> calculadora
            document.addEventListener('click', (e) => {
                //this -> document
                const el = e.target;
                if(el.classList.contains('btnNum')){
                    this.btnParaDisplay(el.innerText);     
                };

                if(el.classList.contains('btnClear')){
                    this.clearDisplay();
                };

                if(el.classList.contains('btnDel')){
                    this.clearLastDigit();
                };

                if(el.classList.contains('btnEq')){
                    this.calcValue();
                };
            })
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        },

        clearDisplay(){
            this.display.value = '';
        },

        clearLastDigit(){
            this.display.value = this.display.value.slice(0,-1);
        },

        calcValue(){
            let conta = this.display.value;
            try{
                conta = eval(conta);
                this.display.value = conta;
            }catch{
                alert('Conta iválida!')
            }
        },

        keyPressionaEnter(){
            this.display.addEventListener('keyup', (e) => {
                if (e.key === 'Enter'){
                    this.calcValue();
                };
            })
        },

    };
};

const calculadora = new criaCalculadora();
calculadora.inicia();