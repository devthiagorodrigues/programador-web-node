// Importa o módulo nativo 'path' do Node.js, utilizado para manipular caminhos de arquivos e diretórios
const path = require('path');

// Usa o método '.extname()' para obter a extensão do arquivo especificado
const extension = path.extname('arquivo.txt');

// Exibe no console a extensão do arquivo (por exemplo: '.txt')
console.log(extension);
