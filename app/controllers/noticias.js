module.exports.noticias = function(app,req,resp){
    var connection = app.config.bdConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);
    noticiasModel.getNoticias(function (erro, result) {
        resp.render("noticias/noticias", { noticias: result });
    });
}

module.exports.noticia = function(app,req,resp){
    var connection = app.config.bdConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);
    noticiasModel.getNoticia(function(erro,result){
        resp.render('noticias/noticia',{noticia:result});
    });
}