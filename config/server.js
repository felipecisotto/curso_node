var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser')

//Express
var app = express();
//Configuração do EJS
app.set('view engine','ejs');
app.set('views','./app/views');
//Configuração Body Parser
app.use(bodyParser.urlencoded({extended:true}));

//Configuração Consign
consign()
    .include('./app/routes')
    .then('./config/bdConnection.js')
    .then('./app/models')
    .into(app);

module.exports = app;
