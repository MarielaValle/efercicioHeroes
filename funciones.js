const fs = require("fs");

const parsingFile = (filePath) =>JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'));


const heroesPath = __dirname + '/data/heroes.json';

const funciones = {

getHeroes: () => parsingFile (heroesPath)

};

module.exports = funciones;