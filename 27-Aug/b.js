
//CURRING FUNCTION

function add(a){
return (b)=>{
    if(b){
        console.log(a)
        return add(a+b)
    }
    return a
}
}
console.log(add(1)(2)(3)(4)())