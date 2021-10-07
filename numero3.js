const prompt = require('prompt-sync')({sigint: true});

var a = parseInt(prompt("digite um número: "));




if (a % 2 == 0) {
    console.log("É par!")
} else {
    console.log("É Impar!")
}

console.log(a);