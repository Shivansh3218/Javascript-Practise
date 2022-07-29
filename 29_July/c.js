//Recursion to print factorial of a number

let num = 4
let fact = 1
function recursion(num) {
    if (num >= 1) {
        fact = fact * num
        recursion(num - 1)
    } 
    return fact
}
console.log(recursion(num))