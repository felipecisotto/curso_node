module.exports.formulario_inclusao_noticias = function (app, req, resp) {

    resp.render("admin/form_add_noticia", { validacao: {}, noticia: {} });

}

module.exports.noticias_salvar = function (app,req,resp) {

    var noticia = req.body;
    //Express Validator
    console.log(noticia);
    req.assert('titulo', 'Título é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo deve ter entre 10 e 100 caracteres').len(10, 100);
    req.assert('autor', 'Autor é obrigatório').notEmpty();
    req.assert('data_noticia', 'Data é obrigatório').notEmpty();
    req.assert('noticia', 'Notícia é obrigatório').notEmpty();

    var erros = req.validationErrors();

    if (erros) {
        resp.render("admin/form_add_noticia", { validacao: erros, noticia: noticia });
        return;
    }
    //Conexão
    var connection = app.config.bdConnection();
    //model
    var noticiaModel = new app.app.models.NoticiasDAO(connection);
    //salvarNoticias
    noticiaModel.salvarNoticia(noticia, function (erro, result) {
        resp.redirect('/noticias');
    });

}