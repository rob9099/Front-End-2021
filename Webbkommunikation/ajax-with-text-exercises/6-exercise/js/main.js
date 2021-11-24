/** 
 * Skapa 2 knappar, "Previous" och "Next"
 * Dessa knappar anropar samt skickar in ett värde samtidigt, som endast får vara en siffra mellan 0-4
 * Exempel:
 * - Om nuvarande värde är 2, då anropar "Next"-knappen med värde 3
 * - Om nuvarande värde är 1, då anropar "Previous"-knappen med värde 0
 * - Om nuvarande värde är 4 och "Next"-knappen trycks, här får ni välja mellan att inte göra något, eller räkna om från 0.
 * Knapparna anropar och hämtar data från http://mardby.se/AJK15G/animals.php?animal=inputValue
 * 
 * 
 * Undersök vad som visas i webbläsaren, med följande URLer:
 * http://mardby.se/AJK15G/animals.php?animal=4
 * http://mardby.se/AJK15G/animals.php?animal=0
 *
 * Datan är en sträng som är separerad med tecknet *
 * Hämta datan och placera in de olika delarna i:
 * <h1>
 * <i>
 * <p>
 * <im>
 * 
 * Exempel på hur datan delas upp och läggs in i HTML-elementen:
 * 
 * <h1>Slear</h1>
 * <i>A cross between a bear and a sloth</i>
 * <p>Lorum ipsum .......</p>
 * <img src="http://i.imgur.com/MPE8L7D.jpg"> 
 * 
 */


let inputVärde = 0;
let sidlänk = 'http://mardby.se/AJK15G/animals.php?animal=' + inputVärde;
let text = '';

fetch (sidlänk)
.then((response) => {
    return response.text();
})
.then ((data) => {
        text = data;
        text = text.split('*');
        text.pop();

    skapaElement();
})

.catch ((error) => {
    document.getElementById('body').innerHTML = 'Sorry, error: ' + error;
 })


function skapaElement(){
    let section = document.createElement('section');
    let h1 = document.createElement('h1');
    h1.innerHTML = text[0];
    let italic = document.createElement('i');
    italic.innerHTML = text[1];
    let p = document.createElement('p');
    p.innerHTML = text[2];
    let img = document.createElement('img');
    img.src = text[3];
    let body = document.getElementById('body');
    section.append(h1, italic, p, img);
    body.append(section);
}

document.getElementById('föregåendeknapp').addEventListener('click', function(){
    
    inputVärde -= 1;
    if (inputVärde < 0){
        inputVärde = 4;
    };

    let sidlänk = 'http://mardby.se/AJK15G/animals.php?animal=' + inputVärde;

    fetch (sidlänk)
    .then ((response) => {
        return response.text();
    })
    
    .then ((data) => {
        text = data;
        text = text.split('*');
        text.pop();

    skapaElement();
    
    document.querySelector('body > section').remove();
    
})

    .catch ((error) => {
        document.getElementById('body').innerHTML = 'Sorry, error: ' + error;
     })
    
    });
	



document.getElementById('nästaknapp').addEventListener('click', function(){
    
    inputVärde += 1;
    if (inputVärde >= 5){
        inputVärde = 0;
    };

    let sidlänk = 'http://mardby.se/AJK15G/animals.php?animal=' + inputVärde;

    fetch (sidlänk)
    .then ((response) => {
        return response.text();
    })
    
    .then ((data) => {
        text = data;
        text = text.split('*');
        text.pop();

    skapaElement();
    
    document.querySelector('body > section').remove();
    
})

    .catch ((error) => {
        document.getElementById('body').innerHTML = 'Sorry, error: ' + error;
     })
    
    });
	