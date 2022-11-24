// let obj = {name:"sjiv", age:"20"}
// var object = Object.create(obj);
// console.log(object)

let arr =[1,2,3,4,5]
let reducerArr = arr.reduce((acc,curr)=>{
    if(curr%2===0) acc+=1
    if(curr%2!==0 &curr!==5) acc+=3
    if(curr===5) acc+=5
    return acc
},0)

console.log(reducerArr)