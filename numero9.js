const prompt = require('prompt-sync')({sigint: true});

var salario = parseInt(prompt("digite o seu salário: "));
var dependentes = parseInt(prompt("digite se possuir dependentes: "));
var temp = parseInt(prompt("digite quantos anos está na firma: "));
if (temp >= 4 && salario < 500 && dependentes >= 3) {
    var aumento = salario * 1.4
    console.log("Tem direito ao aumento!")
    console.log("salário atualizado = " + aumento + " reais.")
    console.log("Salario antigo = " + salario + " reais.")
    console.log("Total de aumento = " + (aumento - salario) + " reais.")
} else {
    console.log("Não tem direito ao aumento!")
    console.log("salario atual = " + salario + " reais.")
}




