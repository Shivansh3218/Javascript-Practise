let obj = {
    name:"Shivansh",
    age:23,
}
let print= function(country){
    console.log(this.name+" lives in "+country)
}
//Call method can let us access the function that is not inside an object and also other function's object . You cannot store call funciton in any variable because it invokes directly  //FUNCITON BORROWING

let obj2 = {
    name:"Shubee",
    age:23,
}
// print.call(obj,"India")
// print.call(obj2,"japan")


//Apply method is same as call as it helps us using the funtion that is not inside an object, but it accepts parameters in form of an array not individually //FUNCTION BORROWING

let obj3 = {
    name:"Shivansh",
    age:23,
}
let prints= function(country, state){
    console.log(this.name+" lives in  "+ country+ " " +state)
}

let obj4 = {
    name:"Shubee",
    age:23,
}
// prints.apply(obj3,["India", "uttarakhand"])
// print.apply(obj2,"japan")


//Bind function helps us store a borrowed funtion inside a variable and we can call it at our own convinience

let printing = function(){
    console.log(this.name, " is in class " + this.class)
}
let student = {
    name:"Shivansh",
    class:"Dev"
}
let bindStudent  =  printing.bind(student)
bindStudent()