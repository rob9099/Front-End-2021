/*
 * Element selectors
 */
console.log("############ getElementById ############");

let myTitle = document.getElementById('title');
console.log(myTitle);
myTitle.innerHTML = "<i>Some dummy title</i>"; // innerHTML renders HTML tags
// myTitle.innerText = "<i>Some dummy title</i>";  // innerText displays HTML tags as content

console.log(myTitle.innerHTML);



console.log("############ getElementsByClassName ############");
// getElementsByClassName
// returns HTMLCollection
// Similar to an array, having elements indexed and even having ptoprtyird duch as .length
// Read more about HTMLCollections: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection

let boxes = document.getElementsByClassName('box');
console.log(boxes);
console.log(boxes[2]);
console.log(boxes.length);

for (let i = 0; i < boxes.length; i++) {
    console.log(boxes[i]);

    boxes[i].style.margin = "5px";
    // boxes[i].style.backgroundColor = "skyblue";
}
// boxes[2].style.backgroundColor = 'orange';


console.log("############ getElementsByTagName ############");
// getElementsByTagName
// returns HTMLCollection
// Similar to an array, having elements indexed and even having ptoprtyird duch as .length
// Read more about HTMLCollections: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection

let dives = document.getElementsByTagName('div');
console.log(dives);
console.log(dives[2]);
console.log(dives.length);


for (let i = 0; i < dives.length; i++) {
    console.log(dives[i]);

    dives[i].style.borderRadius = "50%";
}


console.log("############ querySelector ############");

let section = document.querySelector('#content section.box');
console.log(section);
section.style.backgroundColor = "beige";


console.log("############ querySelectorAll ############");
// querySelectorAll
// returns NodeList
// Similar to an array, having elements indexed and even having ptoprtyird duch as .length
// Read more about NodeList: https://developer.mozilla.org/en-US/docs/Web/API/NodeList

dives = document.querySelectorAll('div.box');
console.log(dives);




/**
 * Handle Element Attributes
 */
console.log("############ Handle attributes ############");

let myLink = document.getElementById('link');
console.log(myLink);
console.log(myLink.href)
myLink.href = "###";
console.log(myLink.href)

// element.setAttribute(attribute, value)	
myLink.setAttribute('target', '_blank')
// myLink.target = '_blank';

/**
 * Handle events
 * Some events: click | mouseover | kepress
 */
console.log("############ Handle events ############");

myLink = document.getElementById('link');
myLink.addEventListener('click', function(e) {
    // preventDefault(), prevents the default behavior of the element
    // In this case prevents the link from opening a new window
    e.preventDefault();

    alert('You clicked the link :)');
});


let thirdDiv = document.querySelector('div.box:nth-child(3)');
thirdDiv.innerHTML = 'Third';
thirdDiv.addEventListener('mouseover', () => {
    alert('You just hovered over the third circle');
});


/**
 * Navigation
 */
 console.log("############ Navigation ############");
let main = document.getElementById('content');
console.log(main);
console.log(main.children);
console.log(main.children[2]); // Third child
console.log(main.lastElementChild);
console.log(main.firstElementChild); 
console.log(main.parentNode); 
console.log(main.previousElementSibling); 
console.log(main.nextElementSibling);

// Target the first circle, and add the text "First circle"
main.firstElementChild.innerHTML = "First circle";
// Target link-text, and add a smiley face ":)"
main.lastElementChild.firstElementChild.innerHTML += " :)"
// Target the fifth circle, add the text "Fifth circle"
// main.lastElementChild.previousElementSibling.innerHTML = "Fifth circle"
main.children[4].innerHTML = "Fifth circle";
// Target tha main headline, and add a smiley face ":)"
main.previousElementSibling.innerHTML += " :)";


/**
 * Add/Create/Delete elements
 */

console.log("############ Add/Create/Delete elements ############");

main = document.getElementById('content');

for (let i = 1; i <= 5; i++) {
    // Create element
    let newBox = document.createElement("section");
    // Add some text
    newBox.innerHTML = `<p>Box:  + ${i}`;
    newBox.innerHTML += `<button>Dummy button</button>`;
    // Add a class
    newBox.classList = 'box';
    // Add some style
    newBox.style.margin = "5px";

    newBox.addEventListener('click', function() {
        alert(newBox.innerHTML);

        // Deletes the element
        // newBox.remove(); // removes the box
        newBox.lastElementChild.remove(); // removes the button inside of the clicked box
    })

    // Places the newBox inside of main, at the bottom the main content
    main.appendChild(newBox);
    console.log(newBox);

}




console.log('*********************** Exercises *************************');


