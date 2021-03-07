exports.paginaInicial = (req, res, next) => {
    res.render(`index`);
    next();
}

exports.tratarPost = (req, res) => {
    res.send(req.body)
}