//Skriv alt jeres kode her
console.log("CONSOLE.log() - PRINTOPGAVER")
console.log(
  "Opgave 1.1 - Lav et program, som skriver “Hello World” i konsollen"
);
//Lav jeres svar her
console.log("Hello World");

console.log("Opgave 1.2 - Lav et program, som skriver “Hello” og på næste linje skriver “World” i konsollen")
//either two commands, or \n for newline
console.log("Hello\nWorld")
//console.log("Hello")
//console.log("World")

console.log("Opgave 1.3 - Lav et program, som skriver følgende i konsollen.")
//Similar. Repeat logs or \n newlines
console.log("*\n**\n***\n**\n*")
//console.log("*")
//console.log("**")
//console.log("***")
//console.log("**")
//console.log("*")

console.log("Opgave 1.4 - Lav et program, hvor i definere en konstant eller variabel og programmet skriver hvilken type det er, i konsollen. (Altså om det er en int, string, bool osv.)")
//define some variables
let returnType1 = "Example",
  returnType2 = 24,
  returnType3 = false,
  returnType4;
//show, + ", " strings added for readability
console.log(returnType1 + ", " + returnType2 + ", " + returnType3 + ", " + returnType4)
console.log(typeof returnType1, typeof returnType2, typeof returnType3, typeof returnType4)

console.log("Opgave 1.5 - Print svarene på følgende matematiske operationer ved at skrive det direkte ind i Console.log()")
//
console.log("10-5 = " + (10-5))
console.log("25/3 = " + (25/3))
console.log("25%3 = " + (25%3))
console.log("25%2 = " + (25%2))
console.log("3**2 = " + (3**2))

console.log("Opgave 1.6 - Skriv i konsollen kombinationen af de her 2 strings ved brug af deres navn:")
let tekst1 = "Hello"
let tekst2 = " World!"
console.log(tekst1 + tekst2)

console.log("Opgave 1.7 - Udskriv længden af den her string “GF2 Online” - altså antal tegn")
let stringLength = "GF2 Online"
console.log(stringLength + " is this long: " + stringLength.length)

console.log("Opgave 1.8 - Lav et program som skriver et tilfældigt tal i konsollen")
console.log(Math.random())

console.log("Opgave 1.9 - Find ud af hvad hver linje skriver ud i vores konsol og forklar hvorfor")
//
let number = 23;
console.log(number) //shows number variable
console.log(number = "23") //typeof number; is assigned to now be "23", string instead of number
console.log(number == "23") //compares number variable to 23, true as they are equal")
console.log(number === "23") //compares number variable to string 23, true as they are equal and same type after reassigned
console.log(number -= 23) //subtracts 23 from number variable and assigns as new value, now a number
console.log(number += 23) //adds 23 from number variable and assigns as new value
console.log(number += "23") //adds string 23 to number variable and assigns. Because of string type, 23+23 = 2323. Now a string.
console.log(number -= "46") //subtracts 46. Subtract defaults to numbers if convertable, thus 2323 - 46 = 2277. Now a number.
console.log(number != "23") //Checks if 23 is not 2277. It is not, so true statement
console.log(number **= 2) //2277 squared, 2277*2277 = 5184729
//console.log(typeof number)
//Final assigned value of number is number 5184729



// ----------------------
console.log("\n\nCONDITIONALS - IF/ELSE STATEMENTS\n")
console.log("Opgave 2.1 - I skal skrive et stykke kode som fortæller om et tal (int) er lige eller ulige.")
let x = 2 //choose number
if (x%2 == 0) { //Modulus; even numbers are perfectly divisible by 2
  console.log("Even")
}
else { //any remainder is odd
  console.log("Odd")
}


console.log("Opgave 2.2 - I skal skrive et stykke kode som fortæller om 5 går op i det tal som i vælger (int). \nHvis den går op i det skal i skrive: 5 går op i (det tal i har valgt)")
x = 255 //choose new number for x
if (x%5 == 0) {
  console.log("5 går op i " + x)
}
else {
  console.log("5 går ikke op i " + x)
}


console.log("Opgave 2.3 - Lav opgaven igen, men i stedet for selv at vælge et tal skal i lave sådan at den selv vælger et tal mellem 0 og 100.")
//find randomInt function. Math.random returns float between 0 and 1. * max multiplies and sets the integer range. Math.floor rounds down to integer
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

x = getRandomInt(101) //0 and 100 inclusive
if (x%5 == 0) {
  console.log("5 går op i " + x)
}
else {
  console.log("5 går ikke op i " + x)
}


console.log("Opgave 2.4 - Lav et program som fortæller jer hvilke af de her 3 tal der er størst. a = 25; b = 33; c = 12;")
let a = 25,
  b = 33,
  c = 12;
if (a > b && a > c) {
  console.log(a + " er størst.")
}
else if (b > a && b > c) {
  console.log(b + " er størst.")
}
else if (c > a && c > b) {
  console.log(c + " er størst.")
}


console.log("Opgave 2.5 - Lav et program der fortæller hvor varmt det er ud fra en temperatur.")
let temperature = 39.8
if (temperature < 1) {
  console.log("Det er frostvejr")
}
else if (temperature < 10) {
  console.log("Det er meget koldt")
}
else if (temperature < 20) {
  console.log("Det er koldt")
}
else if (temperature < 30) {
  console.log("Det er normalt vejr")
}
else if (temperature < 40) {
  console.log("Det er varmt")
}
else if (temperature >= 40) {
  console.log("Det er meget varmt")
}


