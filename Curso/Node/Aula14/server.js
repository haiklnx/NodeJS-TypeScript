// utilizando routers do express
require('dotenv').config();
const express = require('express');
const { response } = require('express');
const routes = require('./routes');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conexão com o DB OK!')
        app.emit('pronto');
    })
    .catch(e => console.log(e));

const path = require('path');
const { middlewareGlobal } = require('./src/middleware/middleware');


app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(middlewareGlobal); //definindo um middleware para todas as rotas
app.use(routes);
app.on('pronto', () => {
    app.listen(3333, () => console.log('Server online: http://localhost:3333'));
})

