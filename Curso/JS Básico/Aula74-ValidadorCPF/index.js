/* 705.484.450-52  070.987.720-03
1 - pegar os 9 digitos para obter o primeiro DV

7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (primeiro digito)
se o digito for maior que 9 ele sera considerado como 0

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77 0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (primeiro digito)
se o digito for maior que 9 ele sera considerado como 0
*/

// let cpf = '705.484.450-52';
function ValidadorCPF() {
       this.cpfLimpo =  (cpf) => {
           cpf = cpf.replace(/\D+/g, '');
           return cpf;
       };
       
       this.calculaDV = (cpfFormatado) => {
           let contador = cpfFormatado.length === 9? 10 : 11;

           return cpfFormatado.reduce((ac, valor) => {
               valor = Number.parseInt(valor);
               ac += valor * contador;
               contador--;
               return ac;
           }, 0);
       };
       
       this.primeiroDV = (cpfLimpo) => {
           let contador = 10;
           
           let cpfDV1 = Array.from(cpfLimpo);
           cpfDV1.splice(-2,2);
           // function calculaDV aqui vai gerar o primeiro digito verificador!
           let soma = this.calculaDV(cpfDV1);
           let DV = 11 - (soma % 11);
           cpfDV1.push((DV < 9? DV : 0).toString());
           return cpfDV1;
       };
       
       this.segundoDV = (CPFComPrimeiroDV) => {
           let contador = 11;
           
           let cpfDV2 = CPFComPrimeiroDV;
           //Passar como parametro o CPF com primeiro DV calculado!
           let soma = this.calculaDV(CPFComPrimeiroDV);
           
           let DV = 11 - (soma % 11);
           cpfDV2.push((DV < 9? DV : 0).toString());
           return cpfDV2;  
       };
       
       this.validarCPF = (cpf) => {
           if (typeof cpf !== 'string' || cpf.length !== 14) throw new Error('CPF inválido');
       };
       
       this.verificarCPF =  (cpf) => {
           this.validarCPF(cpf);
           cpf = this.cpfLimpo(cpf);
           
           let cpfDV1 = this.primeiroDV(cpf);
           let cpfVerificar = this.segundoDV(cpfDV1);
           cpfVerificar = cpfVerificar.join('');
           
           if(cpfVerificar === cpf) {
               return true;
           }else {
               return false;
           };
       };
};

let cpf = '070.987.720-03';
const CPF = new ValidadorCPF();
console.log(CPF.verificarCPF(cpf));
