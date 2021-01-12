const nome = 'Gabriel';
const idade = 29;
const peso = 112;
const altura = 1.79;
let DataNascimento;
DataNascimento = 2021 - idade;
const imc = peso / (altura * altura);

console.log({
    Nome: nome,
    idade: idade,
    peso: peso,
    altura : `${altura * 100}cm`,
    imc: imc,
});