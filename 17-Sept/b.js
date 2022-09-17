let arr = [[1,2,3],[1,2],[3,4]]
let arr2 =[]
for(let i=0;i<arr.length;i++){
    let sum = 0
    for(let j=0;j<arr[i].length;j++){
        sum = arr[i][j]+sum
    }
    arr2.push(sum)
    arr2.sort((a,b)=>a-b)
}
console.log(arr2[arr2.length-1])
