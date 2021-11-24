/** 
 * Skapa en knapp "Fetch data".
 * Som hämtar data från http://mardby.se/AJK15G/lorem_comma_text.php
 * 
 * Datan är en Lorum Ipsum text, där varje ord är separerad med ett kommatecken
 * Se till att datan hämtas och att varje ord läggs in i en egen listItem <li>
 * 
 * Använd er av den inbyggda sträng-funktionen .split()
 */



 document.getElementById('hämtaknapp').addEventListener('click', function(){
    
    fetch ('http://mardby.se/AJK15G/lorem_comma_text.php')
    .then ((response) => {
        return response.text();
    })
    
    .then ((data) => {
        let text = data;
        text = text.split(',');

        for (let i = 0; i < text.length; i++){
            let listItem = document.createElement('li');
            listItem.innerHTML = text[i];
            let ul = document.getElementById('lista');
            ul = ul.append(listItem);
        }
    })

    .catch ((error) => {
        document.getElementById('lista').innerHTML = 'Sorry, error'
     })
    
    });
	