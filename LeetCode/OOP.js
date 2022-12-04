// let student = {
//     college:"Abc"
// }
// let student2= Object.create(student)
// console.log(student2)
// delete student2
// console.log(student2.company)

// let abc = function foo(){
//     return 11
// }
// console.log(typeof abc)

let arr =[1,2,3,4,5,1,2,5]

let filteredArr = arr.filter((item,index)=>{
   return arr.indexOf(item)==index
})

console.log(filteredArr)