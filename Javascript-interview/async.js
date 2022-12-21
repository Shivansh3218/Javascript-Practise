async function async(){
 let promise =  new Promise((res)=>{
     setTimeout(()=>{
        res(1)
     },2000)
 })
 console.log(await promise)
}

async()