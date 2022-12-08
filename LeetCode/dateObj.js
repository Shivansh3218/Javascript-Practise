// let date = new Date()
// console.log(date)
// console.log(date.getUTCDate())
// console.log(date.getMonth())
const sparce = [,1,,2,3,4]
let sum =0
for(const val in sparce){
    sum=sum+val
}
console.log(sum)