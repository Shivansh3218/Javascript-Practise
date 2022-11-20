// let my = ()=>Promise.resolve("i am rs")

// function fun(){
//     my().then(res=>console.log(res))
//     console.log('second')
// }
// async function fun2(){
//     console.log(await my())
//     console.log('second')
// }

// fun()
// fun2()
// console.log(Promise.reject(5))

async function* range(s,e){
    for(let i=s;i<=e;i++){
        yield Promise.resolve(i)
    }
}
(async ()=>{
    const gen = range(1,3);
    for await (const item of gen){
        console.log(item)
    }
})()