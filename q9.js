// The log would be undefined as although it is given num3 as an
// argument JS still reads the parameter as num1
function myFunction(num1, num2) {
    console.log(num3)
}

const num1 = 10
const num2 = 1
const num3 = 20

myFunction(num3, num1)
// JS is flexible enough that it recognises that the argument
// is num3 although the parameter was num1