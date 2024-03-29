// toda validação do form deve ser feito no model
const Login = require('../models/LoginModel');

exports.index = (req, res, next) => {
    if (req.session.user) return res.render('../views/login-logado');
    res.render('login');
};
//quando usar promises a função precisa ser async e o metodo await para aguardar o retorno
exports.register = async function (req, res) {
    try {
        const login = new Login(req.body);
        await login.register();

        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function () {
                return res.redirect('./index');
            });
            return;
        }
        req.flash('success', 'Usuário salvo com sucesso.');
        req.session.save(function () {
            return res.redirect('./index');
        });
    } catch (error) {
        console.log(error)
        res.render('404');
    }
}

exports.login = async function (req, res) {
    try {
        const login = new Login(req.body);
        await login.login();

        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function () {
                return res.redirect('./index');
            });
            return;
        }

        req.flash('success', 'Usuário logado.');
        req.session.user = login.user;
        req.session.save(function () {
            return res.redirect('./index');
        });
    } catch (error) {
        console.log(error)
        res.render('404');
    }
}

exports.logout = function (req, res) {
    req.session.destroy();
    res.redirect('/');
};