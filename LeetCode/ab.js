let nums = [1, 2, 3, 4, 6]
let target = 5
let left = 0
let right = nums.length - 1
while (left < right) {
    if (target === nums[left]) {
        console.log(left, "is left")
    }
    else if (target === nums[right]) {
        console.log(right, "is right")
    }
    left++
    right--
}
while (nums.includes(target)) {
    console.log("hello")
    if (left + 1 === target && right - 1 === target) {
        nums.splice(left, 0, target)
    }
    left++
    right--
}

console.log(nums)