// Input: nums = [0,1,2,2,4,4,1]
// Output: 2
// Explanation:
// The even elements are 0, 2, and 4. Of these, 2 and 4 appear the most.
// We return the smallest one, which is 2.

let nums = [0,1,2,2,4,4,1]
let count =0
let item
let maxCount =1
for(let i=0;i<nums.length;i++){
    for(let j=i;j<nums.length;j++){
        if(nums[i]==nums[j]){
            count++
            if(count<maxCount){
                maxCount=count
                item = nums[i]
            }
        }
        count =0
    }
}
console.log(item)