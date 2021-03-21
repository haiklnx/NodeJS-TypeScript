// tudo referente a base de dados sera trabalho pelo Model
const mongoose = require('mongoose');

const SenhaSchema = new mongoose.Schema({
    site: { type: String, required: true },
    usuario: { type: String, required: true },
    senha: { type: String, required: true },
    criadoEm: { type: Date, default: Date.now },
});


const SenhaModel = mongoose.model('Senha', SenhaSchema);

function Senha(body) {
    this.body = body;
    this.errors = [];
    this.senha = null;

    Senha.buscaPorID = async function (id) {
        if (typeof id !== 'string') return;
        const senha = await SenhaModel.findById(id);
        return senha;
    }

    Senha.prototype.register = async function () {
        this.validar();
        if (this.errors.length > 0) return;
        this.senha = await SenhaModel.create(this.body);
    }

    Senha.prototype.validar = function () {
        this.cleanUp();

        if (!this.body.site) this.errors.push('O site deve ser informado.');
        if (!this.body.usuario) this.errors.push('O usuário deve ser informado.');
        if (!this.body.senha) this.errors.push('A senha precisa ser informada.');
    }

    Senha.prototype.cleanUp = function () {
        for (let key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        };

        this.body = {
            site: this.body.site,
            usuario: this.body.usuario,
            senha: this.body.senha,
        };
    }
}

module.exports = Senha;