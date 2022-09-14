//The value of the function call is 2 because this will be the last value read by the code
 
function myFunction(num, num1) {
    console.log(num1)
}

let num = 10
let num1 = 2
  
myFunction(num1, num)
// The order you list the parameters does matter as it chooses num instead of num1