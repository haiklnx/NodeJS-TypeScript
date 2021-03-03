const { response } = require('express');
const express = require('express');
const app = express();
// utilizado para tratar o body da requisição como um objeto, 
// assim podemos pegar o seu valor
app.use(express.urlencoded({ extended: true }))
// query strings
// /profiles/12345?campanha=googleads&nomecampanha=evento

app.get('/', (request, response) => {
    response.send(`
        <form action="/" method="POST">
        Nome do cliente <input type="text" name="nome">
        <button>Olá Mundo</button>
        </form>
    `)
});
app.post('/', (req, res) => {
    console.log(req.body);
    // utiliza o valor do name do imput para pegar o valor
    res.send(`Você me mandou: ${req.body.nome}`)
})

// : -> passando parametros para a rota
// ? -> fala se o parametro é opcional
app.get('/testes/:IDUsuario?/:nome?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.params)
})


app.listen(3333, () => console.log('Server online'));


