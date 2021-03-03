// FS -> utilizando a recursivade juntamente de promisses 
// vai ser passado um caminho e listado todos arquivos dentro dele

const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir)
    walk(files, rootDir)
}

async function walk(files, rootDir) {
    for (let file of files) {
        const fullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fullPath);

        if (stats.isDirectory()) {
            readdir(fullPath);
            continue;
        };

        // regex para remover arquivos que não precisam aparecer
        // if (/\.css$/g.test(fullPath)) continue;
        console.log(file, stats.isDirectory());
    }
}

readdir('/home/haik/Documentos/Dev/NodeJS-TypeScript/Curso');