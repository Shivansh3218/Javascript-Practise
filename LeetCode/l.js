// Guys try to solve this qn when you have time.
// [1,2,3,4] is input array
// Expected output [24, 12, 8, 6]
// Explanation:
// Product of all elements except current element
// [2*3*4, 1*3*4, 1*2*4, 1*2*3]

let input =[1,2,3,4]
let arr = []
for(let i=0;i<input.length;i++){
    let pro =1
    for(let j=0;j<input.length;j++){
        if(input[j]!=input[i])
        pro =pro*input[j]
   }
   arr.push(pro)
}
console.log(arr)