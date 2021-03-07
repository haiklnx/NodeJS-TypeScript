exports.paginaInicial = (req, res) => {
    res.render(`index`);
}

exports.tratarPost = (req, res) => {
    res.send('nova rota de post')
}