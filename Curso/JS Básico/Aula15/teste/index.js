// exercício utilizando os metodos do index.js da aula15
const num = Number(prompt('Digite um numero:'));

// 'document.getElementById' busca no Html o elemento com a id 
// correspondente e armazena em uma variavel para ser trabalhada futuruamente.
const numTitulo = window.document.getElementById('num-titulo');
const texto = window.document.getElementById('texto');

numTitulo.innerHTML = num;
texto.innerHTML = '';
texto.innerHTML += `<p>Sua raiz quadrada é: ${Math.sqrt(num)} </p>`;
texto.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}</p>`;
texto.innerHTML += `<p>É NaN: ${isNaN(num)}</p>`;
texto.innerHTML += `<p>Arredodamento para baixo: ${Math.floor(num)}</p>`;
texto.innerHTML += `<p>Arredodamento para cima: ${Math.ceil(num)}</p>`;
texto.innerHTML += `<p>Com duas Casas decimais: ${num.toFixed(2)}</p>`;
