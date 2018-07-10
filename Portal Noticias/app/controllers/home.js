module.exports.index = function (app, req, resp) {
    var connection = app.config.bdConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.get5UltimasNoticias(function (erro, result) {
        resp.render("home/index",{noticias : result});
    });


}