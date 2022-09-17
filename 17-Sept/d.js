let arr = [1,2,3,4,0]
arr2 =[]
for(let i=0;i<arr.length;i++){
    arr2.push(arr[arr[i]])
}
console.log(arr2)