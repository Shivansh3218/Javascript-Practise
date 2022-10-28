function fact(nums){
    if(nums==1) return 1
    return nums* fact(nums-1)
    
}
console.log(fact(5))

// CONSTRUCTOR METHOD IN JAVASCRIPT 

function obj(name,age,gender){
       this.name= name
        this.age = age
        this.gender= gender
}
let obj1 = new obj("Shivansh", 23, "male")
console.log(obj1)

// fACTORY METHOD
function fun(name , age, sex){
    return(
        {
            name: name,
            age:age,
            sex:sex
        }
    )
}
const man = new fun("subee",24,"female")
console.log(man)