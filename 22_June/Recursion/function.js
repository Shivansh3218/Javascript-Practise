//Function to print the factorial of a number


function y(num, fact){
   if(num>0){
    fact =fact*num
    return y(num-1,fact)
   }
  let n = fact
  console.log(n)
}
console.log(y(5,1))




// To print hello infinite times
// function y(n){
//     console.log("HELLO")
//     return y()
// }
// y()

//TO CONTROL THE TIMES HELLO IS PRINTED TRYING FOR 2 TIMES

// function y(n){
  
//     if(n<10){
//         console.log("HELLO")
//     return y(n+1)
// }
// }
// y(8)
