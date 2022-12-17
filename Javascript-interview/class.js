//Class is a syntactic sugar of a function and we can create multiple objects using class. It is also a user defined blueprint from which objects are created.

class Student{
    constructor(name, age){
        this.name = name,
        this.age = age
    }

    getData(){
        console.log(`${this.name} is of ${this.age} years`)
    }
}

class Player extends Student{
    constructor(name,age,place){
        super(name,age)
        this.place= place
    }
    getData(){
        console.log(`${this.name} is of ${this.age} years and is from ${this.place}`)
    }
}
let obj = new Player("Shivansh", 23, "Uttrakhand")

obj.getData()