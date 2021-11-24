/** 
 * Skapa ett textfält och en knapp "Fetch data".
 * I textfältet skall man kunna ange ett nummer, 
 * som är antal ord som man vill hämta från http://mardby.se/AJK15G/lorem_json_array.php?numberOfWords=valueFromInput
 * 
 * Undersök vad som visas i webbläsaren, med följande URLer:
 * http://mardby.se/AJK15G/lorem_json_array.php?numberOfWords=3
 * http://mardby.se/AJK15G/lorem_json_array.php?numberOfWords=10
 *
 * Datan skall läggas in i en tabell <table></table>, med 2 kolumner:
 * - Kolumn 1 skall ha rubriken "Number of words", och innehålla nummret som angavs
 * - Kolumn 2 skall ha rubriken "Result", och innehålla datan. Datan är en array med ord, där varje ord skall visas i en egen listItem <li>
 * 
 * Varje anrop skall hämta och placera datan i en ny rad, i tabellen
 *  
 * Skall ungefär se ut på följande sätt:
 * |-----------------|-----------|
 * | Number of words | Result    |
 * |-----------------|-----------|
 * |        2        |   .wer    |
 * |                 |   .sfd    |
 * |-----------------|-----------|
 * |        3        |   .wer    |
 * |                 |   .sfd    |
 * |                 |   .ert    |
 * |-----------------|-----------|
 */
	
 let lista = '';

 document.getElementById('hämtaData').addEventListener('click', function(){
    let hurMångaOrd = document.getElementById('textfält').value;
    let länkMedAntalOrd = 'http://mardby.se/AJK15G/lorem_json_array.php?numberOfWords=' + hurMångaOrd;
    let tabell = document.getElementById('tabell');
	
    async function hämtaOrd () {
        let response = await fetch(länkMedAntalOrd)
        let data = await response.json();
        
        let resultat = '';
        for (let ord of data){
            resultat += `
                <li>${ord}</li>
            `;
        };
        lista += `<tr><td>${hurMångaOrd}</td><td><ul>${resultat}</ul></td></tr>`;

        tabell.innerHTML += lista;
        lista = '';
        document.getElementById('textfält').value = '';
    }
    hämtaOrd();
})