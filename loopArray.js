let talrække = [0, 12, 0, 22, 300, 4, 5]
//
//for (i = 0; i < talrække.length; i++) {

//}
let sum = 0
let i = talrække.length
while (i > 0) {
    i--
    sum += talrække[i]
}
console.log(sum)


//6.2 foreach

talrække.forEach(writeVal)
function writeVal(x) {
    console.log(x)
}

//6.3 return high number index
let talrække1 = [0, 12, 0, 22, 300, 4, 5, 12, 12, 212, 12];
let talrække2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 122];

console.log(highIndex(talrække1) + " " + highIndex(talrække2))

function highIndex(x) {
    //return Math.max(...x)
    return [x.indexOf(Math.max(...x)), Math.max(...x)]
}

//opgave 6.4 count the 12s in talrække1

let counter = 0
talrække1.forEach(countTwelve)
function countTwelve(x) {
    if (x === 12) {
        counter++
    }
}
console.log("We have this many 12s: " + counter)

//opgave 6.5 count > 0
let talrække3 = [0, -12, 0, -22, -300, 4, 5, -12, 12, -212, 12]
counter = 0 
talrække3.forEach(checkPositive)
console.log(counter + " are positive")

function checkPositive(x) {
    if ( x > 0) {
        counter++
    }
}

//opgave 6.6 average, aggregate version
let talrække4 = [0, 12, 0, 22, 300, 4, 5, 1000, -50, 32]
counter = 0

talrække4.forEach(sumArray)
console.log(counter/talrække4.length)

function sumArray(x) {
    counter += x
}

//opgave 6.7 variance of array, no aggregate
//RETURN TO 

//function varianceArray(x) {
//    x.forEach(sumArray)
//    counter/x.length //Average
//}

//Opgave 6.8
const person1 = {
    firstName: "Anders",
    lastName: "Andersen",
    age: 29,
    eyeColor: "grøn"
  };
  const person2 = {
    firstName: "Mads",
    lastName: "Madsen",
    age: 32,
    eyeColor: "blå"
  };
  const person3 = {
    firstName: "Han",
    lastName: "Hansen",
    age: 55,
    eyeColor: "brun"
  };

  let persons = [person1,person2,person3]


console.log("sss")

for (let eyeAgeCheck of persons) {
    if (eyeAgeCheck.age > 30 && (eyeAgeCheck.eyeColor === "grøn" || eyeAgeCheck.eyeColor === "blå" || eyeAgeCheck.eyeColor === "rød")) {
        console.log(eyeAgeCheck.firstName + eyeAgeCheck.lastName)
     }
}
   
//6.9 star stairs? Max 2 loops

starStairs(12) //How many iterations before the longest ***? 
function starStairs(loopMid) {
let starStair = ""
for (let i = 0; i <= loopMid; i++) {
    starStair += "*"
    console.log(starStair)
}
for (let i = loopMid; i > 0; i--) {
    starStair = starStair.slice(0,-1)
    console.log(starStair)
}
}

//6.10 average of object-array, choose highest?
const myObject = {
    myArr1 : [2,3,19,2,-1,-9,10,33],
    myArr2 : [03,57,-8,2,-21,-10,11,32],
    myArr3 : [100,-100,200,-200,10]
}

//console.log(myObject.)
//function compareArrays(x) {
//    x.forEach(number => {
//        resultat += number;
//    })
//    return (resultat / x.length)
//}