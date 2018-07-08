var express = require('express');
var consign = require('consign');


//Express
var app = express();
//Configuração do EJS
app.set('view engine','ejs');
app.set('views','./app/views');
//Configuração Consign
consign()
    .include('./app/routes')
    .then('./config/bdConnection.js')
    .into(app);

module.exports = app;
