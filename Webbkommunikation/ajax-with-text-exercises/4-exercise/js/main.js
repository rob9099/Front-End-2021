/** 
 * Kopiera in din lösning från övning 3
 * Följande skall justeras
 * 
 * Anropet sker nu istället till följande URL: http://mardby.se/AJK15G/lorem_text_slow.php?numberOfWords=
 * Det gör samma saker, men anropet är betydligt långsammare via den nya URL:en
 * Medan anropet görs, skall en loading.gif bild visas, för att visa att anropet håller på att laddas/utföras.
 * Så fort datan har hämtats, ta bort gif-bilden och visa resultet i en ny rad i tabellen.
 * 
 *
 */


 document.getElementById('hämtaknapp').addEventListener('click', function(){
    
    let användarInput = document.getElementById('inputfält').value;
    
    async function hämta(){
        
        let body = document.getElementById('body');
        let laddningsbild = document.createElement('img');
        laddningsbild.id = 'laddningsbild';
        laddningsbild.src = 'img/loading.gif';
        body.appendChild(laddningsbild);
        
        let response = await fetch ('http://mardby.se/AJK15G/lorem_text_slow.php?numberOfWords=');
        let data = await response.text();

        let text = data;
        text = text.split(' ');
        text = text.slice(0, användarInput);
        text = text.toString();
        text = text.replaceAll(',', ' ')
        let tabell = document.getElementsByTagName('table')[0];
        console.log(tabell);
        let skapaTabellRad = document.createElement('tr');
        
        let skapaTabellDataAntalOrd = document.createElement('td');
        skapaTabellDataAntalOrd.innerHTML = användarInput;
        skapaTabellRad.appendChild(skapaTabellDataAntalOrd);
        
        let skapaTabellDataOrd = document.createElement('td');
        skapaTabellDataOrd.innerHTML = text;
        skapaTabellRad.appendChild(skapaTabellDataOrd);

        tabell.appendChild(skapaTabellRad);

        laddningsbild.remove();
    };

    hämta()
    .catch (error => {
    document.getElementById('textfält').innerHTML = 'Sorry, error: ' + error;
    laddningsbild.remove();
    });
    
    });