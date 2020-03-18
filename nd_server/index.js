process.title ="MeuWeb";
var args = process.argv,
port = args[2] || 7070
webServer = require('./server');

webServer.listen(port, function(){
    console.log("Servidor iniciado" + port);
});