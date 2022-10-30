
for (var i = 0; i < 10; i++) {
    fun(i)
}
function fun(i) {
    return (setTimeout(() => {
        console.log(i)
    }))
}
fun()




// var array = [1, 2, 3, 4, 5]
// for(var i = 0; i < array.length; i++) {
//   delay(i)
// }
// function delay(i) {
//   setTimeout(() => {
//     console.log(array[i])
//   }, 1000);
// }
