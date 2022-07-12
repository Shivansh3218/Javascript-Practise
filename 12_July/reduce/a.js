let arr = [1,2,2,2,3,4,54]

let arr2 = arr.reduce((acc,curr)=>{
    return acc + curr
},0)
console.log(arr2)