var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var mongoose = require('mongoose')
//Express
var app = express();
//Configuração do EJS
app.set('view engine','ejs');
app.set('views','./app/views');

//Configurando arquivos estaticos no express
app.use(express.static('./app/public'));

//Configuração Body Parser
app.use(bodyParser.urlencoded({extended:true}));

//Configuração do Banco
mongoose.connect('mongodb://localhost:27017/portal_noticias')

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
