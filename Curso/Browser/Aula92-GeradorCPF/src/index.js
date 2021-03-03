import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';

(function () {
    const resultado = document.querySelector('.resultado');
    const criarCPF = new GeraCPF();
    const CPF = criarCPF.geraNovoCPF();
    resultado.innerHTML = `${CPF}`;

})();


