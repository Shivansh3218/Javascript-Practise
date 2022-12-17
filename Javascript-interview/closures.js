//Closure

function prints(){
    let count = 0
    return function (){
        count++
        if(count%3==0) {console.log("printing")}
    }
}
let printing = prints()
printing()
printing()
printing()

//Using global variable


var count=0
function pass(){
   count++
   if(count%3==0){
    console.log("third")
   }
}
pass()
pass()
pass()