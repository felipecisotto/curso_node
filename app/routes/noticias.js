module.exports = function(app){
    app.get('/noticias', function (req, resp) {
        resp.render("noticias/noticias");
    });
}
