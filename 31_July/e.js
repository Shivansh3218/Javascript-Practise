//Object creation and practise 

let obj = {
     name_of: "Shivansh",
    age : 22,
    dept :"biochem"
}
obj.name_of = "Hello world!"
// console.log(obj)

//OBJECT CONSTRUCTOR METHOD
function ob(name, age, dept){
    this.name =name,
    this.age = age,
    this.dept = dept
}
let student = new ob("Subee","22","Biochem")
// console.log(student)

//OBJECT FACTORY CONSTRUCTOR METHOD
function Str(name, age, dept){
    return {
        name : name,
        age: age,
        dept: dept
    }
}
let student2 = Str("sagar",22,"micro")
console.log(student2)