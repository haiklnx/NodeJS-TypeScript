// atribuição via desestruturação de objetos

const pessoa = {
    nome: 'gabriel',
    idade: 29,
    endereco: {
        rua: 'oliveira costa',
        numero: 27,
    },
};

const {nome: primeiroNome, idade, endereco:{rua, numero}, bairro = 'Padrao'} = pessoa;


console.log(primeiroNome,idade, rua, numero, bairro)

