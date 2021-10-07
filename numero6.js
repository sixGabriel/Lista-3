const prompt = require('prompt-sync')({ sigint: true });

var sexo = prompt("digite M para masculino e F para feminino: ").toUpperCase();

if (sexo == "M") {
    console.log("Homem.")
} else if (sexo == "F") {
    console.log("Mulher.")
}
else {
    console.log("Letra Inválida!")
}

console.log(sexo)


