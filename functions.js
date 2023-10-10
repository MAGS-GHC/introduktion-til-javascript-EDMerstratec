//testing HTML?
//function add() {
//    let a = document.getElementById("firstNumber").value
//    let b = document.getElementById("secondNumber").value
//    return a + b
//}


myFunction()

function myFunction() {
    console.log("Hello World");
    return;
   }

console.log(addSum(1,5));
function addSum(a,b) {
    return (a + b)
}

//toLowerCase built in
checkJa("ja")
function checkJa(x) {
    if (x.toLowerCase() === "ja") {
        return console.log("True")
    }
    else {
        return console.log("False")
    }
}

// 5.4, Password true/false checker
let passWord = "Howdy"
console.log(checkPass("how"))
function checkPass(t) {
    if (t === passWord) {
        return true }
    else {return false}

}

let username = "Bryan"
console.log(checkUsername("Bryan"))
function checkUsername(x) {
    if (x.toLowerCase() === username.toLowerCase()) {
    return true
    }
    else {return false}
}