// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

////////////////////////////////////////////DDDDDDoubt

var restoreString = function(s, indices) {
    let arr2= []
    let str2=""
    for(let i=0;i<indices.length;i++){
       arr2.push(s[indices[i]])
        str2 =arr2.join("")
    }
    return {str2,arr2}
};
console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3]))