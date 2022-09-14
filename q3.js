// the value of num is 8 as the num variable is first defined as 10, the function is then
// ran twice which removes 1 from the value each time
function myFunction(num) {
    return num-1
}
let num = 10
num = myFunction(num)
num = myFunction(num)

console.log(num)