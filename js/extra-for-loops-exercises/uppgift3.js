/*
Skriv ett program som tar ett nummer från användaren. Gör en loop som räknar från 0 till användarens input i konsollen.
Se till så att input är ett nummer.
*/

var inputnummer = parseInt(prompt('Hej, hur många gånger vill du att loopen ska köras?'));
console.log(inputnummer);
console.log(typeof inputnummer);


if(typeof inputnummer == 'number'){
    for (i = 0; i <= inputnummer; i++){
        console.log(i);
    }
}
else if (typeof inputnummer == NaN){
    alert('Vänligen skriv endast siffror');
}