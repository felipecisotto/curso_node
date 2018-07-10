module.exports = function (app) {
    app.get('/formulario_inclusao_noticias', function (req, resp) {
       app.app.controllers.admin.formulario_inclusao_noticias(app,req,resp);
    });
    app.post('/noticias/salvar', function (req, resp) {
        app.app.controllers.admin.noticias_salvar(app,req,resp);
    });
}
