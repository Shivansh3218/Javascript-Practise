// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).


let nums = [1,1,10000,10000,10000,10000,10000,2]
let count = 0
let ex =[]
for(let i=0;i<nums.length;i++){
  for( let j=i+1;j<nums.length;j++){
      if(nums[i]== nums[j]){
          nums[j]= "_"
      }
  } 
  if(nums[i]=="_") count++
}
nums = nums.sort()
nums = nums.sort((a,b)=>{
    return a-b
})
for(let i=0;i<=count;i++){
    ex.push(nums[i])
}
console.log(ex, count)