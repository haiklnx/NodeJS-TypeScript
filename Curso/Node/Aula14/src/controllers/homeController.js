const HomeModel = require('../models/HomeModel');

// HomeModel.create({
//     titulo: "Segundo commit",
//     descricao: "Novo documento"
// })
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e));


exports.paginaInicial = (req, res, next) => {
    res.render(`index`);
    next();
}

exports.tratarPost = (req, res) => {
    res.send(req.body)
}