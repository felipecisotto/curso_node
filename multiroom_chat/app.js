//importar as configs do servidor
var app = require('./config/server');

//Parametrizar a porta de escuta
var server = app.listen(80,function(){
    console.log('servidor online');
});

var io = require('socket.io').listen(server);
app.set('io',io);
//Criar a conexão por websocket
io.on('connection',function(socket){

    console.log('Usuario conectou');

    socket.on('disconnect',function(socket){
        console.log('usuario Desconectou');
    });

    socket.on('msgParaServidor',function(data){
        console.log(data);
        socket.emit('msgParaCliente',data);
    });

    socket.broadcast.on('msgParaServidor',function(data){
        console.log(data);
        socket.emit('msgParaCliente',data);
    });

});