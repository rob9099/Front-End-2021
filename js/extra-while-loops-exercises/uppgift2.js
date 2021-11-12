/* 
Återgå till javascriptversionen av gissa-nummerspelet där datorn valde ett slumpat tal. 
Lägg till en whileloop som låter användaren gissa tills dess att denne har rätt
*/

var nummer = Math.random();
console.log(nummer);
nummer = nummer * 10;
console.log(nummer);
nummer = Math.round(nummer);
console.log(nummer);

let gissning = prompt ('Gissa en siffra mellan 0-10')

while (gissning != nummer){
    console.log(nummer);
    gissning = prompt ('Fel, prova igen');
}
 alert ('Grattis, du vann!');
