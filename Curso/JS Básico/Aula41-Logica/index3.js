/*
Escreva uma função que recebe um número e
retorne o seguinte:
Número divisível por 3 = Fizz
Número divisível por 5 = Buzz
Número divisível por 3 e 5 = FizzBuzz
Número não divisível por 3 e 5 retorna o próprio número
checar se o numéro é realmente um número
use a função com números de 0 a 100
*/
const FizzBuzz = (numero) =>{
    if (typeof numero !== 'number') return numero;
        if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
        else if (numero % 3 === 0) return 'Fizz';
        else if (numero % 5 === 0) return 'Buzz';
        else return numero
    };
  
console.log(FizzBuzz('a'));
for(let i = 0; i <= 100; i++){
    console.log(i, FizzBuzz(i));
}


