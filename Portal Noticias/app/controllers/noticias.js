module.exports.noticias = function(app,req,resp){
    //var connection = app.config.bdConnection();
    var dateFormat = require('dateformat');
    var noticiasModel = new app.app.models.NoticiasDAO();
    noticiasModel.getNoticias(function (erro, noticias) {
        resp.render("noticias/noticias",{noticias:noticias,dateFormat:dateFormat});
    });
}

module.exports.noticia = function(app,req,resp){
    
    var noticiasModel = new app.app.models.NoticiasDAO();
    var idNoticia = req.query;
    console.log(idNoticia.id_noticia);
    noticiasModel.getNoticia(idNoticia.id_noticia,function(erro,result){
        console.log({noticia:result});
        resp.render('noticias/noticia',{noticia:result});
    });
}