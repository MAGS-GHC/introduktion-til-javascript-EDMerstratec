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