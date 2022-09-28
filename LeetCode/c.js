let  arr = [1,1,1,1]
let count =0
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;i++){
        if(arr[i]==arr[j]){
            count++
        }
    }
}console.log(count)
return count