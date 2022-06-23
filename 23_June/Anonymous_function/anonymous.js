TRYING ANONYMOUS FUNCTION FOR FIRST TIME FOR MULTIPLICATION OF 2 NUMBERS


let abc = function (a,b){// function defined with no name and stored in a variable
    return a*b
}
console.log(abc(10,15))// Calling a function

//CONSTRUCTION OF IIFE FUNCTION(Immediately Invoked function expression)
let abc = (function abc(n){
    let sum =0
        while(n>0){
            let dig = n%10
            sum= sum+dig**2
            n = Math.floor(n/10)
        }
        return sum
})(49);
console.log(abc)