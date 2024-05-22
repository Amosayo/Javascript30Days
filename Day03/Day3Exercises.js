
// Exercises: Level 1

// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

    let firstName = "John";
    let lastName = "James";
    let country = "Nigeria";
    let city = "lekki";
    let age = 28;
    let isMarried = false;
    let now = new Date();
    let year = now.getFullYear;

    console.log (typeof firstName);
    console.log (typeof lastName);
    console.log (typeof country);
    console.log (typeof city);
    console.log (typeof age);
    console.log (typeof isMarried);
    console.log (typeof year);

    // Check if type of '10' is equal to 10

    let num1 = '10';
    let num2 = 10;
    console.log (typeof num1 === typeof num2);

    // Write three JavaScript statement which provide truthy value.

    let trueValue1 = 10;
    let trueValue2 = -10;
    let trueValue3 = "It is raining";

    // Write three JavaScript statement which provide falsy value.

    let falsyValue1 = null;
    let falsyValue2 
    let falsyValue3 = "";

    console.log (trueValue1, trueValue2, trueValue3, falsyValue1, falsyValue2, falsyValue3);

    // Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

let greater = 4 > 3
let greaterEqual = 4 >= 3
let lessThan = 4 < 3
let lessEqual = 4 <= 3
let equal = 4 == 4
let equaltype = 4 === 4
let notEqual = 4 != 4
let notEqualtype = 4 !== 4
let notEqualtype2 = 4 != '4'
let equaldatatype =  4 == '4'
let notequaldatatype = 4 === '4'

console.log (greater, greaterEqual, lessThan, lessEqual, equal, equaltype, notEqual, notEqualtype, notEqualtype2, equaldatatype, notequaldatatype);

// Find the length of python and jargon and make a falsy comparison statement.

let word1 = "python";
let word2 = "jargon"

console.log (word1.length);
console.log (word2.length);

let word3 = word1 === word2 ;

console.log (word3);

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12
4 > 3 && 10 > 12
4 > 3 || 10 < 12
4 > 3 || 10 > 12
!(4 > 3)
!(4 < 3)
!(false)
!(4 > 3 && 10 < 12)
!(4 > 3 && 10 > 12)
!(4 === '4')
//There is no 'on' in both dragon and python

//Use the Date object to do the following activities
// What is the year today?

let year2 = now.getFullYear();
console.log (year2);

// What is the month today as a number?

let month = now.getMonth() + 1;
console.log (month); // month(0-11)

//What is the date today?

let day = now.getDay();

console.log (day); // // Getting the weekday as a number (0-6)

//What is the day today as a number?

console.log (day);

//What is the hours now?

let hours = now.getHours();

console.log (hours);

//What is the minutes now?

let min = now.getMinutes();

console.log (min);

//Find out the numbers of seconds elapsed from January 1, 1970 to now.

let seconds = now.getSeconds();

console.log (seconds);



/* 
Exercises: Level 1

Check if parseInt('9.8') is equal to 10


*/