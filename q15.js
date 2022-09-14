// My answer is -100, because num1 is not defined and this is * 10.
function myFunction(num1) {
    if(true) {
      return -10
    }
  
    return num1 * 10
}
  
  const result = myFunction(5)
  console.log(result)

//   The function stops at the first return statement assigns the value -10