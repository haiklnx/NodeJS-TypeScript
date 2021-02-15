// Babel -> serve para traduzir o código atual do JS para navegadores
// que entendem apenas os recursos mais antigos
// conversão -> npx babel index.js -o bundle.js --presets=@babel/env
// para converter de forma automatica o package.json foi modificado
// tag 'babel' junto do comando foi criada em 'scripts'
//no terminal executar -> npm run babel

const nome = 'Gabriel';
const obj = {nome}

const novoObj = {...obj};
console.log(novoObj);

