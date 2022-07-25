//Array Destructuring 
let arr = [1,2,3,4,4,5]
let [num1, num2]= arr
// console.log(num1, num2)

//Advance Destructuring of array  by assigning values to elements

let Person = [ "Shivansh ", 22, "Srinagar"]

let [name , age , city] = Person

// console.log(name, age, city)

// For nested arrays

let nested = [ "Prti", "microbiology", [ "No ", "Yes"]]

// let  [Id, dept , [Married , working]]= nested

// console.log(working)

// Destructuring by using a function

function fun(){
// console.log(Id)
// console.log(dept)
return (["Subee", "Biochem"])
}

let [id, department] =fun()

console.log(department)