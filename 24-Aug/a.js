// Polyfill --- The making of our own functions using prototype keyword  Example-------

Function.prototype.myFun = function(){
console.log("Hello ")
}
function add(){}
add.myFun()

//From object only array and Functions are formed thus we can use them to create new custom functions

//For Array ------- 
Array.prototype.myFun2 = function(){ //To use capital letter for array name as well as function name  before prototype

    console.log(this[2]) //This here represents the array which will be applied with the method
}
let nums = [1,2,3,4,5]
nums.myFun2()