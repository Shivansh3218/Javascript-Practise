const arr = [1, 2, [3, 4,[5, 6]], 67]

function flatter(arr) {
    let flattendArr = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            // flattendArr = flattendArr.concat(flat(arr[i]))
            flattendArr = flattendArr.concat(flatter(arr[i]))
        }
        else { flattendArr.push(arr[i]) }
    }
    return flattendArr
}
console.log(flatter(arr))


// function flat(arr) {
//     let flattendArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             flattendArr = flattendArr.concat(flat(arr[i]))
//         }
//         else flattendArr.push(arr[i])
//     }
//     return flattendArr
// }
// console.log(flat(arr))