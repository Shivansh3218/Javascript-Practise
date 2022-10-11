let arr = [6,6,6,-18,6,7,8]
let abc =[...arr]
arr.sort()
let maxSum = arr[arr.length-1]+arr[arr.length-2]
// console.log(maxSum)
let sum =0
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[j]>0){
            sum= sum+arr[j]
        }   
    }
    if(sum>maxSum) {maxSum =sum}
    sum=0
}
if(sum<=maxSum){
    console.log(maxSum)
}else{
    console.log(sum)
}