//MAP POLYFILL BASIC======---------
 Array.prototype.myMap = function(){
    console.log(this) //This refers to entire array
 }
 let num = [1,2,3]
 num.myMap()

 