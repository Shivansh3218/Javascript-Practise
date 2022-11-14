let str = "This is aircampus"

let arr = str.split(" ")
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i].charAt(0)) 
 arr[i]= arr[i].charAt(0).toUpperCase()+arr[i].slice(1)
}
console.log(arr)