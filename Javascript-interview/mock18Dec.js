// let arr = [1,2,3]
// let newArr= []
// for(let i=0;i<arr.length;i++){
// if(arr[i]%2==0) newArr.push(arr[i])
// }
// console.log(newArr)

 
// function show(i){
//     setTimeout(function () {
//         console.log(i)
//       }, i * 1000)
// }

// for (var i = 1; i <= 5; i++) {
//   show(i)
//   }


// const obj = {
//     name: "Aditya",
//     nameFunc: function(){
//         alert(this.name);
//     }
// }


// const anotherobj = {
//     name: "Kiran"
// }

// Array.map(item => {
//     return <><div></div></>
// })

// anotherObj.__proto__ = obj

// obj.nameFunc.call(anotherobj)


// var array = [1, 2, 3, 4, 5]
// for(var i = 0; i < array.length; i++) {
//   setTimeout(() => {
//     console.log(array[i])
//   }, 1000);
// }

// (function (){
//     console.log("absc")
// })()

console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log(1)
// resolve(1)
})
// .then((e)=>console.log(e))
// console.log(promise1)
console.log('end');