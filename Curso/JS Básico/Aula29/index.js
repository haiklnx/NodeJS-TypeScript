// switch case
const data = new Date();

const diaSemana = data.getDay();
let texto;

switch (diaSemana) {
    case 0:
        texto = 'Domingo';
        break;

    case 1:
        texto = 'Segunda';
    default:
        break;
}
console.log(diaSemana, texto);