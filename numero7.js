const prompt = require('prompt-sync')({sigint: true});

var a = parseInt(prompt("digite um número: "));




if (a % 2 == 0) {
    console.log("É divisível por 2!")
} else if (a % 3 == 0) {
    console.log("É divisível por 3!")
} else {
    console.log("Não é divisível por 2 ou 3!")
}

console.log(a);