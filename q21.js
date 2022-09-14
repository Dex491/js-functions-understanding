// the value of result is 30 as while result is a const, the data within can still
// be updated, there's a lot of unnecessary code but JS should still make it work
function myFunction(num1, num2) {
    const result = num1+num2
    return result
}
  
const result = myFunction(10, 20)
myFunction(100, 2)
console.log(result)