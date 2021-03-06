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
 * ??vningar: DOM och events
 */

/* 
1) ??ndra titlen h??gst upp till, 'Learning how to handle JS DOM and events'
Anv??nd getElementById och innerHTML
*/
let nytitel = document.getElementById('title');
nytitel.innerHTML = '<i>Learning how to handle JS DOM and events</i>';




/* 
2) Ers??tt cirklarnas CSS klass .box med .green-box
Googla hur man tar bort/l??gger till klasser p?? element, med JS.

Anv??nd getElementsByTagName f??r att f??rst h??mta alla element, samt for-loop f??r att ers??tta alla klasser
*/

let target = document.getElementsByTagName('div');

for (i = 0; i < 5; i++){
    //target[i].classList.remove('box');
    target[i].classList = 'green-box';
}



/* 
3) Cirklarnas height och width satt till 100px, via CSS klassen .green-box.
??ndra cirklarnas height och width till 120px.
Googla hur man ??ndrar ett elements h??jd och bredd i JS.

Anv??nd getElementsByClassName f??r att f??rst h??mta alla element, samt for-loop f??r att g??ra ??ndringen
*/

let size = document.getElementsByClassName('green-box');

for (i = 0; i < 5; i++){
    size[i].style.width = '120px';
    size[i].style.height = '120px';
}




/* 
4) Ge Box: 5 en orange border.

Anv??nd querySelector f??r att f??rst h??mta elementet
*/

let orangeBorder = document.querySelector('main div:nth-child(5)')
orangeBorder.style.borderColor = 'Orange';


/* 
5) L??gg till en ny l??nk 'My second link :)' i den beiga boxen

Anv??nd getElementById f??r att h??mta den beiga boxen
Anv??nd createElement f??r att skapa den nya l??nken
Anv??nd appendChild f??r att l??gga till l??nken till den beiga boxen
*/

let h??mta = document.getElementById('beige-box');
let nyL??nk = document.createElement('a');
nyL??nk.innerText = 'My second link :)';
h??mta.appendChild(nyL??nk);



/* 
6) L??gg till attributet href med v??rdet '#####', till den nya l??nken
L??gg till attributet target med v??rdet _blank' till den nya l??nken

Anv??nd setAttribute f??r att l??gga till de nya attributen
*/

document.getElementById('beige-box').lastElementChild.setAttribute('href', '#####');
document.getElementById('beige-box').lastElementChild.setAttribute('target', '_blank');


//console.log(document.getElementById('beige-box'));



/* 
7) L??gg till en ny img-tagg (bild) i main#content

L??gg till attributet src med ett frivilligt v??rdet
L??gg till attributet width med v??rdet 100
L??gg till attributet height med v??rdet 100
*/

let main2 = document.getElementById('content');
let bild = document.createElement('img');
main2.appendChild(bild);
document.getElementById('content').lastElementChild.setAttribute('src', 'img/logo.png');
document.getElementById('content').lastElementChild.setAttribute('width', '100px');
document.getElementById('content').lastElementChild.setAttribute('height', '100px');

/* 
8) L??gg till en eventlistener 'mouseover' p?? din bild, som skriver ut en text via alert();
*/

bild.addEventListener('mouseover', () => alert('You just hovered over the picture'));



/* 
9) L??gg till en eventlistener p?? din l??nk fr??n ??vning 5, som skall radera allt inneh??ll i den beiga boxen

Anv??nd DOM navigeringen mySecondLink.parentNode f??r att h??mta beiga boxen, som d?? ??r f??r??lder till l??nken.
*/

let beigaBoxen = nyL??nk.parentNode;
beigaBoxen.addEventListener('mouseover', () => beigaBoxen.lastChild.remove());
//beigaBoxen.addEventListener('mouseover', () => beigaBoxen.children.remove());


/* 
10) Skapa en ny section
L??gg till en border till den nyskapta sektionen
Justera sektionens height till 100px
Justera sektionens width till 200px

Skapa 2 st buttons med texten
- "Green"
- "Blue"

L??gg till eventlistener p?? alla 2 knappar, som justerar den nyskapta sektionens bakgrundsf??rg
Knappen "Green" ??ndrar bakgrundsf??rgen till gr??n osv.

L??gg alla 2 knappar innanf??r sektionen
L??gg till sektionen i main#content
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