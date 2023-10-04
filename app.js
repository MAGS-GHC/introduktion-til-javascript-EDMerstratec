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
console.log("CONDITIONALS - IF/ELSE STATEMENTS")
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