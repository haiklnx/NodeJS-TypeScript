// utilizando routers do express
require('dotenv').config(); // carrega o arquivo com as configurações de acesso ao servidor
const express = require('express');
const { response } = require('express');
const routes = require('./routes');
const app = express();
const mongoose = require('mongoose'); // vai modelar a base de dados e fazer o CRUD
// as opções a baixo no objeto são para não mostrar erros ao iniciar
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conexão com o DB OK!')
        app.emit('pronto');
    })
    .catch(e => console.log(e));

const session = require('express-session'); // identifica o navegador do cliente e salva os cookies com o ID para ser usado depois
const MongoStore = require('connect-mongo').default; // usado para gravar as sessions no DB
const flash = require('connect-flash'); // cria mensagem que sejam apagados após lidas, utilizado como feedback
const path = require('path'); // usado para pegar o caminho dos arquivos
const helmet = require('helmet'); // recomedação do próprio express, área de segurança
const csrf = require('csurf'); // tokens para os formulários, não deixa nenhum app externo postar nada na aplicação
// middleware -> funções que são usadas na rota
const { middlewareGlobal, checkCrsfError, csrfMiddleware } = require('./src/middleware/middleware');
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
app.set('views', path.resolve(__dirname, 'src', 'views')) // arquivos que vão ser renderizados na tela
app.set('view engine', 'ejs'); // engine que vai ser utilizada para renderizar o arquivo
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public'))); // arquivos estáticos que podem ser acessados diretamente: img, css,js..
app.use(csrf());
app.use(middlewareGlobal); //definindo um middleware para todas as rotas
app.use(checkCrsfError);
app.use(csrfMiddleware);
app.use(helmet());
app.use(routes);

app.on('pronto', () => {
    app.listen(3333, () => console.log('Server online: http://localhost:3333'));
})

