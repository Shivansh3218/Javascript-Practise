//Prototypical Inheritance
// prototype is preliminary version
 let per = {
    name: "Shivansh",
    age : 22,
 }
 let per2 ={
    name : "Prati"

 }

 per2.__proto__ = per
 console.log(per2.age)
// Proto makes per the parent of Per2 thus the properties of per are accessible in per 2 as well
