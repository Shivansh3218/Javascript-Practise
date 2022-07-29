//Binary Search using recursion 
let arr = [1, 4, 2, 1, 45, 3566, 523, 233]
function binary(arr,target,start,end){
    if(start>end) return "Not Found"
    let mid = Math.floor((start+end)/2)
    if(arr[mid]==target) return ("found")
    if(arr[mid]>target) 
    return  binary(arr,target,start,mid-1)
    else if(arr[mid]<target) return binary(arr,target,mid+1,end)

}
console.log(binary(arr,523,0,arr.length-1))

////NOT COMPLETED