const express = require('express')
const app = express()
const port = 3001

const path = require('path');

const basePath = path.join(__dirname, 'templates')

var checkAuth = function(req, res, next) {
    req.authStatus = true;

    if (req.authStatus) {
        console.log("Usuário autenticado com sucesso.");
        next()
    } else {
        console.log("Acesso negado. Favor, efetue o login.");
    }
}

app.use(checkAuth)

app.get('/users/:id', (req, res) =>{
    console.log(`Carregando usuários: ${req.params.id}`);

    res.sendFile(`${basePath}/users.html`)
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})