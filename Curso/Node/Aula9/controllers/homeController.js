exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Novo cliente: <input type="text" name="nome">
        <button>Olá Mundo</button>
        </form>
    `)
}

exports.tratarPost = (req, res) => {
    res.send('nova rota de post')
}