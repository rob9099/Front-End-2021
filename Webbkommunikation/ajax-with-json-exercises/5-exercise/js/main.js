'use strict';
/** 
 * Kopiera in koden från föregående uppgift "4-exercise"
 * 
 * Skapa en 3:e länk: 'Blog posts'
 * Beroende på vilken länk man trycker, skall sidans innehåll uppdateras via API anrop till: http://mardby.se/AJK15G/simple_json.php
 * Notera att länkarna skall EJ ladda om sidan, utan se till att anropen endast uppdaterar en HTML element (ex div#content), där sidans innehåll placeras
 * 
 * Klickar man på 'Blog posts'-länken
 *  - Sidan skall innehålla en lista av alla blogg-inlägg, som finns i 'blog_posts'-parametern.
 *  - Ordet lista i detta fall syftar EJ på att man använder <ul>, utan se till att inläggen visas under varann likt en lista
 *  - Varje inlägg skall visa:
 *       - 'title'- parametern som en h2-rubrik
 *       - 'date'- parametern under rubriken i kursiv textstil
 *       - 'text'- parametern under datum, i en egen <p>-element
 *          
 *
 */

 let blogPostsLink = document.getElementsByTagName('a')[0];
 let authorLink = document.getElementsByTagName('a')[1];
 let aboutLink = document.getElementsByTagName('a')[2];


async function hämtaBlog (whichDataWouldYouLike) {
    let response = await fetch ('http://mardby.se/AJK15G/simple_json.php');
    let data = await response.json();
    let content = document.getElementById('content');
    

    if (whichDataWouldYouLike == 'Author'){
        let resultat = `<section><article><h1>${whichDataWouldYouLike}</h1><p>${data.author}</p></article></section>`;
        content.innerHTML = resultat;
        console.log(resultat);
    }else if (whichDataWouldYouLike == 'About'){
        let resultat = `<section><article><h1>${whichDataWouldYouLike}</h1><p>${data.about}</p></article></section>`;
        content.innerHTML = resultat;
    }else{
        let resultat = 
        `<section>
        <h1>${whichDataWouldYouLike}</h1>`;
        
        for (let blogPost of data.blog_posts){
            resultat += 
            `<article>
            <h2>${blogPost.title}</h2>
            <i>${blogPost.date}</i>
            <p>${blogPost.text}</p>
            <p> <b>tags:</b> ${blogPost.tags}</p>
            </article>
            ` 
        }
        resultat += `</section>`
        content.innerHTML = resultat;
    }

}

authorLink.addEventListener('click', function(e){
    e.preventDefault();
    let author = 'Author';
    hämtaBlog(author);
})

aboutLink.addEventListener('click', function(e){
    e.preventDefault();
    let about = 'About';
    hämtaBlog(about);
})

blogPostsLink.addEventListener('click', function(e){
    e.preventDefault();
    let blogPosts = 'Blog posts';
    hämtaBlog(blogPosts);
})