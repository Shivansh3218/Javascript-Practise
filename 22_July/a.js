let str = "India is a greaat country"
// console.log( str.charAt(2))
let  arr =str.split(" ")
for(let i = 0; i < arr.length; i++){
    // console.log(arr[i].charAt())
    arr[i] = arr[i].slice(3)
    
}
console.log(arr)