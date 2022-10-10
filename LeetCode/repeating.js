// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

let nums= [5,7,7,8,8,10], target = 8
let a ,b
let arr = []
for(let i =0;i<nums.length;i++){
    if(nums[i]==target){
        a= i
        i=nums.length
    }
}
for(let i =nums.length-1;i>=0;i--){
    if(nums[i]==target){
        b= i
        i=0
    }
}
arr.push(a,b)
console.log(arr)