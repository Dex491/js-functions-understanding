// The value of result would be 1005 as num3 is defined as 1000, and num1 is given
// the value of 5
function myFunction(num1, num2, num3) {
  return num1 + num3
}
  
const num1 = 20
const num2 = 200
const num3 = 1000
  
const result = myFunction(5, 10, num3, 15)
console.log(result);