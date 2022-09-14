// The value is 102 as the result= num1+num2, because result is reassigned within the function.
function myFunction(num1, num2) {
    result = num1+num2
}
  
let result = 0
myFunction(100, 2)
console.log(result)