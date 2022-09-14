// the logs would be a: 100, b: 20 and c: 3 as line 420 reassigns
// a, 409 reassigns b and c stays as it was assigned on 418
function myFunction(a) {
    let b = 20
    
    console.log("a:", a)
    console.log("b:", b)
    console.log("c:", c)
}
  
let a = 1
let b = 2
let c = 3
  
myFunction(100)