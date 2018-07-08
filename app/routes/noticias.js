//var dbConnection = require('../../config/bdConnection');
//alterada para o consign
module.exports = function (app) {
    
    app.get('/noticias', function (req, resp) {
        var connection = app.config.bdConnection();    
        connection.query('select * from noticias', function (erro, result) {
            resp.render("noticias/noticias", { noticias: result });
        });

    });
}
  