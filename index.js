const express = require("express"); // constante 
var app = express(); //cria uma instancia - uma cópia do framework express

//criando uma rota e enviando uma resposta ao servidor.s
app.get("/", function(req,res){
    res.send("Seja bem vindo");
})
//req é a requisicao e res é a mensagem para o cliente
//criando uma outra rota para uma outra página
app.get("/sobre", function(req,res){
    res.send("Minha página sobre");
})

//criando uma outra rota blog 
app.get("/blog",function(req,res){
    res.send("Bem vindo ao blog");
})
// quando coloca /: é pq é um parametro
app.get('/ola/:cargo/:nome', function(req,res){
    res.send(req.params);
//mostrando os parametros para o usuario
})
app.get('/home/:escola/:idade',function(req,res){
    res.send("Essa é a escola "+ req.params.escola + " Os alunos tem aproximadamente "+req.params.idade + " anos");

})
//sempre deve ser a ultima função do código
//Função de calback - Função é execultada atraves de um evento.
app.listen(8081, function(){
    console.log("Servidor rodando no localhost:8081");
}); 