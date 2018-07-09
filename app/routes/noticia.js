module.exports = function (app) {

    app.get('/noticia', function (req, resp) {

        var connection = app.config.bdConnection();
        var noticiasModel = app.app.models.noticiasModel;
        noticiasModel.getNoticia(connection,function(erro,result){
            resp.render('noticias/noticia',{noticia:result});
        });
        


    });

}