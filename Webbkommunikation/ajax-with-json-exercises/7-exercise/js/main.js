/** 
 * Kopiera in koden från föregående uppgift "6-exercise"
 * 
 * Bygg vidare på inläggslistan
 * - Se till att varje inlägg endast visar sin rubrik, resten av inlägget skall vara dolt
 * - Rubriken skall vara en klickbar länk (som EJ laddar om sidan)
 * - När man trycker på en rubrik, då skall inläggets innehåll visas under rubriken. Trycker man igen, då döljs innehållet återigen.
 * - Extra (jQuery): Försök lägga till en animation som visar/döljer inläggsinnehållet på ett snyggt sätt. Ex slide up/slide down
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
            <h2 class='blogPostH2'><a href="#">${blogPost.title}</a></h2>
            <i class='hide'>${blogPost.date}</i>
            <p class='hide'>${blogPost.text}</p>
            <span class='hide'> <b>tags:</b> ${blogPost.tags}</span>
            </article>
            `;

            content.innerHTML = resultat;
        };

        let h2AddEventListener = document.querySelectorAll('article h2');
        console.log(h2AddEventListener);
        let allArticles = document.querySelectorAll('article');
        console.log(allArticles);
        console.log(allArticles[0].children);
        console.log(allArticles[0].getElementsByTagName('p'));
        let test1 = allArticles[0].getElementsByTagName('p');
        console.log(test1);
        let test2 = allArticles[0].getElementsByClassName('hide');
        console.log(test2);


        for(let i = 0; i < h2AddEventListener.length; i++){
                h2AddEventListener[i].addEventListener('click', function(){

                
                let elementsToShow = allArticles[i].getElementsByClassName('hide');
                let elementsToShowToArray = Array.from(elementsToShow);
                console.log(elementsToShowToArray);
               

                /*for(let i = 0; i < 3; i++){
                    elementsToShowToArray[i].classList.toggle('hide');
                }*/
                
                
                
                //test1[i].classList.toggle('hide');
                //test1[1].classList.toggle('hide');
                //allArticles[i].getElementsByTagName('i').classList.toggle('hide');

                allArticles[i].querySelector('i').classList.toggle('hide');
                allArticles[i].querySelector('p').classList.toggle('hide');
                allArticles[i].querySelector('span').classList.toggle('hide');
                //document.querySelector('article p').classList.toggle('hide');
                //document.querySelector('article i').classList.toggle('hide');
                //allArticles[i].getElementsByClassName('hide').classList.toggle('hide');
            })
        }

        resultat += `</section>`
        
    }
};

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
    //blogPostsLink.classList.toggle('hide');
})

/*blogPostH2.addEventListener('click', function(){
    blogPostH2.classList.toggle('hide');
});*/