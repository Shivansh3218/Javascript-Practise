//The same program using Promise

let userleft = true  //What user is doing now
let userWatching = false
function watching(){   // Total work inside a function
    return new Promise((resolve, reject) => { // Promise if user left or still watching
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
        }else{  //Triggered if both reject conditions are not matched as user watching is true and user left is true
            resolve ("The program was a success")
        }
    })
} 

watching().then((message)=>{ //Then is only used for success ful program run
    console.log("sucess:"+ message)
}).catch((error)=>{    //Catch is used to find the error in code output
    
    console.log(error.name + " "+ error.message)
})