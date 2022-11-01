let arr = [1, 2, 4, 5, 6, 3, 4, 6]
let count
function repeating() {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                return arr[i]
            }
        }
    }
}
// console.log(repeating())

//using for in loop

function second() {
    for (i in arr) {
        for (let j = i + 1; j < arr.length; j++) {
            // if (arr[j] == arr[i]) {
                console.log(arr[i])
            //     return arr[j]
            // }
        }
    }
}

console.log(second())