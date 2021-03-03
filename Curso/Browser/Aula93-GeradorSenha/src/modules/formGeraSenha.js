import geradorSenha from './geradores';
const resultado = document.querySelector('.resultado');
const qtdCaracteres = document.querySelector('.quantidade');
const chkMaiscula = document.querySelector('.maiuscula');
const chkMinuscula = document.querySelector('.minuscula');
const chkNumero = document.querySelector('.numero');
const chkSimbolo = document.querySelector('.simbolo');
const btnGerarSenha = document.querySelector('.btnGerarSenha')

export default () => {
    btnGerarSenha.addEventListener('click', () => {
        resultado.innerHTML = geraSenha()
    });
}

function geraSenha() {
    const senha = geradorSenha(
        qtdCaracteres.value,
        chkMaiscula.checked,
        chkMinuscula.checked,
        chkNumero.checked,
        chkSimbolo.checked,
    )
    return senha || 'Selecione pelo menos uma opção';
}