const prompt = require('prompt-sync')({sigint: true});

var a = parseInt(prompt("digite a distância percorrida: "));

var b = parseInt(prompt("digite o tempo de percurso: "));
var vm = parseInt(a / b);

if (vm > 80) {
    console.log("ultrapassou os 80km")
} else {
    console.log("não ultrapassou os 80km")
}

console.log(vm + "km");