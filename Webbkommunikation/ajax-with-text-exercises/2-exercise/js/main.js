/** 
 * Skapa ett textfält och en knapp "Fetch data".
 * I textfältet skall man kunna ange ett nummer, 
 * som är antalet ord som skall hämtas från http://mardby.se/AJK15G/lorem_text_random.php?numberOfWords=valueFromInput
 * 
 * Undersök vad som visas i webbläsaren, med följande URLer:
 * http://mardby.se/AJK15G/lorem_text_random.php?numberOfWords=3
 * http://mardby.se/AJK15G/lorem_text_random.php?numberOfWords=10
 *
 * För varje anrop, skall datan hämtas och visas i en ny listitem <li>
 */


document.getElementById('hämtaknapp').addEventListener('click', function(){
    
    let antalOrd = document.getElementById('inputfält').value;
    
    fetch ('http://mardby.se/AJK15G/lorem_text_random.php?numberOfWords=valueFromInput')
    .then ((response) => {
        return response.text();
    })
    
    .then ((data) => {
        let text = data;
        text = text.split(' ');
        text = text.slice(0, antalOrd);
        text = text.join(' ');
        document.getElementById('textfält').innerHTML = text;
    })

    .catch ((error) => {
        document.getElementById('textfält').innerHTML = 'Sorry, error'
     })


     
    fetch ('http://mardby.se/AJK15G/lorem_text_random.php?numberOfWords=3')
    .then ((response) => {
        return response.text();
    })

    .then ((data) => {
        let listItem1 = document.createElement('li');
        listItem1.innerHTML = data;
        listItem1.className = 'listItem1'
        console.log(listItem1);
        document.getElementById('lista').appendChild(listItem1);
    })

    .catch ((error) => {
        let listItem1 = document.createElement('li');
        listItem1.className = 'listItem1'
        document.getElementById('lista').appendChild(listItem1);
        listItem1.innerHTML = 'Sorry, error'
     })

     
     
     
     fetch ('http://mardby.se/AJK15G/lorem_text_random.php?numberOfWords=30')
     .then ((response) => {
         return response.text();
     })
 
     .then ((data) => {
         let listItem2 = document.createElement('li');
         listItem2.innerHTML = data;
         listItem2.className = 'listItem2'
         console.log(listItem2);
         document.getElementById('lista').appendChild(listItem2);
     })
 
     .catch ((error) => {
         let listItem2 = document.createElement('li');
         listItem2.className = 'listItem2'
         document.getElementById('lista').appendChild(listItem2);
         listItem2.innerHTML = 'Sorry, error'
      })
});
	