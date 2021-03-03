const fs = require('fs').promises;

module.exports = (path, json) => {
    fs.writeFile(path, json, {
        // w -> sobreescreve o arquivo
        // a -> append no arquivo
        flag: 'w',
        encoding: 'utf-8', // ja vai como padrão
    });
}
