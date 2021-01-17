// operação ternaria   ? :
// condição ? valor verdadeiro : valor falso

const ponto = 1000;
const nilveUser = ponto >= 1000 ? 'usuário vip' : 'usuário normal';
const corUser = null;
const corPadrao = corUser || 'Roxo';

console.log(nilveUser, corPadrao)
