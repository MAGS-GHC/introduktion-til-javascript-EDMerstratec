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