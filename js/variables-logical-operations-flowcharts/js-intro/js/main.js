// This is a comment

/*
    This is a 
    Multiline comment
*/

// JS Datatypes
// Primitive values
console.log(typeof(42));                 // Number
console.log(typeof(4.2));                // Number
console.log(typeof(0));  
                // Number
console.log(typeof("Hello World"));      // String
console.log(typeof('Hello World'));      // String
console.log(typeof('13'));               // String
console.log(typeof(''));                 // String

console.log(typeof(true));               // Boolean
console.log(typeof(false));              // Boolean

console.log(typeof(null));               // Object, when a variable is declared and is assigned an "empty" value
console.log(typeof(undefined));          // Undefined, when a variable is declared BUT is NOT assigned a value

// Non-primitive values
console.log(typeof([1, 2, 'string', false, null]));        // Array abject
console.log(typeof({firstName: 'John', lastName: 'Doe'})); // Object


/**
 * What is a variable?
 * It's a container that holds a value
 * 
 * Can be declared with the keywords 'var', 'let' & 'const'
 * The difference between these types of declaration will be explained further later on this course
 */

console.log("################### Variables ##################");
var numb1 = 1;
var numb1 = 1;      // Allowed to re-declare a variable with var

let numb2 = 2;
// let numb2 = 3       // Not allwoed to re-declare a variable with let

let numb3 = 3.14159;

let text1 = "Jag har 5 decimaler på PI";
let text2 = "Svaret om allt i universum";


// Logical operators +, -, *, /
console.log("################### Logical Operators ##################");
let addition        = numb1 + numb2;           // 3
let subtraction     = numb1 - numb2;           // -1
let division        = numb1 / numb2;           // 0.5
let multiplication  = numb1 * numb2;           // 2

console.log(addition);
console.log(subtraction);
console.log(division);
console.log(multiplication);


// = assignment operators
// == equal value (comparision)
// += add on current value 
// -= subtract on current value 
// /= divide on current value 
// *= multiply on current value 
console.log("################### Logical Operators with assignment ##################");
let x = 5;
x += 6; 
console.log(x);     // 11
x -= 1; 
console.log(x);     // 10
x /= 2; 
console.log(x);     // 5
x *= 10; 
console.log(x);     // 50



// Concatinate strings with the keyword '+'
console.log("##################### Concatinate strings with '+' ###########")
console.log("Hello" + " World");

let string = "Hello " + "World " + "Wide " + "Web";
console.log(string);

// Concatinate strings with the keyword '+='
console.log("##################### Concatinate strings with '+=' ###########")
console.log(string);    // Hello World Wide Web
string = "Hello";       // Re-assignment
console.log(string);    // Hello
string += " World";
console.log(string);    // Hello World
string += " Wide";
console.log(string);    // Hello World Wide
string += " Web";
console.log(string);    // Hello World Wide Web


// Concatenate with string literals
console.log("##################### Concatinate string literals ###########");
let word1 = "Hello";
let word2 = "World";
let word3 = "Wide";
let word4 = "Web";

string = word1 + " " + word2 + " " + word3 + " " + word4;
console.log(string);
// May concatenate with string literals without breaking the string. Much easier then the above example.
string = `${word1} ${word2} ${word3} ${word4}`;
console.log(string);


// Concatenate strings and numbers with the keyword +
console.log("######### Concatenate strings and numbers with + ##############")
console.log(3 + 2);                       // 5
console.log('3' + '2');                   // 32
console.log('3' + 2);                     // 32
console.log(3 + 2 + '1' + 1 + 1 + 1);     // 51111


console.log("#######  alert(), prompt() and if-statment #########");

// built-in JS functions
// prompt() is a popup that asks the end-user for data
// alert() is a popup that displays info/data for the end-user


let username = prompt('Ange name');
console.log(username);

if (username == "John") {
    // If the condition is true, the code inside the if-block will be executed
    alert(`Welcome ${username}`);
}


