new Promise((resolve, reject)=>{
    resolve("success")
})
.then(()=>{
    throw Error ("oh no")
})
.catch(error=>{
    return "actually, that worked"
})
.catch(error=>console.log(error.message))