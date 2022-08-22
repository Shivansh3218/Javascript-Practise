//Callback Hell practise

let userleft = false
let userWatching = false

function watching(callback,errorcallback){
    if(userleft){
        errorcallback({
            name: "User Left",
            message :":("
        })
        }
        else if(userWatching){
            errorcallback({
                name : "USer is watching the screen",
                message:"I'm happy"
            })
        }else{
            callback("   Yes the program was success")
        }
    }
    watching((message)=>{
        console.log("Success"+ message)
    },  (error)=>{
        console.log(error.name + " " + error.message)
    })