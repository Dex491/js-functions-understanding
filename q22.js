// the value of result would be 102 as myFunction gives the arguments of num 1 and 2 as
// 100 and 2, line 369 adds them together and defines them as result which is then returned
function myFunction(num1, num2) {
    let result = num1+num2
    console.log(result);
    return result
}
  
let result = 0
myFunction(100, 2)
console.log(result);

// Although the value is 102 within the function, because unlike the last question the value
// is the main value rather than a sub-value it cannot be redefined in this way if let is
// there like on line 369