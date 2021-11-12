/*
Skriv ett "program" där datorn slår två stycken olika 6-sidiga tärningar (alltså inte samma tärning två gånger). 
Efter varje slag ska vardera tärnings värde skrivas ut i konsollen, samt dess sammanslagna värde. 
Datorn ska slå tärningarna om och om igen tills dess att den får par, alltså samma tal på båda tärningarna. 
*/

var nummer1 = Math.random();
nummer1 = nummer1 * 5 + 1;
nummer1 = Math.round(nummer1);
console.log(nummer1);

var nummer2 = Math.random();
nummer2 = nummer2 * 5 + 1;
nummer2 = Math.round(nummer2);
console.log(nummer2);

console.log(nummer1 + nummer2);


while (nummer1 != nummer2){
    nummer1 = Math.random();
    nummer1 = nummer1 * 5 + 1;
    nummer1 = Math.round(nummer1);

    nummer2 = Math.random();
    nummer2 = nummer2 * 5 + 1;
    nummer2 = Math.round(nummer2);
}

alert(nummer1 + ' ' + nummer2);