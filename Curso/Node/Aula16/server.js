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


const session = require('express-session');
const MongoStore = require('connect-mongo').default;
const flash = require('connect-flash');


const path = require('path');
const { middlewareGlobal } = require('./src/middleware/middleware');


const sessionOptions = session({
    secret: 'nodejs',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(middlewareGlobal); //definindo um middleware para todas as rotas
app.use(routes);
app.on('pronto', () => {
    app.listen(3333, () => console.log('Server online: http://localhost:3333'));
})

