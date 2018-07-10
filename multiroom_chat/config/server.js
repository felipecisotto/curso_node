//importar os modulos necessarios
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
//Inicializa o express
var app = express();
//Configura o EJS, setando as variaveis view-engine e views
app.set('view engine','ejs');
app.set('views','./app/views');
//Configurar os middleware
//configurando arquivos estaticos
app.use(express.static('./app/public'));
//bodyparser
app.use(bodyParser.urlencoded({extended:true}));
//express validator
app.use(expressValidator());
//efetua o autoload das rotas, models e controlles para a variavel app
consign().include('app/routes')
         .then('app/models')
         .then('app/controllers')
         .into(app);

//fim configuração middleware

//Exporta o modulo do express configurado
module.exports = app;