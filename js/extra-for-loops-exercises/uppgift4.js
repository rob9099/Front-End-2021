/*
Använd din kod från uppgift 3.

Låt nu användaren skriva in 3 nummer istället.

Programmet ska
- Räkna från input 1
- Till input 2
- Med input 3 som ökning
*/

var inputnummer1 = parseInt(prompt('Hej, Från vilken siffra vill du att loopen börjar?'));
var inputnummer2 = parseInt(prompt('Hej, Från vilken siffra vill du att loopen slutar?'));
var inputnummer3 = parseInt(prompt('Hej, Hur stor vill du att ökningen ska vara från siffra 1 till siffra 2?'));
console.log(inputnummer1);
console.log(inputnummer2);
console.log(inputnummer3);


for (i = inputnummer1; i <= inputnummer2; i = i + inputnummer3){
    console.log(i);
}