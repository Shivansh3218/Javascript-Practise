//Prototypical Inheritance
// prototype is preliminary version
let per = {
    name: "Shivansh",
    age: 22,
    place: "srinagar",
    //When we add a function in per this will also be accessible in per2 example
    getaddress: function () { //we do not use = inside a function and only : colon is used 
        console.log(`${this.name}'s age is ${this.age} and lives in ${this.place}`)
    }
}
let per2 = {
    name: "Prati"
}
per2.__proto__ = per
console.log(per2.age)
// Proto makes per the parent of Per2 thus the properties of per are accessible in per 2 as well
per2.getaddress()//Even the per2 doesn't has the function we can access it, perk of prototype