const num = Number(prompt('Digite um numero:'));

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
