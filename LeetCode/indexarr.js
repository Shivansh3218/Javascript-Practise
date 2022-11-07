// Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
// Output: [0,4,1,3,2]
// Explanation:
// nums       index     target
// 0            0        [0]
// 1            1        [0,1]
// 2            2        [0,1,2]
// 3            2        [0,1,3,2]
// 4            1        [0,4,1,3,2]

let nums = [0, 1, 2, 3, 4]
let index = [0, 1, 2, 2, 1]
let num = 0
let arr =[]
for (let i = 0; i < nums.length; i++) {
    let a = index[i]
    let b = nums[i]
    arr.splice(a,0,b)
}
console.log(arr)