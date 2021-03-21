const Senha = require('../models/SenhaModel');

exports.index = (req, res) => {
    res.render('senha', {
        senha: {}
    });
};

exports.register = async (req, res) => {
    try {
        const senha = new Senha(req.body);
        await senha.register();
        if (senha.errors.length > 0) {
            req.flash('errors', senha.errors);
            req.session.save(() => res.redirect('/senha/index'));
            return;
        };

        req.flash('success', 'Senha armazeada com sucesso!');
        req.session.save(() => res.redirect(`/senha/index/${senha.senha._id}`));
        return;
    } catch (error) {
        console.log(error);
        return res.render('404');
    }
};

exports.editIndex = async (req, res) => {
    if (!req.params.id) return res.render('404');
    const senha = await Senha.buscaPorID(req.params.id);
    if (!senha) return res.render('404');


    res.render('senha', { senha });
}