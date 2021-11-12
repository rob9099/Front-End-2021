/* 

Skapa ett program som frågar efter namn och ålder samt sparar ner dessa i separata variabler.
Börja med att göra en flowchart och sedan skriva pseudokod, detta för att arbeta in förberedelsemetoder inför programmeringsproblem.

Beroende på vilken åldern användaren skriver in ska olika popups komma upp. Dessa ska ni styra med if/else statements.

följande regler ska gälla:

* programmet ska svara med namnet innan den skriver ut reglerna

* om personen är under 15, visa texten "Du måste ha hjälm när du cyklar"

* om personen är under 18, visa texten "Du får inte rösta"

* om personen är under 23, visa texten "Det blir ingen finlandsfärga"

* om personen är över 23, visa texten "Du är gammal nog att göra vad du vill"

Programmet ska bete sig enligt följande när du är klar:

Hej, vad heter du? :Micke
Ok Micke, hur gammal är du? :17

Du får inte rösta, Micke!
Det blir ingen finlandsfärga, Micke!

*/

let namn = prompt ('Hej, vad heter du?');
let ålder = prompt ('Hej ' + namn + ',hur gammal är du?');

let under15 = 'Du måste ha hjälm när du cyklar, ';
let under18 = 'Du får inte rösta, ';
let under23 = 'Det blir ingen finlandsfärga, ';
let över23 = 'Du är gammal nog att göra vad du vill, ';

if (ålder < 15){
    alert(under15 + namn + "!\n" + under18 + namn + "!\n" + under23 + namn + "!")
}

if (ålder <18){
    alert(under18 + namn + "!\n" + under23 + namn + "!")
}

if (ålder <23){
    alert(under23 + namn + "!")
}else{
    alert(över23 + namn + "!")
}