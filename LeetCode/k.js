// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

let nums = [5,7,7,8,8,10], target = 8
let arr = []
arr.push(nums.indexOf(target))
arr.push(nums.lastIndexOf(target))
console.log(arr)