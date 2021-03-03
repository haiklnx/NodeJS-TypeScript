export default class ValidadorCPF {
    validar(cpf) {
        if (typeof cpf !== 'string') return false;
        if (!cpf) return false;
        if (cpf.length < 11) return false;
        if (this.isSequencia(cpf)) return false;

        const cpfLimpo = this.limpaCPF(cpf);
        const novoCPF = this.geraNovoCPF(cpfLimpo);

        return cpfLimpo === novoCPF;
    }

    geraNovoCPF(cpf) {
        const parcial = cpf.slice(0, -2);
        const DV1 = ValidadorCPF.DV(parcial);
        const DV2 = ValidadorCPF.DV(parcial + DV1);
        return parcial + DV1 + DV2;
    }

    isSequencia(cpf) {
        const sequencia = cpf[0].repeat(cpf.length)
        return (sequencia === cpf)
    }

    limpaCPF(cpf) {
        return cpf.replace(/\D+/g, '');
    }

    static DV(cpfParcial) {
        const cpfArray = Array.from(cpfParcial);
        let contador = cpfParcial.length + 1;

        const soma = cpfArray.reduce((ac, valor) => {
            ac += (Number(valor) * contador);
            contador--;
            return ac;
        }, 0)
        const digito = 11 - (soma % 11);
        return digito > 9 ? '0' : String(digito);
    }
}

export { ValidadorCPF };