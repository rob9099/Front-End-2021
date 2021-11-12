/*
Skapa ett program som låter användaren välja en form genom att skriva in circle/rectangle/triangle. 
Programmet ska baserat på användarens val be om input för att beräkna den valda formens area. 
När användaren fått svara med den data som behövs ska en uträkning på arean ska och programmet skriver ut resultatet 

Gör en flowchart och sedan skriva pseudokod innan ni börjar koda.
*/

let form = prompt ('Which shape would you like between circle, rectangle or triangle?');

let circle = 'circle';
let rectangle = 'rectangle';
let triangle = 'triangle';



if (form == circle){
    let circleradius = prompt ('Enter circle diameter in cm');
    let circlearea = circleradius * circleradius * 3.1416;
    alert ('The area of the circle is: ' + circlearea + 'cm');
}

if (form == rectangle){
    let rectanglewidth = prompt ('Enter rectangle width in cm:');
    let rectangleheight = prompt ('Enter rectangle height in cm:');
    let rectanglearea = rectanglewidth * rectangleheight;
    alert ('The area of the rectangle is: ' + rectanglearea + "cm");
}

if (form == triangle){
    let trianglewidth = prompt ('Enter triangle width in cm:');
    let triangleheight = prompt ('Enter triangle height in cm:');
    let trianglearea = trianglewidth * triangleheight / 2;
    alert ('The area of the triangle is: ' + trianglearea + "cm");
}

else{
    alert ('Ogiltigt val');
}