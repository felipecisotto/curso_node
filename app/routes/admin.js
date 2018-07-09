module.exports = function (app) {
    app.get('/formulario_inclusao_noticias', function (req, resp) {
        resp.render("admin/form_add_noticia");
    });
    app.post('/noticias/salvar', function (req, resp) {
        var noticia = req.body;

        //Conexão
        var connection = app.config.bdConnection();
        //model
        var noticiaModel = app.app.models.noticiasModel;
        //salvarNoticias
        noticiaModel.salvarNoticia(noticia, connection, function (erro, result) {
            resp.redirect('/noticias');
        });
    });
}
