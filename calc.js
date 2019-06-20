//carregar modulo require
// igualando o require dentro de uma variável

var somaFun = require("./somar");

console.log(somaFun(1,2));

var subFun = require("./subtrair");

console.log(subFun(10,2));

var divFun = require("./dividir");

console.log(divFun(10,2));

var multiFun = require("./multiplicar");

console.log(multiFun(20,2));
