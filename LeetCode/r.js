// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).


var mostFrequentEven = function (nums) {
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        if ((nums[i]) % 2 == 0) {
            if (!obj[nums[i]]) {
                obj[nums[i]] = 0
            }
            obj[nums[i]] += 1
        }
    }
    result = 10000000

    let obj_keys = Object.keys(obj)
    let obj_values = Object.values(obj)
    let maxi = Math.max(...obj_values)

    for (let i = 0; i < obj_keys.length; i++) {
        if (obj[obj_keys[i]] == maxi) {
            if (Number(obj_keys[i]) < result) {
                result = Number(obj_keys[i])
            }
        }
    }

    if (result == 10000000) {
        return -1
    }
    else {
        return result
    }

}

