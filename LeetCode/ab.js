let nums = [1, 2, 3, 5, 6]
let target = 5
let left = 0
let right = nums.length - 1
function number(nums,target){
while (left < right) {
    if (target === nums[left]) {
      return left
    }
    else if (target === nums[right]) {
        return right
    }
    left++
    right--
}
// if(left===right){
//     if(target<=nums[left]){
//         return left
//     }
//     else left+1
// }
}

console.log(number([1, 2, 3,5, 6],5))