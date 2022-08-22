//BASIC PROMISE PROGRAM

let promise = new Promise((resolve,reject)=>{
    let a = 2+2
    if(a==2){
        resolve("Hello the program was success")
    }else{
        reject("The program failed miserably")
    }
})
.then((m)=> console.log(m))
.catch((m)=>{console.log(m)})