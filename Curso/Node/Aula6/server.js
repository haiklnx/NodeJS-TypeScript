const { response } = require('express');
const express = require('express');
const app = express();
/*
CRUD -> create, read, update, delete
metódos->post   get   put     delete   
*/

// requisição que for enviada para localhost:3000
// vai ter como retorno o reponse.send();
app.get('/', (request, response) => {
    response.send('Hello World!')
});

app.get('/produto', (req, res) => {
    res.send('Lista de produtos \\/ ')
})

// app vai executar na porta 3000
app.listen(3000, () => console.log('Server online'));


