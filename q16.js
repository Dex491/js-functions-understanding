// the value of result would be 50, as all integers other than 0 are truthy so the
// if statement would be ignored and would real like 286
function myFunction(num1) {
  if(false) {
    return -100
  }
  
  return num1 * 10
}
  
  const result = myFunction(5)
  console.log(result);