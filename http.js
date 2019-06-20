var http = require('http');

http.createServer(function(req,res){
    //res resposta para o usuario.
    res.end("Olá!");
}).listen(8081);
//criando um servidor http e o listen serve para dizer qual porta quer usar

console.log("O servidor esta rodando");