// I assume the answer to be 20 because the "return" getSomeValue * getSomeValue multiple by my function (5).
function getSomeValue() {
    return 2
  }
  
  function myFunction(num1) {
    return getSomeValue() * getSomeValue()
  }
  
  const result = myFunction(5)
  console.log(result)

//   The answer is 4, because it multiples getSomeValue by itself