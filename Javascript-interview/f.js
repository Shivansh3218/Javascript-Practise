// async function abc() {
//    let b = await new Promise((res) => {
//         setTimeout(() => { res("hello") , 2000 })
//     })
//     return b
// }

// let b = new Promise((res) => {
//     res("hello")
// })
//  .then((r)=>{setTimeout(() => { console.log(r), 2000 })})
// console.log(abc())
// console.log("ehello world")
// console.log(abc().then((r)=>setTimeout(()=>{console.log(r)})))
// console.log("ka")


  let promise1 =  new Promise(resolve =>  resolve("first"))
  .then((res)=>console.log(res))
  
  function abc(){
    return function bcd(){
      setTimeout(()=>{console.log("Second")},2000)
    }
  }
  abc()()

let promise = new Promise((res)=>res("last"))
.then((r)=>{setTimeout(()=>console.log(r),2000)})


// setTimeout(()=>console.log("Last"),2000)