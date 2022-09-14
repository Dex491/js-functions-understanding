// The value of result would be 10 as although line 237 defines
// getSomeValue as a variable it's unused but line 238 will still
// fetch getSomeValue from when it was defined as a function, 
// which returns 2

function getSomeValue() {
    return 2
}

function myFunction(num1) {
    const num2 = getSomeValue()
    return num1 * getSomeValue()
}

const result = myFunction(5)
console.log(result)