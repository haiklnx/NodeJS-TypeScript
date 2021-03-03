const path = require('path');
const writeJson = require('./modules/write');
const readJson = require('./modules/read');
const read = require('./modules/read');

const filePath = path.resolve(__dirname, 'test.json');

const pessoas = [
    { nome: 'gabriel' },
    { nome: 'iara' },
    { nome: 'wolf' },
]

// JSON.stringify -> formata o arquivo para json
const jsonPessoas = JSON.stringify(pessoas, '', 2);

writeJson(filePath, jsonPessoas) // faz a escrita do json

function renderData(json) {
    json = JSON.parse(json);
    json.forEach(val => console.log(val));
};

async function readJsonFile(path) {
    const data = await read(filePath);
    renderData(data);
}

const dataFile = readJson(filePath);

readJsonFile(filePath); // faz a leitura do json