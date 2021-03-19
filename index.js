const express = require('express') //invoca express


const app = express();

let port = 3000;
let rotas = require('./rotas');

app.use('/', rotas); //uso do arquivo de roteamento 

app.listen(port, () => console.log(`Escutando na porta ${port}`));