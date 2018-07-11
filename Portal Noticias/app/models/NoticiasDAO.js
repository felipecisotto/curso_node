var mongoose = require('mongoose');

function NoticiasDAO(connection) {

    //this._connection = connection();
    
    this._userSchema = new mongoose.Schema({
        titulo: String,
        resumo: String,
        autor: String,
        noticia: String,
        data_noticia : Date
    });
    
    this._Noticia = mongoose.models.noticia || mongoose.model('noticia', this._userSchema);;


}

/*NoticiasDAO.prototype.getNoticias = function (callback) {
    this._connection.query('select * from noticias order by data_criacao DESC', callback);
}
NoticiasDAO.prototype.getNoticia = function (idNoticia,callback) {
    this._connection.query('select * from noticias where id_noticia = '+idNoticia.id_noticia, callback);
}

NoticiasDAO.prototype.salvarNoticia = function (noticia, callback) {
    this._connection.query('insert into noticias set ?', noticia, callback);
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
    this._connection.query('select * from noticias order by data_criacao DESC limit 5',callback);
}*/
NoticiasDAO.prototype.salvarNoticia = function(noticia){
    
    this._Noticia.create(noticia, function (err, noticia) {
        if (err) return handleError(err);
        // saved!
      });
} 
NoticiasDAO.prototype.getNoticias = function(callback){


    return this._Noticia.find({},callback);

}
NoticiasDAO.prototype.getNoticia = function(id,callback){


    return this._Noticia.findById(id,callback);

}
NoticiasDAO.prototype.get5UltimasNoticias = function(callback){

    
    return this._Noticia.find({}).sort({data_noticia : -1}).limit(5).exec(callback);

}

module.exports = function () {

    return NoticiasDAO;
}