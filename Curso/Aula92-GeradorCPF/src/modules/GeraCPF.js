import ValidadorCPF from './ValidadorCPF';

export default class GeraCPF {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    };

    geraNovoCPF() {
        const cpfSemDigito = this.rand();
        const dv1 = ValidadorCPF.DV(cpfSemDigito);
        const dv2 = ValidadorCPF.DV(cpfSemDigito + dv1);
        const novoCPF = cpfSemDigito + dv1 + dv2;
        return this.formataCPF(novoCPF);
    };

    formataCPF(cpf) {
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        );
    }
}


