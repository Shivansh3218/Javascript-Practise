// You are given an array of strings words and a string pref.

// Return the number of strings in words that contain pref as a prefix.

// A prefix of a string s is any leading contiguous substring of s.

// Example 1:

// Input: words = ["pay","attention","practice","attend"], pref = "at"
// Output: 2
// Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".
// Example 2:

// Input: words = ["leetcode","win","loops","success"], pref = "code"
// Output: 0
// Explanation: There are no strings that contain "code" as a prefix.

let arr = ["pay","attention","practice","attend"]
let pref = "at"
let count=0
for(let i=0;i<arr.length;i++){
    if(arr[i].startsWith(pref)){
        count++
    }
}
console.log(count)
return count