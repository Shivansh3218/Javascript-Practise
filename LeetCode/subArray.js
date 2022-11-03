// Input: arr = [1,4,2,5,3]
// Output: 58
// Explanation: The odd-length subarrays of arr and their sums are:
// [1] = 1
// [4] = 4
// [2] = 2
// [5] = 5
// [3] = 3
// [1,4,2] = 7
// [4,2,5] = 11
// [2,5,3] = 10
// [1,4,2,5,3] = 15
// If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
var array = function (arr) {
    let sum = 0
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            newArr.push(arr[j])
            console.log(newArr)
            if (arr[j] % 2 !== 0) {
            let abc= newArr.reduce((a,c)=>a+c)   
          
            sum+=abc
            abc=0
            newArr=[]
            }
        }
    }
    return sum
};
console.log(array([1,4,2,5,3]))