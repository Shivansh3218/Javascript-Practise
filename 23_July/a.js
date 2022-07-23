let arr = [1,2,3,4,5,6,7,8]
// let [num1,num2, ...num3] = arr
// console.log(num1,num2, num3)
let arr2 = [...arr]
arr2[4] = 86565
console.log(arr2)
console.log(arr)