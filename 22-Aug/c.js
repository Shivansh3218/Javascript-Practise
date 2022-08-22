//The same program using Promise

let userleft = false  //What user is doing now
let userWatching = true
function watching(){
    return new Promise((resolve, reject) => {
        if(userleft){
            reject({
                name: "User left",
                message: "Sed Lyf"
            })
        }
        else if(userWatching){
            reject({
                name : "user watching screen",
                message : "I'm happy"
            })
        }else{
            resolve ("The program was a success")
        }
    })
} 

watching().then((message)=>{
    console.log("sucess:"+ message)
}).catch((error)=>{
    console.log(error.name + " "+ error.message)
})