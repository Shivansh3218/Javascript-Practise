// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

let nums = [5,7,7,8,8,10], target = 8
let a =[]
let b= []
let left = 0 , index =0, arr=[]
let right = nums.length-1
while(left<right){
    // console.log(nums[left])
    if(nums[left]===target){
        a.push(left)
        console.log(a)
    }
    if(b[0]==undefined){
        if(nums[right]===target){
            b.push(right)
      }
    }
  
    left++
    right--
}
arr = [a[0],b[0]]
console.log(arr)