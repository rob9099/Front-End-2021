/*
Skriv ett program som läser in ett nummer från användaren. 
Addera sedan alla nummer från 1 till och med det nummer som användaren skriver in och skriv ut den totala summan i konsollen.

Tänk på att det är ett nummer vi vill skicka in.
*/

var nummer = parseInt(prompt('Hej, skriv in en siffra'));
var resultat = 0;

for(i = 0; i <= nummer; i++){
    resultat = resultat + i;
    console.log(resultat);
}