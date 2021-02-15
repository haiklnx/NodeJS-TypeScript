class ValidaFormulario {
    constructor(){
        this.formulario = document.querySelector('.formulario');
        this.events();
    };

    events() {
        this.formulario.addEventListener('submit', (e) => {
            this.handleSubmit(e);
        })
    };

    handleSubmit(e) {
        e.preventDefault();
        const validFields = this.isValid();
        const validPassword = this.isValidPassword();

        if(validFields && validPassword){
            alert('Formulário enviado.');
            this.formulario.submit();
        }
    }

    isValidPassword() {
        const senha = this.formulario.querySelector('.senha')
        const repetirSenha = this.formulario.querySelector('.repetir-senha')
        
        if(senha.value.length < 6 || senha.value.length > 12) {
            this.criaErro(senha, 'Senha precisa ter entre 6 e 12 caracteres');
            return false;
        }

        if(senha.value !== repetirSenha.value){
            this.criaErro(senha, 'Senha não confere');
            this.criaErro(repetirSenha, 'Senha não confere');
            return false;
        }

        return true;
    }

    isValid() {
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validate')){
            const label = campo.previousElementSibling.innerText;
            if(!campo.value) {
                this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
                valid = false;
            }

            if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valid = false;
            }

            if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false;
            }
        }
        
        return valid;
    }   

    criaErro(campo, message) {
        const div = document.createElement('div');
        div.innerHTML = message;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }

    validaCPF(campo) {
        const validadorCPF = new ValidadorCPF();
        if(!validadorCPF.validar(campo.value)) {
            this.criaErro(campo, 'CPF inválido');
            return false;
        }
        
        return true;
    }

    validaUsuario(campo) {
        if(campo.value.length < 3 || campo.value.length > 12){
            this.criaErro(campo, 'Nome de usuário deverá ter entre 3 e 12 caracteres.');
            return false;
        }

        if(!campo.value.match(/^[a-zA-Z0-9]+$/g)){
            this.criaErro(campo, 'Nome de usuário precisa conter apenas letras e/ou números.');
            return false;
        }
        
        return true;
    }

}

const validarForm = new ValidaFormulario();