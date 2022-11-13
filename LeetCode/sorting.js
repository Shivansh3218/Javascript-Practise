// Input: s = "is2 sentence4 This1 a3"
// Output: "This is a sentence"
// Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.

let s = "is2 sentence4 This1 a3"
let arr = s.split(" ")
let arr2 = []
let arr3 = []
let arr4 = []
for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i].charAt(arr[i].length - 1))
}
for (let i = 0; i < arr.length; i++) {
  arr3[arr2[i]]= arr[i]
}
for(let i=0;i<arr3.length;i++){
    if(arr3[i])
 arr4[i]= arr3[i].slice(0,arr3[i].length-1)
}
let str = arr4.join(" ")
str.trim()
console.log(arr)
console.log(arr2)
console.log(arr3)
console.log(arr4)
console.log(str)

