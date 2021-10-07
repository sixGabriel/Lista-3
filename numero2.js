const prompt = require('prompt-sync')({sigint: true});

var a = parseInt(prompt("digite a temperatura: "));


if (a > 36.5) {
    console.log("Está com febre!")
} else {
    console.log("não está com febre!")
}

console.log(a + "°c");