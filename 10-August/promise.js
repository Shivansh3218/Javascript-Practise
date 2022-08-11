let momPromise = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        // resolve = ("Collected all of gold");
        reject = ("Killed by Adheera");
    },1000);
});
momPromise
.then((result )=>console.log("Climax" , result))
.catch((error)=>console.log(error)) ;