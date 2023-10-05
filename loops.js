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
  console.log(i + " " + (i+1) + " " + (i+2)) //print i, then increment +1, repeat
  i++ //i = i+1
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
console.log("While loop factors")
let numFactorial = 7
i = numFactorial //set i to selected number
while (i >= 1) { //continue until we're at or below 1. I choose to include 1 and the number itself as factorials
  if (numFactorial%i === 0) { //divide chosen number numFactorial by every number from itself to 1
    console.log(i)
  }
  i-- //decrement i, true or not
}

console.log("For loop factors")
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