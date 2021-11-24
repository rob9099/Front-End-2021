/** 
 * Kopiera in koden från föregående uppgift "5-exercise"
 * 
 * Bygg vidare på inläggslistan
 * - Se till att varje inlägg visar tillhörande taggar, under inläggs-texten. Nedan illustrerar hur ett inlägg bör se ut.
 * 
 * 
 * 
 * Today is awesome!
 * 
 * 2015-11-18
 *
 * Bacon ipsum dolor amet pastrami tenderloin pork chop jerky corned beef ground round bresaola flank. 
 * Salami porchetta pancetta tenderloin, flank shoulder turducken pig jerky filet mignon. 
 * Flank sausage leberkas corned beef venison hamburger. 
 * Turkey pork loin short ribs meatball shankle sausage leberkas, bresaola pancetta pork jerky. 
 * Beef ribs flank corned beef pastrami.
 * 
 *      Tags: Bacon ipsum, tenderloin, pork, jerky, pancetta, pastrami 
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