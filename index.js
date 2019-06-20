const express = require("express"); // constante 
var app = express(); //cria uma instancia - uma cópia do framework express

//criando uma rota e enviando uma resposta ao servidor.s
app.get("/", function(req,res){
    res.send("Seja bem vindo");
})
//sempre deve ser a ultima função do código
//Função de calback - Função é execultada atraves de um evento.
app.listen(8081, function(){
    console.log("Servidor rodando no localhost:8081");
}); 