console.log("Opgave 2.6 - Lav et program som omformer tal til ugedage ved brug af conditionals")
let numWeekDay = 2
switch(numWeekDay) {
  case 1:
    console.log("Monday")
    break
  case 2:
    console.log("Tuesday")
    break
  case 3:
    console.log("Wednesday")
    break
  case 4:
    console.log("Thursday")
    break
  case 5:
    console.log("Friday")
    break
  case 6:
    console.log("Saturday")
    break
  case 7:
    console.log("Sunday")
    break
  default: 
    console.log("Every day is potato day")
}

//===============================
//===============================
console.log("\n\nSIMPLE LOOPS OPGAVER\n")
console.log("Opgave 3.1 - Lav et program som skriver alle tal fra 1 til 100 ud i konsollen en efter en.")
//i used as "iterator"
let i = 1;
while (i <= 100) {
    console.log(i); 
    i++; //shortened form of i = i+1, incrementing
}

console.log("Opgave 3.2 - Lav et program som skrive alle tal fra 1 til 102, på følgende måde")
i = 1;
while (i < 102) {
  console.log(i++ + " " + (i++) + " " + (i++)) //print i, then increment +1, repeat
}

console.log("Opgave 3.3 - FizzBuzz")
//while loop version
console.log("FizzBuzz while-loop version")
i = 1
while (i <= 100) { //no limit specified. Let's keep it to 100
  if (i%5 === 0 && i%3 === 0) {
    console.log("FizzBuzz")
  }
  else if (i%3 === 0) {
    console.log("Fizz")
  }
  else if (i%5 === 0) {
    console.log("Buzz")
  }
  else {
    console.log(i)
  }
  i++ //iterate i at end
}

//for loop version 
console.log("FizzBuzz for-loop version")
for (i = 0 ; i <= 100 ; i++) {//let i = 0 (already defined here) ; repeat if i < 100 is true ; iterate i+1
  if (i%5 === 0 && i%3 === 0) {
    console.log("FizzBuzz")
  }
  else if (i%3 === 0) {
    console.log("Fizz")
  }
  else if (i%5 === 0) {
    console.log("Buzz")
  }
  else {
    console.log(i)
  }
}

console.log("Opgave 3.4 - Lav et program som udregner det faktorielle af et tal med et loop.")
//hmm...
console.log("While loop factorials")
let numFactorial = 112
i = numFactorial //set i to selected number
while (i >= 1) { //continue until we're at or below 1. I choose to include 1 and the number itself as factorials
  if (numFactorial%i === 0) { //divide chosen number numFactorial by every number from itself to 1
    console.log(i)
  }
  i-- //decrement i, true or not
}

console.log("For loop factorials")
numFactorial = 112
//i = numFactorial //set i to selected number in for loop
for (i = numFactorial ; i >= 1 ; i--) {
  if (numFactorial%i === 0) {
    console.log(i)
  }
}

console.log("Opgave 3.5 - Lav et program som skriver multiplikationstabel for et givet tal")
let numMultTable = 33
for (i = 1 ; i <=10 ; i++) {
  console.log(numMultTable + " x " + i + " = " + (numMultTable*i))
}

numMultTable = 12
i = 1
while (i <= 10) {
  console.log(numMultTable + " x " + i + " = " + (numMultTable*i++))
}

//==================================
//==================================
console.log("\n\nARRAYS OPGAVER\n")
console.log('Opgave 4.1 - Skriv “Viborg” i konsollen ved at trække den ud fra følgende array')
let byer = ["Randers", "Viborg", "Aarhus","København"]
console.log("byer[1] = " + byer[1]) //Husk [] til arrays, . til objekter

console.log('Opgave 4.2 - Tilføj “Skive” til denne array')
byer.push("Skive") //array.push to append new value
console.log(byer)

console.log('Opgave 4.3 - Erstat den værdi, uden at ændre direkte i arrayet, som ikke passer ind, så arrayet stemmer:')
let talrække = [0, 1, 0, 3, 4, 5, 6]
console.log(talrække)
talrække[2] = 2 //index 0, 1, 2 etc.
console.log(talrække)

console.log('Opgave 4.4 - Skriv, i konsollen, den største værdi fra følgende array. Selvfølgelig ikke manuelt.')
talrække = [1, 2, 3, 4, 11, 55, 99, 100]
console.log(talrække)
//Loop possible. Found Math.max() function. ... is Spread, i.e. apply each array value, not array as whole
console.log(Math.max(...talrække) + " er størst")

console.log("Opgave 4.5 - Sorter den her array")
talrække = [0, 12, 0, 22, 300, 4, 5]
console.log(talrække)
talrække.sort() //default sort only notices first value. e.g. 300 is lower than 4, because 4 > 3
console.log(talrække)
talrække.sort(function(a, b){return a - b}) //https://www.w3schools.com/js/js_array_sort.asp . 
console.log(talrække)

console.log("Opgave 4.6 - sorter den i omvendt rækkefølge")
talrække.sort(function(a, b){return b - a}) //https://www.w3schools.com/js/js_array_sort.asp . 
console.log(talrække)