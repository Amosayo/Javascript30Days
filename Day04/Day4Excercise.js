// Exercises: Level 1
// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

 let Age = prompt('Enter your Age: ', 'Please Enter Your Age Here!');

    let YourAge = Age;

    if (YourAge >= 18){

    console.log ("You are old enough to drive");

    }else {

    console.log ("stating to wait for the number of years he needs to turn 18.");

    }

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

    if (YourAge >= 27){
        console.log (" You are older than me. ")
    }else {
        console.log (" Am older than you!")
    }

    // If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
    let a = 4;
    let b = 3;

    if (a > b){
        console.log ("a is greater than b");
    }else {
        console.log ("a is less than b");
    }

    a > b 
    ? console.log ("a is greater than b")
    : console.log ("a is less than b")

    // Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

    let x = prompt("Enter a number ", "Please Enter a Number to check if it's Even Number: ");
    let  y = x % 2;

    if (y > 0 ){
        console.log (" The Number you enter is not an Even number");
    }else {
        console.log (" The Number you enter is an Even number");
    }
     
    // Exercises: Level 2
// Write a code which can give grades to students according to theirs scores:

let grades = prompt('Enter your Score', 'Please Enter your Score');
let score = grades; 

switch (true){

    case (score >= 80): 
    console.log ("Your Grade is A");
    break;

    case score >= 70:
    console.log ("Your Grade is B");
    break;

    case score >= 60:
    console.log ("Your Grade is C");
    break;

    case score >= 50:
    console.log ("Your Grade is D");
    break;

    default:
    console.log ("Your Grade is F");
}

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

    let month = prompt('Enter month', 'please enter Month:');
    let season = month;

    switch(true){

        case ("September" || "October" || "November"):
            console.log ("the season is Autumn.");
            break;

        case ("December" || "January" || "February"):
             console.log ("the season is Winter.");
             break;

        case ("March" || "April" || "May"):
            console.log ("the season is Spring.");
            break;

        case ("June" || "July" || "August"):
            console.log ("the season is Summer.");
            break;

        default:
            console.log ("Not in any season");
    }
/*


September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer

Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.


Exercises: Level 3
Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.
Write a program which tells the number of days in a month, now consider leap year.
*/