
// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

let base = prompt('Enter a base Number' , 'Enter Base Number');
let height = prompt('Enter a height Number' , 'Enter heigt Number');
let area = 0.5 * base * height;
console.log (area);

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

let sideA =prompt('Enter side a  Number' , 'Enter side a Number');
let sideB =prompt('Enter side b  Number' , 'Enter side b Number');
let sideC =prompt('Enter side c  Number' , 'Enter side c Number');
let perimeter= sideA + sideB + sideC
console.log (perimeter);

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

let length = prompt ('Enter the Length' , ' Enter the length of rectangle');
let width = prompt ('Enter the width' , ' Enter the width of rectangle');

let rectangleOfArea = length * width;
let perimeterOfRectangle = 2 * (length + width);

console.log (rectangleOfArea, perimeterOfRectangle);

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

const pi = 3.14;
let radius = prompt ('Enter the radius' , ' Enter the radius of a circle');

let areaCircle = pi * radius * radius;
let circumferenceCircle = 2 * pi * radius

console.log (areaCircle, circumferenceCircle);

// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

let workHours = prompt('Enter the Hours', 'Please Enter the Hours Works');
let ratePerHours = prompt('Enter the rate per hours', 'Please Enter the rate per hours')
let weeklyEaring = workHours * ratePerHours;
 
console.log (`Your pay is : ${weeklyEaring}`);

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

let x = -1; 
let y = ( (x * 2 ) + (6 * x) + 9 ); 

console.log (y);

// If the length of your name is greater than 7 say, your name is long else say your name is short.

//Compare your first name length and your family name length and you should get this output.

let fName = 'Asabeneh'
let lName = 'Yetayeh'

let names = (fName.length > lName.length);

console.log (names);

console.log(fName.length);

let FName = 'Guerrerouio'

FName.length > 7 
? console.log ('your name is long') 
: console.log ('your name is short');

// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250
let yourAge = 25
let totalAge =  myAge + yourAge

console.log (`I am ${totalAge} years older than you.`);

//Exercises: Level 3
// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05

const today = new Date();
const tYear = today.getFullYear();
const tMonth = today.getMonth() + 1; //(0 - 11)
const tToday = today.getDate(); // (1 -31)
const thours = today.getHours().toString().padStart(2 ,'0');
const tminute = today.getMinutes().toString().padStart(2 ,'0');

console.log(`${tYear} / ${tMonth} / ${tToday}: ${thours} : ${tminute} `);

/*
    Exercises: Level 2

Calculate the slope, x-intercept and y-intercept of y = 2x -2

Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

Compare the slope of above two questions.

Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.
Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

Enter number of years you live: 100
You lived 3153600000 seconds.
Create a human readable time format using the Date time object

YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm

*/