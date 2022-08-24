//MAP POLYFILL BASIC======---------
//  Array.prototype.myMap = function(){
//     console.log(this) //This refers to entire array
//  }
//  let num = [1,2,3]
//  num.myMap()

 //--------A Mapped function to get the power of 2 of each element of the array

 Array.prototype.myMap = function(call){
    let result = []
    for(let i=0;i<this.length;i++){
    //    result.push(this[i]**2) 
    result.push(call(this[i]))
    }
    return result
 }
 let num =[1,2,4,5]
 console.log(num.myMap((el)=>{
    return el*1
 }));