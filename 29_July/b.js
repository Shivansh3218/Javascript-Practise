// Recursion program to return number of digits in a number
let num = 2131
var count =0
function recursion(num){
if(num>0){
  count ++
 recursion(Math.floor(num/10))
}
return count
}

console.log(recursion(num))