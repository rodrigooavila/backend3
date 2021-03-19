let express = require('express');
let router = express.Router();

//arquivos css, js e img
router.use('/css', express.static(__dirname + '/css'));
router.use('/vendor', express.static(__dirname + '/vendor'));
router.use('/assets', express.static(__dirname + '/assets'));

//index
router.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html')
});

//regex
router.get('/ab[0-9]cd', (req, res) => {
    res.send("Essa é uma expressão regular.");
})

//json
router.get('/json', (req, res) => {
    res.status(200).json({ nome: "Rodrigo", data_nascimento: "23/06/1991" });
})

//parâmetro
router.get('/user/:u/nome/:n', (req, res) => {
    res.send("Você acessou informações do usuário" + req.params.u + " de nome " + req.params.n); //função response
});

//post
router.post('/post/testepost', (req, res) => {
    res.send("Você acessou uma página via POST");
});

//404
router.get('*', (req, res) => {
    res.send("Link inválido: 404");
});


module.exports = router;