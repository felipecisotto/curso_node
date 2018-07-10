var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

//Express
var app = express();
//Configuração do EJS
app.set('view engine','ejs');
app.set('views','./app/views');

//Configurando arquivos estaticos no express
app.use(express.static('./app/public'));

//Configuração Body Parser
app.use(bodyParser.urlencoded({extended:true}));
//Configuração validator
app.use(expressValidator());



//Configuração Consign
consign()
    .include('./app/routes')
    .then('./config/bdConnection.js')
    .then('./app/models')
    .then('./app/controllers')
    .into(app);

module.exports = app;
