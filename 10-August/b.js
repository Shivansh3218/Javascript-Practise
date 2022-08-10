function getuser(id,callback){
setTimeout(()=>{
    let user = {id:id,username:"Shivansh"}
    callback (user)
    console.log("reading data from database")
},10000)
}

let printUser= (userData)=>{
    console.log(userData)
}

console.log("before")
let gituser = getuser(1,printUser)
console.log("after")