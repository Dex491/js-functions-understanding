// At the end of the program the counter variable would be 3 as it starts
// as 1 and when the function is ran 1 would be added to it, which is
// done twice
let counter = 1

function myFunction() {
    counter++
    console.log(counter);
    return counter
}

myFunction()
const num = myFunction()