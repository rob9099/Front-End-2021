/*
Ni ska programmera ett spel som går ut på att användaren ska gissa ett slumpvalt nummer 
mellan 0 och 10 som programmet har slumpat fram i förväg. 
Om spelaren gissar fel så ska den få ett försök till (totalt 2 gissningar) 
tillsammans med en text som berättar om gissningen var för hög eller för låg. 
Om spelaren gissar rätt ska spelet meddela spelaren att den har vunnit. 

Gör leken i verkligheten tillsammans med en bordskamrat och tänk efter hur ni gör denna process, detta kommer att underlätta tänkandet.

När ni har fått en känsla för hur detta utspelar sig mellan två människor ska ni översätta det för datorn. 
Börja med att göra en flowchart som beskriver processen. 
Gå sedan vidare och skriv pseudokod. 
Nedan finner ni en startkod för hur man gör ett slumpvalt nummer.
*/ 

//Tar ett slumpvalt värde mellan 0 och 10
var nummer = Math.random();
console.log(nummer);
nummer = nummer * 10;
console.log(nummer);
nummer = Math.round(nummer);
console.log(nummer);


/* FORTSÄTT MED EGEN KOD HÄR */

let gissning1 = prompt ('Gissa en siffra mellan 0-10, du har två försök på dig')

if (gissning1 == nummer){
    alert ('Grattis du gissade rätt!')
    exit();
} else if (gissning1 < nummer){
    alert ('Tyvärr, din gissning var för lågt')
} else{
    alert ('Tyvärr, din gissning var för högt')
}

let gissning2 = prompt ('Gissa igen')

if (gissning2 == nummer){
    alert ('Grattis du gissade rätt!')
} else{
    alert ('Tyvärr, fel igen. Börja om från början')
}



/*let nummer1 = prompt ('gissa');
console.log(nummer1);

if (nummer1 > nummer){
    nummer1 = prompt ('För högt');
} else if(nummer1 < nummer){
    nummer1 = prompt ('För lågt')
}

if (nummer1 == nummer){
    alert ('Du vann');
} else {
    alert ('Du förlorade')
}*/