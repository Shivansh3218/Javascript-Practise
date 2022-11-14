// let obj = {
//     a:1,b:2,c:3
// }
// let arr =[]
// // let arr2 =[]
// for(let key in obj){
//     arr.push(key)
// }
// let arr2 =Object.values(obj)
// console.log(arr2)

let obj = { "a": 3000, "b": 200, "c": 1050 }
let n = 1000
let newObj = {}
let arr =[obj]
let o={}
// for(let i in obj){
//     if(obj[i]>n) {
//    o =  {i:obj[i]}
//   arr.push(o)}
//   o={}
// }
const output = arr.reduce((acc, curr) => {
    if (curr < 30) {
        acc.push(curr)
    }
    return acc
}, []);
console.log(arr)