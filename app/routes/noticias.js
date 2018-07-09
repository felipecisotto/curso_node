//var dbConnection = require('../../config/bdConnection');
//alterada para o consign
module.exports = function (app) {

    app.get('/noticias', function (req, resp) {
        var connection = app.config.bdConnection();
        var noticiasModel = app.app.models.noticiasModel;
        noticiasModel.getNoticias(connection, function (erro, result) {
            resp.render("noticias/noticias", { noticias: result });
        });

    });
}
