module.exports = function(app){
    app.get('/formulario_inclusao_noticias', function (req, resp) {
        resp.render("admin/form_add_noticia");
    });
}
