const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController')


// rotas da home
// middleware -> são funções que são chamadas quando a rota é requisitada
// para isso é preciso utlizar o next() ao fim da função, para chamar o próximo middlware
route.get('/', homeController.paginaInicial, function(req,res, next){ console.log('middleware 2')});
route.post('/', homeController.tratarPost);

//rotas de contato
route.get('/contato', contatoController.paginaInicial);

module.exports = route;