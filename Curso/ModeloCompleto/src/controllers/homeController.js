const HomeModel = require('../models/HomeModel');

exports.paginaInicial = (req, res, next) => {
    req.session.usuario = { nome: 'gabriel', logado: true };
    res.render('index');
    next();
}

exports.tratarPost = (req, res) => {
    res.send(req.body)
}