function Calculadora(){
        this.display = document.querySelector('.display');
        this.btnClear = document.querySelector('.btnClear');   

        this.inicia = () => {
            this.clickBtn();
            this.keyPressionaEnter();
            
        };
        
        this.clickBtn = () =>{
            // this -> calculadora
            document.addEventListener('click', (e) => {
                //this -> document
                const el = e.target;
                if(el.classList.contains('btnNum')) this.btnParaDisplay(el.innerText);   
                if(el.classList.contains('btnClear')) this.clearDisplay();
                if(el.classList.contains('btnDel')) this.clearLastDigit();
                if(el.classList.contains('btnEq')) this.calcValue();
            })
        };

        this.btnParaDisplay = (valor) =>{ 
            this.display.value += valor;
            this.display.focus();
        };
        this.clearDisplay = () => this.display.value = '';
        this.clearLastDigit = () => this.display.value = this.display.value.slice(0,-1);

        this.calcValue = () => {
            let conta = this.display.value;
            if (!conta) alert('Conta Inválida!');
            try{
                conta = eval(conta);
                this.display.value = conta;
            }catch{
                alert('Conta iválida!');
            }
        };

        this.keyPressionaEnter = () => {
            document.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') this.calcValue();
            })
        };
};

const calculadora = new Calculadora();
calculadora.inicia();