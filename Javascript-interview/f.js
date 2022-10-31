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

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 3000));
    return 10;
  }
  function f() {
    // shows 10 after 1 second
    wait().then(result => console.log(result));
  }
  f();
//   console.log("jello")
setTimeout(()=>{
    console.log("setime")
},2000)

let promise = new Promise((res)=>res("last"))
.then((r)=>{setTimeout(()=>console.log(r),3000)})