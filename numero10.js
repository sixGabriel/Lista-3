const prompt = require('prompt-sync')({sigint: true});

var a = parseFloat(prompt("digite sua altura: "));

var b = parseFloat(prompt("digite seu peso: "));

if(b >= 45 && b < 50 && a < 1.60) {
    console.log("Novato!")
} else if (b >= 50 && b < 60 && a < 1.70) {
    console.log("Profissional!")
} else {
    console.log("Amador!")
}

