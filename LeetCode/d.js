// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true] 
// Explanation: If you give all extraCandies to:
// - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
// - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
// - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
// - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
// - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.

let candies = [2,3,5,1,3]                                 
let extraCandies = 3
let sortedCandies = [...candies]
let candy= candies.sort((a,b)=>a-b)
console.log(candy)
let arr= []
let max = candy[candy.length-1]
console.log(max)
for(let i=0;i<candies.length;i++){
    if(sortedCandies[i]+extraCandies>=max){
        console.log(sortedCandies[i]+extraCandies,max)
        arr.push(true)
    }else arr.push(false)
}
console.log(arr)
return arr
