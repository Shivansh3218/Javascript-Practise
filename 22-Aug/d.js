//Promise.all function in promises

let a = new Promise((res,rej)=>{
    res("Sucesssful run 1")
})
let b = new Promise((res,rej)=>{
    res("Sucesssful run 2")
})
let c= new Promise((res,rej)=>{
    res("Sucesssful run 3")
})

Promise.all([
a,b,c
]).then((m)=>{
    console.log(m)
})