/*
 * Övningar: DOM och events
 */

/* 
1) Ändra titlen högst upp till, 'Learning how to handle JS DOM and events'
Använd getElementById och innerHTML
*/
let nytitel = document.getElementById('title');
nytitel.innerHTML = '<i>Learning how to handle JS DOM and events</i>';




/* 
2) Ersätt cirklarnas CSS klass .box med .green-box
Googla hur man tar bort/lägger till klasser på element, med JS.

Använd getElementsByTagName för att först hämta alla element, samt for-loop för att ersätta alla klasser
*/

let target = document.getElementsByTagName('div');

for (i = 0; i < 5; i++){
    //target[i].classList.remove('box');
    target[i].classList = 'green-box';
}



/* 
3) Cirklarnas height och width satt till 100px, via CSS klassen .green-box.
Ändra cirklarnas height och width till 120px.
Googla hur man ändrar ett elements höjd och bredd i JS.

Använd getElementsByClassName för att först hämta alla element, samt for-loop för att göra ändringen
*/

let size = document.getElementsByClassName('green-box');

for (i = 0; i < 5; i++){
    size[i].style.width = '120px';
    size[i].style.height = '120px';
}




/* 
4) Ge Box: 5 en orange border.

Använd querySelector för att först hämta elementet
*/

let orangeBorder = document.querySelector('main div:nth-child(5)')
orangeBorder.style.borderColor = 'Orange';


/* 
5) Lägg till en ny länk 'My second link :)' i den beiga boxen

Använd getElementById för att hämta den beiga boxen
Använd createElement för att skapa den nya länken
Använd appendChild för att lägga till länken till den beiga boxen
*/

let hämta = document.getElementById('beige-box');
let nyLänk = document.createElement('a');
nyLänk.innerText = 'My second link :)';
hämta.appendChild(nyLänk);



/* 
6) Lägg till attributet href med värdet '#####', till den nya länken
Lägg till attributet target med värdet _blank' till den nya länken

Använd setAttribute för att lägga till de nya attributen
*/

document.getElementById('beige-box').lastElementChild.setAttribute('href', '#####');
document.getElementById('beige-box').lastElementChild.setAttribute('target', '_blank');


//console.log(document.getElementById('beige-box'));



/* 
7) Lägg till en ny img-tagg (bild) i main#content

Lägg till attributet src med ett frivilligt värdet
Lägg till attributet width med värdet 100
Lägg till attributet height med värdet 100
*/

let main2 = document.getElementById('content');
let bild = document.createElement('img');
main2.appendChild(bild);
document.getElementById('content').lastElementChild.setAttribute('src', 'img/logo.png');
document.getElementById('content').lastElementChild.setAttribute('width', '100px');
document.getElementById('content').lastElementChild.setAttribute('height', '100px');

/* 
8) Lägg till en eventlistener 'mouseover' på din bild, som skriver ut en text via alert();
*/

bild.addEventListener('mouseover', () => alert('You just hovered over the picture'));



/* 
9) Lägg till en eventlistener på din länk från övning 5, som skall radera allt innehåll i den beiga boxen

Använd DOM navigeringen mySecondLink.parentNode för att hämta beiga boxen, som då är förälder till länken.
*/

let beigaBoxen = nyLänk.parentNode;
beigaBoxen.addEventListener('mouseover', () => beigaBoxen.lastChild.remove());
//beigaBoxen.addEventListener('mouseover', () => beigaBoxen.children.remove());


/* 
10) Skapa en ny section
Lägg till en border till den nyskapta sektionen
Justera sektionens height till 100px
Justera sektionens width till 200px

Skapa 2 st buttons med texten
- "Green"
- "Blue"

Lägg till eventlistener på alla 2 knappar, som justerar den nyskapta sektionens bakgrundsfärg
Knappen "Green" ändrar bakgrundsfärgen till grön osv.

Lägg alla 2 knappar innanför sektionen
Lägg till sektionen i main#content
*/

let main3 = document.getElementById('content');
let nySection = document.createElement('section');
nySection.setAttribute('width', '200px');
nySection.setAttribute('height', '100px');

let nyKnapp1 = document.createElement('button');
let nyKnapp2 = document.createElement('button');
nyKnapp1.innerText = 'Green';
nyKnapp2.innerText = 'Blue';
nySection.appendChild(nyKnapp1);
nySection.appendChild(nyKnapp2);
main3.appendChild(nySection);

nyKnapp1.addEventListener('click', () => nySection.style.backgroundColor = 'green');
nyKnapp2.addEventListener('click', () => nySection.style.backgroundColor = 'blue');