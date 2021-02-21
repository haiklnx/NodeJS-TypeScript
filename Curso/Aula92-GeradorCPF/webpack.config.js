//webpack
const path = require('path'); // CommonJS padrao node

module.exports = {
    mode: 'production', // deixa todo código gerado em uma linha, deixando apenas o essencial
    entry: './src/index.js', // arquivo que vai ser lido para ser compilado
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'), // local de saída
        filename: 'bundle.js', // nome do arquivo de saída
    },
    module: {
        rules: [{
            exclude: /node_modules/, // retira a pasta da verificação
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },]
    },
    devtool: 'source-map', // vai criar um 'mapa' no navegador dizendo qual linha e arquivo original esta sendo executado o comando ou erro
}
