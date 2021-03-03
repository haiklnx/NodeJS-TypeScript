// instalando o nodemon
// serve para reiniciar o servidor sempre que salvar
// basta configurar um script no json exemplo : "start": "nodemon server.js"

const { response } = require('express');
const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send('Hello *** World!')
});

app.get('/produto', (req, res) => {
    res.send('Lista de produtos \\/ ')
})

app.listen(3000, () => console.log('Server online'));


