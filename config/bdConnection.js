var mysql = require('mysql');

var connMySQL = function () {
    console.log('Conexão com o banco de dados')
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'portal_noticias',
        insecureAuth: true
    });
}
module.exports = function () {
    console.log('O autoload carregou o banco');
    return connMySQL;
}
