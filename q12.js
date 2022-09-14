// The value of result will be 10 as the argument in myFunction
// is 5 which replaces the parameter, and the nested function
// getSomeValue returns 2, then the next line multiplies them
// together

function getSomeValue() {
    return 2
}
function myFunction(num1) {
    const num2 = getSomeValue()
    return num1 * num2
}

const result = myFunction(5)
console.log(result)