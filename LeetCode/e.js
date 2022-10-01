//Input using map function but map takes more space and memory than for loop

let candies = [2,3,5,1,3]                                 
let extraCandies = 3
let sortedCandies = [...candies]
let candy= candies.sort((a,b)=>a-b)
console.log(candy)
let arr= []
let max = candy[candy.length-1]
sortedCandies.map((value)=>{
    console.log(value+extraCandies+extraCandies,max)
    if(value+extraCandies>=max)
        arr.push(true)
        else arr.push (false)
})
return arr