/** 
 * Skapa ett textfält och en knapp "Roll dices".
 * I textfältet skall man kunna ange ett nummer, 
 * som är antal tärningar(slumpad siffra mellan 1-6), som skall hämtas från http://mardby.se/AJK15G/dice_json_array.php?numberOfDice=valueFromInput
 * 
 * Undersök vad som visas i webbläsaren, med följande URLer:
 * http://mardby.se/AJK15G/dice_json_array.php?numberOfDice=1
 * http://mardby.se/AJK15G/dice_json_array.php?numberOfDice=4
 *
 * Datan skall i sin tur visas i en lista, där varje tärning placeras i en listItem <li>
 */



document.getElementById('kastaTärningar').addEventListener('click', function(){
    let hurMångaTärningar = document.getElementById('textfält').value;
    let länkMedAntalTärningar = 'http://mardby.se/AJK15G/dice_json_array.php?numberOfDice=' + hurMångaTärningar;
    let ul = document.getElementById('ul');
	
    async function hämtaKastadeTärningar () {
        let response = await fetch(länkMedAntalTärningar)
        let data = await response.json();

        let lista = '';
        for (let tärningar of data){
            lista += `
                <li>${tärningar}</li>
            `;
        }
        ul.innerHTML = lista;
    }
    hämtaKastadeTärningar();
})