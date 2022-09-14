// the value that will be logged would be 10, as the argument is only
// giving the parameter only the num variable
function myFunction(num, num1) {
    console.log(num1)
}

let num = 10
let num1 = 2

myFunction(num)
// the answer was undefined as the parameter was expecting 2 variables
// but was only given 1