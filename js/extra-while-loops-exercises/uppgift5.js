/*
Gå till din förbättrade version av siffergissarspelet du har gjort i uppgift 2 och lägg till en räknare som håller koll på antalet gissningar. 
När spelaren sedan gissar rätt, skriv ut antalet gissningar det tog innan användaren svarade rätt
*/

var nummer = Math.random();
console.log(nummer);
nummer = nummer * 10;
console.log(nummer);
nummer = Math.round(nummer);
console.log(nummer);

let gissning = prompt ('Gissa en siffra mellan 0-10')
let antalgissningar = 0;

while (gissning != nummer){
    console.log(nummer);
    gissning = prompt ('Fel, prova igen');
    antalgissningar++;
}
 alert ('Grattis, du vann! Du klarade det på ' + antalgissningar + ' gissningar');