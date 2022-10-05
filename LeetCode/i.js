// Input: nums = [1,2,3,3]
// Output: 3
let  nums = [1,2,3,3]
let count=0
for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
        if(nums[i]==nums[j]){
            count = nums[i]
        }
    }
}
// return count
console.log(count)