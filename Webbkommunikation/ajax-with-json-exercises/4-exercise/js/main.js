'use strict';

/** 
 * 
 * Skapa en meny med 3 länkar: 'Blog posts', 'Author', 'About'
 * Beroende på vilken länk man trycker, skall sidans innehåll uppdateras via API anrop till: http://mardby.se/AJK15G/simple_json.php
 * Notera att länkarna skall EJ ladda om sidan, utan se till att anropen endast uppdaterar en HTML element (ex div#content), där sidans innehåll placeras
 * 
 * Klickar man på 'About'-länken
 *  - Visa då endast en rubrik "About" tillsammans med texten som finns i 'about'-parametern
 * 
 * Klickar man på 'Author'-länken
 *  - Visa då endast en rubrik "Author" tillsammans med texten som finns i 'author'-parametern
 *        
 *
 */

 let blogPosts = document.getElementsByTagName('a')[0];
 let author = document.getElementsByTagName('a')[1];
 let about = document.getElementsByTagName('a')[2];


async function hämtaBlog (whichDataWouldYouLike) {
    
    try {
        let response = await fetch ('http://mardby.se/AJK15G/simple_json.php');
        let data = await response.json();
        let content = document.getElementById('content');

        if (whichDataWouldYouLike == 'Author'){
            let resultat = `<section><article><h1>${whichDataWouldYouLike}</h1>${data.author}</article></section>`;
            content.innerHTML = resultat;
        }else if (whichDataWouldYouLike == 'About'){
            let resultat = `<section><article><h1>${whichDataWouldYouLike}</h1>${data.about}</article></section>`;
            content.innerHTML = resultat;
        };

    } catch (error) {
        content.innerHTML = 'sorry, error: ' + error;
    };
}

author.addEventListener('click', function(e){
    e.preventDefault();
    let author = 'Author';
    hämtaBlog(author);
})

about.addEventListener('click', function(e){
    e.preventDefault();
    let author = 'About';
    hämtaBlog(author);
})







/*function skapaEnSektion (vilkenDataVillDuHa){
    let lista = '';
    lista += `<section>${data.vilkenDataVillDuHa}</section>`;
    console.log(lista);

}*/

/*author.addEventListener('click', function(){
    let author = 'author';
    hämtaBlog(skapaEnSektion(author));
})*/

/*let logga = 'log';
console.logga(logga);*/
