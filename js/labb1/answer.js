/**
 * @preserve 7fceecfcd58819294c12188dc73599d7
 *
 * 7fceecfcd58819294c12188dc73599d7
 * javascript1
 * lab2
 * v2
 * dbwebb clone javascript1
 * 2019-10-12 10:17:00
 * v4.0.0 (2019-03-05)
 *
 * Generated 2019-10-12 12:17:00 by dbwebb lab-utility v4.0.0 (2019-03-05).
 * https://github.com/dbwebb-se/lab
 */

/*jshint maxcomplexity:false */
/* eslint-disable indent */
/* jscs:disable indent */
(function (dbwebb) {
"use strict";

var ANSWER = null;

console.log("Ready to begin.");


/** ======================================================================
 * Lab 1 - statements
 *
 * Statements and expressions in JavaScript.
 *
 * Use MDN as your reference and base to solving the exercises.
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . If, else if and else
 *
 */



/**
 * Exercise 1.1 (1 points)
 *
 * Create five variables: `card1, card2, card3, card4, card5`.
 *
 * Assign the values `4, 2, 7, 1, 11` to the variables created above.
 *
 * Add them up and put the sum in a variable called `result`.
 *
 * Answer with the variable `result`.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
let card1 = 4;
let card2 = 2;
let card3 = 7;
let card4 = 1;
let card5 = 11;


let result = card1 + card2 + card3 + card4 + card5;


ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, true);




/**
 * Exercise 1.2 (1 points)
 *
 * Use an `if statement` to see if the five cards (card1-card5) have a
 * combined sum that is higher than 21.
 *
 * Create a variable `status` and give it a different value depending on the
 * following.
 *
 * * If the sum is higher than 21, give your variable the value `"busted"`.
 * * Else give it the value `"safe"`.
 *
 * Answer with your status-variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let status;

if (card1 + card2 + card3 + card4 + card5 > 21){
    console.log (status = 'busted');
}else{
    console.log (status = 'safe');
}


ANSWER = status;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, true);




/**
 * Exercise 1.3 (1 points)
 *
 * Use `if else statements` to see if the combined value of the first three
 * cards (card1-card3) is lower, higher or exactly 21.
 *
 * Answer with a string corresponding to the result:
 * lower = `"safe"`
 * higher = `"busted"`
 * 21 = `"black jack"`
 *
 * Store the response in your status-variable and answer with it.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

if((card1 + card2 + card3) < 21){
    status = 'safe';
} else if(card1 + card2 + card3 > 21){
    status = 'safe';
}else{
    status = 'black jack';
}

 
ANSWER = status;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, true);





/**
 * Exercise 1.4 (2 points)
 *
 * Create three variables: `dealer1, dealer2, dealer3`.
 *
 * Assign the values `1, 6, 7` to the variables.
 *
 * Combine the `if`, `else if`, `else` statements and the operator `AND (&&)`
 * to see what the dealer should do. Combine as you feel needed.
 *
 * If the sum of the dealercards is lower than 17, answer with `"pick"`, if
 * the sum is higher than or equal to 17 and lower than 21 answer with
 * `"stop"`. If the sum is 21 answer with `"black jack"`. If the sum is higher
 * than 21 answer with `"busted"`.
 *
 * Store the response in a variable, and answer with it.
 *
 * PS. You can change the sum to test that your if-statement really works for
 * all values, just to try it out.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let dealer1 = 1;
let dealer2 = 6;
let dealer3 = 7;
//let total = (`${dealer1} ${dealer2} ${dealer3}`);
let total = (dealer1 + dealer2 + dealer3);
console.log(total);

if((dealer1 + dealer2 + dealer3) < 17){
    ANSWER = 'pick';
}else if((dealer1 + dealer2 + dealer3) >= 17 && (dealer1 + dealer2 + dealer3) < 21){
    ANSWER = 'stop';
}else if((dealer1 + dealer2 + dealer3) == 21){
    ANSWER = 'black jack';
}else {
    ANSWER = 'busted';
}


ANSWER = ANSWER;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, true);






/** ----------------------------------------------------------------------
 * Section 2 . Switch, case
 *
 */



/**
 * Exercise 2.1 (1 points)
 *
 * Use a switch-case statement to create a message with the type of fruit and
 * its color. You have the following type of fruits with a corresponding
 * color:
 *
 * * banana: yellow
 * * apple: green
 * * kiwi: green
 * * plum: purple
 *
 * Create a variable `myFruit` which holds the current type of your fruit. If
 * 'myFruit' is banana, the result should be a variable containing the string
 * value `"The banana is yellow."`
 *
 * Ensure that your switch-case works for all values.
 *
 * Answer with the result where `myFruit = "plum"`.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var myFruit = 'plum';

switch (myFruit) {
    case 'banana':
        myFruit = 'The banana is yellow.'
        break;
    case 'apple':
        myFruit = 'The apple is green.'
        break;
    case 'kiwi':
        myFruit = 'The kiwi is green.'
        break;
    case 'plum':
        myFruit = 'The plum is purple.'
        
}




ANSWER = myFruit;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, true);





/**
 * Exercise 2.2 (1 points)
 *
 * Extend your switch-case statement with a `default value`. The result should
 * be:
 *
 * `"That is an unknown fruit."` when the variable 'myFruit' has an unknown
 * value.
 *
 * Answer with the result where 'myFruit = pear'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
 
var myFruit2 = 'pear'

 switch(myFruit) {
     case 'banana':
         ANSWER = 'The banana is yellow.'
     case 'apple':
         ANSWER = 'The apple is green.'
     case 'kiwi':
         ANSWER = 'The kiwi is green.'
     case 'plum':
         ANSWER = 'The plum is purple.'
     default:
         ANSWER = 'That is an unknown fruit.'
 }





ANSWER = ANSWER;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, false);






/** ----------------------------------------------------------------------
 * Section 3 . For loops
 *
 */



/**
 * Exercise 3.1 (1 points)
 *
 * Use a `for-loop` to increment `481` with the value `6`, `10` times.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let svaret = 481;
for (let i = 0; i < 10; i++){
    svaret += 6;
}




ANSWER = svaret;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.1", ANSWER, false);





/**
 * Exercise 3.2 (1 points)
 *
 * Use a for-loop to decrement `551` with the value `8`, `10` times.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

 let svaret2 = 551;
 for (let i = 0; i < 10; i++){
     svaret2 -= 8;
 }




ANSWER = svaret2;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.2", ANSWER, false);





/**
 * Exercise 3.3 (3 points)
 *
 * Use a for-loop to add all the even values in the range `22` to `45` to a
 * string with each number separated by a comma `,`.
 *
 * The result should not end with a comma. You should neither have a space
 * after the comma.
 *
 * Answer with the resulting string.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


/*let svaret3 = ''
for (let i = 22; i < 45; i+=2){
    if(i < 44){
        svaret3 = svaret3 + (i + ',');
        console.log(svaret3)
    } else{
        svaret3 = svaret3 + (i);
    }
 }*/

let svaret3 = ''
for (let i = 22; i < 45; i++){
    if(i < 44 && i % 2 == 0){
        svaret3 += (i + ',');
        console.log(svaret3)
    }
    else if(i < 45 && i % 2 == 0){
        svaret3 += (i);
    }
 }



ANSWER = svaret3;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.3", ANSWER, true);





/** ----------------------------------------------------------------------
 * Section 4 . While loops
 *
 */





/**
 * Exercise 4.1 (1 points)
 *
 * Use a `while-loop` to increment `10` with the value `6` until it has
 * reached or passed `481`.
 *
 * Answer with the amount of steps needed.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let siffran = 10;
let counter = 0;

while (siffran < 481){
    siffran += 6;
    counter++;
    console.log(counter);
}


ANSWER = counter;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("4.1", ANSWER, false);






/**
 * Exercise 4.2 (1 points)
 *
 * Use a while-loop to subtract `8` from `551` until the value has reached or
 * passed `0`.
 *
 * Answer with the amount of steps needed.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


 let siffran2 = 551;
 let counter2 = 0;
 
 while (siffran2 >= 0){
     siffran2 -= 8;
     counter2++;
     console.log(counter);
 }




 ANSWER = counter2;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("4.2", ANSWER, false);





/**
 * Exercise 4.3 (3 points)
 *
 * Use a while-loop to add all the values, to a comma-separated string, in the
 * range `28` to `63`, where the value is divisable by 5 or 7.
 *
 * Answer with the resulting string.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

 let siffran3 = '';
 let i = 28;
 
 while (i <= 63){
    if(i % 5 == 0 || i % 7 == 0 && i <= 62){
        siffran3 += i + ',';
        console.log(siffran3);
    } else if (i % 5 == 0 || i % 7 == 0){
        siffran3 += i;
        console.log(siffran3);
    }
    i++;
 }




ANSWER = siffran3;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("4.3", ANSWER, false);


console.log(dbwebb.exitWithSummary());
}(window.dbwebb));
