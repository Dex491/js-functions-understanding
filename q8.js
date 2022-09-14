//  The const result should =14, because we are adding the variables num3 & num1

function myFunction(num1, num2) {
  console.log(num1, num2)     
  return num1 + num2
}
const num1 = 10
const num2 = 1
const num3 = 4

const result = myFunction(num3, num1)
console.log(result)