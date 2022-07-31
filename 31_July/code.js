let a = 3;
let b = "3";
console.log(a == b)

let arr1  =[1,2,3]


// let arr3 = [] 
// for(let i=0;i<arr1.length;i++){
    // arr3[i]=  arr1[i]+arr2[i]
// }
console.log(arr3)
let arr3 = arr1.map((x)=>{
    return x*x
}
)
console.log(arr3)

let id = setTimeout(()=>{
    console.log("timeout")
}, 1000)

let obj = {
    Name : "Shivansh"
    ,age : 22
    ,birthday : 29
}
console.log(Object.keys(obj))

let arr= [4,5,6]
let [num1, num2] = arr
console.log(num1,num2)