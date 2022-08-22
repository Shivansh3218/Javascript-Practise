//Promise.race function in promises =>  It only accepts the first promise that is resolved

let a = new Promise((res,rej)=>{
    res("Sucesssful run 1")
})
let b = new Promise((res,rej)=>{
    res("Sucesssful run 2")
})
let c= new Promise((res,rej)=>{
    res("Sucesssful run 3")
})

Promise.race([
a,b,c
]).then((m)=>{
    console.log(m)
})