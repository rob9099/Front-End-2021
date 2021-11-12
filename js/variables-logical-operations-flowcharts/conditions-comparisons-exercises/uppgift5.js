/*
Med den kunskap ni fått från föregående 9 uppgifter, skapa spelet sten/sax/påse som kan spelas mot datorn. 
Spela det verkliga spelet med en vän för att se hur processen går till. 
Översätt sedan detta till pseudokod eller en flowchart innan ni börjar programmera. 
Kom ihåg att bryta ner problemet i flera moduler och få dessa att funka separat.

Parprogrammering uppmuntras. Använd er av tekniker från tidigare uppgifter för att lösa denna uppgift.
*/

var nummer = Math.random();
console.log(nummer);
nummer = nummer * 2;
console.log(nummer);
nummer = Math.round(nummer);
console.log(nummer);

let användarval = prompt ('Hej, välkommen att spela Sten Sax Påse! Välj sten, sax eller påse och lycka till!');
användarval = användarval.toLowerCase();

if(nummer == 0 && användarval == 'sten'){
    alert('Lika!, försök igen');
}else if (nummer == 0 && användarval == 'sax'){
    alert('Sten slår sex, tyvärr du förlorade')
}else if (nummer == 0 && användarval == 'påse'){
    alert('Påse slår sten, grattis du vann')
}

if(nummer == 1 && användarval == 'sten'){
    alert('Sten slår sax, grattis du vann!');
}else if (nummer == 1 && användarval == 'sax'){
    alert('Lika!, försök igen')
}else if (nummer == 1 && användarval == 'påse'){
    alert('Sax slår påse, tyvärr du förlorade')
}

if(nummer == 2 && användarval == 'sten'){
    alert('Påse slår sten, tyvärr du förlorade');
}else if (nummer == 2 && användarval == 'sax'){
    alert('Sax slår påse, grattis du vann!')
}else if (nummer == 2 && användarval == 'påse'){
    alert('Lika!, försök igen')
}

if (användarval !=='sten' && användarval !=='sax' && användarval !=='påse'){
    alert('Ogiltigt val. Välj sten, sax eller påse. Försök igen')
}