
// Exercises: Level 1

// Iterate 0 to 10 using for loop, do the same using while and do while loop


    // for loop
    const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    for (let i=0; i < number.length; i++){
        console.log(i);
    }

    // while loop 
    
    let i =0
    while (i < number.length){
        console.log(i)
        i++
    }
    
    //do while loop

    let k = 0;
    do{
        console.log(k)
        k++
    } while (k < number.length)


// Iterate 10 to 0 using for loop, do the same using while and do while loop

    // For Loop 
    for (let b = 10; b >= 0; b--){
        console.log(b);
    }
    
    // while Loop

    let b = 10;
    while (b >= 0){
        console.log(b)
        b--
    }

    let c = 10;
    do{
        console.log (c)
        c--
    }while (c >= 0)


// Use loop to print the following pattern:

  
let chr = "";
  for (let x = 0; x <= 7; x++){
    for (let y = 0; y < x; y++){
      chr = chr + ("#");
    }
    console.log (chr);
    chr = "";
    
  }
    

const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let s=0; s<num.length; s++){
    console.log (`${s} * ${s} = ${s * s}`);
}


// Using loop print the following pattern

for (i = 0; i <= 10; i ++){
    console.log(`${i} ${""} ${i**2} ${""} ${i**3}`)
}

// Use for loop to iterate from 0 to 100 and print only even numbers

for (let i = 0; i <= 100; i+=2){
    
    console.log(`${i}`)
}

// Use for loop to iterate from 0 to 100 and print only odd numbers

for (let i = 0; i <= 100; i++){
   if (i % 2 !==0){
    console.log(i);
   } 
}

// Use for loop to iterate from 0 to 100 and print only prime numbers

for (let i = 0; i <= 100; i++){
  if(i % 2 !==0)
 console.log (i)
}
 
// Use for loop to iterate from 0 to 100 and print the sum of all numbers.


/*

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

Iterate 0 to n using for loop



Use for loop to iterate from 0 to 100 and print only prime numbers



The sum of all numbers from 0 to 100 is 5050.
Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

  [2550, 2500]
Develop a small script which generate array of 5 random numbers

Develop a small script which generate array of 5 random numbers and the numbers must be unique

Develop a small script which generate a six characters random id:

5j2khz


Exercises: Level 2
Develop a small script which generate any number of characters random id:

  fe3jo1gl124g
  xkqci4utda1lmbelpkm03rba
Write a script which generates a random hexadecimal number.

'#ee33df'
Write a script which generates a random rgb color number.

rgb(240,180,80)
Using the above countries array, create the following new array.

["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
Using the above countries array, create an array for countries length'.

[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
Use the countries array to create the following array of arrays:

  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]
In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

['Finland','Ireland', 'Iceland']
In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

['Albania', 'Bolivia','Ethiopia']
Using the above countries array, find the country containing the biggest number of characters.

Ethiopia
Using the above countries array, find the country containing only 5 characters.

['Japan', 'Kenya']
Find the longest word in the webTechs array

Use the webTechs array to create the following array of arrays:

[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

Print all the elements of array as shown below.

  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

  HTML
  CSS
  JS
  REACT
  NODE
  EXPRESS
  MONGODB

Exercises: Level 3

Copy countries array(Avoid mutation)
Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
Sort the webTechs array and mernStack array
Extract all the countries contain the word 'land' from the countries array and print it as array
Find the country containing the hightest number of characters in the countries array
Extract all the countries contain the word 'land' from the countries array and print it as array
Extract all the countries containing only four characters from the countries array and print it as array
Extract all the countries containing two or more words from the countries array and print it as array
Reverse the countries array and capitalize each country and stored it as an array

*/