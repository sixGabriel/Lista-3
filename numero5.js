const prompt = require('prompt-sync')({sigint: true});

var a = parseFloat(prompt("digite a primeira nota: "));

var b = parseFloat(prompt("digite a segunda nota: "));
var c = parseFloat(prompt("digite a terceira nota: "));


if (a > 6) {
    console.log("nota 1 = " + a + " - Aprovado!")
} else if ((a < 6) && (a > 5)) {
   console.log("nota 1 = " + a + " - Prova Final!")
}  else {
    console.log("nota 1 = " + a + " - Reprovado!")

} console.log("\n")
if (b > 6) {
    console.log("nota 2 = " + b + " - Aprovado!")
} else if ((b < 6) && (b > 5)) {
   console.log("nota 2 = " + b + " - Prova Final!")
}  else {
    console.log("nota 2 = " + b + " - Reprovado!")

}console.log("\n")
if (c > 6) {
    console.log("nota 3 = " + c + " - Aprovado!")
} else if ((c < 6) && (c > 5)) {
   console.log("nota 3 = " + c + " - Prova Final!")
}  else {
    console.log("nota 3 = " + c + " - Reprovado!")

}


