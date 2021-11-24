/** 
 * 
 * Kopiera in din lösning från övning 2
 * Följande skall justeras
 * 
 * Datan skall läggas in i en tabell <table></table>, med 2 kolumner:
 * - Kolumn 1 skall ha rubriken "Number of words", och innehålla antalet nummer som angavs
 * - Kolumn 2 skall ha rubriken "Result", och innehålla den datan från anropet. 
 * 
 * Läs om tables
 * - HTML: https://www.w3schools.com/html/html_tables.asp
 * - CSS:  https://www.w3schools.com/css/css_table.asp
 * 
 * Varje anrop hämtar och placera datan i en ny rad, i tabellen
 * 
 * Skall ungefär se ut på följande sätt, efter 3 olika anrop har gjorts
 * |-----------------|------------|
 * | Number of words |   Result   |
 * |-----------------|------------|
 * |        3        | qwe asd ds |
 * |-----------------|------------|
 * |        1        | asd        |
 * |-----------------|------------|
 * |        2        | ewf rwer   |
 * |-----------------|------------|
 * 
 */


 document.getElementById('hämtaknapp').addEventListener('click', function(){
    
    let användarInput = document.getElementById('inputfält').value;
    
    fetch ('http://mardby.se/AJK15G/lorem_text_random.php?numberOfWords=valueFromInput')
    .then ((response) => {
        return response.text();
    })
    
    .then ((data) => {
        let text = data;
        text = text.split(' ');
        text = text.slice(0, användarInput);
        text = text.toString();
        text = text.replaceAll(',', ' ')
        //let tabell = document.getElementsByTagName('table');
        let tabell = document.getElementById('tabell');
        let skapaTabellRad = document.createElement('tr');
        
        let skapaTabellDataAntalOrd = document.createElement('td');
        skapaTabellDataAntalOrd.innerHTML = användarInput;
        skapaTabellRad.appendChild(skapaTabellDataAntalOrd);
        
        let skapaTabellDataOrd = document.createElement('td');
        skapaTabellDataOrd.innerHTML = text;
        skapaTabellRad.appendChild(skapaTabellDataOrd);

        tabell.appendChild(skapaTabellRad);

    })

    .catch ((error) => {
        document.getElementById('textfält').innerHTML = 'Sorry, error'
     })
    
    });