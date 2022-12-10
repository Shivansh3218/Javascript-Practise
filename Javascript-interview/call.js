// let obj = {
//     name:"Shivansh",
//     age:23,
//     print:function (){
//         console.log(this.name)
//     }
// }
// var name= "Subee"
// // obj.print()

// obj.print.call()
//
// const user1 = {
//     firstName: "Kuldeep",
//     lastName: "Chavan",
//     about: function () {
//       console.log(`my name is ${this.firstName} ${this.lastName}`);
//     },
//   };

//    firstName = "Virat";
//    lastName = "Kohli";
//    user1.about.call();

//   let user2 = {
//     firstName:"Shubee",
//     lastName:"Rawat"
//   }
//   user1.about.call(user2);


// let print= function(country){
//     console.log(this.name+" lives in "+country)
// }
//Call method can let us access the function that is not inside an object and also other function's object . You cannot store call funciton in any variable because it invokes directly  //FUNCITON BORROWING

// let obj2 = {
//     name:"Shubee",
//     age:23,
// }
// // print.call(obj,"India")
// // print.call(obj2,"japan")


// //Apply method is same as call as it helps us using the funtion that is not inside an object, but it accepts parameters in form of an array not individually //FUNCTION BORROWING

// let obj3 = {
//     name:"Shivansh",
//     age:23,
// }
// let prints= function(country, state){
//     console.log(this.name+" lives in  "+ country+ " " +state)
// }

// let obj4 = {
//     name:"Shubee",
//     age:23,
// }
// // prints.apply(obj3,["India", "uttarakhand"])
// // print.apply(obj2,"japan")


// //Bind function helps us store a borrowed funtion inside a variable and we can call it at our own convinience

// let printing = function(){
//     console.log(this.name, " is in class " + this.class)
// }
// let student = {
//     name:"Shivansh",
//     class:"Dev"
// }
// let bindStudent  =  printing.bind(student)
// bindStudent()


function a() {
return  b = 20
  var c = 30
}
a()
console.log(b)
console.log(c)