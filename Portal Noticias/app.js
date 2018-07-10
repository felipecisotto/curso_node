app = require("./config/server");
/*rotaNoticias = require("./app/routes/noticias");
rotaNoticias(app);
rotaHome = require("./app/routes/home");
rotaHome(app);
rotaFormularioInclusaoNoticias = require("./app/routes/formulario_inclusao_noticia");
rotaFormularioInclusaoNoticias(app);
*/
//roteamento antigo, foi substituido pelo consign no server.js
app.listen(3000, function () {
    console.log("Server ON");
}); 