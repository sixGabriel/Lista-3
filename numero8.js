const prompt = require('prompt-sync')({sigint: true});

var a = parseInt(prompt("digite o primeiro número: "));
var b = parseInt(prompt("digite o segundo número: "));
var c = parseInt(prompt("digite o terceiro número: "));


if (a > b && a > c) {
    console.log(a + " é o maior!")
} else if (b > a && b > c) {
    console.log(b + " é o maior!")
} else {
    console.log(c + " é o maior!")
}
