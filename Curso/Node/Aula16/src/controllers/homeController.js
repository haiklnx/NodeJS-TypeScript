const HomeModel = require('../models/HomeModel');

// HomeModel.create({
//     titulo: "Segundo commit",
//     descricao: "Novo documento"
// })
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e));
exports.paginaInicial = (req, res, next) => {
    req.session.usuario = { nome: 'gabriel', logado: true }
    req.flash('info', 'ola mundo');
    req.flash('erro', 'Crash');
    res.render(`index`, {
        titulo: '<span style="color: red;">titulo</span> da page',
        numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    });
    next();
}

exports.tratarPost = (req, res) => {
    res.send(req.body)
}