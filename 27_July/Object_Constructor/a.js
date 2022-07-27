//ARRAY CONSTRUCTOR METHOD -------
function person(fname,age,dept){ //Never use "" inside a function parameter
 return {
    fname : fname, //Value to be entered must not be written inside ""
    age: age,
    dept: dept
}
}
let shivansh = person("Shivansh",22,"Biochemistry") // Only place " " for taking value as input
console.log(shivansh)

// ARRAY CONSTRUCTOR METHOD USING THIS & NEW METHOD-----------------

function entry( name, company , salary , status){
    this.name = name; //This keyword inside a function 
    this.company = company;
    this.salary = salary;
    this.status = status;
}
let student1 = new entry("Xyz","Google", "50LPA","Settled")
let student2 = new entry("Xyz","Google", "50LPA","Settled")
let student3 = new entry("Xyz","Google", "50LPA","Settled")
let student4 = new entry("Xyz","Google", "50LPA","Settled")
let student5 = new entry("Xyz","Google", "50LPA","Settled")

console.log(student1)
console.log(student2)
console.log(student3)
console.log(student4)
console.log(student5)



