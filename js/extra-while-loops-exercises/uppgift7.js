/*
Skriv ett "program" som tar emot input från användaren i form av nummer. 
För varje nummer som kommer in, addera till det tidigare inlagda numret och skriv ut den totala summan i konsollen. 
Låt loopen köras om tills dess att användaren skriver in 0.

Tänk på att javascript gör om allt vi skickar in till strings, 
vilket betyder att vi inte kan plussa inputsen rakt av med varandra.
Säg därför att vår input är av typen Number genom att skriva det före prompt.

HINT: googla om den inbyggda JS funktionen parseInt();
*/

var input = 0;

/*while (input != 1){
    input = input + parseInt(prompt('Mata in en siffra'));
    alert('Summan är ' + input);
}*/

while (nyasiffran != 0){
    var nyasiffran = 0;
    nyasiffran = prompt('Mata in en siffra');
    input = input + parseInt(nyasiffran);
    alert('Summan är ' + input);
}