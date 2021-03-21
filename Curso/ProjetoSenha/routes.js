const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const senhaController = require('./src/controllers/senhaController');
const { loginRequire } = require('./src/middleware/middleware');

// rotas da home
route.get('/', homeController.index);

//rotas de login
route.get('/login/index', loginController.index);
route.get('/login/logout', loginController.logout);

route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);

//rotas de senha
route.get('/senha/index', loginRequire, senhaController.index);
route.get('/senha/index/:id', loginRequire, senhaController.editIndex);
route.post('/senha/register', loginRequire, senhaController.register);

module.exports = route;