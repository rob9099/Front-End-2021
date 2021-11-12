/*
1. Byt ut i koden så att användaren blir utelåst från sitt konto efter 4 försök istället.
2. Spara ner maxförsöken till en variabel istället för ett nummer och använd den där det behövs.
*/


var pin = 1234;
var försök = 0;

var input = prompt ('Hej, välkommen till banken. Mata in din pin kod')

while (input != pin && försök < 2){
  prompt('Fel, försök igen')
  försök++
}

if(input == pin){
  alert('Godkänt, välkommen')
}
else{
  alert('Kontot spärrad')
}