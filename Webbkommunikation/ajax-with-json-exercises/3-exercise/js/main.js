/** 
 * Skapa en tabell med 5 kolumner och 2 rader
 * Första raden i tabellen skall innehålla en knapp per kolumn, dvs totalt fem knappar på först raden.
 * - Första knappen skall heta "1", och hämta endast ett ord från http://mardby.se/AJK15G/lorem_json_array.php?numberOfWords=
 * - Andra knappen skall heta "2", och hämta två ord från samma URL
 * - Tredje knappen skall heta "3", och hämta tre ord från samma URL
 * - Gör samma sak för knapp 4 och 5
 * 
 * Undersök vad som visas i webbläsaren, med följande URLer:
 * http://mardby.se/AJK15G/lorem_json_array.php?numberOfWords=3
 * http://mardby.se/AJK15G/lorem_json_array.php?numberOfWords=10
 *
 * Varje knapp hämtar datan och placerar datan under respektive knapp, i andra raden.
 * Datan är en array med ord, dessa ord skall visas i en lista där varje ord är en listitem <il>
 * 
 * 
 * Skall ungefär se ut på följande sätt, efter att varje knapp gjort ett anrop
 * |-----|-----|-----|-----|-----|
 * |  1  |  2  |  3  |  4  |  5  |
 * |-----|-----|-----|-----|-----|
 * |.asd |.asd |.qwe |.qwe |.wer |
 * |     |.weq |.ewr |.gfd |.sfd |
 * |     |     |.ewr |.gfd |.cvx |
 * |     |     |     |.gfd |.dff |
 * |     |     |     |     |.bvc |
 * |-----|-----|-----|-----|-----|
 */

 let knapp1 = document.getElementsByTagName('button')[0];
 let knapp2 = document.getElementsByTagName('button')[1];
 let knapp3 = document.getElementsByTagName('button')[2];
 let knapp4 = document.getElementsByTagName('button')[3];
 let knapp5 = document.getElementsByTagName('button')[4];


 async function hämtaOrd (hurMångaOrd) {
    let länkMedAntalOrd = 'http://mardby.se/AJK15G/lorem_json_array.php?numberOfWords=' + hurMångaOrd;
    let response = await fetch(länkMedAntalOrd);
    let data = await response.json();

    let lista = '';
    let resultat = '';
    for(let ord of data){
        resultat += `
        <li>${ord}</li>
        `;
    };
    lista += `<ul>${resultat}</ul>`;
    document.getElementsByTagName('td')[hurMångaOrd -1].innerHTML = lista;

}



knapp1.addEventListener('click', function(){
    let hurMångaOrd = knapp1.innerHTML;
    hämtaOrd(hurMångaOrd);
});

knapp2.addEventListener('click', function(){
    let hurMångaOrd = knapp2.innerHTML;
    hämtaOrd(hurMångaOrd);
});

knapp3.addEventListener('click', function(){
    let hurMångaOrd = knapp3.innerHTML;
    hämtaOrd(hurMångaOrd);
});

knapp4.addEventListener('click', function(){
    let hurMångaOrd = knapp4.innerHTML;
    hämtaOrd(hurMångaOrd);
});

knapp5.addEventListener('click', function(){
    let hurMångaOrd = knapp5.innerHTML;
    hämtaOrd(hurMångaOrd);
});